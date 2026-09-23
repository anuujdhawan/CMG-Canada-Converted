from copy import copy
from datetime import date
from pathlib import Path

from openpyxl import load_workbook

path = Path("outputs/backlink-outreach-progress-2026-09-23.xlsx")
wb = load_workbook(path)
ws = wb["Submission Log"]
headers = [c.value for c in ws[1]]
rows = [tuple(c.value for c in row) for row in ws.iter_rows(min_row=2)]
existing_keys = {(r[0], r[1], r[2], r[3]) for r in rows}

def append_if_missing(values):
    key = (values[0], values[1], values[2], values[3])
    if key in existing_keys:
        return
    r = ws.max_row + 1
    for i, value in enumerate(values, start=1):
        cell = ws.cell(r, i, value)
        if r > 2:
            src = ws.cell(r - 1, i)
            if src.has_style:
                cell._style = copy(src._style)
            if src.number_format:
                cell.number_format = src.number_format
    ws.row_dimensions[r].height = ws.row_dimensions[r - 1].height
    existing_keys.add(key)

append_if_missing((
    "CIHE", "https://cihe.ca", "https://cihe.ca/telling-canadas-stories/",
    "Mary Ann Shadd Cary and the Work of Building Canada", "",
    date(2026, 9, 23), "blocked", "https://cihe.ca/telling-canadas-stories/",
    "No backlink submitted. The form's Written Post Upload validator rejected DOCX, PDF, and TXT files; user chose to move on.", False,
))
append_if_missing((
    "ToVancouver", "https://tovancouver.com", "https://tovancouver.com/write-for-us",
    "A Newcomer's First Rainy Season in Vancouver: A Practical Preparation Guide",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "mailto:admin@tovancouver.com",
    "Original Vancouver-specific article sent from seolaunchers@gmail.com. The route accepts relevant links and plain-text email submissions. No public article or backlink yet.", False,
))
append_if_missing((
    "Canooq", "https://www.canooq.ca", "https://www.canooq.ca/contact",
    "The Newcomer Paperwork Map: What to Organize First in Canada",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "https://www.canooq.ca/contact",
    "Direct no-CAPTCHA contact form returned: Thanks. Canooq received your message. Article suggestion was submitted under Other; no public article or backlink yet.", False,
))
append_if_missing((
    "Relo.AI", "https://relo.ai", "https://relo.ai/write-for-us/",
    "How Canadian newcomers can evaluate settlement costs before choosing a city", "https://commonwealthmigration.ca/",
    date(2026, 9, 23), "submitted/pending", "https://relo.ai/write-for-us/",
    "Direct pitch form displayed: Your pitch was successfully submitted. Submitted as Relocation Professional with the CMG site as portfolio. Relo.AI charges for commercial or brand/resource links in article body; no paid placement requested and no article/backlink yet.", False,
))
append_if_missing((
    "Moving2Canada", "https://moving2canada.com", "https://moving2canada.com/about-us/become-our-partner/share-your-experience/",
    "A newcomer's first 30 days in Canada: a practical settlement checklist", "https://commonwealthmigration.ca/immigrate/express-entry",
    date(2026, 9, 23), "submitted/pending", "mailto:editor@moving2canada.com",
    "Tailored pitch sent from seolaunchers@gmail.com. Route allows 1-2 branded links in contributor bio; no public article or backlink yet.", False,
))

for row in range(2, ws.max_row + 1):
    if ws.cell(row, 1).value == "Moving2Canada":
        ws.cell(row, 4).value = "A Newcomer's First 30 Days in Canada: A Practical Settlement Checklist"
        ws.cell(row, 5).value = "https://commonwealthmigration.ca/immigrate/express-entry"
        ws.cell(row, 7).value = "submitted/pending"
        ws.cell(row, 8).value = "mailto:editor@moving2canada.com"
        ws.cell(row, 9).value = "Full original article sent from seolaunchers@gmail.com after the initial pitch. Backlink is in the author bio, as allowed by the site's guidelines. No public article or backlink yet."
        ws.cell(row, 10).value = False
        break

# Remove duplicate rows created by repeated continuation runs for this prospect,
# keeping the first historical record and updating it above.
moving_rows = [row for row in range(2, ws.max_row + 1) if ws.cell(row, 1).value == "Moving2Canada"]
for row in reversed(moving_rows[1:]):
    ws.delete_rows(row, 1)

def dedupe_exact(key_columns):
    seen = set()
    delete = []
    for row in range(2, ws.max_row + 1):
        key = tuple(ws.cell(row, c).value for c in key_columns)
        if key in seen:
            delete.append(row)
        else:
            seen.add(key)
    for row in reversed(delete):
        ws.delete_rows(row, 1)

dedupe_exact((1, 2, 3, 4))

wb.save(path)
print(path)
print(ws.max_row)

# Keep the dedicated two-column backlink-submission workbook in sync. These are
# submission records, not claims that the links are already public.
detail_path = Path("outputs/backlink-created-details.xlsx")
detail_wb = load_workbook(detail_path)
detail_ws = detail_wb["Backlink Details"]
detail_rows = {(detail_ws.cell(r, 1).value, detail_ws.cell(r, 2).value) for r in range(2, detail_ws.max_row + 1)}
for site_url in [
    "https://moving2canada.com/about-us/become-our-partner/share-your-experience/",
    "https://tovancouver.com/write-for-us",
    "https://www.canooq.ca/contribute",
]:
    pair = (site_url, "https://commonwealthmigration.ca/immigrate/express-entry")
    if pair not in detail_rows:
        r = detail_ws.max_row + 1
        for c, value in enumerate(pair, start=1):
            cell = detail_ws.cell(r, c, value)
            src = detail_ws.cell(r - 1, c)
            if src.has_style:
                cell._style = copy(src._style)
        detail_rows.add(pair)

url_ws = detail_wb["Backlink Submission URLs"] if "Backlink Submission URLs" in detail_wb.sheetnames else None
if url_ws is not None:
    url_rows = {(url_ws.cell(r, 1).value, url_ws.cell(r, 2).value) for r in range(2, url_ws.max_row + 1)}
    for pair in [
        ("https://moving2canada.com/about-us/become-our-partner/share-your-experience/", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://tovancouver.com/write-for-us", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://www.canooq.ca/contribute", "https://commonwealthmigration.ca/immigrate/express-entry"),
    ]:
        if pair not in url_rows:
            r = url_ws.max_row + 1
            url_ws.cell(r, 1, pair[0]); url_ws.cell(r, 2, pair[1])
            url_rows.add(pair)
detail_wb.save(detail_path)
print(detail_path)
