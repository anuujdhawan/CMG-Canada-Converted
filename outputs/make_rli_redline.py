from __future__ import annotations

from copy import deepcopy
from datetime import datetime, timezone
from difflib import SequenceMatcher
from pathlib import Path
import zipfile

from lxml import etree


W_NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
XML_NS = "http://www.w3.org/XML/1998/namespace"
NS = {"w": W_NS}


def w(tag: str) -> str:
    return f"{{{W_NS}}}{tag}"


def text_of(paragraph: etree._Element) -> str:
    parts = paragraph.xpath(".//w:t | .//w:delText", namespaces=NS)
    return "".join(node.text or "" for node in parts).strip()


def style_of(paragraph: etree._Element) -> str:
    node = paragraph.find("w:pPr/w:pStyle", namespaces=NS)
    return node.get(w("val"), "") if node is not None else ""


def body_paragraphs(root: etree._Element) -> list[etree._Element]:
    body = root.find("w:body", namespaces=NS)
    return [child for child in body if child.tag == w("p")]


def nonempty(paragraphs: list[etree._Element]) -> list[tuple[int, etree._Element, str]]:
    return [(i, p, text_of(p)) for i, p in enumerate(paragraphs) if text_of(p)]


def next_change_id(root: etree._Element) -> int:
    values = []
    for element in root.xpath(".//*[@w:id]", namespaces=NS):
        try:
            values.append(int(element.get(w("id"))))
        except (TypeError, ValueError):
            pass
    return max(values, default=0) + 1


def make_change(tag: str, children: list[etree._Element], change_id: int, author: str, when: str) -> etree._Element:
    change = etree.Element(w(tag))
    change.set(w("id"), str(change_id))
    change.set(w("author"), author)
    change.set(w("date"), when)
    for child in children:
        change.append(child)
    return change


def deleted_text(text: str) -> etree._Element:
    run = etree.Element(w("r"))
    node = etree.SubElement(run, w("delText"))
    node.set(f"{{{XML_NS}}}space", "preserve")
    node.text = text
    return run


def inserted_children(paragraph: etree._Element) -> list[etree._Element]:
    return [deepcopy(child) for child in paragraph if child.tag != w("pPr")]


def make_deleted_paragraph(paragraph: etree._Element, old_text: str, change_id: int, author: str, when: str) -> etree._Element:
    result = deepcopy(paragraph)
    for child in list(result):
        if child.tag != w("pPr"):
            result.remove(child)
    result.append(make_change("del", [deleted_text(old_text)], change_id, author, when))
    return result


def make_inserted_paragraph(paragraph: etree._Element, change_id: int, author: str, when: str) -> etree._Element:
    result = deepcopy(paragraph)
    for child in list(result):
        if child.tag != w("pPr"):
            result.remove(child)
    result.append(make_change("ins", inserted_children(paragraph), change_id, author, when))
    return result


def make_replacement_paragraphs(
    paragraph: etree._Element,
    old_text: str | None,
    change_id: int,
    author: str,
    when: str,
) -> tuple[list[etree._Element], int]:
    if old_text is None:
        return [make_inserted_paragraph(paragraph, change_id, author, when)], change_id + 1
    deleted = make_deleted_paragraph(paragraph, old_text, change_id, author, when)
    inserted = make_inserted_paragraph(paragraph, change_id + 1, author, when)
    return [deleted, inserted], change_id + 2


def strip_title_borders(root: etree._Element) -> None:
    for paragraph in root.xpath(".//w:p[w:pPr/w:pStyle[@w:val='Title']]", namespaces=NS):
        p_borders = paragraph.xpath("./w:pPr/w:pBdr", namespaces=NS)
        for border in p_borders:
            border.getparent().remove(border)
    for style in root.xpath(".//w:style[@w:styleId='Title']", namespaces=NS):
        for border in style.xpath("./w:pPr/w:pBdr", namespaces=NS):
            border.getparent().remove(border)


def enable_revision_view(settings_root: etree._Element) -> None:
    track = settings_root.find("w:trackRevisions", namespaces=NS)
    if track is None:
        settings_root.insert(0, etree.Element(w("trackRevisions")))
    view = settings_root.find("w:revisionView", namespaces=NS)
    if view is None:
        view = etree.Element(w("revisionView"))
        settings_root.insert(1, view)
    for key in ("markup", "insDel", "formatting", "comments"):
        view.set(w(key), "1")


def xml_bytes(root: etree._Element) -> bytes:
    return etree.tostring(root, xml_declaration=True, encoding="UTF-8", standalone="yes")


def create_redline(old_path: Path, new_path: Path, out_path: Path) -> None:
    author = "Anuj Dhawan"
    when = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")

    with zipfile.ZipFile(old_path, "r") as old_zip, zipfile.ZipFile(new_path, "r") as new_zip:
        old_root = etree.fromstring(old_zip.read("word/document.xml"))
        new_root = etree.fromstring(new_zip.read("word/document.xml"))
        settings_root = etree.fromstring(new_zip.read("word/settings.xml"))
        styles_root = etree.fromstring(new_zip.read("word/styles.xml"))

        old_paragraphs = body_paragraphs(old_root)
        new_paragraphs = body_paragraphs(new_root)
        old_items = nonempty(old_paragraphs)
        new_items = nonempty(new_paragraphs)
        old_texts = [item[2] for item in old_items]
        new_texts = [item[2] for item in new_items]

        by_new_index: dict[int, str | None] = {}
        opcodes = SequenceMatcher(None, old_texts, new_texts, autojunk=False).get_opcodes()
        for tag, i1, i2, j1, j2 in opcodes:
            if tag == "equal":
                for j in range(j1, j2):
                    by_new_index[j] = None
            elif tag == "replace":
                old_block = old_texts[i1:i2]
                for offset, j in enumerate(range(j1, j2)):
                    if not old_block:
                        by_new_index[j] = None
                        continue
                    if len(old_block) == 1:
                        source = old_block[0]
                    else:
                        source_index = round(offset * (len(old_block) - 1) / max(1, (j2 - j1 - 1)))
                        source = old_block[min(source_index, len(old_block) - 1)]
                    by_new_index[j] = source
            elif tag == "insert":
                for j in range(j1, j2):
                    by_new_index[j] = None

        # Headings changed as part of the editorial restructure. Keep the old heading
        # visible as a deletion beside its new heading, while genuinely new headings
        # remain tracked insertions.
        heading_map = {
            "A Canadian case study in Brampton": "A claimant arrives in Brampton",
            "Where the handoffs become a barrier": "The first handoff is from a claim to a case file",
            "Why fragmentation affects rights": "What the Brampton case study reveals",
            "A more usable pathway": "From signposting to continuity",
        }
        for j, (_body_index, paragraph, paragraph_text) in enumerate(new_items):
            if paragraph_text in heading_map:
                by_new_index[j] = heading_map[paragraph_text]

        change_id = next_change_id(new_root)
        new_index_by_body_index = {body_index: j for j, (body_index, _p, _t) in enumerate(new_items)}
        body = new_root.find("w:body", namespaces=NS)
        for body_index, paragraph in enumerate(list(new_paragraphs)):
            j = new_index_by_body_index.get(body_index)
            if j is None:
                continue
            old_text = by_new_index.get(j)
            replacements, change_id = make_replacement_paragraphs(paragraph, old_text, change_id, author, when)
            position = body.index(paragraph)
            body.remove(paragraph)
            for offset, replacement in enumerate(replacements):
                body.insert(position + offset, replacement)

        strip_title_borders(new_root)
        strip_title_borders(styles_root)
        enable_revision_view(settings_root)

        out_path.parent.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(out_path, "w", zipfile.ZIP_DEFLATED) as out_zip:
            for info in new_zip.infolist():
                name = info.filename
                if name == "word/document.xml":
                    out_zip.writestr(name, xml_bytes(new_root))
                elif name == "word/settings.xml":
                    out_zip.writestr(name, xml_bytes(settings_root))
                elif name == "word/styles.xml":
                    out_zip.writestr(name, xml_bytes(styles_root))
                else:
                    out_zip.writestr(name, new_zip.read(name))


if __name__ == "__main__":
    root = Path(__file__).resolve().parents[1]
    create_redline(
        root / "rli-canada-case-study-rebuilt.docx",
        root / "outputs/rli-canada-case-study-revised.docx",
        root / "outputs/rli-canada-case-study-revised-tracked.docx",
    )
    print(root / "outputs/rli-canada-case-study-revised-tracked.docx")
