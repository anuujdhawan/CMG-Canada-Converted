# Backlink automation — architecture and the way out

Goal: quality backlinks to www.commonwealthmigration.ca, automated as far as is actually
possible. Companion to `Tier-A-Submission-Pack.xlsx`.

---

## 0. The one thing to understand before automating anything

Automation does not create links. **Editorial acceptance** creates links, and that is a human
decision at the other end. Automation buys you three things only:

1. **Volume of outreach** — pitch 80 outlets instead of 8.
2. **Consistency** — follow-ups never get forgotten.
3. **Truth** — you find out which placements actually produced a dofollow link.

Everything below is built around those three. Anything that claims to automate the *placement*
is either buying links (a penalty risk) or posting to nofollow platforms (no effect).

---

## 1. What to automate, and what not to

| Stage | Automate? | Why |
|---|---|---|
| Email pitches to the ~60 email-route targets | **Yes, fully** | Template + per-target personalisation. Highest leverage. |
| Follow-ups (day 7, day 14) | **Yes, fully** | Pure scheduling. |
| Reply detection and status updates | **Yes, fully** | IMAP search. |
| Form/account submissions (~20 targets) | **Semi** — human solves CAPTCHA | See §5. |
| Gmail verification link retrieval | **Yes** | See §2. |
| Post-publish rel verification | **Yes, fully** | The only way to know if you got a link. |
| Mass registration on the 28 self-publish platforms | **No** | Nofollow. Zero authority. Wasted effort. |
| CAPTCHA solving at scale | **No** | Against platform terms, and brittle. |

---

## 2. Mailbox access — pick one

You offered Playwright browser access. There are two ways, and the second is materially better.

### Option A — IMAP + app password (recommended)

Requires 2FA on the account, then a one-time app password at
`myaccount.google.com/apppasswords`. Takes about three minutes. It is stable, fast, and does
not depend on Gmail's DOM.

```python
import imaplib, email, re

def fetch_verification_links(user, app_password, sender_hint=None, days=1):
    M = imaplib.IMAP4_SSL("imap.gmail.com")
    M.login(user, app_password)
    M.select("INBOX")
    crit = f'(UNSEEN SINCE {days}-day-ago)'
    if sender_hint:
        crit = f'(UNSEEN FROM "{sender_hint}")'
    _, data = M.search(None, crit)
    links = []
    for uid in data[0].split():
        _, msg_data = M.fetch(uid, "(RFC822)")
        msg = email.message_from_bytes(msg_data[0][1])
        for part in msg.walk():
            if part.get_content_type() in ("text/plain", "text/html"):
                body = part.get_payload(decode=True).decode("utf-8", "ignore")
                links += re.findall(r'https?://[^\s"<>]+', body)
    M.logout()
    return [l for l in links if any(k in l.lower()
            for k in ("verif", "confirm", "activate", "token", "signup"))]
```

### Option B — Playwright persistent context (browser-only)

You log into Gmail **once, manually**, in a dedicated profile. The session cookie persists and
Playwright reuses it. I never handle the password.

```python
from playwright.sync_api import sync_playwright

PROFILE = "/Users/themacintosh/.cmg-playwright-profile"

with sync_playwright() as p:
    ctx = p.chromium.launch_persistent_context(
        PROFILE,
        channel="chrome",              # real Chrome, not bundled Chromium
        headless=False,                # Gmail blocks headless
        args=["--disable-blink-features=AutomationControlled"],
    )
    page = ctx.pages[0] if ctx.pages else ctx.new_page()
    page.goto("https://mail.google.com/mail/u/0/")
    input("Log in to seolaunchers@gmail.com manually, then press Enter...")
    ctx.storage_state(path="/Users/themacintosh/.cmg-gmail-state.json")
    ctx.close()
```

**Honest caveats for Option B:** Gmail's DOM is obfuscated and changes without notice, Google
actively challenges automation, and a persistent profile on a headless server will not survive
Google's device checks. It works on your own machine, driven by you. It is a fallback, not a
foundation.

**Recommendation:** if you can enable an app password, do it. It removes the single most
fragile part of the whole system.

---

## 3. Target registry

One JSON file, generated from the workbook, is the single source of truth. The submission
runner, the outreach engine and the tracker all read and write it.

```json
{
  "id": 3,
  "platform": "The Migrationist",
  "submission_url": "https://themigrationist.net/contributors/become-a-contributor/",
  "type": "email_pitch",
  "status": "not_started",
  "contact_email": "editor@themigrationist.net",
  "assigned_page": "/immigrate/express-entry",
  "article_set": "Set 1",
  "article_title": "Express Entry Explained: ...",
  "anchor": "Express Entry",
  "http_status": 200,
  "pitched_on": null,
  "published_url": null,
  "link_rel": null
}
```

`type` drives routing: `email_pitch` → outreach engine. `form` / `account` → Playwright runner.
Everything else is skipped.

---

## 4. Outreach engine (the bulk of the value)

```python
import json, time, random, smtplib, ssl
from email.message import EmailMessage

def send_pitch(target, author, body):
    msg = EmailMessage()
    msg["Subject"] = f"Pitch: {target['article_title']}"
    msg["From"] = f"{author['name']} <{author['email']}>"
    msg["To"] = target["contact_email"]
    msg["Reply-To"] = author["email"]
    msg.set_content(body)
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=ssl.create_default_context()) as s:
        s.login(author["email"], author["app_password"])
        s.send_message(msg)

def run(registry, author, template):
    sent = 0
    for t in registry:
        if t["type"] != "email_pitch" or t["status"] != "not_started":
            continue
        send_pitch(t, author, template(t, author))
        t["status"] = "pitched"
        t["pitched_on"] = time.strftime("%Y-%m-%d")
        sent += 1
        if sent >= 8:                 # hard cap per run
            break
        time.sleep(random.randint(90, 240))   # human pacing
    return registry
```

**Rate limits — do not skip these.** From a Gmail account: **8–12 pitches per day maximum**,
with randomised 90–240 second gaps. Above that you land in spam, and the editor never sees the
pitch. This is why the cadence you chose (5–10/week) is right.

**Better still:** send from `outreach@commonwealthmigration.ca` via a transactional provider
(Postmark, Resend, Amazon SES). Domain-authenticated mail (SPF + DKIM + DMARC) reaches inboxes
that Gmail-to-Gmail does not, and it protects your main account.

---

## 5. Playwright submission runner (human-in-the-loop)

This is the honest design. The script does everything except the CAPTCHA.

```python
from playwright.sync_api import sync_playwright

def run_submission(page, target, author, article):
    page.goto(target["submission_url"], wait_until="domcontentloaded")
    page.wait_for_timeout(1500)

    # Fill whatever the form asks for. Adapters per site live in adapters/.
    for sel, value in [
        ("input[name*=name i]",  author["name"]),
        ("input[type=email]",    author["email"]),
        ("input[name*=website i]", "https://commonwealthmigration.ca"),
        ("textarea",             article),
    ]:
        if page.locator(sel).count():
            page.fill(sel, value)

    # Human-in-the-loop: detect CAPTCHA and hand over.
    captcha = page.locator("iframe[src*=recaptcha], iframe[src*=hcaptcha], .h-captcha")
    if captcha.count():
        print(f"[{target['platform']}] CAPTCHA present — solve it in the window.")
        page.pause()          # opens Playwright Inspector; you click Resume

    page.click("button[type=submit], input[type=submit]")
    page.wait_for_timeout(3000)
    target["status"] = "submitted"
    target["http_status"] = page.url
```

Run it **headed, on your machine**, with `page.pause()` at the CAPTCHA. Expect roughly 30–50%
of the ~20 form targets to throw a CAPTCHA or Cloudflare challenge. Budget your time for that
rather than trying to defeat it.

---

## 6. Link verifier (run this on a schedule)

This is the step almost everyone skips, and it is the one that tells you whether any of the
work produced a link.

```python
import re, urllib.request

def check_link(article_url, target_url):
    req = urllib.request.Request(article_url, headers={"User-Agent": "Mozilla/5.0"})
    html = urllib.request.urlopen(req, timeout=25).read().decode("utf-8", "ignore")
    pat = re.compile(r'<a\b([^>]*?)href="([^"]*' + re.escape(target_url.rstrip('/')) + r'[^"]*)"([^>]*?)>', re.I)
    out = []
    for m in pat.finditer(html):
        attrs = m.group(1) + m.group(3)
        rel = (re.search(r'rel="([^"]*)"', attrs) or [None, "dofollow"])[1]
        anchor = re.search(r'>([^<]*)</a>', html[m.end()-1:m.end()+200])
        out.append({"rel": rel.strip(), "anchor": anchor.group(1) if anchor else ""})
    return out
```

Classify the result:

- `dofollow` → a real link. Count it.
- `nofollow` / `ugc` / `sponsored` → brand mention only. Record it as such and **do not** count
  it toward authority.
- Not found → the link was stripped in editing. Follow up or drop the target.

Run this weekly over every `published_url` in the registry.

---

## 7. Realistic expectations

| Metric | Realistic |
|---|---|
| Tier A routes in the list | 80 |
| Live submission URLs | 55 (25 were dead or bot-blocked — verified) |
| Outlets that respond to a cold pitch | 15–30% |
| Actual published links, 3–6 months | **10–25** |
| Of those, dofollow | maybe 60–70% |
| Time to first placement | 3–8 weeks |

Anyone promising 226 links is describing link spam, and it would put a manual action on the
domain you are trying to grow.

---

## 8. What I need to start building

1. **Mailbox** — either an app password (Option A) or confirmation you will do the one-time
   manual Gmail login for Option B.
2. **Author identity** — name, title, CICC/RCIC number, bio, headshot, LinkedIn. Fill the
   `Author Bio Block` sheet.
3. **Sign-off** — explicit confirmation you accept the ToS and Google-policy risk.
4. **Send-from decision** — Gmail (works, capped at ~10/day) or a domain mailbox (better
   deliverability, needs DNS records).

Once 1 and 2 are in place I can build the registry generator, the outreach engine, the
verifier and the site adapters, and test the verifier against your live pages immediately.
