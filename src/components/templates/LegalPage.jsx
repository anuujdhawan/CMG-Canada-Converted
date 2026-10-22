import { Block } from "@/components/templates/MarkdownBlocks";

export default function LegalPage({ page }) {
  const legalBlock = page.contentBlocks?.find((block) => block.type === "legalText");

  return (
    <div className="cmg-template-home bg-[var(--bg)] text-[var(--ink)] [--container:min(980px,calc(100%-40px))] max-[620px]:[--container:calc(100%-28px)]">
      <main className="mx-auto w-[var(--container)] py-28 max-[620px]:py-20" aria-labelledby="legal-page-title">
        <header className="border-b border-[var(--border)] pb-8">
          <p className="eyebrow m-0 mb-4 text-[var(--primary)] text-xs font-extrabold uppercase tracking-[.16em]">Website policy</p>
          <h1 id="legal-page-title" className="!m-0 text-[clamp(34px,4vw,56px)] !leading-[1.05]">{page.h1}</h1>
        </header>
        <article className="mx-auto max-w-[860px] pt-8">
          {legalBlock ? <Block block={legalBlock} page={page} /> : <p className="text-[var(--muted)]">This policy is currently unavailable.</p>}
        </article>
      </main>
    </div>
  );
}
