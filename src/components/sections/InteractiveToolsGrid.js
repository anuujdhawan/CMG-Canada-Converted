import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { tools } from "@/data/tools";
import iconMap, { fallbackIcon } from "@/lib/icons";
import { currentPagePath } from "@/config/pageRoutes";

export default function InteractiveToolsGrid() {
  return (
    <section aria-label="Free interactive tools" className="reference-index-grid reference-index-grid--tools border-t border-[var(--template-border)] bg-[var(--template-bg)] text-[var(--template-ink)]">
      <div className="reference-index-grid__inner mx-auto w-[min(100%-2rem,var(--container,1220px))] py-[clamp(4rem,8vw,8rem)]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] uppercase"><Sparkles className="h-3.5 w-3.5" /> Try them now</p>
            <h2>Free interactive tools</h2>
            <p className="reference-index-grid__lead !mt-[1.3rem] max-w-[42rem] !text-[var(--template-muted)] !text-[clamp(0.95rem,0.9rem+0.35vw,1.1875rem)] !leading-[1.65]">Answer a few questions and get an instant read on where you stand — no sign-up required.</p>
          </div>
        </div>

        <div className="reference-tool-grid mt-[clamp(2.4rem,5vw,4.5rem)] grid grid-cols-2 max-[640px]:grid-cols-1 max-[640px]:gap-[.8rem] gap-4">
          {tools.map((tool, index) => {
            const Icon = iconMap[tool.icon] || fallbackIcon;
            return (
              <Link
                key={tool.slug}
                href={currentPagePath(`/tools/${tool.slug}`)}
                className="reference-tool-tile group relative flex min-h-[15rem] max-[640px]:min-h-[13rem] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-[linear-gradient(90deg,var(--template-primary),var(--template-accent))] before:origin-left before:scale-x-[.2] before:transition-transform before:duration-[260ms] before:ease-[ease] before:content-[''] hover:before:scale-x-100 focus-visible:before:scale-x-100 flex-col justify-between overflow-hidden rounded-[1.1rem] border border-[var(--template-border)] bg-[var(--template-surface)] text-[var(--template-ink)] no-underline transition-[border-color,background,transform,box-shadow] duration-[220ms] ease-[ease] hover:border-[color-mix(in_srgb,var(--template-primary)_55%,var(--template-border))] hover:bg-[var(--template-surface-alt)] hover:translate-y-[-5px] hover:shadow-[0_1.2rem_3rem_color-mix(in_srgb,var(--template-secondary)_20%,transparent)] focus-visible:border-[color-mix(in_srgb,var(--template-primary)_55%,var(--template-border))] focus-visible:bg-[var(--template-surface-alt)] focus-visible:translate-y-[-5px] focus-visible:shadow-[0_1.2rem_3rem_color-mix(in_srgb,var(--template-secondary)_20%,transparent)]"
              >
                <div className="reference-tool-tile__body flex flex-1 flex-col gap-[0.7rem] p-[clamp(1.25rem,2.5vw,2rem)]">
                  <div className="reference-tool-tile__top flex items-center justify-between gap-4">
                <span className="reference-tool-tile__icon inline-flex h-[2.8rem] w-[2.8rem] items-center justify-center rounded-[0.8rem] border border-[var(--template-border)] bg-[color-mix(in_srgb,var(--template-primary)_12%,var(--template-surface-alt))] text-[var(--template-primary)] group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="reference-tool-tile__number text-[var(--template-primary)] text-[0.72rem] font-extrabold tracking-[0.12em]">0{index + 1}</span>
                  </div>
                  <h3 className="!text-[var(--template-ink)] !m-[auto_0_0] !text-[clamp(1.375rem,1rem+1.3vw,2rem)] !font-semibold !leading-[1.04] !tracking-[-0.028em]">{tool.title}</h3>
                  <p className="!text-[var(--template-muted)] !text-[0.9rem] !leading-[1.55]">{tool.description}</p>
                  <span className="reference-tool-tile__action inline-flex items-center justify-between gap-4 border-t border-[var(--template-border)] px-[clamp(1.25rem,2.5vw,2rem)] py-[0.9rem] text-[var(--template-primary)] text-[0.78rem] font-extrabold">
                    Open tool <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
