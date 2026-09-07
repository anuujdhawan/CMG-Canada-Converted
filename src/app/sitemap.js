import { getAllPages } from "@/lib/sitePages";
import { site } from "@/config/site";

// Transactional and confirmation pages must not be advertised as indexable
// search destinations. Their route metadata still controls the rendered
// robots directive; this set keeps the sitemap aligned with that decision.
const EXCLUDED_SITEMAP_PATHS = new Set([
  "/contact/pay-immigration-consultation-canada",
  "/pay/success",
]);

/**
 * Sitemap — one URL for every page built from the approved Markdown content, using each
 * page's own sitemap priority and last-modified date from the content files.
 * Emits nothing unless the site URL is configured.
 */
export default function sitemap() {
  if (!site.url) return [];

  const base = site.url.replace(/\/$/, "");

  const pages = getAllPages()
    .filter((page) => !EXCLUDED_SITEMAP_PATHS.has(page.path))
    .map((page) => {
      const lastModified = page.meta.lastModified ? new Date(page.meta.lastModified) : new Date();
      return {
        url: `${base}${page.path === "/" ? "" : page.path}`,
        lastModified,
        changeFrequency: page.path.startsWith("/blog/") ? "monthly" : "weekly",
        priority: page.meta.priority || 0.7,
      };
    });

  const knownUrls = new Set(pages.map((page) => page.url));
  const additionalPages = [
    ["/immigration-draws", "daily", 0.8],
    ["/tools/pnp-eligibility-canada", "weekly", 0.7],
    ["/tools/noc-finder-canada", "weekly", 0.7],
    ["/tools/document-checklist-canada", "weekly", 0.7],
    ["/contact/book-immigration-consultation-canada", "monthly", 0.8],
  ];
  for (const [path, changeFrequency, priority] of additionalPages) {
    const url = `${base}${path}`;
    if (knownUrls.has(url)) continue;
    pages.push({ url, lastModified: new Date("2026-09-07"), changeFrequency, priority });
    knownUrls.add(url);
  }

  return pages
    .sort((a, b) => b.priority - a.priority || a.url.localeCompare(b.url));
}
