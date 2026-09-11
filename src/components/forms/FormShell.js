import { cn } from "@/lib/utils";

/**
 * Form shell — single source for every assessment/contact form.
 * Theme-aware: dark/light via html[data-theme] + configured --cmg-* vars.
 */
export function FormShell({ as: Tag = "div", className, bodyClassName, children, ...rest }) {
  return (
    <Tag className={cn("tool-card relative flex flex-col overflow-hidden rounded-[1.5rem] border border-[var(--template-border)] bg-[var(--template-surface)] text-[var(--template-ink)] shadow-[0_18px_44px_color-mix(in_srgb,var(--cmg-template-deep-surface)_12%,transparent)] before:absolute before:inset-x-0 before:top-0 before:z-[2] before:h-[3px] before:bg-[linear-gradient(90deg,var(--template-primary),var(--template-accent))] before:content-['']", className)} {...rest}>
      <div className={cn("tool-card__body flex flex-col gap-5 p-[1.35rem_1.5rem_1.5rem] sm:p-[1.6rem_1.75rem_1.75rem]", bodyClassName)}>{children}</div>
    </Tag>
  );
}

export function FieldGrid({ className, children }) {
  return <div className={cn("grid gap-5 sm:grid-cols-2", className)}>{children}</div>;
}
