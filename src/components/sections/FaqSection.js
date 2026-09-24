import { Plus } from "lucide-react";

const DEFAULT_EYEBROW = "Clear answers, before you decide";
const DEFAULT_TITLE = "Frequently asked questions";
const DEFAULT_DESCRIPTION = "Open a question to understand the context behind the pathway and what to check next.";

/**
 * Reusable FAQ section. Pass page-specific content as an array of
 * `{ question, answer }` objects and optionally customize the section copy.
 */
export default function FaqSection({
  faqs = [],
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  id = "faq",
  className = "",
}) {
  const items = faqs.filter((faq) => faq?.question && faq?.answer);
  if (items.length === 0) return null;

  const titleId = `${id}-title`;

  return (
    <section
      className={`section relative z-[1] py-[104px] max-[880px]:py-[76px] max-[620px]:py-16 ${className}`.trim()}
      id={id}
      aria-labelledby={titleId}
    >
      <div className="section-inner mx-auto w-[var(--container)] faq-shell grid grid-cols-[.68fr_1.32fr] max-[880px]:grid-cols-1 items-start gap-[60px] max-[880px]:gap-[35px]">
        <div className="faq-intro reveal">
          <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">
            {eyebrow}
          </p>
          <h2 id={titleId} className="!max-w-[760px] !text-[40px] max-[880px]:!text-[clamp(30px,5.2vw,40px)] max-[620px]:!text-[clamp(29px,8.6vw,35px)] !leading-none">{title}</h2>
          <p className="!m-0 !mt-[15px] !max-w-[380px] !text-[var(--muted)] !text-[14px] !leading-[1.65]">{description}</p>
        </div>
        <div className="faq-list border-t border-[var(--border)]">
          {items.map((faq, index) => (
            <details className="faq-item group border-b border-[var(--border)] reveal" key={`${faq.question}-${index}`} open={index === 0}>
              <summary className="faq-item__summary flex items-center justify-between gap-5 py-[22px] cursor-pointer list-none text-[var(--ink)] text-[14px] font-extrabold leading-[1.3]">
                {faq.question}
                <span className="faq-item__toggle inline w-auto h-auto flex-none border-0 rounded-none text-[var(--primary)] transition-transform duration-[300ms] ease-[ease]">
                  <Plus width={20} height={20} aria-hidden="true" />
                </span>
              </summary>
              <div className="faq-item__answer grid grid-rows-[0fr] p-0 transition-[grid-template-rows] duration-[350ms] ease-[ease] group-open:grid-rows-[1fr]">
                {/* NOTE: this renders the answer as plain text, so markdown links
                    ("[label](url)") in an FAQ answer print as literal markdown.
                    Do not switch this to MarkdownBlocks' renderInline: that module
                    imports pathForLegacyPath from @/lib/sitePages, which reads
                    route-map.json via `fs` at module scope. FaqSection is pulled
                    into the client bundle through ReferenceHomepage ("use client"),
                    so importing it breaks the build with "Can't resolve 'fs'".
                    Fixing this properly means making the route map importable
                    without fs, or extracting a dependency-free inline renderer. */}
                <p className="min-h-0 overflow-hidden !m-0 !pr-[50px] !mb-[22px] !pb-[22px] !text-[var(--muted)] !text-[13px] !leading-[1.75]">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
