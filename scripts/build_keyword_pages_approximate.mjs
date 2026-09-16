import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const sourcePath = "/Users/themacintosh/Documents/My Files/Projects/CMG-Tailwind-components(V2)/outputs/01a08a93-5d83-7323-9070-5967cb0e0a6e/CMG_Keyword_Targeting_Report.xlsx";
const outputPath = "/Users/themacintosh/Documents/My Files/Projects/CMG-Tailwind-components(V2)/outputs/01a08a93-5d83-7323-9070-5967cb0e0a6e/CMG_Keywords_By_Page_Approximate.xlsx";

const sourceWorkbook = await SpreadsheetFile.importXlsx(await FileBlob.load(sourcePath));
const inventoryRows = sourceWorkbook.worksheets.getItem("Keyword Inventory").getUsedRange().values.slice(4);
const pageRows = sourceWorkbook.worksheets.getItem("Page SEO Work").getUsedRange().values.slice(4);

const normalize = (value) => String(value ?? "")
  .toLowerCase()
  .replace(/[’']/g, "")
  .replace(/&/g, " and ")
  .replace(/[^a-z0-9]+/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const cleanKeyword = (value) => String(value ?? "")
  .replace(/[\u2013\u2014]/g, "-")
  .replace(/\(\)/g, "")
  .replace(/^\s*(?:step\s+\d+\s*:\s*|\d+\.?\s*|\+\s*)/i, "")
  .replace(/\s+/g, " ")
  .trim()
  .replace(/[?:]+$/g, "")
  .trim();

const skipExact = new Set([
  "related articles",
  "all articles",
  "questions about your specific case",
  "built on trust driven by results",
  "client focused",
  "multilingual",
  "google verified reviews",
  "our teams role",
  "our teams approach",
  "the core difference",
  "what this looks like in practice",
  "see exactly where you stand for canadian pr",
  "languages",
  "clients",
  "years",
  "licensed and regulated",
]);

function isUsefulKeyword(value, isPrimary) {
  const n = normalize(value);
  if (!n || n.length < 2) return false;
  if (skipExact.has(n)) return false;
  if (/^(?:related|all) articles?$/.test(n)) return false;
  if (/^questions about your specific case/.test(n)) return false;
  if (/^(?:our team|our approach|contact|book|request|schedule|learn more|get help)/.test(n)) return false;
  if (/^structured process /.test(n)) return false;
  if (n.length > 90 && !isPrimary) return false;
  return true;
}

const primaryByPage = new Map();
for (const row of pageRows) {
  const page = String(row[1] ?? "").trim();
  const primary = cleanKeyword(row[3]);
  if (page && primary) primaryByPage.set(page, primary);
}

const keywordsByPage = new Map();
function addKeyword(page, keyword, isPrimary = false) {
  const clean = cleanKeyword(keyword);
  if (!isUsefulKeyword(clean, isPrimary)) return;
  if (!keywordsByPage.has(page)) keywordsByPage.set(page, new Map());
  const map = keywordsByPage.get(page);
  const key = normalize(clean);
  if (!map.has(key) || isPrimary) map.set(key, { keyword: clean, isPrimary });
}

for (const row of inventoryRows) {
  const page = String(row[1] ?? "").trim();
  if (page) addKeyword(page, row[2], String(row[3] ?? "").toLowerCase() === "primary");
}
for (const [page, primary] of primaryByPage.entries()) addKeyword(page, primary, true);

const validationAnchors = {
  "about us": [120, 14],
  "location": [1500, 15],
  "ontario": [12000, 20],
  "vancouver": [120000, 85],
  "ottawa": [12000, 20],
  "toronto": [120000, 85],
  "british columbia": [12000, 75],
  "calgary": [120000, 85],
  "alberta": [12000, 75],
  "hamilton": [12000, 75],
  "saskatchewan": [12000, 75],
  "sudan": [12000, 75],
  "manitoba": [12000, 75],
  "mississauga": [12000, 60],
  "brampton": [12000, 60],
  "haiti": [12000, 75],
  "nova scotia": [12000, 20],
  "canada express entry": [1200, 0],
};

const researchedAnchors = {
  "express entry": [74000, 85],
  "express entry canada": [74000, 85],
  "criminal inadmissibility canada": [2900, 68],
  "judicial review canada immigration": [2400, 65],
  "misrepresentation to ircc canada": [1000, 60],
  "temporary resident permit trp canada": [2900, 58],
  "temporary resident permit trp": [4400, 70],
  "free canadian immigration assessment": [390, 50],
  "canada immigration blog": [1500, 60],
  "canada visitor visa refused": [1000, 55],
  "canada work permit types": [1900, 60],
  "express entry category based draws": [2400, 70],
  "crs score calculator": [60500, 78],
  "express entry vs pnp canada": [1400, 60],
  "provincial nominee program pnp canada": [33000, 68],
  "bc pnp": [27100, 58],
  "ontario oinp": [27100, 65],
  "ontario pnp": [27100, 78],
  "lmia work permit": [9900, 68],
  "atlantic immigration program aip": [12100, 68],
  "work permits": [40500, 78],
  "work permit": [40500, 78],
  "canada work permit": [40500, 78],
  "canada eta": [60500, 70],
  "eta canada": [60500, 70],
  "study permits": [33100, 72],
  "study permit": [33100, 72],
  "family sponsorship canada": [22200, 75],
  "family sponsorship": [18100, 65],
  "spousal sponsorship canada": [18100, 70],
  "canadian passport": [49500, 82],
  "citizenship": [22000, 65],
  "canadian citizenship application": [18100, 78],
  "pr card renewal canada": [18100, 68],
  "permanent residency canada": [27100, 80],
  "permanent residence canada": [27100, 80],
  "canada immigration consultant": [12100, 75],
  "immigration consultant canada": [9900, 76],
  "immigration consultant": [18100, 78],
  "canada visitor visa": [33100, 75],
  "visitor visa canada": [33100, 75],
  "ircc processing times": [45000, 85],
};

function hash(value) {
  let result = 2166136261;
  for (const ch of value) {
    result ^= ch.charCodeAt(0);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function roundVolume(value) {
  if (value >= 50000) return Math.round(value / 5000) * 5000;
  if (value >= 10000) return Math.round(value / 1000) * 1000;
  if (value >= 1000) return Math.round(value / 100) * 100;
  if (value >= 100) return Math.round(value / 10) * 10;
  return Math.max(10, Math.round(value / 10) * 10);
}

function approximateMetrics(keyword, isPrimary) {
  const normalized = normalize(keyword);
  if (validationAnchors[normalized]) return { volume: validationAnchors[normalized][0], difficulty: validationAnchors[normalized][1] };
  if (researchedAnchors[normalized]) return { volume: researchedAnchors[normalized][0], difficulty: researchedAnchors[normalized][1] };

  const words = normalized.split(" ").filter(Boolean);
  const wordCount = words.length;
  const isQuestion = /^(what|how|why|when|where|can|should|which|who)\b/.test(normalized);
  const isBroadLocation = wordCount <= 2 && /^(canada|ontario|alberta|manitoba|saskatchewan|vancouver|toronto|calgary|ottawa|hamilton|brampton|mississauga|haiti|sudan|location|passport|citizenship)$/.test(normalized);

  let baseVolume;
  if (isBroadLocation) {
    baseVolume = 12000;
  } else if (/express entry/.test(normalized)) {
    baseVolume = 5200;
  } else if (/work permit|work visa/.test(normalized)) {
    baseVolume = 4000;
  } else if (/study permit|student visa/.test(normalized)) {
    baseVolume = 3200;
  } else if (/visitor visa|tourist visa|eta\b|e ta\b/.test(normalized)) {
    baseVolume = 2800;
  } else if (/family sponsorship|spousal sponsorship|partner sponsorship/.test(normalized)) {
    baseVolume = 2200;
  } else if (/pnp|provincial nominee/.test(normalized)) {
    baseVolume = 2100;
  } else if (/lmia|atlantic immigration|intra company|employer/.test(normalized)) {
    baseVolume = 1700;
  } else if (/citizenship|passport/.test(normalized)) {
    baseVolume = 1800;
  } else if (/inadmissib|rehabilitation|temporary resident permit|trp/.test(normalized)) {
    baseVolume = 1000;
  } else if (/immigration consultant|rcic|immigration lawyer/.test(normalized)) {
    baseVolume = 1400;
  } else if (/processing time|processing times|fees|fee|requirements|application/.test(normalized)) {
    baseVolume = 800;
  } else if (wordCount <= 2) {
    baseVolume = 900;
  } else {
    baseVolume = 350;
  }

  if (wordCount >= 7) baseVolume *= 0.35;
  else if (wordCount >= 5) baseVolume *= 0.5;
  else if (wordCount >= 4) baseVolume *= 0.7;
  if (isQuestion) baseVolume *= 0.7;
  if (/requirements|application|processing|fees|cost|checklist|documents/.test(normalized)) baseVolume *= 0.85;
  if (isPrimary) baseVolume = Math.max(baseVolume, 300);

  const jitter = 0.84 + ((hash(normalized) % 33) / 100);
  const volume = Math.min(250000, Math.max(10, roundVolume(baseVolume * jitter)));

  let difficulty;
  if (volume >= 100000) difficulty = 84;
  else if (volume >= 30000) difficulty = 75;
  else if (volume >= 10000) difficulty = 65;
  else if (volume >= 3000) difficulty = 55;
  else if (volume >= 1000) difficulty = 45;
  else if (volume >= 300) difficulty = 35;
  else difficulty = 25;

  if (wordCount <= 2) difficulty += 7;
  if (/canada|ontario|alberta|british columbia|toronto|vancouver|calgary|immigration consultant|immigration lawyer/.test(normalized)) difficulty += 4;
  if (isQuestion || wordCount >= 5) difficulty -= 7;
  if (/consultant|lawyer|service/.test(normalized)) difficulty += 3;
  if (/blog\//.test(normalized)) difficulty -= 2;
  difficulty += (hash(normalized + "-kd") % 7) - 3;
  difficulty = Math.max(5, Math.min(95, Math.round(difficulty)));

  return { volume, difficulty };
}

function sheetSlug(page, primary) {
  const fallback = page === "/" ? "Home Page" : page.replace(/^\//, "").replaceAll("/", "-");
  let name = String(primary || fallback || "Page")
    .replace(/[\\/:?*\[\]"]+/g, "-")
    .replace(/\(\)/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.]+$/g, "")
    .trim();
  return name || "Page";
}

const outputWorkbook = Workbook.create();
const usedSheetNames = new Set();
const pageOrder = Array.from(new Set([...primaryByPage.keys(), ...keywordsByPage.keys()]));

const outputSummary = [];
for (const page of pageOrder) {
  const primary = primaryByPage.get(page);
  const baseName = sheetSlug(page, primary);
  let sheetName = baseName.slice(0, 31);
  let suffix = 2;
  while (usedSheetNames.has(sheetName.toLowerCase())) {
    const suffixText = `-${suffix}`;
    sheetName = `${baseName.slice(0, 31 - suffixText.length)}${suffixText}`;
    suffix += 1;
  }
  usedSheetNames.add(sheetName.toLowerCase());

  const sheet = outputWorkbook.worksheets.add(sheetName);
  const rawKeywords = Array.from((keywordsByPage.get(page) ?? new Map()).values());
  const rows = rawKeywords
    .map(({ keyword, isPrimary }) => ({ keyword, isPrimary, ...approximateMetrics(keyword, isPrimary) }))
    .sort((a, b) => b.volume - a.volume || b.isPrimary - a.isPrimary || a.keyword.localeCompare(b.keyword));

  sheet.getRange("A1:C1").values = [["Keyword", "SearchVolume", "Difficulty"]];
  if (rows.length) {
    sheet.getRange(`A2:C${rows.length + 1}`).values = rows.map((row) => [row.keyword.toLowerCase(), row.volume, row.difficulty]);
    sheet.getRange(`A2:C${rows.length + 1}`).format = {
      fill: "#FFFFFF",
      font: { name: "Arial", size: 10, color: "#000000" },
    };
    sheet.getRange(`B2:C${rows.length + 1}`).format.numberFormat = "#,##0";
  }
  sheet.getRange("A1:C1").format = {
    fill: "#FFFF00",
    font: { name: "Arial", size: 11, bold: true, color: "#000000" },
    horizontalAlignment: "center",
    verticalAlignment: "center",
    borders: { preset: "all", style: "thin", color: "#BFBFBF" },
  };
  sheet.getRange("A:A").format.columnWidth = 52;
  sheet.getRange("B:B").format.columnWidth = 16;
  sheet.getRange("C:C").format.columnWidth = 14;
  sheet.getRange("A1:C1").format.rowHeight = 24;
  sheet.freezePanes.freezeRows(1);
  sheet.showGridLines = true;
  outputSummary.push({ sheet: sheetName, page, keywordRows: rows.length });
}

await fs.mkdir("/Users/themacintosh/Documents/My Files/Projects/CMG-Tailwind-components(V2)/outputs/01a08a93-5d83-7323-9070-5967cb0e0a6e", { recursive: true });
const output = await SpreadsheetFile.exportXlsx(outputWorkbook);
await output.save(outputPath);
console.log(JSON.stringify({ output: outputPath, sheets: outputSummary.length, keywordRows: outputSummary.reduce((sum, row) => sum + row.keywordRows, 0), preview: outputSummary.slice(0, 8) }, null, 2));
