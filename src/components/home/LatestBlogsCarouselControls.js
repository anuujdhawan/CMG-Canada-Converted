"use client";

import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MOBILE_CONTROL_STYLE = {
  position: "absolute",
  top: "50%",
  zIndex: 5,
  width: "2.75rem",
  height: "2.75rem",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid color-mix(in srgb, var(--template-on-primary) 34%, transparent)",
  borderRadius: "999px",
  background: "color-mix(in srgb, var(--cmg-template-deep-surface) 84%, transparent)",
  color: "var(--template-on-primary)",
  boxShadow: "0 8px 20px color-mix(in srgb, var(--cmg-template-deep-surface) 38%, transparent)",
  transform: "translateY(-50%)",
  backdropFilter: "blur(8px)",
  cursor: "pointer",
};

function scrollMobileCard(direction) {
  const viewport = document.getElementById("latest-guides-viewport");
  if (!viewport) return;

  const cards = Array.from(viewport.querySelectorAll(".cmg-blog-marquee__card:not([inert])"));
  const firstCard = cards[0];
  if (!firstCard) return;

  const cardStride = firstCard.getBoundingClientRect().width
    + Number.parseFloat(window.getComputedStyle(firstCard).marginRight || "0");
  if (!cardStride) return;

  const currentIndex = Math.round(viewport.scrollLeft / cardStride);
  const targetIndex = (currentIndex + direction + cards.length) % cards.length;

  viewport.scrollTo({
    left: targetIndex * cardStride,
    behavior: "smooth",
  });
}

export function LatestBlogsCarouselControl({ direction }) {
  const previous = direction === "previous";
  const Icon = previous ? ChevronLeft : ChevronRight;

  return (
    <button
      className="cmg-blog-marquee__control hidden max-[620px]:flex"
      style={{ ...MOBILE_CONTROL_STYLE, ...(previous ? { left: "0.5rem" } : { right: "0.5rem" }) }}
      type="button"
      aria-label={`${previous ? "Previous" : "Next"} immigration guide`}
      aria-controls="latest-guides-viewport"
      onClick={() => scrollMobileCard(previous ? -1 : 1)}
    >
      <Icon width={22} height={22} aria-hidden="true" />
    </button>
  );
}

export function LatestBlogsCarouselObserver() {
  useEffect(() => {
    const viewport = document.getElementById("latest-guides-viewport");
    if (!viewport || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) delete viewport.dataset.paused;
        else viewport.dataset.paused = "true";
      },
      { threshold: 0 },
    );
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  return null;
}
