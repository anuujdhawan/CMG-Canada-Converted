"use client";

import { useEffect, useState } from "react";
import ExpressEntryDrawCard from "./ExpressEntryDrawCard";
import HeroProofCard from "./HeroProofCard";
import PnpDrawCard from "./PnpDrawCard";

const AUTOPLAY_MS = 5000;

export default function HeroProofCardCarouselClient({ ariaLabel = "Commonwealth Migration Group highlights", initialPnpDraws, initialCardIndex = 0, pagePath = "/" }) {
  const showExpressEntry = pagePath === "/" || pagePath === "/immigration-draws" || /express-entry/.test(pagePath);
  const showPnp = pagePath === "/" || pagePath === "/pnp-draws" || /pnp|provincial-nominee/.test(pagePath);
  const cards = [
    { Component: HeroProofCard, label: "Track record" },
    ...(showExpressEntry ? [{ Component: ExpressEntryDrawCard, label: "Latest Express Entry draw" }] : []),
    ...(showPnp ? [{ Component: PnpDrawCard, label: "PNP highlights" }] : []),
  ];
  const [activeIndex, setActiveIndex] = useState(() => Math.max(0, Math.min(initialCardIndex, cards.length - 1)));
  const slideCount = cards.length;

  useEffect(() => {
    // Keep the mobile hero stable after first paint. Desktop keeps the
    // existing autoplay behavior and visual transitions.
    if (window.matchMedia?.("(max-width: 880px), (prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [slideCount]);

  return (
    <div
      className="hero-proof-card-carousel relative min-h-[560px] w-full max-[880px]:min-h-0"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="absolute inset-0 max-[880px]:static max-[880px]:grid" aria-live="polite">
        {cards.map(({ Component: Card, label }, index) => (
          <div
            className={`absolute inset-0 max-[880px]:static max-[880px]:[grid-area:1/1] transition-transform duration-[850ms] ease-[cubic-bezier(.2,.8,.2,1)] ${index === activeIndex ? "z-[1] translate-x-0 opacity-100" : "pointer-events-none translate-x-3 opacity-0"}`}
            inert={index !== activeIndex}
            key={label}
          >
            <Card
              {...(Card === PnpDrawCard ? { initialDraws: initialPnpDraws } : {})}
              active={index === activeIndex}
            />
          </div>
        ))}
      </div>
      <div className="absolute right-0 bottom-[-27px] z-[2] flex items-center gap-2 max-[880px]:static max-[880px]:justify-end max-[880px]:pt-3" aria-label="Choose hero card">
        {cards.map(({ label }, index) => (
          <button
            type="button"
            key={label}
            aria-label={`Show ${label}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full p-0"
          >
            <span
              aria-hidden="true"
              className={`block rounded-full transition-[width,background] duration-300 ${index === activeIndex ? "h-2 w-7 bg-[var(--cmg-template-primary-bright)]" : "h-2 w-2 bg-[color-mix(in_srgb,var(--template-on-primary)_50%,transparent)] hover:bg-[var(--template-on-primary)]"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
