"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import HeroProfileCard from "./HeroProfileCard";
import HeroProofCard from "./HeroProofCard";

const AUTOPLAY_MS = 7000;

const HERO_CARDS = [
  { label: "Our track record", Component: HeroProofCard },
  { label: "Vishal Arora, Regulated Canadian Immigration Consultant", Component: HeroProfileCard },
];

export default function HeroProofCardCarousel({ ariaLabel = "Commonwealth Migration Group highlights" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_CARDS.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const pauseOnFocus = () => setIsPaused(true);
  const resumeAfterFocus = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
  };

  return (
    <div
      className="hero-proof-card-carousel relative min-h-[530px] w-full max-[880px]:min-h-0"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={pauseOnFocus}
      onBlur={resumeAfterFocus}
    >
      {HERO_CARDS.map(({ label, Component }, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            className={cn(
              "hero-proof-card-carousel__slide absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-700 ease-out max-[880px]:static",
              !isActive && "max-[880px]:hidden",
              isActive && "opacity-100 pointer-events-auto",
            )}
            key={label}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${HERO_CARDS.length}: ${label}`}
            aria-hidden={!isActive}
            inert={!isActive}
          >
            <Component />
          </div>
        );
      })}

      <div className="absolute right-0 bottom-[-28px] left-0 flex justify-end gap-1.5 max-[880px]:bottom-[-25px]" role="tablist" aria-label="Hero card slides">
        {HERO_CARDS.map(({ label }, index) => (
          <button
            className={cn(
              "size-2 rounded-full border border-[color-mix(in_srgb,var(--template-on-primary)_58%,transparent)] bg-transparent transition-[background-color,transform] duration-300",
              index === activeIndex && "scale-125 border-[var(--template-primary)] bg-[var(--template-primary)]",
            )}
            key={label}
            type="button"
            role="tab"
            aria-label={`Show ${label}`}
            aria-selected={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
