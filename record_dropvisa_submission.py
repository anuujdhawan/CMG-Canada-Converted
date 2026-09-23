from openpyxl import load_workbook
from pathlib import Path

details = Path('outputs/backlink-created-details.xlsx')
wb = load_workbook(details)
ws = wb['Backlink Details']
row = ['https://dropvisa.com/write-for-us/', 'https://commonwealthmigration.ca/immigrate/express-entry']
if row not in [list(r) for r in ws.iter_rows(min_row=2, values_only=True)]:
    ws.append(row)
wb.save(details)

progress = Path('outputs/backlink-outreach-progress-2026-09-23.xlsx')
wb2 = load_workbook(progress)
log = wb2['Submission Log']
rows = [
    [
        'DropVisa',
        'https://dropvisa.com/write-for-us/',
        'Email-only; editorial review',
        'Submitted/pending',
        'Gmail Message sent confirmation; no public article URL',
        'Tailored 700–1,200-word article submission sent from the authorized Gmail account to contact@outreachmedia.io. The email includes the CMG Express Entry URL in the article and author bio. No public article permalink or backlink publication has been verified.',
        'Await editorial response; verify only if a public article is published and the CMG link opens',
        '2026-09-23',
    ],
    [
        'Canadian Institute for Historical Education',
        'https://cihe.ca/telling-canadas-stories/',
        'Direct story form with reCAPTCHA and file upload',
        'Blocked; not submitted',
        'https://cihe.ca/telling-canadas-stories/',
        'Current form requires a written-post upload and reCAPTCHA protection. The route is a historical-story campaign rather than a suitable promotional backlink article, so no submission was made.',
        'Exclude from this campaign; do not bypass reCAPTCHA or misrepresent editorial fit',
        '2026-09-23',
    ],
]
existing = {tuple(r) for r in log.iter_rows(min_row=2, values_only=True)}
for row in rows:
    if tuple(row) not in existing:
        log.append(row)
wb2.save(progress)
print(details)
print(progress)
