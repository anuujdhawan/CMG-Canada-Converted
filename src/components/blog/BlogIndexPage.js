import { ArrowUpRight, BookOpen, ShieldCheck, Sparkles } from "lucide-react";
import { site } from "@/config/site";
import { getBlogGroups, ALL_BLOG_CATEGORY } from "@/lib/blog";
import BlogCategoryTabs from "./BlogCategoryTabs";
import BlogHero, { TemplateLink } from "./BlogHero";
import TemplateMotion from "@/components/home/TemplateMotion";
import FaqSection from "@/components/sections/FaqSection";
import { getPageFaqs } from "@/lib/faqs";
import SeoGuideSection from "@/components/sections/SeoGuideSection";

export default function BlogIndexPage({ page, activeCategory = ALL_BLOG_CATEGORY, activePage = 1 }) {
  const groups = getBlogGroups();
  const postCount = groups.reduce((total, group) => total + group.posts.length, 0);
  const description = page?.seo?.description || "Clear, current Canadian immigration guidance for the decision in front of you.";
  // A slug can be valid and still have no posts (the Refusals tab has none yet),
  // so fall back to "all" whenever the requested category is not rendered.
  const resolvedCategory = groups.some((group) => group.slug === activeCategory) ? activeCategory : ALL_BLOG_CATEGORY;

  return (
    <div className="cmg-template-home cmg-template-blog relative overflow-hidden text-[var(--ink)] text-base leading-[1.65] [--container:min(1220px,calc(100%-40px))] max-[1120px]:[--container:min(1220px,calc(100%-32px))] max-[620px]:[--container:calc(100%-28px)] max-[620px]:text-[15px]" data-concept="nocturne">
      <TemplateMotion />

      <BlogHero
        eyebrow="CMG insights · Canada immigration"
        title={
          <>
            Research the route.
            <br />{" "}
            Then decide.
          </>
        }
        lead={description}
        chips={[
          { icon: ShieldCheck, label: "Licensed RCIC insight" },
          { icon: BookOpen, label: `${postCount} practical guides` },
          { icon: Sparkles, label: "Clear next steps" },
        ]}
      />

      <section className="section relative z-[1] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 reference-blog-library bg-[var(--bg)]" id="articles">
        <div className="section-inner mx-auto w-[var(--container)]">
          <header className="section-head reference-blog-library__head grid grid-cols-[.72fr_.42fr] max-[880px]:grid-cols-1 items-end gap-[50px] max-[880px]:gap-[17px] mb-[62px] max-[880px]:mb-[46px] reveal">
            <div>
              <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] uppercase">All articles</p>
              <h2 className="max-w-[720px]">Guides grouped around your next decision</h2>
            </div>
            <p className="max-w-[430px] text-[var(--muted)] text-[16px] leading-[1.75]">Follow the category that fits your current question, then use the article as a starting point for a more focused review.</p>
          </header>

          <BlogCategoryTabs groups={groups} activeCategory={resolvedCategory} activePage={activePage} />
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
