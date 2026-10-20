import { getPnpDrawFeed } from "@/lib/pnpDraws";
import HeroProofCardCarouselClient from "./HeroProofCardCarouselClient";

export default function HeroProofCardCarousel(props) {
  const initialPnpDraws = getPnpDrawFeed().draws.slice(0, 3);
  return <HeroProofCardCarouselClient {...props} initialPnpDraws={initialPnpDraws} />;
}
