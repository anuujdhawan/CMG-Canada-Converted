import { cn } from "@/lib/utils";

/**
 * Form shell — single source for every assessment/contact form.
 * Theme-aware: dark/light via html[data-theme] + .env-driven --cmg-* vars.
 */
export function FormShell({ as: Tag = "div", className, bodyClassName, children, ...rest }) {
  return (
    <Tag className={cn("tool-card relative flex flex-col overflow-hidden rounded-[1.5rem]", className)} {...rest}>
      <div className={cn("tool-card__body flex flex-col gap-5 p-[1.35rem_1.5rem_1.5rem] sm:p-[1.6rem_1.75rem_1.75rem]", bodyClassName)}>{children}</div>
    </Tag>
  );
}

export function FieldGrid({ className, children }) {
  return <div className={cn("grid gap-5 sm:grid-cols-2", className)}>{children}</div>;
}
