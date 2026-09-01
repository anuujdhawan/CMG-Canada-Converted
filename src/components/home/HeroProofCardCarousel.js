import HeroProofCard from "./HeroProofCard";

export default function HeroProofCardCarousel({ ariaLabel = "Commonwealth Migration Group highlights" }) {
  return (
    <div
      className="hero-proof-card-carousel relative min-h-[530px] w-full max-[880px]:min-h-0"
      role="region"
      aria-label={ariaLabel}
    >
      <HeroProofCard />
    </div>
  );
}
