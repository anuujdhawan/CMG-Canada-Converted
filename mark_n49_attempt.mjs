import {FileBlob,SpreadsheetFile} from '@oai/artifact-tool';
const path='outputs/2026-09-20-directory-prospects/commonwealth-migration-free-directory-prospects.xlsx'; const wb=await SpreadsheetFile.importXlsx(await FileBlob.load(path)); const sh=wb.worksheets.getItem('Directory Prospects');
for (const row of [21,49]) { sh.getRange(`K${row}`).values=[['Attempted - unverified']]; sh.getRange(`O${row}`).values=[['Form filled and Save All Changes clicked; page remained on dashboard with “Saving Changes / Please wait”; no authoritative confirmation or listing URL.']]; sh.getRange(`P${row}`).values=[['https://dashboard.n49.com/add-biz']]; }
const out=await SpreadsheetFile.exportXlsx(wb); await out.save(path); console.log('updated');
