"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getImageObjectPosition } from "@/lib/imagePresentation";
import { getLatestBlogPosts } from "@/lib/latestBlogs";

/**
 * "Latest guides" strip — a continuously auto-scrolling carousel of blog cards.
 *
 * How the seamless loop works: the track renders the same set of cards twice and
 * translates by exactly -50%. Each card carries its own `margin-right` (instead
 * of a flex `gap`) so that 50% of the track width is precisely one full set,
 * including the trailing gutter — with `gap` the loop drifts by half a gutter
 * every cycle.
 *
 * Accessibility: the second (duplicate) set is decorative — `aria-hidden`,
 * `inert`, no links and no headings — so keyboard and screen-reader users meet
 * every article exactly once. The motion itself is CSS-only, so it also works
 * with JavaScript disabled, and it stops entirely under
 * `prefers-reduced-motion` (where the strip becomes a normal scroll area).
 */

/** Seconds one card takes to travel past a fixed point. */
const SECONDS_PER_CARD = 5.6;

/** Static data — safe to resolve once at module scope. */
const POSTS = getLatestBlogPosts();

const CARD_CLASS = [
  "cmg-blog-marquee__card group relative flex flex-col overflow-hidden rounded-[22px]",
  "border border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] no-underline",
  "shadow-[0_16px_36px_color-mix(in_srgb,var(--cmg-template-deep-surface)_30%,transparent)]",
  "transition-[transform,border-color,box-shadow] duration-[350ms] ease-[cubic-bezier(.16,1,.3,1)]",
  "before:absolute before:inset-x-0 before:top-0 before:z-[3] before:h-[3px] before:content-['']",
  "before:origin-left before:scale-x-[.16] before:bg-[linear-gradient(90deg,var(--primary),var(--accent))]",
  "before:transition-transform before:duration-[450ms] before:ease-[cubic-bezier(.16,1,.3,1)]",
  "hover:-translate-y-[6px] hover:border-[color-mix(in_srgb,var(--primary)_58%,var(--border))]",
  "hover:shadow-[0_28px_58px_color-mix(in_srgb,var(--primary)_22%,transparent)]",
  "hover:before:scale-x-100",
  "focus-visible:-translate-y-[6px] focus-visible:outline-none",
  "focus-visible:border-[color-mix(in_srgb,var(--primary)_58%,var(--border))]",
  "focus-visible:shadow-[0_28px_58px_color-mix(in_srgb,var(--primary)_22%,transparent)]",
  "focus-visible:before:scale-x-100",
].join(" ");

function BlogCard({ post, decorative = false }) {
  const TitleTag = decorative ? "span" : "h3";

  const content = (
    <>
      <figure className="cmg-blog-marquee__media relative m-0 aspect-[16/10] overflow-hidden bg-[var(--secondary)] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_46%,color-mix(in_srgb,var(--cmg-template-deep-surface)_78%,transparent)_100%)] after:content-['']">
        <Image
          className="object-cover [transition:transform_.8s_cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
          src={post.cover.src}
          alt={decorative ? "" : post.cover.alt}
          fill
          sizes="(max-width: 620px) 240px, 328px"
          style={{ objectPosition: getImageObjectPosition(post.cover.src) }}
        />
        <span className="absolute left-[0.8rem] top-[0.8rem] z-[1] inline-flex items-center gap-[6px] rounded-full border border-[color-mix(in_srgb,var(--template-on-primary)_26%,transparent)] bg-[color-mix(in_srgb,var(--cmg-template-deep-surface)_64%,transparent)] px-[11px] py-[6px] text-[10px] font-extrabold uppercase leading-none tracking-[.13em] text-[var(--template-on-primary)] backdrop-blur-[10px]">
          <BookOpen width={12} height={12} aria-hidden="true" />
          {post.category}
        </span>
      </figure>

      <div className="flex flex-1 flex-col p-[20px_20px_18px]">
        <TitleTag className="cmg-blog-marquee__title m-0 text-[19px] font-extrabold leading-[1.26] tracking-[-.01em] text-[var(--ink)]">
          {post.title}
        </TitleTag>
        <p className="cmg-blog-marquee__text m-0 mt-[10px] text-[13.5px] leading-[1.62] text-[var(--muted)]">
          {post.description}
        </p>
        <span className="cmg-blog-marquee__action mt-auto inline-flex items-center gap-[7px] pt-[18px] text-[12px] font-extrabold leading-none text-[var(--primary)]">
          Read the guide
          <ArrowUpRight
            className="transition-transform duration-[300ms] ease-in-out group-hover:translate-x-[3px] group-hover:translate-y-[-3px]"
            width={16}
            height={16}
            aria-hidden="true"
          />
        </span>
      </div>
    </>
  );

  // The duplicate half of the loop is pure decoration: not focusable, not
  // announced, and carrying no links or headings of its own.
  if (decorative) {
    return (
      <div className={CARD_CLASS} aria-hidden="true" inert>
        {content}
      </div>
    );
  }

  return (
    <Link href={post.href} className={CARD_CLASS}>
      {content}
    </Link>
  );
}

export default function LatestBlogsCarousel() {
  const viewportRef = useRef(null);
  const [offscreen, setOffscreen] = useState(false);

  // A long homepage should not keep animating a strip nobody can see.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setOffscreen(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="latest-guides"
      className="section cmg-blog-marquee relative z-[1] overflow-hidden bg-[var(--secondary)] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 dark"
      aria-labelledby="latest-guides-title"
    >
      <span
        className="cmg-blog-marquee__glow pointer-events-none absolute -top-[9rem] right-[-7rem] h-[30rem] w-[30rem] rounded-full bg-[color-mix(in_srgb,var(--primary)_15%,transparent)] blur-[100px]"
        aria-hidden="true"
      />

      <div className="section-inner relative mx-auto w-[var(--container)]">
        <header className="section-head grid grid-cols-[.72fr_.42fr] max-[880px]:grid-cols-1 items-end gap-[50px] max-[880px]:gap-[17px] mb-[38px] max-[880px]:mb-[30px] reveal">
          <div>
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !text-xs !font-extrabold !leading-[1.65] tracking-[.18em] uppercase before:mt-1.5 before:h-0.5 before:w-[38px] before:flex-none before:bg-current before:content-['']">
              Latest from the CMG blog
            </p>
            <h2 id="latest-guides-title" className="max-w-[760px]">
              Fresh guidance for the decision in front of you
            </h2>
          </div>
          <p className="text-[16px] leading-[1.65]">
            New research on Express Entry, provincial pathways, work and study permits, sponsorship
            and refusals — published to be read before your next step.
          </p>
        </header>
      </div>

      <div
        className="cmg-blog-marquee__viewport"
        ref={viewportRef}
        data-paused={offscreen ? "true" : undefined}
      >
        <div
          className="cmg-blog-marquee__track"
          style={{ "--cmg-blog-duration": `${POSTS.length * SECONDS_PER_CARD}s` }}
        >
          {POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
          {POSTS.map((post) => (
            <BlogCard key={`loop-${post.id}`} post={post} decorative />
          ))}
        </div>
      </div>

      <div className="section-inner relative mx-auto w-[var(--container)]">
        {/* The colour sits on an inner span, not on the <a>: the template sets
            `.cmg-template-home a { color: inherit }`, which beats a text-colour
            utility applied to the anchor itself and would kill the hover state. */}
        <Link href="/blog" className="group mx-auto mt-[1.5rem] flex w-fit items-center justify-center no-underline">
          <span className="inline-flex items-center gap-[0.4rem] text-[0.78rem] font-extrabold leading-none text-[var(--muted)] transition-colors duration-[200ms] ease-in-out group-hover:text-[var(--primary)] group-focus-visible:text-[var(--primary)]">
            Browse all immigration guides
            <ArrowUpRight
              className="transition-transform duration-[300ms] ease-in-out group-hover:translate-x-[3px] group-hover:translate-y-[-3px]"
              width={16}
              height={16}
              aria-hidden="true"
            />
          </span>
        </Link>
      </div>
    </section>
  );
}
