"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { HERO_SLIDES } from "@/lib/heroSlides";

const AUTOPLAY_MS = 3200;

export default function HeroCarousel({ slides = HERO_SLIDES, className }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleSlides = slides.length > 1;

  useEffect(() => {
    if (!hasMultipleSlides) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [hasMultipleSlides, slides.length]);

  return (
    <div
      className={cn("cmg-hero-carousel absolute z-0 inset-0 overflow-hidden pointer-events-none bg-[#070d16]", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Canadian locations and opportunities"
    >
      <div className="cmg-hero-carousel__slides absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={cn("cmg-hero-carousel__slide absolute inset-0 opacity-0 [transition:opacity_.8s_ease]", index === activeIndex && "is-active !opacity-100")}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={cn("cmg-hero-carousel__image group-hover/hero:scale-[1.035] absolute inset-0 object-cover object-center brightness-[1.06] contrast-[1.04] saturate-[1.08] [transition:transform_1s_cubic-bezier(.2,.8,.2,1),filter_400ms_ease]", index === activeIndex ? "scale-[1.055]" : "scale-[1.01]")}
            />
          </div>
        ))}
      </div>

      <div className="cmg-hero-carousel__wash absolute inset-0 " aria-hidden />
    </div>
  );
}
