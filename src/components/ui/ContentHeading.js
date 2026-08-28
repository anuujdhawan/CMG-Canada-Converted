import { cn } from "@/lib/utils";

/**
 * Reusable heading component for long-form content pages.
 *
 * Every service page renders its markdown headings through this single
 * component (via MarkdownBlocks), so changing the presentation here
 * updates every page at once — no repetition, one source of truth.
 *
 * The visual language mirrors the reference template: clean serif
 * display type with a subtle accent rule, no boxed card treatment.
 */
export default function ContentHeading({ level = 2, children, className }) {
  const Tag = `h${Math.min(Math.max(level, 2), 6)}`;

  const sizeClasses = {
    2: "content-section-heading relative !mt-[42px] !mb-[13px] !text-[clamp(23px,1.3rem+1.5vw,33px)] !font-semibold !tracking-[-0.025em] !leading-[1.08] !text-[var(--ink)] before:block before:h-[3px] before:w-10 before:!mb-2 before:rounded-full before:bg-[var(--primary)] before:content-['']",
    3: "content-subheading !mt-[42px] !mb-[13px] !text-[clamp(20px,1.1rem+1.2vw,25px)] !font-semibold !tracking-[-0.025em] !leading-[1.08] !text-[var(--ink)]",
    4: "content-subheading !mt-[42px] !mb-[13px] !text-[clamp(20px,1.1rem+1.2vw,25px)] !font-semibold !tracking-[-0.025em] !leading-[1.08] !text-[var(--ink)]",
    5: "content-subheading !mt-[42px] !mb-[13px] !text-[clamp(20px,1.1rem+1.2vw,25px)] !font-semibold !tracking-[-0.025em] !leading-[1.08] !text-[var(--ink)]",
    6: "content-subheading !mt-[42px] !mb-[13px] !text-[clamp(20px,1.1rem+1.2vw,25px)] !font-semibold !tracking-[-0.025em] !leading-[1.08] !text-[var(--ink)]",
  };

  return (
    <Tag className={cn(sizeClasses[level] || sizeClasses[6], className)}>
      {children}
    </Tag>
  );
}
