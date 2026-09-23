from openpyxl import load_workbook
from pathlib import Path
from datetime import date
p=Path('outputs/backlink-outreach-progress-2026-09-23.xlsx')
wb=load_workbook(p)
ws=wb['Prospects']
ws.append(['Canada Careers Conversation','Canada','Newcomer careers / migration','Guest-post form','https://canadacareersconversation.com/submit-content','https://canadacareersconversation.com/submit-content','Direct article submission route','Inactive or blank response','Fresh prospect','The supplied route returned HTTP 200 but rendered an empty page with no visible content or form controls in the browser. No submission made; no backlink exists.','Not independently verified; do not assume DR/DA or dofollow','Inspected 2026-09-23; route unusable in available session'])
wb['Submission Log'].append(['Canada Careers Conversation','https://canadacareersconversation.com/submit-content','Blank page / no form controls','Not submitted; inactive route','https://canadacareersconversation.com/submit-content','HTTP 200 response contained no rendered page content or submission controls.','Exclude until route becomes usable or a current alternate contact is found.',date(2026,9,23)])
wb.save(p)
print(p.resolve())
