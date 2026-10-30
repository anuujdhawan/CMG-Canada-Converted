"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { site } from "@/config/site";
import ThemeToggle from "@/components/layout/ThemeToggle";

const SECTION_LINKS = [
  { href: "#what-changed", label: "Ontario in 2026" },
  { href: "#eligibility-checker", label: "Eligibility" },
  { href: "#routes", label: "Compare routes" },
  { href: "#requirements", label: "Requirements" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#licensed-rcic", label: "Why a licensed RCIC" },
  { href: "#faq", label: "FAQs" },
];

const SECTION_LINK_CLASS = "relative flex items-center rounded-md px-2 py-2.5 text-[12px] font-semibold text-white whitespace-nowrap transition-all duration-150 hover:bg-white/[.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function OntarioPrLandingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  function closeMenu(restoreFocus = false) {
    setMenuOpen(false);
    if (restoreFocus) window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  function handleMenuKeyDown(event) {
    if (event.key === "Escape" && menuOpen) {
      event.preventDefault();
      closeMenu(true);
    }
  }

  function handleLinkClick() {
    closeMenu();
  }

  return (
    <header className="site-header fixed inset-x-0 top-0" style={{ zIndex: 200 }} onKeyDown={handleMenuKeyDown}>
      <div className="site-header__utility-strip">
        <div className="site-header__utility-inner mx-auto flex h-9 max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
          <ThemeToggle />
        </div>
      </div>

      <div className="site-header__nav-frame px-1 pt-3 sm:px-1">
        <div className="site-header__nav-shell relative mx-auto max-w-none rounded-2xl border px-4 shadow-[0_4px_24px_color-mix(in_srgb,var(--brand-navy)_8%,transparent),0_1px_4px_color-mix(in_srgb,var(--brand-navy)_4%,transparent)] backdrop-blur-md transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} — home`}>
              <span className="header-logo-shell flex items-center">
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
              </span>
            </Link>

            <nav className="site-header__desktop-nav absolute left-1/2 top-1/2 hidden !w-max !flex-none -translate-x-1/2 -translate-y-1/2 min-[1360px]:flex !items-center !justify-center gap-1" aria-label="Ontario landing sections">
              {SECTION_LINKS.map(({ href, label }) => (
                <a key={href} href={href} className={SECTION_LINK_CLASS}>{label}</a>
              ))}
            </nav>

            <div className="site-header__desktop-cta hidden min-[1360px]:flex items-center">
              <a href="#free-consultation" className="site-header__cta rounded-md bg-primary text-white font-bold px-3.5 py-2.5 text-[12px] shadow-md transition-colors whitespace-nowrap">
                Book a free consultation
              </a>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              className="site-header__menu-button inline-flex h-11 w-11 items-center justify-center rounded-lg p-2.5 text-white transition-colors hover:bg-white/10 min-[1360px]:hidden"
              aria-label={menuOpen ? "Close landing page menu" : "Open landing page menu"}
              aria-controls="ontario-pr-section-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>

          {menuOpen ? (
            <nav
              id="ontario-pr-section-menu"
              className="absolute left-0 right-0 top-[calc(100%+10px)] z-[210] grid gap-1 rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(18,25,39,.98),rgba(8,12,21,.98))] p-3 shadow-[0_28px_70px_rgba(0,0,0,.42)] backdrop-blur-xl min-[1360px]:hidden"
              aria-label="Ontario landing sections"
            >
              {SECTION_LINKS.map(({ href, label }) => (
                <a key={href} href={href} onClick={handleLinkClick} className="rounded-xl px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  {label}
                </a>
              ))}
              <a href="#free-consultation" onClick={handleLinkClick} className="site-header__cta mt-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-extrabold text-white">
                Book a free consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
