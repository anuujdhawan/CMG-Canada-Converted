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

// The desktop mega-menu ("header") is the single source of truth for which
// links live under each top-level item. The mobile accordion ("main") is
// derived from it below so the two navs can never drift out of sync again.
const headerNavItems = [{ label: "Home", href: "/" }, ...sourceMenuItems];

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
