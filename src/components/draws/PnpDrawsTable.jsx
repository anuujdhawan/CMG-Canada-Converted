import { ExternalLink, Table2 } from "lucide-react";

const COLUMN_HEADERS = [
  { key: "province", label: "Province", className: "w-[18%]" },
  { key: "date", label: "Date", className: "w-[16%]" },
  { key: "stream", label: "Stream", className: "w-[38%]" },
  { key: "score", label: "Score / cutoff", className: "w-[14%] text-right" },
  { key: "invitations", label: "Invited", className: "w-[14%] text-right" },
];

function ProvinceCell({ draw }) {
  return (
    <div className="grid gap-1">
      <span className="inline-flex w-fit rounded-full border border-[color-mix(in_srgb,var(--template-primary)_24%,transparent)] bg-[color-mix(in_srgb,var(--template-primary)_11%,var(--template-surface))] px-2.5 py-1 text-[11px] font-extrabold tracking-[.02em] text-[var(--template-primary)]">
        {draw.abbreviation}
      </span>
      <span className="text-[12px] leading-[1.4] text-[var(--template-muted)]">{draw.provinceLabel}</span>
    </div>
  );
}

function StreamCell({ draw }) {
  return (
    <div className="grid gap-1.5">
      <span className="font-extrabold leading-[1.35] text-[var(--template-ink)]">{draw.stream}</span>
      <span className="text-[12px] leading-[1.45] text-[var(--template-muted)]">{draw.detail}</span>
      <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold text-[var(--template-muted)]">
        <span className="rounded-full border border-[color-mix(in_srgb,var(--template-primary)_18%,transparent)] bg-[color-mix(in_srgb,var(--template-primary)_7%,var(--template-surface))] px-2 py-1 text-[10px] uppercase tracking-[.06em] text-[var(--template-primary)]">
          {draw.scoreName}
        </span>
        <a href={draw.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--template-primary)] underline underline-offset-4 hover:text-[var(--template-primary-highlight)]">
          Official source
          <ExternalLink width={12} height={12} aria-hidden="true" />
        </a>
      </span>
    </div>
  );
}

export default function PnpDrawsTable({ draws, totalCount = draws.length }) {
  if (!draws.length) {
    return <div className="rounded-[18px] border border-dashed border-[var(--template-border)] bg-[var(--template-surface-alt)] p-8 text-center text-[14px] leading-[1.7] text-[var(--template-muted)]">There are no draw records for this combination yet. Try another province or selection lens.</div>;
  }

  return (
    <div className="overflow-hidden rounded-[18px] border border-[var(--template-border)] border-t-4 border-t-[var(--template-primary)] bg-[var(--template-surface)] shadow-[0_20px_50px_color-mix(in_srgb,var(--cmg-template-deep-surface)_9%,transparent)]">
      <div className="flex items-center justify-between gap-4 border-b border-[color-mix(in_srgb,var(--template-primary)_18%,var(--template-border))] bg-[color-mix(in_srgb,var(--template-primary)_4%,var(--template-surface-alt))] px-5 py-3.5 max-[620px]:items-start max-[620px]:flex-col max-[620px]:gap-1.5">
        <div className="flex items-center gap-2">
          <Table2 className="text-[var(--template-primary)]" width={17} height={17} aria-hidden="true" />
          <span className="text-[11px] font-extrabold uppercase tracking-[.14em] text-[var(--template-ink)]">Provincial invitation rounds</span>
        </div>
        <span className="rounded-full border border-[color-mix(in_srgb,var(--template-primary)_35%,transparent)] bg-[color-mix(in_srgb,var(--template-primary)_10%,transparent)] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.1em] text-[var(--template-primary)]">{draws.length}{totalCount > draws.length ? ` of ${totalCount}` : ""} records shown</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-left text-[13px]">
          <caption className="sr-only">Provincial nominee draw results with province, date, stream, score or cutoff, and invitations</caption>
          <thead>
            <tr className="border-b border-[color-mix(in_srgb,var(--template-on-primary)_34%,transparent)] bg-[linear-gradient(135deg,var(--template-primary),var(--template-accent))] shadow-[0_10px_22px_color-mix(in_srgb,var(--template-ink)_18%,transparent)]">
              {COLUMN_HEADERS.map((column) => (
                <th key={column.key} scope="col" className={`px-5 py-4 text-[11px] font-extrabold uppercase tracking-[.1em] text-[var(--template-on-primary)] ${column.className}`}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {draws.map((draw, index) => (
              <tr key={draw.id} className={`group border-t border-[color-mix(in_srgb,var(--template-border)_78%,transparent)] transition-[background-color,border-color,box-shadow] duration-[280ms] hover:border-t-[var(--template-primary)] hover:bg-[color-mix(in_srgb,var(--template-primary)_8%,var(--template-surface-alt))] hover:shadow-[inset_4px_0_0_var(--template-primary)] ${index % 2 ? "bg-[color-mix(in_srgb,var(--template-accent)_4%,var(--template-surface-alt))]" : "bg-[var(--template-surface)]"}`}>
                <td className="px-5 py-4 align-middle"><ProvinceCell draw={draw} /></td>
                <td className="whitespace-nowrap px-5 py-4 align-middle font-semibold text-[var(--template-muted)]">{draw.date}</td>
                <td className="px-5 py-4 align-middle"><StreamCell draw={draw} /></td>
                <td className="px-5 py-4 text-right align-middle">
                  <span className="block text-[10px] font-extrabold uppercase tracking-[.08em] text-[var(--template-muted)]">{draw.selectionType ? draw.selectionType.replaceAll("-", " ") : "Published signal"}</span>
                  <strong className="mt-1 block text-[20px] font-extrabold leading-none tracking-[-.03em] text-[var(--template-primary)]">{draw.minimum}</strong>
                </td>
                <td className="px-5 py-4 text-right align-middle">
                  <strong className="block text-[18px] font-extrabold leading-none text-[var(--template-primary)]">{draw.invitations}</strong>
                  <span className="mt-1 block text-[11px] font-semibold text-[var(--template-muted)]">invitations</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-[color-mix(in_srgb,var(--template-border)_78%,transparent)] px-5 py-3 text-[11px] font-semibold text-[var(--template-muted)] max-[620px]:items-start max-[620px]:flex-col max-[620px]:gap-1">
        <span>Compare dates, streams and invitation signals row by row.</span>
        <span className="font-extrabold uppercase tracking-[.1em] text-[var(--template-primary)]">Official PNP sources · swipe on smaller screens</span>
      </div>
    </div>
  );
}
