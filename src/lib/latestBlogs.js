/**
 * Data for the "latest guides" carousel shown on the homepage and on service
 * pages.
 *
 * Why this does not use `@/lib/blog`: that module is built on
 * `@/lib/sitePages`, which reads `pageData/` from disk with `fs`. The carousel
 * is a client component, so importing `lib/blog` would drag the filesystem
 * into the browser bundle. `@/data/blog-research` is a plain static array with
 * no Node dependencies, so it is safe on both sides of the boundary.
 *
 * Maintenance: `FEATURED_BLOG_SLUGS` is the editorial "newest first" order.
 * When a new post is published in `src/data/blog-research.js`, add its slug to
 * the top of this list. Any slug that no longer exists is skipped silently
 * rather than rendering a dead card, and a matching entry must exist in
 * `BLOG_COVER_BY_CATEGORY` (or the generic fallback is used).
 */

import { RESEARCH_BLOG_POSTS } from "@/data/blog-research";

/** How many cards the carousel features. */
export const LATEST_BLOG_LIMIT = 10;

/**
 * Editorial order, newest / most topical first. Deliberately spread across
 * service areas so the strip never shows the same cover art twice in a row.
 */
const FEATURED_BLOG_SLUGS = [
  "canada-immigration-levels-plan-2026",
  "express-entry-canada-2026-categories",
  "provincial-nominee-program-canada-2026",
  "canada-work-permit-types-2026",
  "canada-study-permit-2026",
  "spousal-sponsorship-canada-2026",
  "canada-visitor-visa-documents-refusal",
  "canada-pr-pathways-2026",
  "lmia-canada-explained",
  "canada-immigration-processing-times",
];

/** Cover art per `category` label in `src/data/blog-research.js`. */
const BLOG_COVER_BY_CATEGORY = {
  "Canada Immigration": {
    src: "/images/pages/toronto-skyline.webp",
    alt: "Toronto skyline at dusk, representing Canadian immigration planning",
  },
  "Canada Immigration News": {
    src: "/images/pages/team-laptops.webp",
    alt: "Immigration team reviewing the latest Canadian policy updates",
  },
  "Express Entry": {
    src: "/images/pages/calculator.webp",
    alt: "Calculator and notes used to plan an Express Entry profile",
  },
  "Permanent Residence": {
    src: "/images/pages/canada-flag.webp",
    alt: "Canadian flag representing a permanent residence decision",
  },
  "Provincial Nominee Programs": {
    src: "/images/pages/vancouver-harbour.webp",
    alt: "Canadian harbour city skyline used to compare provincial programs",
  },
  "Regional Immigration": {
    src: "/images/pages/mountain-lake.webp",
    alt: "Canadian lake and mountain landscape representing a regional immigration route",
  },
  "Work Permits": {
    src: "/images/pages/workers.webp",
    alt: "Workers reviewing a plan for employment in Canada",
  },
  "Employer Immigration": {
    src: "/images/pages/business-team.webp",
    alt: "Business team discussing an employer immigration plan",
  },
  "Study to Work": {
    src: "/images/pages/graduation.webp",
    alt: "Graduate planning the step from study permit to Canadian work experience",
  },
  "Study Permits": {
    src: "/images/pages/students-study.webp",
    alt: "International students studying together in Canada",
  },
  "Visitor Visas": {
    src: "/images/pages/travel-passport.webp",
    alt: "Passport and travel documents prepared for a Canadian visitor visa",
  },
  "Family Sponsorship": {
    src: "/images/pages/family.webp",
    alt: "Family planning a Canadian sponsorship pathway together",
  },
  "Processing Times": {
    src: "/images/pages/office-desk.webp",
    alt: "Immigration paperwork being checked against published processing times",
  },
  Citizenship: {
    src: "/images/pages/maple-leaf.webp",
    alt: "Maple leaf representing Canadian citizenship",
  },
};

const FALLBACK_COVER = {
  src: "/images/pages/documents.webp",
  alt: "Canadian immigration documents prepared for review",
};

const POST_BY_SLUG = Object.fromEntries(RESEARCH_BLOG_POSTS.map((post) => [post.slug, post]));

/**
 * Latest guides, in the order the carousel should show them.
 * @param {number} [limit]
 */
export function getLatestBlogPosts(limit = LATEST_BLOG_LIMIT) {
  return FEATURED_BLOG_SLUGS.slice(0, limit)
    .map((slug) => POST_BY_SLUG[slug])
    .filter(Boolean)
    .map((post) => ({
      id: post.slug,
      href: `/blog/${post.slug}`,
      title: post.title,
      category: post.category,
      description: post.description,
      cover: BLOG_COVER_BY_CATEGORY[post.category] || FALLBACK_COVER,
    }));
}
