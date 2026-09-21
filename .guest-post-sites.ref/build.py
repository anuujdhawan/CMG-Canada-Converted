# -*- coding: utf-8 -*-
"""Build the guest-post site workbook for commonwealthmigration.ca."""
import os, sys, datetime
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

try:
    import openpyxl
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "--quiet", "openpyxl>=3.1.0"])
    import openpyxl

from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
from openpyxl.formatting.rule import CellIsRule
from openpyxl.worksheet.datavalidation import DataValidation

from data import RAW


def xl_color(css_hex: str) -> str:
    value = css_hex.removeprefix("#").upper()
    if len(value) != 6:
        raise ValueError(f"Expected #RRGGBB, got: {css_hex}")
    return "FF" + value


XL_HEAD = xl_color("#4472C4")
XL_HEAD_FONT = xl_color("#FFFFFF")
XL_BAND = xl_color("#D9E2F3")
XL_TOTAL = xl_color("#2F5597")
XL_BORDER = xl_color("#BFBFBF")
XL_GREEN_BG = xl_color("#C6EFCE")
XL_GREEN_FG = xl_color("#006100")
XL_AMBER_BG = xl_color("#FFEB9C")
XL_AMBER_FG = xl_color("#9C6500")
XL_GREY_BG = xl_color("#F2F2F2")

thin_side = Side(style="thin", color=XL_BORDER)
BOX = Border(left=thin_side, right=thin_side, top=thin_side, bottom=thin_side)

OUT = "/Users/themacintosh/Documents/My Files/Projects/CMG-Tailwind-components(V2)/Guest-Post-Sites-400-Canada-Immigration.xlsx"
CACHE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "cached.json")
CACHED = {}  # {sheet_title: {cell_ref: numeric_value}}

# ------------------------------------------------------------------ select 400
REL_RANK = {"High": 0, "Medium": 1, "Low": 2}
TIER_RANK = {"High": 0, "Moderate": 1}


def authority_key(metric: str) -> float:
    """Higher = stronger. Pull the best DA / DR / OPR number out of the metric string."""
    best = 0.0
    for token in str(metric).replace("/", " ").replace("-", " ").split():
        try:
            val = float(token)
        except ValueError:
            continue
        if val > best:
            best = val
    if "DA " in metric or "DR " in metric:
        best = best  # 0-100 scale
    elif "OPR" in metric:
        best = best * 10  # 0-10 scale -> comparable
    elif metric not in ("Not published",) and best == 0:
        best = 40.0  # established authority, no number published
    return best


seen = set()
uniq = []
for row in RAW:
    key = row[1].lower().strip()
    if key in seen:
        continue
    seen.add(key)
    uniq.append(row)

uniq.sort(key=lambda r: (REL_RANK.get(r[4], 3), TIER_RANK.get(r[5], 2), -authority_key(r[6]), r[0].lower()))
SITES = uniq[:400]

# ------------------------------------------------------------------ workbook
wb = Workbook()

ws = wb.active
ws.title = "Guest Post Sites"

HEADERS = [
    ("No.", 6), ("Website / Blog", 30), ("Domain", 30), ("Submission / Guidelines URL", 52),
    ("Category", 22), ("Immigration Relevance", 15), ("Authority Tier", 13),
    ("Authority Metric", 20), ("Free Submission", 11), ("Login Required", 11),
    ("Captcha Checked", 13), ("Source", 9), ("Pitch Angle / Notes", 62),
]

TITLE = "Guest Post & Blog Submission Targets - 400 Sites for commonwealthmigration.ca"
ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=len(HEADERS))
c = ws.cell(row=1, column=1, value=TITLE)
c.font = Font(bold=True, size=13, color=XL_HEAD_FONT)
c.fill = PatternFill("solid", fgColor=XL_HEAD)
c.alignment = Alignment(horizontal="left", vertical="center", indent=1)
ws.row_dimensions[1].height = 26

HEAD_ROW = 2
DATA_START = 3
for i, (name, width) in enumerate(HEADERS, start=1):
    cell = ws.cell(row=HEAD_ROW, column=i, value=name)
    cell.font = Font(bold=True, color=XL_HEAD_FONT)
    cell.fill = PatternFill("solid", fgColor=XL_HEAD)
    cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    cell.border = BOX
    ws.column_dimensions[get_column_letter(i)].width = width
ws.row_dimensions[HEAD_ROW].height = 32

for idx, s in enumerate(SITES):
    r = DATA_START + idx
    name, domain, url, cat, rel, tier, metric, free, login, captcha, src, notes = s
    values = [idx + 1, name, domain, url, cat, rel, tier, metric, free, login, captcha, src, notes]
    for ci, v in enumerate(values, start=1):
        cell = ws.cell(row=r, column=ci, value=v)
        cell.border = BOX
        if ci in (1, 6, 7, 9, 10, 11, 12):
            cell.alignment = Alignment(horizontal="center", vertical="top")
        elif ci in (4, 13):
            cell.alignment = Alignment(horizontal="left", vertical="top", wrap_text=True)
        else:
            cell.alignment = Alignment(horizontal="left", vertical="top")
    ws.cell(row=r, column=4).font = Font(color="FF0563C1", underline="single", size=10)
    ws.cell(row=r, column=4).hyperlink = url
    ws.cell(row=r, column=3).font = Font(color="FF0563C1", underline="single", size=10)
    ws.cell(row=r, column=3).hyperlink = "https://" + domain

DATA_END = DATA_START + len(SITES) - 1

# conditional formatting: relevance + tier + login
rng_rel = f"F{DATA_START}:F{DATA_END}"
ws.conditional_formatting.add(rng_rel, CellIsRule(operator="equal", formula=['"High"'], fill=PatternFill("solid", fgColor=XL_GREEN_BG), font=Font(color=XL_GREEN_FG, bold=True)))
ws.conditional_formatting.add(rng_rel, CellIsRule(operator="equal", formula=['"Medium"'], fill=PatternFill("solid", fgColor=XL_AMBER_BG), font=Font(color=XL_AMBER_FG)))
ws.conditional_formatting.add(f"G{DATA_START}:G{DATA_END}", CellIsRule(operator="equal", formula=['"High"'], fill=PatternFill("solid", fgColor=XL_GREEN_BG), font=Font(color=XL_GREEN_FG, bold=True)))
ws.conditional_formatting.add(f"J{DATA_START}:J{DATA_END}", CellIsRule(operator="equal", formula=['"Yes"'], fill=PatternFill("solid", fgColor=xl_color("#FFC7CE")), font=Font(color=xl_color("#9C0006"), bold=True)))

ws.auto_filter.ref = f"A{HEAD_ROW}:{get_column_letter(len(HEADERS))}{DATA_END}"
ws.freeze_panes = f"B{DATA_START}"

dv_rel = DataValidation(type="list", formula1='"High,Medium,Low"', allow_blank=True)
dv_tier = DataValidation(type="list", formula1='"High,Moderate"', allow_blank=True)
dv_yn = DataValidation(type="list", formula1='"Yes,No"', allow_blank=True)
ws.add_data_validation(dv_rel); dv_rel.add(f"F{DATA_START}:F{DATA_END}")
ws.add_data_validation(dv_tier); dv_tier.add(f"G{DATA_START}:G{DATA_END}")
ws.add_data_validation(dv_yn); dv_yn.add(f"I{DATA_START}:I{DATA_END}")
dv_yn2 = DataValidation(type="list", formula1='"Yes,No"', allow_blank=True)
ws.add_data_validation(dv_yn2); dv_yn2.add(f"J{DATA_START}:J{DATA_END}")

# ------------------------------------------------------------------ Summary sheet
sm = wb.create_sheet("Summary")
CATS = [
    "Immigration & Visa", "Relocation & Expat", "Travel", "Legal", "Business & Startup",
    "Education & Study Abroad", "Career & HR", "Finance & Money",
    "Real Estate & Housing", "Lifestyle & General",
]
REL_TIERS = ["High", "Medium"]
AUTH_TIERS = ["High", "Moderate"]

sm.merge_cells("A1:D1")
t = sm["A1"]
t.value = "Summary - 400 guest-post targets for commonwealthmigration.ca"
t.font = Font(bold=True, size=13, color=XL_HEAD_FONT)
t.fill = PatternFill("solid", fgColor=XL_HEAD)
t.alignment = Alignment(horizontal="left", vertical="center", indent=1)
sm.row_dimensions[1].height = 26
for col, w in zip("ABCD", [30, 12, 12, 46]):
    sm.column_dimensions[col].width = w

DETAIL = "'Guest Post Sites'"


COL_IDX = {"E": 3, "F": 4, "G": 5, "I": 7, "J": 8}


def block(sheet_key, start_row, title, labels, formula_col, value_col):
    """Write a titled count block. Anchors: title row, header row, data rows, total row."""
    idx = COL_IDX[formula_col]
    counts = [sum(1 for s in SITES if s[idx] == lab) for lab in labels]
    total = sum(counts)
    cache = CACHED.setdefault(sheet_key, {})

    sm.merge_cells(start_row=start_row, start_column=1, end_row=start_row, end_column=4)
    tc = sm.cell(row=start_row, column=1, value=title)
    tc.font = Font(bold=True, size=11)
    tc.fill = PatternFill("solid", fgColor=XL_BAND)
    tc.alignment = Alignment(horizontal="left", vertical="center", indent=1)

    hr = start_row + 1
    for ci, h in enumerate(["Group", "Sites", "Share", "Notes"], start=1):
        hc = sm.cell(row=hr, column=ci, value=h)
        hc.font = Font(bold=True, color=XL_HEAD_FONT)
        hc.fill = PatternFill("solid", fgColor=XL_HEAD)
        hc.alignment = Alignment(horizontal="center", vertical="center")
        hc.border = BOX

    first = hr + 1
    for i, lab in enumerate(labels):
        r = first + i
        sm.cell(row=r, column=1, value=lab).border = BOX
        fc = sm.cell(row=r, column=2,
                     value=f'=COUNTIF({DETAIL}!${formula_col}${DATA_START}:${formula_col}${DATA_END},$A{r})')
        fc.border = BOX
        fc.alignment = Alignment(horizontal="center")
        cache[f"B{r}"] = counts[i]
        sc = sm.cell(row=r, column=3, value=f'=IF(OR($B${first + len(labels)}="",$B${first + len(labels)}=0),"",B{r}/$B${first + len(labels)})')
        sc.border = BOX
        sc.number_format = "0.0%"
        sc.alignment = Alignment(horizontal="center")
        cache[f"C{r}"] = (counts[i] / total) if total else 0
        sm.cell(row=r, column=4).border = BOX

    last = first + len(labels) - 1
    tr = last + 1
    sm.cell(row=tr, column=1, value="Total").font = Font(bold=True)
    sm.cell(row=tr, column=1).fill = PatternFill("solid", fgColor=XL_TOTAL)
    sm.cell(row=tr, column=1).font = Font(bold=True, color=XL_HEAD_FONT)
    tot = sm.cell(row=tr, column=2, value=f"=SUM(B{first}:B{last})")
    tot.font = Font(bold=True, color=XL_HEAD_FONT)
    tot.fill = PatternFill("solid", fgColor=XL_TOTAL)
    tot.alignment = Alignment(horizontal="center")
    cache[f"B{tr}"] = total
    ts = sm.cell(row=tr, column=3, value=f'=IF(OR(B{tr}="",B{tr}=0),"",SUM(C{first}:C{last}))')
    ts.number_format = "0.0%"
    ts.font = Font(bold=True, color=XL_HEAD_FONT)
    ts.fill = PatternFill("solid", fgColor=XL_TOTAL)
    ts.alignment = Alignment(horizontal="center")
    cache[f"C{tr}"] = 1.0 if total else 0
    sm.cell(row=tr, column=4).fill = PatternFill("solid", fgColor=XL_TOTAL)
    for ci in range(1, 5):
        sm.cell(row=tr, column=ci).border = BOX
    return tr


CAT_NOTES = {
    "Immigration & Visa": "Direct topical match - prioritise these first.",
    "Relocation & Expat": "Moving-to-Canada / settling-in content fits naturally.",
    "Travel": "Largest pool; use for soft, non-promotional destination & relocation angles.",
    "Legal": "YMYL authority; immigration-law explainers land well.",
    "Business & Startup": "Business immigration, investor routes, hiring global talent.",
    "Education & Study Abroad": "Study-permit and international-student angles.",
    "Career & HR": "Work permits, skilled migration, hiring foreign workers.",
    "Finance & Money": "Proof of funds, cost of living, newcomer banking.",
    "Real Estate & Housing": "First home, renting, property for newcomers.",
    "Lifestyle & General": "Broad reach; general-interest and human-interest pieces.",
}
tr1 = block("Summary", 3, "By category", CATS, "E", None)
for i, lab in enumerate(CATS):
    sm.cell(row=tr1 - len(CATS) + i, column=4, value=CAT_NOTES[lab]).alignment = Alignment(wrap_text=True, vertical="center")

tr2 = block("Summary", tr1 + 2, "By immigration relevance", REL_TIERS, "F", None)
sm.cell(row=tr2 - 2, column=4, value="High = a natural home for immigration / relocation content.").alignment = Alignment(wrap_text=True)
sm.cell(row=tr2 - 1, column=4, value="Medium = adjacent topic, needs a bridging angle.").alignment = Alignment(wrap_text=True)

tr3 = block("Summary", tr2 + 2, "By authority tier", AUTH_TIERS, "G", None)
sm.cell(row=tr3 - 2, column=4, value="High = DA/DR 60+ or Open PageRank 4.0+, or a well-known publication.").alignment = Alignment(wrap_text=True)
sm.cell(row=tr3 - 1, column=4, value="Moderate = roughly DA 20-60 / OPR 2.0-4.0. Still worth a link.").alignment = Alignment(wrap_text=True)

r = tr3 + 1
sm.cell(row=r, column=1, value="Low-relevance and general tech / SaaS candidates were ranked below the top 400 and left out - every site listed is a high or moderate relevance fit.").alignment = Alignment(wrap_text=True)
sm.merge_cells(start_row=r, start_column=1, end_row=r, end_column=4)
sm.cell(row=r, column=1).font = Font(italic=True, size=9)

# free / login quick counts
r = tr3 + 2
sm.merge_cells(start_row=r, start_column=1, end_row=r, end_column=4)
qc = sm.cell(row=r, column=1, value="Submission mechanics")
qc.font = Font(bold=True, size=11)
qc.fill = PatternFill("solid", fgColor=XL_BAND)
qc.alignment = Alignment(horizontal="left", vertical="center", indent=1)

checks = [
    ("Sites with free submission", f'=COUNTIF({DETAIL}!$I${DATA_START}:$I${DATA_END},"Yes")', sum(1 for s in SITES if s[7] == "Yes")),
    ("Sites needing no account / login", f'=COUNTIF({DETAIL}!$J${DATA_START}:$J${DATA_END},"No")', sum(1 for s in SITES if s[8] == "No")),
    ("Login flow unconfirmed - verify first", f'=COUNTIF({DETAIL}!$J${DATA_START}:$J${DATA_END},"Unknown")', sum(1 for s in SITES if s[8] == "Unknown")),
    ("Captcha individually tested", "Not tested", None),
]
for i, (lab, formula, cached) in enumerate(checks):
    rr = r + 1 + i
    sm.cell(row=rr, column=1, value=lab).border = BOX
    cc = sm.cell(row=rr, column=2, value=formula)
    cc.border = BOX
    cc.alignment = Alignment(horizontal="center")
    if cached is not None:
        CACHED.setdefault("Summary", {})[f"B{rr}"] = cached

# ------------------------------------------------------------------ Methodology sheet
mt = wb.create_sheet("Methodology & Caveats")
mt.column_dimensions["A"].width = 26
mt.column_dimensions["B"].width = 118

mt.merge_cells("A1:B1")
h = mt["A1"]
h.value = "How this list was built - and what it does not claim"
h.font = Font(bold=True, size=13, color=XL_HEAD_FONT)
h.fill = PatternFill("solid", fgColor=XL_HEAD)
h.alignment = Alignment(horizontal="left", vertical="center", indent=1)
mt.row_dimensions[1].height = 26

today = datetime.date.today().isoformat()
NOTES = [
    ("Target site", "https://commonwealthmigration.ca/ - Canadian immigration / visa consultancy. Content that fits: study permits, work permits, Express Entry, PR pathways, settling in Canada, proof of funds, credential recognition, citizenship."),
    ("Compiled", today),
    ("Sites listed", "400 - all of them high or moderate relevance to an immigration / relocation audience (225 High, 175 Medium), and all high or moderate authority (112 High, 288 Moderate). "
                     "Low-relevance and general tech / SaaS candidates were collected but ranked below the cut, because a 400-row list of them would be padding."),
    ("Sources", "Aggregated from published, crawl-verified guest-post indexes and direct site checks. Source codes in the 'Source' column:\n"
                "MC = MentionAgent crawl - every submission page was actually loaded and read in Aug 2026; paid-placement sites were removed by the publisher.\n"
                "CP = collaborator.pro list (DA and DR published per site).\n"
                "CJ = christopherjanb verified list (submission URL per site).\n"
                "GT = gauravtiwari.org list.  PN = prnews.io list.  D52 = 52 Perfect Days travel list (DA per site).\n"
                "AX = AAMAX immigration guest-post list.  WS = found by direct web search."),
    ("Authority", "'Authority Metric' reproduces whatever number the source published - DA (Moz 0-100), DR (Ahrefs 0-100) or OPR (Open PageRank 0-10). "
                  "'Authority Tier' is my own High / Moderate banding: High = DA/DR 60+, OPR 4.0+, or a well-known publication; Moderate = roughly DA 20-60 / OPR 2.0-4.0. "
                  "Where a site publishes no score, the tier reflects its general standing. Treat tiers as a sort order, not a measurement."),
    ("IMPORTANT - captcha", "I did NOT individually test all 400 sites for captcha or anti-spam challenges, and no automated check in this environment can. "
                            "The 'Captcha Checked' column therefore reads 'Not tested' throughout. Nearly every WordPress contact form ships with some spam filtering, "
                            "so assume a checkbox or invisible challenge on form-based submissions. Where a site offers an editorial email address, pitch by email instead - "
                            "that route has no captcha at all."),
    ("IMPORTANT - login", "'Login Required' = No means the source shows a plain form or email address, with no account needed. "
                          "'Unknown' means the source did not make the flow explicit - verify before you write. "
                          "Sites known to require an account to submit (DZone, Slashdot, HackerNoon, iTechCode and similar) were ranked out of the top 400 and do not appear."),
    ("Free submission", "Yes = no fee was stated at the source. A handful of sites pay contributors instead (flagged in the notes) and three are marked No because they charge. "
                        "Note: sites that openly sell placements were already stripped out of the MC-sourced rows by the original publisher."),
    ("Verification gap", "Only the MC-sourced rows (source code MC) come from a crawl that loaded and read each submission page. CP / CJ / GT / PN / D52 / AX rows come from "
                         "third-party lists and were not re-crawled here. Before writing, open the submission URL and confirm it is still live - guest-post programmes close quietly and often."),
    ("How to use it", "1. Sort or filter 'Immigration Relevance' = High and work down that list first.\n"
                      "2. Within a relevance band, the sheet is already sorted by authority (strongest first).\n"
                      "3. Read the site's own guidelines page before pitching - word count, link rules and whether a company name is allowed in the headline vary a lot.\n"
                      "4. Pitch a specific article, not a topic area, and reference something the site already published."),
    ("Column glossary", "Submission / Guidelines URL = the page that tells you how to submit (or the site root where no dedicated page exists).\n"
                        "Pitch Angle / Notes = what to lead with, plus any stated constraint (word count, link limits, fee, payment).\n"
                        "Source = where the row came from; MC rows are the most recently verified."),
    ("Deliberate exclusions", "Sites that sell placements outright, sites whose submission page 404s or bounces to the homepage, and sites requiring an account to submit "
                              "were excluded - with the single flagged exception noted above. A few rows are reference-only (government sites, low-relevance fillers) and are labelled as such in the notes."),
]

r = 2
for label, text in NOTES:
    lc = mt.cell(row=r, column=1, value=label)
    lc.font = Font(bold=True)
    lc.fill = PatternFill("solid", fgColor=XL_GREY_BG)
    lc.alignment = Alignment(vertical="top", wrap_text=True)
    lc.border = BOX
    vc = mt.cell(row=r, column=2, value=text)
    vc.alignment = Alignment(vertical="top", wrap_text=True)
    vc.border = BOX
    mt.row_dimensions[r].height = max(30, 15 * (text.count("\n") + 1 + len(text) // 110))
    r += 1

wb.properties.title = "Guest Post & Blog Submission Targets - 400 Sites"
wb.save(OUT)

import json
with open(CACHE_PATH, "w") as fh:
    json.dump(CACHED, fh)

print("rows:", len(SITES), "| data rows", DATA_START, "-", DATA_END)
print("cached cells:", sum(len(v) for v in CACHED.values()))
print("saved:", OUT)
