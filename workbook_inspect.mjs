import { FileBlob, SpreadsheetFile } from "/Users/themacintosh/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/index.js";
const path = "/Users/themacintosh/Desktop/Backlink articles/free-article-submission-websites/free_editorial_outreach_prospects.xlsx";
const wb = await SpreadsheetFile.importXlsx(await FileBlob.load(path));
console.log((await wb.inspect({kind:"workbook,sheet,table", maxChars:12000, tableMaxRows:10, tableMaxCols:14, tableMaxCellChars:120})).ndjson);
for (const s of wb.worksheets.items) {
  console.log(`SHEET:${s.name}`);
  console.log((await wb.inspect({kind:"region", sheetId:s.name, range:"A1:Z30", maxChars:12000})).ndjson);
}
