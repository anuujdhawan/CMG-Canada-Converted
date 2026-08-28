"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { nocOccupations, teerLevels } from "@/data/noc";
import { ToolCard, ToolHeader, ToolField, ToolPill, ToolEmptyState, ToolSearchInput } from "./ui/ToolPrimitives";

export default function NocFinder() {
  const [query, setQuery] = useState("");
  const [teer, setTeer] = useState("all");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return nocOccupations.filter((occ) => {
      if (teer !== "all" && occ.teer !== Number(teer)) return false;
      if (!q) return true;
      return occ.title.toLowerCase().includes(q) || occ.code.includes(q);
    });
  }, [query, teer]);

  return (
    <ToolCard>
      <ToolHeader icon={Search} kicker="Demo subset of NOC 2021 · Illustrative" title="Occupation Finder" subtitle="Search by title or 5-digit NOC code, then filter by TEER — the starting point for Express Entry & LMIA fit." />
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
              placeholder="e.g. engineer, registered nurse, 21232 …"
            />
          </div>
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
          <p className="tool-field__hint m-0 !leading-[1.4] text-[var(--template-muted)] font-bold">{results.length} occupation{results.length === 1 ? "" : "s"} found</p>
          <ul className="tool-list mt-3 divide-y border border-[var(--template-border)] bg-[var(--template-surface)]">
            {results.length === 0 && (
              <li className="px-5 py-10 text-center"><ToolEmptyState>No occupations match. Try a different keyword or clear the TEER filter.</ToolEmptyState></li>
            )}
            {results.map((occ) => (
              <li key={occ.code} className="tool-list-item flex flex-col gap-2 border-b border-[var(--template-border)] px-[1.15rem] py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-sm font-bold">{occ.title}</p>
                  <p className="tool-field__hint !leading-[1.4]">{teerLevels[occ.teer]?.note}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="tool-code font-mono border border-[var(--cmg-dark-border)] bg-[var(--cmg-dark-surface-alt)] text-[var(--cmg-dark-primary)]">{occ.code}</span>
                  <span className="tool-badge border border-[color-mix(in_srgb,var(--cmg-dark-primary)_18%,transparent)] bg-[color-mix(in_srgb,var(--cmg-dark-primary)_10%,var(--cmg-dark-surface-alt))] text-[var(--cmg-dark-primary)]">{teerLevels[occ.teer]?.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ToolCard>
  );
}
