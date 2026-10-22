"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { isActivePath } from "@/lib/navActive";

const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });
const SHADOW_DEFAULT = "shadow-[0_4px_24px_color-mix(in_srgb,var(--brand-navy)_8%,transparent),0_1px_4px_color-mix(in_srgb,var(--brand-navy)_4%,transparent)]";
const SHADOW_SCROLLED = "shadow-[0_8px_32px_color-mix(in_srgb,var(--brand-navy)_12%,transparent),0_2px_8px_color-mix(in_srgb,var(--brand-navy)_6%,transparent)]";

function activeIndexes(pathname, rules) {
  if (!pathname) return [];
  return rules.flatMap((hrefs, index) => hrefs.some((href) => isActivePath(pathname, href)) ? [index] : []);
}

function activeStyles(indexes) {
  return indexes.map((index) => `
    .site-header__desktop-nav [data-nav-index="${index}"] {
      border-color: color-mix(in srgb, var(--brand-primary) 72%, #fff 28%) !important;
      background: linear-gradient(135deg, color-mix(in srgb, var(--brand-primary) 96%, #fff 4%), color-mix(in srgb, var(--brand-primary) 72%, #8d0926 28%)) !important;
      box-shadow: 0 8px 20px color-mix(in srgb, var(--brand-primary) 28%, transparent) !important;
      color: #fff !important;
    }
    .site-header__desktop-nav [data-nav-index="${index}"] svg { color: #fff !important; }
    body:has(.cmg-template-home) .site-header__nav-shell .site-header__desktop-nav [data-nav-index="${index}"] {
      background: #b3122a !important;
      color: var(--cmg-template-nav-ink) !important;
      box-shadow: none !important;
    }
    body:has(.cmg-template-home) .site-header__nav-shell .site-header__desktop-nav [data-nav-index="${index}"] svg {
      color: var(--cmg-template-nav-ink) !important;
    }
  `).join("\n");
}

function updateControlState(control, active, open = false) {
  control.dataset.navActive = String(active);
  control.classList.toggle("text-primary", active || open);
  control.classList.toggle("bg-primary/10", active || open);
  control.classList.toggle("nav-tab-active-light", active);
  if (control.tagName === "A") {
    if (active) control.setAttribute("aria-current", "page");
    else control.removeAttribute("aria-current");
  }
}

export default function HeaderInteractionController({ activeNavRules }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenusRef = useRef(() => {});
  const indexes = activeIndexes(pathname, activeNavRules);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    window.requestAnimationFrame(() => {
      const button = document.getElementById("site-header-mobile-menu-button");
      button?.setAttribute("aria-expanded", "false");
      button?.focus();
    });
  }, []);

  useEffect(() => {
    const header = document.querySelector(".site-header");
    const shell = header?.querySelector(".site-header__nav-shell");
    if (!header || !shell) return undefined;

    const menuItems = Array.from(header.querySelectorAll("[data-nav-menu]"));
    let openItem = null;
    let closeTimer = 0;

    const setOpen = (item, open) => {
      const trigger = item.querySelector("[data-nav-trigger]");
      const panelId = trigger?.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!trigger || !panel) return;

      trigger.setAttribute("aria-expanded", String(open));
      trigger.classList.toggle("text-primary", open || trigger.dataset.navActive === "true");
      trigger.classList.toggle("bg-primary/10", open || trigger.dataset.navActive === "true");
      const chevron = trigger.querySelector("svg");
      chevron?.classList.toggle("rotate-180", open);

      panel.inert = !open;
      panel.style.pointerEvents = open ? "auto" : "none";
      panel.classList.toggle("translate-y-0", open);
      panel.classList.toggle("scale-100", open);
      panel.classList.toggle("opacity-100", open);
      panel.classList.toggle("-translate-y-1.5", !open);
      panel.classList.toggle("scale-[.97]", !open);
      panel.classList.toggle("opacity-0", !open);
    };

    const closeAll = () => {
      if (closeTimer) window.clearTimeout(closeTimer);
      closeTimer = 0;
      if (openItem) setOpen(openItem, false);
      openItem = null;
    };
    closeMenusRef.current = closeAll;

    const open = (item) => {
      if (closeTimer) window.clearTimeout(closeTimer);
      closeTimer = 0;
      if (openItem && openItem !== item) setOpen(openItem, false);
      openItem = item;
      setOpen(item, true);
    };

    const cleanups = [];
    menuItems.forEach((item) => {
      const trigger = item.querySelector("[data-nav-trigger]");
      if (!trigger) return;
      const enter = () => open(item);
      const leave = () => {
        closeTimer = window.setTimeout(() => {
          if (openItem === item) {
            setOpen(item, false);
            openItem = null;
          }
        }, 180);
      };
      const click = () => {
        if (openItem === item) closeAll();
        else open(item);
      };
      const keydown = (event) => {
        if (event.key !== "Escape" || openItem !== item) return;
        event.preventDefault();
        closeAll();
        trigger.focus();
      };
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
      trigger.addEventListener("click", click);
      trigger.addEventListener("keydown", keydown);
      cleanups.push(() => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", leave);
        trigger.removeEventListener("click", click);
        trigger.removeEventListener("keydown", keydown);
      });
    });

    const closeFromLink = (event) => {
      if (event.target instanceof Element && event.target.closest(".site-header__dropdown-panel a")) closeAll();
    };
    header.addEventListener("click", closeFromLink);

    const onScroll = () => {
      const scrolled = window.scrollY > 20;
      shell.classList.remove(SHADOW_DEFAULT, SHADOW_SCROLLED);
      shell.classList.add(scrolled ? SHADOW_SCROLLED : SHADOW_DEFAULT);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const openMobileMenu = () => {
      setMobileOpen(true);
      document.getElementById("site-header-mobile-menu-button")?.setAttribute("aria-expanded", "true");
    };
    window.addEventListener("cmg:open-mobile-menu", openMobileMenu);

    return () => {
      closeAll();
      closeMenusRef.current = () => {};
      cleanups.forEach((cleanup) => cleanup());
      header.removeEventListener("click", closeFromLink);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("cmg:open-mobile-menu", openMobileMenu);
      document.getElementById("site-header-mobile-menu-button")?.setAttribute("aria-expanded", "false");
    };
  }, []);

  useEffect(() => {
    const header = document.querySelector(".site-header");
    if (!header) return;
    closeMenusRef.current();

    activeNavRules.forEach((hrefs, index) => {
      const control = header.querySelector(`[data-nav-index="${index}"]`);
      if (!control) return;
      const active = Boolean(pathname && hrefs.some((href) => isActivePath(pathname, href)));
      updateControlState(control, active, control.getAttribute("aria-expanded") === "true");
    });
  }, [pathname, activeNavRules]);

  return (
    <>
      <style data-cmg-header-active>{activeStyles(indexes)}</style>
      {mobileOpen && <MobileMenu open onClose={closeMobileMenu} />}
    </>
  );
}
