import { RESEARCH_BLOG_POSTS } from "@/data/blog-research";
import { calculatorTools } from "@/data/calculatorTools";

// Keep sitemap, LLM discovery and crawler audits on the same explicit list of
// routes that are implemented outside the page-data registry.
export const EXCLUDED_SITEMAP_PATHS = new Set([
  "/pay/success",
  "/tools/clb-converter-canada",
  "/tools/crs-calculator-canada",
  "/tools/fsw-67-point-calculator-canada",
  "/tools/rural-community-immigration-program-canada",
]);

export const ADDITIONAL_INDEXABLE_PAGES = [
  { path: "/canada-immigration-news", lastModified: "2026-10-06", changeFrequency: "daily", priority: 0.8 },
  { path: "/immigration-draws", lastModified: "2026-10-06", changeFrequency: "daily", priority: 0.8 },
  { path: "/pnp-draws", lastModified: "2026-10-08", changeFrequency: "daily", priority: 0.8 },
  { path: "/assessment/free-canada-immigration-assessment", lastModified: "2026-10-06", changeFrequency: "weekly", priority: 0.8 },
  { path: "/ontario-pr", lastModified: "2026-10-29", changeFrequency: "weekly", priority: 0.8 },
  { path: "/tools/canada-immigration-calculators", lastModified: "2026-10-06", changeFrequency: "weekly", priority: 0.8 },
  ...calculatorTools.map(({ slug }) => ({ path: `/tools/${slug}`, lastModified: "2026-11-14", changeFrequency: "weekly", priority: 0.8 })),
  { path: "/tools/pnp-eligibility-canada", lastModified: "2026-10-06", changeFrequency: "weekly", priority: 0.7 },
  { path: "/tools/noc-finder-canada", lastModified: "2026-11-09", changeFrequency: "weekly", priority: 0.7 },
  { path: "/tools/document-checklist-canada", lastModified: "2026-10-06", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact/book-immigration-consultation-canada", lastModified: "2026-10-06", changeFrequency: "monthly", priority: 0.8 },
  ...RESEARCH_BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: post.updated || post.date || "2026-10-06",
    changeFrequency: "monthly",
    priority: 0.7,
  })),
];
