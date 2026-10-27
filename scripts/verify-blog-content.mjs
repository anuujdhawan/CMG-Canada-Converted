/**
 * Content audit for the research guides under `/blog/<slug>`.
 *
 * Run with `npm run validate:blog-content`. Checks the rules that keep a blog
 * able to rank and that no lint rule or build step can see:
 *
 *   - every post in `blog-research.js` has exactly one article file, and no
 *     article file exists for a slug that is not published;
 *   - the long-form body is deep enough (word floor per post);
 *   - the answer block is in the 40–60 word range an answer engine will quote;
 *   - section ids are unique, kebab-case and usable as CSS selectors;
 *   - the researched keyword set for each post actually appears in the body;
 *   - internal links point at routes that exist, and citations point at
 *     official domains.
 *
 * Metadata is intentionally NOT read from the article files — title,
 * description, category and keywords live in `blog-research.js` and must not be
 * duplicated, because they drive routing, metadata and the sitemap.
 */

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const articlesDir = path.join(root, "src/data/blog-articles");

const MIN_WORDS = 1300;
const LOCAL_MIN_WORDS = 1800;
const QUICK_ANSWER_MIN = 40;
const QUICK_ANSWER_MAX = 60;
const FAQ_MIN = 10;
const FAQ_MAX = 15;
const FAQ_ANSWER_MIN = 25;
const FAQ_ANSWER_MAX = 95;
const SECTION_MIN = 6;
const LOCAL_SECTION_MIN = 6;
const SECTION_MIN_BODY = 1;
const GLOSSARY_MIN = 4;
const LOCAL_GLOSSARY_MIN = 4;
const LOCAL_SOURCE_MIN = 4;
const RELATED_MIN = 3;

/** Domains a guide may cite as an official source. */
const OFFICIAL_DOMAINS = [
  "canada.ca",
  "cic.gc.ca",
  "laws-lois.justice.gc.ca",
  "justice.gc.ca",
  "canada.ca/en/immigration-refugees-citizenship",
  "www.canada.ca",
  "ontario.ca",
  "alberta.ca",
  "welcomebc.ca",
  "immigratemanitoba.com",
  "college-ic.ca",
  "statcan.gc.ca",
  "lso.ca",
  "brampton.ca",
  "fct-cf.gc.ca",
];

const failures = [];
const warnings = [];

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

const words = (value) => String(value || "").trim().split(/\s+/).filter(Boolean).length;

function articleWords(article) {
  const parts = [article.quickAnswer, ...(article.keyTakeaways || [])];
  for (const section of article.sections || []) {
    parts.push(section.heading, ...(section.body || []));
    if (section.list) parts.push(section.list.title || "", ...(section.list.items || []));
    if (section.table) {
      parts.push(section.table.caption || "", ...(section.table.columns || []), ...(section.table.rows || []).flat());
    }
    if (section.callout) parts.push(section.callout.label, section.callout.text);
  }
  for (const entry of article.glossary || []) parts.push(entry.term, entry.definition);
  for (const faq of article.faqs || []) parts.push(faq.question, faq.answer);
  for (const link of article.related || []) parts.push(link.label, link.note || "");
  return parts.filter(Boolean).join(" ");
}

// ---------------------------------------------------------------- live routes
function liveRoutes() {
  const routes = new Set([
    "/", "/blog", "/canada-immigration-news",
    "/contact/book-immigration-consultation-canada",
    "/tools/canada-immigration-calculators",
    "/tools/crs-calculator-canada",
    "/tools/pnp-eligibility-canada",
    "/tools/noc-finder-canada",
    "/tools/document-checklist-canada",
    "/assessment/free-canada-immigration-assessment",
  ]);
  const addAll = (records) => {
    for (const record of records) if (record?.path) routes.add(record.path);
  };
  const readJson = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
  const list = (value) => (Array.isArray(value) ? value : value?.pages || Object.values(value));

  addAll(readJson("pageData/route-map.json"));
  addAll(list(readJson("src/data/cmg-pages.json")));
  addAll(list(readJson("src/data/cmg-legal.json")));
  return routes;
}

// ------------------------------------------------------------------- the data
const researchModule = await import(pathToFileURL(path.join(root, "src/data/blog-research.js")).href);
const posts = researchModule.RESEARCH_BLOG_POSTS;
const routes = liveRoutes();
for (const post of posts) routes.add("/blog/" + post.slug);

function articleFiles(directory, prefix = "") {
  return fs.readdirSync(path.join(directory, prefix), { withFileTypes: true }).flatMap((entry) => {
    const relative = path.join(prefix, entry.name);
    if (entry.isDirectory()) return articleFiles(directory, relative);
    if (entry.name.endsWith(".js") && entry.name !== "index.js") return [relative];
    return [];
  });
}

const files = articleFiles(articlesDir).sort();
const articles = new Map();
for (const file of files) {
  const mod = await import(pathToFileURL(path.join(articlesDir, file)).href);
  const article = mod.default;
  const slug = path.basename(file, ".js");
  if (!article || typeof article !== "object") {
    fail(`${file}: default export is not an article object`);
    continue;
  }
  if (article.slug && article.slug !== slug) fail(`${file}: article slug ${article.slug} does not match its file name`);
  if (articles.has(slug)) fail(`${file}: duplicate slug ${slug}`);
  articles.set(slug, { article, file });
}

// The article page and JSON-LD builder must both consume the article's FAQ
// array, so every visible accordion answer is the answer exposed in FAQPage.
const articlePageSource = fs.readFileSync(path.join(root, "src/components/blog/BlogArticlePage.js"), "utf8");
const schemaSource = fs.readFileSync(path.join(root, "src/lib/blogArticleSchema.js"), "utf8");
const articleRouteSource = fs.readFileSync(path.join(root, "src/app/blog/[slug]/page.js"), "utf8");
if (!articlePageSource.includes("const faqs = (article?.faqs || []).map((faq) => ({ question: faq.question, answer: faq.answer }));") || !articlePageSource.includes("<FaqSection")) {
  fail("BlogArticlePage: visible FAQ section no longer renders from article.faqs");
}
if (!schemaSource.includes("mainEntity: article.faqs.map((faq) => ({") || !schemaSource.includes("name: faq.question") || !schemaSource.includes("text: faq.answer")) {
  fail("blogArticleSchema: FAQPage no longer maps article FAQ question and answer text");
}
if (!articleRouteSource.includes("articleStructuredData(post, article)")) {
  fail("blog/[slug]: article FAQ structured data is not attached to the published route");
}

const published = new Set(posts.map((post) => post.slug));

for (const post of posts) {
  if (!articles.has(post.slug)) fail(`missing article body for published slug ${post.slug}`);
}
for (const slug of articles.keys()) {
  if (!published.has(slug)) fail(`article file exists for unpublished slug ${slug}`);
}

// ---------------------------------------------------------------- per article
const wordCounts = [];
let faqParityPosts = 0;
let faqParityEntries = 0;

for (const post of posts) {
  const entry = articles.get(post.slug);
  if (!entry) continue;
  const { article, file } = entry;
  const label = post.slug;
  const isLocalArticle = file.startsWith("brampton/");
  const body = articleWords(article);
  const total = words(body);
  wordCounts.push(total);

  const bodyFloor = isLocalArticle ? LOCAL_MIN_WORDS : MIN_WORDS;
  if (total < bodyFloor) fail(`${label}: body is ${total} words, below the ${bodyFloor} floor`);

  const qa = words(article.quickAnswer);
  if (qa < QUICK_ANSWER_MIN || qa > QUICK_ANSWER_MAX) {
    fail(`${label}: quickAnswer is ${qa} words, expected ${QUICK_ANSWER_MIN}–${QUICK_ANSWER_MAX}`);
  }

  const sections = article.sections || [];
  const sectionFloor = isLocalArticle ? LOCAL_SECTION_MIN : SECTION_MIN;
  if (sections.length < sectionFloor) fail(`${label}: only ${sections.length} sections, expected at least ${sectionFloor}`);

  const seenIds = new Set();
  for (const section of sections) {
    if (!section.id) {
      fail(`${label}: a section has no id (the table of contents needs it)`);
      continue;
    }
    if (seenIds.has(section.id)) fail(`${label}: duplicate section id ${section.id}`);
    seenIds.add(section.id);
    if (/^[0-9]/.test(section.id)) {
      fail(`${label}: section id "${section.id}" starts with a digit — querySelector("#${section.id}") is an invalid selector`);
    }
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(section.id)) fail(`${label}: section id "${section.id}" is not kebab-case`);
    if (!section.heading) fail(`${label}: section ${section.id} has no heading`);
    if (!isLocalArticle && (section.body || []).filter(Boolean).length < SECTION_MIN_BODY) {
      fail(`${label}: section ${section.id} has no body paragraph`);
    }
    if (section.table) {
      const cols = section.table.columns?.length || 0;
      if (cols === 0) fail(`${label}: section ${section.id} has a table with no columns`);
      (section.table.rows || []).forEach((row, index) => {
        if (row.length !== cols) {
          fail(`${label}: section ${section.id} table row ${index + 1} has ${row.length} cells, expected ${cols}`);
        }
      });
      if (!section.table.caption) fail(`${label}: section ${section.id} table has no caption`);
    }
  }

  const glossary = article.glossary || [];
  const glossaryFloor = isLocalArticle ? LOCAL_GLOSSARY_MIN : GLOSSARY_MIN;
  if (glossary.length < glossaryFloor) {
    fail(`${label}: only ${glossary.length} glossary terms, expected at least ${glossaryFloor}`);
  }

  const faqs = article.faqs || [];
  if (faqs.length < FAQ_MIN || faqs.length > FAQ_MAX) {
    fail(`${label}: ${faqs.length} FAQs, expected ${FAQ_MIN}–${FAQ_MAX}`);
  }
  const seenFaqQuestions = new Set();
  for (const faq of faqs) {
    if (!faq.question?.trim().endsWith("?")) fail(`${label}: FAQ question is not a question: "${faq.question}"`);
    const normalizedQuestion = faq.question?.trim().toLowerCase();
    if (seenFaqQuestions.has(normalizedQuestion)) fail(`${label}: duplicate FAQ question: "${faq.question}"`);
    seenFaqQuestions.add(normalizedQuestion);
    const len = words(faq.answer);
    if (len < FAQ_ANSWER_MIN || len > FAQ_ANSWER_MAX) {
      fail(`${label}: FAQ answer is ${len} words, expected ${FAQ_ANSWER_MIN}–${FAQ_ANSWER_MAX}: "${faq.question}"`);
    }
  }

  const visibleFaqs = faqs.map((faq) => ({ question: faq.question, answer: faq.answer }));
  const faqPageEntities = faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  }));
  const faqPageText = faqPageEntities.map((entity) => ({ question: entity.name, answer: entity.acceptedAnswer.text }));
  if (JSON.stringify(visibleFaqs) !== JSON.stringify(faqPageText)) {
    fail(`${label}: visible FAQ text and FAQPage schema do not match`);
  } else {
    faqParityPosts++;
    faqParityEntries += faqs.length;
  }

  const related = article.related || [];
  const relatedFloor = isLocalArticle ? 1 : RELATED_MIN;
  if (related.length < relatedFloor) fail(`${label}: only ${related.length} related links, expected at least ${relatedFloor}`);
  for (const link of related) {
    if (!link.href?.startsWith("/")) fail(`${label}: related link href must be site-absolute: ${link.href}`);
    else if (!routes.has(link.href)) fail(`${label}: related link points at a route that does not exist: ${link.href}`);
    if (!link.label) fail(`${label}: related link ${link.href} has no label`);
  }
  for (const section of sections) {
    for (const link of section.related || []) {
      if (!routes.has(link.href)) fail(`${label}: section ${section.id} links to a missing route: ${link.href}`);
    }
  }

  const sources = article.sources || [];
  const sourceFloor = isLocalArticle ? LOCAL_SOURCE_MIN : 1;
  if (sources.length < sourceFloor) fail(`${label}: only ${sources.length} official sources, expected at least ${sourceFloor}`);
  for (const source of sources) {
    if (!/^https:\/\//.test(source.url || "")) fail(`${label}: source is not https: ${source.url}`);
    else if (!OFFICIAL_DOMAINS.some((domain) => new URL(source.url).hostname.endsWith(domain.replace(/^www\./, "")))) {
      warn(`${label}: source domain is not on the official list: ${source.url}`);
    }
    if (!source.label) fail(`${label}: source ${source.url} has no label`);
  }

  // The researched keyword set has to actually appear in the body. This is the
  // check that stops a guide drifting off the terms it was planned around.
  if (!isLocalArticle) {
    const haystack = body.toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, " ");
    const keywords = post.keywords.split("; ").map((k) => k.trim()).filter(Boolean);
    const missing = keywords.filter((keyword) => {
      const needle = keyword.toLowerCase().replace(/[’']/g, "'");
      return !haystack.includes(needle);
    });
    if (missing.length) fail(`${label}: researched keywords absent from the body: ${missing.join(" | ")}`);
  }

  // Metadata must not be duplicated into the article file.
  const raw = fs.readFileSync(path.join(articlesDir, file), "utf8");
  for (const field of ["title:", "description:", "category:", "keywords:"]) {
    if (new RegExp(`^\\s{2}${field}`, "m").test(raw)) {
      fail(`${label}: article file defines "${field}" — metadata belongs in blog-research.js only`);
    }
  }
}

if (wordCounts.length) {
  const min = Math.min(...wordCounts);
  const max = Math.max(...wordCounts);
  const avg = Math.round(wordCounts.reduce((a, b) => a + b, 0) / wordCounts.length);
  console.log(`Article bodies: ${wordCounts.length}/${posts.length} written · min ${min} · avg ${avg} · max ${max}`);
}
console.log(`FAQ parity: ${faqParityPosts}/${posts.length} articles · ${faqParityEntries} visible questions match FAQPage answers`);

for (const message of warnings) console.warn(`warning: ${message}`);

if (failures.length) {
  console.error(`\nblog content validation failed with ${failures.length} problem(s):`);
  for (const message of failures) console.error(`  - ${message}`);
  process.exitCode = 1;
} else {
  console.log(`Validated ${articles.size} article bodies against ${posts.length} published slugs.`);
}
