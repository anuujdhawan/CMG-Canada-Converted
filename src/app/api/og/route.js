/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { site } from "@/config/site";
import { getPage } from "@/lib/sitePages";
import { normalizePageTitle } from "@/lib/seo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WIDTH = 1200;
const HEIGHT = 630;
// ImageResponse's renderer does not decode WebP consistently in the Node
// runtime, so these small social-generator copies use JPEG/PNG. The live
// page still serves the WebP hero through Next Image.
const HERO_IMAGE = "/images/social/hero-background-v1.jpg";
const LOGO_IMAGE = "/images/social/cmg-logo-og.png";

function compactText(value, limit = 230) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (text.length <= limit) return text;
  return `${text.slice(0, limit - 1).replace(/\s+\S*$/, "")}…`;
}

function heroLead(page) {
  if (page?.hero && typeof page.hero === "object") return page.hero.lead || "";
  if (typeof page?.hero === "string") {
    const paragraphs = page.hero
      .split(/\n\s*\n/)
      .map((value) => value.replace(/^#+\s*/, "").replace(/\s+/g, " ").trim())
      .filter(Boolean);
    if (paragraphs.length > 1) return paragraphs.slice(1).join(" ");
  }
  return page?.seo?.description || page?.description || site.meta.defaultDescription;
}

function getPageForPath(pathname) {
  const normalized = String(pathname || "/").replace(/[?#].*$/, "") || "/";
  return getPage(normalized);
}

export async function GET(request) {
  const requestUrl = new URL(request.url);
  const pathname = requestUrl.searchParams.get("path") || "/";
  const page = getPageForPath(pathname);
  const title = normalizePageTitle(page?.h1 || page?.seo?.title || site.meta.defaultTitle);
  const lead = compactText(heroLead(page));
  const origin = requestUrl.origin;
  const heroImageUrl = `${origin}${HERO_IMAGE}`;
  const logoImageUrl = `${origin}${LOGO_IMAGE}`;
  const titleSize = title.length > 72 ? 39 : title.length > 54 ? 45 : 52;

  const imageResponse = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#15131d",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <img
          src={heroImageUrl}
          alt=""
          width={WIDTH}
          height={HEIGHT}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: WIDTH,
            height: HEIGHT,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: WIDTH,
            height: HEIGHT,
            display: "flex",
            background: "linear-gradient(90deg, rgba(8,8,16,.88) 0%, rgba(8,8,16,.56) 56%, rgba(8,8,16,.30) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 22,
            left: 42,
            right: 42,
            height: 62,
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            borderRadius: 17,
            background: "rgba(3,5,12,.92)",
            border: "1px solid rgba(255,255,255,.14)",
          }}
        >
          <img src={logoImageUrl} alt="CMG" width={188} height={112} style={{ width: 94, height: 56, objectFit: "contain" }} />
          <div style={{ display: "flex", marginLeft: 28, gap: 25, color: "rgba(255,255,255,.82)", fontSize: 13 }}>
            <span style={{ color: "#ffffff", fontWeight: 700 }}>Home</span>
            <span>Immigrate</span>
            <span>Work &amp; Study</span>
            <span>Resources</span>
            <span>About</span>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              padding: "12px 17px",
              borderRadius: 10,
              background: "#b51235",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            Book a Consultation
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: 132,
            left: 62,
            width: 645,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", color: "#f26a7f", fontSize: 12, fontWeight: 700, letterSpacing: 2.4 }}>
            <span style={{ width: 38, height: 2, marginRight: 14, background: "#f26a7f" }} />
            BRAMPTON-BASED · ONLINE CONSULTATIONS WORLDWIDE
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: titleSize, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.8, textShadow: "0 2px 16px rgba(0,0,0,.5)" }}>
            {title}
          </div>
          <div style={{ display: "flex", marginTop: 22, maxWidth: 620, fontSize: 17, lineHeight: 1.5, color: "rgba(255,255,255,.88)" }}>
            {lead}
          </div>
          <div style={{ display: "flex", marginTop: 24, gap: 12 }}>
            <div style={{ display: "flex", padding: "13px 18px", borderRadius: 10, background: "#b51235", fontSize: 13, fontWeight: 700 }}>
              Book a Consultation  →
            </div>
            <div style={{ display: "flex", padding: "13px 18px", borderRadius: 10, border: "1px solid rgba(255,255,255,.34)", background: "rgba(8,8,16,.35)", fontSize: 13, fontWeight: 700 }}>
              Check your CRS
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: 108,
            right: 54,
            width: 365,
            height: 438,
            display: "flex",
            flexDirection: "column",
            padding: "23px 25px",
            borderRadius: 23,
            background: "linear-gradient(145deg, rgba(37,34,48,.92), rgba(17,15,27,.90))",
            border: "1px solid rgba(255,255,255,.24)",
            boxShadow: "0 18px 45px rgba(0,0,0,.32)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 10, letterSpacing: 1, color: "rgba(255,255,255,.78)" }}>
            <span style={{ display: "flex", padding: "7px 9px", borderRadius: 20, background: "rgba(255,255,255,.08)" }}>CICC-REGULATED</span>
            <span style={{ display: "flex", color: "#8af0a4" }}>● LIVE GUIDANCE</span>
          </div>
          <div style={{ display: "flex", marginTop: 23, fontSize: 29, fontWeight: 700, lineHeight: 1.1 }}>Your next Canadian immigration decision</div>
          <div style={{ display: "flex", marginTop: 12, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,.18)", fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,.68)" }}>
            Clear pathway guidance from a licensed RCIC team in Brampton.
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 20, gap: 12, fontSize: 13, lineHeight: 1.35, color: "rgba(255,255,255,.82)" }}>
            <span style={{ display: "flex", gap: 9 }}>• Express Entry and CRS planning</span>
            <span style={{ display: "flex", gap: 9 }}>• Work and study permits</span>
            <span style={{ display: "flex", gap: 9 }}>• PNP and family sponsorship</span>
            <span style={{ display: "flex", gap: 9 }}>• Refusal and deadline reviews</span>
          </div>
          <div style={{ display: "flex", marginTop: "auto", paddingTop: 16, borderTop: "1px solid rgba(255,255,255,.18)", fontSize: 12, color: "rgba(255,255,255,.68)" }}>
            Commonwealth Migration Group Inc.
          </div>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );

  const png = Buffer.from(await imageResponse.arrayBuffer());
  const webp = await sharp(png).webp({ quality: 82 }).toBuffer();
  return new Response(webp, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      "Content-Type": "image/webp",
      "Content-Length": String(webp.byteLength),
    },
  });
}
