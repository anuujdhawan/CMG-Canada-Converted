from openpyxl import load_workbook
from pathlib import Path
from datetime import date
p=Path('outputs/backlink-outreach-progress-2026-09-23.xlsx')
wb=load_workbook(p)
wb['Prospects'].append(['The Immigrant Stories','Global / Canada relevant','First-person immigration stories','Email or story form','https://theimmigrantstories.com/write-for-us/','https://theimmigrantstories.com/write-for-us/','Email/story submission; editorial review','Not suitable for this campaign','Fresh prospect','Current rules require a genuine first-person immigration experience and expressly reject promotion of paid immigration consultancy services. A CMG-authored service article would not meet the stated editorial fit, so no submission made.','Not independently verified; do not assume dofollow','Inspected 2026-09-23; excluded on editorial-fit grounds'])
wb['Submission Log'].append(['The Immigrant Stories','https://theimmigrantstories.com/write-for-us/','First-person story route; excludes paid consultancy promotion','Unsuitable; not submitted','https://theimmigrantstories.com/write-for-us/','Current guidelines require a genuine first-person immigration experience and reject promotion of paid immigration services; CMG article does not fit.','Exclude from this campaign.',date(2026,9,23)])
wb.save(p)
print(p.resolve())
