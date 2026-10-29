"use client";

import { usePathname } from "next/navigation";

/**
 * Keeps conversion landing pages clear of the main site's global navigation,
 * footer and support widgets while leaving regular routes unchanged.
 */
export default function PageChrome({ children, before, after, landingAfter }) {
  const pathname = usePathname();
  const isOntarioLanding = pathname === "/ontario-pr";

  return (
    <>
      {!isOntarioLanding && before}
      {children}
      {isOntarioLanding ? landingAfter : after}
    </>
  );
}
