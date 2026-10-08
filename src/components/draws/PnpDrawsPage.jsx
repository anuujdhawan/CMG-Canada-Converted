"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, ChevronDown, Database, ExternalLink, Gauge, MapPin, RefreshCcw, ShieldCheck, Users } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/config/site";
import { HERO_SLIDES } from "@/lib/heroSlides";
import HeroProofCardCarousel from "@/components/home/HeroProofCardCarousel";
import HeroCarousel from "@/components/home/HeroCarousel";
import TemplateMotion from "@/components/home/TemplateMotion";
import FaqSection from "@/components/sections/FaqSection";
import SeoGuideSection from "@/components/sections/SeoGuideSection";
import { getPageFaqs } from "@/lib/faqs";
import PnpDrawsTable from "./PnpDrawsTable";

const ALL_FILTER = "all";
const DRAW_PAGE_SIZE = 15;

const PROVINCE_OPTIONS = [
  { key: ALL_FILTER, label: "All provinces — combined feed" },
  { key: "bc", label: "British Columbia — BC PNP" },
  { key: "alberta", label: "Alberta — AAIP" },
  { key: "saskatchewan", label: "Saskatchewan — SINP" },
  { key: "manitoba", label: "Manitoba — MPNP" },
  { key: "ontario", label: "Ontario — OINP" },
  { key: "novaScotia", label: "Nova Scotia — NSNP" },
  { key: "newBrunswick", label: "New Brunswick — NBPNP" },
  { key: "pei", label: "Prince Edward Island — PEI PNP" },
  { key: "newfoundland", label: "Newfoundland and Labrador — NLPNP" },
  { key: "north", label: "Yukon / Northwest Territories" },
];

function initialFilter(name) {
  if (typeof window === "undefined") return ALL_FILTER;
  return new URLSearchParams(window.location.search).get(name) || ALL_FILTER;
}

function updateFilterUrl(province, stream) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (province === ALL_FILTER) url.searchParams.delete("province");
  else url.searchParams.set("province", province);
  if (stream === ALL_FILTER) url.searchParams.delete("stream");
  else url.searchParams.set("stream", stream);
  window.history.replaceState({}, "", url);
}

function StatCard({ icon: Icon, label, value, detail }) {
  return (
    <article className="rounded-[18px] border border-[var(--template-border)] bg-[color-mix(in_srgb,var(--template-surface)_85%,transparent)] p-5 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.12em] text-[var(--template-muted)]">
        <Icon className="text-[var(--template-primary)]" width={16} height={16} aria-hidden="true" />
        {label}
      </div>
      <p className="!m-[13px_0_2px] !text-[28px] !font-extrabold !leading-none !tracking-[-.04em] !text-[var(--template-ink)]">{value}</p>
      <p className="!m-0 !text-[12px] !leading-[1.5] !text-[var(--template-muted)]">{detail}</p>
    </article>
  );
}

export default function PnpDrawsPage({ page }) {
  const [province, setProvince] = useState(initialFilter("province"));
  const [stream, setStream] = useState(initialFilter("stream"));
  const [feed, setFeed] = useState({ draws: [], programs: [], streams: [] });
  const [status, setStatus] = useState("loading");
  const [visibleCount, setVisibleCount] = useState(DRAW_PAGE_SIZE);

  useEffect(() => {
    const controller = new AbortController();
    const query = new URLSearchParams({ province, stream });

    fetch(`/api/pnp-draws?${query.toString()}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("PNP draw feed unavailable");
        return response.json();
      })
      .then((payload) => {
        setFeed(payload);
        setStream(payload.stream || ALL_FILTER);
        setStatus("ready");
      })
      .catch((error) => {
        if (error.name !== "AbortError") setStatus("error");
      });

    return () => controller.abort();
  }, [province, stream]);

  const latest = feed.draws[0];
  const visibleDraws = feed.draws.slice(0, visibleCount);
  const remainingDraws = Math.max(feed.draws.length - visibleDraws.length, 0);
  const totalInvitations = useMemo(() => feed.draws.reduce((total, draw) => {
    const value = Number(String(draw.invitations).replace(/[^\d]/g, ""));
    return Number.isFinite(value) ? total + value : total;
  }, 0), [feed.draws]);
  const refreshedTime = feed.refreshedAt ? new Date(feed.refreshedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "";

  const handleProvinceChange = (event) => {
    const nextProvince = event.target.value;
    setStatus("loading");
    setProvince(nextProvince);
    setStream(ALL_FILTER);
    setVisibleCount(DRAW_PAGE_SIZE);
    updateFilterUrl(nextProvince, ALL_FILTER);
  };

  const handleStreamChange = (event) => {
    const nextStream = event.target.value;
    setStatus("loading");
    setStream(nextStream);
    setVisibleCount(DRAW_PAGE_SIZE);
    updateFilterUrl(province, nextStream);
  };

  const selectedProvinceLabel = PROVINCE_OPTIONS.find((option) => option.key === province)?.label || "All provinces — combined feed";

  return (
    <div className="cmg-template-home cmg-template-service min-h-full bg-[var(--bg)] text-[var(--ink)] [--container:min(1220px,calc(100%-40px))] max-[1120px]:[--container:min(1220px,calc(100%-32px))] max-[620px]:[--container:calc(100%-28px)]">
      <TemplateMotion />
      <section className="hero group/hero relative isolate before:absolute before:inset-0 before:z-[-2] before:pointer-events-none before:content-[''] after:absolute after:z-[-2] after:pointer-events-none after:content-[''] before:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--cmg-template-deep-surface)_2%,transparent),color-mix(in_srgb,var(--bg)_52%,transparent)_145%)] after:top-[-180px] after:right-[-170px] after:h-[520px] after:w-[520px] after:rounded-full after:bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] after:blur-[80px] w-full overflow-hidden bg-transparent pb-20 min-[881px]:min-h-[max(880px,100svh)] max-[620px]:pb-12">
        <div className="ambient a absolute z-[-1] size-[360px] rounded-full bg-[var(--primary)] opacity-[.16] blur-[50px] animate-[cmg-template-ambient_10s_ease-in-out_infinite_alternate] top-[2%] right-[15%]" aria-hidden="true" />
        <div className="ambient b absolute z-[-1] size-[360px] rounded-full bg-[var(--accent)] opacity-[.16] blur-[50px] animate-[cmg-template-ambient_10s_ease-in-out_infinite_alternate] bottom-[4%] left-[-8%] [animation-delay:-4s]" aria-hidden="true" />
        <HeroCarousel slides={HERO_SLIDES} className="hero-background-carousel z-[-3] w-full min-h-full rounded-[30px] border border-[var(--border)] bg-[var(--secondary)] shadow-[var(--shadow)]" />
        <div className="hero-layout relative z-[1] grid grid-cols-[minmax(0,1fr)_minmax(420px,.86fr)] max-[1120px]:grid-cols-[minmax(0,1fr)_minmax(360px,.85fr)] max-[880px]:grid-cols-1 items-center max-[880px]:items-start gap-[66px] max-[1120px]:gap-[38px] max-[880px]:gap-[44px] w-[min(1280px,calc(100%-48px))] max-[620px]:w-[var(--container)] mx-auto">
          <div className="hero-copy relative z-[2] min-w-0 max-[880px]:w-full text-[var(--template-on-primary)] reveal in">
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-[''] [text-shadow:0_1px_8px_color-mix(in_srgb,var(--cmg-template-deep-surface)_28%,transparent)]">Canadian PNP draw results tracker</p>
            <h1 id="pnp-draws-hero-title" className="max-w-[790px] max-[1120px]:!text-[clamp(36px,4.2vw,48px)] max-[620px]:!text-[clamp(24px,6.7vw,28px)] max-[1023.98px]:text-center max-[1023.98px]:mx-auto text-[clamp(42px,2.2rem+3.4vw,66px)] !font-semibold max-[620px]:!font-extrabold !leading-[1.04] !tracking-[-.03em] text-[var(--template-on-primary)] [text-shadow:0_2px_18px_color-mix(in_srgb,var(--cmg-template-deep-surface)_42%,transparent),0_1px_2px_color-mix(in_srgb,var(--cmg-template-deep-surface)_55%,transparent)]">{page.h1}</h1>
            <p className="lead max-w-[710px] max-[1023.98px]:text-center max-[1023.98px]:mx-auto !mt-6 text-[color-mix(in_srgb,var(--template-on-primary)_82%,transparent)] [text-shadow:0_1px_10px_color-mix(in_srgb,var(--cmg-template-deep-surface)_48%,transparent)] text-[17px] leading-[1.8] max-[620px]:text-[15px]">Compare Canadian Provincial Nominee Program (PNP) invitation rounds by province, stream, date, selection method, published score or cutoff, and invitations—then verify each record with the official provincial source.</p>
            <div className="hero-actions flex flex-wrap gap-3 mt-[30px] max-[768px]:!flex max-[768px]:!flex-col max-[768px]:!items-center max-[768px]:!gap-3 max-[768px]:!mt-6">
              <Link href="#pnp-history" className="btn btn-primary max-[768px]:!w-full max-[768px]:!min-h-[52px] max-[768px]:!px-[22px] max-[768px]:!py-[14px] max-[768px]:!rounded-[14px] max-[768px]:!text-[14px]">Compare PNP draw history <ArrowRight width={18} height={18} aria-hidden="true" /></Link>
              <Link href={site.ctas.primary.href} className="btn btn-secondary max-[768px]:!w-auto max-[768px]:!min-h-10 max-[768px]:!px-[18px] max-[768px]:!py-[9px] max-[768px]:!rounded-full max-[768px]:!text-[12.5px]">Book a consultation <ArrowUpRight width={18} height={18} aria-hidden="true" /></Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-bold text-[color-mix(in_srgb,var(--template-on-primary)_72%,transparent)] max-[1023.98px]:justify-center"><span className="inline-flex items-center gap-2"><ShieldCheck className="text-[var(--cmg-template-primary-bright)]" width={16} height={16} aria-hidden="true" />Official-source PNP history</span><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[color-mix(in_srgb,var(--template-on-primary)_84%,transparent)] underline underline-offset-4">Verify PNP rules on IRCC <ExternalLink width={14} height={14} aria-hidden="true" /></a></div>
          </div>
          <div className="hero-visual self-start relative w-full min-h-[530px] max-[880px]:static max-[880px]:min-h-0 max-[880px]:transform-none max-[880px]:mt-[26px] reveal in">
            <HeroProofCardCarousel ariaLabel="Commonwealth Migration Group highlights" />
          </div>
        </div>
      </section>

      <section id="pnp-history" className="relative z-[1] py-[76px] max-[880px]:py-14 max-[620px]:py-11">
        <div className="mx-auto w-[var(--container)] max-w-[1220px]">
          {status === "error" && <div className="mb-8 rounded-[18px] border border-[color-mix(in_srgb,var(--template-primary)_34%,var(--template-border))] bg-[color-mix(in_srgb,var(--template-primary)_7%,var(--template-surface))] p-6 text-[var(--template-muted)]" role="alert">The provincial draw feed is temporarily unavailable. Please refresh or <a className="font-bold text-[var(--template-primary)] underline underline-offset-4" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html" target="_blank" rel="noopener noreferrer">view the IRCC PNP guide</a>.</div>}

          <div className="grid grid-cols-4 gap-4 max-[920px]:grid-cols-2 max-[560px]:grid-cols-1">
            <StatCard icon={CalendarDays} label="Latest record" value={latest?.date || "—"} detail={latest ? `${latest.abbreviation} · ${latest.stream}` : "Loading the selected feed"} />
            <StatCard icon={Users} label="Invitations in feed" value={totalInvitations || "—"} detail={`${feed.draws.length || 0} draw records available`} />
            <StatCard icon={MapPin} label="Current lens" value={latest?.abbreviation || "PNP"} detail={selectedProvinceLabel} />
            <StatCard icon={Database} label="Feed status" value={status === "loading" ? "Loading" : "Ready"} detail={refreshedTime ? `Snapshot checked ${refreshedTime}` : "Filter to fetch the feed"} />
          </div>

          <div className="mt-12 rounded-[24px] border border-[var(--template-border)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--template-primary)_7%,var(--template-surface)),var(--template-surface-alt))] p-5 shadow-[0_24px_68px_color-mix(in_srgb,var(--cmg-template-deep-surface)_9%,transparent)] sm:p-7">
            <div className="flex flex-col justify-between gap-5 border-b border-[var(--template-border)] pb-6 lg:flex-row lg:items-end">
              <div className="max-w-[690px]">
                <p className="m-0 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.15em] text-[var(--template-primary)]"><RefreshCcw className="h-4 w-4" aria-hidden="true" /> Filter Canadian PNP draws</p>
                <h2 className="!mt-2 !text-[clamp(28px,1.6rem+1.7vw,42px)] !leading-[1.08] !text-[var(--template-ink)]">Search PNP draws by province and stream</h2>
                <p className="!m-[10px_0_0] !text-[14px] !leading-[1.7] !text-[var(--template-muted)]">Select a province or territory and stream to compare Canadian PNP invitation rounds. The table starts with 15 records, then loads every available result without changing your selected filters.</p>
              </div>
              <div className="rounded-[14px] border border-[color-mix(in_srgb,var(--template-primary)_22%,var(--template-border))] bg-[color-mix(in_srgb,var(--template-primary)_7%,var(--template-surface))] px-4 py-3 text-[11px] leading-[1.5] text-[var(--template-muted)] lg:max-w-[240px]">
                <span className="block font-extrabold uppercase tracking-[.1em] text-[var(--template-primary)]">Current PNP view</span>
                <span className="mt-1 block font-bold text-[var(--template-ink)]">{selectedProvinceLabel}</span>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
              <label className="grid gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-[.1em] text-[var(--template-muted)]">Province or territory</span>
                <span className="relative flex items-center rounded-[14px] border border-[var(--template-border)] bg-[var(--template-surface)] px-4 transition-colors focus-within:border-[var(--template-primary)] focus-within:ring-2 focus-within:ring-[color-mix(in_srgb,var(--template-primary)_18%,transparent)]">
                  <MapPin className="mr-3 h-4 w-4 flex-none text-[var(--template-primary)]" aria-hidden="true" />
                  <select aria-label="Province or territory" value={province} onChange={handleProvinceChange} className="h-14 w-full appearance-none bg-transparent pr-6 text-[14px] font-extrabold text-[var(--template-ink)] outline-none">
                    {PROVINCE_OPTIONS.map((option) => <option className="bg-[var(--template-surface)]" key={option.key} value={option.key}>{option.label}</option>)}
                  </select>
                  <span className="pointer-events-none absolute right-4 text-[var(--template-muted)]">⌄</span>
                </span>
              </label>

              <label className="grid gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-[.1em] text-[var(--template-muted)]">PNP stream or selection type</span>
                <span className="relative flex items-center rounded-[14px] border border-[var(--template-border)] bg-[var(--template-surface)] px-4 transition-colors focus-within:border-[var(--template-primary)] focus-within:ring-2 focus-within:ring-[color-mix(in_srgb,var(--template-primary)_18%,transparent)]">
                  <Gauge className="mr-3 h-4 w-4 flex-none text-[var(--template-primary)]" aria-hidden="true" />
                  <select aria-label="PNP stream or selection type" value={stream} onChange={handleStreamChange} className="h-14 w-full appearance-none bg-transparent pr-6 text-[14px] font-extrabold text-[var(--template-ink)] outline-none">
                    {(feed.streams?.length ? feed.streams : [{ key: ALL_FILTER, label: "All streams" }]).map((option) => <option className="bg-[var(--template-surface)]" key={option.key} value={option.key}>{option.label}</option>)}
                  </select>
                  <span className="pointer-events-none absolute right-4 text-[var(--template-muted)]">⌄</span>
                </span>
              </label>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-end justify-between gap-5 border-b border-[var(--template-border)] pb-5">
            <div>
              <p className="eyebrow m-0 !mb-3 flex items-start gap-3 text-[var(--template-primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.15em] uppercase before:w-[28px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">PNP draw results</p>
              <h2 className="!m-0 !text-[clamp(28px,1.6rem+1.7vw,42px)] !leading-[1.08] !text-[var(--template-ink)]">Canadian PNP draw results by province and stream</h2>
              <p className="!m-[10px_0_0] !text-[14px] !text-[var(--template-muted)]">{status === "loading" ? "Loading the selected PNP draw results…" : `Showing ${visibleDraws.length} of ${feed.draws.length} source-linked PNP draw records${refreshedTime ? ` · checked ${refreshedTime}` : ""}.`}</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--template-border)] bg-[var(--template-surface)] px-3 py-2 text-[11px] font-extrabold uppercase tracking-[.08em] text-[var(--template-muted)]"><ShieldCheck className="h-4 w-4 text-[var(--template-primary)]" aria-hidden="true" /> Official provincial source on every record</span>
          </div>

          <div className="mt-6" aria-busy={status === "loading"}>
            {status === "loading" && <div className="rounded-[18px] border border-[var(--template-border)] bg-[var(--template-surface)] p-6 text-[var(--template-muted)]" role="status">Loading Canadian PNP draw results…</div>}
            {status === "ready" && (
              <>
                <PnpDrawsTable draws={visibleDraws} totalCount={feed.draws.length} />
                {remainingDraws > 0 && (
                  <div className="mt-5 flex flex-col items-center gap-2.5">
                    <button type="button" onClick={() => setVisibleCount((current) => Math.min(current + DRAW_PAGE_SIZE, feed.draws.length))} className="group inline-flex min-h-12 items-center gap-3 rounded-[13px] bg-[linear-gradient(135deg,var(--template-primary),var(--template-accent))] px-5 py-3 text-[13px] font-extrabold text-[var(--template-on-primary)] shadow-[0_12px_24px_color-mix(in_srgb,var(--template-primary)_22%,transparent)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_color-mix(in_srgb,var(--template-primary)_30%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--template-primary)]">
                      <span>Load more draws</span>
                      <span className="rounded-full bg-[color-mix(in_srgb,var(--template-on-primary)_18%,transparent)] px-2.5 py-1 text-[11px] font-extrabold">{remainingDraws} remaining</span>
                      <ChevronDown className="transition-transform duration-200 group-hover:translate-y-0.5" width={17} height={17} aria-hidden="true" />
                    </button>
                    <span className="text-[11px] font-semibold text-[var(--template-muted)]">Showing {visibleDraws.length} of {feed.draws.length} PNP draw records</span>
                  </div>
                )}
                {remainingDraws === 0 && feed.draws.length > DRAW_PAGE_SIZE && <p className="mt-5 text-center text-[11px] font-extrabold uppercase tracking-[.1em] text-[var(--template-primary)]">All {feed.draws.length} available records are loaded</p>}
              </>
            )}
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <article className="rounded-[20px] border border-[var(--template-border)] bg-[var(--template-surface)] p-6">
              <p className="m-0 text-[11px] font-extrabold uppercase tracking-[.14em] text-[var(--template-primary)]">How to interpret PNP draw results</p>
              <h2 className="!mt-2 !text-[25px] !leading-[1.12] !text-[var(--template-ink)]">A PNP cutoff is historical context, not a promise</h2>
              <p className="!m-[10px_0_0] !text-[14px] !leading-[1.75] !text-[var(--template-muted)]">Canadian provincial programs do not share one national scoring system. Some publish points, some select by priority or occupation, and some use intake windows. Treat each record as historical context, then confirm the current stream rules and evidence requirements before changing your plan.</p>
            </article>
            <article className="rounded-[20px] bg-[linear-gradient(135deg,var(--template-primary),var(--template-accent))] p-6 text-[var(--template-on-primary)]">
              <p className="m-0 text-[11px] font-extrabold uppercase tracking-[.14em] opacity-80">Need help choosing a PNP stream?</p>
              <h2 className="!mt-2 !text-[25px] !leading-[1.12]">Connect your profile to the right provincial pathway</h2>
              <p className="!m-[10px_0_0] !text-[14px] !leading-[1.75] text-[color-mix(in_srgb,var(--template-on-primary)_82%,transparent)]">A licensed RCIC can compare your occupation, job offer, language, status, education and settlement evidence with the stream behind a recent PNP invitation round.</p>
              <Link href={site.ctas.primary.href} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[var(--template-on-primary)] px-4 py-3 text-[12px] font-extrabold !text-[var(--template-primary)] transition-transform hover:-translate-y-0.5">Book a consultation <ArrowUpRight width={16} height={16} aria-hidden="true" /></Link>
            </article>
          </div>
        </div>
      </section>

      <FaqSection faqs={getPageFaqs(page)} />
      <SeoGuideSection page={page} eyebrow="PNP eligibility and draw context" title="What do Canadian PNP draw results mean for your immigration plan?" />
    </div>
  );
}
