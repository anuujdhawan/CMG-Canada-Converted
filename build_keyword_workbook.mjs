import fs from 'node:fs/promises';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';

const outDir = 'outputs/2026-09-21-commonwealth-migration-keyword-research';
const wb = Workbook.create();
const editorial = wb.worksheets.add('Editorial Plan');
const keywords = wb.worksheets.add('Keyword Map');
const sources = wb.worksheets.add('Sources & Method');

const rows = [
['1','Canada immigration levels plan 2026','Canada Immigration','What the 2026–2028 Canada Immigration Levels Plan Means for Applicants','canada immigration levels plan 2026; Canada immigration targets 2026; temporary resident targets Canada; permanent resident target Canada','Informational / news','High','Trend-led policy update; publish quickly and refresh after IRCC announcements','IRCC says 2026 targets are 155,000 students, 230,000 workers and 380,000 permanent residents','https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/corporate-initiatives/levels.html'],
['2','Express Entry Canada 2026','Express Entry','Express Entry 2026: New Categories, Eligibility and How to Prepare','Express Entry Canada 2026; Express Entry categories 2026; Canada Express Entry requirements; CRS score Canada','Informational / commercial','High','Trend-led after 2026 category announcement; add FAQ schema','IRCC announced 2026 categories including doctors with Canadian experience, researchers, senior managers, transport and military applicants','https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/02/canada-prioritizes-top-talent-in-2026-immigration-express-entry-categories.html'],
['3','CRS score Canada','Express Entry','CRS Score Canada: How to Improve Your Express Entry Ranking','CRS score Canada; CRS calculator Canada; improve CRS score; Express Entry points','Informational / commercial','High','Evergreen calculator-style guide with examples and internal links','Build answer blocks: “What score do I need?”, “How are points calculated?”, “What raises CRS fastest?”','https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/works.html'],
['4','Canada immigration news','News','Canada Immigration News: Monthly IRCC Update and What Changed','Canada immigration news; IRCC news; latest Canada visa news; Canada PR news','Informational / news','High','Create a recurring monthly hub; link to official sources','Use a dated update format with a change log, affected applicants and next steps','https://www.canada.ca/en/immigration-refugees-citizenship/news.html'],
['5','Canada PR pathways','Permanent Residence','Canada PR Pathways in 2026: Which Program Fits Your Profile?','Canada PR pathways; how to get PR in Canada; Canada permanent residence options; Canada PR programs','Informational / commercial','High','Pillar page that links to Express Entry, PNP, pilots and family sponsorship','Use a comparison table and an eligibility decision tree for AEO/GEO extraction','https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html'],
['6','Provincial nominee program Canada','PNP','Provincial Nominee Programs in Canada: 2026 Routes by Province','provincial nominee program Canada; PNP Canada 2026; province nomination Canada; PNP eligibility','Informational / commercial','High','Province-by-province hub; refresh allocations and streams','Cover Ontario, Alberta, BC, Saskatchewan, Manitoba, Atlantic and rural pathways','https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html'],
['7','Rural community immigration pilot','Regional Immigration','Rural Community Immigration Pilot Canada: Eligibility, Communities and Jobs','rural community immigration pilot; RCIP Canada; rural immigration Canada; Canada rural PR','Informational / commercial','High','Newer program topic with strong topical relevance and lower competition','List participating communities, job requirements, recommendation process and common mistakes','https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-community-immigration-pilot.html'],
['8','Atlantic immigration program','Regional Immigration','Atlantic Immigration Program: A Step-by-Step Guide for Skilled Workers','Atlantic Immigration Program; AIP Canada; Atlantic Canada PR; designated employer AIP','Informational / commercial','Medium','Evergreen program guide with employer and applicant sections','Answer “Do I need a job offer?”, “Which provinces qualify?” and “How long does AIP take?”','https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/atlantic-immigration-program.html'],
['9','Canada work permit','Work Permit','Canada Work Permit in 2026: Open vs Employer-Specific Permits','Canada work permit; work permit Canada requirements; open work permit Canada; employer-specific work permit','Informational / commercial','High','Core service-support article; add eligibility matrix','Explain LMIA, LMIA-exempt routes, open work permits and document checklist','https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit.html'],
['10','LMIA Canada','Work Permit','LMIA Canada Explained: Employer Requirements, Process and Alternatives','LMIA Canada; LMIA process; Labour Market Impact Assessment; LMIA-exempt work permit','Informational / commercial','High','High-intent employer and worker topic; include compliance warnings','Separate employer-side and worker-side intent; cite current government rules','https://www.canada.ca/en/employment-social-development/services/foreign-workers.html'],
['11','Post-graduation work permit Canada','Study to Work','PGWP Canada 2026: Eligibility, Field of Study and Application Checklist','post graduation work permit Canada; PGWP eligibility 2026; PGWP requirements; Canada study to PR','Informational / commercial','High','Policy-sensitive; update after every IRCC change','Use a checklist, eligible-program explanation and transition-to-PR section','https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html'],
['12','Canada study permit','Study Permit','Canada Study Permit 2026: Requirements, Proof of Funds and Common Refusals','Canada study permit; study permit Canada requirements; Canada student visa; proof of funds Canada','Informational / commercial','High','High-demand student-intent topic; build trust with refusal analysis','Explain PAL/TAL where applicable, financial evidence, letter of explanation and biometrics','https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html'],
['13','Canada visitor visa','Visitor Visa','Canada Visitor Visa: Documents, Purpose of Travel and Refusal Prevention','Canada visitor visa; Canada tourist visa; visitor visa Canada requirements; temporary resident visa Canada','Informational / commercial','High','High-volume service topic; answer document and refusal questions','Use a document checklist, purpose-of-travel examples and invitation-letter guidance','https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/visa.html'],
['14','Canada super visa','Family / Visitor','Canada Super Visa 2026: Parent and Grandparent Eligibility, Income and Insurance','Canada super visa; super visa Canada requirements; parent visa Canada; super visa income requirement','Informational / commercial','High','Strong family-intent topic; refresh income thresholds annually','Cover medical insurance, invitation, minimum necessary income and stay duration','https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/super-visa.html'],
['15','Spousal sponsorship Canada','Family Sponsorship','Spousal Sponsorship Canada: Inland vs Outland and the 2026 Checklist','spousal sponsorship Canada; spouse visa Canada; inland vs outland sponsorship; partner sponsorship Canada','Informational / commercial','High','High-conversion family topic; use a side-by-side comparison','Answer relationship evidence, open work permit, processing and refusal risks','https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship.html'],
['16','Parents and grandparents program Canada','Family Sponsorship','Parents and Grandparents Program Canada: Invitations, Income and Alternatives','parents and grandparents program Canada; PGP Canada; sponsor parents Canada; super visa alternative','Informational / commercial','High','Use annual update format because invitations and intake change','Compare PGP and Super Visa with eligibility, cost, timing and document differences','https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/parents-grandparents.html'],
['17','Canada PR processing time','Processing Times','Canada Immigration Processing Times: How to Check IRCC Timelines','Canada PR processing time; IRCC processing times; Canada visa processing time; work permit processing time','Informational / news','High','Create a live-update explainer linked to IRCC tool','Explain what processing time means, completeness, biometrics and mailing-time buffers','https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html'],
['18','Canada citizenship requirements','Citizenship','Canada Citizenship Requirements: Physical Presence, Test and Application Steps','Canada citizenship requirements; Canadian citizenship application; citizenship physical presence; Canada citizenship test','Informational / commercial','Medium','Evergreen conversion topic with strong FAQ potential','Add a calculator-style physical presence explanation and document checklist','https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian.html'],
['19','PR card renewal Canada','Permanent Residence','PR Card Renewal Canada: Eligibility, Documents and Travel While Waiting','PR card renewal Canada; renew PR card; Canada PR card processing time; permanent resident travel document','Informational / commercial','Medium','Practical task-based topic; answer urgent travel questions','Include expiry scenarios, urgent processing, PRTD distinction and residency obligation','https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/pr-card.html'],
['20','Canada immigration processing times','Processing Times','What Delays a Canada Immigration Application? A Practical IRCC Checklist','why is my Canada visa delayed; IRCC application delay; Canada immigration application status; IRCC webform','Informational / commercial','Medium','Capture long-tail “why” queries and support-service intent','Structure around delay causes, status meanings, webform timing and when to seek help','https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html'],
];

const headers = ['Priority','Primary keyword / topic','Content cluster','Recommended blog title','Target keyword and phrase set','Search intent','Trend / demand signal','Editorial angle','Why now / AEO-GEO notes','Primary source'];
editorial.getRange('A1:J1').values = [['Commonwealth Migration Canada — 20-blog SEO/AEO/GEO plan','','','','','','','','','']];
editorial.getRange('A2:J2').values = [['Research date: 2026-09-21 | Target country: Canada | SE Ranking project: Commonwealth Migration Canada','','','','','','','','','']];
editorial.getRange('A4:J4').values = [headers];
editorial.getRange(`A5:J${rows.length+4}`).values = rows;
editorial.freezePanes.freezeRows(4);
editorial.showGridLines = false;

const km = [
['Seed / cluster','SE Ranking snapshot','Recommended supporting phrases','Use in article as','Source'],
['canada immigration','Search volume 810; difficulty 88/100; informational; CPC $0.40; global volume 64.4K','canada immigration news; IRCC; Canada visa; Express Entry; Canadian immigration','Pillar page and monthly news hub','https://online.seranking.com/research.keywords.html/?keyword=canada+immigration&source=ae'],
['Related keyword examples from SE Ranking','Related terms: IRCC (5.4K, difficulty 100); Canada visa (1.1K, 100); Express Entry (590, 74); Express Entry Canada (480, 80); Canadian Express Entry (480, 56)','canada immigration news; Canada immigration newsletter; immigration in Canada news; current Canada immigration news','News/update article headings and FAQs','https://online.seranking.com/research.keywords.html/?keyword=canada+immigration&source=ae'],
['Tracked project set','20 keywords added to Google Canada tracking in Commonwealth Migration Canada project','See Editorial Plan for full 20-keyword list','Rank tracking baseline; refresh after first data cycle','https://online.seranking.com/admin.site.overview.site_id-12949049.html#/'],
];
keywords.getRange('A1:E1').values = [['Keyword research inputs and SE Ranking evidence','','','','']];
keywords.getRange('A3:E3').values = km;
keywords.freezePanes.freezeRows(3);
keywords.showGridLines = false;

const src = [
['Source','What it contributed','URL'],
['SE Ranking project','New project setup, Google Canada tracking, 20 initial tracked keywords, site audit health score 87/100','https://online.seranking.com/admin.site.overview.site_id-12949049.html#/'],
['SE Ranking keyword research','Live snapshot for “canada immigration”: volume 810, difficulty 88/100, informational intent, CPC $0.40, global volume 64.4K, related terms and questions','https://online.seranking.com/research.keywords.html/?keyword=canada+immigration&source=ae'],
['Google Trends','Trend source to validate rising queries and seasonality before publishing; use Explore with Canada geo and a 12–60 month window','https://trends.google.com/trends/explore?geo=CA'],
['IRCC 2026–2028 levels','Current policy context: 2026 targets for students, workers and permanent residents; regional and protected-person initiatives','https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/corporate-initiatives/levels.html'],
['IRCC 2026 Express Entry categories','Current category-based selection context for doctors, researchers, senior managers, transport, military, healthcare, trades and French-language candidates','https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/02/canada-prioritizes-top-talent-in-2026-immigration-express-entry-categories.html'],
['IRCC processing times','Current guidance on how processing times work and why they vary','https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html'],
['Method note','Trend signal is editorial prioritization, not a Google Trends numeric score. Recheck Google Trends and SE Ranking before publishing each time-sensitive post. High-difficulty head terms should be supported by internal links and narrower FAQ pages.',''],
];
sources.getRange('A1:C1').values = [['Sources, evidence and maintenance notes','','']];
sources.getRange('A3:C3').values = src;
sources.freezePanes.freezeRows(3);
sources.showGridLines = false;

for (const sh of [editorial, keywords, sources]) {
  const used = sh.getUsedRange();
  used.format.font = { name: 'Arial', size: 10, color: '#1F2937' };
  used.format.verticalAlignment = 'top';
  used.format.wrapText = true;
}
editorial.getRange('A1:J1').format = { fill: '#1F4E78', font: { name: 'Arial', size: 14, bold: true, color: '#FFFFFF' }, rowHeight: 28 };
editorial.getRange('A2:J2').format = { font: { name: 'Arial', size: 10, italic: true, color: '#4B5563' } };
editorial.getRange('A4:J4').format = { fill: '#17365D', font: { name: 'Arial', size: 10, bold: true, color: '#FFFFFF' }, verticalAlignment: 'center', rowHeight: 32 };
editorial.getRange(`A5:J${rows.length+4}`).format.borders = { insideHorizontal: { style: 'thin', color: '#D9E2F3' } };
editorial.getRange(`A5:A${rows.length+4}`).format.font = { name: 'Arial', size: 10, bold: true, color: '#1F4E78' };
editorial.getRange('A:A').format.columnWidth = 9;
editorial.getRange('B:B').format.columnWidth = 26;
editorial.getRange('C:C').format.columnWidth = 18;
editorial.getRange('D:D').format.columnWidth = 40;
editorial.getRange('E:E').format.columnWidth = 42;
editorial.getRange('F:F').format.columnWidth = 18;
editorial.getRange('G:G').format.columnWidth = 15;
editorial.getRange('H:H').format.columnWidth = 34;
editorial.getRange('I:I').format.columnWidth = 46;
editorial.getRange('J:J').format.columnWidth = 42;
editorial.getRange(`A5:J${rows.length+4}`).format.rowHeight = 60;

for (const sh of [keywords, sources]) {
  sh.getRange('A1:E1').format = { fill: '#1F4E78', font: { name: 'Arial', size: 14, bold: true, color: '#FFFFFF' }, rowHeight: 28 };
  sh.getRange('A3:E3').format = { fill: '#17365D', font: { name: 'Arial', size: 10, bold: true, color: '#FFFFFF' }, verticalAlignment: 'center', rowHeight: 30 };
  sh.getRange('A:A').format.columnWidth = 28;
  sh.getRange('B:B').format.columnWidth = 55;
  sh.getRange('C:C').format.columnWidth = 58;
  sh.getRange('D:D').format.columnWidth = 38;
  sh.getRange('E:E').format.columnWidth = 46;
  sh.getRange('A4:E20').format.rowHeight = 54;
}
sources.getRange('A:A').format.columnWidth = 26;
sources.getRange('B:B').format.columnWidth = 72;
sources.getRange('C:C').format.columnWidth = 58;
sources.getRange('A4:C20').format.rowHeight = 55;

await fs.mkdir(outDir, { recursive: true });
const output = await SpreadsheetFile.exportXlsx(wb);
await output.save(`${outDir}/commonwealth-migration-blog-keyword-plan.xlsx`);
const preview = await wb.render({ sheetName: 'Editorial Plan', range: 'A1:J12', scale: 1, format: 'png' });
await fs.writeFile(`${outDir}/editorial-plan-preview.png`, new Uint8Array(await preview.arrayBuffer()));
console.log(`${outDir}/commonwealth-migration-blog-keyword-plan.xlsx`);
