import { getAllPages } from "./sitePages";
import { RESEARCH_BLOG_POSTS } from "@/data/blog-research";

export const BLOG_CATEGORIES = [
  {
    slug: "express-entry",
    label: "Express Entry",
    title: "Points, programs and permanent residence",
    description: "Understand the federal programs, CRS strategy and category-based decisions before you submit a profile.",
  },
  {
    slug: "work-permits",
    label: "Work permits & PR",
    title: "Work in Canada, then plan what comes next",
    description: "Compare work permit options, employer requirements and routes that may connect temporary status to permanent residence.",
  },
  {
    slug: "study-permits",
    label: "Study permits & student pathways",
    title: "Study with the next chapter in view",
    description: "Plan the study permit, school evidence and post-graduation options as one connected pathway.",
  },
  {
    slug: "family-sponsorship",
    label: "Family sponsorship",
    title: "Bring the people who matter closer",
    description: "Explore sponsorship planning with a clear view of evidence, eligibility and the route ahead.",
  },
  {
    slug: "provincial-nominee-programs",
    label: "Provincial nominee programs",
    title: "Compare provinces before you commit",
    description: "Use a practical lens for provincial streams, employer pathways and the details that make a route defensible.",
  },
  {
    slug: "employer-immigration",
    label: "Employer immigration",
    title: "Build a workforce pathway that holds up",
    description: "Research LMIA and employer-led programs with documentation, compliance and timing in the same frame.",
  },
  {
    slug: "visitor-visas",
    label: "Visitor visas & travel",
    title: "Prepare the temporary visit carefully",
    description: "Make the purpose of travel, ties and supporting evidence easy for a decision-maker to understand.",
  },
  {
    slug: "refusals",
    label: "Refusals & appeals",
    title: "Read the decision before choosing the response",
    description: "Turn refusal reasons and procedural concerns into a measured plan for what to do next.",
  },
  {
    slug: "immigration-guides",
    label: "Immigration planning guides",
    title: "Choose guidance that fits the file",
    description: "Practical research for selecting a representative, organizing a case and making the next conversation useful.",
  },
];

const CATEGORY_BY_SLUG = Object.fromEntries(BLOG_CATEGORIES.map((category) => [category.slug, category]));

/** Category slug used when no category is requested, or an unknown one is. */
export const ALL_BLOG_CATEGORY = "all";

/**
 * The research posts in `src/data/blog-research.js` carry their own editorial
 * category label; this maps each label onto one of the tabs above. Kept at
 * module scope because both `getBlogPosts` and the article route need it.
 */
const RESEARCH_CATEGORY_SLUG = {
  "Canada Immigration": "immigration-guides",
  "Canada Immigration News": "immigration-guides",
  "Permanent Residence": "immigration-guides",
  "Express Entry": "express-entry",
  "Provincial Nominee Programs": "provincial-nominee-programs",
  "Regional Immigration": "provincial-nominee-programs",
  "Work Permits": "work-permits",
  "Employer Immigration": "employer-immigration",
  "Study to Work": "study-permits",
  "Study Permits": "study-permits",
  "Visitor Visas": "visitor-visas",
  "Family Sponsorship": "family-sponsorship",
  "Processing Times": "immigration-guides",
  "Citizenship": "immigration-guides",
};

/** Resolve a research post's editorial label to a tab slug. */
export function researchCategorySlug(label) {
  return RESEARCH_CATEGORY_SLUG[label] || "immigration-guides";
}

/** The tab definition (label, title, description) behind a slug. */
export function getBlogCategory(slug) {
  return CATEGORY_BY_SLUG[slug] || null;
}

const BLOG_IMAGE_BY_FILE = {
  "blog__canada-visitor-visa-refused.md": {
    src: "/images/pages/travel-passport.webp",
    alt: "Passport and travel documents prepared for a Canadian visitor visa application",
  },
  "blog__canada-work-permit-types.md": {
    src: "/images/pages/workers.webp",
    alt: "Workers reviewing a plan for employment in Canada",
  },
  "blog__express-entry-beginners-guide.md": {
    src: "/images/pages/calculator.webp",
    alt: "Calculator and notes used to plan an Express Entry profile",
  },
  "blog__express-entry-category-based-selection.md": {
    src: "/images/pages/documents.webp",
    alt: "Organized immigration documents ready for a category-based selection review",
  },
  "blog__crs-score-canada.md": {
    src: "/images/pages/canada-flag.webp",
    alt: "Canadian flag representing a permanent residence planning decision",
  },
  "blog__express-entry-vs-pnp.md": {
    src: "/images/pages/city-skyline.webp",
    alt: "Canadian city skyline used to compare federal and provincial immigration routes",
  },
  "blog__choose-brampton-immigration-consultant.md": {
    src: "/images/pages/office-meeting.webp",
    alt: "Immigration consultation meeting in a professional office",
  },
  "blog__choose-immigration-consultant-canada.md": {
    src: "/images/pages/team-laptops.webp",
    alt: "Consulting team collaborating on a Canadian immigration file",
  },
  "blog__immigration-refusal-canada.md": {
    src: "/images/pages/meeting-whiteboard.webp",
    alt: "Team reviewing evidence and next steps after an immigration refusal",
  },
  "blog__international-student-to-canadian-pr.md": {
    src: "/images/pages/students-study.webp",
    alt: "International students studying together while planning their Canadian future",
  },
  "blog__lmia-canada-explained.md": {
    src: "/images/pages/business-team.webp",
    alt: "Business team discussing an employer immigration plan",
  },
  "blog__ontario-pnp.md": {
    src: "/images/pages/toronto-skyline.webp",
    alt: "Toronto skyline representing an Ontario provincial nominee pathway",
  },
  "blog__spousal-sponsorship-canada.md": {
    src: "/images/pages/couple.webp",
    alt: "Couple planning a family sponsorship application together",
  },
  "blog__work-permit-to-pr-canada.md": {
    src: "/images/pages/handshake.webp",
    alt: "Professional handshake representing a work permit to permanent residence plan",
  },
};

const BLOG_IMAGE_BY_CATEGORY = {
  "express-entry": {
    src: "/images/pages/documents.webp",
    alt: "Organized immigration documents prepared for an Express Entry review",
  },
  "work-permits": {
    src: "/images/pages/workers.webp",
    alt: "Workers reviewing a Canadian employment and immigration plan",
  },
  "study-permits": {
    src: "/images/pages/students-study.webp",
    alt: "International students planning their studies and future in Canada",
  },
  "family-sponsorship": {
    src: "/images/pages/family.webp",
    alt: "Family planning a Canadian sponsorship pathway together",
  },
  "provincial-nominee-programs": {
    src: "/images/pages/canada-flag.webp",
    alt: "Canadian flag representing a provincial immigration pathway",
  },
  "employer-immigration": {
    src: "/images/pages/business-team.webp",
    alt: "Business team reviewing an employer immigration plan",
  },
  "visitor-visas": {
    src: "/images/pages/travel-passport.webp",
    alt: "Passport and travel documents prepared for a Canadian visit",
  },
  refusals: {
    src: "/images/pages/meeting-whiteboard.webp",
    alt: "Team reviewing an immigration refusal and the next steps",
  },
  "immigration-guides": {
    src: "/images/pages/office-meeting.webp",
    alt: "Immigration consultation meeting about a Canadian pathway",
  },
};

const DEFAULT_BLOG_IMAGE = {
  src: "/images/pages/documents.webp",
  alt: "Canadian immigration documents prepared for review",
};

function readableTitle(title) {
  return title
    .replace(/:\s*research the decision before the form.*$/i, "")
    .replace(/:\s*clearer information for your next step.*$/i, "")
    .trim();
}

function categoryForPath(pathname) {
  const slug = pathname.split("/")[2];
  return CATEGORY_BY_SLUG[slug] || BLOG_CATEGORIES[BLOG_CATEGORIES.length - 1];
}

function imageForPost(page, category) {
  return BLOG_IMAGE_BY_FILE[page.file] || BLOG_IMAGE_BY_CATEGORY[category.slug] || DEFAULT_BLOG_IMAGE;
}

export function getBlogPosts() {
  const sourcePosts = getAllPages()
    .filter((page) => page.path.startsWith("/blog/"))
    .map((page) => {
      const category = categoryForPath(page.path);
      return {
        ...page,
        title: readableTitle(page.h1 || page.seo.title),
        category,
        image: imageForPost(page, category),
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
  const generatedPosts = RESEARCH_BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    title: post.title,
    seo: { title: `${post.title} | Commonwealth Migration Canada`, description: post.description, keywords: post.keywords.split('; ') },
    meta: { lastModified: '2026-09-21' },
    category: { slug: researchCategorySlug(post.category), label: post.category, title: post.category, description: post.description },
    image: DEFAULT_BLOG_IMAGE,
    research: post,
  }));
  return [...sourcePosts, ...generatedPosts].sort((a, b) => a.title.localeCompare(b.title));
}

/** A single post by its `/blog/<slug>` path, or null. */
export function getBlogPostBySlug(slug) {
  return getBlogPosts().find((post) => post.path === `/blog/${slug}`) || null;
}

/** A post plus its category slug and tab definition, resolved once. */
export function getBlogPostContext(slug) {
  const post = getBlogPostBySlug(slug);
  if (!post) return null;
  const categorySlug = post.category?.slug || ALL_BLOG_CATEGORY;
  return { post, categorySlug, category: getBlogCategory(categorySlug) || post.category };
}

/**
 * Normalise a `?category=` value from the URL.
 *
 * Falls back to "all" for anything unrecognised so `?category=typo` shows the
 * full library instead of an empty panel.
 */
export function resolveBlogCategory(value) {
  const slug = String(Array.isArray(value) ? value[0] ?? "" : value ?? "").trim().toLowerCase();
  if (!slug || slug === ALL_BLOG_CATEGORY) return ALL_BLOG_CATEGORY;
  return CATEGORY_BY_SLUG[slug] ? slug : ALL_BLOG_CATEGORY;
}

/** Parse a `?page=` value, defaulting to 1 for anything unusable. */
export function resolveBlogPage(value) {
  const raw = Array.isArray(value) ? value[0] : value;
  const parsed = Number.parseInt(String(raw ?? "1"), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
}

/**
 * Shareable, crawlable href for a blog view.
 *
 * The default view stays at the bare `/blog` so the canonical list URL is not
 * duplicated by a `?category=all` twin.
 */
export function blogHref({ category, page } = {}) {
  const params = new URLSearchParams();
  if (category && category !== ALL_BLOG_CATEGORY) params.set("category", category);
  if (Number(page) > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

/**
 * Page a list of posts, clamping the requested page into range.
 *
 * Clamping matters: `?page=99` must render the last page rather than an empty
 * grid, and an out-of-range page must never produce a "Page 99 of 1" label.
 */
export function paginateBlogPosts(items = [], page = 1, perPage = 6) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(Math.max(1, Number(page) || 1), totalPages);
  const start = (current - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    page: current,
    totalPages,
    total: items.length,
    hasPrev: current > 1,
    hasNext: current < totalPages,
  };
}

export function getBlogGroups() {
  const posts = getBlogPosts();
  return BLOG_CATEGORIES
    .map((category) => ({
      ...category,
      posts: posts.filter((post) => post.category.slug === category.slug),
    }))
    .filter((group) => group.posts.length > 0);
}

/**
 * Editorial "newest first" order for the Canada immigration news index.
 *
 * Deliberately a curated slug list rather than a date sort: the research posts
 * carry no publish date, and this index is meant to be the *policy and timing*
 * feed — levels plans, category announcements, processing updates — not a
 * second copy of the topic library. Any slug that no longer exists is skipped
 * silently, so removing a post cannot leave a dead card behind.
 */
const NEWS_SLUGS = [
  "canada-immigration-levels-plan-2026",
  "express-entry-canada-2026-categories",
  "canada-immigration-news-monthly-ircc-update",
  "provincial-nominee-program-canada-2026",
  "canada-immigration-processing-times",
  "what-delays-canada-immigration-application",
];

/** The curated news feed, resolved against the full post library. */
export function getNewsPosts() {
  const posts = getBlogPosts();
  const byPath = new Map(posts.map((post) => [post.path, post]));
  return NEWS_SLUGS.map((slug) => byPath.get(`/blog/${slug}`)).filter(Boolean);
}
