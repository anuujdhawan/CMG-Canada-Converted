/**
 * Article bodies for the research guides under `/blog/<slug>`.
 *
 * Split one file per post rather than a single array: each article is a few
 * hundred lines of editorial copy, and a per-post file keeps a content edit
 * reviewable in isolation and stops two writers colliding in one file.
 *
 * Metadata stays in `src/data/blog-research.js` — this module owns reading
 * content only, and is imported solely by the server-rendered article route.
 *
 * The import list is in the same order as `RESEARCH_BLOG_POSTS` so the two are
 * easy to diff. A slug present in `blog-research.js` but missing here still
 * renders — `BlogArticlePage` falls back to its per-category guidance — but the
 * page will be thin, so `npm run validate:blog-content` treats a missing body
 * as a failure.
 */

import canadaImmigrationLevelsPlan2026 from "./canada-immigration-levels-plan-2026";
import expressEntryCanada2026Categories from "./express-entry-canada-2026-categories";
import crsScoreCanadaHowToImprove from "./crs-score-canada-how-to-improve";
import canadaImmigrationNewsMonthlyIrccUpdate from "./canada-immigration-news-monthly-ircc-update";
import canadaPrPathways2026 from "./canada-pr-pathways-2026";
import provincialNomineeProgramCanada2026 from "./provincial-nominee-program-canada-2026";
import ruralCommunityImmigrationPilotCanada from "./rural-community-immigration-pilot-canada";
import atlanticImmigrationProgramGuide from "./atlantic-immigration-program-guide";
import canadaWorkPermitTypes2026 from "./canada-work-permit-types-2026";
import lmiaCanadaExplained from "./lmia-canada-explained";
import pgwpCanada2026 from "./pgwp-canada-2026";
import canadaStudyPermit2026 from "./canada-study-permit-2026";
import canadaVisitorVisaDocumentsRefusal from "./canada-visitor-visa-documents-refusal";
import canadaSuperVisa2026 from "./canada-super-visa-2026";
import spousalSponsorshipCanada2026 from "./spousal-sponsorship-canada-2026";
import parentsGrandparentsProgramCanada from "./parents-grandparents-program-canada";
import canadaImmigrationProcessingTimes from "./canada-immigration-processing-times";
import canadaCitizenshipRequirements from "./canada-citizenship-requirements";
import prCardRenewalCanada from "./pr-card-renewal-canada";
import whatDelaysCanadaImmigrationApplication from "./what-delays-canada-immigration-application";

/** Article bodies keyed by the slug used in `blog-research.js`. */
export const BLOG_ARTICLES = {
  "canada-immigration-levels-plan-2026": canadaImmigrationLevelsPlan2026,
  "express-entry-canada-2026-categories": expressEntryCanada2026Categories,
  "crs-score-canada-how-to-improve": crsScoreCanadaHowToImprove,
  "canada-immigration-news-monthly-ircc-update": canadaImmigrationNewsMonthlyIrccUpdate,
  "canada-pr-pathways-2026": canadaPrPathways2026,
  "provincial-nominee-program-canada-2026": provincialNomineeProgramCanada2026,
  "rural-community-immigration-pilot-canada": ruralCommunityImmigrationPilotCanada,
  "atlantic-immigration-program-guide": atlanticImmigrationProgramGuide,
  "canada-work-permit-types-2026": canadaWorkPermitTypes2026,
  "lmia-canada-explained": lmiaCanadaExplained,
  "pgwp-canada-2026": pgwpCanada2026,
  "canada-study-permit-2026": canadaStudyPermit2026,
  "canada-visitor-visa-documents-refusal": canadaVisitorVisaDocumentsRefusal,
  "canada-super-visa-2026": canadaSuperVisa2026,
  "spousal-sponsorship-canada-2026": spousalSponsorshipCanada2026,
  "parents-grandparents-program-canada": parentsGrandparentsProgramCanada,
  "canada-immigration-processing-times": canadaImmigrationProcessingTimes,
  "canada-citizenship-requirements": canadaCitizenshipRequirements,
  "pr-card-renewal-canada": prCardRenewalCanada,
  "what-delays-canada-immigration-application": whatDelaysCanadaImmigrationApplication,
};

/** The body for a slug, or null when a post has not been expanded yet. */
export function getBlogArticle(slug) {
  return BLOG_ARTICLES[slug] || null;
}

/**
 * Word count of everything a reader actually sees in the article body.
 *
 * Used by the content-depth audit so "the posts are thin" is a number rather
 * than an opinion, and by the article schema for `wordCount` / `timeRequired`.
 * Deliberately counts the same fields the article route renders, so the audit
 * cannot drift from the page.
 */
export function countArticleWords(article) {
  if (!article) return 0;
  const parts = [article.quickAnswer, ...(article.keyTakeaways || [])];
  for (const section of article.sections || []) {
    parts.push(section.heading);
    parts.push(...(section.body || []));
    if (section.list) {
      parts.push(section.list.title || "");
      parts.push(...(section.list.items || []));
    }
    if (section.table) {
      parts.push(section.table.caption || "");
      parts.push(...(section.table.columns || []));
      parts.push(...(section.table.rows || []).flat());
    }
    if (section.callout) parts.push(section.callout.label, section.callout.text);
  }
  for (const entry of article.glossary || []) parts.push(entry.term, entry.definition);
  for (const faq of article.faqs || []) parts.push(faq.question, faq.answer);
  for (const link of article.related || []) parts.push(link.label, link.note || "");
  return parts
    .filter(Boolean)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}
