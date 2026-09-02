"use client";

import { useEffect, useState } from "react";
import ExpressEntryDrawCard from "./ExpressEntryDrawCard";
import HeroProofCard from "./HeroProofCard";

const AUTOPLAY_MS = 3800;

export default function HeroProofCardCarousel({ ariaLabel = "Commonwealth Migration Group highlights" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = 2;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="hero-proof-card-carousel relative min-h-[560px] w-full max-[880px]:min-h-0"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="absolute inset-0" aria-live="polite">
        {[HeroProofCard, ExpressEntryDrawCard].map((Card, index) => (
          <div
            className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] ${index === activeIndex ? "z-[1] translate-x-0 opacity-100" : "pointer-events-none translate-x-3 opacity-0"}`}
            aria-hidden={index !== activeIndex}
            key={Card.name}
          >
            <Card />
          </div>
        ))}
      </div>
      <div className="absolute right-0 bottom-[-27px] z-[2] flex items-center gap-2 max-[880px]:static max-[880px]:justify-end max-[880px]:pt-3" aria-label="Choose hero card">
        {["Track record", "Latest draw"].map((label, index) => (
          <button
            type="button"
            key={label}
            aria-label={`Show ${label}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-[width,background] duration-300 ${index === activeIndex ? "w-7 bg-[var(--cmg-template-primary-bright)]" : "w-2 bg-[color-mix(in_srgb,var(--template-on-primary)_50%,transparent)] hover:bg-[var(--template-on-primary)]"}`}
          />
        ))}
      </div>
    </div>
  );
}
