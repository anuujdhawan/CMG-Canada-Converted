import Link from "next/link";
import DataTable from "./DataTable";

const COLUMNS = [
  { key: "draw", label: "Draw" },
  { key: "date", label: "Date" },
  { key: "type", label: "Round type" },
  { key: "crs", label: "CRS score" },
  { key: "invitations", label: "Invitations" },
  { key: "cutoff", label: "Tie-break cutoff" },
  { key: "details", label: "Details" },
];

export default function ExpressEntryDrawsTable({ draws }) {
  const rows = draws.map((draw) => ({
    key: draw.number,
    draw: <span>#{draw.number}</span>,
    date: <span className="whitespace-nowrap text-[var(--template-ink)]">{draw.dateFull}</span>,
    type: <span className="grid gap-1.5"><strong className="text-[var(--template-ink)]">{draw.name}</strong><small className="max-w-[230px] leading-[1.45] text-[var(--template-muted)]">{draw.eligiblePrograms}</small></span>,
    crs: <strong className="text-[18px] text-[var(--template-ink)]">{draw.crs}</strong>,
    invitations: <span className="whitespace-nowrap text-[var(--template-ink)]">{draw.invitations}</span>,
    cutoff: <span className="max-w-[180px] leading-[1.45]">{draw.cutoff}</span>,
    details: <Link href={draw.detailsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center text-[12px] font-extrabold text-[var(--template-primary)] underline underline-offset-4 hover:text-[var(--template-primary-highlight)]">View round</Link>,
  }));

  return <DataTable caption="Express Entry invitation rounds" columns={COLUMNS} rows={rows} />;
}
