"use client";

import { cn } from "@/lib/utils";

/**
 * Single-source tool UI kit — every calculator/tool page MUST import from here.
 * All colors resolve through .env-driven active-theme CSS variables:
 *   --template-*  (the active dark/light template palette)
 *   --brand-*     (canonical brand palette)
 * Component visuals switch automatically via html[data-theme="dark"|"light"].
 * No hardcoded hex values — beautified to complement the current site theme.
 */

// Card that wraps every tool. Theme-aware via .tool-card CSS.
export function ToolCard({ className, children, ...props }) {
  return (
    <div className={cn("tool-card relative flex flex-col overflow-hidden rounded-[1.5rem] border border-[var(--template-border)] bg-[var(--template-surface)] text-[var(--template-ink)] shadow-[0_22px_56px_color-mix(in_srgb,var(--cmg-template-deep-surface)_18%,transparent),0_8px_22px_color-mix(in_srgb,var(--cmg-template-deep-surface)_10%,transparent)] before:absolute before:inset-x-0 before:top-0 before:z-[2] before:h-[3px] before:bg-[linear-gradient(90deg,var(--template-primary),var(--template-accent))] before:content-['']", className)} {...props}>
      {children}
    </div>
  );
}

export function ToolHeader({ icon: Icon, title, subtitle, kicker, action, className }) {
  return (
    <div className={cn("tool-header flex items-start justify-between gap-4 border-b border-[var(--template-border)] bg-[linear-gradient(145deg,var(--template-surface),color-mix(in_srgb,var(--template-primary)_6%,var(--template-surface)))] px-6 pb-[1.2rem] pt-[1.35rem]", className)}>
      <div className="tool-header__left flex min-w-0 items-start gap-[0.9rem]">
        <span className="tool-header__icon inline-flex h-[2.7rem] w-[2.7rem] shrink-0 items-center justify-center rounded-[0.85rem] border border-[var(--template-border)] bg-[color-mix(in_srgb,var(--template-primary)_10%,var(--template-surface-alt))] text-[var(--template-primary)] shadow-[inset_0_1px_0_color-mix(in_srgb,var(--template-on-primary)_6%,transparent)]" aria-hidden>
          {Icon ? <Icon className="h-[1.2rem] w-[1.2rem]" /> : null}
        </span>
        <div className="tool-header__text">
          {kicker && <p className="tool-header__kicker m-0 text-[var(--template-primary)] text-[0.6875rem] font-extrabold uppercase tracking-[0.12em]">{kicker}</p>}
          <h2 className="tool-header__title mt-[0.18rem] mb-0 text-[var(--template-ink)] text-[clamp(1.05rem,2vw,1.22rem)] font-extrabold leading-[1.2] tracking-[-0.02em]">{title}</h2>
          {subtitle && <p className="tool-header__subtitle mt-[0.3rem] mb-0 max-w-[32rem] text-[var(--template-muted)] text-[0.76rem] leading-[1.5]">{subtitle}</p>}
        </div>
      </div>
      {action && <div className="tool-header__action">{action}</div>}
    </div>
  );
}

export function ToolResetButton({ children = "Reset", ...props }) {
  return (
    <button type="button" className="tool-reset-btn inline-flex items-center gap-[0.4rem] whitespace-nowrap rounded-full border border-[var(--template-border)] bg-[color-mix(in_srgb,var(--template-ink)_6%,transparent)] px-[0.85rem] py-[0.5rem] text-[var(--template-muted)] text-[0.72rem] font-extrabold tracking-[0.02em] transition-all duration-[180ms] ease-[ease] hover:-translate-y-px hover:border-[var(--template-primary)] hover:bg-[color-mix(in_srgb,var(--template-primary)_10%,transparent)] hover:text-[var(--template-ink)]" {...props}>
      {children}
    </button>
  );
}

export function ToolField({ label, htmlFor, hint, children, className, labelClassName }) {
  return (
    <div className={cn("tool-field grid gap-[0.35rem]", className)}>
      {label && (
        <label htmlFor={htmlFor} className={cn("tool-field__label text-[var(--template-ink)] text-[0.78rem] font-extrabold tracking-[-0.01em]", labelClassName)}>
          {label}
        </label>
      )}
      {children}
      {hint && <p className="tool-field__hint m-0 text-[var(--template-muted)] text-[0.68rem] leading-[1.4]">{hint}</p>}
    </div>
  );
}

export function ToolSelect({ className, children, ...props }) {
  return (
    <select className={cn("tool-input h-[3.15rem] w-full rounded-[0.75rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] px-[0.75rem] text-[0.86rem] font-semibold text-[var(--template-ink)] outline-none transition-all duration-[180ms] ease-[ease] hover:border-[color-mix(in_srgb,var(--template-primary)_32%,var(--template-border))] hover:bg-[var(--template-surface)] focus:border-[var(--template-primary)] focus:bg-[var(--template-surface)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--template-primary)_14%,transparent)]", className)} {...props}>
      {children}
    </select>
  );
}

export function ToolInput({ className, ...props }) {
  return <input className={cn("tool-input h-[3.15rem] w-full rounded-[0.75rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] px-[0.75rem] text-[0.86rem] font-semibold text-[var(--template-ink)] outline-none transition-all duration-[180ms] ease-[ease] placeholder:text-[var(--template-muted)] placeholder:opacity-90 hover:border-[color-mix(in_srgb,var(--template-primary)_32%,var(--template-border))] hover:bg-[var(--template-surface)] focus:border-[var(--template-primary)] focus:bg-[var(--template-surface)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--template-primary)_14%,transparent)]", className)} {...props} />;
}

export function ToolSearchInput({ className, ...props }) {
  return <input className={cn("tool-input h-[3.15rem] w-full rounded-[0.75rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] pl-[0.75rem] pr-[0.75rem] text-[0.86rem] font-semibold text-[var(--template-ink)] outline-none transition-all duration-[180ms] ease-[ease] placeholder:text-[var(--template-muted)] placeholder:opacity-90 hover:border-[color-mix(in_srgb,var(--template-primary)_32%,var(--template-border))] hover:bg-[var(--template-surface)] focus:border-[var(--template-primary)] focus:bg-[var(--template-surface)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--template-primary)_14%,transparent)]", className)} {...props} />;
}

export function ToolCheckboxCard({ label, checked, onChange, hint, className, labelClassName, hintClassName }) {
  return (
    <label className={cn("tool-checkbox-card flex min-h-[3.15rem] cursor-pointer items-start gap-[0.85rem] rounded-[0.95rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] px-[0.9rem] py-[0.85rem] transition-all duration-[180ms] ease-[ease] hover:-translate-y-px hover:border-[color-mix(in_srgb,var(--template-primary)_26%,var(--template-border))]", checked && "is-checked border-[color-mix(in_srgb,var(--template-primary)_30%,transparent)] bg-[color-mix(in_srgb,var(--template-primary)_8%,var(--template-surface-alt))]", className)}>
      <span className="tool-checkbox-card__text grid min-w-0 flex-1 gap-[0.2rem]">
        <span className={cn("tool-checkbox-card__label text-[var(--template-ink)] text-[0.84rem] font-bold leading-[1.35]", labelClassName)}>{label}</span>
        {hint && <span className={cn("tool-checkbox-card__hint text-[var(--template-muted)] text-[0.68rem] leading-[1.4]", hintClassName)}>{hint}</span>}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="tool-checkbox !mt-0 h-[1.05rem] w-[1.05rem] accent-[var(--template-primary)]" />
    </label>
  );
}

export function ToolProgress({ value, max, labelLeft, labelRight }) {
  const pct = max ? Math.round((value / max) * 100) : 0;
  return (
    <div className="tool-progress grid gap-2">
      {(labelLeft || labelRight) && (
        <div className="tool-progress__labels flex justify-between gap-4 text-[var(--template-muted)] text-[0.72rem] font-bold">
          <span>{labelLeft}</span>
          <span>{labelRight ?? `${pct}%`}</span>
        </div>
      )}
      <div className="tool-progress__track h-[0.55rem] overflow-hidden rounded-full border border-[var(--template-border)] bg-[var(--template-surface-alt)]" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="tool-progress__fill h-full rounded-full bg-[linear-gradient(90deg,var(--template-primary),var(--template-accent))] transition-[width] duration-300 ease-[ease]" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function ToolPill({ children, active, className, ...props }) {
  return (
    <button type="button" className={cn("tool-pill inline-flex items-center justify-center rounded-full border border-[var(--template-border)] bg-[var(--template-surface-alt)] px-[0.85rem] py-[0.45rem] text-[var(--template-muted)] text-[0.72rem] font-extrabold tracking-[0.02em] transition-all duration-[180ms] ease-[ease] hover:-translate-y-px hover:border-[color-mix(in_srgb,var(--template-primary)_30%,var(--template-border))] hover:text-[var(--template-ink)]", active && "is-active border-[var(--template-primary)] bg-[var(--template-primary)] text-[var(--template-on-primary)] shadow-[0_6px_16px_color-mix(in_srgb,var(--template-primary)_20%,transparent)]", className)} aria-pressed={active} {...props}>
      {children}
    </button>
  );
}

export function ToolResultCard({ children, variant = "primary", className }) {
  return <div className={cn("tool-result relative min-h-[286px] overflow-hidden rounded-[1.25rem] border border-[color-mix(in_srgb,var(--template-primary)_20%,var(--template-border))] bg-[linear-gradient(135deg,var(--template-primary)_0%,var(--template-accent)_100%)] p-[1.5rem_1.75rem] text-[var(--template-on-primary)] shadow-[0_18px_40px_color-mix(in_srgb,var(--template-primary)_18%,transparent)] max-[620px]:p-5", `tool-result--${variant}`, className)}>{children}</div>;
}

export function ToolDivider({ className }) {
  return <hr className={cn("tool-divider my-4 h-px border-0 bg-[var(--template-border)]", className)} />;
}

export function ToolOptionButton({ children, className, ...props }) {
  return (
    <button type="button" className={cn("tool-option-btn flex w-full items-center justify-between gap-4 rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] px-[1.1rem] py-4 text-left text-[var(--template-ink)] text-[0.88rem] font-bold leading-[1.3] transition-all duration-[180ms] ease-[ease] hover:-translate-y-px hover:border-[color-mix(in_srgb,var(--template-primary)_36%,var(--template-border))] hover:bg-[var(--template-surface)] hover:shadow-[0_8px_20px_color-mix(in_srgb,var(--cmg-template-deep-surface)_14%,transparent)]", className)} {...props}>
      {children}
    </button>
  );
}

export function ToolStat({ label, value }) {
  return (
    <div className="tool-stat flex items-center justify-between gap-4 rounded-[0.85rem] border border-[color-mix(in_srgb,var(--template-on-primary)_12%,transparent)] bg-[color-mix(in_srgb,var(--template-on-primary)_8%,transparent)] px-[0.9rem] py-[0.65rem]">
      <span className="tool-stat__label text-[0.78rem] font-semibold text-[color-mix(in_srgb,var(--template-on-primary)_86%,transparent)]">{label}</span>
      <span className="tool-stat__value font-extrabold text-[var(--template-on-primary)]">{value}</span>
    </div>
  );
}

export function ToolEmptyState({ children, className }) {
  return <div className={cn("tool-empty rounded-[1rem] border border-dashed border-[var(--template-border)] bg-[var(--template-surface-alt)] p-[1.15rem] text-center text-[0.82rem] text-[var(--template-muted)]", className)}>{children}</div>;
}
