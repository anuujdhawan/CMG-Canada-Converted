import {FileBlob,SpreadsheetFile} from '@oai/artifact-tool';
const path='outputs/2026-09-20-directory-prospects/commonwealth-migration-free-directory-prospects.xlsx'; const wb=await SpreadsheetFile.importXlsx(await FileBlob.load(path)); const sh=wb.worksheets.getItem('Directory Prospects');
const drop=new Set(['Hotfrog Brampton','Cylex Brampton','Canada Business Directory Brampton','LocalStack Brampton']);
const rows=sh.getRange('A5:S77').values.filter(r=>!drop.has(r[1])); const finalEnd=4+rows.length; sh.getRange(`A5:S${finalEnd}`).values=rows; sh.getRange(`A${finalEnd+1}:S77`).clear({applyTo:'contents'}); const out=await SpreadsheetFile.exportXlsx(wb); await out.save(path); console.log(JSON.stringify({removed:4,finalRows:rows.length,finalEnd}));
