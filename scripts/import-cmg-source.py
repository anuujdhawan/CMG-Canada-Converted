#!/usr/bin/env python3
"""Import the supplied CMG DOCX/XLSX/PDF sources into build-time JSON.

The source files are treated as content, not as instructions. This importer
keeps the order of paragraphs, lists and tables from the DOCX so the web
renderer can style the material without rewriting it.
"""

import json
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

import openpyxl
from pypdf import PdfReader


W_NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
NS = {"w": W_NS}


def tag_name(element):
    return element.tag.rsplit("}", 1)[-1]


def clean_text(value):
    return re.sub(r"\s+", " ", value or "").strip()


def paragraph_text(paragraph):
    chunks = []
    for element in paragraph.iter():
        name = tag_name(element)
        if name == "t":
            chunks.append(element.text or "")
        elif name in {"tab", "br", "cr"}:
            chunks.append(" ")
    return clean_text("".join(chunks))


def paragraph_style(paragraph):
    style = paragraph.find("./w:pPr/w:pStyle", NS)
    return style.get(f"{{{W_NS}}}val", "") if style is not None else ""


def is_list_paragraph(paragraph):
    return paragraph_style(paragraph) == "ListParagraph" or paragraph.find("./w:pPr/w:numPr", NS) is not None


def table_rows(table):
    rows = []
    for row in table.findall("./w:tr", NS):
        cells = []
        for cell in row.findall("./w:tc", NS):
            paragraphs = [paragraph_text(p) for p in cell.findall("./w:p", NS)]
            nested = [table_rows(t) for t in cell.findall("./w:tbl", NS)]
            nested_text = [" / ".join(" | ".join(r) for r in group) for group in nested]
            value = " ".join(part for part in paragraphs + nested_text if part)
            cells.append(value)
        if any(cells):
            rows.append(cells)
    return rows


def append_list_block(blocks, text, ordered=False):
    if blocks and blocks[-1]["type"] == "list" and blocks[-1].get("ordered") == ordered:
        blocks[-1]["items"].append(text)
    else:
        blocks.append({"type": "list", "ordered": ordered, "items": [text]})


def parse_docx(docx_path):
    with zipfile.ZipFile(docx_path) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))

    pages = []
    current = None

    def flush():
        nonlocal current
        if current and current.get("h1"):
            first_paragraph = next((b["text"] for b in current["blocks"] if b["type"] == "paragraph"), "")
            current["hero"] = {"title": current["h1"], "lead": first_paragraph}
            current["title"] = current.get("seoTitle") or current["h1"]
            current["description"] = current.get("metaDescription", "")
            current["contentBlocks"] = current["blocks"]
            current.pop("blocks", None)
            pages.append(current)
        current = None

    for child in root.find("./w:body", NS):
        name = tag_name(child)
        if name == "p":
            text = paragraph_text(child)
            if text.startswith("URL:"):
                flush()
                url = text.split(":", 1)[1].strip()
                current = {"url": url, "path": re.sub(r"^https?://[^/]+", "", url) or "/", "blocks": []}
                continue
            if current is None or not text:
                continue
            if text.startswith("SEO Title Tag:"):
                current["seoTitle"] = text.split(":", 1)[1].strip()
                continue
            if text.startswith("Meta Description:"):
                current["metaDescription"] = text.split(":", 1)[1].strip()
                continue
            style = paragraph_style(child)
            if style == "Heading1":
                if not current.get("h1"):
                    current["h1"] = text
                else:
                    current["contentBlocks"].append({"type": "heading", "level": 1, "text": text})
            elif style == "Heading2":
                current["blocks"].append({"type": "heading", "level": 2, "text": text})
            elif style == "Heading3":
                current["blocks"].append({"type": "heading", "level": 3, "text": text})
            elif is_list_paragraph(child):
                num_pr = child.find("./w:pPr/w:numPr", NS)
                ordered = bool(num_pr is not None and num_pr.find("./w:ilvl", NS) is not None)
                append_list_block(current["blocks"], text, ordered)
            else:
                current["blocks"].append({"type": "paragraph", "text": text})
        elif name == "tbl" and current is not None:
            rows = table_rows(child)
            if rows:
                current["blocks"].append({"type": "table", "rows": rows})
    flush()
    return pages


def workbook_menu(xlsx_path):
    workbook = openpyxl.load_workbook(xlsx_path, data_only=True, read_only=True)
    sheet = workbook["Menu Structure"]
    top_items = []
    top = None
    group = None
    for row in sheet.iter_rows(min_row=2, values_only=True):
        level1, level2, level3, url, status = row
        if level1:
            top = {"label": str(level1).strip(), "groups": []}
            top_items.append(top)
            group = None
        if level2 and top is not None:
            group = {"label": str(level2).strip(), "pages": []}
            top["groups"].append(group)
        if level3 and top is not None:
            if group is None:
                group = {"label": top["label"], "pages": []}
                top["groups"].append(group)
            page_url = str(url or "").strip()
            path = re.sub(r"^https?://[^/]+", "", page_url) or "/"
            group["pages"].append({
                "label": str(level3).strip(),
                "href": path,
                "url": page_url,
                "status": str(status or "").strip(),
            })
    return top_items


def pdf_legal(pdf_path, path, title):
    reader = PdfReader(pdf_path)
    text = "\n\n".join((page.extract_text() or "").strip() for page in reader.pages).strip()
    return {"path": path, "title": title, "text": text, "pages": len(reader.pages)}


def main():
    if len(sys.argv) < 4:
        raise SystemExit("usage: import-cmg-source.py DOCX XLSX OUTPUT_DIR [LEGAL...]")
    docx_path, xlsx_path, output_dir = map(Path, sys.argv[1:4])
    legal_args = sys.argv[4:]
    output_dir.mkdir(parents=True, exist_ok=True)
    pages = parse_docx(docx_path)
    menu = workbook_menu(xlsx_path)
    legal = []
    legal_specs = [
        ("/legal/canada-immigration-disclaimer", "Disclaimer"),
        ("/legal/privacy-policy", "Privacy Policy"),
        ("/legal/refund-policy", "Refund Policy"),
        ("/legal/terms-of-service", "Terms of Use"),
    ]
    for pdf_arg, (path, title) in zip(legal_args, legal_specs):
        legal.append(pdf_legal(Path(pdf_arg), path, title))
    (output_dir / "cmg-pages.json").write_text(json.dumps(pages, ensure_ascii=False, indent=2) + "\n")
    (output_dir / "cmg-menu.json").write_text(json.dumps(menu, ensure_ascii=False, indent=2) + "\n")
    (output_dir / "cmg-legal.json").write_text(json.dumps(legal, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"pages": len(pages), "menuPages": sum(len(g["pages"]) for t in menu for g in t["groups"]), "legal": len(legal)}))


if __name__ == "__main__":
    main()
