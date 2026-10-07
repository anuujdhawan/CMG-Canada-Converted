import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getImageObjectPosition } from "@/lib/imagePresentation";

function formatDate(value) {
  if (!value) return "Guide";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Guide";
  return new Intl.DateTimeFormat("en-CA", { month: "short", year: "numeric" }).format(date);
}

export default function BlogCard({ post, index = 0 }) {
  return (
    <Link href={post.path} className="reference-blog-card group relative flex min-w-0 flex-col overflow-hidden border border-[var(--border)] rounded-[22px] bg-[linear-gradient(180deg,var(--surface),color-mix(in_srgb,var(--surface)_94%,var(--primary)_6%))] text-[var(--ink)] shadow-[var(--shadow-soft)] isolate translate-y-0 before:absolute before:inset-x-0 before:top-0 before:z-[3] before:h-[3px] before:rounded-[inherit] before:bg-[linear-gradient(90deg,var(--primary),var(--accent))] before:origin-left before:scale-x-[.2] before:transition-transform before:duration-[450ms] before:ease-[cubic-bezier(.16,1,.3,1)] before:content-[''] reveal [transition:transform_.35s_cubic-bezier(.16,1,.3,1),border-color_.35s_ease,box-shadow_.35s_ease,background_.35s_ease] hover:before:scale-x-100 focus-visible:before:scale-x-100 hover:-translate-y-1.5 focus-visible:-translate-y-1.5 hover:border-[color-mix(in_srgb,var(--primary)_62%,var(--border))] focus-visible:border-[color-mix(in_srgb,var(--primary)_62%,var(--border))] hover:shadow-[0_22px_58px_color-mix(in_srgb,var(--primary)_14%,transparent)] focus-visible:shadow-[0_22px_58px_color-mix(in_srgb,var(--primary)_14%,transparent)]" style={{ "--delay": `${index * 55}ms` }}>
      <figure className="reference-blog-card__media relative aspect-[16/10] max-[620px]:aspect-[16/9] m-0 overflow-hidden border-b border-[color-mix(in_srgb,var(--template-on-primary)_12%,var(--border))] bg-[var(--secondary)] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--cmg-template-deep-surface)_8%,transparent)_0%,transparent_42%,color-mix(in_srgb,var(--cmg-template-deep-surface)_58%,transparent)_100%)] after:content-[''] after:pointer-events-none">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className="object-cover [transition:transform_.8s_cubic-bezier(.16,1,.3,1),filter_.5s_ease] group-hover:scale-[1.065] group-hover:saturate-[1.08] group-focus-visible:scale-[1.065] group-focus-visible:saturate-[1.08]"
          style={{ objectPosition: getImageObjectPosition(post.image.src) }}
        />
        <span className="absolute left-4 top-4 z-[2] max-w-[calc(100%-4.5rem)] truncate rounded-full border border-[color-mix(in_srgb,var(--template-on-primary)_25%,transparent)] bg-[color-mix(in_srgb,var(--cmg-template-deep-surface)_62%,transparent)] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.11em] text-[var(--template-on-primary)] backdrop-blur-[10px]">{post.category.label}</span>
        <span className="reference-blog-card__media-index absolute z-[1] right-[15px] bottom-[13px] inline-flex items-center justify-center w-[34px] h-[34px] border border-[color-mix(in_srgb,var(--template-on-primary)_28%,transparent)] rounded-[50%] bg-[color-mix(in_srgb,var(--cmg-template-deep-surface)_60%,transparent)] text-[var(--template-on-primary)] font-extrabold text-[11px] leading-none tracking-[.12em] backdrop-blur-[10px]">{String(index + 1).padStart(2, "0")}</span>
      </figure>
      <div className="reference-blog-card__body flex flex-1 flex-col p-[22px_22px_20px] max-[620px]:p-[20px_18px_18px]">
        <div className="reference-blog-card__meta flex items-center justify-between gap-[14px] mb-4 text-[var(--primary)] font-extrabold text-[11px] leading-[1.2] tracking-[.11em] uppercase max-[620px]:items-start max-[620px]:flex-col max-[620px]:gap-[6px]">
          <span>{post.category.label}</span>
          <span className="text-[var(--muted)] font-bold tracking-[.04em] normal-case">{formatDate(post.meta.lastModified)}</span>
        </div>
        <h3 className="max-w-[470px] text-[clamp(19px,1.1rem+.5vw,22px)] max-[620px]:text-[24px] leading-[1.03] transition-colors duration-200 group-hover:text-[var(--primary)] group-focus-visible:text-[var(--primary)]">{post.title}</h3>
        <p className="mt-[14px] text-[var(--muted)] !text-[12px] leading-[1.7]">{post.seo.description}</p>
        <span className="reference-blog-card__action inline-flex items-center justify-between gap-2 mt-auto pt-[18px] border-t border-[var(--border)] text-[var(--ink)] font-extrabold text-[12px] leading-none tracking-[.02em]">
          Read article
          <ArrowUpRight className="text-[var(--primary)] transition-transform duration-[300ms] ease-in-out group-hover:translate-x-[3px] group-hover:translate-y-[-3px] group-focus-visible:translate-x-[3px] group-focus-visible:translate-y-[-3px]" width={17} height={17} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
