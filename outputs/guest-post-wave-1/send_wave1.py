#!/usr/bin/env python3
"""
send_wave1.py — send the Wave 1 guest-post pitches from your own Gmail account.

Run this on YOUR machine (not the sandbox — the sandbox blocks outbound SMTP).

    # 1. See what it will do, send nothing:
    python3 send_wave1.py --sender-name "Your Name"

    # 2. Actually send (will ask for your app password):
    python3 send_wave1.py --sender-name "Your Name" --send

Setup (one time, ~3 minutes):
    1. Turn on 2-Step Verification:  https://myaccount.google.com/signinoptions/two-step-verification
    2. Create an app password:       https://myaccount.google.com/apppasswords
       - App: "Mail", Device: "Other" -> name it "guest-post outreach"
       - Copy the 16-character code it shows you.
    3. Paste that code when this script asks. It is never written to disk.

Safety defaults:
    * Dry run unless you pass --send.
    * Hard cap of 12 emails per run.
    * Randomised 3-7 minute gaps between sends (looks human, protects the account).
    * Every send is appended to sent-log.csv so you never double-pitch.
"""

import argparse
import csv
import getpass
import json
import os
import random
import smtplib
import ssl
import sys
import time
from email.message import EmailMessage
from email.utils import formatdate, make_msgid

HERE = os.path.dirname(os.path.abspath(__file__))
PITCHES = os.path.join(HERE, "pitches.json")
LOG = os.path.join(HERE, "sent-log.csv")

SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 465  # implicit TLS

MAX_PER_RUN = 12          # hard cap — do not raise casually
DEFAULT_GAP_MIN = 180     # seconds
DEFAULT_GAP_MAX = 420     # seconds


def load_pitches():
    with open(PITCHES, "r", encoding="utf-8") as f:
        return json.load(f)


def already_sent():
    """Addresses already emailed, from a previous run."""
    if not os.path.exists(LOG):
        return set()
    with open(LOG, "r", encoding="utf-8", newline="") as f:
        return {row["to"].strip().lower() for row in csv.DictReader(f) if row.get("to")}


def append_log(row):
    new = not os.path.exists(LOG)
    with open(LOG, "a", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        if new:
            w.writerow(["sent_at", "platform", "to", "subject", "offering", "target_url", "anchor", "status"])
        w.writerow(row)


def build_message(p, sender_name, from_email):
    msg = EmailMessage()
    msg["Subject"] = p["subject"]
    msg["From"] = f"{sender_name} <{from_email}>"
    msg["To"] = p["to"]
    msg["Reply-To"] = from_email
    msg["Date"] = formatdate(localtime=True)
    msg["Message-ID"] = make_msgid(domain=from_email.split("@")[-1])
    msg.set_content(p["body"].format(sender_name=sender_name))
    return msg


def main():
    ap = argparse.ArgumentParser(description="Send Wave 1 guest-post pitches.")
    ap.add_argument("--sender-name", required=True, help='Your name, e.g. "Jane Doe"')
    ap.add_argument("--from-email", default="seolaunchers@gmail.com")
    ap.add_argument("--limit", type=int, default=MAX_PER_RUN)
    ap.add_argument("--gap-min", type=int, default=DEFAULT_GAP_MIN)
    ap.add_argument("--gap-max", type=int, default=DEFAULT_GAP_MAX)
    ap.add_argument("--send", action="store_true", help="Actually send. Without this it is a dry run.")
    args = ap.parse_args()

    limit = min(args.limit, MAX_PER_RUN)
    pitches = load_pitches()
    done = already_sent()

    todo = [p for p in pitches if p["to"].strip().lower() not in done][:limit]
    skipped = len(pitches) - len(todo)

    print(f"From        : {args.sender_name} <{args.from_email}>")
    print(f"Queued      : {len(todo)}  (skipped {skipped} already in sent-log.csv)")
    print(f"Cap this run: {limit}   Gaps: {args.gap_min}-{args.gap_max}s")
    print(f"Mode        : {'LIVE SEND' if args.send else 'DRY RUN (nothing will be sent)'}")
    print("-" * 68)
    for p in todo:
        print(f"  -> {p['platform']:<28} {p['to']}")

    if not todo:
        print("\nNothing to do.")
        return

    if not args.send:
        print("\nDry run complete. Re-run with --send to actually send.")
        return

    app_pw = getpass.getpass("\nGmail app password (16 chars, hidden): ").replace(" ", "").strip()
    if not app_pw:
        sys.exit("No password entered.")

    print("\nConnecting to Gmail...")
    try:
        server = smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, context=ssl.create_default_context())
        server.login(args.from_email, app_pw)
    except smtplib.SMTPAuthenticationError:
        sys.exit("Login failed. Check the app password (it is NOT your normal Gmail password).")
    except Exception as e:
        sys.exit(f"Could not connect: {type(e).__name__}: {e}")

    print("Logged in. Sending...\n")
    sent = 0
    for i, p in enumerate(todo):
        msg = build_message(p, args.sender_name, args.from_email)
        try:
            server.send_message(msg)
            sent += 1
            append_log([time.strftime("%Y-%m-%d %H:%M:%S"), p["platform"], p["to"],
                        p["subject"], p["offering"], p["target_url"], p["anchor"], "sent"])
            print(f"  [ok]  {p['platform']}")
        except Exception as e:
            append_log([time.strftime("%Y-%m-%d %H:%M:%S"), p["platform"], p["to"],
                        p["subject"], p["offering"], p["target_url"], p["anchor"], f"error: {type(e).__name__}"])
            print(f"  [ERR] {p['platform']}: {type(e).__name__}: {e}")

        if i < len(todo) - 1:
            gap = random.randint(args.gap_min, args.gap_max)
            print(f"        waiting {gap}s...")
            time.sleep(gap)

    server.quit()
    print(f"\nDone. Sent {sent}/{len(todo)}. Logged to {os.path.basename(LOG)}.")


if __name__ == "__main__":
    main()
