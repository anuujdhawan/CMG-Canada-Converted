"use client";

import { Menu } from "lucide-react";

export default function HeaderMobileMenuLauncher() {
  return (
    <button
      type="button"
      id="site-header-mobile-menu-button"
      onClick={() => window.dispatchEvent(new Event("cmg:open-mobile-menu"))}
      className="site-header__menu-button min-[1360px]:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg p-2.5 text-primary transition-colors hover:bg-primary/10"
      aria-label="Open menu"
      aria-controls="cmg-mobile-menu"
      aria-expanded="false"
    >
      <Menu className="h-6 w-6" />
    </button>
  );
}
