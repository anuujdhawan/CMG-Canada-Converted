"use client";

import { usePathname } from "next/navigation";

/**
 * Lets the Ontario conversion page use its section-link navbar and landing
 * widgets while regular routes keep the shared site chrome.
 */
export default function PageChrome({ children, before, landingBefore, after, landingAfter }) {
  const pathname = usePathname();
  const isOntarioLanding = pathname === "/ontario-pr";

  return (
    <>
      {isOntarioLanding ? landingBefore : before}
      {children}
      {isOntarioLanding ? landingAfter : after}
    </>
  );
}
