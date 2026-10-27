import clientFaqsByPath from "@/data/client-faqs.json";

/** Attach the client-authored FAQ set to a page before it reaches client UI. */
export function attachClientFaqs(page) {
  if (!page?.path) return page;
  const clientFaqs = clientFaqsByPath[page.path];
  return Array.isArray(clientFaqs) ? { ...page, clientFaqs } : page;
}
