import fs from "fs";

const ROOT = "/Users/themacintosh/Documents/My Files/Projects/CMG-Tailwind-components(V2)";
const DIR = ROOT + "/outputs/backlink-articles";
process.chdir(DIR);

// ---- Build the set of routes that actually exist on the site ----
const cmg = JSON.parse(fs.readFileSync(ROOT + "/src/data/cmg-pages.json", "utf8"));
const menu = JSON.parse(fs.readFileSync(ROOT + "/src/data/cmg-menu.json", "utf8"));
const legal = JSON.parse(fs.readFileSync(ROOT + "/src/data/cmg-legal.json", "utf8"));

const valid = new Set();
cmg.forEach((p) => valid.add(p.path));
for (const t of menu) for (const g of t.groups) for (const p of g.pages) valid.add(p.href);
if (Array.isArray(legal)) legal.forEach((l) => l.path && valid.add(l.path));
else Object.values(legal).forEach((l) => l.path && valid.add(l.path));

const aboutSrc = fs.readFileSync(ROOT + "/src/data/about-pages.js", "utf8");
for (const m of aboutSrc.matchAll(/path:\s*"(\/[^"]+)"/g)) valid.add(m[1]);

const ukSrc = fs.readFileSync(ROOT + "/src/data/uk-pages.js", "utf8");
for (const m of ukSrc.matchAll(/path:\s*"(\/[^"]+)"/g)) valid.add(m[1]);
for (const m of ukSrc.matchAll(/const\s+\w*[Pp]ath\s*=\s*"(\/[^"]+)"/g)) valid.add(m[1]);

// explicit app-router routes
[
  "/", "/blog", "/canada-immigration-news", "/immigration-draws",
  "/assessment/free-canada-immigration-assessment",
  "/contact/book-immigration-consultation-canada",
  "/contact/pay-immigration-consultation-canada",
  "/tools/canada-immigration-calculators",
  "/tools/crs-calculator-canada",
  "/tools/document-checklist-canada",
  "/tools/noc-finder-canada",
  "/tools/pnp-eligibility-canada",
].forEach((p) => valid.add(p));

// ---- Verify the pack ----
const pack = fs.readFileSync("Commonwealth-Migration-Backlink-Articles.md", "utf8");
const arts = pack.split(/\n(?=## )/).filter((s) => /^\*\*Target page:\*\*/m.test(s) && /^## /.test(s));

const bad = [];
const seen = new Set();
let words = 0;

for (const a of arts) {
  const url = (a.match(/\*\*Target page:\*\*\s*\[[^\]]+\]\((https?:\/\/[^)]+)\)/) || [])[1];
  if (!url) { bad.push("no target url in: " + a.slice(0, 60)); continue; }
  const path = url.replace("https://commonwealthmigration.ca", "") || "/";
  if (!valid.has(path)) bad.push("NOT A LIVE ROUTE: " + path);
  seen.add(url);

  // Strip the metadata block first. It is NOT at the start of the chunk (the `##` title is),
  // and it holds a third reference to the URL — counting it makes a correct article look wrong.
  const body = a.replace(/\*\*Target page:\*\*[\s\S]*?\*\*Word count:\*\*[^\n]*\n/, "");
  const n = body.split(/\s+/).length;
  words += n;
  if (n < 450) bad.push(`short article (${n}w): ${path}`);
  const links = (body.match(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;
  if (links !== 2) bad.push(`${links} link(s) to target in body (expected 2): ${path}`);
  if (/click here/i.test(a)) bad.push("contains 'click here': " + path);
}

console.log("Articles in pack :", arts.length);
console.log("Distinct target URLs:", seen.size);
console.log("Approx body words:", words.toLocaleString("en-CA"));
console.log("Valid site routes known:", valid.size);
console.log("Issues:", bad.length);
bad.slice(0, 25).forEach((b) => console.log("  - " + b));

// duplicate-title check
const titles = arts.map((a) => a.match(/^## (.+)$/m)[1].trim().toLowerCase());
const dupes = titles.filter((t, i) => titles.indexOf(t) !== i);
console.log("Duplicate titles:", dupes.length, dupes.slice(0, 5).join(" | "));
