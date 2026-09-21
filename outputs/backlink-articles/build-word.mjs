import fs from "fs";

const DIR = "/Users/themacintosh/Documents/My Files/Projects/CMG-Tailwind-components(V2)/outputs/backlink-articles";
process.chdir(DIR);

const items = JSON.parse(fs.readFileSync("inventory.json", "utf8"));
const metaByUrl = new Map(items.map((i) => [i.url, i]));

const esc = (s) => String(s).replace(/\|/g, "\\|").trim();

const chunks = [];
const rows = [];
let articleNo = 0;

// ---------------- front matter + master index ----------------
let front = [];
front.push("# Commonwealth Migration — Backlink & Guest-Post Article Pack");
front.push("");
front.push("**Prepared for:** Commonwealth Migration Group Inc. (CICC-regulated, RCIC No. R711592) — Brampton, Ontario  ");
front.push("**Website:** https://commonwealthmigration.ca  ");
front.push("**Contents:** 111 unique guest-post articles — one for every live page topic on the site  ");
front.push("**Total length:** approx. 75,000 words  ");
front.push("**Prepared:** 22 September 2026");
front.push("");
front.push("---");
front.push("");
front.push("## How to use this pack");
front.push("");
front.push("Every article here is a standalone guest post, written to be pitched to a third-party website — a blog, an industry publication, a directory or a news outlet — to earn a backlink to one specific page on commonwealthmigration.ca. Each article targets exactly one page, and that page is named in the article's backlink details block.");
front.push("");
front.push("**What sits under each article heading**");
front.push("");
front.push("- A **Backlink details** block, which is for your own outreach records. It gives the exact backlink URL, the two anchor texts the article already uses, the primary keyword and the category.");
front.push("- The article itself, beginning at the first paragraph after that block.");
front.push("");
front.push("**Please do not send the Backlink details block to a publisher.** It is internal metadata. Everything from the article's opening paragraph to the closing call to action is the publishable copy.");
front.push("");
front.push("**How each article is built**");
front.push("");
front.push("- **One article per page topic.** All 111 live topics are covered, in the site's own category order.");
front.push("- **Two links per article.** One contextual link inside the body prose and one in the closing call to action — both to the same target page, both with descriptive anchor text. Nothing says \"click here\".");
front.push("- **Unique angles throughout.** No two articles share an opening, structure or subheadings, so they can be placed on different sites without reading as duplicated content.");
front.push("- **No invented figures.** The articles deliberately avoid quoting specific fees, CRS cut-offs, processing times or draw dates, and point readers to the official page instead — so they stay accurate as the rules change.");
front.push("");
front.push("**If a publisher wants different anchor text,** keep the anchor descriptive and the URL unchanged. The suggested anchors are a starting point, not a requirement.");
front.push("");
front.push("**Compliance note to keep intact when republishing.** Every article states that Commonwealth Migration Group is a private consultancy and not a government body, that no outcome is guaranteed, and that the information is general rather than legal advice. Please leave those sentences in.");
front.push("");
front.push("---");
front.push("");
front.push("## Master backlink index");
front.push("");
front.push("All 111 articles, with the page each one links to. Full anchor texts are in each article's backlink details block.");
front.push("");
front.push("| # | Article title | Backlink URL | Category |");
front.push("|---|---|---|---|");

// ---------------- articles ----------------
for (let i = 1; i <= 14; i++) {
  const f = `part-${String(i).padStart(2, "0")}.md`;
  const raw = fs.readFileSync(f, "utf8").trim();
  const partTitle = raw.split("\n")[0].replace(/^#\s*/, "").trim();
  const arts = raw.split(/\n(?=## )/).filter((s) => /^## /.test(s));

  const chunk = [];
  chunk.push("");
  chunk.push(`## ${partTitle}`);
  chunk.push("");

  for (const a of arts) {
    articleNo++;
    const title = a.match(/^## (.+)$/m)[1].trim();
    const url = (a.match(/\*\*Target page:\*\*\s*\[[^\]]+\]\((https?:\/\/[^)]+)\)/) || [])[1];
    const keyword = (a.match(/\*\*Primary keyword:\*\*\s*(.+)$/m) || [])[1] || "";
    const category = (a.match(/\*\*Category:\*\*\s*(.+)$/m) || [])[1] || "";
    const wc = (a.match(/\*\*Word count:\*\*\s*~?(\d+)/) || [])[1] || "";
    const meta = metaByUrl.get(url) || {};

    // body = everything after the metadata block
    const body = a.replace(/^## .+\n/, "").replace(/\*\*Target page:\*\*[\s\S]*?\*\*Word count:\*\*[^\n]*\n/, "").trim();

    // extract the two anchor texts used for the target link, in order of appearance
    const anchors = [...body.matchAll(new RegExp("\\[([^\\]]+)\\]\\(" + url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\)", "g"))].map((m) => m[1]);
    const bodyAnchor = anchors[0] || title;
    const ctaAnchor = anchors.length > 1 ? anchors[anchors.length - 1] : anchors[0] || title;

    // demote the article's own ### subheadings to #### so the article title can be H3
    const bodyForDoc = body.replace(/^### /gm, "#### ");

    chunk.push(`### ${title}`);
    chunk.push("");
    chunk.push("**Backlink details**");
    chunk.push("");
    chunk.push(`- **Backlink URL:** ${url}`);
    chunk.push(`- **Target page:** ${meta.path || ""}`);
    chunk.push(`- **Anchor text — in-body link:** ${bodyAnchor}`);
    chunk.push(`- **Anchor text — closing call to action:** ${ctaAnchor}`);
    chunk.push(`- **Primary keyword:** ${keyword}`);
    chunk.push(`- **Category:** ${category}`);
    chunk.push(`- **Length:** approx. ${wc} words`);
    chunk.push("");
    chunk.push(bodyForDoc);
    chunk.push("");

    rows.push(`| ${articleNo} | ${esc(title)} | ${url} | ${esc(category)} |`);
  }

  chunks.push({ name: `chunk-${String(i).padStart(2, "0")}.md`, content: chunk.join("\n") });
}

// write front matter chunk with the completed index
front = front.concat(rows);
front.push("");
front.push("---");
front.push("");
fs.writeFileSync("word/chunk-00.md", front.join("\n"));

for (const c of chunks) fs.writeFileSync("word/" + c.name, c.content);

console.log("articles:", articleNo);
console.log("chunks:", 1 + chunks.length);
let total = front.join("\n").length;
chunks.forEach((c) => (total += c.content.length));
console.log("total chars:", total);
console.log("index rows:", rows.length);
console.log("\nsample details block:\n" + chunks[0].content.split("\n").slice(0, 22).join("\n"));
