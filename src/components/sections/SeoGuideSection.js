import { getSeoContentBlocks } from "@/lib/seoContent";

/**
 * Renders the additive guide copy on routes with a custom visual template
 * (homepage, blog and live draw tracker).
 */
export default function SeoGuideSection({ page, eyebrow = "Useful context", title = "Get the context behind the next decision" }) {
  const blocks = getSeoContentBlocks(page);
  if (blocks.length === 0) return null;

  return (
    <section className="relative z-[1] border-t border-[var(--template-border)] bg-[var(--template-surface-alt)] py-[92px] max-[880px]:py-[72px] max-[620px]:py-14" aria-labelledby="seo-guide-section-title">
      <div className="mx-auto w-[var(--container)] max-w-[1020px]">
        <header className="mb-10 max-w-[780px]">
          <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--template-primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">{eyebrow}</p>
          <h2 id="seo-guide-section-title" className="!m-0 !text-[clamp(30px,1.7rem+2vw,46px)] max-[880px]:!text-[clamp(30px,5.2vw,40px)] max-[620px]:!text-[clamp(29px,8.6vw,35px)] !leading-[1.08] !text-[var(--template-ink)]">{title}</h2>
        </header>
        <article className="max-w-[900px] border-t border-[var(--template-border)] pt-5">
          {blocks.map((block, index) => <SeoBlock key={`${block.type}-${index}`} block={block} />)}
        </article>
      </div>
    </section>
  );
}

function renderInline(text) {
  const value = String(text || "");
  const tokens = /\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^)]+\)/g;
  const parts = [];
  let cursor = 0;
  let match;
  let key = 0;
  while ((match = tokens.exec(value))) {
    if (match.index > cursor) parts.push(value.slice(cursor, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    } else {
      const link = token.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
      parts.push(<a key={key++} href={link?.[2]} target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--template-primary)] underline underline-offset-2">{link?.[1] || token}</a>);
    }
    cursor = match.index + token.length;
  }
  if (cursor < value.length) parts.push(value.slice(cursor));
  return parts;
}

function SeoBlock({ block }) {
  if (block.type === "heading") {
    return <h3 className="!mt-8 !text-[clamp(22px,1.25rem+1vw,30px)] !leading-[1.16] !text-[var(--template-ink)]">{renderInline(block.text)}</h3>;
  }
  if (block.type === "list") {
    const List = block.ordered ? "ol" : "ul";
    return <List className="mt-5 space-y-2.5 rounded-[16px] border border-[var(--template-border)] bg-[var(--template-surface)] p-[20px_24px] text-[15px] leading-[1.8] text-[var(--template-muted)] marker:text-[var(--template-primary)]">{block.items.map((item, index) => <li key={index} className={block.ordered ? "pl-1" : "relative pl-5"}>{!block.ordered && <span aria-hidden className="absolute left-0 top-[0.72em] h-1.5 w-1.5 rounded-full bg-[var(--template-primary)]" />}{renderInline(item)}</li>)}</List>;
  }
  return <p className="!mt-4 !text-[15px] !leading-[1.8] !text-[var(--template-muted)]">{renderInline(block.text)}</p>;
}
