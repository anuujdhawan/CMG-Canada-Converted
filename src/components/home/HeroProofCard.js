import Link from "next/link";
import { Check, MapPin, ShieldCheck } from "lucide-react";

const CICC_REGISTER_URL = "https://register.college-ic.ca/Public-Register-EN/Licensee/Profile.aspx?ID=18715";

const HANDLED_FILES = [
  "Express Entry refusals (CRS, eligibility)",
  "Provincial Nominee Program (PNP) refusals",
  "Study permit & PGWP refusals",
  "Spousal & family sponsorship refusals",
  "LMIA & work permit refusals",
  "Judicial review referrals",
];

export default function HeroProofCard({ ariaLabel = "Track record and files we handle" }) {
  return (
    <article className="visual-card hero-proof-card -translate-y-[50%] hover:!translate-y-[calc(-50%-2px)] absolute isolate overflow-hidden rounded-[24px] border border-[rgba(255,255,255,.22)] bg-[linear-gradient(135deg,rgba(255,255,255,.14),rgba(255,255,255,.03)_38%,rgba(164,31,73,.12)_100%),rgba(18,16,28,.24)] text-[var(--template-on-primary)] shadow-[0_18px_44px_rgba(5,4,12,.28),inset_0_1px_0_rgba(255,255,255,.2),inset_0_0_0_1px_rgba(255,255,255,.04)] backdrop-blur-[50px] backdrop-saturate-[1.55] backdrop-contrast-[1.05] [-webkit-backdrop-filter:blur(50px)_saturate(1.55)_contrast(1.05)] [transition:transform_420ms_cubic-bezier(.16,1,.3,1),box-shadow_420ms_ease,border-color_420ms_ease] top-1/2 right-0 bottom-auto left-auto w-[86%] max-w-[440px] !p-[22px_24px_20px] max-[880px]:!static max-[880px]:!top-auto max-[880px]:!right-auto max-[880px]:!bottom-auto max-[880px]:!left-auto max-[880px]:!w-auto max-[880px]:!transform-none max-[880px]:!border-transparent max-[880px]:!shadow-[0_18px_44px_rgba(5,4,12,.28)] max-[880px]:before:!hidden max-[880px]:!p-[20px_20px_19px] max-[480px]:!p-[17px_17px_16px]" aria-label={ariaLabel}>
      <div className="mini-badges flex flex-wrap items-center gap-2">
        <Link href={CICC_REGISTER_URL} target="_blank" rel="noopener noreferrer" className="mini-badge inline-flex items-center gap-[7px] rounded-full border border-[color-mix(in_srgb,var(--template-on-primary)_13%,transparent)] bg-[color-mix(in_srgb,var(--template-on-primary)_9%,transparent)] p-[7px_11px_7px_9px] text-[color-mix(in_srgb,var(--template-on-primary)_92%,transparent)] text-[11px] font-extrabold leading-[1.65] tracking-[.07em] uppercase backdrop-blur-[10px] shadow-[inset_0_1px_0_color-mix(in_srgb,var(--template-on-primary)_7%,transparent)]">
          <ShieldCheck className="flex-none text-[var(--cmg-template-primary-bright)] drop-shadow-[0_1px_8px_color-mix(in_srgb,var(--template-primary)_42%,transparent)]" width={15} height={15} aria-hidden="true" /> CICC-regulated
        </Link>
        <span className="mini-badge inline-flex items-center gap-[7px] rounded-full border border-[color-mix(in_srgb,var(--template-on-primary)_10%,transparent)] bg-[color-mix(in_srgb,var(--template-on-primary)_6%,transparent)] p-[7px_11px_7px_9px] text-[color-mix(in_srgb,var(--template-on-primary)_74%,transparent)] text-[11px] font-bold leading-[1.65] tracking-[.04em] normal-case backdrop-blur-[10px] shadow-[inset_0_1px_0_color-mix(in_srgb,var(--template-on-primary)_7%,transparent)]"><MapPin className="flex-none text-[var(--cmg-template-primary-bright)] drop-shadow-[0_1px_8px_color-mix(in_srgb,var(--template-primary)_42%,transparent)]" width={15} height={15} aria-hidden="true" /> Canada-wide</span>
      </div>
      <h2 className="!mt-4 !max-w-none !text-[clamp(25px,2.2vw,31px)] !leading-[1.15] !tracking-[-0.028em] text-[var(--template-on-primary)] [text-wrap:balance] after:block after:mt-3 after:h-0.5 after:w-9 after:rounded-full after:bg-[linear-gradient(90deg,var(--primary),transparent)] after:content-[''] after:opacity-[.95]">Our track record</h2>
      <p className="!mt-3 !max-w-none !text-[13px] !leading-[1.65] !tracking-[-0.01em] text-[color-mix(in_srgb,var(--template-on-primary)_74%,transparent)] max-[480px]:!mt-[5px] max-[480px]:!text-[12px] max-[480px]:!leading-[1.4]">A decade of files, decisions and outcomes across every major Canadian pathway.</p>
      <div className="visual-record grid mt-3 border-t border-[color-mix(in_srgb,var(--template-on-primary)_15%,transparent)] max-[880px]:mt-2.5 max-[480px]:mt-2" aria-label="Track record highlights">
        <div className="visual-record__row grid min-h-12 grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] items-center gap-2.5 border-b border-[color-mix(in_srgb,var(--template-on-primary)_15%,transparent)] max-[880px]:min-h-10 max-[480px]:min-h-[34px] max-[480px]:gap-2"><span className="text-[color-mix(in_srgb,var(--template-on-primary)_66%,transparent)] text-[12px] leading-[1.25] max-[480px]:text-[11px]">Cases since 2016</span><strong className="text-[var(--template-on-primary)] text-[clamp(22px,2.1vw,30px)] font-extrabold leading-none tracking-[-0.028em] text-right max-[880px]:!text-[19px] max-[480px]:!text-[16px]">10,000+</strong></div>
        <div className="visual-record__row grid min-h-12 grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] items-center gap-2.5 border-b border-[color-mix(in_srgb,var(--template-on-primary)_15%,transparent)] max-[880px]:min-h-10 max-[480px]:min-h-[34px] max-[480px]:gap-2"><span className="text-[color-mix(in_srgb,var(--template-on-primary)_66%,transparent)] text-[12px] leading-[1.25] max-[480px]:text-[11px]">File reviews</span><strong className="text-[var(--template-on-primary)] text-[clamp(22px,2.1vw,30px)] font-extrabold leading-none tracking-[-0.028em] text-right max-[880px]:!text-[19px] max-[480px]:!text-[16px]">100%</strong></div>
        <div className="visual-record__row grid min-h-12 grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] items-center gap-2.5 border-b border-[color-mix(in_srgb,var(--template-on-primary)_15%,transparent)] max-[880px]:min-h-10 max-[480px]:min-h-[34px] max-[480px]:gap-2"><span className="text-[color-mix(in_srgb,var(--template-on-primary)_66%,transparent)] text-[12px] leading-[1.25] max-[480px]:text-[11px]">Urgent deadlines</span><strong className="text-[var(--template-on-primary)] text-[clamp(22px,2.1vw,30px)] font-extrabold leading-none tracking-[-0.028em] text-right max-[880px]:!text-[19px] max-[480px]:!text-[16px]">Same-day</strong></div>
      </div>
      <p className="visual-card__section-label !m-[12px_0_8px] !text-[13px] !font-extrabold !leading-[1.65] !tracking-[.12em] text-[color-mix(in_srgb,var(--template-on-primary)_68%,transparent)] uppercase">What we handle</p>
      <ul className="visual-handles grid gap-[5px] m-0 p-0 list-none max-[480px]:gap-1">
        {HANDLED_FILES.map((item) => <li className="flex items-start gap-[7px] text-[color-mix(in_srgb,var(--template-on-primary)_78%,transparent)] text-[11px] leading-[1.25] max-[880px]:text-[12px] max-[480px]:gap-[6px] max-[480px]:text-[11px]" key={item}><Check className="mt-px flex-none text-[var(--cmg-template-primary-bright)] drop-shadow-[0_1px_8px_color-mix(in_srgb,var(--template-primary)_36%,transparent)] max-[480px]:h-[13px] max-[480px]:w-[13px]" width={15} height={15} aria-hidden="true" />{item}</li>)}
      </ul>
      <div className="visual-card__footer flex flex-wrap items-baseline justify-between gap-x-3 gap-y-2 mt-[18px] border-t border-[color-mix(in_srgb,var(--template-on-primary)_15%,transparent)] pt-[14px] text-[color-mix(in_srgb,var(--template-on-primary)_66%,transparent)] text-[12px] leading-[1.35] max-[480px]:mt-[10px] max-[480px]:pt-2 max-[480px]:text-[10.5px]">
        <span>Commonwealth Migration Group Inc</span>
        <strong className="font-bold text-[color-mix(in_srgb,var(--template-on-primary)_86%,transparent)] text-right">CICC-Regulated Practice</strong>
      </div>
    </article>
  );
}
