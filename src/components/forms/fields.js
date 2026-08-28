import { cn } from "@/lib/utils";

// Single-source field primitives — colors resolve via .env-driven vars (no hex)
const inputBase = "tool-input h-[3.15rem] w-full rounded-[0.75rem] px-[0.75rem] text-[0.86rem] font-semibold outline-none transition-all duration-[180ms] ease-[ease]";
const stateCls = (error) => (error ? "border-error focus:border-error focus:ring-error/25" : "");

export function Field({ label, htmlFor, required, error, hint, children }) {
  return (
    <div className="tool-field grid gap-[0.35rem]">
      <label htmlFor={htmlFor} className="tool-field__label text-[var(--template-ink)] text-[0.78rem] font-extrabold tracking-[-0.01em]">
        {label}
        {required && <span className="ml-1 text-[var(--cmg-dark-primary)]" aria-hidden>*</span>}
      </label>
      {children}
      {hint && !error && <p className="tool-field__hint m-0 text-[var(--template-muted)] text-[0.68rem] leading-[1.4]">{hint}</p>}
      {error && <p role="alert" className="mt-1.5 text-xs font-medium text-[var(--brand-error)]">{error}</p>}
    </div>
  );
}

export function TextInput({ className, error, ...props }) {
  return <input className={cn(inputBase, stateCls(error), className)} {...props} />;
}
export function SelectInput({ className, error, children, ...props }) {
  return <select className={cn(inputBase, stateCls(error), className)} {...props}>{children}</select>;
}
export function TextArea({ className, error, ...props }) {
  return <textarea className={cn("tool-input min-h-[7rem] h-[3.15rem] rounded-[0.75rem] px-[0.75rem] py-3 text-[0.86rem]", stateCls(error), className)} {...props} />;
}
export function CheckboxField({ label, htmlFor, checked, onChange, error, className }) {
  return (
    <div>
          <label htmlFor={htmlFor} className={cn("flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[var(--cmg-dark-ink)]", className)}>
        <input id={htmlFor} type="checkbox" checked={checked} onChange={onChange} className="tool-checkbox mt-[0.15rem] h-[1.05rem] w-[1.05rem]" />
        <span>{label}</span>
      </label>
      {error && <p role="alert" className="mt-1.5 text-xs font-medium text-[var(--brand-error)]">{error}</p>}
    </div>
  );
}
