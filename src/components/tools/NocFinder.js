"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { nocOccupations, teerLevels } from "@/data/noc";
import { ToolCard, ToolHeader, ToolField, ToolPill, ToolEmptyState, ToolSearchInput } from "./ui/ToolPrimitives";

const RESULT_LIMIT = 30;
const POPULAR_SEARCHES = ["software engineer", "registered nurse", "electrician", "truck driver"];

export default function NocFinder() {
  const [query, setQuery] = useState("");
  const [teer, setTeer] = useState("all");
  const hasSearch = query.trim().length > 0;
  const hasCriteria = hasSearch || teer !== "all";
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return nocOccupations.filter((occ) => {
      if (teer !== "all" && occ.teer !== Number(teer)) return false;
      if (!q) return true;
      return occ.title.toLowerCase().includes(q)
        || occ.code.includes(q)
        || occ.definition.toLowerCase().includes(q);
    });
  }, [query, teer]);
  const visibleResults = results.slice(0, RESULT_LIMIT);

  return (
    <ToolCard>
      <ToolHeader icon={Search} kicker="All 516 NOC 2021 unit groups" title="Occupation Finder" subtitle="Search by occupation title, 5-digit code, or classification definition, then filter by TEER." />
      <div className="tool-card__body flex flex-col gap-5 p-[1.35rem_1.5rem_1.5rem] sm:p-[1.6rem_1.75rem_1.75rem]">
        {/* Search */}
        <ToolField label="Search occupations" htmlFor="noc-search">
          <div className="relative">
            <Search className="text-[var(--template-muted)] pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2" aria-hidden />
            <ToolSearchInput
              id="noc-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. software engineer, nurse, 21232, or a duty"
              aria-describedby="noc-search-hint"
            />
          </div>
          <p id="noc-search-hint" className="tool-field__hint mt-2">Search all 516 unit groups by title, code, or the short classification definition.</p>
          {!hasCriteria && (
            <div className="mt-3 flex flex-wrap items-center gap-2" aria-label="Popular occupation searches">
              <span className="tool-field__hint">Try:</span>
              {POPULAR_SEARCHES.map((term) => (
                <button key={term} type="button" className="rounded-full border border-[var(--template-border)] px-3 py-1.5 text-xs font-semibold text-[var(--template-primary)] hover:border-[var(--template-primary)]" onClick={() => setQuery(term)}>
                  {term}
                </button>
              ))}
            </div>
          )}
        </ToolField>

        {/* TEER filter */}
        <fieldset className="mt-5">
          <legend className="tool-field__label mb-2">Filter by TEER</legend>
          <div className="flex flex-wrap gap-2">
            <ToolPill active={teer === "all"} onClick={() => setTeer("all")}>All TEERs</ToolPill>
            {Object.entries(teerLevels).map(([level, info]) => (
              <ToolPill key={level} active={teer === level} onClick={() => setTeer(level)} title={info.note}>{info.label}</ToolPill>
            ))}
          </div>
        </fieldset>

        {/* Results */}
        <div className="mt-6">
          {hasCriteria ? (
            <p className="tool-field__hint m-0 !leading-[1.4] text-[var(--template-muted)] font-bold" aria-live="polite">
              Showing {visibleResults.length} of {results.length} matching occupation{results.length === 1 ? "" : "s"}
              {results.length > RESULT_LIMIT ? ". Add another keyword to narrow the list." : "."}
            </p>
          ) : (
            <p className="tool-field__hint m-0 !leading-[1.4] text-[var(--template-muted)]">Enter a search or choose a TEER category to see matches.</p>
          )}
          {hasCriteria && <ul className="tool-list mt-3 divide-y border border-[var(--template-border)] bg-[var(--template-surface)]">
            {results.length === 0 && (
              <li className="px-5 py-10 text-center"><ToolEmptyState>No occupations match. Try a different keyword or clear the TEER filter.</ToolEmptyState></li>
            )}
            {visibleResults.map((occ) => (
              <li key={occ.code} className="tool-list-item flex flex-col gap-2 border-b border-[var(--template-border)] px-[1.15rem] py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0 sm:pr-6">
                  <p className="m-0 text-sm font-bold">{occ.title}</p>
                  <p className="tool-field__hint mt-1 !leading-[1.55]">{occ.definition}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="tool-code font-mono border border-[var(--template-border)] bg-[var(--template-surface-alt)] text-[var(--template-primary)]">{occ.code}</span>
                  <span className="tool-badge border border-[color-mix(in_srgb,var(--template-primary)_18%,transparent)] bg-[color-mix(in_srgb,var(--template-primary)_10%,var(--template-surface-alt))] text-[var(--template-primary)]">{teerLevels[occ.teer]?.label}</span>
                </div>
              </li>
            ))}
          </ul>}
        </div>
        <aside className="rounded-xl border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-4 text-sm leading-relaxed text-[var(--template-muted)]" aria-label="Dataset coverage and official source">
          <p className="m-0 font-bold text-[var(--template-ink)]">Coverage and official source</p>
          <p className="mt-2 mb-0">This search covers all 516 unit groups in the NOC 2021 Version 1.0 classification structure. Entries show short class definitions, not complete occupation profiles. Compare your actual work with the official lead statement, main duties, examples, exclusions, and employment requirements.</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            <a className="inline-flex font-bold text-[var(--template-primary)] underline underline-offset-2" href="https://noc.esdc.gc.ca/" target="_blank" rel="noopener noreferrer">
              Search the official NOC profiles
            </a>
            <a className="inline-flex font-bold text-[var(--template-primary)] underline underline-offset-2" href="https://www.statcan.gc.ca/en/subjects/standard/noc/2021/introductionV1" target="_blank" rel="noopener noreferrer">
              About NOC 2021 and TEER
            </a>
          </div>
        </aside>
      </div>
    </ToolCard>
  );
}
