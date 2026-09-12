"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

const VIDEO_CARDS = [
  {
    id: "study-milestone",
    src: "/images/videoCarousel/success-story-01.png",
    alt: "CMG client celebrating an immigration milestone with the Commonwealth Migration team",
  },
  {
    id: "family-milestone",
    src: "/images/videoCarousel/success-story-02.png",
    alt: "CMG clients celebrating a successful immigration milestone with their family",
  },
  {
    id: "visa-milestone",
    src: "/images/videoCarousel/success-story-03.png",
    alt: "CMG client holding travel documents after an immigration milestone",
  },
  {
    id: "pathway-milestone",
    src: "/images/videoCarousel/success-story-04.png",
    alt: "CMG client celebrating a pathway milestone with the Commonwealth Migration team",
  },
];

export default function LiveSuccessVideos() {
  const channelUrl = site.social.youtube;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % VIDEO_CARDS.length);
    }, 6500);
    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPrevious = () => setActiveIndex((current) => (current - 1 + VIDEO_CARDS.length) % VIDEO_CARDS.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % VIDEO_CARDS.length);
  const visibleCards = VIDEO_CARDS.map((_, offset) => VIDEO_CARDS[(activeIndex + offset) % VIDEO_CARDS.length]);

  return (
    <section className="section relative z-[1] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 dark live-success-videos" aria-labelledby="live-success-videos-title">
      <div className="section-inner mx-auto w-[var(--container)]">
        <header className="section-head grid grid-cols-[.72fr_.42fr] max-[880px]:grid-cols-1 items-end gap-[50px] max-[880px]:gap-[17px] mb-[42px] reveal">
          <div>
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">Client success gallery</p>
            <h2 id="live-success-videos-title" className="max-w-[760px]">Pathways that move from planning to progress</h2>
          </div>
          <p className="text-[16px] leading-[1.65]">Explore moments from the Commonwealth Migration community, then visit our YouTube channel for the latest pathway conversations and client stories.</p>
        </header>

        <div
          className="live-success-videos__carousel relative flex items-center gap-2 max-[640px]:mx-[-0.25rem] reveal"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <button type="button" className="live-success-videos__arrow live-success-videos__arrow--previous inline-flex h-[2.75rem] w-[2.75rem] shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--template-on-primary)_18%,transparent)] bg-[color-mix(in_srgb,var(--template-on-primary)_7%,transparent)] text-[var(--template-on-primary)] transition-[background,border-color,color,transform] duration-[180ms] ease-in-out hover:border-[var(--template-primary)] hover:bg-[var(--template-primary)] hover:text-[var(--template-on-primary)] hover:outline-none hover:scale-[1.05] focus-visible:border-[var(--template-primary)] focus-visible:bg-[var(--template-primary)] focus-visible:text-[var(--template-on-primary)] focus-visible:outline-none focus-visible:scale-[1.05] max-[640px]:!absolute max-[640px]:!z-[2] max-[640px]:!h-[2.45rem] max-[640px]:!w-[2.45rem] max-[640px]:!left-3" onClick={showPrevious} aria-label="Show previous client success story">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>

          <div className="live-success-videos__viewport min-w-0 w-full overflow-hidden p-[0.3rem_clamp(0rem,1.5vw,0.8rem)_0.85rem] max-[640px]:px-1" aria-live="polite">
            <div key={activeIndex} className="live-success-videos__track animate-[cmg-video-card-in_420ms_ease_both] grid grid-cols-4 gap-[clamp(0.65rem,1.4vw,1.1rem)] max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
              {visibleCards.map((card, index) => (
                <a
                  key={`${card.id}-${activeIndex}`}
                  href={channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("group live-success-videos__card relative block min-w-0 aspect-square overflow-hidden rounded-[1.15rem] border border-[color-mix(in_srgb,var(--template-on-primary)_16%,transparent)] bg-[color-mix(in_srgb,var(--template-on-primary)_5%,var(--template-surface))] shadow-[0_12px_28px_color-mix(in_srgb,var(--cmg-template-deep-surface)_20%,transparent)] transition-[transform,border-color,box-shadow] duration-[220ms] ease-in-out hover:border-[var(--template-primary)] hover:shadow-[0_18px_36px_color-mix(in_srgb,var(--template-primary)_20%,transparent),0_0_0_3px_color-mix(in_srgb,var(--template-primary)_13%,transparent)] hover:outline-none hover:translate-y-[-5px] focus-visible:border-[var(--template-primary)] focus-visible:shadow-[0_18px_36px_color-mix(in_srgb,var(--template-primary)_20%,transparent),0_0_0_3px_color-mix(in_srgb,var(--template-primary)_13%,transparent)] focus-visible:outline-none focus-visible:translate-y-[-5px]", index === 0 && "is-active border-[var(--template-primary)] shadow-[0_16px_34px_color-mix(in_srgb,var(--template-primary)_18%,transparent),0_0_0_3px_color-mix(in_srgb,var(--template-primary)_12%,transparent)] translate-y-[-4px]", index >= 2 && "max-[1100px]:hidden", index === 1 && "max-[640px]:hidden")}
                  aria-label={`${card.alt}. Open Commonwealth Migration on YouTube.`}
                >
                  <Image className="object-cover transition-transform duration-[450ms] ease-in-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025]" src={card.src} alt={card.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                  <span className="live-success-videos__card-wash absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,transparent_58%,color-mix(in_srgb,var(--cmg-template-deep-surface)_80%,transparent)_100%)]" aria-hidden="true" />
                  <span className="live-success-videos__card-play absolute right-[0.85rem] bottom-[0.85rem] inline-flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-[0.75rem] border border-[color-mix(in_srgb,var(--template-on-primary)_46%,transparent)] bg-[var(--template-primary)] text-[var(--template-on-primary)] shadow-[0_8px_18px_color-mix(in_srgb,var(--template-primary)_28%,transparent)]" aria-hidden="true"><Play size={17} fill="currentColor" /></span>
                  <span className="live-success-videos__card-label absolute bottom-[0.95rem] left-[0.85rem] inline-flex max-w-[calc(100%-4rem)] items-center gap-1 text-[var(--template-on-primary)] text-[0.6875rem] font-extrabold leading-[1.2] tracking-[0.04em] uppercase">Watch on YouTube <ArrowUpRight size={14} aria-hidden="true" /></span>
                </a>
              ))}
            </div>
          </div>

          <button type="button" className="live-success-videos__arrow live-success-videos__arrow--next inline-flex h-[2.75rem] w-[2.75rem] shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--template-on-primary)_18%,transparent)] bg-[color-mix(in_srgb,var(--template-on-primary)_7%,transparent)] text-[var(--template-on-primary)] transition-[background,border-color,color,transform] duration-[180ms] ease-in-out hover:border-[var(--template-primary)] hover:bg-[var(--template-primary)] hover:text-[var(--template-on-primary)] hover:outline-none hover:scale-[1.05] focus-visible:border-[var(--template-primary)] focus-visible:bg-[var(--template-primary)] focus-visible:text-[var(--template-on-primary)] focus-visible:outline-none focus-visible:scale-[1.05] max-[640px]:!absolute max-[640px]:!z-[2] max-[640px]:!h-[2.45rem] max-[640px]:!w-[2.45rem] max-[640px]:!right-3" onClick={showNext} aria-label="Show next client success story">
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="live-success-videos__dots mt-[0.55rem] flex items-center justify-center gap-[0.55rem]" role="tablist" aria-label="Client success stories">
          {VIDEO_CARDS.map((card, index) => (
            <button
              key={card.id}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Show client success story ${index + 1}`}
              className={`h-[0.52rem] w-[0.52rem] shrink-0 rounded-full border-0 bg-[color-mix(in_srgb,var(--template-on-primary)_28%,transparent)] p-0 transition-[width,background,transform] duration-[180ms] ease-[ease] hover:bg-[color-mix(in_srgb,var(--template-primary)_78%,var(--template-on-primary))] hover:outline-none hover:scale-[1.15] focus-visible:bg-[color-mix(in_srgb,var(--template-primary)_78%,var(--template-on-primary))] focus-visible:outline-none focus-visible:scale-[1.15]${activeIndex === index ? " is-active w-[1.45rem] bg-[var(--template-primary)]" : ""}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-[1.35rem] flex w-fit items-center justify-center gap-[0.4rem] text-[color-mix(in_srgb,var(--template-on-primary)_76%,transparent)] text-[0.75rem] font-extrabold leading-[1.2] no-underline hover:text-[var(--template-primary)]"
        >
          Visit the full video library <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
