import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Stripe from "stripe";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/config/site";

const pagePath = "/pay/success";

export const metadata = buildMetadata({
  title: "Payment Status",
  description: "Check the status of your payment.",
  path: pagePath,
  noIndex: true,
});

export const dynamic = "force-dynamic";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  return key ? new Stripe(key) : null;
}

async function getPaymentState(sessionId) {
  if (!sessionId || typeof sessionId !== "string") return "missing";

  const stripe = getStripe();
  if (!stripe) return "unavailable";

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status === "paid") return "paid";
    if (session.status === "expired") return "expired";
    return "unconfirmed";
  } catch {
    return "invalid";
  }
}

function PaymentStatusMessage({ state }) {
  if (state === "paid") {
    return (
      <>
        <CheckCircle2 className="mx-auto h-12 w-12 text-success" aria-hidden />
        <h1 className="mt-5 text-3xl font-bold text-ink md:text-4xl">Payment Received</h1>
        <p className="mt-3 text-[15px] text-muted">
          Thank you — Stripe has confirmed your payment. If you have any questions, contact us at{" "}
          <a href={site.emailHref} className="font-semibold text-secondary underline underline-offset-2">
            {site.email}
          </a>
          .
        </p>
      </>
    );
  }

  const message = {
    expired: "This Checkout Session has expired. Please return to the payment page to start again.",
    unavailable: "We could not verify the payment right now. Please check your Stripe receipt or contact us before trying again.",
    invalid: "This payment link is invalid or could not be verified. Please contact us so we can confirm the payment status.",
    missing: "No payment session was provided. Please return to the payment page after completing Checkout.",
    unconfirmed: "Stripe has not confirmed this payment yet. Please do not pay again until you check your Stripe receipt or contact us.",
  }[state] || "We could not confirm this payment. Please contact us before trying again.";

  return (
    <>
      <h1 className="mt-5 text-3xl font-bold text-ink md:text-4xl">Payment Not Confirmed</h1>
      <p className="mt-3 text-[15px] text-muted">{message}</p>
      <p className="mt-3 text-[15px] text-muted">
        Contact us at{" "}
        <a href={site.emailHref} className="font-semibold text-secondary underline underline-offset-2">
          {site.email}
        </a>
        {" "}if you need help.
      </p>
    </>
  );
}

export default async function PaySuccessPage({ searchParams }) {
  const params = await searchParams;
  const sessionId = Array.isArray(params?.session_id) ? params.session_id[0] : params?.session_id;
  const state = await getPaymentState(sessionId);

  return (
    <main className="mx-auto max-w-xl px-5 pt-[168px] pb-20 text-center md:px-8 md:pb-28">
      <PaymentStatusMessage state={state} />
      <Link
        href={state === "paid" ? "/" : "/contact/pay-immigration-consultation-canada"}
        className="mt-8 inline-flex items-center justify-center rounded-brand-lg bg-primary px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        {state === "paid" ? "Back to Home" : "Return to Payment Page"}
      </Link>
    </main>
  );
}
