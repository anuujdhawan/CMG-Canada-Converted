# -*- coding: utf-8 -*-
"""Inject cached values into the formula cells of the generated workbook.

openpyxl writes formulas without cached results, so previewers that read values
only (pandas, data_only=True, mail/WeChat previews) show them blank. LibreOffice
is not installed here, so instead of recalculating we inject the values we
already know, keeping the live formulas intact for Excel/WPS.
"""
import json, re, shutil, sys, zipfile, os

XLSX = "/Users/themacintosh/Documents/My Files/Projects/CMG-Tailwind-components(V2)/Guest-Post-Sites-400-Canada-Immigration.xlsx"
CACHE = "/Users/themacintosh/Documents/My Files/Projects/CMG-Tailwind-components(V2)/.guest-post-sites.ref/cached.json"

cached = json.load(open(CACHE))

with zipfile.ZipFile(XLSX) as z:
    names = z.namelist()
    wbxml = z.read("xl/workbook.xml").decode("utf-8")
    rels = z.read("xl/_rels/workbook.xml.rels").decode("utf-8")
    payload = {n: z.read(n) for n in names}

sheet_targets = {}
for m in re.finditer(r'<sheet[^>]*name="([^"]+)"[^>]*r:id="(rId\d+)"', wbxml):
    sheet_targets[m.group(1)] = m.group(2)
rel_map = {}
for tag in re.findall(r'<Relationship\b[^>]*/?>', rels):
    rid_m = re.search(r'Id="([^"]+)"', tag)
    tgt_m = re.search(r'Target="([^"]+)"', tag)
    if rid_m and tgt_m:
        rel_map[rid_m.group(1)] = tgt_m.group(1)

patched_total = 0
for sheet_name, cells in cached.items():
    rid = sheet_targets.get(sheet_name)
    if not rid:
        print("!! sheet not found:", sheet_name); sys.exit(1)
    target = rel_map[rid]
    path = "xl/" + target.lstrip("/").replace("xl/", "", 1)
    if path not in payload:
        path = "xl/" + target.lstrip("/")
    xml = payload[path].decode("utf-8")
    n = 0
    for ref, value in cells.items():
        if isinstance(value, float):
            vtext = repr(round(value, 10))
        else:
            vtext = str(int(value))
        # openpyxl emits an empty <v /> placeholder after the formula - replace it.
        pat = re.compile(r'(<c r="%s"(?:[^>]*?)>)(<f>.*?</f>)(?:<v\s*/>)?(</c>)' % re.escape(ref))
        xml, cnt = pat.subn(lambda m: m.group(1) + m.group(2) + "<v>" + vtext + "</v>" + m.group(3), xml, count=1)
        if cnt == 0:
            print("   missing formula cell:", sheet_name, ref)
        n += cnt
    payload[path] = xml.encode("utf-8")
    patched_total += n
    print(f"{sheet_name}: patched {n} cells in {path}")

tmp = XLSX + ".tmp"
with zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as z:
    for name in names:
        z.writestr(name, payload[name])
shutil.move(tmp, XLSX)
print("total patched:", patched_total)
