import { ArrowRight, Table2 } from "lucide-react";

export default function DataTable({ caption, columns, rows, sourceLabel = "Official data" }) {
  return (
    <div className="my-7 max-h-[640px] overflow-auto rounded-[18px] border border-[var(--template-border)] bg-[color-mix(in_srgb,var(--template-surface)_82%,transparent)] shadow-[var(--shadow-soft)] [isolation:isolate] max-[620px]:max-h-[560px]">
      <table className="w-full min-w-[860px] border-collapse text-left text-[13px]">
        <caption className="sr-only">{caption}</caption>
        <thead className="sticky top-0 z-20 shadow-[0_10px_22px_color-mix(in_srgb,var(--template-ink)_18%,transparent)]">
          <tr>
            <th colSpan={columns.length} className="border-b border-[color-mix(in_srgb,var(--template-border)_78%,transparent)] bg-[color-mix(in_srgb,var(--template-surface-alt)_88%,transparent)] px-5 py-3 text-left">
              <div className="flex items-center justify-between gap-4 max-[620px]:items-start max-[620px]:flex-col max-[620px]:gap-1">
                <div className="flex items-center gap-2">
                  <Table2 className="text-[var(--template-primary)]" width={16} height={16} aria-hidden="true" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[.15em] text-[var(--template-ink)]">{caption}</span>
                </div>
                <span className="rounded-full border border-[color-mix(in_srgb,var(--template-primary)_35%,transparent)] bg-[color-mix(in_srgb,var(--template-primary)_10%,transparent)] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.1em] text-[var(--template-primary)]">{sourceLabel}</span>
              </div>
            </th>
          </tr>
          <tr className="border-b border-[color-mix(in_srgb,var(--template-on-primary)_34%,transparent)] bg-[linear-gradient(135deg,var(--template-primary),var(--template-accent))]">
            {columns.map((column) => <th key={column.key} scope="col" className="px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-[.1em] text-[var(--template-on-primary)]">{column.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.key || index} className={`group border-t border-[color-mix(in_srgb,var(--template-border)_78%,transparent)] transition-[background-color,border-color,box-shadow] duration-[280ms] hover:border-t-[var(--template-primary)] hover:bg-[color-mix(in_srgb,var(--template-primary)_8%,var(--template-surface-alt))] hover:shadow-[inset_4px_0_0_var(--template-primary)] ${index % 2 ? "bg-[color-mix(in_srgb,var(--template-accent)_4%,var(--template-surface-alt))]" : ""}`}>
              {columns.map((column) => <td key={column.key} className={`px-5 py-4 align-top text-[var(--template-muted)] ${column.key === "draw" ? "border-l-2 border-transparent font-bold text-[var(--template-ink)] transition-colors duration-[280ms] group-hover:border-l-[var(--template-primary)]" : ""}`}>{row[column.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between gap-4 border-t border-[color-mix(in_srgb,var(--template-border)_78%,transparent)] px-5 py-3 text-[11px] font-semibold text-[var(--template-muted)] max-[620px]:items-start max-[620px]:flex-col max-[620px]:gap-1">
        <span>Swipe horizontally to explore all columns</span>
        <span className="inline-flex items-center gap-1.5 font-extrabold uppercase tracking-[.1em] text-[var(--template-primary)]">Canada.ca source <ArrowRight width={13} height={13} aria-hidden="true" /></span>
      </div>
    </div>
  );
}
