import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, BriefcaseBusiness, FileCheck2, Globe2, GraduationCap, HeartHandshake, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export const VISHAL_ARORA_PROFILE = {
  name: "Vishal Arora, RCIC",
  licence: "R711592",
  role: "Regulated Canadian Immigration Consultant",
  image: "/images/team/vishal-arora.jpeg",
  imageAlt: "Vishal Arora, Regulated Canadian Immigration Consultant",
  intro: "Client-focused, compliance-driven guidance for individuals and families navigating Canadian immigration with clarity and confidence.",
  expertise: [
    {
      title: "Economic immigration",
      detail: "Express Entry, Provincial Nominee Programs and other economic pathways, with eligibility review and profile strategy.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Work & study permits",
      detail: "Work permits, study permits and post-graduation options, with clear planning for temporary status and next steps.",
      icon: GraduationCap,
    },
    {
      title: "Family sponsorship",
      detail: "Spousal, partner, parent and dependent-child sponsorship applications, prepared around eligibility and relationship evidence.",
      icon: HeartHandshake,
    },
    {
      title: "Case strategy",
      detail: "Careful eligibility assessment, document planning and application preparation for complex or time-sensitive files.",
      icon: ShieldCheck,
    },
    {
      title: "Permanent residence",
      detail: "Long-term pathway planning across Express Entry, PNPs and other permanent residence options aligned with settlement goals.",
      icon: FileCheck2,
    },
    {
      title: "Temporary residence",
      detail: "Visitor, study and work permit options shaped around your timeline, eligibility and the evidence needed for a strong application.",
      icon: Globe2,
    },
  ],
};

export default function ConsultantProfileSection({ profile = VISHAL_ARORA_PROFILE, id = "vishal-arora", className = "" }) {
  const titleId = `${id}-title`;
  const expertiseId = `${id}-expertise`;

  return (
    <section
      id={id}
      className={cn(
        "section relative z-[1] overflow-hidden bg-template-surface-alt py-14 max-[1120px]:py-12 max-[880px]:py-10 max-[620px]:py-8",
        className,
      )}
      aria-labelledby={titleId}
    >
      <div className="section-inner mx-auto w-(--container)">
        <article className="relative grid overflow-hidden rounded-3xl border border-template-border bg-template-surface text-template-ink shadow-template-soft before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-[3px] before:bg-template-profile-line before:content-[''] lg:grid-cols-[340px_minmax(0,1fr)]">
          <div className="flex flex-col items-center justify-start p-5 sm:p-6 lg:items-start lg:p-7">
            <div className="relative aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-[18px] border border-template-border bg-template-surface-alt shadow-template-soft">
              <Image
                src={profile.image}
                alt={profile.imageAlt}
                fill
                sizes="(max-width: 1023px) min(80vw, 300px), 300px"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-3 w-full max-w-[300px] rounded-xl border border-template-border bg-template-primary-surface-5 px-3.5 py-3">
              <p className="m-0 text-[9px] font-extrabold uppercase tracking-[.17em] text-template-primary">Licensed RCIC</p>
              <p className="m-[3px_0_0] text-[13px] font-bold leading-tight text-template-ink">{profile.name}</p>
              <p className="m-[3px_0_0] text-[10px] text-template-muted">Licence {profile.licence}</p>
            </div>
          </div>

          <div className="relative p-6 sm:p-7 lg:p-8">
            <div className="pointer-events-none absolute right-[-72px] top-[-82px] size-[190px] rounded-full border border-template-primary-transparent-11" aria-hidden="true" />
            <div className="pointer-events-none absolute right-[-25px] top-[-35px] size-[105px] rounded-full border border-template-primary-transparent-17" aria-hidden="true" />

            <div className="relative">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="m-0 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.18em] text-template-primary before:h-0.5 before:w-7 before:bg-template-primary before:content-[''] sm:text-[11px]">
                    Meet your licensed RCIC
                  </p>
                  <h2 id={titleId} className="!mb-1 !mt-3 !text-[clamp(27px,3vw,40px)] !leading-[1.05] !tracking-[-.035em] !text-template-ink">
                    {profile.name}
                  </h2>
                  <p className="m-0 text-[14px] font-semibold text-template-primary sm:text-[16px]">{profile.role}</p>
                </div>

                <div className="flex shrink-0 items-center gap-2 rounded-full border border-template-border bg-template-primary-surface-6 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.08em] text-template-muted">
                  <ShieldCheck className="h-4 w-4 text-template-primary" aria-hidden="true" />
                  CICC regulated
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-template-border px-3 py-1.5 text-[10px] font-bold tracking-[.04em] text-template-muted">
                  <BadgeCheck className="h-3.5 w-3.5 text-template-primary" aria-hidden="true" />
                  RCIC · {profile.licence}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-template-border px-3 py-1.5 text-[10px] font-bold tracking-[.04em] text-template-muted">
                  <ShieldCheck className="h-3.5 w-3.5 text-template-primary" aria-hidden="true" />
                  Commonwealth Migration Group
                </span>
              </div>

              <p className="m-[18px_0_0] max-w-[760px] text-[13px] leading-[1.65] text-template-muted sm:text-[14px]">{profile.intro}</p>

              <div className="mt-5 border-t border-template-border pt-5" aria-labelledby={expertiseId}>
                <h3 id={expertiseId} className="!m-0 !text-[10px] !font-extrabold uppercase !tracking-[.18em] !text-template-primary sm:!text-[11px]">Areas of expertise</h3>
                <div className="mt-3 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {profile.expertise.map(({ title, detail, icon: Icon }) => (
                    <div key={title} className="flex gap-2.5 border-b border-template-border pb-2.5">
                      <Icon className="mt-0.5 h-[17px] w-[17px] flex-none text-template-primary" aria-hidden="true" />
                      <div>
                        <h4 className="!m-0 !text-[13px] !font-bold !leading-tight !text-template-ink">{title}</h4>
                        <p className="!m-[4px_0_0] !text-[11px] !leading-[1.45] !text-template-muted">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <Link
                  href={site.ctas.primary.href}
                  className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-template-primary px-3.5 py-2.5 text-[11px] font-extrabold text-template-on-primary transition-transform hover:-translate-y-0.5 hover:bg-template-accent"
                >
                  Book a consultation
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
