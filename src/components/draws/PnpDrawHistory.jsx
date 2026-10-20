"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarDays, ChevronDown, Database, Gauge, MapPin, RefreshCcw, ShieldCheck, Users } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/config/site";
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

export default function PnpDrawHistory({ initialFeed }) {
  const [province, setProvince] = useState(ALL_FILTER);
  const [stream, setStream] = useState(ALL_FILTER);
  const [feed, setFeed] = useState(initialFeed);
  const [status, setStatus] = useState("ready");
  const [filtersInitialized, setFiltersInitialized] = useState(false);
  const [fullFeedLoaded, setFullFeedLoaded] = useState(initialFeed.draws.length >= initialFeed.recordCount);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [loadMoreError, setLoadMoreError] = useState(false);
  const [visibleCount, setVisibleCount] = useState(DRAW_PAGE_SIZE);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const nextProvince = params.get("province") || ALL_FILTER;
      const nextStream = params.get("stream") || ALL_FILTER;

      if (nextProvince !== ALL_FILTER || nextStream !== ALL_FILTER) {
        setProvince(nextProvince);
        setStream(nextStream);
        setStatus("loading");
      }
      setFiltersInitialized(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!filtersInitialized) return;

    if (province === ALL_FILTER && stream === ALL_FILTER) {
      return;
    }

    const controller = new AbortController();
    const query = new URLSearchParams({ province, stream });

    fetch(`/api/pnp-draws?${query.toString()}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("PNP draw feed unavailable");
        return response.json();
      })
      .then((payload) => {
        setFeed(payload);
        setFullFeedLoaded(true);
        setStream(payload.stream || ALL_FILTER);
        setStatus("ready");
      })
      .catch((error) => {
        if (error.name !== "AbortError") setStatus("error");
      });

    return () => controller.abort();
  }, [filtersInitialized, province, stream]);

  const latest = feed.draws[0];
  const visibleDraws = feed.draws.slice(0, visibleCount);
  const totalRecords = feed.recordCount ?? feed.draws.length;
  const remainingDraws = Math.max(totalRecords - visibleDraws.length, 0);
  const totalInvitations = useMemo(() => feed.draws.reduce((total, draw) => {
    const value = Number(String(draw.invitations).replace(/[^\d]/g, ""));
    return Number.isFinite(value) ? total + value : total;
  }, 0), [feed.draws]);
  const invitationTotal = Number.isFinite(feed.totalInvitations) ? feed.totalInvitations : totalInvitations;
  const refreshedTime = feed.refreshedAt ? new Date(feed.refreshedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "";

  const loadMoreDraws = async () => {
    if (!fullFeedLoaded) {
      setIsLoadingMore(true);
      setLoadMoreError(false);
      try {
        const query = new URLSearchParams({ province, stream });
        const response = await fetch(`/api/pnp-draws?${query.toString()}`);
        if (!response.ok) throw new Error("PNP draw feed unavailable");
        const payload = await response.json();
        setFeed(payload);
        setFullFeedLoaded(true);
        setVisibleCount(Math.min(visibleCount + DRAW_PAGE_SIZE, payload.draws.length));
      } catch {
        setLoadMoreError(true);
      } finally {
        setIsLoadingMore(false);
      }
      return;
    }

    setVisibleCount((current) => Math.min(current + DRAW_PAGE_SIZE, feed.draws.length));
  };

  const handleProvinceChange = (event) => {
    const nextProvince = event.target.value;
    setProvince(nextProvince);
    setStream(ALL_FILTER);
    setVisibleCount(DRAW_PAGE_SIZE);
    updateFilterUrl(nextProvince, ALL_FILTER);
    if (nextProvince === ALL_FILTER) {
      setFeed(initialFeed);
      setFullFeedLoaded(initialFeed.draws.length >= initialFeed.recordCount);
      setStatus("ready");
    } else {
      setStatus("loading");
    }
  };

  const handleStreamChange = (event) => {
    const nextStream = event.target.value;
    setStream(nextStream);
    setVisibleCount(DRAW_PAGE_SIZE);
    updateFilterUrl(province, nextStream);
    if (province === ALL_FILTER && nextStream === ALL_FILTER) {
      setFeed(initialFeed);
      setFullFeedLoaded(initialFeed.draws.length >= initialFeed.recordCount);
      setStatus("ready");
    } else {
      setStatus("loading");
    }
  };

  const selectedProvinceLabel = PROVINCE_OPTIONS.find((option) => option.key === province)?.label || "All provinces — combined feed";

  return (
    <section id="pnp-history" className="relative z-[1] py-[76px] max-[880px]:py-14 max-[620px]:py-11">
      <div className="mx-auto w-[var(--container)] max-w-[1220px]">
        {status === "error" && <div className="mb-8 rounded-[18px] border border-[color-mix(in_srgb,var(--template-primary)_34%,var(--template-border))] bg-[color-mix(in_srgb,var(--template-primary)_7%,var(--template-surface))] p-6 text-[var(--template-muted)]" role="alert">The provincial draw feed is temporarily unavailable. Please refresh or <a className="font-bold text-[var(--template-primary)] underline underline-offset-4" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html" target="_blank" rel="noopener noreferrer">view the IRCC PNP guide</a>.</div>}

        <div className="grid grid-cols-4 gap-4 max-[920px]:grid-cols-2 max-[560px]:grid-cols-1">
          <StatCard icon={CalendarDays} label="Latest record" value={latest?.date || "—"} detail={latest ? `${latest.abbreviation} · ${latest.stream}` : "Loading the selected feed"} />
          <StatCard icon={Users} label="Invitations in feed" value={invitationTotal || "—"} detail={`${totalRecords || 0} draw records available`} />
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
            <p className="!m-[10px_0_0] !text-[14px] !text-[var(--template-muted)]">{status === "loading" ? "Loading the selected PNP draw results…" : `Showing ${visibleDraws.length} of ${totalRecords} source-linked PNP draw records${refreshedTime ? ` · checked ${refreshedTime}` : ""}.`}</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--template-border)] bg-[var(--template-surface)] px-3 py-2 text-[11px] font-extrabold uppercase tracking-[.08em] text-[var(--template-muted)]"><ShieldCheck className="h-4 w-4 text-[var(--template-primary)]" aria-hidden="true" /> Official provincial source on every record</span>
        </div>

        <div className="mt-6" aria-busy={status === "loading"}>
          {status === "loading" && <div className="rounded-[18px] border border-[var(--template-border)] bg-[var(--template-surface)] p-6 text-[var(--template-muted)]" role="status">Loading Canadian PNP draw results…</div>}
          {status === "ready" && (
            <>
              <PnpDrawsTable draws={visibleDraws} totalCount={totalRecords} />
              {loadMoreError && <p className="mt-4 text-center text-[13px] text-[var(--template-muted)]" role="alert">More draw records could not be loaded. Please try again.</p>}
              {remainingDraws > 0 && (
                <div className="mt-5 flex flex-col items-center gap-2.5">
                  <button type="button" onClick={loadMoreDraws} disabled={isLoadingMore} className="group inline-flex min-h-12 items-center gap-3 rounded-[13px] bg-[linear-gradient(135deg,var(--template-primary),var(--template-accent))] px-5 py-3 text-[13px] font-extrabold text-[var(--template-on-primary)] shadow-[0_12px_24px_color-mix(in_srgb,var(--template-primary)_22%,transparent)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_color-mix(in_srgb,var(--template-primary)_30%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--template-primary)]">
                    <span>Load more draws</span>
                    <span className="rounded-full bg-[color-mix(in_srgb,var(--template-on-primary)_18%,transparent)] px-2.5 py-1 text-[11px] font-extrabold">{remainingDraws} remaining</span>
                    <ChevronDown className="transition-transform duration-200 group-hover:translate-y-0.5" width={17} height={17} aria-hidden="true" />
                  </button>
                  <span className="text-[11px] font-semibold text-[var(--template-muted)]">Showing {visibleDraws.length} of {totalRecords} PNP draw records</span>
                </div>
              )}
              {remainingDraws === 0 && totalRecords > DRAW_PAGE_SIZE && <p className="mt-5 text-center text-[11px] font-extrabold uppercase tracking-[.1em] text-[var(--template-primary)]">All {totalRecords} available records are loaded</p>}
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
  );
}
