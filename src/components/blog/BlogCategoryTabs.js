import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { getImageObjectPosition } from "@/lib/imagePresentation";
import { ALL_BLOG_CATEGORY, blogHref, paginateBlogPosts } from "@/lib/blog";

/**
 * Blog category filter + article grid.
 *
 * The active category and page come from the URL (`?category=…&page=…`) and
 * every control here is a real link. Two reasons that matters:
 *
 *   1. The five "By topic" links in the Resources menu point at
 *      `/blog?category=…`. While this component owned the selection in React
 *      state, those links all landed on "All categories" — the query string was
 *      never read — so the whole topic half of that menu was dead.
 *   2. A link-driven filter is shareable, crawlable and works with JavaScript
 *      off, and it keeps the component a server component with no client state
 *      to rehydrate (the project runs `reactCompiler`, where `setState` inside
 *      an effect is a lint error).
 *
 * `/blog/page.js` normalises the query string, so an unknown category falls
 * back to "all" and an out-of-range page clamps to the last page.
 */
const PAGE_SIZE = 6;

const ALL_GROUP = {
  slug: ALL_BLOG_CATEGORY,
  label: "All categories",
  title: "Every guide in one place",
  description: "Browse the full library and use the page controls as the collection grows.",
};

function Tab({ group, isActive, count }) {
  return (
    <Link
      className={`reference-blog-tab group relative inline-flex w-full shrink-0 items-center after:absolute after:top-0 after:right-[-21px] after:bottom-0 after:left-auto after:w-[3px] after:h-auto after:rounded-[999px_0_0_999px] after:bg-[linear-gradient(180deg,var(--primary),var(--accent))] after:content-[''] after:origin-[center_top] after:scale-y-0 after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(.16,1,.3,1)] max-[1023px]:after:top-auto max-[1023px]:after:right-0 max-[1023px]:after:bottom-[-1px] max-[1023px]:after:left-0 max-[1023px]:after:w-auto max-[1023px]:after:h-[3px] max-[1023px]:after:rounded-[999px_999px_0_0] max-[1023px]:after:origin-left max-[1023px]:after:scale-x-0 justify-between gap-[18px] min-h-[60px] border-b border-[color-mix(in_srgb,var(--border)_80%,transparent)] px-[14px] py-[15px] bg-transparent cursor-pointer font-extrabold text-[11px] leading-[1.1] tracking-[.1em] text-left uppercase transition-[color,background] duration-[250ms] ease-[ease] hover:!bg-[color-mix(in_srgb,var(--primary)_6%,transparent)] focus-visible:!bg-[color-mix(in_srgb,var(--primary)_6%,transparent)] focus-visible:!outline-2 focus-visible:!outline-[var(--primary)] focus-visible:!outline-offset-[6px] max-[1023px]:!w-auto max-[1023px]:min-w-max max-[1023px]:min-h-[58px] max-[1023px]:!border-b-0 max-[1023px]:px-1 max-[1023px]:pb-4 max-[620px]:min-h-[52px] max-[620px]:pb-[13px]${isActive ? " is-active after:scale-y-100 max-[1023px]:after:scale-x-100" : ""}`}
      href={blogHref({ category: group.slug })}
      aria-current={isActive ? "page" : undefined}
      scroll={false}
    >
      {/*
        The colour lives on this span, not on the anchor. `.cmg-template-home a
        { color: inherit }` is unlayered CSS and therefore outranks every
        text-colour utility applied directly to an <a>, so a muted class on the
        link itself would silently render as inherited ink.
      */}
      <span className={isActive ? "text-[var(--ink)]" : "text-[var(--muted)] group-hover:text-[var(--ink)] group-focus-visible:text-[var(--ink)]"}>{group.label}</span>
      <small className="text-[var(--primary)] font-extrabold text-[11px] leading-none tracking-[.08em] opacity-80">{String(count).padStart(2, "0")}</small>
    </Link>
  );
}

function PagerButton({ href, disabled, children }) {
  if (disabled) {
    return <span aria-disabled="true" className="rounded-lg border border-[var(--border)] px-4 py-2 font-bold opacity-40">{children}</span>;
  }
  return <Link href={href} scroll={false} className="rounded-lg border border-[var(--border)] px-4 py-2 font-bold transition-colors hover:border-[var(--primary)]"><span className="text-[var(--ink)]">{children}</span></Link>;
}

export default function BlogCategoryTabs({ groups = [], activeCategory = ALL_BLOG_CATEGORY, activePage = 1 }) {
  const allPosts = groups.flatMap((group) => group.posts);
  const allGroups = [{ ...ALL_GROUP, posts: allPosts }, ...groups];
  const activeGroup = allGroups.find((group) => group.slug === activeCategory) || allGroups[0];

  // The newest guide gets the wide banner, so it is pulled out of the grid —
  // rendering it in both places put the same card on the page twice. Groups
  // with a single post have nothing to feature, so they go straight to the grid.
  const hasFeatured = activeGroup.posts.length > 1;
  const featured = hasFeatured ? activeGroup.posts[0] : null;
  const gridPosts = hasFeatured ? activeGroup.posts.slice(1) : activeGroup.posts;
  const { items: visiblePosts, page, totalPages, hasPrev, hasNext } = paginateBlogPosts(gridPosts, activePage, PAGE_SIZE);

  return (
    <div className="reference-blog-tabs-shell grid grid-cols-[minmax(185px,.26fr)_minmax(0,1fr)] max-[1023px]:grid-cols-1 items-start gap-[clamp(34px,5vw,72px)] max-[1023px]:gap-[34px] max-[620px]:gap-[27px]">
      <nav
        className="reference-blog-tabs flex sticky top-[clamp(6.5rem,10vh,8rem)] flex-col items-stretch gap-0 max-h-[min(640px,calc(100vh-220px))] overflow-x-hidden overflow-y-auto border-r border-[var(--border)] pr-5 max-[1023px]:static max-[1023px]:flex-row max-[1023px]:!max-h-none max-[1023px]:overflow-x-auto max-[1023px]:overflow-y-hidden max-[1023px]:!border-r-0 max-[1023px]:border-b max-[1023px]:pr-4 max-[620px]:mr-[-1rem]"
        aria-label="Blog categories"
      >
        {allGroups.map((group) => (
          <Tab key={group.slug} group={group} count={group.posts.length} isActive={group.slug === activeGroup.slug} />
        ))}
      </nav>

      <section
        className="reference-blog-tab-panel animate-[blog-panel-in_.42s_cubic-bezier(.16,1,.3,1)_both] border-t border-[var(--border)] pt-[27px] max-[620px]:pt-[22px] focus-visible:!outline-2 focus-visible:!outline-[var(--primary)] focus-visible:!outline-offset-[8px]"
        id="blog-panel"
        key={activeGroup.slug}
        tabIndex={-1}
      >
        <div className="reference-blog-group__head grid grid-cols-[minmax(0,.88fr)_minmax(260px,.72fr)] max-[880px]:grid-cols-1 items-end gap-[50px] max-[880px]:gap-[14px] mb-[27px]">
          <div>
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] uppercase">{activeGroup.label}</p>
            <h3 className="max-w-[580px] text-[clamp(28px,2rem+1.8vw,40px)]">{activeGroup.title}</h3>
          </div>
          <p className="max-w-[430px] text-[var(--muted)] text-[15px] leading-[1.75]">{activeGroup.description}</p>
        </div>

        {featured && (
          <Link
            href={featured.path}
            className="reference-blog-group__banner group relative block mb-[22px] overflow-hidden border border-[var(--border)] rounded-[22px] aspect-[16/7] bg-[var(--secondary)] isolate [transition:border-color_.35s_ease,box-shadow_.35s_ease,transform_.35s_cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 focus-visible:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--primary)_62%,var(--border))] focus-visible:border-[color-mix(in_srgb,var(--primary)_62%,var(--border))] hover:shadow-[0_22px_58px_color-mix(in_srgb,var(--primary)_14%,transparent)] focus-visible:shadow-[0_22px_58px_color-mix(in_srgb,var(--primary)_14%,transparent)]"
            aria-label={`Open ${featured.title}`}
          >
            <Image
              src={featured.image.src}
              alt={featured.image.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 72vw"
              priority={false}
              className="object-cover [transition:transform_.8s_cubic-bezier(.16,1,.3,1),filter_.5s_ease] group-hover:scale-[1.04] group-hover:saturate-[1.08] group-focus-visible:scale-[1.04] group-focus-visible:saturate-[1.08]"
              style={{ objectPosition: getImageObjectPosition(featured.image.src) }}
            />
            <span className="reference-blog-group__banner-overlay absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,transparent_35%,color-mix(in_srgb,var(--cmg-template-deep-surface)_62%,transparent))]" aria-hidden="true" />
            <span className="reference-blog-group__banner-label absolute left-[18px] right-[18px] bottom-[18px] z-[1] inline-flex items-center justify-between gap-3 px-[14px] py-3 pl-4 border border-[color-mix(in_srgb,var(--template-on-primary)_18%,transparent)] rounded-full bg-[color-mix(in_srgb,var(--cmg-template-deep-surface)_72%,transparent)] text-[var(--template-on-primary)] font-bold text-[13px] leading-[1.2] backdrop-blur-[10px]">
              <span>Open: {featured.title}</span>
              <ArrowUpRight className="flex-none [transition:transform_.3s_ease] group-hover:translate-x-[3px] group-hover:translate-y-[-3px] group-focus-visible:translate-x-[3px] group-focus-visible:translate-y-[-3px]" width={16} height={16} aria-hidden="true" />
            </span>
          </Link>
        )}

        {visiblePosts.length > 0 ? (
          <div className="reference-blog-grid grid grid-cols-3 max-[1100px]:grid-cols-2 max-[620px]:grid-cols-1 gap-[18px]">
            {visiblePosts.map((post, index) => <BlogCard key={post.path} post={post} index={index} />)}
          </div>
        ) : (
          <p className="rounded-[18px] border border-[var(--border)] bg-[var(--surface-alt)] p-6 text-[var(--muted)] text-[15px] leading-[1.75]">No guides in this category yet. Browse <Link href="/blog" className="font-bold"><span className="text-[var(--primary)]">all categories</span></Link> in the meantime.</p>
        )}

        {totalPages > 1 && (
          <nav className="mt-8 flex items-center justify-between gap-4" aria-label="Blog pagination">
            <PagerButton href={blogHref({ category: activeGroup.slug, page: page - 1 })} disabled={!hasPrev}>Previous</PagerButton>
            <span className="text-sm font-bold text-[var(--muted)]">Page {page} of {totalPages}</span>
            <PagerButton href={blogHref({ category: activeGroup.slug, page: page + 1 })} disabled={!hasNext}>Next</PagerButton>
          </nav>
        )}
      </section>
    </div>
  );
}
