import fs from 'node:fs/promises';
import { FileBlob, SpreadsheetFile } from '@oai/artifact-tool';
const path='outputs/2026-09-20-directory-prospects/commonwealth-migration-free-directory-prospects.xlsx';
const input=await FileBlob.load(path); const wb=await SpreadsheetFile.importXlsx(input);
const sh=wb.worksheets.getItem('Directory Prospects');
const added=[
['Priority','OMARA Self-Service Portal','https://portal.mara.gov.au/search-the-register-of-migration-agents/','https://www.mara.gov.au/','Australia immigration / UK & Canada clients','Official register (not a backlink directory)','Firm/agent must be registered with OMARA and have a valid MARN','Highest-trust verification source for Australian migration services; use for credibility checks, not SEO submission','Official Australian register. A listing is not an editable marketing profile.','https://portal.mara.gov.au/enquiry/knowledgebase/article/KA-01003/en-us/','Not started','UK clients → Australia; Brampton/Canada → Australia','Eligibility check / trust verification'],
['Priority','Migration Alliance – Find an Agent','https://migrationalliance.com.au/find/rma/','https://migrationalliance.com.au/','Australia migration / international','Directory search; membership/claim may apply','Use only if the firm or agent is eligible and the listing is accurate','Relevant Australian migration professional directory; check whether profile claim or membership is free','Site directs users to MARA for current status; verify current listing terms.','https://migrationalliance.com.au/find/rma/','Not started','UK clients → Australia; Brampton/Canada → Australia','High relevance'],
['Priority','FindMigrationAgents.com','https://findmigrationagents.com/','https://findmigrationagents.com/','Australia migration / international','Free claim opportunity','Agent should be OMARA-verified; claim profile and confirm data','Niche Australian migration directory with profile-claim path and client discovery','Site says agents are sourced from the OMARA public register and offers “Claim Your Profile”; confirm any paid upsell before proceeding.','https://findmigrationagents.com/','Not started','UK clients → Australia; Brampton/Canada → Australia','High relevance'],
['Priority','ImmigrationAU.com.au','https://immigrationau.com.au/','https://immigrationau.com.au/','Australia migration / international','Directory / claim terms to verify','Confirm registration and current listing/claim requirements','Australia-focused immigration directory for visa and migration enquiries','Verify free status and whether the profile link is editorial, claimed, or paid.','https://immigrationau.com.au/','Not started','UK clients → Australia; Brampton/Canada → Australia','High relevance'],
['Secondary','GOV.UK Adviser Finder','https://www.gov.uk/find-an-immigration-adviser','https://www.gov.uk/','UK immigration advice (not Australia)','Official UK adviser finder; not a listing for Australian migration firms','Not applicable unless providing regulated UK immigration advice','Use as a regulatory distinction; do not submit unless services include UK immigration advice','GOV.UK finder covers permission to stay in the UK, not Australian migration.','https://www.gov.uk/find-an-immigration-adviser','Not started','UK clients → Australia','Do not submit unless eligible'],
['Priority','Brampton business/local directories','https://www.google.com/maps','https://www.google.com/business/','Brampton / Canada','Free profile/citation','Accurate Brampton service area, contact details, and verification','Local discovery for Brampton residents searching for Australian immigration help','Use Google Business Profile plus Canadian directories already listed in this workbook; do not create duplicate locations.','https://business.google.com/in/business-profile/','Not started','Brampton/Canada → Australia','High relevance'],
];
const start=25; sh.getRange('L4:M4').values=[['Target audience / route','Fit for this audience']];
sh.getRange('L5:M24').values=Array.from({length:20},()=>['Brampton/Canada → Australia; UK → Australia','General / Canada-focused directory']);
sh.getRange(`A${start}:M${start+added.length-1}`).values=added.map(r=>r);
sh.getRange('A4:M4').format={fill:'#17365D',font:{bold:true,color:'#FFFFFF'},wrapText:true,verticalAlignment:'center',rowHeight:32,borders:{preset:'outside',style:'thin',color:'#17365D'}};
sh.getRange(`A${start}:M${start+added.length-1}`).format={font:{size:10,color:'#222222'},wrapText:true,verticalAlignment:'top',rowHeight:72};
sh.getRange(`K${start}:K${start+added.length-1}`).dataValidation={rule:{type:'list',values:['Not started','In progress','Submitted','Live','Rejected','Not eligible','Skip']}};
sh.getRange(`K${start}:K${start+added.length-1}`).format={fill:'#FFF2CC',font:{bold:true,color:'#7F6000'},horizontalAlignment:'center'};
sh.getRange('L:L').format.columnWidth=34; sh.getRange('M:M').format.columnWidth=28;
sh.getRange(`L5:M${start+added.length-1}`).format.borders={insideHorizontal:{style:'thin',color:'#E6E6E6'},bottom:{style:'thin',color:'#B7C9E2'}};
sh.getRange(`C${start}:D${start+added.length-1}`).format.font={color:'#0563C1',underline:'single',size:10};
sh.getRange(`J${start}:J${start+added.length-1}`).format.font={color:'#0563C1',underline:'single',size:10};
sh.freezePanes.freezeRows(4);
const notes=wb.worksheets.getItem('How to Use');
notes.getRange('A11:B14').values=[
['Audience targeting','Use the “Target audience / route” field to separate Brampton/Canada → Australia prospects from UK → Australia prospects.'],
['Regulatory check','Australian immigration assistance generally requires an OMARA-registered migration agent or another permitted professional. Verify the firm/agent before making claims.'],
['Directory quality','Official registers are trust/eligibility sources, not necessarily backlink opportunities. Confirm whether each third-party directory offers a free, editable profile before submitting.'],
['Suggested positioning','Use accurate service wording such as “Australian migration services for clients in Brampton, Canada and the UK”; avoid implying Canadian or UK regulatory authorization unless applicable.']
];
notes.getRange('A11:B14').format={wrapText:true,verticalAlignment:'top',font:{size:11,color:'#222222'},rowHeight:44};
const out=await SpreadsheetFile.exportXlsx(wb); await out.save(path);
const check=await wb.inspect({kind:'table',range:'Directory Prospects!A22:M31',include:'values,formulas',tableMaxRows:10,tableMaxCols:13}); console.log(check.ndjson);
const errors=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:100},summary:'final formula error scan'}); console.log(errors.ndjson);
const blob=await wb.render({sheetName:'Directory Prospects',range:'A1:M12',scale:1,format:'png'}); await fs.writeFile('outputs/2026-09-20-directory-prospects/directory-prospects-updated-preview.png',new Uint8Array(await blob.arrayBuffer()));
console.log('updated',path);
