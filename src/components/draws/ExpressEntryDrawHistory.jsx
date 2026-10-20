"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Filter, Gauge, Users } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import TableSeoIntro from "@/components/sections/TableSeoIntro";
import ExpressEntryDrawsTable from "./ExpressEntryDrawsTable";

const OFFICIAL_PAGE = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html";

function StatCard({ icon: Icon, label, value, detail }) {
  return <article className="rounded-[18px] border border-[var(--template-border)] bg-[color-mix(in_srgb,var(--template-surface)_85%,transparent)] p-5 shadow-[var(--shadow-soft)]"><div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.12em] text-[var(--template-muted)]"><Icon className="text-[var(--template-primary)]" width={16} height={16} aria-hidden="true" />{label}</div><p className="!m-[13px_0_2px] !text-[28px] !font-extrabold !leading-none !tracking-[-.04em] !text-[var(--template-ink)]">{value}</p><p className="!m-0 !text-[12px] !leading-[1.5] !text-[var(--template-muted)]">{detail}</p></article>;
}

export default function ExpressEntryDrawHistory({ page }) {
  const [draws, setDraws] = useState([]);
  const [fetchedAt, setFetchedAt] = useState("");
  const [status, setStatus] = useState("loading");
  const [filter, setFilter] = useState("All draw types");

  useEffect(() => {
    let cancelled = false;
    fetch("/api/express-entry-draws")
      .then((response) => {
        if (!response.ok) throw new Error("Draw feed unavailable");
        return response.json();
      })
      .then((payload) => {
        if (cancelled) return;
        setDraws(payload.draws || []);
        setFetchedAt(payload.fetchedAt || "");
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => { cancelled = true; };
  }, []);

  const filters = useMemo(() => ["All draw types", ...new Set(draws.map((draw) => draw.name))], [draws]);
  const visibleDraws = filter === "All draw types" ? draws : draws.filter((draw) => draw.name === filter);
  const latest = draws[0];
  const lowestCrs = draws.length ? Math.min(...draws.map((draw) => Number(draw.crs)).filter(Number.isFinite)) : 0;

  return (
    <section id="draw-history" className="relative z-[1] py-[76px] max-[880px]:py-14 max-[620px]:py-11">
      <div className="mx-auto w-[var(--container)] max-w-[1220px]">
        {status === "loading" && <div className="rounded-[18px] border border-[var(--template-border)] bg-[var(--template-surface)] p-6 text-[var(--template-muted)]" role="status">Loading the latest official rounds…</div>}
        {status === "error" && <div className="rounded-[18px] border border-[color-mix(in_srgb,var(--template-primary)_34%,var(--template-border))] bg-[color-mix(in_srgb,var(--template-primary)_7%,var(--template-surface))] p-6 text-[var(--template-muted)]" role="alert">The official draw feed is temporarily unavailable. Please <a className="font-bold text-[var(--template-primary)] underline underline-offset-4" href={OFFICIAL_PAGE} target="_blank" rel="noopener noreferrer">view the source on Canada.ca</a>.</div>}
        {status === "ready" && latest && (
          <>
            <div className="grid grid-cols-3 gap-4 max-[720px]:grid-cols-1">
              <StatCard icon={CalendarDays} label="Latest round" value={`#${latest.number}`} detail={`${latest.name} · ${latest.dateFull}`} />
              <StatCard icon={Users} label="Invitations" value={latest.invitations} detail={`Latest round at CRS ${latest.crs}`} />
              <StatCard icon={Gauge} label="Lowest CRS in feed" value={lowestCrs} detail={`${draws.length} official invitation rounds listed`} />
            </div>

            <div className="mt-12 flex flex-wrap items-end justify-between gap-5 border-b border-[var(--template-border)] pb-5">
              <div><p className="eyebrow m-0 !mb-3 flex items-start gap-3 text-[var(--template-primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.15em] uppercase before:w-[28px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">The full record</p><h2 className="!m-0 !text-[clamp(28px,1.6rem+1.7vw,42px)] !leading-[1.08] !text-[var(--template-ink)]">Every round since the feed began</h2><p className="!m-[10px_0_0] !text-[14px] !text-[var(--template-muted)]">Showing {visibleDraws.length} of {draws.length} rounds{fetchedAt ? ` · refreshed ${new Date(fetchedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : ""}.</p></div>
              <label className="flex min-w-[220px] items-center gap-2 rounded-[12px] border border-[var(--template-border)] bg-[var(--template-surface)] px-3 py-2 text-[12px] font-bold text-[var(--template-muted)]"><Filter width={15} height={15} className="flex-none text-[var(--template-primary)]" aria-hidden="true" /><span className="sr-only">Filter by round type</span><select value={filter} onChange={(event) => setFilter(event.target.value)} className="min-h-9 w-full bg-transparent text-[var(--template-ink)] outline-none"><option className="bg-[var(--template-surface)]" value="All draw types">All draw types</option>{filters.slice(1).map((item) => <option className="bg-[var(--template-surface)]" key={item} value={item}>{item}</option>)}</select></label>
            </div>
            <TableSeoIntro
              page={page}
              tableIndex={0}
              block={{ rows: [["Draw", "Date", "Round type", "CRS score", "Invitations", "Tie-break cutoff"]] }}
            />
            <ExpressEntryDrawsTable draws={visibleDraws} />
            <div className="mt-12 max-w-[820px] border-t border-[var(--template-border)] pt-8">
              <h2 className="!m-0 !text-[clamp(26px,1.5rem+1.3vw,36px)] !leading-[1.1] !text-[var(--template-ink)]">How to use Express Entry draw results</h2>
              <p className="!m-[12px_0_0] !text-[14px] !leading-[1.75] !text-[var(--template-muted)]">The latest CRS score and invitation count show what happened in a specific IRCC round; they do not guarantee the next cutoff or an invitation. Compare the draw type with your own Express Entry program eligibility, CRS profile, category eligibility and tie-break position, then confirm the current requirements on Canada.ca.</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
