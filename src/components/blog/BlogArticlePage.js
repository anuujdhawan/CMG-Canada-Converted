import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  ExternalLink,
  Info,
  Lightbulb,
  ListChecks,
  ShieldCheck,
} from "lucide-react";
import { site } from "@/config/site";
import BlogHero, { TemplateLink } from "./BlogHero";
import BlogCard from "./BlogCard";
import TemplateMotion from "@/components/home/TemplateMotion";
import FaqSection from "@/components/sections/FaqSection";
import { getBlogCategory, getBlogGroups, researchCategorySlug } from "@/lib/blog";
import { countArticleWords } from "@/data/blog-articles";

/**
 * Themed article shell for the research guides under `/blog/<slug>`.
 *
 * The route renders inside `.cmg-template-home`, which defines the theme tokens
 * *and* switches the header onto the template skin (`body:has(.cmg-template-home)`
 * in globals.css). The hero, cards and CTA below are the same recipe as `/blog`
 * and `/canada-immigration-news`.
 *
 * Two deliberate choices in the shell:
 *
 * 1. `overflow-x-clip`, not `overflow-hidden`. The sticky table of contents on
 *    the right needs `position: sticky` to work, and any ancestor with
 *    `overflow: hidden` becomes a scroll container that never scrolls — which
 *    silently turns the TOC into a static block. `overflow: clip` clips on one
 *    axis without creating a scroll container, so the decorative hero glow is
 *    still contained and the TOC still sticks.
 *
 * 2. `article` may be null. Posts are expanded one file at a time in
 *    `src/data/blog-articles/`, so the component has to stay correct for a post
 *    that has no body yet — it falls back to the per-category reading guidance
 *    rather than rendering an empty article.
 */

/**
 * Fallback reading guidance for a post that has no expanded body yet.
 *
 * Keyed on the tab slug. This is the copy the article route used before the
 * long-form bodies existed; it stays as the graceful default so adding a post to
 * `blog-research.js` without a matching article file still produces a usable
 * page instead of a blank one.
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

const FALLBACK_SECTIONS = [
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

/** Small uppercase label used above every block heading in the article. */
function Eyebrow({ children, className = "" }) {
  return (
    <p className={`m-0 flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-[11px] !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:mt-[7px] before:h-0.5 before:w-[30px] before:flex-none before:bg-current before:content-[''] ${className}`}>
      {children}
    </p>
  );
}

/**
 * One H2 section of the article body.
 *
 * `id` is what the table of contents links to, so every section must render one
 * — the TOC is built from the same array that is rendered here, which is what
 * keeps the two from drifting apart.
 *
 * The number badge sits **beside** the `<h2>`, never inside it. An `aria-hidden`
 * span inside a heading is still part of `innerText`, so the heading extracted
 * by a scraper or an answer engine read `"01What does the plan change?"` — the
 * same class of bug as JSX welding two words together across a `<br />`. Keeping
 * the badge as a sibling gives the identical visual and a clean heading.
 *
 * Ids must not begin with a digit: `href="#2026-targets"` still navigates, but
 * `querySelector("#2026-targets")` is an invalid selector, which breaks every
 * scripted check of the anchors.
 */
function ArticleSection({ section, index }) {
  return (
    <section id={section.id} className="scroll-mt-[150px] !mt-[52px] first:!mt-0">
      <div className="flex items-start gap-[14px]">
        <span aria-hidden="true" className="mt-[4px] flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[10px] bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-[12px] font-extrabold leading-none text-[var(--primary)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="!text-[clamp(24px,1.35rem+1.15vw,32px)] !leading-[1.15] !tracking-[-.022em] !text-[var(--ink)]">
          {section.heading}
        </h2>
      </div>

      <div className="mt-[18px] grid gap-[15px]">
        {(section.body || []).map((paragraph, index) => (
          <p key={index} className="!m-0 !text-[16px] !leading-[1.85] !text-[var(--muted)]">{paragraph}</p>
        ))}
      </div>

      {section.list && (
        <div className="article-checklist mt-[22px] rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-[22px_24px]">
          {section.list.title && (
            <p className="!m-0 !mb-[14px] flex items-center gap-2 !text-[13px] !font-extrabold !leading-[1.4] tracking-[.02em] !text-[var(--ink)]">
              <ListChecks width={16} height={16} aria-hidden="true" className="flex-none text-[var(--primary)]" />
              {section.list.title}
            </p>
          )}
          {section.list.ordered ? (
            <ol className="m-0 grid list-none gap-[11px] p-0">
              {(section.list.items || []).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-[2px] flex h-[20px] w-[20px] flex-none items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--primary)_13%,transparent)] text-[10px] font-extrabold leading-none text-[var(--primary)]">
                    {index + 1}
                  </span>
                  <span className="!text-[15px] !leading-[1.75] !text-[var(--muted)]">{item}</span>
                </li>
              ))}
            </ol>
          ) : (
            <ul className="m-0 grid list-none gap-[11px] p-0">
              {(section.list.items || []).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 width={17} height={17} aria-hidden="true" className="mt-[3px] flex-none text-[var(--primary)]" />
                  <span className="!text-[15px] !leading-[1.75] !text-[var(--muted)]">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {section.table && <ArticleTable table={section.table} />}

      {section.callout && (
        <aside className="mt-[22px] flex items-start gap-[14px] rounded-[18px] border border-[color-mix(in_srgb,var(--primary)_26%,var(--border))] bg-[color-mix(in_srgb,var(--primary)_7%,var(--surface))] p-[20px_22px]">
          <Lightbulb width={20} height={20} aria-hidden="true" className="mt-[2px] flex-none text-[var(--primary)]" />
          <div>
            <p className="!m-0 !text-[12px] !font-extrabold !leading-[1.4] tracking-[.14em] uppercase !text-[var(--primary)]">{section.callout.label}</p>
            <p className="!m-0 !mt-[7px] !text-[15px] !leading-[1.75] !text-[var(--ink)]">{section.callout.text}</p>
          </div>
        </aside>
      )}

      {section.related?.length > 0 && (
        <div className="mt-[20px] flex flex-wrap gap-[9px]">
          {section.related.map((link) => (
            <Link key={link.href} href={link.href} className="group inline-flex items-center gap-[7px] rounded-full border border-[var(--border)] bg-[var(--surface)] px-[15px] py-[8px] transition-colors duration-200 hover:border-[color-mix(in_srgb,var(--primary)_55%,var(--border))]">
              <span className="!text-[12.5px] !font-bold !leading-none text-[var(--muted)] group-hover:text-[var(--primary)]">{link.label}</span>
              <ArrowUpRight width={14} height={14} aria-hidden="true" className="text-[var(--primary)]" />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

/**
 * One markup source, reflowed for narrow screens.
 *
 * Below `lg` each cell prints its own column name and the row stacks: a
 * four-column table at a 390px viewport leaves roughly 88px per column, which
 * is unreadable, and a horizontally scrolling table hides the last column off
 * screen. Two separate markups (a table for desktop, cards for mobile) drift
 * apart and an extraction engine only ever sees one of them, so this keeps a
 * single real `<table>` and changes only its display.
 *
 * `display: block` on `<tr>` / `<td>` drops the implicit table roles from the
 * accessibility tree, so the roles are declared explicitly — that is what keeps
 * the stacked layout announced as a table.
 */
function ArticleTable({ table }) {
  return (
    <figure className="article-table mt-[24px] m-0 overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--surface)]">
      <figcaption className="border-b border-[var(--border)] bg-[var(--surface-alt)] px-[20px] py-[13px] text-[12px] font-extrabold uppercase tracking-[.13em] text-[var(--primary)] max-[620px]:px-[15px]">
        {table.caption}
      </figcaption>
      <table role="table" className="w-full border-collapse text-left">
        <thead className="hidden lg:table-header-group">
          <tr role="row">
            {table.columns.map((column) => (
              <th key={column} scope="col" role="columnheader" className="border-b border-[var(--border)] px-[18px] py-[12px] text-[11.5px] font-extrabold uppercase tracking-[.1em] text-[var(--ink)]">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex} role="row" className="border-b border-[var(--border)] last:border-b-0 max-lg:block max-lg:py-[4px]">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  role="cell"
                  className={`px-[11px] py-[13px] align-top text-[13.5px] leading-[1.6] text-[var(--muted)] lg:px-[18px] lg:text-[14.5px] lg:leading-[1.65] max-lg:block max-lg:px-[15px] max-lg:py-[6px] ${cellIndex === 0 ? "font-bold text-[var(--ink)]" : ""}`}
                >
                  <span className="mb-[3px] block text-[10.5px] font-extrabold uppercase tracking-[.12em] text-[var(--primary)] lg:hidden">
                    {table.columns[cellIndex]}
                  </span>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

/** "On this page" — anchors are built from the sections that actually render. */
function ArticleToc({ toc, sources }) {
  if (toc.length === 0 && sources.length === 0) return null;
  return (
    <nav aria-label="On this page" className="article-toc hidden lg:sticky lg:top-[148px] lg:block">
      {toc.length > 0 && (
        <>
          <Eyebrow>On this page</Eyebrow>
          <ol className="m-0 mt-[16px] grid list-none gap-[2px] border-l border-[var(--border)] p-0 pl-0">
            {toc.map((item, index) => (
              <li key={item.id}>
                <Link href={`#${item.id}`} className="group flex items-baseline gap-[10px] border-l-2 border-transparent py-[7px] pl-[14px] transition-colors duration-200 hover:border-[var(--primary)]">
                  <span className="text-[10px] font-extrabold leading-none text-[color-mix(in_srgb,var(--primary)_70%,var(--muted))]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] font-semibold leading-[1.45] text-[var(--muted)] group-hover:text-[var(--primary)]">
                    {item.heading}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </>
      )}

      {sources.length > 0 && (
        <div className="mt-[30px] border-t border-[var(--border)] pt-[22px]">
          <Eyebrow>Official sources</Eyebrow>
          <ul className="m-0 mt-[14px] grid list-none gap-[11px] p-0">
            {sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-[7px]">
                  <ExternalLink width={13} height={13} aria-hidden="true" className="mt-[4px] flex-none text-[var(--primary)]" />
                  <span className="text-[12.5px] font-semibold leading-[1.5] text-[var(--muted)] group-hover:text-[var(--primary)]">
                    {source.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

/** Collapsible version of the table of contents, for narrow screens. */
function ArticleTocInline({ toc }) {
  if (toc.length === 0) return null;
  return (
    <details className="article-toc-inline mb-10 rounded-[18px] border border-[var(--border)] bg-[var(--surface)] lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-[20px] py-[16px] text-[12px] font-extrabold uppercase tracking-[.14em] text-[var(--primary)]">
        <span className="inline-flex items-center gap-2">
          <BookOpen width={15} height={15} aria-hidden="true" />
          On this page
        </span>
        <span className="text-[11px] font-bold normal-case tracking-normal text-[var(--muted)]">{toc.length} sections</span>
      </summary>
      <ol className="m-0 grid list-none gap-[2px] border-t border-[var(--border)] p-[12px_20px_18px]">
        {toc.map((item, index) => (
          <li key={item.id}>
            <Link href={`#${item.id}`} className="flex items-baseline gap-[10px] py-[7px]">
              <span className="text-[10px] font-extrabold leading-none text-[color-mix(in_srgb,var(--primary)_70%,var(--muted))]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[13.5px] font-semibold leading-[1.45] text-[var(--muted)]">{item.heading}</span>
            </Link>
          </li>
        ))}
      </ol>
    </details>
  );
}

export default function BlogArticlePage({ post, article = null }) {
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

  const wordCount = countArticleWords(article);
  const readingMinutes = Math.max(1, Math.round(wordCount / 220));

  // The TOC is derived from what renders, not from a hand-maintained list, so a
  // new section cannot leave a dead anchor behind — and no rendered section can
  // be left out of the index.
  const toc = article
    ? [
      ...(article.sections || []).map((section) => ({ id: section.id, heading: section.heading })),
      ...(article.glossary?.length ? [{ id: "glossary", heading: "Key terms explained" }] : []),
      ...(article.related?.length ? [{ id: "where-next", heading: "Where to go next" }] : []),
      ...(article.sources?.length ? [{ id: "sources", heading: "Sources and further reading" }] : []),
      ...(article.faqs?.length ? [{ id: "faq", heading: "Frequently asked questions" }] : []),
    ]
    : [];

  const sources = article?.sources || [];
  const faqs = (article?.faqs || []).map((faq) => ({ question: faq.question, answer: faq.answer }));
  const hasToc = toc.length > 0 || sources.length > 0;

  return (
    <div className="cmg-template-home cmg-template-blog relative overflow-x-clip bg-[var(--bg)] text-[var(--ink)] text-base leading-[1.65] [--container:min(1220px,calc(100%-40px))] max-[1120px]:[--container:min(1220px,calc(100%-32px))] max-[620px]:[--container:calc(100%-28px)] max-[620px]:text-[15px]" data-concept="nocturne">
      <TemplateMotion />

      <BlogHero
        eyebrow={`Resources · ${post.category}`}
        title={post.title}
        lead={post.description}
        chips={[
          { icon: ShieldCheck, label: "Licensed RCIC insight" },
          { icon: CalendarDays, label: reviewed ? `Reviewed ${reviewed}` : "Reviewed 2026" },
          wordCount > 0
            ? { icon: Clock, label: `${readingMinutes} min read` }
            : { icon: ExternalLink, label: `Official source: ${sourceLabel(post.source)}` },
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

      {article && (
        <section className="section relative z-[1] border-b border-[var(--border)] bg-[var(--surface-alt)] py-[64px] max-[880px]:py-[52px] max-[620px]:py-11 article-summary" aria-labelledby="quick-answer-label">
          <div className="section-inner mx-auto w-[var(--container)] max-w-[1080px] grid grid-cols-[1.42fr_.78fr] max-[980px]:grid-cols-1 gap-[18px]">
            <div className="article-quick-answer flex flex-col rounded-[22px] border border-[color-mix(in_srgb,var(--primary)_24%,var(--border))] bg-[var(--surface)] p-[30px_32px] max-[620px]:p-[24px_22px]">
              <Eyebrow>
                <span id="quick-answer-label">Quick answer</span>
              </Eyebrow>
              <p id="quick-answer" className="!m-0 !mt-[16px] !text-[clamp(17px,1rem+.45vw,20px)] !font-semibold !leading-[1.68] !text-[var(--ink)]">
                {article.quickAnswer}
              </p>
              <p className="!m-0 !mt-[18px] flex items-start gap-2 !text-[12.5px] !leading-[1.6] !text-[var(--muted)]">
                <Info width={14} height={14} aria-hidden="true" className="mt-[3px] flex-none text-[var(--primary)]" />
                <span>General information, not advice on your file. Confirm current requirements before you act.</span>
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-x-[20px] gap-y-[9px] border-t border-[var(--border)] pt-[18px] max-[980px]:mt-[20px]">
                <span className="inline-flex items-center gap-[7px]">
                  <CalendarDays width={14} height={14} aria-hidden="true" className="text-[var(--primary)]" />
                  <span className="text-[12.5px] font-bold text-[var(--muted)]">Reviewed {reviewed || "September 2026"}</span>
                </span>
                <a href={post.source} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-[7px]">
                  <ExternalLink width={14} height={14} aria-hidden="true" className="text-[var(--primary)]" />
                  <span className="text-[12.5px] font-bold text-[var(--muted)] group-hover:text-[var(--primary)]">
                    Official source: {sourceLabel(post.source)}
                  </span>
                </a>
              </div>
            </div>

            <div className="article-takeaways flex flex-col rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-[30px_30px] max-[620px]:p-[24px_22px]">
              <Eyebrow>
                <span id="key-takeaways-label">Key takeaways</span>
              </Eyebrow>
              <ul className="m-0 mt-[16px] grid list-none gap-[12px] p-0">
                {(article.keyTakeaways || []).map((item, index) => (
                  <li key={index} className="flex items-start gap-[11px]">
                    <CheckCircle2 width={16} height={16} aria-hidden="true" className="mt-[4px] flex-none text-[var(--primary)]" />
                    <span className="text-[13.5px] font-semibold leading-[1.62] text-[var(--ink)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="section relative z-[1] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 reference-blog-article">
        <div className="section-inner mx-auto w-[var(--container)] max-w-[1080px]">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-[12px] font-bold uppercase tracking-[.12em]" aria-label="Breadcrumb">
            <Link href="/blog" className="group"><span className="text-[var(--muted)] group-hover:text-[var(--primary)]">Blog</span></Link>
            <span aria-hidden className="text-[var(--border)]">/</span>
            <Link href={`/blog?category=${categorySlug}`} className="group"><span className="text-[var(--muted)] group-hover:text-[var(--primary)]">{category?.label || post.category}</span></Link>
          </nav>

          <div className={`article-layout grid items-start gap-[56px] max-[1023px]:gap-0 ${hasToc ? "grid-cols-[minmax(0,1fr)_256px] max-[1023px]:grid-cols-1" : "grid-cols-1 max-w-[860px]"}`}>
            <div className="min-w-0">
              <ArticleTocInline toc={toc} />

              <article className="service-reading article-reading border-t border-[var(--border)] pt-[30px] reveal in">
                {article ? (
                  <>
                    {(article.sections || []).map((section, index) => (
                      <ArticleSection key={section.id} section={section} index={index} />
                    ))}

                    {article.glossary?.length > 0 && (
                      <section id="glossary" className="scroll-mt-[150px] !mt-[52px]">
                        <h2 className="flex items-start gap-3 !text-[clamp(24px,1.35rem+1.15vw,32px)] !leading-[1.15] !tracking-[-.022em] !text-[var(--ink)]">
                          <BookOpen width={20} height={20} aria-hidden="true" className="mt-[6px] flex-none text-[var(--primary)]" />
                          <span>Key terms explained</span>
                        </h2>
                        <p className="!m-0 !mt-[14px] !text-[15px] !leading-[1.8] !text-[var(--muted)]">
                          Immigration writing is full of acronyms and program names. These are the ones used in this guide, in plain language.
                        </p>
                        <dl className="m-0 mt-[20px] grid grid-cols-2 max-[720px]:grid-cols-1 gap-[12px]">
                          {article.glossary.map((entry) => (
                            <div key={entry.term} className="rounded-[16px] border border-[var(--border)] bg-[var(--surface)] p-[18px_20px]">
                              <dt className="text-[14px] font-extrabold leading-[1.35] text-[var(--ink)]">{entry.term}</dt>
                              <dd className="m-0 mt-[7px] text-[13.5px] leading-[1.68] text-[var(--muted)]">{entry.definition}</dd>
                            </div>
                          ))}
                        </dl>
                      </section>
                    )}

                    {article.related?.length > 0 && (
                      <section id="where-next" className="scroll-mt-[150px] !mt-[52px]">
                        <h2 className="flex items-start gap-3 !text-[clamp(24px,1.35rem+1.15vw,32px)] !leading-[1.15] !tracking-[-.022em] !text-[var(--ink)]">
                          <ArrowUpRight width={20} height={20} aria-hidden="true" className="mt-[6px] flex-none text-[var(--primary)]" />
                          <span>Where to go next</span>
                        </h2>
                        <p className="!m-0 !mt-[14px] !text-[15px] !leading-[1.8] !text-[var(--muted)]">
                          Use these pages to move from the general position to the program that fits your facts.
                        </p>
                        <div className="mt-[20px] grid grid-cols-2 max-[720px]:grid-cols-1 gap-[12px]">
                          {article.related.map((link) => (
                            <Link key={link.href} href={link.href} className="group flex items-start justify-between gap-4 rounded-[16px] border border-[var(--border)] bg-[var(--surface)] p-[18px_20px] transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--primary)_55%,var(--border))]">
                              <span className="grid gap-[5px]">
                                <strong className="text-[14.5px] font-extrabold leading-[1.35] text-[var(--ink)] group-hover:text-[var(--primary)]">{link.label}</strong>
                                {link.note && <small className="text-[12.5px] leading-[1.6] text-[var(--muted)]">{link.note}</small>}
                              </span>
                              <ArrowUpRight width={16} height={16} aria-hidden="true" className="mt-[3px] flex-none text-[var(--primary)]" />
                            </Link>
                          ))}
                        </div>
                      </section>
                    )}

                    {sources.length > 0 && (
                      <section id="sources" className="scroll-mt-[150px] !mt-[52px]">
                        <h2 className="flex items-start gap-3 !text-[clamp(24px,1.35rem+1.15vw,32px)] !leading-[1.15] !tracking-[-.022em] !text-[var(--ink)]">
                          <ExternalLink width={20} height={20} aria-hidden="true" className="mt-[6px] flex-none text-[var(--primary)]" />
                          <span>Sources and further reading</span>
                        </h2>
                        <ul className="m-0 mt-[18px] grid list-none gap-[10px] p-0">
                          {sources.map((source) => (
                            <li key={source.url}>
                              <a href={source.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-[9px]">
                                <ExternalLink width={14} height={14} aria-hidden="true" className="mt-[5px] flex-none text-[var(--primary)]" />
                                <span className="text-[14px] leading-[1.7] text-[var(--muted)] group-hover:text-[var(--primary)]">{source.label}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}
                  </>
                ) : (
                  <>
                    {FALLBACK_SECTIONS.map(({ key, heading, icon: Icon }) => (
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
                      <a href={post.source} target="_blank" rel="noopener noreferrer" className="group">
                        <span className="font-bold text-[var(--primary)] underline underline-offset-2">official source</span>
                      </a>{" "}
                      before acting. This guide is general information, not advice on your file.
                    </p>
                  </>
                )}
              </article>
            </div>

            <ArticleToc toc={toc} sources={sources} />
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <FaqSection
          faqs={faqs}
          eyebrow="Answered directly"
          title="Questions people ask about this"
          description="Short, direct answers to the questions this guide is most often asked. Each one is covered in more detail above."
        />
      )}

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
