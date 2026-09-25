import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, FileCheck2, Globe2, GraduationCap, HeartHandshake, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Google Calendar product mark (the official 2020 icon, paths unchanged).
 *
 * Deliberately full-colour and un-recoloured: the brand colours *are* the
 * affordance. It reads as "this booking runs through Google Calendar", so it is
 * only accurate while that is how appointments are actually scheduled.
 */
function GoogleCalendarMark({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <g transform="translate(3.75 3.75)">
        <path fill="#FFFFFF" d="M148.882,43.618l-47.368-5.263l-57.895,5.263L38.355,96.25l5.263,52.632l52.632,6.579l52.632-6.579l5.263-53.947L148.882,43.618z" />
        <path fill="#1A73E8" d="M65.211,125.276c-3.934-2.658-6.658-6.539-8.145-11.671l9.132-3.763c0.829,3.158,2.276,5.605,4.342,7.342c2.053,1.737,4.553,2.592,7.474,2.592c2.987,0,5.553-0.908,7.697-2.724s3.224-4.132,3.224-6.934c0-2.868-1.132-5.211-3.395-7.026s-5.105-2.724-8.5-2.724h-5.276v-9.039H76.5c2.921,0,5.382-0.789,7.382-2.368c2-1.579,3-3.737,3-6.487c0-2.447-0.895-4.395-2.684-5.855s-4.053-2.197-6.803-2.197c-2.684,0-4.816,0.711-6.395,2.145s-2.724,3.197-3.447,5.276l-9.039-3.763c1.197-3.395,3.395-6.395,6.618-8.987c3.224-2.592,7.342-3.895,12.342-3.895c3.697,0,7.026,0.711,9.974,2.145c2.947,1.434,5.263,3.421,6.934,5.947c1.671,2.539,2.5,5.382,2.5,8.539c0,3.224-0.776,5.947-2.329,8.184c-1.553,2.237-3.461,3.947-5.724,5.145v0.539c2.987,1.25,5.421,3.158,7.342,5.724c1.908,2.566,2.868,5.632,2.868,9.211s-0.908,6.776-2.724,9.579c-1.816,2.803-4.329,5.013-7.513,6.618c-3.197,1.605-6.789,2.421-10.776,2.421C73.408,129.263,69.145,127.934,65.211,125.276z" />
        <path fill="#1A73E8" d="M121.25,79.961l-9.974,7.25l-5.013-7.605l17.987-12.974h6.895v61.197h-9.895L121.25,79.961z" />
        <path fill="#EA4335" d="M148.882,196.25l47.368-47.368l-23.684-10.526l-23.684,10.526l-10.526,23.684L148.882,196.25z" />
        <path fill="#34A853" d="M33.092,172.566l10.526,23.684h105.263v-47.368H43.618L33.092,172.566z" />
        <path fill="#4285F4" d="M12.039-3.75C3.316-3.75-3.75,3.316-3.75,12.039v136.842l23.684,10.526l23.684-10.526V43.618h105.263l10.526-23.684L148.882-3.75H12.039z" />
        <path fill="#188038" d="M-3.75,148.882v31.579c0,8.724,7.066,15.789,15.789,15.789h31.579v-47.368H-3.75z" />
        <path fill="#FBBC04" d="M148.882,43.618v105.263h47.368V43.618l-23.684-10.526L148.882,43.618z" />
        <path fill="#1967D2" d="M196.25,43.618V12.039c0-8.724-7.066-15.789-15.789-15.789h-31.579v47.368H196.25z" />
      </g>
    </svg>
  );
}

/**
 * Profile of the licensed RCIC behind the practice.
 *
 * Identity fields are derived from `site.rcic` rather than typed in here, so the
 * licence number and the CICC register link cannot drift apart.
 *
 * `image` and `booking` are per-profile and deliberately not read from `site.rcic`:
 * they belong to whichever consultant this block is rendering, so a caller passing
 * its own `profile` must pass its own headshot and its own booking link rather than
 * inheriting this one. The image is 4:5 (900×1125), which is the frame the left rail
 * crops to.
 */
export const LICENSED_RCIC_PROFILE = {
  name: site.rcic.consultant.nameWithCredential,
  licence: site.rcic.number,
  status: site.rcic.consultant.status,
  role: site.rcic.consultant.role,
  profileUrl: site.rcic.profileUrl,
  image: {
    src: "/images/team/pankaj-khanna.webp",
    alt: "Pankaj Khanna, RCIC — Regulated Canadian Immigration Consultant",
    width: 900,
    height: 1125,
  },
  // Sits beside the general "Book a consultation" CTA as an annotation on it,
  // not as a second route: it is deliberately not a link, so there is no `url`.
  // The left arrow points back at the button, which is what makes the two read
  // as one action.
  booking: {
    label: "Book With Pankaj",
  },
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

export default function ConsultantProfileSection({ profile = LICENSED_RCIC_PROFILE, id = "licensed-rcic", className = "" }) {
  const titleId = `${id}-title`;
  const expertiseId = `${id}-expertise`;
  const booking = profile.booking;

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
            {/* The headshot leads the rail so the credential card below reads as
                its caption rather than as a standalone panel. The frame mirrors
                that card (same radius, border and tint) so the two stack as one
                unit. A profile passed without an `image` renders no photo at all
                — there is deliberately no shared fallback headshot. */}
            {profile.image ? (
              <Image
                src={profile.image.src}
                alt={profile.image.alt}
                width={profile.image.width}
                height={profile.image.height}
                sizes="(min-width: 1024px) 284px, 300px"
                className="w-full max-w-[300px] rounded-xl border border-template-border bg-template-primary-surface-5 object-cover"
              />
            ) : null}
            <div className="mt-3 w-full max-w-[300px] rounded-xl border border-template-border bg-template-primary-surface-5 px-3.5 py-3">
              <p className="m-0 text-[9px] font-extrabold uppercase tracking-[.17em] text-template-primary">Licensed RCIC</p>
              <p className="m-[3px_0_0] text-[13px] font-bold leading-tight text-template-ink">{profile.name}</p>
              <p className="m-[5px_0_0] text-[11px] font-semibold leading-tight text-template-muted">Licence No. {profile.licence}</p>
              <p className="m-[7px_0_0] flex items-center gap-1.5 text-[9.5px] font-extrabold uppercase tracking-[.08em] text-template-primary">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>{profile.status}</span>
              </p>
              {/* The trust claim is only worth making if it is one click from the
                  regulator's own record. Colour goes on the inner span because
                  `.cmg-template-home a { color: inherit }` is unlayered and wins
                  over text-colour utilities on the <a> itself. */}
              <div className="mt-3 border-t border-template-border pt-3">
                <a href={profile.profileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[.06em] no-underline">
                  <span className="text-template-primary underline underline-offset-2">Verify on the CICC register</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-template-primary" aria-hidden="true" />
                </a>
              </div>
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

                <a href={profile.profileUrl} target="_blank" rel="noopener noreferrer" className="flex shrink-0 items-center gap-2 rounded-full border border-template-border bg-template-primary-surface-6 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.08em] no-underline transition-colors hover:border-template-primary">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-template-primary" aria-hidden="true" />
                  <span className="text-template-muted">CICC regulated · {profile.licence}</span>
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
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

                {/* Informational tab, not a control — it annotates the button to
                    its left rather than offering a second destination, so it is
                    a <span>: nothing to click, nothing to focus, and no href that
                    could drift out of sync with the button. The arrow carries the
                    relationship, so it is coloured to match the button it points
                    at; colour goes on the inner <span> because
                    `.cmg-template-home a { color: inherit }` is unlayered and
                    beats text-colour utilities on the element itself. */}
                {booking?.label ? (
                  <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-template-border bg-template-primary-surface-6 px-3.5 py-2.5 text-[11px] font-extrabold">
                    <ArrowLeft className="h-4 w-4 shrink-0 text-template-primary" aria-hidden="true" />
                    <GoogleCalendarMark className="h-4 w-4 shrink-0" />
                    <span className="text-template-ink">{booking.label}</span>
                  </span>
                ) : null}
              </div>

            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
