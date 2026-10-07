import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { getAllPages } from "@/lib/sitePages";
import { RESEARCH_BLOG_POSTS } from "@/data/blog-research";
import { site } from "@/config/site";

/**
 * Last resort when a page declares no date and its source file cannot be read.
 * Only reached if the content files are missing at build time.
 */
const FALLBACK_LASTMOD = new Date("2026-08-29");

const mtimeCache = new Map();

/**
 * Date of the last commit that touched a page's source file.
 *
 * Preferred over the file's mtime because a fresh CI checkout stamps every
 * file with the deploy time, which would make `lastmod` change on every build
 * even when the content did not.
 */
function gitCommitDate(sourceFile) {
  try {
    const iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", sourceFile], {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    const date = new Date(iso);
    return Number.isNaN(date.getTime()) ? null : date;
  } catch {
    return null;
  }
}

/**
 * Real modification date of a page's source file.
 *
 * Every JSON/JS page record used to fall back to one frozen "2026-08-29"
 * string, so 98 of 108 sitemap entries claimed an identical — and increasingly
 * stale — lastmod. Newly authored pages looked untouched. Reading the source
 * file's real change date instead means a freshly written page advertises a
 * recent date, which is what gets it crawled.
 */
function sourceFileDate(sourceFile) {
  if (!sourceFile) return null;
  if (mtimeCache.has(sourceFile)) return mtimeCache.get(sourceFile);
  const value = gitCommitDate(sourceFile) || (() => {
    try {
      return fs.statSync(path.join(process.cwd(), sourceFile)).mtime;
    } catch {
      return null;
    }
  })();
  mtimeCache.set(sourceFile, value);
  return value;
}

function resolveLastModified(page) {
  if (page.meta?.lastModified) {
    const declared = new Date(page.meta.lastModified);
    if (!Number.isNaN(declared.getTime())) return declared;
  }
  return sourceFileDate(page.meta?.sourceFile) || FALLBACK_LASTMOD;
}

// Transactional and confirmation pages must not be advertised as indexable
// search destinations. Their route metadata still controls the rendered
// robots directive; this set keeps the sitemap aligned with that decision.
const EXCLUDED_SITEMAP_PATHS = new Set([
  "/pay/success",
]);

const ADDITIONAL_INDEXABLE_PAGES = [
  // Dedicated app routes do not come from pageData, so keep them explicit.
  { path: "/canada-immigration-news", lastModified: "2026-10-06", changeFrequency: "daily", priority: 0.8 },
  { path: "/immigration-draws", lastModified: "2026-10-06", changeFrequency: "daily", priority: 0.8 },
  { path: "/assessment/free-canada-immigration-assessment", lastModified: "2026-10-06", changeFrequency: "weekly", priority: 0.8 },
  { path: "/tools/canada-immigration-calculators", lastModified: "2026-10-06", changeFrequency: "weekly", priority: 0.8 },
  { path: "/tools/crs-calculator-canada", lastModified: "2026-10-06", changeFrequency: "weekly", priority: 0.8 },
  { path: "/tools/pnp-eligibility-canada", lastModified: "2026-10-06", changeFrequency: "weekly", priority: 0.7 },
  { path: "/tools/noc-finder-canada", lastModified: "2026-10-06", changeFrequency: "weekly", priority: 0.7 },
  { path: "/tools/document-checklist-canada", lastModified: "2026-10-06", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact/book-immigration-consultation-canada", lastModified: "2026-10-06", changeFrequency: "monthly", priority: 0.8 },
  ...RESEARCH_BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: "2026-10-06",
    changeFrequency: "monthly",
    priority: 0.7,
  })),
];

function isIndexable(page) {
  return !EXCLUDED_SITEMAP_PATHS.has(page.path) && !/\bnoindex\b/i.test(page.seo?.robots || "");
}

/**
 * Sitemap — one URL for every page built from the approved Markdown content, using each
 * page's own sitemap priority and last-modified date from the content files.
 * Emits nothing unless the site URL is configured.
 */
export default function sitemap() {
  if (!site.url) return [];

  const base = site.url.replace(/\/$/, "");

  const pages = getAllPages()
    .filter(isIndexable)
    .map((page) => {
      const lastModified = resolveLastModified(page);
      return {
        url: `${base}${page.path === "/" ? "" : page.path}`,
        lastModified,
        changeFrequency: page.path.startsWith("/blog/") ? "monthly" : "weekly",
        priority: page.meta.priority || 0.7,
      };
    });

  const knownUrls = new Set(pages.map((page) => page.url));
  for (const entry of ADDITIONAL_INDEXABLE_PAGES) {
    const url = `${base}${entry.path}`;
    if (knownUrls.has(url)) continue;
    pages.push({
      url,
      lastModified: new Date(entry.lastModified),
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    });
    knownUrls.add(url);
  }

  return pages
    .sort((a, b) => b.priority - a.priority || a.url.localeCompare(b.url));
}
