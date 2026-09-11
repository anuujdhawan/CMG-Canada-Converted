import { getTableSeoContent } from "@/lib/tableSeoContent";

function slugify(value) {
  return String(value || "table").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/**
 * Adds answer-first context immediately before a data table without changing
 * the table rows, source order or the authored page record.
 */
export default function TableSeoIntro({ page, block, tableIndex = 0 }) {
  const content = getTableSeoContent(page, block, tableIndex);
  const titleId = `table-context-${slugify(page?.path)}-${tableIndex}`;

  return (
    <section className="my-7 border-l-4 border-[var(--template-primary)] bg-[color-mix(in_srgb,var(--template-primary)_5%,transparent)] px-5 py-1.5" aria-labelledby={titleId}>
      <p className="!m-0 !mt-2 !text-[11px] !font-extrabold !uppercase !tracking-[.16em] !text-[var(--template-primary)]">{content.eyebrow}</p>
      <h3 id={titleId} className="!mt-2 !text-[clamp(21px,1.2rem+0.8vw,28px)] !leading-[1.2] !text-[var(--template-ink)]">{content.question}</h3>
      {content.paragraphs.map((paragraph, index) => (
        <p key={index} className="!mt-3 !text-[15px] !leading-[1.8] !text-[var(--template-muted)]">{paragraph}{index === content.paragraphs.length - 1 && <> {" "}<a href={content.source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--template-primary)] underline underline-offset-2">{content.source.label}</a>.</>}</p>
      ))}
    </section>
  );
}
