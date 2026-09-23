from openpyxl import load_workbook
from pathlib import Path
from datetime import date
p=Path('outputs/backlink-outreach-progress-2026-09-23.xlsx')
wb=load_workbook(p)
wb['Prospects'].append(['Moving2Canada','Canada','Immigration / employment / life in Canada','Email pitch','https://moving2canada.com/about-us/become-our-partner/share-your-experience/','https://moving2canada.com/about-us/become-our-partner/share-your-experience/','Email to editorial contact; human review','Unknown until published','Fresh prospect','Current contributor page invites original 600–800 word immigration, employment, and life-in-Canada contributions. It allows 1–2 bio links, but does not guarantee a body link. No email sent because the available session has no authorized mailbox flow.','Not independently verified; do not assume dofollow','Research verified 2026-09-23; suitable for a short contributor idea'])
wb['Submission Log'].append(['Moving2Canada','https://moving2canada.com/about-us/become-our-partner/share-your-experience/','Email-only; contributor review','Researched; not submitted','https://moving2canada.com/about-us/become-our-partner/share-your-experience/','Current page requests a short idea and introduction by email; it permits 1–2 contributor bio links. No email transmitted.','Use authorized email flow to pitch a Canada newcomer employment/settlement topic; do not promise a body backlink.',date(2026,9,23)])
wb.save(p)
print(p.resolve())
