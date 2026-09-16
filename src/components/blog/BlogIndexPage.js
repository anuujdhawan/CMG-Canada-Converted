import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";
import { currentPagePath } from "@/config/pageRoutes";
import { HERO_SLIDES } from "@/lib/heroSlides";
import { getBlogGroups } from "@/lib/blog";
import BlogCategoryTabs from "./BlogCategoryTabs";
import HeroCarousel from "@/components/home/HeroCarousel";
import HeroProofCardCarousel from "@/components/home/HeroProofCardCarousel";
import TemplateMotion from "@/components/home/TemplateMotion";
import FaqSection from "@/components/sections/FaqSection";
import { getPageFaqs } from "@/lib/faqs";
import SeoGuideSection from "@/components/sections/SeoGuideSection";

function TemplateLink({ children, path, className = "", ...props }) {
  const buttonSurface = className.includes("btn-primary")
    ? "bg-[var(--primary)] text-[var(--template-on-primary)] shadow-[0_13px_28px_color-mix(in_srgb,var(--primary)_23%,transparent)] hover:bg-[var(--accent)]"
    : className.includes("btn-secondary")
      ? "border-[var(--border)] bg-transparent text-[var(--ink)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
      : "";
  const classes = className.split(/\s+/).includes("btn") ? `inline-flex items-center justify-center gap-[9px] min-h-12 border border-transparent rounded-[12px] px-5 py-[13px] font-extrabold text-[13px] leading-none transition-[transform,background,border-color,color] duration-[200ms] ease-[ease] hover:translate-y-[-2px] ${buttonSurface} ${className}` : className;
  return <Link href={currentPagePath(path)} className={classes.trim()} {...props}>{children}</Link>;
}

export default function BlogIndexPage({ page }) {
  const groups = getBlogGroups();
  const postCount = groups.reduce((total, group) => total + group.posts.length, 0);
  const description = page?.seo?.description || "Clear, current Canadian immigration guidance for the decision in front of you.";

  return (
    <div className="cmg-template-home cmg-template-blog relative overflow-hidden text-[var(--ink)] text-base leading-[1.65] [--container:min(1220px,calc(100%-40px))] max-[1120px]:[--container:min(1220px,calc(100%-32px))] max-[620px]:[--container:calc(100%-28px)] max-[620px]:text-[15px]" data-concept="nocturne">
      <TemplateMotion />

      <section className="hero reference-blog-hero relative isolate w-full overflow-hidden bg-transparent pb-20 min-[881px]:min-h-[max(880px,100svh)] min-[621px]:max-[880px]:!min-h-[660px]" aria-labelledby="blog-hero-title">
        <div className="ambient a" aria-hidden="true" />
        <div className="ambient b" aria-hidden="true" />
        <HeroCarousel slides={HERO_SLIDES} className="hero-background-carousel" />
        <div className="hero-layout relative z-[1] grid grid-cols-[minmax(0,1fr)_minmax(420px,.86fr)] max-[1120px]:grid-cols-[minmax(0,1fr)_minmax(360px,.85fr)] max-[880px]:grid-cols-1 items-center gap-[66px] max-[1120px]:gap-[38px] max-[880px]:gap-[44px] w-[min(1280px,calc(100%-48px))] max-[620px]:w-[var(--container)] mx-auto">
          <div className="hero-copy relative z-[2] max-w-[720px] reveal in">
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] uppercase">CMG insights · Canada immigration</p>
            <h1 id="blog-hero-title" className="max-w-[790px] text-[clamp(42px,2.2rem+3.4vw,66px)] !font-semibold max-[620px]:!font-extrabold !leading-[1.04] !tracking-[-.03em] max-[1120px]:!text-[clamp(36px,4.2vw,48px)] max-[620px]:!text-[clamp(24px,6.7vw,28px)] !text-[var(--template-on-primary)]">Research the route.<br />Then decide.</h1>
            <p className="lead !max-w-[620px] !mt-6 !text-[var(--cmg-dark-muted)] [text-shadow:0_1px_10px_color-mix(in_srgb,var(--cmg-template-deep-surface)_32%,transparent)] text-[var(--muted)] text-[17px] leading-[1.8] max-[620px]:text-[15px]">{description}</p>
            <div className="hero-actions flex flex-wrap gap-3 mt-[30px]">
              <TemplateLink path={site.ctas.primary.href} className="btn btn-primary">
                Book a Consultation
                <ArrowRight width={18} height={18} aria-hidden="true" />
              </TemplateLink>
              <TemplateLink path={site.ctas.tools.href} className="btn btn-secondary">
                Explore free tools
                <ArrowUpRight width={18} height={18} aria-hidden="true" />
              </TemplateLink>
            </div>
            <div className="hero-trust grid grid-cols-[repeat(3,max-content)] gap-[10px] mt-6 max-[880px]:grid-cols-[repeat(3,minmax(0,1fr))] max-[880px]:gap-1.5 max-[620px]:flex max-[620px]:items-center max-[620px]:gap-3 max-[360px]:gap-2 max-[620px]:mt-[18px]" aria-label="Blog highlights">
              <span className="trust-chip inline-flex min-w-0 items-center justify-center gap-2 whitespace-nowrap max-[620px]:!gap-1 max-[620px]:!text-[11px] max-[420px]:!text-[10px] max-[360px]:!text-[9px]"><ShieldCheck className="shrink-0 max-[620px]:!h-[14px] max-[620px]:!w-[14px]" width={16} height={16} aria-hidden="true" /> Licensed RCIC insight</span>
              <span className="trust-chip inline-flex min-w-0 items-center justify-center gap-2 whitespace-nowrap max-[620px]:!gap-1 max-[620px]:!text-[11px] max-[420px]:!text-[10px] max-[360px]:!text-[9px]"><BookOpen className="shrink-0 max-[620px]:!h-[14px] max-[620px]:!w-[14px]" width={16} height={16} aria-hidden="true" /> {postCount} practical guides</span>
              <span className="trust-chip inline-flex min-w-0 items-center justify-center gap-2 whitespace-nowrap max-[620px]:!gap-1 max-[620px]:!text-[11px] max-[420px]:!text-[10px] max-[360px]:!text-[9px]"><ArrowRight className="shrink-0 max-[620px]:!h-[14px] max-[620px]:!w-[14px]" width={16} height={16} aria-hidden="true" /> Clear next steps</span>
            </div>
          </div>

          <div className="hero-visual self-start relative min-h-[530px] max-[880px]:static max-[880px]:min-h-0 max-[880px]:mt-[26px] reveal in">
            <HeroProofCardCarousel />
          </div>
        </div>
      </section>

      <section className="section relative z-[1] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 reference-blog-library bg-[var(--bg)]" id="articles">
        <div className="section-inner mx-auto w-[var(--container)]">
          <header className="section-head reference-blog-library__head grid grid-cols-[.72fr_.42fr] max-[880px]:grid-cols-1 items-end gap-[50px] max-[880px]:gap-[17px] mb-[62px] max-[880px]:mb-[46px] reveal">
            <div>
              <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] uppercase">All articles</p>
              <h2 className="max-w-[720px]">Guides grouped around your next decision</h2>
            </div>
            <p className="max-w-[430px] text-[var(--muted)] text-[16px] leading-[1.75]">Follow the category that fits your current question, then use the article as a starting point for a more focused review.</p>
          </header>

          <BlogCategoryTabs groups={groups} />
        </div>
      </section>

      <FaqSection faqs={getPageFaqs(page)} />

      <SeoGuideSection page={page} eyebrow="Research that stays useful" title="How to use Canadian immigration guides" />

      <section className="cta-section reference-blog-cta !bg-[linear-gradient(120deg,var(--primary),color-mix(in_srgb,var(--primary)_56%,var(--accent)),var(--accent))] py-[72px]">
        <div className="cta-shell flex items-center justify-between max-[880px]:items-start max-[880px]:flex-col w-[var(--container)] gap-10 mx-auto p-0 rounded-none bg-transparent">
          <div>
            <h2 className="!text-[clamp(30px,1.8rem+2.2vw,46px)] max-[880px]:!text-[clamp(30px,5.2vw,40px)] max-[620px]:!text-[clamp(29px,8.6vw,35px)] !leading-none text-[var(--template-on-primary)]">Ready to make the research personal?</h2>
            <p className="!mt-[12px] max-w-[650px] !text-[16px] text-[var(--template-on-primary)]">Bring the guide that caught your attention, your questions and your timeline to a focused consultation with a licensed Canadian immigration team.</p>
          </div>
          <TemplateLink path={site.ctas.primary.href} className="btn !flex-none !px-6 !py-[17px] bg-[var(--template-on-primary)] text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-[var(--template-on-primary)]">
            Book a Consultation
            <ArrowUpRight width={19} height={19} aria-hidden="true" />
          </TemplateLink>
        </div>
      </section>

    </div>
  );
}
