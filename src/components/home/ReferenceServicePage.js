import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calculator, FileCheck2, ShieldCheck, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { currentPagePath } from "@/config/pageRoutes";
import { site } from "@/config/site";
import { HERO_SLIDES } from "@/lib/heroSlides";
import { getPageFaqs } from "@/lib/faqs";
import { Block, parseBlocks, RelatedPagesList, rebrand } from "@/components/templates/MarkdownBlocks";
import HeroCarousel from "./HeroCarousel";
import HeroProofCardCarousel from "./HeroProofCardCarousel";
import ConsultantProfileSection from "./ConsultantProfileSection";
import ServiceImageGallery from "./ServiceImageGallery";
import ServiceContentImageFrame, { getServiceContentImages } from "./ServiceContentImageFrame";
import TemplateMotion from "./TemplateMotion";
import LiveSuccessVideos from "./LiveSuccessVideos";
import FaqSection from "@/components/sections/FaqSection";
import { getSeoContentBlocks } from "@/lib/seoContent";
import { getFrameResearchParagraph, getFrameSupportContent } from "@/lib/seoBalancedContent";

const href = (path) => currentPagePath(path);

function TemplateLink({ children, path, className = "", ...props }) {
  const buttonSurface = className.includes("btn-primary")
    ? "bg-[var(--primary)] text-[var(--template-on-primary)] shadow-[0_13px_28px_color-mix(in_srgb,var(--primary)_23%,transparent)] hover:bg-[var(--accent)]"
    : className.includes("btn-secondary")
      ? "border-[var(--border)] bg-transparent text-[var(--ink)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
      : "";
  const classes = className.split(/\s+/).includes("btn") ? `inline-flex items-center justify-center gap-[9px] min-h-12 border border-transparent rounded-[12px] px-5 py-[13px] font-extrabold text-[13px] leading-none transition-[transform,background,border-color,color] duration-[200ms] ease-[ease] hover:translate-y-[-2px] ${buttonSurface} ${className}` : className;
  return <Link href={href(path)} className={classes.trim()} {...props}>{children}</Link>;
}

function ServiceSectionHeading({ eyebrow, title, lead, compact = false }) {
  return (
    <header className={cn("section-head grid grid-cols-[.72fr_.42fr] max-[880px]:grid-cols-1 items-end gap-[50px] max-[880px]:gap-[17px] mb-[42px] reveal", compact && "!block text-center !mb-7")}>
      <div className={cn(compact && "mx-auto")}><p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">{eyebrow}</p><h2 className={cn("max-w-[760px]", compact && "!max-w-none")}>{title}</h2></div>
      {lead && <p className={cn("text-[16px] leading-[1.65]", compact && "mx-auto !text-[16px] !leading-[1.65]")}>{lead}</p>}
    </header>
  );
}

function getLead(page, blocks) {
  const heroBlocks = parseBlocks(page.hero || "");
  return rebrand(heroBlocks.find((block) => block.type === "paragraph")?.text || page.seo?.description || blocks.find((block) => block.type === "paragraph")?.text || "A clear, evidence-led plan for your Canadian immigration goal.");
}

function groupContentBlocks(blocks) {
  const leading = [];
  const sections = [];
  let current = null;

  blocks.forEach((block) => {
    if (block.type === "heading" && block.level === 2) {
      current = [block];
      sections.push(current);
      return;
    }
    if (current) current.push(block);
    else leading.push(block);
  });

  return { leading, sections };
}

function extractRelatedPages(blocks) {
  const contentBlocks = [];
  const relatedBlocks = [];

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];
    const nextBlock = blocks[index + 1];
    const isRelatedHeading = block.type === "heading"
      && block.level === 2
      && /^related pages$/i.test(block.text);

    if (isRelatedHeading && nextBlock?.type === "list") {
      relatedBlocks.push(block, nextBlock);
      index += 1;

      // Keep the authored call to action with the relocated Related Pages
      // section when it immediately follows the links.
      const callToAction = blocks[index + 1];
      if (callToAction?.type === "paragraph" && /^CTA\s*:/i.test(callToAction.text)) {
        relatedBlocks.push(callToAction);
        index += 1;
      }
      continue;
    }

    contentBlocks.push(block);
  }

  return { contentBlocks, relatedBlocks };
}

function renderContentBlocks(blocks, prefix, page, tableCounter) {
  let relatedPagesHeading = false;
  return blocks.map((block, index) => {
    if (block.type === "heading") {
      relatedPagesHeading = /^related pages$/i.test(block.text);
    } else if (relatedPagesHeading && block.type === "list") {
      relatedPagesHeading = false;
      return <RelatedPagesList key={`${prefix}-${block.type}-${index}`} items={block.items} ordered={block.ordered} />;
    } else {
      relatedPagesHeading = false;
    }
    const tableIndex = block.type === "table" ? tableCounter.value++ : 0;
    return <Block key={`${prefix}-${block.type}-${index}`} block={block} page={page} tableIndex={tableIndex} />;
  });
}

function isFaqSection(section) {
  return section.some((block) => block.type === "heading" && block.level === 2 && /faq|questions people ask|frequently asked/i.test(block.text));
}

function sectionHeading(section) {
  return section.find((block) => block.type === "heading" && block.level === 2)?.text || "";
}

function sectionHasTable(section) {
  return section.some((block) => block.type === "table");
}

function sectionHasParagraph(section) {
  return section.some((block) => block.type === "paragraph" && block.text?.trim());
}

function countSectionParagraphWords(section) {
  return section
    .filter((block) => block.type === "paragraph")
    .reduce((total, block) => total + String(block.text || "").replace(/[^A-Za-z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean).length, 0);
}

function findFeaturedParagraphSection(sections) {
  const answerSection = sections.findIndex((section) => /^what is\b/i.test(sectionHeading(section)) && sectionHasParagraph(section) && !sectionHasTable(section));
  if (answerSection >= 0) return answerSection;
  return sections.findIndex((section) => sectionHasParagraph(section) && !sectionHasTable(section));
}

function findFeaturedTableSection(sections, paragraphSectionIndex) {
  const candidates = sections
    .map((section, index) => ({ section, index }))
    .filter(({ section, index }) => index !== paragraphSectionIndex && sectionHasTable(section));
  if (candidates.length === 0) return -1;

  // Keep the page's primary route data with the featured table row while
  // leaving any earlier overview tables in their original full-width order.
  const beforeParagraph = candidates.filter(({ index }) => index < paragraphSectionIndex);
  return (beforeParagraph.at(-1) || candidates[0]).index;
}

function addFrameResearchCopy(section, page) {
  if (countSectionParagraphWords(section) >= 140) return section;
  return [...section, { type: "paragraph", text: getFrameResearchParagraph(page) }];
}

function ServiceFaqSection({ faqs, isToolPage }) {
  return <FaqSection faqs={faqs} description={isToolPage ? "Open a question to understand what the tool can show, what it cannot decide and what to check next." : "Get a concise answer about this pathway and what to verify before you take the next step."} className={isToolPage ? "tool-faq-section" : "service-faq-section"} />;
}

export default function ReferenceServicePage({ page, children, interactivePosition = "bottom", interactiveHeading }) {
  // Keep all authored blocks in their original order, then append the
  // topic-aware search section. Nothing from the supplied page record is
  // replaced or removed.
  const blocks = [...(page.contentBlocks || parseBlocks(page.content || "")), ...getSeoContentBlocks(page)];
  const isToolPage = page.path.startsWith("/tools/") || page.path === "/assessment/free-canada-immigration-assessment";
  const isAboutOverviewPage = page.path === "/about/about-commonwealth-migration";
  const lead = getLead(page, blocks);
  const title = rebrand(page.h1);
  const { contentBlocks, relatedBlocks } = extractRelatedPages(blocks);
  const { leading, sections: allSections } = groupContentBlocks(contentBlocks);
  // FAQ content belongs in the shared styled FAQ section below the guide.
  // Keeping authored FAQ blocks in the reading flow creates a second FAQ area
  // and prevents the attached section from showing the page's real answers.
  const sections = allSections.filter((section) => !isFaqSection(section));
  const pageFaqs = getPageFaqs(page);
  const headings = sections.flat().filter((block) => block.type === "heading" && block.level >= 2).slice(0, 5);
  const contentImages = getServiceContentImages(page);
  const paragraphImageSection = findFeaturedParagraphSection(sections);
  const tableImageSection = findFeaturedTableSection(sections, paragraphImageSection);
  const featuredStart = paragraphImageSection >= 0 && tableImageSection >= 0
    ? Math.min(paragraphImageSection, tableImageSection)
    : paragraphImageSection >= 0
      ? paragraphImageSection
      : tableImageSection;
  const tableCounter = { value: 0 };

  const interactiveSection = children && (
    <section className={cn("section relative z-[1] bg-[var(--surface-alt)] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 alt service-interactive-section", interactivePosition === "top" && "service-interactive-section--top !pt-14 !pb-[4.5rem] max-[640px]:!pt-10 max-[640px]:!pb-12")}>
      <div className={cn("section-inner mx-auto w-[var(--container)] service-interactive-shell", interactivePosition === "top" && "max-w-[640px]")}>
        <ServiceSectionHeading
          eyebrow={interactiveHeading?.eyebrow ?? "Your next step"}
          title={interactiveHeading?.title ?? "Turn the overview into a focused review"}
          lead={interactiveHeading?.lead ?? "Complete the guided form below and bring the result into a consultation when your situation needs tailored strategy."}
          compact={interactivePosition === "top"}
        />
        {children}
      </div>
    </section>
  );

  return (
    <div className="cmg-template-home cmg-template-service bg-[var(--bg)] text-[var(--ink)] [--container:min(1220px,calc(100%-40px))] max-[1120px]:[--container:min(1220px,calc(100%-32px))] max-[620px]:[--container:calc(100%-28px)] max-[620px]:text-[15px]" data-concept="nocturne">
      <TemplateMotion />
      <section className="hero service-hero relative isolate before:absolute before:inset-0 before:z-[-2] before:pointer-events-none before:content-[''] after:absolute after:z-[-2] after:pointer-events-none after:content-[''] before:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--cmg-template-deep-surface)_2%,transparent),color-mix(in_srgb,var(--bg)_52%,transparent)_145%)] after:top-[-180px] after:right-[-170px] after:h-[520px] after:w-[520px] after:rounded-full after:bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] after:blur-[80px] w-full overflow-hidden bg-transparent pb-20 min-[881px]:min-h-[max(880px,100svh)]" aria-labelledby="service-hero-title">
        <div className="ambient a" aria-hidden="true" />
        <div className="ambient b" aria-hidden="true" />
        <HeroCarousel slides={HERO_SLIDES} className="hero-background-carousel z-[-3] w-full min-h-full rounded-[30px] border border-[var(--border)] bg-[var(--secondary)] shadow-[var(--shadow)]" />
        <div className="hero-layout relative z-[1] grid grid-cols-[minmax(0,1fr)_minmax(420px,.86fr)] max-[1120px]:grid-cols-[minmax(0,1fr)_minmax(360px,.85fr)] max-[880px]:grid-cols-1 items-center max-[880px]:items-start gap-[66px] max-[1120px]:gap-[38px] max-[880px]:gap-[44px] w-[min(1280px,calc(100%-48px))] max-[620px]:w-[var(--container)] mx-auto">
          <div className="hero-copy relative z-[2] min-w-0 max-[880px]:w-full reveal in">
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-[''] [text-shadow:0_1px_8px_color-mix(in_srgb,var(--cmg-template-deep-surface)_28%,transparent)]">Licensed Canadian immigration guidance</p>
            <h1 id="service-hero-title" className="max-w-[790px] text-[clamp(42px,2.2rem+3.4vw,66px)] !font-semibold !leading-[1.04] !tracking-[-.03em] max-[1120px]:!text-[clamp(38px,4.6vw,52px)] max-[620px]:!text-[clamp(34px,10.5vw,44px)] max-[1023.98px]:text-center max-[1023.98px]:mx-auto text-[var(--template-on-primary)] [text-shadow:0_2px_18px_color-mix(in_srgb,var(--cmg-template-deep-surface)_42%,transparent),0_1px_2px_color-mix(in_srgb,var(--cmg-template-deep-surface)_55%,transparent)]">{title}</h1>
            <p className="lead max-w-[680px] max-[1023.98px]:text-center max-[1023.98px]:mx-auto !mt-6 text-[color-mix(in_srgb,var(--template-on-primary)_82%,transparent)] [text-shadow:0_1px_10px_color-mix(in_srgb,var(--cmg-template-deep-surface)_48%,transparent)] text-[17px] leading-[1.8] max-[620px]:text-[15px]">{lead}</p>
            <div className="hero-actions flex flex-wrap gap-3 mt-[30px] max-[768px]:!flex max-[768px]:!flex-col max-[768px]:!items-center max-[768px]:!gap-3 max-[768px]:!mt-6">
              <TemplateLink path={site.ctas.primary.href} className="btn btn-primary max-[768px]:!w-full max-[768px]:!min-h-[52px] max-[768px]:!px-[22px] max-[768px]:!py-[14px] max-[768px]:!rounded-[14px] max-[768px]:!text-[14px]">Book a Consultation <ArrowRight width={18} height={18} aria-hidden="true" /></TemplateLink>
              <TemplateLink path="/tools/crs-calculator" className="btn btn-secondary max-[768px]:!w-auto max-[768px]:!min-h-10 max-[768px]:!px-[18px] max-[768px]:!py-[9px] max-[768px]:!rounded-full max-[768px]:!text-[12.5px]">Check your CRS <Calculator width={18} height={18} aria-hidden="true" /></TemplateLink>
            </div>
          </div>
          <div className="hero-visual self-start relative w-full min-h-[530px] max-[880px]:static max-[880px]:min-h-0 max-[880px]:transform-none max-[880px]:mt-[26px] reveal in">
            <HeroProofCardCarousel />
          </div>
        </div>
      </section>

      <section className="section relative z-[1] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16">
        <div className="section-inner mx-auto w-[var(--container)]">
          <ServiceSectionHeading eyebrow="A sharper service plan" title="Built around the decision your file needs" lead="The right service is more than a checklist. It is a sequence that turns your facts into a coherent, review-ready pathway." />
          <div className="service-grid grid grid-cols-3 max-[1120px]:grid-cols-2 max-[620px]:grid-cols-1 gap-[15px]">
            {[['Diagnose', 'Start with the facts, goals, history and deadlines that shape the route.', Target], ['Build', 'Organize evidence, explanations and forms around the decision-maker’s concern.', FileCheck2], ['Protect', 'Keep ownership, communication and the next deadline visible from start to finish.', ShieldCheck]].map(([heading, description, Icon], index) => <article className="service-card relative flex min-h-[220px] flex-col overflow-hidden p-[25px] max-[620px]:min-h-0 max-[620px]:p-5 rounded-[20px] reveal before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:rounded-[20px_20px_0_0] before:bg-[linear-gradient(90deg,var(--primary),var(--accent))] before:origin-left before:scale-x-[.28] before:transition-transform before:duration-[400ms] before:ease-[cubic-bezier(.2,.8,.2,1)] before:content-[''] hover:before:scale-x-100" key={heading} style={{ '--delay': `${index * 60}ms` }}><span className="icon-box inline-flex h-[46px] w-[46px] items-center justify-center rounded-[14px] m-0 bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-[var(--primary)]"><Icon width={22} height={22} aria-hidden="true" /></span><h3 className="m-[9px_0_8px] text-[var(--ink)] text-[19px] font-extrabold !leading-[1.25] tracking-normal">{heading}</h3><p className="m-0 text-[var(--muted)] text-[14px] leading-[1.65]">{description}</p><ArrowUpRight className="self-end mt-auto" width={18} height={18} aria-hidden="true" /></article>)}
          </div>
        </div>
      </section>

      <ServiceImageGallery page={page} />

      {/* Keep the page's primary interaction close to the visual route guide.
          Supporting explanation and related content follow below it. */}
      {interactiveSection}

      <section className="section relative z-[1] bg-[var(--surface-alt)] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 alt">
        <div className="section-inner mx-auto w-[var(--container)] service-route-layout grid grid-cols-[.82fr_1.18fr] items-center gap-[46px] max-[880px]:grid-cols-1 max-[880px]:gap-[35px]">
          <div className="service-route-copy reveal"><p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">What this service covers</p><h2 className="max-w-[590px]">Map the requirements to your next move</h2><p className="!max-w-[520px] !m-[18px_0_0] !text-[var(--muted)] !text-[15px] !leading-[1.8]">Use the section index to move from the high-level route into the requirements, evidence and decisions that shape your file before you book.</p><TemplateLink path={site.ctas.primary.href} className="btn btn-primary !mt-[25px]">Talk through your file <ArrowUpRight width={18} height={18} aria-hidden="true" /></TemplateLink></div>
          <ol className="guide-list service-route-list block m-0 p-0 list-none border-t border-[var(--border)]">{headings.map((heading, index) => <li className="reveal grid grid-cols-[46px_1fr_24px] items-center gap-4 border-b border-[var(--border)] py-[18px]" key={`${heading.text}-${index}`} style={{ '--delay': `${index * 50}ms` }}><span className="text-[var(--primary)] text-[11px] font-extrabold leading-none">0{index + 1}</span><div><strong className="!text-[var(--ink)] !text-[15px] !font-bold !leading-normal">{rebrand(heading.text)}</strong><p className="!m-[3px_0_0] !text-[var(--muted)] !text-[13px] !leading-[1.65]">Open this section for the practical detail, evidence and requirements that shape the pathway.</p></div><ArrowUpRight className="text-[var(--primary)]" width={18} height={18} aria-hidden="true" /></li>)}</ol>
        </div>
      </section>

      <section className="section relative z-[1] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 service-reading-section">
        <div className="section-inner mx-auto w-[var(--container)] service-reading-shell max-w-[1020px]">
          <ServiceSectionHeading eyebrow="Your service guide" title="The details that move the file forward" lead="Review the complete guide below, then use the consultation path when your situation needs a tailored strategy." />
          <article className="service-reading max-w-[900px] mx-auto border-t border-[var(--border)] pt-[13px] reveal in">
            {renderContentBlocks(leading, "leading", page, tableCounter)}
            {sections.map((section, index) => {
              if (index === featuredStart && paragraphImageSection >= 0 && tableImageSection >= 0) {
                return (
                  <div className="service-content-featured-stack" key={`featured-stack-${index}`}>
                    <ServiceContentImageFrame image={contentImages[0]} side="right">
                      {renderContentBlocks(addFrameResearchCopy(sections[paragraphImageSection], page), "frame-copy", page, tableCounter)}
                    </ServiceContentImageFrame>
                    <ServiceContentImageFrame image={contentImages[1]} side="left" supportingContent={getFrameSupportContent(page)}>
                      {renderContentBlocks(sections[tableImageSection], "frame-table", page, tableCounter)}
                    </ServiceContentImageFrame>
                  </div>
                );
              }
              if (index === paragraphImageSection || index === tableImageSection) return null;
              return <div className="service-content-full-width w-full" key={`content-section-${index}`}>{renderContentBlocks(section, `full-${index}`, page, tableCounter)}</div>;
            })}
            {paragraphImageSection < 0 && tableImageSection < 0 && <ServiceContentImageFrame image={contentImages[1]} side="left"><p>When the route needs a second perspective, a focused review helps connect the facts, evidence and the next decision.</p></ServiceContentImageFrame>}
          </article>
        </div>
      </section>

      {isAboutOverviewPage && <ConsultantProfileSection id="vishal-arora-about" />}

      {relatedBlocks.length > 0 && (
        <section className="section relative z-[1] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 service-related-section">
          <div className="section-inner mx-auto w-[var(--container)] service-related-shell max-w-[1020px]">
            <article className="service-reading max-w-[900px] mx-auto">
              {renderContentBlocks(relatedBlocks, "related", page, tableCounter)}
            </article>
          </div>
        </section>
      )}

      {pageFaqs.length > 0 && <ServiceFaqSection faqs={pageFaqs} isToolPage={isToolPage} />}

      <LiveSuccessVideos />

      <section className="cta-section py-[72px]"><div className="cta-shell flex items-center justify-between max-[880px]:items-start max-[880px]:flex-col !w-[var(--container)] !gap-10 mx-auto !p-0 !rounded-none !bg-transparent"><div><h2 className="!text-[clamp(30px,1.8rem+2.2vw,46px)] !leading-none !text-[var(--template-on-primary)]">Ready to make the next step clearer?</h2><p className="!mt-3 !max-w-[650px] !text-[16px] !text-[color-mix(in_srgb,var(--template-on-primary)_80%,transparent)]">Bring your questions, history and documents to a focused review with a licensed Canadian immigration team.</p></div><TemplateLink path={site.ctas.primary.href} className="btn !flex-none !px-6 !py-[17px] !bg-[var(--template-on-primary)] !text-[var(--cmg-dark-secondary)]">Book a Consultation <ArrowUpRight width={19} height={19} aria-hidden="true" /></TemplateLink></div></section>

      <section className="service-transition-section border-t border-b border-[var(--template-border)] bg-[var(--template-secondary)] text-[var(--template-ink)] py-[58px] max-[620px]:py-11" aria-labelledby="service-transition-title">
        <div className="service-transition-shell grid grid-cols-[minmax(0,1.08fr)_minmax(360px,.92fr)] items-center gap-12 w-[var(--container)] mx-auto max-[880px]:grid-cols-1 max-[880px]:gap-7 max-[620px]:gap-6">
          <div className="service-transition-copy">
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">Keep exploring your pathway</p>
            <h2 id="service-transition-title" className="!max-w-[620px] !text-[var(--template-ink)] !text-[clamp(27px,1.55rem+1.7vw,40px)] !leading-[1.08]">Make the next decision with better context</h2>
            <p className="!max-w-[590px] !m-[13px_0_0] !text-[var(--template-muted)] !text-[14px] !leading-[1.75]">Use a free tool to pressure-test the route, or return to the pathway library when you are ready to compare options.</p>
          </div>
          <nav className="service-transition-links grid gap-[10px]" aria-label="Continue exploring">
            <TemplateLink path={site.ctas.tools.href} className="service-transition-link flex items-center justify-between gap-5 rounded-[14px] border border-[var(--template-border)] bg-[color-mix(in_srgb,var(--template-ink)_4%,var(--template-secondary))] p-[16px_18px] text-[var(--template-ink)] transition-[border-color,background,transform] duration-[250ms] ease-in-out hover:border-[var(--template-primary)] hover:bg-[color-mix(in_srgb,var(--template-primary)_10%,var(--template-secondary))] hover:translate-x-1">
              <span className="grid gap-1"><strong className="text-[14px] leading-[1.25]">Explore free tools</strong><small className="text-[var(--template-muted)] text-[11px] leading-[1.4]">Start with practical numbers and checklists.</small></span>
              <ArrowUpRight className="text-[var(--template-primary)] flex-none" width={18} height={18} aria-hidden="true" />
            </TemplateLink>
            <TemplateLink path="/" className="service-transition-link flex items-center justify-between gap-5 rounded-[14px] border border-[var(--template-border)] bg-[color-mix(in_srgb,var(--template-ink)_4%,var(--template-secondary))] p-[16px_18px] text-[var(--template-ink)] transition-[border-color,background,transform] duration-[250ms] ease-in-out hover:border-[var(--template-primary)] hover:bg-[color-mix(in_srgb,var(--template-primary)_10%,var(--template-secondary))] hover:translate-x-1">
              <span className="grid gap-1"><strong className="text-[14px] leading-[1.25]">View all pathways</strong><small className="text-[var(--template-muted)] text-[11px] leading-[1.4]">Compare immigration routes and services.</small></span>
              <ArrowUpRight className="text-[var(--template-primary)] flex-none" width={18} height={18} aria-hidden="true" />
            </TemplateLink>
          </nav>
        </div>
      </section>
    </div>
  );
}
