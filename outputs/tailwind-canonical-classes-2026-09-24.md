# Tailwind canonical-class cleanup — 2026-09-24

## What was asked

Fix the `tailwindcss-intellisense` / `suggestCanonicalClasses` warnings reported for
`src/components/layout/Footer.js`.

## What changed

| File | Tokens rewritten |
|---|---|
| `src/components/layout/Footer.js` | 119 |
| `src/components/forms/fields.js` | 2 |
| `src/components/forms/ConsultationForm.js` | 1 |
| **Total** | **122** |

`git diff --stat` for the three files: **64 insertions, 64 deletions** — every line is a
same-length class-string rewrite; no JSX structure, no props, no logic touched.

The two form files were not in the reported diagnostics. They were found by sweeping `src/`
for the same pattern and are the *only* other occurrences in the repo. The rewrites are
single-token and trivially revertible if you would rather keep that diff to Footer.js only.

ESLint: clean on all three files.

## Rewrite groups (Footer.js)

**Theme tokens that have an `@theme inline` `--color-*` mapping → named utility** (74 tokens)

| From | To | Count |
|---|---|---|
| `text-[var(--brand-muted)]` | `text-muted` | 14 |
| `border-[var(--brand-border)]` | `border-line` | 14 |
| `text-[var(--brand-navy-dark)]` | `text-(--brand-navy-dark)` | 11 |
| `text-[var(--brand-primary)]` | `text-primary` | 9 |
| `text-[var(--brand-primary-dark)]` | `text-primary-dark` | 5 |
| `bg-[var(--brand-primary)]` | `bg-primary` | 5 |
| `text-[var(--brand-border)]` | `text-line` | 4 |
| `border-[var(--brand-primary)]` | `border-primary` | 3 |
| `border-l-[var(--brand-primary)]` | `border-l-primary` | 2 |
| `bg-[var(--brand-accent-soft)]` | `bg-accent-soft` | 2 |
| `text-[var(--brand-text)]` | `text-ink` | 1 |
| `text-[var(--brand-success)]` | `text-success` | 1 |
| `bg-[var(--brand-logo-bg)]` | `bg-(--brand-logo-bg)` | 1 |
| `border-l-[var(--brand-gold)]` | `border-l-(--brand-gold)` | 1 |
| `text-[var(--brand-gold)]` | `text-(--brand-gold)` | 1 |

`--brand-navy-dark`, `--brand-logo-bg` and `--brand-gold` have **no** `--color-*` mapping in
`@theme inline`, so they correctly take the v4 parenthesised-variable shorthand rather than a
named token. Getting these wrong would silently produce no colour at all.

**Durations, spacing and size normalisations → scale values** (37 tokens)

| From | To | Count | Note |
|---|---|---|---|
| `duration-[180ms]` | `duration-180` | 13 | v4 accepts bare ms |
| `duration-[200ms]` | `duration-200` | 1 | |
| `duration-[250ms]` | `duration-250` | 1 | |
| `rounded-[1rem]` | `rounded-2xl` | 2 | 16px, exact |
| `leading-[1.25]` | `leading-tight` | 2 | 1.25, exact |
| `translate-x-[-4px]` | `-translate-x-1` | 2 | -0.25rem, exact |
| `max-[1100px]:gap-[2.25rem]` | `max-[1100px]:gap-9` | 1 | |
| `gap-y-[2.75rem]` | `gap-y-11` | 1 | |
| `top-[-6rem]` / `right-[-4rem]` | `-top-24` / `-right-16` | 1 / 1 | |
| `bottom-[-10rem]` / `left-[-6rem]` | `-bottom-40` / `-left-24` | 1 / 1 | |
| `size-[30rem]` / `size-[36rem]` | `size-120` / `size-144` | 1 / 1 | 120x/144x 0.25rem |
| `max-w-[28rem]` / `max-w-[14rem]` | `max-w-md` / `max-w-56` | 1 / 1 | |
| `min-h-[8rem]` | `min-h-32` | 1 | |
| `h-[15px] w-[15px]` | `h-3.75 w-3.75` | 1 | |
| `h-[1.75rem]` | `h-7` | 1 | |
| `rounded-[.5rem]` | `rounded-lg` | 1 | 8px, exact |
| `z-[3]` / `z-[1]` | `z-3` / `z-1` | 1 / 1 | |

**Arbitrary-property declarations → utility shorthand** (3 tokens, one line)

`site-footer__grid-pattern`, formerly three `[property:value]` declarations:

```
[background-image:linear-gradient(...)] [background-size:56px_56px] [mask-image:linear-gradient(180deg,black_0%,transparent_78%)]
```
→
```
bg-[linear-gradient(...)] bg-size-[56px_56px] mask-[linear-gradient(180deg,black_0%,transparent_78%)]
```

## Equivalence evidence

This was a cosmetic rename, so the bar was **provably zero rendering change**, not "looks fine".

**1. Pixel proof.** Footer was captured at 1440px and 420px in both themes, with the file
reverted and re-applied between the two passes so the capture procedure was identical on both
sides (same scroll offsets: 14483px / 23920px). Viewport height was set to 1400px / 3200px so
the **entire** footer was in frame, not just the top slice.

| Combo | Size | Mean abs diff | Max channel diff | Pixels differing |
|---|---|---|---|---|
| 1440 / light | 1440x1400 | 0.000000 | 0 | 0 |
| 1440 / dark | 1440x1400 | 0.000000 | 0 | 0 |
| 420 / light | 420x3200 | 0.000000 | 0 | 0 |
| 420 / dark | 420x3200 | 0.000000 | 0 | 0 |

Byte-identical in all four.

**2. Compiled-CSS proof.** Extracted the emitted rule body for each new utility from the dev
stylesheet and compared it to the old one. Examples:

| New selector | Emitted declaration |
|---|---|
| `.bg-size-[56px_56px]` | `background-size: 56px 56px` |
| `.mask-[linear-gradient(180deg,black_0%,transparent_78%)]` | `-webkit-mask-image` + `mask-image: linear-gradient(#000 0%, #0000 78%)` |
| `.duration-180` | `--tw-duration: .18s; transition-duration: .18s` |
| `.h-3.75` | `height: calc(var(--spacing) * 3.75)` |
| `.size-120` | `width/height: calc(var(--spacing) * 120)` |
| `.text-ink` | `color: var(--brand-text)` |
| `.text-line` | `color: var(--brand-border)` |
| `.text-(--brand-navy-dark)` | `color: var(--brand-navy-dark)` |
| `.bg-(--brand-logo-bg)` | `background-color: var(--brand-logo-bg)` |
| `.border-l-(--brand-gold)` | `border-left-color: var(--brand-gold)` |
| `.-translate-x-1` | `--tw-translate-x: calc(var(--spacing) * -1)` |
| `.-top-24` | `top: calc(var(--spacing) * -24)` |

`bg-[linear-gradient(...)]` emits the byte-identical `background-image` declaration as the old
`[background-image:...]` form. Form-file renames were verified the same way:

- `.text-error` → `color: var(--brand-error)` — identical to the old arbitrary form.
- `.before:bg-(--brand-gold)::before` → `content: var(--tw-content); background-color: var(--brand-gold)` — identical to the old arbitrary form, and identical specificity (one class + one pseudo-element).

**3. Isolated compile** for the one utility the dev server refused to emit (see Gotchas).
Compiled a throwaway probe with `@tailwindcss/postcss` against Tailwind 4.3.3; it emitted
`.before\:bg-\(--brand-gold\)::before` with the correct declaration. Probe dir was deleted
afterwards — `git status` confirms no stray files.

## Deliberately skipped

`text-[.75rem]` → `text-xs` (Footer CTAs) and `max-[768px]:text-[.875rem]` → `text-sm`
(column titles) were **not** applied, and notably the reported diagnostics did not contain them
either. Reason: in v4 a `text-*` utility emits *both* `font-size` and `line-height` (from
`--text-*--line-height`), whereas an arbitrary `text-[.75rem]` sets font-size only.

Measured: `.site-footer__cta` is currently `font-size: 12px; line-height: 19.8px` (1.65,
inherited from body). Switching to `text-xs` would impose `line-height: calc(1/0.75)` = 1.3333,
shrinking the CTA pills by roughly 3.8px. Not worth it for a lint warning.

The column-title case *would* have been safe (`leading-[1.2]` pins `--tw-leading`, and the
emitted `line-height: var(--tw-leading, …)` resolves to 1.2 either way), but it is left alone to
match the reported diagnostic set exactly.

## Gotchas worth knowing

- **The Next dev server's CSS chunk can go stale for a file that is not currently in the
  compiled module graph.** After editing `ConsultationForm.js` (which is only reached via the
  consultation modal or the booking page), `/_next/static/chunks/_1phab7x._.css` kept serving the
  *old* selector, kept omitting the new one, and did not change size even after `touch
  src/styles/globals.css`. The Footer edits — in the layout graph, so always compiled — were
  picked up immediately. Trusting the dev chunk alone would have produced a false negative. This
  is a dev-only artefact; a production build regenerates from scratch.
- The dev stylesheet retains previously-seen candidates, so old selectors can linger in it after
  the source no longer uses them.

## Open observation (not a lint warning)

`Footer.js` lines 60 and 65 use `hover:text-[red]` on the footer link items. That is pure
`#ff0000`, while `templateColors.light.primary` / `.dark.primary` are both `#f31f3f`. It is the
only literal-colour utility anywhere in `src/`, and it appears nowhere else, so it looks like a
prototyping leftover rather than a decision. `hover:text-primary` would match the rest of the
footer's hover states. Left as-is because it is a colour decision, not a canonicalisation one.
