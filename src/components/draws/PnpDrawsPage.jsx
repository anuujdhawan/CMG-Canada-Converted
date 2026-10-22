import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";
// import { HERO_SLIDES } from "@/lib/heroSlides";
import HeroProofCardCarousel from "@/components/home/HeroProofCardCarousel";
// import HeroCarousel from "@/components/home/HeroCarousel";
import HeroBackground from "@/components/home/HeroBackground";
import TemplateMotion from "@/components/home/TemplateMotion";
import FaqSection from "@/components/sections/FaqSection";
import SeoGuideSection from "@/components/sections/SeoGuideSection";
import { getPageFaqs } from "@/lib/faqs";
import PnpDrawHistory from "./PnpDrawHistory";

export default function PnpDrawsPage({ page, initialFeed }) {
  return (
    <div className="cmg-template-home cmg-template-service min-h-full bg-[var(--bg)] text-[var(--ink)] [--container:min(1220px,calc(100%-40px))] max-[1120px]:[--container:min(1220px,calc(100%-32px))] max-[620px]:[--container:calc(100%-28px)]">
      <TemplateMotion />
      <section className="hero group/hero relative isolate before:absolute before:inset-0 before:z-[-2] before:pointer-events-none before:content-[''] after:absolute after:z-[-2] after:pointer-events-none after:content-[''] before:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--cmg-template-deep-surface)_2%,transparent),color-mix(in_srgb,var(--bg)_52%,transparent)_145%)] after:top-[-180px] after:right-[-170px] after:h-[520px] after:w-[520px] after:rounded-full after:bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] after:blur-[80px] w-full overflow-hidden bg-transparent pb-20 min-[881px]:min-h-[max(880px,100svh)] max-[620px]:pb-12">
        <div className="ambient a absolute z-[-1] size-[360px] rounded-full bg-[var(--primary)] opacity-[.16] blur-[50px] animate-[cmg-template-ambient_10s_ease-in-out_infinite_alternate] top-[2%] right-[15%]" aria-hidden="true" />
        <div className="ambient b absolute z-[-1] size-[360px] rounded-full bg-[var(--accent)] opacity-[.16] blur-[50px] animate-[cmg-template-ambient_10s_ease-in-out_infinite_alternate] bottom-[4%] left-[-8%] [animation-delay:-4s]" aria-hidden="true" />
        {/* Carousel retained for later use; draw pages currently use one fixed hero image. */}
        {/* <HeroCarousel slides={HERO_SLIDES} className="hero-background-carousel z-[-3] w-full min-h-full rounded-[30px] border border-[var(--border)] bg-[var(--secondary)] shadow-[var(--shadow)]" /> */}
        <HeroBackground />
        <div className="hero-layout relative z-[1] grid grid-cols-[minmax(0,1fr)_minmax(420px,.86fr)] max-[1120px]:grid-cols-[minmax(0,1fr)_minmax(360px,.85fr)] max-[880px]:grid-cols-1 items-center max-[880px]:items-start gap-[66px] max-[1120px]:gap-[38px] max-[880px]:gap-[44px] w-[min(1280px,calc(100%-48px))] max-[620px]:w-[var(--container)] mx-auto">
          <div className="hero-copy relative z-[2] min-w-0 max-[880px]:w-full text-[var(--template-on-primary)] reveal in">
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-[''] [text-shadow:0_1px_8px_color-mix(in_srgb,var(--cmg-template-deep-surface)_28%,transparent)]">Canadian PNP draw results tracker</p>
            <h1 id="pnp-draws-hero-title" className="max-w-[790px] max-[1120px]:!text-[clamp(36px,4.2vw,48px)] max-[620px]:!text-[clamp(24px,6.7vw,28px)] max-[1023.98px]:text-center max-[1023.98px]:mx-auto text-[clamp(42px,2.2rem+3.4vw,66px)] !font-semibold max-[620px]:!font-extrabold !leading-[1.04] !tracking-[-.03em] text-[var(--template-on-primary)] [text-shadow:0_2px_18px_color-mix(in_srgb,var(--cmg-template-deep-surface)_42%,transparent),0_1px_2px_color-mix(in_srgb,var(--cmg-template-deep-surface)_55%,transparent)]">{page.h1}</h1>
            <p className="lead max-w-[710px] max-[1023.98px]:text-center max-[1023.98px]:mx-auto !mt-6 text-[color-mix(in_srgb,var(--template-on-primary)_82%,transparent)] [text-shadow:0_1px_10px_color-mix(in_srgb,var(--cmg-template-deep-surface)_48%,transparent)] text-[17px] leading-[1.8] max-[620px]:text-[15px]">Compare Canadian Provincial Nominee Program (PNP) invitation rounds by province, stream, date, selection method, published score or cutoff, and invitations—then verify each record with the official provincial source.</p>
            <div className="hero-actions flex flex-wrap gap-3 mt-[30px] max-[768px]:!flex max-[768px]:!flex-col max-[768px]:!items-center max-[768px]:!gap-3 max-[768px]:!mt-6">
              <Link href="#pnp-history" className="btn btn-primary max-[768px]:!w-full max-[768px]:!min-h-[52px] max-[768px]:!px-[22px] max-[768px]:!py-[14px] max-[768px]:!rounded-[14px] max-[768px]:!text-[14px]">Compare PNP draw history <ArrowRight width={18} height={18} aria-hidden="true" /></Link>
              <Link href={site.ctas.primary.href} className="btn btn-secondary max-[768px]:!w-auto max-[768px]:!min-h-10 max-[768px]:!px-[18px] max-[768px]:!py-[9px] max-[768px]:!rounded-full max-[768px]:!text-[12.5px]">Book a consultation <ArrowUpRight width={18} height={18} aria-hidden="true" /></Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-bold text-[color-mix(in_srgb,var(--template-on-primary)_72%,transparent)] max-[1023.98px]:justify-center"><span className="inline-flex items-center gap-2"><ShieldCheck className="text-[var(--cmg-template-primary-bright)]" width={16} height={16} aria-hidden="true" />Official-source PNP history</span><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[color-mix(in_srgb,var(--template-on-primary)_84%,transparent)] underline underline-offset-4">Verify PNP rules on IRCC <ExternalLink width={14} height={14} aria-hidden="true" /></a></div>
          </div>
          <div className="hero-visual self-start relative w-full min-h-[530px] max-[880px]:static max-[880px]:min-h-0 max-[880px]:transform-none max-[880px]:mt-[26px] reveal in">
            <HeroProofCardCarousel pagePath="/pnp-draws" ariaLabel="Commonwealth Migration Group highlights" />
          </div>
        </div>
      </section>

      <PnpDrawHistory initialFeed={initialFeed} />

      <FaqSection faqs={getPageFaqs(page)} />
      <SeoGuideSection page={page} eyebrow="PNP eligibility and draw context" title="What do Canadian PNP draw results mean for your immigration plan?" />
    </div>
  );
}
