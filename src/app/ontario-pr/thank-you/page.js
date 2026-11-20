import { ArrowRight, CalendarCheck, Clock3, MessageCircle, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";
import { whatsappUrl } from "@/config/whatsapp";
import { buildMetadata } from "@/lib/seo";
import "@/styles/ontario-pr.css";

const pagePath = "/ontario-pr/thank-you";

export const metadata = buildMetadata({
  title: "Thank You | Ontario PR Consultation | CMG",
  description: "Your Ontario PR consultation request has been received. Our team will contact you within one business day.",
  path: pagePath,
  noIndex: true,
});

const whatsappMessage = "Hi, I submitted a request for a free consultation about Canada PR through Ontario.";
const whatsappHref = whatsappUrl
  ? `${whatsappUrl}${whatsappUrl.includes("?") ? "&" : "?"}text=${encodeURIComponent(whatsappMessage)}`
  : "";

export default function OntarioPrThankYouPage() {
  return (
    <div className="op-page op-thank-you">
      <section className="op-thank-you__section">
        <div className="op-wrap op-thank-you__grid">
          <div className="op-thank-you__copy">
            <p className="op-eyebrow">Your next step</p>
            <h1>Find out where you actually stand</h1>
            <p>
              Thirty minutes, no cost, no obligation. A licensed RCIC reviews your profile and talks through which route may fit, what is missing and what could change the answer.
            </p>
            <div className="op-final-trust op-thank-you__trust">
              <span>
                <Clock3 size={19} aria-hidden="true" />
                <strong>30 minutes</strong>
                <small>Focused on your profile</small>
              </span>
              <span>
                <ShieldCheck size={19} aria-hidden="true" />
                <strong>Licensed RCIC</strong>
                <small>Regulated representation</small>
              </span>
            </div>
          </div>

          <div className="op-thank-you__card" role="status" aria-live="polite">
            <span className="op-thank-you__icon">
              <CalendarCheck size={22} aria-hidden="true" />
            </span>
            <p className="op-eyebrow">Request received</p>
            <h2>Your consultation request is in</h2>
            <p className="op-thank-you__message">
              Our team will contact you within one business day to confirm your free 30-minute time. You can also call or message us to arrange it.
            </p>
            <div className="op-thank-you__actions">
              <a className="op-button op-button--primary" href={site.phoneHref}>
                <span>Call {site.phone}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              {whatsappHref ? (
                <a className="op-button op-button--secondary" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={17} aria-hidden="true" />
                  Message us on WhatsApp
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
