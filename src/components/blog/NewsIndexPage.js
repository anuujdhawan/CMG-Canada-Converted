import Link from "next/link";
import { ArrowUpRight, BookOpen, CalendarDays, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";
import { getNewsPosts } from "@/lib/blog";
import BlogCard from "./BlogCard";
import BlogHero, { TemplateLink } from "./BlogHero";
import TemplateMotion from "@/components/home/TemplateMotion";

/**
 * Canada immigration news index.
 *
 * Rebuilt on the shared blog shell. The previous version was hand-written
 * markup rendered outside `.cmg-template-home` — the class that defines the
 * theme tokens and switches the header to the template skin — so it shipped
 * with an oversized, differently-styled navbar, invisible borders and
 * backgrounds, and no light/dark response at all.
 */
export default function NewsIndexPage({ lead }) {
  const posts = getNewsPosts();

  return (
    <div className="cmg-template-home cmg-template-blog relative overflow-hidden bg-[var(--bg)] text-[var(--ink)] text-base leading-[1.65] [--container:min(1220px,calc(100%-40px))] max-[1120px]:[--container:min(1220px,calc(100%-32px))] max-[620px]:[--container:calc(100%-28px)] max-[620px]:text-[15px]" data-concept="nocturne">
      <TemplateMotion />

      <BlogHero
        eyebrow="Resources · Canada immigration news"
        title="Canada immigration news and IRCC updates"
        lead={lead}
        chips={[
          { icon: ShieldCheck, label: "Licensed RCIC insight" },
          { icon: CalendarDays, label: `${posts.length} policy updates` },
          { icon: BookOpen, label: "Every claim sourced" },
        ]}
        actions={
          <>
            <TemplateLink path={site.ctas.primary.href} className="btn btn-primary">
              Book a Consultation
              <ArrowUpRight width={18} height={18} aria-hidden="true" />
            </TemplateLink>
            <TemplateLink path="/blog" className="btn btn-secondary">
              Browse all guides
              <ArrowUpRight width={18} height={18} aria-hidden="true" />
            </TemplateLink>
          </>
        }
      />

      <section className="section relative z-[1] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 reference-blog-library" id="updates">
        <div className="section-inner mx-auto w-[var(--container)]">
          <header className="section-head grid grid-cols-[.72fr_.42fr] max-[880px]:grid-cols-1 items-end gap-[50px] max-[880px]:gap-[17px] mb-[52px] max-[880px]:mb-[38px] reveal">
            <div>
              <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] uppercase">Latest updates</p>
              <h2 className="max-w-[720px]">What changed, and who it affects</h2>
            </div>
            <p className="max-w-[430px] text-[var(--muted)] text-[16px] leading-[1.75]">Each update links to the official source it is based on. Immigration rules move quickly, so confirm the current wording before you act.</p>
          </header>

          {posts.length > 0 ? (
            <div className="reference-blog-grid grid grid-cols-3 max-[1100px]:grid-cols-2 max-[620px]:grid-cols-1 gap-[18px]">
              {posts.map((post, index) => <BlogCard key={post.path} post={post} index={index} />)}
            </div>
          ) : (
            <p className="rounded-[18px] border border-[var(--border)] bg-[var(--surface-alt)] p-6 text-[var(--muted)] text-[15px] leading-[1.75]">
              No updates are published yet. Browse{" "}
              <Link href="/blog" className="font-bold"><span className="text-[var(--primary)]">the full guide library</span></Link>{" "}
              in the meantime.
            </p>
          )}
        </div>
      </section>

      <section className="cta-section reference-blog-cta !bg-[linear-gradient(120deg,var(--primary),color-mix(in_srgb,var(--primary)_56%,var(--accent)),var(--accent))] py-[72px]">
        <div className="cta-shell flex items-center justify-between max-[880px]:items-start max-[880px]:flex-col w-[var(--container)] gap-10 mx-auto p-0 rounded-none bg-transparent">
          <div>
            <h2 className="!text-[clamp(30px,1.8rem+2.2vw,46px)] max-[880px]:!text-[clamp(30px,5.2vw,40px)] max-[620px]:!text-[clamp(29px,8.6vw,35px)] !leading-none text-[var(--template-on-primary)]">Not sure how an update affects your file?</h2>
            <p className="!mt-[12px] max-w-[650px] !text-[16px] text-[var(--template-on-primary)]">Bring the change you are worried about, your status and your timeline to a focused consultation with a licensed Canadian immigration team.</p>
          </div>
          <TemplateLink path={site.ctas.primary.href} className="btn !flex-none !px-6 !py-[17px] bg-[var(--template-on-primary)] text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-[var(--template-on-primary)]">
            Book a Consultation
            <ArrowUpRight width={19} height={19} aria-hidden="true" />
          </TemplateLink>
        </div>
      </section>
    </div>
  );
}
