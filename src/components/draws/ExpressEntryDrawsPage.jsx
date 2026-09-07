"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, CheckCircle2, ExternalLink, Filter, Gauge, Users } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/config/site";
import { HERO_SLIDES } from "@/lib/heroSlides";
import HeroCarousel from "@/components/home/HeroCarousel";
import HeroProofCardCarousel from "@/components/home/HeroProofCardCarousel";
import TemplateMotion from "@/components/home/TemplateMotion";
import FaqSection from "@/components/sections/FaqSection";
import { getPageFaqs } from "@/lib/faqs";
import ExpressEntryDrawsTable from "./ExpressEntryDrawsTable";

const OFFICIAL_PAGE = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html";

function StatCard({ icon: Icon, label, value, detail }) {
  return <article className="rounded-[18px] border border-[var(--template-border)] bg-[color-mix(in_srgb,var(--template-surface)_85%,transparent)] p-5 shadow-[var(--shadow-soft)]"><div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.12em] text-[var(--template-muted)]"><Icon className="text-[var(--template-primary)]" width={16} height={16} aria-hidden="true" />{label}</div><p className="!m-[13px_0_2px] !text-[28px] !font-extrabold !leading-none !tracking-[-.04em] !text-[var(--template-ink)]">{value}</p><p className="!m-0 !text-[12px] !leading-[1.5] !text-[var(--template-muted)]">{detail}</p></article>;
}

export default function ExpressEntryDrawsPage({ page }) {
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
    <div className="cmg-template-home cmg-template-service min-h-full bg-[var(--bg)] text-[var(--ink)] [--container:min(1220px,calc(100%-40px))] max-[1120px]:[--container:min(1220px,calc(100%-32px))] max-[620px]:[--container:calc(100%-28px)]">
      <TemplateMotion />
      <section className="hero group/hero relative isolate before:absolute before:inset-0 before:z-[-2] before:pointer-events-none before:content-[''] after:absolute after:z-[-2] after:pointer-events-none after:content-[''] before:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--cmg-template-deep-surface)_2%,transparent),color-mix(in_srgb,var(--bg)_52%,transparent)_145%)] after:top-[-180px] after:right-[-170px] after:h-[520px] after:w-[520px] after:rounded-full after:bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] after:blur-[80px] w-full overflow-hidden bg-transparent pb-20 min-[881px]:min-h-[max(880px,100svh)] max-[620px]:pb-12">
        <div className="ambient a absolute z-[-1] size-[360px] rounded-full bg-[var(--primary)] opacity-[.16] blur-[50px] animate-[cmg-template-ambient_10s_ease-in-out_infinite_alternate] top-[2%] right-[15%]" aria-hidden="true" />
        <div className="ambient b absolute z-[-1] size-[360px] rounded-full bg-[var(--accent)] opacity-[.16] blur-[50px] animate-[cmg-template-ambient_10s_ease-in-out_infinite_alternate] bottom-[4%] left-[-8%] [animation-delay:-4s]" aria-hidden="true" />
        <HeroCarousel slides={HERO_SLIDES} className="hero-background-carousel z-[-3] w-full min-h-full rounded-[30px] border border-[var(--border)] bg-[var(--secondary)] shadow-[var(--shadow)]" />
        <div className="hero-layout relative z-[1] grid grid-cols-[minmax(0,1fr)_minmax(420px,.86fr)] max-[1120px]:grid-cols-[minmax(0,1fr)_minmax(360px,.85fr)] max-[880px]:grid-cols-1 items-center max-[880px]:items-start gap-[66px] max-[1120px]:gap-[38px] max-[880px]:gap-[44px] w-[min(1280px,calc(100%-48px))] max-[620px]:w-[var(--container)] mx-auto">
          <div className="hero-copy relative z-[2] min-w-0 max-[880px]:w-full text-[var(--template-on-primary)] reveal in">
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-[''] [text-shadow:0_1px_8px_color-mix(in_srgb,var(--cmg-template-deep-surface)_28%,transparent)]">Official Express Entry tracker</p>
            <h1 id="draws-hero-title" className="max-w-[790px] max-[1120px]:!text-[clamp(38px,4.6vw,52px)] max-[620px]:!text-[clamp(34px,10.5vw,44px)] max-[1023.98px]:text-center max-[1023.98px]:mx-auto text-[clamp(42px,2.2rem+3.4vw,66px)] !font-semibold !leading-[1.04] !tracking-[-.03em] text-[var(--template-on-primary)] [text-shadow:0_2px_18px_color-mix(in_srgb,var(--cmg-template-deep-surface)_42%,transparent),0_1px_2px_color-mix(in_srgb,var(--cmg-template-deep-surface)_55%,transparent)]">Express Entry draws, clearly explained</h1>
            <p className="lead max-w-[710px] max-[1023.98px]:text-center max-[1023.98px]:mx-auto !mt-6 text-[color-mix(in_srgb,var(--template-on-primary)_82%,transparent)] [text-shadow:0_1px_10px_color-mix(in_srgb,var(--cmg-template-deep-surface)_48%,transparent)] text-[17px] leading-[1.8] max-[620px]:text-[15px]">Review every invitation round published by Immigration, Refugees and Citizenship Canada, with the CRS score, invitation count, draw type and tie-break cutoff in one place.</p>
            <div className="hero-actions flex flex-wrap gap-3 mt-[30px] max-[768px]:!flex max-[768px]:!flex-col max-[768px]:!items-center max-[768px]:!gap-3 max-[768px]:!mt-6">
              <Link href="#draw-history" className="btn btn-primary max-[768px]:!w-full max-[768px]:!min-h-[52px] max-[768px]:!px-[22px] max-[768px]:!py-[14px] max-[768px]:!rounded-[14px] max-[768px]:!text-[14px]">View draw history <ArrowRight width={18} height={18} aria-hidden="true" /></Link>
              <Link href={site.ctas.primary.href} className="btn btn-secondary max-[768px]:!w-auto max-[768px]:!min-h-10 max-[768px]:!px-[18px] max-[768px]:!py-[9px] max-[768px]:!rounded-full max-[768px]:!text-[12.5px]">Book a consultation <ArrowUpRight width={18} height={18} aria-hidden="true" /></Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-bold text-[color-mix(in_srgb,var(--template-on-primary)_72%,transparent)] max-[1023.98px]:justify-center"><span className="inline-flex items-center gap-2"><CheckCircle2 className="text-[var(--cmg-template-primary-bright)]" width={16} height={16} aria-hidden="true" />Official Canada.ca feed</span><a href={OFFICIAL_PAGE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[color-mix(in_srgb,var(--template-on-primary)_84%,transparent)] underline underline-offset-4">Open source page <ExternalLink width={14} height={14} aria-hidden="true" /></a></div>
          </div>
          <div className="hero-visual self-start relative w-full min-h-[530px] max-[880px]:static max-[880px]:min-h-0 max-[880px]:transform-none max-[880px]:mt-[26px] reveal in">
            <HeroProofCardCarousel />
          </div>
        </div>
      </section>

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
              <ExpressEntryDrawsTable draws={visibleDraws} />
              <div className="mt-12 max-w-[820px] border-t border-[var(--template-border)] pt-8">
                <h2 className="!m-0 !text-[clamp(26px,1.5rem+1.3vw,36px)] !leading-[1.1] !text-[var(--template-ink)]">How to use Express Entry draw results</h2>
                <p className="!m-[12px_0_0] !text-[14px] !leading-[1.75] !text-[var(--template-muted)]">The latest CRS score and invitation count show what happened in a specific IRCC round; they do not guarantee the next cutoff or an invitation. Compare the draw type with your own Express Entry program eligibility, CRS profile, category eligibility and tie-break position, then confirm the current requirements on Canada.ca.</p>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="border-t border-[var(--template-border)] bg-[var(--template-surface-alt)] py-14 max-[620px]:py-11">
        <div className="mx-auto flex w-[var(--container)] max-w-[1220px] items-center justify-between gap-6 max-[720px]:items-start max-[720px]:flex-col"><div><p className="!m-0 !text-[11px] !font-extrabold !uppercase !tracking-[.14em] !text-[var(--template-primary)]">Need help reading your score?</p><p className="!m-[7px_0_0] !text-[14px] !text-[var(--template-muted)]">Use the draw history as context, then check what your own CRS profile can reach.</p></div><Link href="/tools/crs-calculator-canada" className="inline-flex min-h-11 items-center gap-2 rounded-[12px] bg-[var(--template-primary)] px-5 py-3 text-[13px] font-extrabold text-[var(--template-on-primary)] transition-transform duration-200 hover:-translate-y-0.5">Check your CRS <ArrowRight width={17} height={17} aria-hidden="true" /></Link></div>
      </section>

      <FaqSection faqs={getPageFaqs(page)} />
    </div>
  );
}
