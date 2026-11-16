/* Publish original, useful guides to Telegraph (anonymous, indexable pages).
   Each carries contextual links back to commonwealthmigration.ca. */
const { chromium } = require("playwright");

const POSTS = [
  {
    title: "Open vs Employer-Specific Work Permits: A Canadian Guide for 2026",
    author: "Commonwealth Migration Group",
    paragraphs: [
      "Every Canadian work permit falls into one of two categories: open or employer-specific. Understanding the difference matters because it determines whether you can change jobs, what documents you need, and what happens if your employment ends.",
      "An open permit does not name an employer. Holders can generally work for almost any employer, subject to a few restrictions. Common examples include post-graduation work permits, open work permits for spouses and partners, and permits issued to some applicants with a permanent residence application in progress.",
      "An employer-specific permit names one employer, and often one role and location. To get one, the employer usually needs either a positive Labour Market Impact Assessment (LMIA) or a valid LMIA exemption code. Changing jobs normally means applying for a new permit before starting the new role.",
      "The Temporary Foreign Worker Program covers LMIA-based hiring. The employer carries the recruitment and compliance obligations. A positive LMIA is the employer's document — it does not guarantee that the worker's permit application will be approved.",
      "The Global Talent Stream is a faster, employer-driven stream inside the Temporary Foreign Worker Program for certain technology and specialised occupations. It requires a Labour Market Benefits Plan and is still tied to one employer; it is not an open permit.",
      "A common mistake is starting a new job before the new permit or written authorization is in place. In some situations a worker can ask IRCC for permission to begin a new role while a new application is processed, but the request must be made first.",
      "Another frequent problem is assuming that a job ending automatically ends status. It does not. But an employer-specific permit no longer covers work for a different employer, so the worker needs to check the rules carefully before moving.",
      "For a fuller explanation, see this guide to Canadian work permit types in 2026: https://commonwealthmigration.ca/blog/canada-work-permit-types-2026",
      "Employer obligations under the Temporary Foreign Worker Program are explained here: https://commonwealthmigration.ca/work-and-study/tfwp-employer-compliance",
      "General information only — not legal advice. Requirements change; confirm current rules with IRCC and ESDC. Prepared by Commonwealth Migration Group Inc., Brampton, Ontario (Pankaj Khanna, RCIC, CICC R711256). https://commonwealthmigration.ca",
    ],
  },
  {
    title: "A Newcomer's Information Checklist After Arriving in Canada",
    author: "Commonwealth Migration Group",
    paragraphs: [
      "Most newcomers do not arrive with the wrong documents. They arrive with outdated ones, or with advice that was accurate for someone else's situation. Immigration rules change often, and acting on last year's guidance can create real problems.",
      "Start with a clear information hierarchy. IRCC, CBSA, ESDC and provincial nomination websites are the authoritative sources for rules, forms and fees. Community advice is useful for day-to-day settlement, but anything about status, deadlines or eligibility should be verified against an official source before you rely on it.",
      "If you pay someone for immigration advice, confirm they are authorized. In Canada that means a regulated immigration consultant, a licensed lawyer, or (in Quebec) a notary. Consultants should appear on the CICC public register with an eligible-to-provide-service status.",
      "A few practical habits prevent most difficulties. Keep dated copies of the advice you receive and the documents filed in your name. Diarise expiry dates well in advance. Never hand over original documents permanently, and never accept a guarantee about an immigration outcome.",
      "In your first month, confirm your status documents and expiry dates, check that your work or study conditions match what you actually plan to do, and set up a dedicated folder for immigration correspondence. A clear file history makes it much easier to fix a problem later.",
      "Learn which decisions can be appealed or reconsidered and what the deadlines are. Deadlines in immigration matters are usually short and missing one can close the door to a useful remedy.",
      "The same problem — verifying advice before relying on it — is covered in more detail in this guide to choosing an immigration consultant in Brampton: https://commonwealthmigration.ca/blog/immigration-consultant-brampton",
      "General information only — not legal advice. Confirm current requirements with IRCC. Prepared by Commonwealth Migration Group Inc., Brampton, Ontario (Pankaj Khanna, RCIC, CICC R711256). https://commonwealthmigration.ca",
    ],
  },
];

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: ["--no-sandbox", "--disable-gpu-sandbox", "--disable-dev-shm-usage"],
  });
  for (const post of POSTS) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto("https://telegra.ph", { waitUntil: "networkidle", timeout: 40000 });
    await page.waitForTimeout(1000);

    await page.locator('[data-label="Title"]').first().click();
    await page.keyboard.type(post.title);
    await page.locator('[data-label="Author"]').first().click();
    await page.keyboard.type(post.author);
    await page.locator('[data-placeholder="Your story..."]').first().click();
    for (const p of post.paragraphs) {
      await page.keyboard.type(p);
      await page.keyboard.press("Enter");
    }
    await page.waitForTimeout(500);
    await page.getByText("Publish", { exact: true }).first().click();
    await page.waitForTimeout(3000);
    console.log(post.title, "=>", page.url());
    await page.close();
  }
  await browser.close();
})().catch((e) => { console.error("ERR", e.message); process.exit(1); });
