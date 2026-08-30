"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { getImageObjectPosition } from "@/lib/imagePresentation";

export default function BlogCategoryTabs({ groups }) {
  const [activeSlug, setActiveSlug] = useState(groups[0]?.slug || "");
  const [isVertical, setIsVertical] = useState(false);
  const tabRefs = useRef([]);
  const activeGroup = groups.find((group) => group.slug === activeSlug) || groups[0];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateOrientation = () => setIsVertical(mediaQuery.matches);

    updateOrientation();
    mediaQuery.addEventListener("change", updateOrientation);

    return () => mediaQuery.removeEventListener("change", updateOrientation);
  }, []);

  function selectCategory(slug, shouldFocus = false) {
    setActiveSlug(slug);

    if (shouldFocus) {
      const nextIndex = groups.findIndex((group) => group.slug === slug);
      tabRefs.current[nextIndex]?.focus();
    }
  }

  function moveTab(event, currentIndex) {
    const direction = event.key;
    if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(direction)) return;

    event.preventDefault();
    const nextIndex = direction === "Home"
      ? 0
      : direction === "End"
        ? groups.length - 1
        : (currentIndex + (direction === "ArrowLeft" || direction === "ArrowUp" ? -1 : 1) + groups.length) % groups.length;

    const nextSlug = groups[nextIndex]?.slug;
    if (nextSlug) selectCategory(nextSlug, true);
  }

  if (!activeGroup) return null;

  return (
    <div className="reference-blog-tabs-shell grid grid-cols-[minmax(185px,.26fr)_minmax(0,1fr)] max-[1023px]:grid-cols-1 items-start gap-[clamp(34px,5vw,72px)] max-[1023px]:gap-[34px] max-[620px]:gap-[27px]">
      <div
        className="reference-blog-tabs flex sticky top-[clamp(6.5rem,10vh,8rem)] flex-col items-stretch gap-0 max-h-[min(640px,calc(100vh-220px))] overflow-x-hidden overflow-y-auto border-r border-[var(--border)] pr-5 max-[1023px]:static max-[1023px]:flex-row max-[1023px]:!max-h-none max-[1023px]:overflow-x-auto max-[1023px]:overflow-y-hidden max-[1023px]:!border-r-0 max-[1023px]:border-b max-[1023px]:pr-4 max-[620px]:mr-[-1rem]"
        role="tablist"
        aria-label="Blog categories"
        aria-orientation={isVertical ? "vertical" : "horizontal"}
      >
        {groups.map((group, index) => {
          const isActive = group.slug === activeGroup.slug;
          const tabId = `blog-tab-${group.slug}`;
          const panelId = `blog-panel-${group.slug}`;

          return (
            <button
              className={`reference-blog-tab relative inline-flex w-full shrink-0 items-center after:absolute after:top-0 after:right-[-21px] after:bottom-0 after:left-auto after:w-[3px] after:h-auto after:rounded-[999px_0_0_999px] after:bg-[linear-gradient(180deg,var(--primary),var(--accent))] after:content-[''] after:origin-[center_top] after:scale-y-0 after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(.16,1,.3,1)] max-[1023px]:after:top-auto max-[1023px]:after:right-0 max-[1023px]:after:bottom-[-1px] max-[1023px]:after:left-0 max-[1023px]:after:w-auto max-[1023px]:after:h-[3px] max-[1023px]:after:rounded-[999px_999px_0_0] max-[1023px]:after:origin-left max-[1023px]:after:scale-x-0 justify-between gap-[18px] min-h-[60px] border-b border-[color-mix(in_srgb,var(--border)_80%,transparent)] px-[14px] py-[15px] bg-transparent text-[var(--muted)] cursor-pointer font-extrabold text-[11px] leading-[1.1] tracking-[.1em] text-left uppercase transition-[color,background] duration-[250ms] ease-[ease] hover:!text-[var(--ink)] focus-visible:!text-[var(--ink)] hover:!bg-[color-mix(in_srgb,var(--primary)_6%,transparent)] focus-visible:!bg-[color-mix(in_srgb,var(--primary)_6%,transparent)] focus-visible:!outline-2 focus-visible:!outline-[var(--primary)] focus-visible:!outline-offset-[6px] max-[1023px]:!w-auto max-[1023px]:min-w-max max-[1023px]:min-h-[58px] max-[1023px]:!border-b-0 max-[1023px]:px-1 max-[1023px]:pb-4 max-[620px]:min-h-[52px] max-[620px]:pb-[13px]${isActive ? " is-active !text-[var(--ink)] after:scale-y-100 max-[1023px]:after:scale-x-100" : ""}`}
              id={tabId}
              key={group.slug}
              ref={(element) => { tabRefs.current[index] = element; }}
              role="tab"
              type="button"
              aria-controls={panelId}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectCategory(group.slug)}
              onKeyDown={(event) => moveTab(event, index)}
            >
              <span>{group.label}</span>
              <small className="text-[var(--primary)] font-extrabold text-[11px] leading-none tracking-[.08em] opacity-80">{String(group.posts.length).padStart(2, "0")}</small>
            </button>
          );
        })}
      </div>

      <section
        className="reference-blog-tab-panel animate-[blog-panel-in_.42s_cubic-bezier(.16,1,.3,1)_both] border-t border-[var(--border)] pt-[27px] max-[620px]:pt-[22px] focus-visible:!outline-2 focus-visible:!outline-[var(--primary)] focus-visible:!outline-offset-[8px]"
        id={`blog-panel-${activeGroup.slug}`}
        key={activeGroup.slug}
        role="tabpanel"
        aria-labelledby={`blog-tab-${activeGroup.slug}`}
        tabIndex={0}
      >
        <div className="reference-blog-group__head grid grid-cols-[minmax(0,.88fr)_minmax(260px,.72fr)] max-[880px]:grid-cols-1 items-end gap-[50px] max-[880px]:gap-[14px] mb-[27px]">
          <div>
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] uppercase">{activeGroup.label}</p>
            <h3 className="max-w-[580px] text-[clamp(28px,2rem+1.8vw,40px)]">{activeGroup.title}</h3>
          </div>
          <p className="max-w-[430px] text-[var(--muted)] text-[15px] leading-[1.75]">{activeGroup.description}</p>
        </div>
        {activeGroup.posts[0] && (
          <Link
            href={activeGroup.posts[0].path}
            className="reference-blog-group__banner group relative block mb-[22px] overflow-hidden border border-[var(--border)] rounded-[22px] aspect-[16/7] bg-[var(--secondary)] isolate [transition:border-color_.35s_ease,box-shadow_.35s_ease,transform_.35s_cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 focus-visible:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--primary)_62%,var(--border))] focus-visible:border-[color-mix(in_srgb,var(--primary)_62%,var(--border))] hover:shadow-[0_22px_58px_color-mix(in_srgb,var(--primary)_14%,transparent)] focus-visible:shadow-[0_22px_58px_color-mix(in_srgb,var(--primary)_14%,transparent)]"
            aria-label={`Open ${activeGroup.posts[0].title}`}
          >
            <Image
              src={activeGroup.posts[0].image.src}
              alt={activeGroup.posts[0].image.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 72vw"
              priority={false}
              className="object-cover [transition:transform_.8s_cubic-bezier(.16,1,.3,1),filter_.5s_ease] group-hover:scale-[1.04] group-hover:saturate-[1.08] group-focus-visible:scale-[1.04] group-focus-visible:saturate-[1.08]"
              style={{ objectPosition: getImageObjectPosition(activeGroup.posts[0].image.src) }}
            />
            <span className="reference-blog-group__banner-overlay absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,transparent_35%,color-mix(in_srgb,var(--cmg-template-deep-surface)_62%,transparent))]" aria-hidden="true" />
            <span className="reference-blog-group__banner-label absolute left-[18px] right-[18px] bottom-[18px] z-[1] inline-flex items-center justify-between gap-3 px-[14px] py-3 pl-4 border border-[color-mix(in_srgb,var(--template-on-primary)_18%,transparent)] rounded-full bg-[color-mix(in_srgb,var(--cmg-template-deep-surface)_72%,transparent)] text-[var(--template-on-primary)] font-bold text-[13px] leading-[1.2] backdrop-blur-[10px]">
              <span>Open: {activeGroup.posts[0].title}</span>
              <ArrowUpRight className="flex-none [transition:transform_.3s_ease] group-hover:translate-x-[3px] group-hover:translate-y-[-3px] group-focus-visible:translate-x-[3px] group-focus-visible:translate-y-[-3px]" width={16} height={16} aria-hidden="true" />
            </span>
          </Link>
        )}
        <div className="reference-blog-grid grid grid-cols-3 max-[1100px]:grid-cols-2 max-[620px]:grid-cols-1 gap-[18px]">
          {activeGroup.posts.map((post, index) => <BlogCard key={post.path} post={post} index={index} />)}
        </div>
      </section>
    </div>
  );
}
