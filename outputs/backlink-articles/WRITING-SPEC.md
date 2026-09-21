# Backlink Article Writing Spec

You are writing **guest-post / backlink articles** for **Commonwealth Migration Group Inc. (CMG)**,
a private Canadian immigration consultancy (licensed RCIC) based in Brampton, Ontario.
Website: https://commonwealthmigration.ca

Each article will be pitched and published on a **third-party website** (blog, directory, news site)
to earn a backlink to one specific page on commonwealthmigration.ca.

## Hard rules

1. **One article per topic in your batch file.** No skipping, no merging, no extra articles.
2. **Unique angle every time.** No two articles may share the same structure, opening sentence,
   subheading pattern, or closing. Vary how each one starts (a question, a scenario, a myth,
   a checklist, a comparison, a mistake list, a timeline, etc.).
3. **Length: 600–800 words** per article body (not counting the metadata block).
4. **Exactly one target link in the body + one in the closing CTA.** Two links to the target URL
   maximum. Anchor text must be descriptive (never "click here", never the bare URL).
5. **Do not invent precise figures.** No fabricated fees, CRS cutoffs, processing times,
   draw dates, quotas or statistics. Where numbers matter, write qualitatively, e.g.
   "cut-offs move every draw — check the current figures on the official page".
6. **Do not claim to be IRCC / the Government of Canada.** CMG is a private consultancy.
   Never imply government affiliation. Never guarantee an outcome.
7. **No legal advice.** Add the firm's framing: information is general, outcomes depend on
   individual circumstances, and a licensed RCIC should review the file.
8. **Canadian English spelling** (programme → program, licence → licence as a noun, etc.).
9. Write for a **general reader** who is researching Canada immigration. No first-person "I".
   "We/our" is acceptable only inside the closing CTA paragraph.
10. Ground each article in the topic's own metadata supplied in the batch file
    (`seoTitle`, `metaDescription`, `h1`, `lead`, `headings`). Use those for factual accuracy —
    they are the page's real content. Expand, reframe and add practical value; **do not copy
    sentences verbatim from the `lead`**.
11. No markdown tables, no images, no HTML. Plain markdown only: `###` subheadings, short
    paragraphs, occasional bullet lists.

## Exact output format for each article

```
## <Fresh article title — must differ from the page H1>

**Target page:** [<descriptive anchor text>](<url>)
**Primary keyword:** <keyword>
**Category:** <category>
**Word count:** ~<number>

<Article body, 600–800 words. Use 2–4 `###` subheadings. Include the target link once,
naturally, inside the body.>

<Closing paragraph: a soft CTA naming Commonwealth Migration Group, licensed RCIC,
Brampton Ontario, and linking to the target page a second (final) time.>

---
```

Separate consecutive articles with a line containing only `---`.
Start the file with `# Part N — <batch theme>` as an H1.

## Topic keywords

Derive the `Primary keyword` from the topic label + the page's `seoTitle`/`metaDescription`.
Keep it to 2–6 words, search-intent style (e.g. "Ontario PNP eligibility", "super visa for parents").

## Quality bar

A reader who lands on the article on a third-party site should find it genuinely useful on its
own, and the link should feel like a helpful resource — not an advert. If an article reads like
spun filler, rewrite it.
