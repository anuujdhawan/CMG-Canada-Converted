"use client";

import { Menu } from "lucide-react";

export default function HeaderMobileMenuLauncher() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("cmg:open-mobile-menu"))}
      className="site-header__menu-button min-[1120px]:hidden p-2.5 rounded-md text-primary hover:bg-primary/10 transition-colors"
      aria-label="Open menu"
    >
      <Menu className="h-6 w-6" />
    </button>
  );
}
