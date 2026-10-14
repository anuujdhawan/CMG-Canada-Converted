import Image from "next/image";

/**
 * Fixed hero wallpaper shared by every page that uses the CMG hero layout.
 * The carousel remains available in HeroCarousel.js for later reuse, but the
 * live site currently uses one consistent image across all hero sections.
 */
export default function HeroBackground() {
  return (
    <div className="hero-background-image absolute inset-0 z-[-3] min-h-full overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--secondary)] shadow-[var(--shadow)]" aria-hidden="true">
      <Image
        src="/images/hero/toronto-skyline-autumn-park.webp"
        alt=""
        fill
        priority
        quality={60}
        sizes="(max-width: 880px) 100vw, 1440px"
        className="absolute inset-0 scale-[1.055] object-cover object-center brightness-[1.06] contrast-[1.04] saturate-[1.08]"
      />
      <div className="hero-background-image__wash absolute inset-0" />
    </div>
  );
}
