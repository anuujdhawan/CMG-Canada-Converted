# Guest-post outreach — Wave 1 pack

## What's in here

| File | What it is |
|---|---|
| `WAVE-1-PITCHES.md` | **9 ready-to-send pitches.** Each has the editor address, subject line, body, and the article + target URL it offers. Copy-paste and send. |
| `wave-1-targets.csv` | The full **36-target qualified queue** — every Tier-A email-pitch route that is HTTP 200, High/Very-high relevance, and **not** already contacted. 9 are Wave 1, 2 are held, 25 need their editor address confirmed. |

## How this list was built

- Source: `Tier-A-Submission-Pack.xlsx` → "Tier A Targets (verified)" (80 routes).
- Kept only: HTTP 200 **and** High/Very-high relevance **and** an email-pitch workflow → **36 routes**.
- **Deduped** against `outputs/backlink-created-details.xlsx` (26 submitted) **and** `outputs/backlink-outreach-progress-2026-09-23.xlsx` (142 log rows). No target here has been pitched before.
- Editor addresses were **verified by fetching each outlet's contributor page** — they are not guessed.

## Why 9 and not 200–400

The 908-row prospect workbook is **submission URLs, not email addresses** — most of those routes are web forms with no published editor email. A verified editor address is the scarce resource, and each one has to be read off the outlet's own contributor page. 9 are verified and ready today; the other 27 in the queue need the same treatment.

## The send step — and why it isn't automated here

**This environment cannot send mail by the safe route.** Outbound SMTP (ports 465/587) is blocked — only IMAP (993, read-only) is reachable. The only path to sending from here would be scripting Gmail's web interface, which is exactly what triggers Google's automation detection.

**Recommended send:** open Gmail, paste each pitch from `WAVE-1-PITCHES.md`, send. Nine emails, about five minutes.

**Pacing:** keep it to **8–12 per day** with gaps of a few minutes. That is Gmail's safe ceiling — above it, your mail is spam-foldered and the editor never sees the pitch.

## Rules that protect the domain

1. **One article per outlet.** Never send the same piece to two publications.
2. **No exact-match commercial anchors.** Use the descriptive anchors given.
3. **Verify the link after publication** — if it comes back `nofollow`/`ugc`, record it as a brand mention, not a backlink.

## Next batch (when you're ready)

The 25 "queue" rows in the CSV are the next Wave 2. They need their editor address confirmed from the contributor page — same method used here — before they can be pitched.

---

## Sending capacity — the real numbers (checked 2026-10)

### Three ways to send, ranked

| Method | Sends via | Practical daily capacity | Risk |
|---|---|---|---|
| **Browser automation** (Playwright → Gmail web UI) | Google's front end | ~10–20 | **Highest.** Looks like automation; the path to a lock. |
| **SMTP + app password** (recommended for now) | Google's mail servers | 500 hard cap; **20–50 safe** | Low. Stable, no DOM, no automation flags. |
| **Domain mailbox + sending provider** (`outreach@commonwealthmigration.ca` via Postmark / Resend / Amazon SES) | Your own domain | 100s–1,000s | **Lowest**, and best deliverability. Protects the main inbox. |

### Can `seolaunchers@gmail.com` send more than 10–12/day?

**Technically yes — the documented cap for a free Gmail account is 500 recipients/day** (Google Workspace: 2,000 messages / 10,000 recipients). My earlier "8–12" was the cautious cold-start figure, not the ceiling.

**But the safe figure for cold outreach is 20–50/day per inbox.** Past that, your mail is spam-foldered and the editor never sees it. A free Gmail also carries weaker sending reputation than a Workspace address, so start at ~15–20/day and warm up.

### The constraint that actually binds

Send capacity is **not** the bottleneck. The list has **36 qualified targets, 9 with verified editor emails.** To send 500/day you need 500 vetted, verified targets — they don't exist yet. Ramping send volume before the target list grows just burns the mailbox on the same few addresses.

**Sequence:** grow verified targets → send 20–30/day from Gmail → move to the domain mailbox once the client provides it.
