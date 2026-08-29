import { site } from "@/config/site";
import { currentPagePath } from "@/config/pageRoutes";
import { getCmgMenu } from "@/lib/cmgPages";

/**
 * Navigation structure — Commonwealth Migration Canada.
 *
 * The dropdowns and footer are derived from the supplied sitemap workbook so
 * the desktop and mobile menus stay in sync with the source content inventory.
 */

const menuDescription = {
  Immigrate: "Permanent-residence pathways, provincial programs and protection routes.",
  Visit: "Visitor visas, eTA and temporary travel routes for Canada.",
  "Work & Study": "Work permits, study permits and employer pathways in Canada.",
  Sponsor: "Family reunification, sponsorship categories and requirements.",
  Citizenship: "Citizenship grants, certificates, PR cards and travel documents.",
  "Inadmissibility & Appeals": "Admissibility, enforcement, refusals and legal review routes.",
  Tools: "Free calculators, checklists and practical guides to help you plan your next step.",
  About: "Learn about Commonwealth Migration and how the team works.",
};

const sourceMenuItems = getCmgMenu().map((top) => ({
  label: top.label,
  shortLabel: top.label === "Inadmissibility & Appeals" ? "Appeals" : top.label,
  href: top.groups[0]?.pages[0]?.href || "/",
  description: menuDescription[top.label] || "Explore the Commonwealth Migration Canada guide.",
  columns: top.groups.map((group) => ({
    category: group.label,
    items: group.pages.map((page) => ({
      label: page.label,
      href: page.href,
      desc: "Official pathway guide with requirements, process and FAQs.",
    })),
  })),
  featured: top.groups[0]?.pages[0]
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
  description: menuDescription.Tools,
  columns: [
    {
      category: "Free self-service tools",
      items: [
        { label: "CRS Calculator", href: "/tools/crs-calculator-canada", desc: "Estimate your Express Entry score." },
        { label: "PNP Eligibility Check", href: "/tools/pnp-eligibility-canada", desc: "See which provincial streams may fit." },
        { label: "NOC / Occupation Finder", href: "/tools/noc-finder-canada", desc: "Match your job to a NOC code." },
      ],
    },
    {
      category: "Plan & prepare",
      items: [
        { label: "Document Checklist", href: "/tools/document-checklist-canada", desc: "Know exactly what to prepare." },
        { label: "Free Assessment", href: "/assessment/free-canada-immigration-assessment", desc: "Find your best pathway — free." },
      ],
    },
    {
      category: "Learn & prepare",
      items: [
        { label: "Blog", href: "/blog", desc: "Expert guides by licensed RCICs." },
        { label: "Express Entry Guide", href: "/immigrate/express-entry", desc: "Understand the federal pathway." },
        { label: "PNP Pathway Guide", href: "/immigrate/provincial-nominee-program-all-provinces-consolidated", desc: "Compare provincial options." },
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
  description: menuDescription.About,
  columns: [
    {
      category: "Our firm",
      items: [
        { label: "About Us", href: "/about/about-commonwealth-migration", desc: "Learn about our CICC-regulated practice." },
        { label: "Our Process", href: "/about/canada-immigration-consulting-process", desc: "See how we turn questions into a plan." },
        { label: "Our Office", href: "/about/immigration-office-brampton-ontario", desc: "Brampton, Ontario — Canada-wide." },
      ],
    },
    {
      category: "Get in touch",
      items: [
        { label: "Book Consultation", href: site.ctas.primary.href, desc: "Choose a time that suits you." },
        { label: "Book Urgent Consultation", href: site.ctas.urgent.href, desc: "Refusal? Don’t wait.", urgent: true },
        { label: "Make Payment", href: site.ctas.payment.href, desc: "Secure online payment." },
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

const navigationMenuItems = [
  ...sourceMenuItems.filter((item) => item.label !== "About"),
  TOOLS_MENU_ITEM,
  ABOUT_MENU_ITEM,
];

// The desktop mega-menu ("header") is the single source of truth for which
// links live under each top-level item. The mobile accordion ("main") is
// derived from it below so the two navs can never drift out of sync again.
const headerNavItems = [{ label: "Home", href: "/" }, ...navigationMenuItems];

// Mobile accordion items: same label/href/description as the desktop entry,
// with `children` flattened straight out of that entry's own `columns` (or
// omitted for the plain "Home" link) — whatever appears in the desktop
// dropdown is exactly what appears in the mobile dropdown.
const mainNavItems = headerNavItems
  .filter((item) => !!item.columns?.length)
  .map((item) => ({
    label: item.label,
    href: item.href,
    description: item.description,
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
      links: item.columns.flatMap((column) => column.items).slice(0, 4),
    })),
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
