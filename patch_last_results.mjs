import {FileBlob,SpreadsheetFile} from '@oai/artifact-tool';
const path='outputs/2026-09-20-directory-prospects/commonwealth-migration-free-directory-prospects.xlsx';
const wb=await SpreadsheetFile.importXlsx(await FileBlob.load(path)); const sh=wb.worksheets.getItem('Directory Prospects');
sh.getRange('N52:S54').values=[
 [new Date().toISOString(),'Request timeout','https://www.factual.ca/','',0,'8000 ms'],
 [new Date().toISOString(),'DNS resolution failure','https://localstack.ca/','',0,'0 ms'],
 [new Date().toISOString(),'Request timeout','https://www.canadiantradeindex.com/','',0,'8000 ms']
];
const out=await SpreadsheetFile.exportXlsx(wb); await out.save(path); console.log('patched');
