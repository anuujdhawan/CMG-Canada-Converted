from openpyxl import load_workbook
from pathlib import Path
from datetime import date
p=Path('outputs/backlink-outreach-progress-2026-09-23.xlsx')
wb=load_workbook(p)
ws=wb['Prospects']
ws.append(['New Canadian Media','Canada','Immigration / newcomer media / settlement','Pitch form','https://newcanadianmedia.ca/pitch-form/','https://newcanadianmedia.ca/hub/write-for-us/','Direct pitch form; editorial review','Inactive or broken route','Fresh prospect','Current pitch page states accepted pitches should receive a response within a week, but the live page rendered no submission fields or embedded form controls. No attempt made beyond inspection; no backlink exists.','Not independently verified; do not assume DR/DA or dofollow','Inspected 2026-09-23; route inactive/broken in available browser'])
log=wb['Submission Log']
log.append(['New Canadian Media','https://newcanadianmedia.ca/pitch-form/','Pitch form rendered without form controls','Not submitted; inactive route','https://newcanadianmedia.ca/pitch-form/','Page contains submission instructions but no visible inputs or working form, so no pitch could be sent.','Exclude until publisher restores the form or provides an active email route.',date(2026,9,23)])
wb.save(p)
print(p.resolve())
