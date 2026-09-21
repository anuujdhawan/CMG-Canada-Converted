import Link from "next/link";
import { ArrowUpRight, BadgeCheck, CalendarDays, ExternalLink, ListChecks, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";
import BlogHero, { TemplateLink } from "./BlogHero";
import BlogCard from "./BlogCard";
import TemplateMotion from "@/components/home/TemplateMotion";
import { getBlogCategory, getBlogGroups, researchCategorySlug } from "@/lib/blog";

/**
 * Themed article shell for the research guides under `/blog/<slug>`.
 *
 * This route used to render its own bare markup outside `.cmg-template-home`.
 * Because that class is what defines the theme tokens *and* what switches the
 * header onto the template skin, the page arrived unthemed — a 1400px header
 * pill instead of 1220px, borders and surfaces that resolved to nothing, and no
 * response to the light/dark toggle. It now shares the same shell, hero,
 * cards and CTA as `/blog` and `/canada-immigration-news`.
 *
 * The previous version also printed the post's raw `keywords` string in a
 * "Target phrases:" box — an editorial artefact that was never meant to be
 * read. Keywords now stay in the metadata and JSON-LD, and the box is replaced
 * with an "At a glance" panel that carries information a reader can use.
 */

/**
 * Per-category guidance for the three reading sections.
 *
 * The sections used to be three identical paragraphs for all 20 posts, which is
 * thin, duplicated content across the whole library. Keying the copy on the
 * category gives each topic its own advice while staying deliberately general —
 * nothing here states a rule that a reader should not confirm on the official
 * page, which the callout below every article links to.
 */
const CATEGORY_GUIDANCE = {
  "express-entry": {
    verify: "Confirm your profile facts against the current federal criteria — the category-based selection list, the minimum entry requirements and the points you can actually document. Categories and CRS factors move between rounds, so the official IRCC page is the version that counts.",
    prepare: "Line up language test results, an educational credential assessment, reference letters that state your duties and hours, and proof of funds. Names, dates and job titles need to agree across every document before a profile is submitted.",
    ask: "Ask which program you would be invited under, how your NOC and TEER code is being read, what a realistic CRS range looks like for your occupation, and whether a provincial nomination or a French-language result would change the picture.",
  },
  "work-permits": {
    verify: "Start with whether the permit is open or employer-specific, because that decides who has to act first. Then confirm the current eligibility rules, the labour market basis for the role, and any conditions attached to the permit.",
    prepare: "Employer-specific permits turn on a compliant job offer and a positive labour market decision; open permits turn on the relationship, status or program that creates the exemption. Keep the offer, contract, licence or registration evidence and identity documents together.",
    ask: "Ask how long the permit can run, whether a spouse or children can be included, what happens if the job or employer changes, and how the permit connects to a permanent residence route.",
  },
  "study-permits": {
    verify: "Confirm the designated learning institution, the length of the program and whether the qualification still supports a post-graduation work permit. Study permit rules, including the financial requirements, have changed repeatedly.",
    prepare: "Build the file around the purpose of study: the letter of acceptance, tuition payment, proof of funds and a credible explanation of why this program, at this school, now. Inconsistent dates or unexplained funds are the most common reasons a file stalls.",
    ask: "Ask how much money has to be shown and for how long, whether the program qualifies for a post-graduation work permit, and how a spouse or dependent would be treated.",
  },
  "family-sponsorship": {
    verify: "Identify the exact stream first — spousal, partner, dependent child, or parents and grandparents — because eligibility, income requirements and processing differ. Check that the sponsor is eligible at all before building the relationship evidence.",
    prepare: "Relationship evidence is the file. Gather the timeline of the relationship, communication, shared finances, photographs and third-party statements that show the relationship as genuine and continuing.",
    ask: "Ask what the sponsorship undertaking commits you to, how inland and outland differ for travel and work, and what happens if the relationship evidence is thin.",
  },
  "provincial-nominee-programs": {
    verify: "Each province runs its own streams, intake windows and criteria, so start with the province and the stream rather than with a points total. Confirm whether the stream needs a job offer, a connection to the province, or an expression of interest.",
    prepare: "Prepare the province-specific evidence: work experience in the named occupation, the employer's job offer where required, settlement funds, and any language or education documents the stream lists.",
    ask: "Ask whether the nomination is enhanced or base, how it interacts with an Express Entry profile, and what the province expects from you after nomination.",
  },
  "employer-immigration": {
    verify: "Separate the employer's obligations from the worker's. Confirm whether a labour market impact assessment is required, what the prevailing wage and recruitment rules are, and whether a compliant exemption applies instead.",
    prepare: "Employers need recruitment records, wage and working-condition evidence, and corporate documentation. Workers need a job offer that matches their experience and the program's requirements.",
    ask: "Ask about compliance and inspection exposure, the timeline from offer to permit, and whether the role supports a permanent residence pathway.",
  },
  "visitor-visas": {
    verify: "Temporary residence decisions turn on purpose of travel, ties to your home country, funds and credibility. Check the current document requirements and any biometrics step before you apply.",
    prepare: "Write a short, consistent purpose of travel and support it with employment or study evidence, property or family ties, a funds history, and a travel plan that matches what you wrote.",
    ask: "Ask what would make the application more credible, how a previous refusal affects this one, and how long a stay is actually being requested.",
  },
  "immigration-guides": {
    verify: "Find the official source for the rule you are relying on and read it in full. Immigration policy, processing times and program criteria change without notice, and a summary written last month can already be out of date.",
    prepare: "Keep one folder with your status documents, dates, employment and education records, and any previous applications or refusals. Most delays trace back to an inconsistency between two documents rather than to a missing form.",
    ask: "Ask which rule applies to your situation today, what could cause a refusal, which deadline matters most, and what should be reviewed by a licensed representative before you submit.",
  },
};

const READING_SECTIONS = [
  { key: "verify", heading: "What to verify first", icon: BadgeCheck },
  { key: "prepare", heading: "How to prepare the file", icon: ListChecks },
  { key: "ask", heading: "Questions to ask before you file", icon: ShieldCheck },
];

function formatMonth(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-CA", { month: "long", year: "numeric" }).format(date);
}

function sourceLabel(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "official source";
  }
}

function AtAGlance({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-5">
      <p className="eyebrow m-0 !text-[10px] !font-extrabold !leading-[1.4] !tracking-[.16em] uppercase text-[var(--primary)]">{label}</p>
      <p className="!m-0 !text-[14px] !font-bold !leading-[1.5] text-[var(--ink)]">{children}</p>
    </div>
  );
}

export default function BlogArticlePage({ post }) {
  const articlePath = `/blog/${post.slug}`;
  const categorySlug = researchCategorySlug(post.category);
  const category = getBlogCategory(categorySlug);
  const guidance = CATEGORY_GUIDANCE[categorySlug] || CATEGORY_GUIDANCE["immigration-guides"];
  const reviewed = formatMonth(post.updated || post.date || "2026-09-21");

  // Related guides lead with the article's own category, then widen to the rest
  // of the library so a single-post category still shows something useful.
  const library = getBlogGroups().flatMap((group) => group.posts).filter((item) => item.path !== articlePath);
  const related = [
    ...library.filter((item) => item.category.slug === categorySlug),
    ...library.filter((item) => item.category.slug !== categorySlug),
  ].slice(0, 3);

  return (
    <div className="cmg-template-home cmg-template-blog relative overflow-hidden bg-[var(--bg)] text-[var(--ink)] text-base leading-[1.65] [--container:min(1220px,calc(100%-40px))] max-[1120px]:[--container:min(1220px,calc(100%-32px))] max-[620px]:[--container:calc(100%-28px)] max-[620px]:text-[15px]" data-concept="nocturne">
      <TemplateMotion />

      <BlogHero
        eyebrow={`Resources · ${post.category}`}
        title={post.title}
        lead={post.description}
        chips={[
          { icon: ShieldCheck, label: "Licensed RCIC insight" },
          { icon: CalendarDays, label: reviewed ? `Reviewed ${reviewed}` : "Reviewed 2026" },
          { icon: ExternalLink, label: `Official source: ${sourceLabel(post.source)}` },
        ]}
        actions={
          <>
            <TemplateLink path={site.ctas.primary.href} className="btn btn-primary">
              Book a Consultation
              <ArrowUpRight width={18} height={18} aria-hidden="true" />
            </TemplateLink>
            <TemplateLink path="/blog" className="btn btn-secondary">
              Back to all guides
              <ArrowUpRight width={18} height={18} aria-hidden="true" />
            </TemplateLink>
          </>
        }
      />

      <section className="section relative z-[1] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 reference-blog-article">
        <div className="section-inner mx-auto w-[var(--container)] max-w-[1020px]">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-[12px] font-bold uppercase tracking-[.12em]" aria-label="Breadcrumb">
            <Link href="/blog" className="group"><span className="text-[var(--muted)] group-hover:text-[var(--primary)]">Blog</span></Link>
            <span aria-hidden className="text-[var(--border)]">/</span>
            <Link href={`/blog?category=${categorySlug}`} className="group"><span className="text-[var(--muted)] group-hover:text-[var(--primary)]">{category?.label || post.category}</span></Link>
          </nav>

          <div className="mb-10 grid grid-cols-3 max-[880px]:grid-cols-1 gap-[14px]">
            <AtAGlance label="Category">{category?.label || post.category}</AtAGlance>
            <AtAGlance label="Last reviewed">{reviewed || "September 2026"}</AtAGlance>
            <AtAGlance label="Verify with">
              <a href={post.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                <span className="text-[var(--primary)]">{sourceLabel(post.source)}</span>
                <ExternalLink width={13} height={13} aria-hidden="true" className="text-[var(--primary)]" />
              </a>
            </AtAGlance>
          </div>

          <article className="service-reading max-w-[900px] border-t border-[var(--border)] pt-[26px] reveal in">
            {READING_SECTIONS.map(({ key, heading, icon: Icon }) => (
              <section className="!mt-10 first:!mt-0" key={key}>
                <h2 className="flex items-start gap-3 !text-[clamp(23px,1.25rem+1.1vw,31px)] !leading-[1.15] !tracking-[-.02em] !text-[var(--ink)]">
                  <Icon width={22} height={22} aria-hidden="true" className="mt-1 flex-none text-[var(--primary)]" />
                  {heading}
                </h2>
                <p className="!mt-4 !text-[16px] !leading-[1.85] !text-[var(--muted)]">{guidance[key]}</p>
              </section>
            ))}

            <p className="!mt-11 border-l-4 border-[var(--primary)] !pl-5 !text-[15px] !leading-[1.8] !text-[var(--muted)]">
              Always confirm the current requirements on the{" "}
              <a href={post.source} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2">
                <span className="text-[var(--primary)]">official source</span>
              </a>{" "}
              before acting. This guide is general information, not advice on your file.
            </p>
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section relative z-[1] bg-[var(--surface-alt)] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 alt" aria-labelledby="related-guides-title">
          <div className="section-inner mx-auto w-[var(--container)]">
            <header className="section-head grid grid-cols-[.72fr_.42fr] max-[880px]:grid-cols-1 items-end gap-[50px] max-[880px]:gap-[17px] mb-[52px] max-[880px]:mb-[38px] reveal">
              <div>
                <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] uppercase">Keep reading</p>
                <h2 id="related-guides-title" className="max-w-[720px]">Guides that sit next to this one</h2>
              </div>
              <p className="max-w-[430px] text-[var(--muted)] text-[16px] leading-[1.75]">Each guide covers one decision. Read the one that matches your current question, then bring the rest to a consultation.</p>
            </header>
            <div className="reference-blog-grid grid grid-cols-3 max-[1100px]:grid-cols-2 max-[620px]:grid-cols-1 gap-[18px]">
              {related.map((item, index) => <BlogCard key={item.path} post={item} index={index} />)}
            </div>
          </div>
        </section>
      )}

      <section className="cta-section reference-blog-cta !bg-[linear-gradient(120deg,var(--primary),color-mix(in_srgb,var(--primary)_56%,var(--accent)),var(--accent))] py-[72px]">
        <div className="cta-shell flex items-center justify-between max-[880px]:items-start max-[880px]:flex-col w-[var(--container)] gap-10 mx-auto p-0 rounded-none bg-transparent">
          <div>
            <h2 className="!text-[clamp(30px,1.8rem+2.2vw,46px)] max-[880px]:!text-[clamp(30px,5.2vw,40px)] max-[620px]:!text-[clamp(29px,8.6vw,35px)] !leading-none text-[var(--template-on-primary)]">Ready to make the research personal?</h2>
            <p className="!mt-[12px] max-w-[650px] !text-[16px] text-[var(--template-on-primary)]">Bring this guide, your questions and your timeline to a focused consultation with a licensed Canadian immigration team.</p>
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
