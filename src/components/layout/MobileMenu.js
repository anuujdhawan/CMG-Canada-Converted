"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, X } from "lucide-react";
import { navigation } from "@/config/navigation";
import { site } from "@/config/site";
import { cn, slugify } from "@/lib/utils";
import { isActiveNavItem } from "@/lib/navActive";
import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

/**
 * Slide-over mobile navigation in the source sheet style:
 * red mark header, accordion groups, phone + red CTA footer.
 *
 * The drawer is always mounted. It used to be mounted only while `mobileOpen`
 * was true, which removed every navigation link from the mobile-rendered HTML
 * — and Googlebot crawls as a smartphone, so the site's entire internal link
 * graph was missing from the version of the page Google actually renders.
 * It now slides off-canvas when closed and is marked `inert` so it stays out
 * of the tab order and the accessibility tree.
 */
export default function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);
  const pathname = usePathname();

  // Lock body scroll only while the drawer is actually open
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close if the route changes while open
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setExpanded(null);
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[1100] min-[1120px]:hidden overflow-hidden",
        !open && "pointer-events-none"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
      aria-hidden={!open}
      inert={!open}
    >
      {/* Backdrop.
          The drawer stays mounted so its nav links survive in the crawled
          HTML, so the scrim has to be faded out explicitly. `inert` and
          `pointer-events-none` only stop interaction — they do not stop the
          element painting. Left visible it dimmed the entire page by 72% at
          every width below 1120px, which made tablet and phone layouts look
          far darker than the desktop one. */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={cn(
          "cmg-mobile-menu__backdrop absolute inset-0 h-full w-full cursor-default transition-opacity duration-300 ease-out",
          open ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Panel */}
      <motion.div
        initial={false}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ duration: 0.28, ease: EASE_OUT }}
        className="cmg-mobile-menu absolute right-0 top-0 flex h-full w-[85vw] sm:w-[320px] flex-col shadow-dropdown"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={site.logos.white}
              alt={site.name}
              width={1912}
              height={1140}
              className="h-9 w-auto object-contain"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-0.5" aria-label="Mobile">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center px-4 py-3.5 rounded-xl text-ink font-semibold hover:bg-accent-soft hover:text-primary transition-all text-sm"
          >
            Home
          </Link>

          {navigation.main.map((item) => {
            const hasChildren = item.children?.length > 0;
            const isOpen = expanded === item.label;
            const active = isActiveNavItem(pathname, item);
            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center px-4 py-3.5 rounded-xl text-ink font-semibold hover:bg-accent-soft hover:text-primary transition-all text-sm",
                    active && "text-primary"
                  )}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <div key={item.label}>
                <button
                  onClick={() => setExpanded(isOpen ? null : item.label)}
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-ink font-semibold hover:bg-accent-soft hover:text-primary transition-all text-sm"
                  aria-expanded={isOpen}
                  aria-controls={`mobile-${slugify(item.label)}`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.urgent && (
                      <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white border border-primary shadow-sm">
                        Urgent
                      </span>
                    )}
                  </span>
                  <ChevronDown
                    className={cn("h-4 w-4 text-muted transition-transform duration-200", isOpen && "rotate-180")}
                  />
                </button>
                {/* Kept mounted while collapsed: these are the real page links,
                    and unmounting them removed them from the crawled HTML. */}
                <div
                  id={`mobile-${slugify(item.label)}`}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                  className={cn(
                    "ml-3 space-y-0.5 border-l-2 border-primary/10 pl-3 overflow-hidden transition-[max-height,opacity,padding] duration-200 ease-out",
                    isOpen ? "max-h-[70vh] pb-2 opacity-100" : "max-h-0 pb-0 opacity-0 pointer-events-none"
                  )}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href + child.label}
                      href={child.href}
                      onClick={onClose}
                      className="block px-3 py-2.5 rounded-xl text-sm text-muted font-medium hover:text-primary hover:bg-accent-soft transition-all"
                    >
                      {child.label}
                    </Link>
                  ))}
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="dropdown-view-all block px-3 py-2.5 rounded-xl text-sm font-bold text-primary no-underline"
                  >
                    View all {item.label.toLowerCase()} →
                  </Link>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div className="p-4 border-t border-line bg-accent-soft/40 space-y-2.5">
          <a
            href={site.emailHref}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-primary/20 text-primary text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <Mail className="h-4 w-4" />
            Email Us
          </a>
          <Link
            href={site.ctas.primary.href}
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full rounded-full bg-primary text-white font-semibold py-3 text-sm hover:bg-primary-light transition-all shadow-md"
          >
            {site.ctas.primary.label}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
