import sourcePages from "@/data/cmg-pages.json";
import sourceMenu from "@/data/cmg-menu.json";
import legalPages from "@/data/cmg-legal.json";
import aboutPages from "@/data/about-pages";

const normalizePath = (value) => {
  const pathname = String(value || "/").split("?")[0].split("#")[0];
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
};

function normalizeBlocks(blocks = []) {
  const result = [];
  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];
    const next = blocks[index + 1];
    if (block.type === "paragraph" && /^Q:\s*/i.test(block.text) && next?.type === "paragraph" && /^A:\s*/i.test(next.text)) {
      result.push({
        type: "faq",
        question: block.text.replace(/^Q:\s*/i, "").trim(),
        answer: next.text.replace(/^A:\s*/i, "").trim(),
      });
      index += 1;
      continue;
    }
    result.push(block);
  }
  return result;
}

function sourcePageToPage(page) {
  const path = normalizePath(page.path);
  return {
    ...page,
    path,
    h1: page.h1,
    hero: `# ${page.h1}\n\n${page.hero?.lead || page.description || ""}`,
    contentBlocks: normalizeBlocks(page.contentBlocks),
    content: page.contentBlocks
      .map((block) => block.type === "heading"
        ? `${"#".repeat(block.level)} ${block.text}`
        : block.type === "table"
          ? block.rows.map((row) => `| ${row.join(" | ")} |`).join("\n")
          : block.type === "list"
            ? block.items.map((item) => `${block.ordered ? "1." : "-"} ${item}`).join("\n")
            : block.text || "")
      .join("\n\n"),
    seo: {
      title: page.title,
      description: page.description,
      keywords: page.keywords || [],
      canonical: page.url,
      robots: "index, follow",
    },
    meta: { lastModified: page.lastModified || "2026-08-29", priority: page.priority || 0.7, status: page.status || "Content Ready" },
    headingOutline: page.contentBlocks.filter((block) => block.type === "heading").map((block) => ({ level: block.level, text: block.text })),
    jsonLd: page.jsonLd || [],
  };
}

// The dedicated About page set is appended so its intent-specific versions
// take precedence over the original source inventory for matching paths.
const pagesByPath = new Map([...sourcePages, ...aboutPages].map((page) => [normalizePath(page.path), sourcePageToPage(page)]));
const legalByPath = new Map(legalPages.map((page) => [normalizePath(page.path), page]));

export function getCmgPage(pathname) {
  return pagesByPath.get(normalizePath(pathname)) || null;
}

export function getCmgPages() {
  return [...pagesByPath.values()];
}

export function getLegalPage(pathname) {
  const page = legalByPath.get(normalizePath(pathname));
  if (!page) return null;
  return {
    path: page.path,
    h1: page.title,
    title: page.title,
    hero: `# ${page.title}\n\nThe official ${page.title.toLowerCase()} for Commonwealth Migration Group Inc.`,
    contentBlocks: [
      { type: "heading", level: 2, text: page.title },
      { type: "legalText", text: page.text },
    ],
    content: page.text,
    seo: {
      title: `${page.title} | Commonwealth Migration Canada`,
      description: `${page.title} for Commonwealth Migration Group Inc.`,
      canonical: page.path,
      robots: "index, follow",
    },
    meta: { lastModified: "2026-08-01", priority: 0.4, status: "Content Ready" },
    headingOutline: [{ level: 2, text: page.title }],
    jsonLd: [],
  };
}

export function getCmgMenu() {
  return sourceMenu;
}

export function getCmgRoutePaths() {
  return [...pagesByPath.keys()];
}

export function getLegalRoutePaths() {
  return [...legalByPath.keys()];
}

export default getCmgPage;
