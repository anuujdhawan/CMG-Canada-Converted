const HERO_CARD_CLASS_NAME = "visual-card hero-card-shell flex flex-col absolute isolate overflow-hidden min-h-[560px] rounded-[24px] border border-[rgba(255,255,255,.22)] bg-[linear-gradient(135deg,rgba(255,255,255,.14),rgba(255,255,255,.03)_38%,rgba(164,31,73,.12)_100%),rgba(18,16,28,.24)] text-[var(--template-on-primary)] shadow-[0_18px_44px_rgba(5,4,12,.28),inset_0_1px_0_rgba(255,255,255,.2),inset_0_0_0_1px_rgba(255,255,255,.04)] backdrop-blur-[50px] backdrop-saturate-[1.55] backdrop-contrast-[1.05] [-webkit-backdrop-filter:blur(50px)_saturate(1.55)_contrast(1.05)] [transition:transform_420ms_cubic-bezier(.16,1,.3,1),box-shadow_420ms_ease,border-color_420ms_ease] top-1/2 right-0 bottom-auto left-auto w-[86%] max-w-[440px] hover:!translate-y-[calc(-50%-2px)] max-[880px]:!static max-[880px]:!top-auto max-[880px]:!right-auto max-[880px]:!bottom-auto max-[880px]:!left-auto max-[880px]:!w-full max-[880px]:!min-h-[440px] max-[880px]:!translate-y-0 max-[880px]:!mx-auto max-[880px]:!border-transparent max-[880px]:!shadow-[0_18px_44px_rgba(5,4,12,.28)] max-[880px]:before:!hidden";
const HERO_CARD_PADDING_CLASS_NAME = "!p-[22px_24px_20px] max-[880px]:!p-[20px_20px_19px] max-[480px]:!p-[17px_17px_16px]";

export default function HeroCardShell({ ariaLabel, children, className = "", flush = false }) {
  return (
    <article className={`${HERO_CARD_CLASS_NAME} ${flush ? "!p-0 max-[880px]:!p-0 max-[480px]:!p-0" : HERO_CARD_PADDING_CLASS_NAME} ${className}`.trim()} aria-label={ariaLabel}>
      {children}
    </article>
  );
}
