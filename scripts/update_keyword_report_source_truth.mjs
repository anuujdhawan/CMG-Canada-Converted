import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const reportPath = "/Users/themacintosh/Documents/My Files/Projects/CMG-Tailwind-components(V2)/outputs/01a08a93-5d83-7323-9070-5967cb0e0a6e/CMG_Keyword_Targeting_Report.xlsx";

const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load(reportPath));

const noExactMarketValue = "Not publicly exact";
const noExactDifficulty = "Not publicly exact";
const metricStatus = "Free tools show estimates/bands only";

function colLetter(index) {
  let n = index;
  let result = "";
  while (n > 0) {
    const remainder = (n - 1) % 26;
    result = String.fromCharCode(65 + remainder) + result;
    n = Math.floor((n - 1) / 26);
  }
  return result;
}

function usedRowCount(sheet) {
  const used = sheet.getUsedRange();
  return used?.values?.length ?? 0;
}

// Overview: make the report's evidence policy explicit and client-safe.
const overview = workbook.worksheets.getItem("Overview");
overview.getRange("A35").values = [["No AI or directional search-volume/KD figures are included."]];
overview.getRange("A36").values = [["Free public tools show averages, ranges, bands or calculated scores—not exact market counts."]];
overview.getRange("A37").values = [["Exact site performance data requires Google Search Console; market-demand methodology is documented by Google Keyword Planner."]];
overview.getRange("C35").values = [["https://support.google.com/webmasters/answer/10268906?hl=en"]];
overview.getRange("C36").values = [["https://support.google.com/google-ads/answer/3022575?hl=en-EN"]];
overview.getRange("A35:C37").format.wrapText = true;
overview.getRange("A35:H35").format.rowHeight = 42;
overview.getRange("A36:H36").format.rowHeight = 54;
overview.getRange("A37:H37").format.rowHeight = 54;

// Main inventory: remove unsupported numeric values rather than relabelling them as exact.
const inventory = workbook.worksheets.getItem("Keyword Inventory");
const inventoryRows = usedRowCount(inventory);
inventory.getRange("A2").values = [["Page-level primary targets and supporting topic signals | exact title/meta/H1/H2/H3 placement plus source status"]];
inventory.getRange("A3").values = [["Exact market search volume and difficulty are not publicly disclosed. Free Ahrefs/Google tools return estimates, ranges, averages or calculated scores; no numeric estimates are shown in this report."]];
inventory.getRange("F4:J4").values = [["Exact market volume", "Exact difficulty", "Evidence", "Source URL", "Metric status"]];
inventory.getRange(`F5:F${inventoryRows}`).values = Array.from({ length: Math.max(0, inventoryRows - 4) }, () => [noExactMarketValue]);
inventory.getRange(`G5:G${inventoryRows}`).values = Array.from({ length: Math.max(0, inventoryRows - 4) }, () => [noExactDifficulty]);
inventory.getRange(`J5:J${inventoryRows}`).values = Array.from({ length: Math.max(0, inventoryRows - 4) }, () => [metricStatus]);
inventory.getRange("F:G").format.columnWidth = 22;
inventory.getRange("J:J").format.columnWidth = 31;
inventory.getRange("A3:J3").format.wrapText = true;

// Category tabs: preserve all keyword, page and placement work while removing unsupported numeric metrics.
const categorySheets = [
  "Brand & Company",
  "Appeals",
  "Express Entry",
  "PNP & OINP",
  "LMIA & Employers",
  "Work Permits",
  "Study & Visitor",
  "Family Sponsorship",
  "PR & Citizenship",
  "Country & Local",
  "Resources & Tools",
  "Other Keywords",
];

for (const name of categorySheets) {
  const sheet = workbook.worksheets.getItem(name);
  const rows = usedRowCount(sheet);
  sheet.getRange("A2").values = [["Keyword targets grouped from the current project pages; exact market volume and difficulty are not publicly disclosed. Numeric estimates have been removed; see Ahrefs Validation for free-source bands and notes."]];
  sheet.getRange("A4:H4").values = [["Keyword / topic target", "Difficulty — exact?", "Search volume — exact?", "Page", "Target level", "Heading / source placement", "Metric status", "Evidence"]];
  sheet.getRange(`B5:B${rows}`).values = Array.from({ length: Math.max(0, rows - 4) }, () => [noExactDifficulty]);
  sheet.getRange(`C5:C${rows}`).values = Array.from({ length: Math.max(0, rows - 4) }, () => [noExactMarketValue]);
  sheet.getRange(`G5:G${rows}`).values = Array.from({ length: Math.max(0, rows - 4) }, () => [metricStatus]);
  sheet.getRange("B:B").format.columnWidth = 22;
  sheet.getRange("C:C").format.columnWidth = 22;
  sheet.getRange("G:G").format.columnWidth = 31;
  sheet.getRange("A2:H2").format.wrapText = true;
  sheet.getRange("A2:H2").format.rowHeight = 32;
}

// Validation tab: keep the free-source observations, but remove the old numeric estimates.
const validation = workbook.worksheets.getItem("Ahrefs Validation");
const validationRows = usedRowCount(validation);
validation.getRange("A2").values = [["Manual Canada spot-checks for keywords previously flagged as high-volume; free Ahrefs results are retained as bands/labels only."]];
validation.getRange("A3").values = [["Ahrefs Free exposes volume bands and difficulty labels rather than exact monthly counts. These observations are evidence only and are not copied into the client-facing metric fields."]];
validation.getRange("A5:I5").values = [["Keyword", "Page(s)", "Exact market volume", "Exact difficulty", "Ahrefs Canada volume band", "Ahrefs difficulty label", "Manual check source", "Assessment", "Recommended action"]];
validation.getRange(`C6:C${validationRows}`).values = Array.from({ length: Math.max(0, validationRows - 5) }, () => ["Not publicly available"]);
validation.getRange(`D6:D${validationRows}`).values = Array.from({ length: Math.max(0, validationRows - 5) }, () => ["Not publicly available"]);
validation.getRange("A6:I23").format.wrapText = true;
validation.getRange("C:C").format.columnWidth = 23;
validation.getRange("D:D").format.columnWidth = 23;

const assessmentByKeyword = {
  "About Us": "Flag — generic informational/design intent; the free source shows only a band and cannot support an exact market count.",
  "Canada Express Entry": "Flag — priority topic; the free source shows only a band and cannot support an exact market count.",
};
const validationKeywords = validation.getRange(`A6:A${validationRows}`).values;
const assessmentValues = validation.getRange(`H6:H${validationRows}`).values;
for (let i = 0; i < assessmentValues.length; i++) {
  const keyword = validationKeywords[i][0];
  if (assessmentByKeyword[keyword]) {
    assessmentValues[i][0] = assessmentByKeyword[keyword];
  } else {
    assessmentValues[i][0] = "Review — broad term or broad location intent; the free source shows only a band/label, not an exact market count. Use an immigration-intent variant before client-facing targeting.";
  }
}
validation.getRange(`H6:H${validationRows}`).values = assessmentValues;
const actionValues = validation.getRange(`I6:I${validationRows}`).values;
const actionKeywords = validation.getRange(`A6:A${validationRows}`).values;
for (let i = 0; i < actionValues.length; i++) {
  if (actionKeywords[i][0] === "Canada Express Entry") {
    actionValues[i][0] = "Keep as a priority topic; use only the Ahrefs band/label as non-exact validation evidence.";
  }
}
validation.getRange(`I6:I${validationRows}`).values = actionValues;

// Re-export to the existing client-facing output path.
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(reportPath);

console.log(JSON.stringify({
  output: reportPath,
  keywordInventoryRows: inventoryRows - 4,
  categorySheetsUpdated: categorySheets.length,
  ahrefsValidationRows: validationRows - 5,
}));
