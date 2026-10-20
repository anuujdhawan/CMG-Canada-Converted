import Link from "next/link";
import Image from "next/image";
import { ChevronDown, AlertTriangle, ArrowRight } from "lucide-react";
import { navigation } from "@/config/navigation";
import { site } from "@/config/site";
import { cn, slugify } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import HeaderInteractionController from "./HeaderInteractionController";
import HeaderMobileMenuLauncher from "./HeaderMobileMenuLauncher";

/* ─── Logo lockup (CMG wordmark) ──────────────────────────────────── */
function BrandLogo() {
  return (
    <Link href="/" className="flex items-center shrink-0" aria-label={`${site.name} — home`}>
      <div className="header-logo-shell flex items-center">
        <Image
          src={site.logos.white}
          alt={site.name}
          width={1912}
          height={1140}
          loading="eager"
          fetchPriority="low"
          sizes="124px"
          className="h-9 w-auto object-contain sm:h-10"
        />
      </div>
    </Link>
  );
}

/* ─── Dropdown panel wrapper ──────────────────────────────────────── */

/**
 * The panel is always mounted, even while closed.
 *
 * Mounting it conditionally (`{open && …}`) meant none of the mega-menu links
 * existed in the server-rendered HTML: the entire site navigation — roughly a
 * hundred internal links per page — was invisible to crawlers, and pages that
 * only appeared inside a dropdown had zero crawlable inbound links. That is
 * why so many URLs sat in Search Console as "Discovered - currently not
 * indexed" with no last-crawl date.
 *
 * The panel is now hidden with opacity + `pointer-events: none` (+ `inert` for
 * assistive tech) instead of being unmounted, so every menu link is present in
 * the HTML on first paint while the interaction still feels identical.
 */
function DropdownPanel({ children, className, id, open }) {
  return (
    <div
      id={id}
      inert={!open}
      style={{ pointerEvents: open ? "auto" : "none" }}
      className={cn(
        "site-header__dropdown-panel absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-2xl p-4",
        "border border-line shadow-[0_20px_60px_color-mix(in_srgb,var(--brand-navy)_12%,transparent),0_4px_16px_color-mix(in_srgb,var(--brand-navy)_5%,transparent)]",
        "max-h-[calc(100vh-120px)] overflow-y-auto",
        "transition-[opacity,transform] duration-180 ease-out",
        open ? "translate-y-0 scale-100 opacity-100" : "-translate-y-1.5 scale-[.97] opacity-0",
        className
      )}
    >
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-primary rounded-full" />
      {children}
    </div>
  );
}

/* ─── CMG-style mega dropdown (grouped columns + featured card) ─────── */

/**
 * Groups that are rendered as a nested sub-section inside the "Other PR
 * Pathways" column instead of as their own top-level column. Relocating them
 * keeps the column count stable, which in turn keeps the featured card in the
 * fifth column exactly where it has always been.
 */
const RELOCATED_MENU_CATEGORIES = ["Caregivers", "Immigrate from the UK"];

function FeaturedMenuCard({ card, secondary = false }) {
  return (
    <div className={cn(
      "featured-menu-card flex min-w-0 flex-col rounded-xl p-6",
      secondary
        ? "bg-[linear-gradient(145deg,var(--brand-primary),var(--brand-primary-dark))] shadow-[0_14px_32px_color-mix(in_srgb,var(--brand-primary)_22%,transparent)]"
        : "bg-navy"
    )}>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-white/70">{card.label}</p>
      <p className="mb-2 text-lg font-bold leading-snug text-white">{card.title}</p>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-white/80">
        {card.desc || "Open the source-backed guide and compare the route with related options."}
      </p>
      <Link
        href={card.href}
        className="featured-menu-card__cta"
        aria-label={`${card.ctaLabel || "Explore this guide"}: ${card.title}`}
      >
        <span className="featured-menu-card__cta-label">{card.ctaLabel || "Explore this guide"}</span>
        <span className="featured-menu-card__cta-arrow" aria-hidden="true">
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    </div>
  );
}

function MegaDropdown({ item }) {
  const sourceColumns = item.columns || [];
  const relocatedColumns = sourceColumns.filter((column) => RELOCATED_MENU_CATEGORIES.includes(column.category));
  const columns = sourceColumns.filter((column) => !relocatedColumns.includes(column));
  const featured = item.featured;
  const featuredSecondary = item.featuredSecondary;
  // Relocated groups sit below Other PR Pathways in the Immigrate menu,
  // leaving room for its featured Express Entry Draws card in the fifth column.
  const showFeatured = featured && columns.length < 5;
  const gridCols = `${columns.map(() => "minmax(0, 1fr)").join(" ")}${showFeatured ? " minmax(200px, 0.9fr)" : ""}`;

  return (
    <DropdownPanel
      id={`${slugify(item.label)}-dropdown-panel`}
      open={false}
    >
      <div className="grid min-w-0 items-start gap-x-5 gap-y-1 pt-2" style={{ gridTemplateColumns: gridCols }}>
        {columns.map((col) => {
          const viewAll = col.showViewAll === false ? null : col.items[0]?.href;
          return (
            <div key={col.category} className="flex flex-col">
              <p className="dropdown-category-title flex items-center gap-1.5 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.08em] text-primary mb-2.5 pl-2.5">
                <span aria-hidden className="h-1 w-3 rounded-full bg-accent" />
                {col.category}
              </p>
              <div className="space-y-0.5">
                {col.items.map((link) => (
                  <DropdownLink key={link.href + link.label} link={link} />
                ))}
              </div>
              {viewAll && (
                <Link
                  href={viewAll}
                  className="dropdown-view-all group mt-1.5 flex items-center gap-1 pl-2.5 text-[11.5px] font-bold text-accent-dark hover:text-primary transition-colors no-underline after:hidden"
                >
                  View all
                  <ArrowRight aria-hidden className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              )}
              {col.category === "Other PR Pathways" && relocatedColumns.map((relocated) => (
                <div key={relocated.category} className="mt-5 border-t border-line/60 pt-4">
                  <p className="dropdown-category-title flex items-center gap-1.5 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.08em] text-primary mb-2.5 pl-2.5">
                    <span aria-hidden className="h-1 w-3 rounded-full bg-accent" />
                    {relocated.category}
                  </p>
                  <div className="space-y-0.5">
                    {relocated.items.map((link) => (
                      <DropdownLink key={link.href + link.label} link={link} />
                    ))}
                  </div>
                  {relocated.items.length > 1 && relocated.items[0]?.href && (
                    <Link
                      href={relocated.items[0].href}
                      className="dropdown-view-all group mt-1.5 flex items-center gap-1 pl-2.5 text-[11.5px] font-bold text-accent-dark hover:text-primary transition-colors no-underline after:hidden"
                    >
                      View all
                      <ArrowRight aria-hidden className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          );
        })}

        {showFeatured && (
          <div className="grid min-w-0 gap-4">
            <FeaturedMenuCard card={featured} />
            {featuredSecondary && <FeaturedMenuCard card={featuredSecondary} secondary />}
          </div>
        )}
      </div>
    </DropdownPanel>
  );
}

function DropdownLink({ link }) {
  const content = (
    <span className="group relative flex items-start gap-2.5 px-2.5 py-2 transition-all duration-150">
      {link.urgent && <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />}
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="flex items-start gap-1.5 text-[13px] font-semibold text-ink leading-tight transition-colors">
          <span className="dropdown-item-title min-w-0 flex-1">{link.label}</span>
          {link.urgent && (
            <span className="shrink-0 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white border border-primary shadow-sm">
              Urgent
            </span>
          )}
        </span>
      </span>
      <ArrowRight
        aria-hidden
        className="mt-0.5 h-3 w-3 shrink-0 -translate-x-1 opacity-0 text-primary transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </span>
  );

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }
  return (
    <Link href={link.href} className="block">
      {content}
    </Link>
  );
}

/* ─── Responsive label: short on laptops, full name on wide screens ─── */
function NavLabel({ item }) {
  if (!item.shortLabel) return item.label;
  return (
    <>
      <span className="min-[1800px]:hidden">{item.shortLabel}</span>
      <span className="hidden min-[1800px]:inline">{item.label}</span>
    </>
  );
}

/**
 * Inner content of a top-level item — identical for a plain link and for a
 * dropdown trigger, so the two branches cannot drift apart again.
 *
 * The chevron slot is rendered even when there is no panel to open. "Home"
 * used to be the only bare `<Link>` in the row, which made its box ~18px
 * narrower than every neighbour and pushed its label off the grid the
 * dropdown triggers sit on — the one item that visibly did not belong.
 * Reserving the slot puts every label on the same rhythm; `invisible` keeps
 * it out of the accessibility tree and out of hit-testing.
 */
function NavItemInner({ item, hasPanel = false }) {
  return (
    <>
      {item.standalone && (
        <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent animate-pulse" />
      )}
      <NavLabel item={item} />
      <ChevronDown
        aria-hidden
        className={cn(
          "h-3.5 w-3.5 shrink-0 transition-transform duration-200",
          !hasPanel && "invisible"
        )}
      />
    </>
  );
}

/* One geometry for every top-level item, Home included. Hover, active and
 * scrolled states are enhanced by a small client controller. */
const NAV_ITEM_CLASS = "relative flex items-center gap-1 rounded-md px-0.5 py-2.5 text-[12px] xl:text-[12px] font-semibold text-white transition-all duration-150 whitespace-nowrap";

function activePathsFor(item) {
  return [
    item.href,
    ...(item.columns || []).flatMap((column) => column.items || []).map((link) => link.href),
    ...(item.children || []).map((link) => link.href),
    item.featured?.href,
  ].filter(Boolean);
}

const ACTIVE_NAV_RULES = navigation.header.map(activePathsFor);

export default function Header() {
  return (
    <>
      <HeaderInteractionController activeNavRules={ACTIVE_NAV_RULES} />
      <header className="site-header fixed top-0 inset-x-0" style={{ zIndex: 200 }}>
        <div className="site-header__utility-strip">
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-5"><ThemeToggle /></div>
          </div>
        </div>

        <div className="px-1 pt-3 sm:px-1">
          <div className="site-header__nav-shell relative mx-auto max-w-none backdrop-blur-md rounded-2xl border px-4 transition-shadow duration-300 shadow-[0_4px_24px_color-mix(in_srgb,var(--brand-navy)_8%,transparent),0_1px_4px_color-mix(in_srgb,var(--brand-navy)_4%,transparent)]">
            <div className="flex items-center justify-between">
              <BrandLogo />

              <nav className="site-header__desktop-nav hidden min-[1120px]:flex items-center gap-1" aria-label="Main">
                {navigation.header.map((item, index) => {
                  const hasPanel = !!item.columns?.length;
                  const standaloneClass = item.standalone ? "text-accent-dark font-bold" : "";

                  if (hasPanel) {
                    return (
                      <div key={item.label} data-nav-menu data-nav-label={item.label}>
                        <button
                          data-nav-index={index}
                          data-nav-trigger
                          className={cn(NAV_ITEM_CLASS, standaloneClass)}
                          aria-haspopup="true"
                          aria-expanded="false"
                          aria-controls={`${slugify(item.label)}-dropdown-panel`}
                        >
                          <NavItemInner item={item} hasPanel />
                        </button>
                        <MegaDropdown item={item} />
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      data-nav-index={index}
                      className={cn(NAV_ITEM_CLASS, standaloneClass)}
                    >
                      <NavItemInner item={item} />
                    </Link>
                  );
                })}
              </nav>

              <div className="hidden min-[1120px]:flex items-center">
                <Link href={site.ctas.primary.href} className="site-header__cta rounded-md bg-primary text-white font-bold px-3.5 py-2.5 text-[12px] hover:bg-navy transition-colors shadow-md whitespace-nowrap">
                  {site.ctas.primary.label}
                </Link>
              </div>

              <HeaderMobileMenuLauncher />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
