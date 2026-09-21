import fs from "fs";

const DIR = "/Users/themacintosh/Documents/My Files/Projects/CMG-Tailwind-components(V2)/outputs/backlink-articles";
process.chdir(DIR);

const items = JSON.parse(fs.readFileSync("inventory.json", "utf8"));
const urlMeta = new Map(items.map((i) => [i.url, i]));

const parts = [];
for (let i = 1; i <= 14; i++) {
  const f = `part-${String(i).padStart(2, "0")}.md`;
  parts.push({ f, text: fs.readFileSync(f, "utf8").trim() });
}

const index = [];
for (const p of parts) {
  const arts = p.text.split(/\n(?=## )/).filter((s) => /^## /.test(s));
  for (const a of arts) {
    const title = a.match(/^## (.+)$/m)[1].trim();
    const url = (a.match(/\*\*Target page:\*\*\s*\[[^\]]+\]\((https?:\/\/[^)]+)\)/) || [])[1] || "";
    const kw = (a.match(/\*\*Primary keyword:\*\*\s*(.+)$/m) || [])[1] || "";
    const meta = urlMeta.get(url) || {};
    index.push({ title, url, kw, path: meta.path || "", category: meta.category || "" });
  }
}

const totalWords = parts.reduce((n, p) => n + p.text.split(/\s+/).length, 0);
const date = "22 September 2026";

const L = [];
const P = (s = "") => L.push(s);

P("# Commonwealth Migration — Backlink & Guest-Post Article Pack");
P();
P("**Prepared for:** Commonwealth Migration Group Inc. (CICC-regulated, RCIC No. R711592) — Brampton, Ontario");
P("**Website:** https://commonwealthmigration.ca");
P(`**Articles:** ${index.length} unique articles — one for every page topic on the site`);
P(`**Approx. total words:** ${totalWords.toLocaleString("en-CA")}`);
P(`**Prepared:** ${date}`);
P();
P("---");
P();
P("## How to use this pack");
P();
P("Every article here is written as a standalone guest post that can be pitched to a third-party website");
P("(blog, industry publication, directory or news outlet) to earn a backlink to one specific page on");
P("commonwealthmigration.ca. Each article targets exactly one page.");
P();
P("- **One article per page topic.** All 112 topics on the site are covered, in the site's own category order.");
P("- **Two links per article.** One contextual link in the body and one in the closing call to action, both");
P("  pointing to the same target page with descriptive anchor text. Nothing says \"click here\".");
P("- **The target page is named at the top of every article**, so you always know the backlink destination");
P("  before the piece is sent out.");
P("- **Unique angles throughout.** No two articles share the same structure, opening or subheadings, so they");
P("  can be placed on different sites without reading as duplicated content.");
P("- **No invented figures.** The articles deliberately avoid quoting specific fees, CRS cut-offs, processing");
P("  times or draw dates, and point readers to the official page instead — so they stay accurate as rules change.");
P();
P("**Suggested workflow:** pick articles by category, send the body copy to the host site, and use the");
P("`Target page` link as the backlink destination. If the host editor prefers different anchor wording, keep");
P("the anchor descriptive and the URL unchanged.");
P();
P("> **Compliance note:** every article states that Commonwealth Migration Group is a private consultancy and");
P("> not a government body, that no outcome is guaranteed, and that the information is general rather than");
P("> legal advice. Please keep those sentences intact when republishing.");
P();
P("---");
P();
P("## Master index");
P();
P("| # | Article title | Target page | Category |");
P("|---|---|---|---|");
index.forEach((it, i) => {
  P(`| ${i + 1} | ${it.title.replace(/\|/g, "\\|")} | [${it.path}](${it.url}) | ${it.category} |`);
});
P();
P("---");
P();

for (const p of parts) {
  P(p.text);
  P();
  P("---");
  P();
}

const outFile = "Commonwealth-Migration-Backlink-Articles.md";
fs.writeFileSync(outFile, L.join("\n"));
console.log("compiled:", index.length, "articles,", totalWords, "words");
console.log("output:", outFile);
console.log("size:", (fs.statSync(outFile).size / 1024).toFixed(0) + " KB");
