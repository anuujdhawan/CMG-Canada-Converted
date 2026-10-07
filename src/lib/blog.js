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

/**
 * Research posts need a slug-level cover rather than the category fallback:
 * several current posts share a category, and using one category image made
 * the blog grid look like the same article repeated across every card.
 * All covers are local WebP assets so the listing does not depend on remote
 * image hosts or runtime downloads.
 */
const BLOG_IMAGE_BY_RESEARCH_SLUG = {
  "canada-immigration-levels-plan-2026": {
    src: "/images/blog/canada-flag-office.webp",
    alt: "Canadian flag representing the national immigration levels plan",
  },
  "express-entry-canada-2026-categories": {
    src: "/images/blog/pr-application-form.webp",
    alt: "Organized immigration documents prepared for Express Entry category selection",
  },
  "crs-score-canada-how-to-improve": {
    src: "/images/blog/city-night.webp",
    alt: "Canadian city skyline representing an Express Entry CRS planning decision",
  },
  "canada-immigration-news-monthly-ircc-update": {
    src: "/images/blog/financial-district.webp",
    alt: "Canadian financial district representing current immigration news and policy updates",
  },
  "canada-pr-pathways-2026": {
    src: "/images/blog/toronto-newcomer.webp",
    alt: "Newcomer enjoying Toronto while considering Canadian permanent residence pathways",
  },
  "provincial-nominee-program-canada-2026": {
    src: "/images/blog/quebec-city.webp",
    alt: "Quebec City representing provincial nominee program options across Canada",
  },
  "rural-community-immigration-pilot-canada": {
    src: "/images/blog/small-town.webp",
    alt: "Small Canadian town representing rural community immigration options",
  },
  "atlantic-immigration-program-guide": {
    src: "/images/blog/bridge-at-dusk.webp",
    alt: "Bridge representing the journey through an Atlantic immigration pathway",
  },
  "canada-work-permit-types-2026": {
    src: "/images/blog/city-walk.webp",
    alt: "People moving through a Canadian city while planning work permit options",
  },
  "lmia-canada-explained": {
    src: "/images/blog/calgary-skyline.webp",
    alt: "Canadian business district representing an LMIA employer immigration plan",
  },
  "pgwp-canada-2026": {
    src: "/images/blog/toronto-newcomer.webp",
    alt: "Newcomer enjoying Toronto while planning post-graduation work in Canada",
  },
  "canada-study-permit-2026": {
    src: "/images/pages/students-study.webp",
    alt: "Students planning a Canadian study permit pathway",
  },
  "canada-visitor-visa-documents-refusal": {
    src: "/images/blog/mountain-lake.webp",
    alt: "Canadian mountain lake representing a planned visitor trip",
  },
  "canada-super-visa-2026": {
    src: "/images/blog/maple-leaves.webp",
    alt: "Canadian maple leaves representing a family visit and Super Visa plan",
  },
  "spousal-sponsorship-canada-2026": {
    src: "/images/pages/couple.webp",
    alt: "Couple planning a Canadian spousal sponsorship application",
  },
  "parents-grandparents-program-canada": {
    src: "/images/pages/family.webp",
    alt: "Family planning a parents and grandparents sponsorship pathway",
  },
  "canada-immigration-processing-times": {
    src: "/images/blog/shipping-containers.webp",
    alt: "Shipping containers representing the stages and movement of an immigration application",
  },
  "canada-citizenship-requirements": {
    src: "/images/blog/canada-flag-office.webp",
    alt: "Canadian flag representing Canadian citizenship requirements",
  },
  "pr-card-renewal-canada": {
    src: "/images/blog/pr-application-form.webp",
    alt: "Permanent residence application form representing a Canadian PR card renewal plan",
  },
  "what-delays-canada-immigration-application": {
    src: "/images/blog/prairie-silos.webp",
    alt: "Prairie landscape representing the patience and preparation needed for an immigration application",
  },
  "express-entry-french-language-category-2026": {
    src: "/images/blog/express-entry-french-language-category-2026.webp",
    alt: "French-language study notes and Canadian immigration documents for Express Entry",
  },
  "canadian-experience-class-2026-requirements": {
    src: "/images/blog/canadian-experience-class-2026-requirements.webp",
    alt: "Canadian work documents prepared for a Canadian Experience Class review",
  },
  "express-entry-proof-of-funds-2026": {
    src: "/images/blog/express-entry-proof-of-funds-2026.webp",
    alt: "Bank statement and calculator used to review Express Entry proof of funds",
  },
  "express-entry-profile-expiry-what-to-do": {
    src: "/images/blog/express-entry-profile-expiry-what-to-do.webp",
    alt: "Calendar and immigration profile documents prepared before an Express Entry profile expires",
  },
  "ontario-pnp-2026-oinp-updates": {
    src: "/images/blog/ontario-pnp-2026-oinp-updates.webp",
    alt: "Toronto skyline representing Ontario PNP planning and OINP updates",
  },
  "alberta-advantage-immigration-program-2026": {
    src: "/images/blog/alberta-advantage-immigration-program-2026.webp",
    alt: "Calgary skyline representing Alberta Advantage Immigration Program planning",
  },
  "bc-pnp-2026-streams-priorities": {
    src: "/images/blog/bc-pnp-2026-streams-priorities.webp",
    alt: "Vancouver harbour representing British Columbia PNP streams and priorities",
  },
  "manitoba-pnp-2026-skilled-worker-guide": {
    src: "/images/blog/manitoba-pnp-2026-skilled-worker-guide.webp",
    alt: "Prairie landscape representing Manitoba skilled-worker immigration planning",
  },
  "atlantic-immigration-program-employer-checklist": {
    src: "/images/blog/atlantic-immigration-program-employer-checklist.webp",
    alt: "Atlantic Canada bridge representing an Atlantic Immigration Program employer checklist",
  },
  "francophone-community-immigration-pilot-canada": {
    src: "/images/blog/francophone-community-immigration-pilot-canada.webp",
    alt: "Canadian city at dusk representing French-speaking community immigration",
  },
  "lmia-wage-thresholds-2026": {
    src: "/images/blog/lmia-wage-thresholds-2026.webp",
    alt: "Canadian business team reviewing LMIA wage thresholds and employer documents",
  },
  "rural-lmia-temporary-measures-2026": {
    src: "/images/blog/rural-lmia-temporary-measures-2026.webp",
    alt: "Small Canadian community representing rural LMIA temporary measures",
  },
  "spouse-open-work-permit-2026": {
    src: "/images/blog/spouse-open-work-permit-2026.webp",
    alt: "Couple reviewing documents for a Canadian spousal open work permit",
  },
  "maintained-status-work-permit-extension-canada": {
    src: "/images/blog/maintained-status-work-permit-extension-canada.webp",
    alt: "Worker reviewing a Canadian work permit extension and maintained-status dates",
  },
  "restore-status-canada-worker-student": {
    src: "/images/blog/restore-status-canada-worker-student.webp",
    alt: "Immigration consultation documents prepared to restore worker or student status in Canada",
  },
  "study-permit-pal-tal-exemption-2026": {
    src: "/images/blog/study-permit-pal-tal-exemption-2026.webp",
    alt: "Canadian university students reviewing study permit and PAL or TAL documents",
  },
  "pgwp-field-of-study-2026": {
    src: "/images/blog/pgwp-field-of-study-2026.webp",
    alt: "Graduation documents and study notes used to review PGWP field-of-study rules",
  },
  "change-dli-study-permit-canada": {
    src: "/images/blog/change-dli-study-permit-canada.webp",
    alt: "Canadian university campus representing a designated learning institution change",
  },
  "visitor-record-vs-trv-canada": {
    src: "/images/blog/visitor-record-vs-trv-canada.webp",
    alt: "Passport and travel documents comparing a Canadian visitor record and TRV",
  },
  "canada-immigration-scams-authorized-representative": {
    src: "/images/blog/canada-immigration-scams-authorized-representative.webp",
    alt: "Immigration documents and verification checklist for choosing an authorised representative",
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

/** Resolve the cover used by both research cards and the article page. */
export function getResearchBlogImage(slug, categoryLabel) {
  return BLOG_IMAGE_BY_RESEARCH_SLUG[slug] || BLOG_IMAGE_BY_CATEGORY[researchCategorySlug(categoryLabel)] || DEFAULT_BLOG_IMAGE;
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
    meta: { lastModified: post.updated || post.date || '2026-10-06' },
    category: { slug: researchCategorySlug(post.category), label: post.category, title: post.category, description: post.description },
    image: getResearchBlogImage(post.slug, post.category),
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
  "express-entry-french-language-category-2026",
  "canada-immigration-news-monthly-ircc-update",
  "provincial-nominee-program-canada-2026",
  "study-permit-pal-tal-exemption-2026",
  "lmia-wage-thresholds-2026",
  "canada-immigration-processing-times",
  "what-delays-canada-immigration-application",
];

/** The curated news feed, resolved against the full post library. */
export function getNewsPosts() {
  const posts = getBlogPosts();
  const byPath = new Map(posts.map((post) => [post.path, post]));
  return NEWS_SLUGS.map((slug) => byPath.get(`/blog/${slug}`)).filter(Boolean);
}
