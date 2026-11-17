const BLOG_DATE_FORMATTER = new Intl.DateTimeFormat("en-CA", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
  year: "numeric",
});

function parseBlogDate(value) {
  if (!value) return null;
  const source = String(value).trim();
  const date = /^\d{4}-\d{2}-\d{2}$/.test(source)
    ? new Date(`${source}T00:00:00Z`)
    : new Date(source);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function formatBlogDate(value) {
  const date = parseBlogDate(value);
  return date ? BLOG_DATE_FORMATTER.format(date) : null;
}

export function getBlogPublicationDate(post) {
  return post?.publishedAt || post?.date || null;
}

export function getBlogDateLabels(post) {
  const publicationDate = getBlogPublicationDate(post);
  const hasExplicitPublicationLabel = /^\s*Published\b/i.test(post?.updatedLabel || "");
  const publishedLabel = hasExplicitPublicationLabel
    ? post.updatedLabel
    : publicationDate
      ? `Published ${formatBlogDate(publicationDate)}`
      : null;
  const updatedLabel = hasExplicitPublicationLabel
    ? null
    : post?.updatedLabel || (post?.meta?.lastModified ? `Updated ${formatBlogDate(post.meta.lastModified)}` : null);

  return { publicationDate, publishedLabel, updatedLabel };
}

export function sortBlogPostsByDate(posts = [], direction = "newest") {
  return [...posts].sort((a, b) => {
    const dateA = parseBlogDate(getBlogPublicationDate(a) || a?.updated || a?.meta?.lastModified)?.getTime() ?? null;
    const dateB = parseBlogDate(getBlogPublicationDate(b) || b?.updated || b?.meta?.lastModified)?.getTime() ?? null;

    if (dateA === null && dateB !== null) return 1;
    if (dateA !== null && dateB === null) return -1;
    if (dateA !== null && dateB !== null && dateA !== dateB) {
      return direction === "oldest" ? dateA - dateB : dateB - dateA;
    }

    return String(a?.title || "").localeCompare(String(b?.title || ""));
  });
}
