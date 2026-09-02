"use client";

import Link from "next/link";
import { ArrowUpRight, Check, ExternalLink, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import HeroCardShell from "./HeroCardShell";

const DRAW_PAGE_PATH = "/immigration-draws";

const CATEGORY_DEFINITIONS = [
  {
    label: "Express Entry (general)",
    matches: (draw) => /^general$/i.test(draw.name),
  },
  {
    label: "Category-based (French)",
    matches: (draw) => /french/i.test(draw.name),
  },
  {
    label: "Provincial nominee (PNP)",
    matches: (draw) => /provincial nominee/i.test(draw.name),
  },
];

function latestByCategory(draws) {
  return CATEGORY_DEFINITIONS
    .map((category) => ({ ...category, draw: draws.find(category.matches) }))
    .filter((category) => category.draw);
}

function shortDate(date) {
  if (!date) return "—";
  const parsed = new Date(`${date}T00:00:00`);
  return Number.isNaN(parsed.getTime())
    ? date
    : parsed.toLocaleDateString("en-CA", { month: "short", day: "numeric" });
}

function DrawCardLoading() {
  return (
    <div className="grid gap-3" aria-label="Loading the latest Express Entry draw" role="status">
      <div className="h-4 w-32 animate-pulse rounded-full bg-[color-mix(in_srgb,var(--template-on-primary)_14%,transparent)]" />
      <div className="h-7 w-4/5 animate-pulse rounded-lg bg-[color-mix(in_srgb,var(--template-on-primary)_14%,transparent)]" />
      <div className="h-4 w-3/5 animate-pulse rounded-lg bg-[color-mix(in_srgb,var(--template-on-primary)_10%,transparent)]" />
      <div className="mt-4 grid gap-3 border-y border-[color-mix(in_srgb,var(--template-on-primary)_15%,transparent)] py-5">
        <div className="h-5 w-full animate-pulse rounded-lg bg-[color-mix(in_srgb,var(--template-on-primary)_11%,transparent)]" />
        <div className="h-5 w-4/5 animate-pulse rounded-lg bg-[color-mix(in_srgb,var(--template-on-primary)_11%,transparent)]" />
      </div>
    </div>
  );
}

export default function ExpressEntryDrawCard() {
  const [draw, setDraw] = useState(null);
  const [categoryDraws, setCategoryDraws] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/express-entry-draws")
      .then((response) => {
        if (!response.ok) throw new Error("Draw feed unavailable");
        return response.json();
      })
      .then((payload) => {
        if (!cancelled) {
          const draws = payload.draws || [];
          setDraw(draws[0] || null);
          setCategoryDraws(latestByCategory(draws));
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <HeroCardShell ariaLabel="Latest official Express Entry draw" className="hero-draw-card -translate-y-[50%]">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-[7px] rounded-full border border-[color-mix(in_srgb,var(--template-on-primary)_13%,transparent)] bg-[color-mix(in_srgb,var(--template-on-primary)_9%,transparent)] px-[10px] py-[7px] text-[10px] font-extrabold uppercase leading-[1.5] tracking-[.08em] text-[color-mix(in_srgb,var(--template-on-primary)_92%,transparent)] backdrop-blur-[10px]">
          <ShieldCheck className="text-[var(--cmg-template-primary-bright)]" width={15} height={15} aria-hidden="true" /> Official IRCC data
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[.1em] text-[color-mix(in_srgb,var(--template-on-primary)_54%,transparent)]">Live feed</span>
      </div>

      <h2 className="!mt-4 !max-w-none !text-[clamp(25px,2.2vw,31px)] !leading-[1.15] !tracking-[-0.028em] text-[var(--template-on-primary)] [text-wrap:balance] after:block after:mt-3 after:h-0.5 after:w-9 after:rounded-full after:bg-[linear-gradient(90deg,var(--primary),transparent)] after:content-[''] after:opacity-[.95]">Latest Express Entry draw</h2>
      <p className="!mt-3 !max-w-none !text-[13px] !leading-[1.65] !tracking-[-0.01em] text-[color-mix(in_srgb,var(--template-on-primary)_74%,transparent)]">Federal invitation rounds, refreshed from Canada.ca.</p>

      <div className="mt-4 border-y border-[color-mix(in_srgb,var(--template-on-primary)_15%,transparent)] py-4" aria-live="polite">
        {draw ? (
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div className="min-w-0">
              <p className="!m-0 !text-[12px] !font-bold !leading-[1.35] !tracking-[.08em] !text-[color-mix(in_srgb,var(--template-on-primary)_56%,transparent)] uppercase">Draw #{draw.number}</p>
              <p className="!m-[7px_0_0] !text-[18px] !font-extrabold !leading-[1.2] !tracking-[-.02em] !text-[var(--template-on-primary)]">{draw.name}</p>
              <p className="!m-[5px_0_0] !text-[13px] !leading-[1.4] !text-[color-mix(in_srgb,var(--template-on-primary)_68%,transparent)]">{draw.dateFull}</p>
            </div>
            <div className="text-right">
              <p className="!m-0 !text-[clamp(36px,3.5vw,48px)] !font-extrabold !leading-none !tracking-[-.05em] !text-[var(--template-on-primary)]">CRS {draw.crs}</p>
              <p className="!m-[7px_0_0] !text-[13px] !font-bold !leading-[1.3] !text-[color-mix(in_srgb,var(--template-on-primary)_74%,transparent)]">{draw.invitations} invited</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-start gap-3 text-[13px] leading-[1.55] text-[color-mix(in_srgb,var(--template-on-primary)_76%,transparent)]">
            <ExternalLink className="mt-0.5 flex-none text-[var(--cmg-template-primary-bright)]" width={16} height={16} aria-hidden="true" />
            <span>Latest draw data is temporarily unavailable. <a className="font-bold text-[var(--template-on-primary)] underline underline-offset-4" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html" target="_blank" rel="noopener noreferrer">Check Canada.ca</a>.</span>
          </div>
        ) : <DrawCardLoading />}
      </div>

      {draw && (
        <>
          <div className="mt-4 grid gap-2.5 text-[12px] leading-[1.45] text-[color-mix(in_srgb,var(--template-on-primary)_72%,transparent)]">
            <div className="flex items-start gap-2.5"><Check className="mt-px flex-none text-[var(--cmg-template-primary-bright)]" width={15} height={15} aria-hidden="true" /><span>Tie-break: {draw.cutoff.replace(/ at .*/, "")}</span></div>
            <div className="flex items-start gap-2.5"><Check className="mt-px flex-none text-[var(--cmg-template-primary-bright)]" width={15} height={15} aria-hidden="true" /><span>Eligible programs: {draw.eligiblePrograms}</span></div>
          </div>

          {categoryDraws.length > 0 && (
            <div className="mt-4 border-t border-[color-mix(in_srgb,var(--template-on-primary)_15%,transparent)] pt-3.5">
              <p className="!m-0 !text-[11px] !font-extrabold !leading-[1.4] !tracking-[.12em] !text-[color-mix(in_srgb,var(--template-on-primary)_66%,transparent)] uppercase">Latest by category</p>
              <div className="mt-2.5 grid gap-2">
                {categoryDraws.map(({ label, draw: categoryDraw }) => (
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3" key={label}>
                    <div className="flex min-w-0 items-start gap-2"><Check className="mt-px flex-none text-[var(--cmg-template-primary-bright)]" width={14} height={14} aria-hidden="true" /><span className="truncate text-[12px] leading-[1.35] text-[color-mix(in_srgb,var(--template-on-primary)_82%,transparent)]">{label}</span></div>
                    <span className="whitespace-nowrap text-right text-[12px] font-bold leading-[1.35] text-[color-mix(in_srgb,var(--template-on-primary)_74%,transparent)]">CRS {categoryDraw.crs} <span className="ml-1 text-[color-mix(in_srgb,var(--template-on-primary)_52%,transparent)]">{shortDate(categoryDraw.date)}</span></span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      <div className="mt-auto flex flex-wrap items-baseline justify-between gap-x-3 gap-y-2 border-t border-[color-mix(in_srgb,var(--template-on-primary)_15%,transparent)] pt-[14px] text-[12px] leading-[1.35] text-[color-mix(in_srgb,var(--template-on-primary)_66%,transparent)] max-[480px]:mt-[10px] max-[480px]:pt-2 max-[480px]:text-[10.5px]">
        <span>Commonwealth Migration Group Inc</span>
        <Link href={DRAW_PAGE_PATH} className="inline-flex items-center gap-1.5 font-bold text-[color-mix(in_srgb,var(--template-on-primary)_90%,transparent)] underline decoration-[color-mix(in_srgb,var(--template-on-primary)_34%,transparent)] underline-offset-4 transition-colors hover:text-[var(--cmg-template-primary-highlight)]">View all draws <ArrowUpRight width={16} height={16} aria-hidden="true" /></Link>
      </div>
    </HeroCardShell>
  );
}
