import Link from "next/link";
import { ArrowRight, Table2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";
import { pathForLegacyPath } from "@/lib/sitePages";
import PathwayCard from "@/components/cards/PathwayCard";
import ContentHeading from "@/components/ui/ContentHeading";

/* ════════════════════════════════════════════════════════════════════
   Shared markdown machinery for approved Markdown content pages:
   inline renderer, block parser, block renderer, brand rebranding and
   source-URL localization. Used by ContentPage and the shared hero.
   ════════════════════════════════════════════════════════════════════ */

const SITE_HOSTS = ["commonwealthmigration.ca", "www.commonwealthmigration.ca"];

export function rebrand(text) {
  return text ? String(text) : text;
}

/** Convert a source-site URL to a local relative URL when possible. */
export function localizeUrl(url) {
  try {
    const u = new URL(url, site.url || "https://commonwealthmigration.ca");
    if (SITE_HOSTS.includes(u.hostname)) {
      return `${pathForLegacyPath(u.pathname)}${u.search}${u.hash}`;
    }
  } catch {
    /* keep as-is */
  }
  if (typeof url === "string" && url.startsWith("/")) return pathForLegacyPath(url);
  return url;
}

function SmartLink({ href, children }) {
  const local = localizeUrl(href);
  const external = local !== href || /^https?:\/\//.test(local);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-2 hover:text-accent-dark transition-colors">
        {children}
      </a>
    );
  }
  return (
    <Link href={local} className="font-medium text-primary underline underline-offset-2 hover:text-accent-dark transition-colors">
      {children}
    </Link>
  );
}

export function renderInline(text) {
  const nodes = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m;
  let key = 0;
  text = rebrand(text);
  while ((m = regex.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) {
      nodes.push(<strong key={key++} className="text-[var(--ink)]">{tok.slice(2, -2)}</strong>);
    } else if (tok.startsWith("*")) {
      nodes.push(<em key={key++}>{tok.slice(1, -1)}</em>);
    } else if (tok.startsWith("`")) {
      nodes.push(
        <code key={key++} className="rounded bg-surface px-1.5 py-0.5 text-[0.85em] font-semibold text-accent-dark">
          {tok.slice(1, -1)}
        </code>
      );
    } else {
      const mm = tok.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      nodes.push(
        <SmartLink key={key++} href={mm?.[2] || ""}>
          {mm?.[1] || tok}
        </SmartLink>
      );
    }
    last = m.index + tok.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/* ════════════════════════════════════════════════════════════════════
   Block parser — plain markdown → block objects
   ════════════════════════════════════════════════════════════════════ */

export function parseBlocks(md) {
  const lines = md.split("\n");
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();
    if (!line) {
      i++;
      continue;
    }

    // Heading
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      blocks.push({ type: "heading", level: h[1].length, text: h[2] });
      i++;
      continue;
    }

    // Horizontal rule
    if (/^-{3,}$/.test(line)) {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }

    // Decorative divider "---- label ----"
    const sep = line.match(/^-{2,}\s*(.+?)\s*-{2,}$/);
    if (sep && sep[1]) {
      blocks.push({ type: "divider", text: sep[1] });
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith(">")) {
      const linesQ = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        linesQ.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ type: "quote", text: linesQ.join(" ").trim() });
      continue;
    }

    // Table
    if (line.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const cells = lines[i]
          .trim()
          .replace(/^\||\|$/g, "")
          .split("|")
          .map((c) => c.trim());
        rows.push(cells);
        i++;
      }
      blocks.push({ type: "table", rows });
      continue;
    }

    // Unordered list
    if (/^[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length) {
        const t = lines[i].trim();
        const item = t.match(/^[-*]\s+(.*)$/);
        if (item) {
          items.push(item[1]);
          i++;
        } else {
          break;
        }
      }
      blocks.push({ type: "list", ordered: false, items });
      continue;
    }

    // Ordered list
    if (/^\d+[.)]\s+/.test(line)) {
      const items = [];
      while (i < lines.length) {
        const t = lines[i].trim();
        const item = t.match(/^\d+[.)]\s+(.*)$/);
        if (item) {
          items.push(item[1]);
          i++;
        } else {
          break;
        }
      }
      blocks.push({ type: "list", ordered: true, items });
      continue;
    }

    // Paragraph — collect until a blank line or another block start
    const para = [];
    while (i < lines.length) {
      const t = lines[i].trim();
      if (!t) break;
      if (
        /^(#{1,6})\s/.test(t) ||
        /^-{3,}$/.test(t) ||
        t.startsWith(">") ||
        t.startsWith("|") ||
        /^[-*]\s+/.test(t) ||
        /^\d+[.)]\s+/.test(t)
      ) {
        break;
      }
      para.push(t);
      i++;
    }
    blocks.push({ type: "paragraph", text: para.join(" ") });
  }

  return blocks;
}

/* ════════════════════════════════════════════════════════════════════
   Block renderer — block objects → React elements
   ════════════════════════════════════════════════════════════════════ */

const REFUSAL_CARD_DESTINATIONS = [
  [/visitor visa|trv/i, "/immigration/visitor-visa"],
  [/study permit/i, "/immigration/study-permit"],
  [/work permit/i, "/immigration/work-permit"],
  [/spousal sponsorship/i, "/immigration/spousal-sponsorship"],
  [/express entry|\bpr\b/i, "/immigration/express-entry"],
  [/super visa/i, "/immigration/super-visa"],
  [/pgwp/i, "/immigration/pgwp"],
  [/lmia/i, "/immigration/lmia"],
];

function refusalCardHref(title) {
  const destination = REFUSAL_CARD_DESTINATIONS.find(([pattern]) => pattern.test(title))?.[1] || null;
  return destination ? pathForLegacyPath(destination) : null;
}

const PREMIUM_TOP_LINE = "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[2] before:h-[3px] before:origin-left before:scale-x-[.28] before:bg-[linear-gradient(90deg,var(--template-primary),var(--cmg-template-primary-highlight))] before:transition-transform before:duration-[450ms] before:ease-[cubic-bezier(.2,.8,.2,1)] before:content-[''] hover:before:scale-x-100";
const PREMIUM_DATA_SURFACE = "relative rounded-[18px] border border-[color-mix(in_srgb,var(--template-primary)_58%,var(--cmg-template-deep-surface))] bg-[var(--cmg-template-deep-surface)] text-[var(--template-on-primary)] shadow-[0_24px_60px_color-mix(in_srgb,var(--cmg-template-deep-surface)_34%,transparent),0_4px_18px_color-mix(in_srgb,var(--template-primary)_12%,transparent)]";
const PREMIUM_DATA_MUTED = "text-[color-mix(in_srgb,var(--template-on-primary)_74%,transparent)]";
const PREMIUM_DATA_TEXT = "text-[var(--template-on-primary)]";
const PREMIUM_BADGE = "inline-flex max-w-full items-center justify-center rounded-full border px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.1em] leading-none text-[var(--template-on-primary)] shadow-[0_6px_16px_color-mix(in_srgb,var(--template-primary)_18%,transparent)]";

function getTablePresentation(header = []) {
  const joined = header.join(" ").toLowerCase();
  if (/program|work experience/.test(joined)) return { label: "Program comparison", detail: "Pathway requirements" };
  if (/category|typical crs|who it favours/.test(joined)) return { label: "CRS category overview", detail: "Draw focus and score windows" };
  if (/factor|max points|points/.test(joined)) return { label: "CRS points breakdown", detail: "Maximum available points" };
  if (/step|what's required|requirement/.test(joined)) return { label: "Application timeline", detail: "Sequence and requirements" };
  if (/fee|cost|amount/.test(joined)) return { label: "Fees and costs", detail: "Government and filing amounts" };
  return { label: "Technical reference", detail: "Eligibility and pathway detail" };
}

function getTableBadgeVariant(value) {
  const normalized = String(value || "").trim();
  if (!normalized || normalized.length > 30) return null;
  if (/^(active|dormant|inactive|new(?: for \d{4})?)$/i.test(normalized)) return "status";
  if (/^not required$/i.test(normalized)) return "muted";
  if (/^(?:~?\+?\d[\d,+]*(?:[–-]\d[\d,+]*)?\+?|(?:CLB|NCLC|TEER)\s+[\w\d/+–-]+|CAD\s+\$[\d,]+)/i.test(normalized)) return "metric";
  return null;
}

function renderTableCell(cell) {
  const variant = getTableBadgeVariant(cell);
  if (!variant) return renderInline(cell || "");
  const badgeClass = variant === "status"
    ? "border-[color-mix(in_srgb,var(--template-on-primary)_25%,transparent)] bg-[var(--template-primary)]"
    : variant === "muted"
      ? "border-[color-mix(in_srgb,var(--template-on-primary)_22%,transparent)] bg-[color-mix(in_srgb,var(--template-on-primary)_11%,var(--cmg-template-deep-surface))]"
      : "border-[color-mix(in_srgb,var(--template-primary)_55%,transparent)] bg-[color-mix(in_srgb,var(--template-primary)_20%,var(--cmg-template-deep-surface))]";
  return <span className={cn(PREMIUM_BADGE, badgeClass)}>{renderInline(cell || "")}</span>;
}

function renderTable(rows) {
  const hasSeparator = rows.length > 1 && rows[1].every((c) => /^:?-{2,}:?$/.test(c));
  const isStatStrip = rows.length === 1 && rows[0].length >= 3;
  const header = hasSeparator ? rows[0] : rows.length > 1 ? rows[0] : null;
  const body = hasSeparator ? rows.slice(2) : rows.length > 1 ? rows.slice(1) : rows;
  const colCount = Math.max(...rows.map((r) => r.length));

  if (isStatStrip) {
    return (
      <div className="my-8" aria-label="At a glance">
        <div className="mb-3 flex items-center justify-between gap-4 max-[520px]:items-start max-[520px]:flex-col">
          <p className="m-0 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.16em] text-[var(--template-primary)]"><Table2 className="h-4 w-4" aria-hidden="true" />Key figures at a glance</p>
          <span className={cn("text-[11px] font-bold", PREMIUM_DATA_MUTED)}>Source sequence preserved</span>
        </div>
        <div className="grid grid-cols-4 gap-3 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1">
          {rows[0].map((cell, index) => {
            const words = cell.split(/\s+/);
            const valueWords = words.length > 1 && /^[A-Za-z]+$/.test(words[0]) && /^\d/.test(words[1]) ? 2 : 1;
            const value = words.slice(0, valueWords).join(" ");
            return (
              <div key={`${cell}-${index}`} className={cn("group overflow-hidden px-4 py-5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-[var(--template-primary)]", PREMIUM_DATA_SURFACE, PREMIUM_TOP_LINE)}>
                <strong className="block text-[clamp(21px,2.2vw,30px)] font-semibold leading-none tracking-[-.03em] text-[var(--template-primary)]">{value}</strong>
                <span className={cn("mt-2 block text-[12px] font-bold leading-[1.45]", PREMIUM_DATA_MUTED)}>{words.slice(valueWords).join(" ")}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  const isStackedTabs = !header && colCount === 1 && body.length >= 4;

  if (isStackedTabs) {
    const hasStackedHeader = /application type/i.test(body[0]?.[0] || "");
    const label = hasStackedHeader ? body[0]?.[0] : "Refusal type";
    const descriptionLabel = hasStackedHeader ? body[1]?.[0] : "Common concern";
    const cardRows = hasStackedHeader ? body.slice(2) : body;
    const cards = [];

    for (let i = 0; i < cardRows.length; i += 2) {
      const title = cardRows[i]?.[0];
      if (!title) continue;
      cards.push({ title, description: cardRows[i + 1]?.[0] || "", href: refusalCardHref(title) });
    }

    return (
      <div className={cn("content-table-cards my-8 overflow-hidden rounded-[16px]", PREMIUM_DATA_SURFACE, PREMIUM_TOP_LINE)} role="list" aria-label={`${label} and ${descriptionLabel}`}>
        <div className="content-table-cards__intro">
          <div>
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] uppercase !text-[var(--primary)]">Case patterns at a glance</p>
            <p className="mt-4 mb-[14px] text-[15px] leading-[1.8] text-[var(--muted)]">
              The reason on the letter is only the starting point. The right response connects the concern to stronger evidence.
            </p>
          </div>
          <div className="content-table-cards__labels" aria-hidden>
            <span>{label}</span>
            <span>{descriptionLabel}</span>
          </div>
        </div>

        <div className="content-table-cards__grid">
          {cards.map((card, index) => (
            <PathwayCard
              key={`${card.title}-${index}`}
              role="listitem"
              href={card.href}
              ariaLabel={card.title}
              label={renderInline(card.title)}
              eyebrow={label}
              description={renderInline(card.description)}
              index={index}
              actionLabel={card.href ? "Explore the guide" : null}
              className="pathway-card--case"
            />
          ))}
        </div>
      </div>
    );
  }

  const presentation = getTablePresentation(header || []);
  return (
      <div className={cn("my-7 max-h-[640px] overflow-auto max-[620px]:max-h-[560px] [isolation:isolate]", PREMIUM_DATA_SURFACE, PREMIUM_TOP_LINE)}>
        <div className="flex items-center justify-between gap-4 border-b border-[color-mix(in_srgb,var(--template-on-primary)_16%,transparent)] bg-[linear-gradient(90deg,color-mix(in_srgb,var(--template-primary)_17%,var(--cmg-template-deep-surface)),var(--cmg-template-deep-surface))] px-4 py-3 max-[620px]:items-start max-[620px]:flex-col max-[620px]:gap-1">
          <div className="flex items-center gap-2">
            <Table2 className="h-4 w-4 text-[var(--template-primary)]" aria-hidden="true" />
            <div>
              <p className="m-0 text-[11px] font-extrabold uppercase tracking-[.15em] text-[var(--template-on-primary)]">{presentation.label}</p>
              <p className={cn("m-0 mt-1 text-[11px] font-semibold", PREMIUM_DATA_MUTED)}>{presentation.detail}</p>
            </div>
          </div>
          <span className="rounded-full border border-[color-mix(in_srgb,var(--template-primary)_35%,transparent)] bg-[color-mix(in_srgb,var(--template-primary)_10%,transparent)] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.1em] text-[var(--template-primary)]">Official data</span>
        </div>
        <table className="w-full min-w-[480px] border-collapse text-center text-[14.5px]">
          <caption className="sr-only">{presentation.label}</caption>
        {header && (
          <thead className="bg-[linear-gradient(135deg,var(--template-primary),var(--template-accent))] shadow-[0_10px_22px_color-mix(in_srgb,var(--cmg-template-deep-surface)_42%,transparent)] [isolation:isolate]">
            <tr className="border-b border-[color-mix(in_srgb,var(--template-on-primary)_34%,transparent)] bg-[linear-gradient(135deg,var(--template-primary),var(--template-accent))]">
              {header.map((cell, j) => (
                <th key={j} className="px-4 py-4 text-center text-[12px] font-extrabold uppercase tracking-[.12em] text-[var(--template-on-primary)] [&_strong]:!text-[var(--template-on-primary)]">
                  {renderInline(cell)}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {body.map((row, i) => (
            <tr
              key={i}
              className={cn(
                "group border-t border-[color-mix(in_srgb,var(--template-on-primary)_16%,transparent)] transition-[background-color,border-color,box-shadow] duration-[280ms] hover:border-t-[var(--template-primary)] hover:bg-[linear-gradient(90deg,color-mix(in_srgb,var(--template-primary)_36%,var(--cmg-template-deep-surface)),color-mix(in_srgb,var(--template-accent)_24%,var(--cmg-template-deep-surface)))] hover:shadow-[inset_4px_0_0_var(--template-primary)]",
                i % 2 === 1 && "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--template-accent)_15%,var(--cmg-template-deep-surface)),color-mix(in_srgb,var(--template-primary)_5%,var(--cmg-template-deep-surface)))]"
              )}
            >
              {Array.from({ length: colCount }).map((_, j) => (
                <td key={j} className={cn("px-4 py-3 text-center align-top [&_strong]:!text-[var(--template-on-primary)] [&_a]:!text-[var(--cmg-template-primary-highlight)]", PREMIUM_DATA_TEXT, j === 0 && "border-l-2 border-transparent font-semibold transition-[border-color] duration-[280ms] group-hover:border-l-[var(--template-primary)]")}>
                  {renderTableCell(row[j] || "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between gap-4 border-t border-[color-mix(in_srgb,var(--template-on-primary)_13%,transparent)] px-4 py-3 max-[620px]:items-start max-[620px]:flex-col max-[620px]:gap-1">
        <span className={cn("text-[11px] font-semibold", PREMIUM_DATA_MUTED)}>Presented in the supplied source sequence</span>
        <span className="text-[11px] font-extrabold uppercase tracking-[.1em] text-[var(--template-primary)]">Reviewed 2026</span>
      </div>
      <div className="hidden items-center justify-center gap-2 border-t border-[color-mix(in_srgb,var(--template-primary)_22%,transparent)] bg-[color-mix(in_srgb,var(--template-primary)_7%,var(--cmg-template-deep-surface))] px-4 py-2.5 text-[11px] font-bold text-[var(--template-primary)] max-[620px]:flex">
        Swipe horizontally to explore all columns <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </div>
    </div>
  );
}

function parseRelatedPageItem(item) {
  const match = String(item || "").match(/^(.*?)\s+→\s+(\/\S+)$/);
  if (!match) return null;
  return { label: match[1].trim(), href: localizeUrl(match[2].trim()) };
}

export function RelatedPagesList({ items = [], ordered = true }) {
  const List = ordered ? "ol" : "ul";
  return (
    <List className="related-pages-list mt-5 list-none overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[var(--shadow-soft)]">
      {items.map((item, index) => {
        const relatedPage = parseRelatedPageItem(item);
        return (
          <li key={`${item}-${index}`} className="group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-[14px] border border-transparent px-3 py-3.5 transition-[background,border-color,transform] duration-200 ease-[ease] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:origin-left before:scale-x-[.18] before:bg-[linear-gradient(90deg,var(--primary),var(--accent))] before:transition-transform before:duration-[350ms] before:ease-[cubic-bezier(.2,.8,.2,1)] before:content-[''] hover:-translate-y-px hover:border-[color-mix(in_srgb,var(--primary)_22%,var(--border))] hover:bg-[color-mix(in_srgb,var(--primary)_6%,var(--surface))] hover:before:scale-x-100">
            <span aria-hidden="true" className="grid size-8 flex-none place-items-center rounded-full bg-[color-mix(in_srgb,var(--primary)_11%,transparent)] text-[var(--primary)] text-[11px] font-extrabold leading-none">
              {String(index + 1).padStart(2, "0")}
            </span>
            {relatedPage ? (
              <Link href={relatedPage.href} className="flex min-h-11 min-w-0 flex-1 items-center justify-between gap-3 text-[14px] font-bold leading-[1.45] text-[var(--ink)] transition-colors duration-200 group-hover:text-[var(--primary)]">
                <span className="min-w-0">{renderInline(relatedPage.label)}</span>
                <ArrowRight className="size-4 flex-none text-[var(--muted)] transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]" aria-hidden="true" />
              </Link>
            ) : (
              <span className="min-w-0 flex-1 text-[14px] leading-[1.45] text-[var(--muted)]">{renderInline(item)}</span>
            )}
          </li>
        );
      })}
    </List>
  );
}

export function Block({ block, dark = false, lead = false }) {
  switch (block.type) {
    case "heading":
      return (
        <ContentHeading level={block.level} className={dark ? "text-white" : undefined}>
          {renderInline(block.text)}
        </ContentHeading>
      );
    case "paragraph":
      if (lead && !dark) {
        return (
              <p className="mt-6 rounded-xl border-l-4 border-primary bg-surface px-5 py-4 text-[17px] leading-relaxed text-navy/95 shadow-card">
            {renderInline(block.text)}
          </p>
        );
      }
      return (
        <p className={dark ? "!mt-4 !text-[15.5px] !leading-relaxed !text-white/85" : "!mt-4 !text-[15px] !leading-[1.8] !text-[var(--muted)]"}>
          {renderInline(block.text)}
        </p>
      );
    case "faq":
      return (
        <details className="group my-3 overflow-hidden rounded-[16px] border border-[var(--border)] bg-[var(--surface)] px-5 transition-[border-color,box-shadow] duration-200 open:border-[var(--primary)] open:shadow-[var(--shadow-soft)]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[14px] font-extrabold leading-[1.4] text-[var(--ink)] marker:hidden">
            {renderInline(block.question)}
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[color-mix(in_srgb,var(--primary)_10%,transparent)] text-[var(--primary)] transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="!m-0 !pb-5 !pr-10 !text-[14px] !leading-[1.75] !text-[var(--muted)]">{renderInline(block.answer)}</p>
        </details>
      );
    case "legalText":
      return (
        <div className="my-6 whitespace-pre-line rounded-[18px] border border-[var(--border)] bg-[var(--surface)] px-5 py-6 text-[14px] leading-[1.85] text-[var(--muted)] shadow-[var(--shadow-soft)]">
          {block.text}
        </div>
      );
    case "list":
      if (block.ordered) {
        return (
          <ol className={`content-list-panel mt-5 list-decimal space-y-2.5 p-[20px_24px] border border-[var(--border)] rounded-[16px] bg-[var(--surface)] text-[15px] leading-[1.8] text-[var(--muted)] marker:font-bold ${dark ? "marker:text-accent-soft" : "marker:text-primary"}`}>
            {block.items.map((item, i) => (
              <li key={i} className="pl-1">
                {renderInline(item)}
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul className={`content-list-panel mt-5 space-y-3 p-[20px_24px] border border-[var(--border)] rounded-[16px] bg-[var(--surface)] text-[15px] leading-[1.8] text-[var(--muted)]`}>
          {block.items.map((item, i) => (
            <li key={i} className="relative pl-6">
              <span aria-hidden className={`absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full ${dark ? "bg-accent-soft" : "bg-accent"}`} />
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    case "table":
      return renderTable(block.rows);
    case "quote":
      return (
        <blockquote
          className={
              dark
              ? "my-6 rounded-r-xl border-l-4 border-accent-soft bg-white/10 px-5 py-4 text-[15px] italic leading-relaxed text-white/90"
              : "my-7 rounded-r-2xl border-l-4 border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_7%,var(--surface))] px-5 py-5 text-[15px] italic leading-relaxed text-[var(--ink)] shadow-card"
          }
        >
          {renderInline(block.text)}
        </blockquote>
      );
    case "divider":
      return (
        <div className="my-8 flex items-center gap-4" role="presentation">
          <span className={`h-px flex-1 ${dark ? "bg-white/25" : "bg-line"}`} />
          <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${dark ? "text-white/60" : "text-muted"}`}>{block.text}</span>
          <span className={`h-px flex-1 ${dark ? "bg-white/25" : "bg-line"}`} />
        </div>
      );
    case "hr":
      default:
      return <hr className={dark ? "my-8 border-white/20" : "premium-divider my-10"} />;
  }
}
