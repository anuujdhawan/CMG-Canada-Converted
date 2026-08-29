import Image from "next/image";
import { BadgeCheck, Check, ShieldCheck } from "lucide-react";
import HeroCardShell from "./HeroCardShell";

const PROFILE_POINTS = [
  "Professional guidance & representation",
  "Economic immigration pathways",
  "Family immigration pathways",
  "Express Entry & PNPs",
  "Work & study permits",
  "Family sponsorship",
  "Permanent residence",
  "Temporary residence",
  "Eligibility assessment",
  "Strategic case planning",
  "Properly prepared applications",
];

export default function HeroProfileCard({ ariaLabel = "Vishal Arora, Regulated Canadian Immigration Consultant" }) {
  return (
    <HeroCardShell ariaLabel={ariaLabel} className="hero-profile-card hero-profile-card-shell -translate-y-[50%]" flush>
      <div className="relative h-[145px] overflow-hidden max-[480px]:h-[120px]">
        <Image
          src="/images/team/vishal-arora.jpeg"
          alt="Vishal Arora, RCIC"
          fill
          sizes="(max-width: 880px) 100vw, 440px"
          className="object-cover object-[center_28%]"
          priority={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,12,.02)_20%,rgba(5,4,12,.78)_100%)]" aria-hidden="true" />
        <div className="absolute right-5 bottom-4 left-5 text-[var(--template-on-primary)] max-[480px]:right-4 max-[480px]:bottom-3 max-[480px]:left-4">
          <p className="!m-0 !text-[20px] !font-extrabold !leading-none !tracking-[-.03em] text-[var(--template-on-primary)]">Vishal Arora, RCIC</p>
          <p className="!m-[6px_0_0] !text-[10px] !font-bold !leading-[1.3] !tracking-[.08em] text-[color-mix(in_srgb,var(--template-on-primary)_78%,transparent)] uppercase">Licensed consultant · R711592</p>
        </div>
      </div>

      <div className="hero-profile-card__body flex flex-1 flex-col p-[16px_24px_15px] max-[480px]:p-[14px_17px_13px]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mini-badge inline-flex items-center gap-[6px] rounded-full border border-[color-mix(in_srgb,var(--template-on-primary)_13%,transparent)] bg-[color-mix(in_srgb,var(--template-on-primary)_9%,transparent)] p-[6px_9px_6px_8px] text-[color-mix(in_srgb,var(--template-on-primary)_92%,transparent)] text-[10px] font-extrabold leading-[1.5] tracking-[.06em] uppercase backdrop-blur-[10px] shadow-[inset_0_1px_0_color-mix(in_srgb,var(--template-on-primary)_7%,transparent)]">
            <ShieldCheck className="flex-none text-[var(--cmg-template-primary-bright)]" width={15} height={15} aria-hidden="true" /> RCIC · R711592
          </span>
          <span className="mini-badge inline-flex items-center gap-[6px] rounded-full border border-[color-mix(in_srgb,var(--template-on-primary)_10%,transparent)] bg-[color-mix(in_srgb,var(--template-on-primary)_6%,transparent)] p-[6px_9px_6px_8px] text-[color-mix(in_srgb,var(--template-on-primary)_74%,transparent)] text-[10px] font-bold leading-[1.5] tracking-[.04em] normal-case backdrop-blur-[10px] shadow-[inset_0_1px_0_color-mix(in_srgb,var(--template-on-primary)_7%,transparent)]">
            <BadgeCheck className="flex-none text-[var(--cmg-template-primary-bright)]" width={15} height={15} aria-hidden="true" /> CMG Inc.
          </span>
        </div>

        <h2 className="!mt-3 !max-w-none !text-[clamp(22px,1.8vw,27px)] !leading-[1.1] !tracking-[-0.028em] text-[var(--template-on-primary)] [text-wrap:balance] after:block after:mt-2.5 after:h-0.5 after:w-9 after:rounded-full after:bg-[linear-gradient(90deg,var(--primary),transparent)] after:content-[''] after:opacity-[.95]">Regulated Canadian Immigration Consultant</h2>

        <div className="mt-2.5 grid gap-2 text-[11.5px] leading-[1.4] tracking-[-0.005em] text-[color-mix(in_srgb,var(--template-on-primary)_76%,transparent)] max-[480px]:text-[11px]">
          <p className="!m-0">Client-focused, compliance-driven guidance for individuals and families.</p>
          <p className="!m-[3px_0_0] !text-[10px] !font-extrabold !leading-[1.4] !tracking-[.14em] text-[color-mix(in_srgb,var(--template-on-primary)_62%,transparent)] uppercase">Practice coverage</p>
          <ul className="m-0 grid grid-cols-2 gap-x-4 gap-y-1.5 p-0 list-none max-[480px]:gap-x-3 max-[480px]:gap-y-1">
            {PROFILE_POINTS.map((point) => (
              <li className="flex items-start gap-1.5" key={point}>
                <Check className="mt-px flex-none text-[var(--cmg-template-primary-bright)]" width={12} height={12} aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4 flex items-center gap-1.5 border-t border-[color-mix(in_srgb,var(--template-on-primary)_15%,transparent)] text-[10px] font-bold leading-[1.3] tracking-[.04em] text-[color-mix(in_srgb,var(--template-on-primary)_66%,transparent)] uppercase">
          <ShieldCheck className="flex-none text-[var(--cmg-template-primary-bright)]" width={14} height={14} aria-hidden="true" />
          Client-focused · Compliance-driven
        </div>
      </div>
    </HeroCardShell>
  );
}
