"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, ChevronDown, AlertTriangle, ArrowRight } from "lucide-react";
import { navigation } from "@/config/navigation";
import { site } from "@/config/site";
import { cn, slugify } from "@/lib/utils";
import { isActiveNavItem } from "@/lib/navActive";
import { EASE_OUT, DURATION } from "@/lib/motion";
import { useScrolled } from "@/hooks/useScrolled";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

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
          priority
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
    <motion.div
      id={id}
      initial={false}
      animate={{ opacity: open ? 1 : 0, y: open ? 0 : -6, scale: open ? 1 : 0.97 }}
      transition={{ duration: 0.18, ease: EASE_OUT }}
      aria-hidden={!open}
      inert={!open}
      style={{ pointerEvents: open ? "auto" : "none" }}
      className={cn(
        "site-header__dropdown-panel absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-2xl p-4",
        "border border-line shadow-[0_20px_60px_color-mix(in_srgb,var(--brand-navy)_12%,transparent),0_4px_16px_color-mix(in_srgb,var(--brand-navy)_5%,transparent)]",
        "max-h-[calc(100vh-120px)] overflow-y-auto",
        className
      )}
    >
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-primary rounded-full" />
      {children}
    </motion.div>
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

function MegaDropdown({ item, open, onClose }) {
  const sourceColumns = item.columns || [];
  const relocatedColumns = sourceColumns.filter((column) => RELOCATED_MENU_CATEGORIES.includes(column.category));
  const columns = sourceColumns.filter((column) => !relocatedColumns.includes(column));
  const featured = item.featured;
  // Relocated groups sit below Other PR Pathways in the Immigrate menu,
  // leaving room for its featured Express Entry Draws card in the fifth column.
  const showFeatured = featured && columns.length < 5;
  const gridCols = `${columns.map(() => "minmax(0, 1fr)").join(" ")}${showFeatured ? " minmax(200px, 0.9fr)" : ""}`;

  return (
    <DropdownPanel
      id={`${slugify(item.label)}-dropdown-panel`}
      open={open}
    >
      <div className="grid min-w-0 items-start gap-x-5 gap-y-1 pt-2" style={{ gridTemplateColumns: gridCols }}>
        {columns.map((col) => {
          const viewAll = col.items[0]?.href;
          return (
            <div key={col.category} className="flex flex-col">
              <p className="dropdown-category-title flex items-center gap-1.5 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.08em] text-primary mb-2.5 pl-2.5">
                <span aria-hidden className="h-1 w-3 rounded-full bg-accent" />
                {col.category}
              </p>
              <div className="space-y-0.5">
                {col.items.map((link) => (
                  <DropdownLink key={link.href + link.label} link={link} onClose={onClose} />
                ))}
              </div>
              {viewAll && (
                <Link
                  href={viewAll}
                  onClick={onClose}
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
                      <DropdownLink key={link.href + link.label} link={link} onClose={onClose} />
                    ))}
                  </div>
                  {relocated.items.length > 1 && relocated.items[0]?.href && (
                    <Link
                      href={relocated.items[0].href}
                      onClick={onClose}
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
          <div className="flex min-w-0 flex-col bg-navy rounded-xl p-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/60 mb-2">{featured.label}</p>
            <p className="font-bold text-white text-lg mb-2 leading-snug">{featured.title}</p>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-white/70">
              {featured.desc || "Open the source-backed guide and compare the route with related options."}
            </p>
            <Link
              href={featured.href}
              onClick={onClose}
              className="text-xs font-bold text-white hover:text-accent-soft transition-colors inline-flex items-center gap-1"
            >
              Learn More →
            </Link>
          </div>
        )}
      </div>
    </DropdownPanel>
  );
}

function DropdownLink({ link, onClose }) {
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
      <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={onClose} className="block">
        {content}
      </a>
    );
  }
  return (
    <Link href={link.href} onClick={onClose} className="block">
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
function NavItemInner({ item, open = false, hasPanel = false }) {
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
          open && "rotate-180",
          !hasPanel && "invisible"
        )}
      />
    </>
  );
}

/* State colours, shared by both branches (hover/geometry live in globals.css). */
function navItemStateClass(active, open = false, standalone = false) {
  return cn(
    (active || open) && "text-primary bg-primary/10",
    active && "nav-tab-active-light",
    standalone && "text-accent-dark font-bold"
  );
}

/* ─── Header ──────────────────────────────────────────────────────── */
export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const scrolled = useScrolled(20);

  const triggerRefs = useRef({});
  const timers = useRef({});

  const handleEnter = useCallback((label) => {
    if (timers.current[label]) clearTimeout(timers.current[label]);
    setOpenMenu(label);
  }, []);

  const handleLeave = useCallback((label) => {
    timers.current[label] = setTimeout(() => setOpenMenu((cur) => (cur === label ? null : cur)), 180);
  }, []);

  const close = useCallback(() => setOpenMenu(null), []);

  const handleKeyDown = useCallback(
    (e, label) => {
      if (e.key === "Escape" && openMenu === label) {
        e.preventDefault();
        setOpenMenu(null);
        triggerRefs.current[label]?.focus();
      }
    },
    [openMenu]
  );

  /* One geometry for every top-level item, Home included.
   *
   * The row gap is a single value rather than `gap-1 xl:gap-1.5`: the old
   * split made the whole menu shift a few pixels sideways the moment the
   * viewport crossed 1280px, and a menu that re-spaces itself on resize is
   * exactly what "not in symmetry" looks like. The tighter 2px gap also
   * pays for the chevron slot Home now reserves, so the row stays inside
   * the pill at 1120px where it previously only just fitted.
   *
   * Hover (background + border) and the active pill are owned by
   * globals.css, so no hover utilities here — one owner per property. */
  const navItemClass =
    "relative flex items-center gap-1 rounded-md px-0.5 py-2.5 text-[11px] xl:text-[12px] font-semibold text-white transition-all duration-150 whitespace-nowrap";

  return (
    <>
      <motion.header
        className="site-header fixed top-0 inset-x-0"
        style={{ zIndex: 200 }}
        transition={{ duration: DURATION.hover, ease: EASE_OUT }}
      >
        {/* Utility strip */}
        <div className="site-header__utility-strip">
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-5">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Main pill */}
        <div className="px-3 pt-3 sm:px-4">
          <div
            className={cn(
              "site-header__nav-shell relative mx-auto max-w-350 backdrop-blur-md rounded-2xl border px-4 transition-shadow duration-300",
              scrolled
                ? "shadow-[0_8px_32px_color-mix(in_srgb,var(--brand-navy)_12%,transparent),0_2px_8px_color-mix(in_srgb,var(--brand-navy)_6%,transparent)]"
                : "shadow-[0_4px_24px_color-mix(in_srgb,var(--brand-navy)_8%,transparent),0_1px_4px_color-mix(in_srgb,var(--brand-navy)_4%,transparent)]"
            )}
          >
            <div className="flex items-center justify-between">
              <BrandLogo />

              {/* Desktop Nav */}
              <nav className="site-header__desktop-nav hidden min-[1120px]:flex items-center gap-0.5" aria-label="Main">
                {navigation.header.map((item) => {
                  const open = openMenu === item.label;
                  const active = isActiveNavItem(pathname, item);
                  const hasPanel = !!item.columns?.length;
                  const stateClass = navItemStateClass(active, open, item.standalone);

                  if (hasPanel) {
                    return (
                      <div
                        key={item.label}
                        onMouseEnter={() => handleEnter(item.label)}
                        onMouseLeave={() => handleLeave(item.label)}
                      >
                        <button
                          ref={(el) => {
                            triggerRefs.current[item.label] = el;
                          }}
                          className={cn(navItemClass, stateClass)}
                          aria-haspopup="true"
                          aria-expanded={open}
                          aria-controls={`${slugify(item.label)}-dropdown-panel`}
                          onClick={() => setOpenMenu(open ? null : item.label)}
                          onKeyDown={(e) => handleKeyDown(e, item.label)}
                        >
                          <NavItemInner item={item} open={open} hasPanel />
                        </button>
                        <MegaDropdown item={item} open={open} onClose={close} />
                      </div>
                    );
                  }

                  /* Plain link — same shell, same active pill, same chevron
                     slot as a trigger, so it reads as one of the set. */
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(navItemClass, stateClass)}
                      aria-current={active ? "page" : undefined}
                    >
                      <NavItemInner item={item} />
                    </Link>
                  );
                })}
              </nav>

              {/* Right: CTA — always visible, never crowded out */}
              <div className="hidden min-[1120px]:flex items-center">
                <Link
                  href={site.ctas.primary.href}
                  className="site-header__cta rounded-md bg-primary text-white font-bold px-3.5 py-2.5 text-[12px] hover:bg-navy transition-colors shadow-md whitespace-nowrap"
                >
                  {site.ctas.primary.label}
                </Link>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="site-header__menu-button min-[1120px]:hidden p-2.5 rounded-md text-primary hover:bg-primary/10 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Always mounted so the mobile-rendered HTML (Googlebot crawls as a
          smartphone) contains the full navigation. Closed state is an
          off-canvas panel with pointer-events disabled — see MobileMenu. */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
