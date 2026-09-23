from openpyxl import load_workbook
from pathlib import Path
from datetime import date
p=Path('outputs/backlink-outreach-progress-2026-09-23.xlsx')
wb=load_workbook(p)
wb['Prospects'].append(['CERIS News Blog Resources','Canada','Education / newcomer settlement / practical information','Guest-post pitch form','https://ceris.ca/write-for-us/','https://ceris.ca/write-for-us/','Contact Form 7 pitch form; editorial review','Attempted; outcome unconfirmed','Fresh prospect','Current guidelines require original unpublished work of at least 1,000 words and allow pertinent high-quality links. Pitch entered and Submit activated, but the page remained unchanged with no confirmation or receipt. No backlink exists.','Not independently verified; do not assume DR/DA or dofollow','Attempted 2026-09-23; no confirmation returned'])
wb['Submission Log'].append(['CERIS News Blog Resources','https://ceris.ca/write-for-us/','Live guest-post pitch form; editorial review','Attempted; outcome unconfirmed','https://ceris.ca/write-for-us/','Pitch form accepted the fields, but after Submit the page remained unchanged and showed no success or receipt state. No backlink exists.','Do not retry automatically; follow up only if an authorized email route becomes available.',date(2026,9,23)])
wb.save(p)
print(p.resolve())
