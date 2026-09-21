import { site } from "@/config/site";
import { currentPagePath } from "@/config/pageRoutes";
import { getCmgMenu } from "@/lib/cmgPages";

const DRAW_PAGE_LINK = { label: "Express Entry Draws", href: "/immigration-draws" };

/**
 * Navigation structure — Commonwealth Migration Canada.
 *
 * The dropdowns and footer are derived from the supplied sitemap workbook so
 * the desktop and mobile menus stay in sync with the source content inventory.
 */

const sourceMenuItems = getCmgMenu().map((top) => ({
  label: top.label,
  shortLabel: top.label === "Inadmissibility & Appeals" ? "Appeals" : top.label,
  href: top.groups[0]?.pages[0]?.href || "/",
  columns: top.groups.map((group) => ({
    category: group.label,
    items: group.pages.map((page) => ({
      label: page.label,
      href: page.href,
    })),
  })),
  featured: top.label === "Immigrate"
    ? {
        label: "Official IRCC data",
        title: "Express Entry Draws",
        desc: "Track the latest invitation rounds, CRS cutoffs and program updates.",
        href: DRAW_PAGE_LINK.href,
      }
    : top.groups[0]?.pages[0]
      ? {
        label: "Explore this menu",
        title: top.groups[0].pages[0].label,
        desc: "Open the source-backed guide and compare the route with related options.",
        href: top.groups[0].pages[0].href,
      }
  : null,
}));

const TOOLS_MENU_ITEM = {
  label: "Tools",
  href: "/tools/canada-immigration-calculators",
  columns: [
    {
      category: "Free self-service tools",
      items: [
        { label: "CRS Calculator", href: "/tools/crs-calculator-canada" },
        { label: "PNP Eligibility Check", href: "/tools/pnp-eligibility-canada" },
        { label: "NOC / Occupation Finder", href: "/tools/noc-finder-canada" },
      ],
    },
    {
      category: "Plan & prepare",
      items: [
        { label: "Document Checklist", href: "/tools/document-checklist-canada" },
        { label: "Free Assessment", href: "/assessment/free-canada-immigration-assessment" },
      ],
    },
    {
      category: "Learn & prepare",
      items: [
        DRAW_PAGE_LINK,
        // Blog removed from the Tools dropdown — it still has a crawlable link
        // under Resources and in the footer. Kept commented so it can come back.
        // { label: "Blog", href: "/blog" },
        { label: "Express Entry Guide", href: "/immigrate/express-entry" },
        { label: "PNP Pathway Guide", href: "/immigrate/provincial-nominee-program-all-provinces-consolidated" },
      ],
    },
  ],
  featured: {
    label: "Free tool",
    title: "CRS Calculator",
    desc: "See your Express Entry score in under two minutes.",
    href: "/tools/crs-calculator-canada",
  },
};

const ABOUT_MENU_ITEM = {
  label: "About",
  href: "/about/about-commonwealth-migration",
  columns: [
    {
      category: "Our firm",
      items: [
        { label: "About Us", href: "/about/about-commonwealth-migration" },
        { label: "Our Process", href: "/about/canada-immigration-consulting-process" },
        { label: "Our Office", href: "/about/immigration-office-brampton-ontario" },
      ],
    },
    {
      category: "Get in touch",
      items: [
        { label: "Book Consultation", href: site.ctas.primary.href },
        { label: "Book Urgent Consultation", href: site.ctas.urgent.href, urgent: true },
        { label: "Make Payment", href: site.ctas.payment.href },
      ],
    },
  ],
  featured: {
    label: "Free first step",
    title: "Book a Consultation",
    desc: "Speak with a licensed consultant about your goal — at no cost.",
    href: site.ctas.primary.href,
  },
};

const RESOURCES_MENU_ITEM = {
  label: "Resources",
  href: "/blog",
  columns: [
    { category: "Immigration Blog", items: [
      { label: "All Immigration Blogs", href: "/blog" },
      { label: "Canada Immigration News", href: "/canada-immigration-news" },
      { label: "Immigration Guides", href: "/blog?category=immigration-guides" },
    ] },
    // Every entry here must name a category that actually holds posts —
    // `getBlogGroups()` drops empty ones, so a link to a category with nothing
    // in it would land the reader on an empty panel.
    { category: "By topic", items: [
      { label: "Express Entry", href: "/blog?category=express-entry" },
      { label: "Work Permits", href: "/blog?category=work-permits" },
      { label: "Study Permits", href: "/blog?category=study-permits" },
      { label: "Family Sponsorship", href: "/blog?category=family-sponsorship" },
      { label: "Provincial Nominee Programs", href: "/blog?category=provincial-nominee-programs" },
      { label: "Visitor Visas", href: "/blog?category=visitor-visas" },
    ] },
  ],
  featured: { label: "Start with research", title: "Find the right Canadian pathway", desc: "Browse current guides, news and practical checklists before your consultation.", href: "/blog" },
};

const navigationMenuItems = [
  ...sourceMenuItems.filter((item) => item.label !== "About"),
  TOOLS_MENU_ITEM,
  RESOURCES_MENU_ITEM,
  ABOUT_MENU_ITEM,
];

// The desktop mega-menu ("header") is the single source of truth for which
// links live under each top-level item. The mobile accordion ("main") is
// derived from it below so the two navs can never drift out of sync again.
const headerNavItems = [{ label: "Home", href: "/" }, ...navigationMenuItems];

// Mobile accordion items: same label/href as the desktop entry,
// with `children` flattened straight out of that entry's own `columns` (or
// omitted for the plain "Home" link) — whatever appears in the desktop
// dropdown is exactly what appears in the mobile dropdown.
const mainNavItems = headerNavItems
  .filter((item) => !!item.columns?.length)
  .map((item) => ({
    label: item.label,
    href: item.href,
    urgent: !!item.standalone,
    children: item.columns.flatMap((column) => column.items),
  }));

const rawNavigation = {
  utility: {},

  header: headerNavItems,

  main: mainNavItems,

  footer: [
    ...sourceMenuItems.slice(0, 4).map((item) => ({
      title: item.label,
      links: [
        ...(item.label === "Immigrate" ? [DRAW_PAGE_LINK] : []),
        ...item.columns.flatMap((column) => column.items).slice(0, 4),
      ],
    })),
    // The blog index and the self-service tools previously had no crawlable
    // link anywhere on the site: they only ever appeared inside the JS-driven
    // menus, so crawlers found them in the sitemap alone. The footer renders
    // server-side on every page — including mobile — so these get a real,
    // always-visible inbound link.
    { title: "Tools & Resources", links: [
      { label: "Immigration Blog", href: "/blog" },
      { label: "CRS Calculator", href: "/tools/crs-calculator-canada" },
      { label: "NOC / Occupation Finder", href: "/tools/noc-finder-canada" },
      { label: "PNP Eligibility Check", href: "/tools/pnp-eligibility-canada" },
      { label: "Document Checklist", href: "/tools/document-checklist-canada" },
      { label: "Free Assessment", href: "/assessment/free-canada-immigration-assessment" },
    ] },
    { title: "Contact", links: [
      { label: "Book consultation", href: site.ctas.primary.href },
      { label: site.email, href: site.emailHref },
      { label: site.phone, href: site.phoneHref },
    ] },
  ],
};

function normalizeLinks(value) {
  if (Array.isArray(value)) return value.map(normalizeLinks);
  if (!value || typeof value !== "object") return value;
  const next = Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalizeLinks(item)]));
  if (typeof next.href === "string") next.href = currentPagePath(next.href);
  return next;
}

export const navigation = normalizeLinks(rawNavigation);

export default navigation;
