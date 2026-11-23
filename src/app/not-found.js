import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page not found",
  description: "The page you’re looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="cmg-not-found" aria-labelledby="not-found-title">
      <div className="cmg-not-found__card">
        <p className="cmg-not-found__eyebrow">
          <span aria-hidden="true" />
          404 · PAGE NOT FOUND
        </p>
        <h1 id="not-found-title">We couldn’t find that page.</h1>
        <p className="cmg-not-found__message">
          The link may have changed, or the page may have moved. Start again from
          the homepage or browse our immigration guides.
        </p>
        <div className="cmg-not-found__actions">
          <Link className="cmg-not-found__home" href="/">
            <ArrowLeft aria-hidden="true" />
            Go to homepage
          </Link>
          <Link className="cmg-not-found__guides" href="/blog">
            Browse immigration guides
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <p className="cmg-not-found__help">
          Need help finding something? <Link href="/contact">Contact our team</Link>
        </p>
      </div>
    </section>
  );
}
