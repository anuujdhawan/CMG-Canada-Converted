/* Publish a plain-language, useful guide to Telegraph (anonymous publishing).
   Content is original, non-promotional, and carries contextual links only. */
const { chromium } = require("playwright");

const TITLE = "How to Check an Immigration Consultant Before You Hire One in Canada";

const PARAGRAPHS = [
  `Hiring someone to handle an immigration application is a significant decision. The application affects where you can live, study and work, and mistakes are expensive to correct. The good news is that a few basic checks remove most of the risk.`,

  `Start with authorization. In Canada, only regulated immigration consultants, licensed lawyers and (in Quebec) notaries may represent you for a fee. A consultant should be in good standing with the College of Immigration and Citizenship Consultants (CICC). The public register is free to search, and the record will show the person's name, licence number and current status. If a name does not match the register, stop there.`,

  `Ask for the scope in writing. A proper agreement states exactly which applications will be prepared, what documents you must provide, the total fee, and what happens if the application is refused or delayed. Vague phrases such as "full immigration service" are not useful. You should also receive copies of everything filed in your name.`,

  `Treat guarantees as a warning sign. No representative can promise a visa, a work permit or permanent residence. IRCC makes the final decision. Someone who guarantees an outcome is either inexperienced or being dishonest, and neither is acceptable when your status is at stake.`,

  `Check who actually does the work. Some offices pitch themselves around one well-known consultant but assign most files to junior staff. Ask who will prepare your application, who will review it, and who you can contact when something changes. Get the answer in writing along with the fee.`,

  `Understand the complaint route. Regulated consultants are answerable to the CICC. Lawyers are regulated by their provincial law society. Before paying, find out which body oversees the person you are dealing with — if the answer is unclear, that is itself a signal.`,

  `Location matters less than people expect. Most immigration work is done by video, phone and email, so you are not limited to your own city. If you do want to meet someone locally, confirm the office address independently. A Brampton-based practice, for example, should list a verifiable Brampton address and consistent contact details across its website and business listings.`,

  `Finally, keep your own records. Save dated copies of the advice you received, the forms that were filed, and every letter from IRCC. If something goes wrong, a clear file history makes it far easier to get the problem fixed.`,

  `For a fuller checklist, see this guide to choosing an immigration consultant in Brampton: https://commonwealthmigration.ca/blog/immigration-consultant-brampton`,

  `General information only — not legal advice. Requirements change; confirm current rules with IRCC. Prepared by Commonwealth Migration Group Inc., Brampton, Ontario (Pankaj Khanna, RCIC, CICC R711256). https://commonwealthmigration.ca`,
];

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: ["--no-sandbox", "--disable-gpu-sandbox", "--disable-dev-shm-usage"],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto("https://telegra.ph", { waitUntil: "networkidle", timeout: 40000 });
  await page.waitForTimeout(1200);

  // Single Quill editor: <h1 data-label=Title>, <address data-label=Author>,
  // then <p data-placeholder="Your story...">. Fill each block explicitly.
  const title = page.locator('[data-label="Title"]').first();
  await title.click();
  await page.keyboard.type(TITLE);

  const author = page.locator('[data-label="Author"]').first();
  await author.click();
  await page.keyboard.type("Commonwealth Migration Group");

  const story = page.locator('[data-placeholder="Your story..."]').first();
  await story.click();
  for (const p of PARAGRAPHS) {
    await page.keyboard.type(p);
    await page.keyboard.press("Enter");
  }
  await page.waitForTimeout(800);
  console.log("editor length:", (await page.locator(".ql-editor").first().innerText()).length);

  // Find the publish button by text or class.
  const buttons = page.locator("button, .button, [role=button]");
  const n = await buttons.count();
  console.log("buttons:", n);
  for (let i = 0; i < n; i++) {
    const t = (await buttons.nth(i).innerText().catch(() => "")) || "";
    const c = await buttons.nth(i).evaluate((e) => e.className || "").catch(() => "");
    console.log(i, JSON.stringify(t.slice(0, 40)), c.slice(0, 80));
  }

  // Telegraph publish button is typically .button with text "Publish".
  const publish = page.getByText("Publish", { exact: true }).first();
  if (await publish.count()) {
    console.log("clicking Publish");
    await publish.click();
    await page.waitForTimeout(3000);
    console.log("RESULT URL:", page.url());
    console.log("BODY:", (await page.locator("body").innerText()).slice(0, 300));
  } else {
    console.log("PUBLISH BUTTON NOT FOUND — no publish executed");
  }

  await browser.close();
})().catch((e) => { console.error("ERR", e.message); process.exit(1); });
