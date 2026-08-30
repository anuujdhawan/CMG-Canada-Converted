import Image from "next/image";
import { getImageObjectPosition } from "@/lib/imagePresentation";

const image = (file, label, alt) => ({
  src: `/images/pages/${file}.webp`,
  label,
  alt,
  story: GALLERY_STORIES[label] || alt,
});

const GALLERY_STORIES = {
  Together: "A strong pathway keeps the people you love moving toward the same future.",
  Family: "The right plan creates more room for the moments that matter most.",
  "A shared plan": "Clear advice turns a shared goal into a practical next step.",
  Evidence: "Every detail helps tell a complete, credible story to the decision-maker.",
  "A new home": "Picture the life your pathway is helping you build.",
  "Choose your city": "The right city can shape how your new chapter feels day to day.",
  "Canada-wide": "Your future can take shape in the community that fits you best.",
  Belonging: "A new beginning feels different when it starts to feel like home.",
  Belong: "Build a future that feels rooted, connected and truly yours.",
  "Your next chapter": "One thoughtful step today can change where tomorrow begins.",
  Opportunity: "The right route can connect your experience with meaningful opportunity.",
  Expertise: "Bring your skills forward with a plan shaped around your real profile.",
  "One team": "Good outcomes are built when every contributor is working from the same plan.",
  "The file": "A focused review brings the important facts into a clearer sequence.",
  Preparation: "Strong preparation turns uncertainty into a clear next move.",
  Momentum: "Once the route is clear, the next decisions become easier to make.",
  "Move forward": "A practical plan helps you keep moving when the process feels complex.",
  Learn: "The right learning path starts with a clear picture of what comes next.",
  "Choose well": "A considered choice can support both your goals now and your options later.",
  Graduate: "Education becomes a launch point for the future you are working toward.",
  "Find your place": "A route that fits your profile can open the right doors.",
  "Prepare well": "Good preparation turns uncertainty into a clear next move.",
  "Clear guidance": "Expert guidance keeps the important details moving together.",
  "Build skills": "Each new skill adds confidence to the next stage of your journey.",
  Prepare: "A calm, organized review makes the next step easier to see.",
  "Make it home": "Small decisions along the way can lead to a life that feels truly yours.",
  "The next step": "Turn a broad ambition into one clear, achievable move.",
  People: "Your people and your purpose are part of the pathway—not an afterthought.",
  "A stronger team": "The right people in the right roles create momentum that lasts.",
  "A defensible plan": "A strong case connects your goals, evidence and timing into one story.",
  Strategy: "The best route is the one that makes sense for the full picture.",
  Leadership: "Move with confidence when the plan reflects the decisions ahead.",
  Decisions: "Clear context helps important choices feel less overwhelming.",
  Clarity: "When the details align, the way forward becomes easier to act on.",
  Partnership: "The right support turns a complex process into a shared plan.",
  "Where growth leads": "Build toward a place where your next opportunity can take root.",
  "Ready to travel": "Make the practical details feel settled before the journey begins.",
  Arrival: "A smoother arrival starts with thoughtful preparation before takeoff.",
  Explore: "Leave room for discovery while keeping the important details in view.",
  "Stay awhile": "Sometimes the first visit is the beginning of a longer story.",
  Welcome: "Arrive with a plan—and make the first moments count.",
  Discover: "Find the places and possibilities that make Canada feel personal.",
  "The destination": "A meaningful destination begins with a route designed for you.",
  "Travel with confidence": "Know what is ready before you set out.",
  "Read the concern": "Start by understanding exactly what the decision-maker needs to see.",
  "Shape the response": "A focused response gives the important facts their clearest voice.",
  "Protect the deadline": "Good timing protects the options still available to you.",
  "Own the next step": "Clarity returns when the next action is visible and within reach.",
  "Build the evidence": "Relevant evidence makes the story behind the file easier to understand.",
  "A way forward": "Even a difficult decision can have a considered next chapter.",
  "Keep perspective": "A wider view helps you respond thoughtfully under pressure.",
  "Begin again": "The next attempt can be stronger when the lessons are carried forward.",
  "The workforce": "A well-matched workforce helps both people and businesses move ahead.",
  "Specialized talent": "Bring the right expertise to the work that needs it most.",
  Compliance: "Confidence comes from knowing the plan is built to stand up to scrutiny.",
  "Employer planning": "A clear employer plan protects both the business and the people it needs.",
  "Grow in Canada": "Build a team and a future with room to grow.",
};

const GRID_POSITIONS = [
  "",
  "col-start-2 row-start-1",
  "col-start-3 row-start-1",
  "col-start-2 row-start-2",
  "col-start-3 row-start-2",
  "col-start-1 row-start-3",
  "col-start-2 row-start-3",
  "col-start-3 row-start-3",
];

const GALLERY_BY_CATEGORY = {
  family: [
    image("couple", "Together", "Couple walking together in a Canadian city"),
    image("family", "Family", "Family spending time together at home"),
    image("handshake-two", "A shared plan", "Two people shaking hands after a consultation"),
    image("documents", "Evidence", "Organized immigration documents on a desk"),
    image("canada-flag", "A new home", "Canadian flag flying in the sunlight"),
    image("toronto-skyline", "Canada-wide", "Toronto skyline with the CN Tower"),
    image("city-night", "Belonging", "Canadian city skyline illuminated at night"),
    image("maple-leaf", "Your next chapter", "Red maple leaf against a Canadian landscape"),
  ],
  work: [
    image("workers", "Opportunity", "Workers on a Canadian construction site"),
    image("engineer", "Expertise", "Engineer reviewing plans at work"),
    image("team-meeting", "One team", "Professionals collaborating around a table"),
    image("office-meeting", "The file", "Consultants reviewing an immigration file with a client"),
    image("documents", "Preparation", "Organized work permit documents on a desk"),
    image("business-team", "Momentum", "Business team working together in an office"),
    image("toronto-skyline", "Canada-wide", "Toronto skyline at golden hour"),
    image("canada-flag", "Move forward", "Canadian flag outside a modern building"),
  ],
  study: [
    image("students-study", "Learn", "International students studying together"),
    image("university-campus", "Choose well", "Canadian university campus building"),
    image("graduation", "Graduate", "Graduates celebrating at a Canadian university"),
    image("students", "Find your place", "Students walking across a university campus"),
    image("students-nursing", "Build skills", "Students learning together in a classroom"),
    image("documents", "Prepare", "Study permit documents organized for review"),
    image("canada-flag", "Make it home", "Canadian flag in a bright campus setting"),
    image("university", "The next step", "Modern Canadian university architecture"),
  ],
  business: [
    image("business-team", "People", "Business team collaborating in a bright office"),
    image("business-plan", "A defensible plan", "Business plan and notes on a desk"),
    image("business-planning", "Strategy", "Team planning a business pathway"),
    image("businessman", "Leadership", "Business professional working at a desk"),
    image("office-meeting", "Decisions", "Business meeting with documents on the table"),
    image("meeting-whiteboard", "Clarity", "Team working through a plan on a whiteboard"),
    image("handshake-two", "Partnership", "Professional handshake during a meeting"),
    image("city-night", "Where growth leads", "Canadian city lights after dark"),
  ],
  travel: [
    image("travel-passport", "Ready to travel", "Passport and boarding pass prepared for travel"),
    image("airport", "Arrival", "Airplane wing above the clouds"),
    image("city-street", "Explore", "People walking through a Canadian city street"),
    image("city-night", "Stay awhile", "Canadian city skyline illuminated at night"),
    image("canada-flag", "Welcome", "Canadian flag waving outside a building"),
    image("vancouver-harbour", "Discover", "Vancouver harbour and mountain skyline"),
    image("mountain-lake", "The destination", "Mountain lake in the Canadian Rockies"),
    image("documents", "Travel with confidence", "Travel documents ready for a review"),
  ],
  appeals: [
    image("documents", "Read the concern", "Immigration documents under careful review"),
    image("meeting-whiteboard", "Shape the response", "Consultant explaining a response strategy"),
    image("office-desk", "Protect the deadline", "Organized desk with a focused case plan"),
    image("handshake-two", "Own the next step", "Client and consultant shaking hands"),
    image("team-laptops", "Build the evidence", "Professionals working through case documents"),
    image("city-night", "A way forward", "Canadian city skyline at night"),
    image("canada-flag", "Keep perspective", "Canadian flag against a clear sky"),
    image("maple-leaf", "Begin again", "Maple leaf resting on a Canadian landscape"),
  ],
  employers: [
    image("workers", "The workforce", "Workers on a Canadian job site"),
    image("engineer", "Specialized talent", "Engineer reviewing detailed plans"),
    image("business-team", "A stronger team", "Business team collaborating in an office"),
    image("business-plan", "Compliance", "Business plan and compliance notes"),
    image("businesswoman", "Leadership", "Business professional working in an office"),
    image("office-meeting", "Employer planning", "Employer and consultant reviewing a plan"),
    image("handshake", "Partnership", "Employer and advisor shaking hands"),
    image("city-night", "Grow in Canada", "Canadian city skyline after dark"),
  ],
  pr: [
    image("toronto-skyline", "A new home", "Toronto skyline with the CN Tower"),
    image("city-skyline", "Choose your city", "Canadian skyline viewed across the water"),
    image("vancouver", "Find your place", "Vancouver skyline and harbour"),
    image("canada-flag", "Welcome", "Canadian flag flying in the sunlight"),
    image("documents", "Prepare well", "Organized immigration documents"),
    image("team-meeting", "Clear guidance", "Professionals collaborating on a case"),
    image("maple-leaf", "Belong", "Maple leaf in an autumn landscape"),
    image("autumn-forest", "Your next chapter", "Autumn forest in Canada"),
  ],
};

export function getServiceImageCategory(page) {
  const text = `${page?.path || ""} ${page?.h1 || ""}`.toLowerCase();

  if (/(employer|lmia|global talent|tfwp|recruit|esdc)/.test(text)) return "employers";
  if (/(refusal|appeal|inadmissib|misrepresentation|judicial|procedural fairness)/.test(text)) return "appeals";
  if (/(family|spous|sponsor|parent|pgp|citizenship)/.test(text)) return "family";
  if (/(visitor|super visa|eta|transit|airport|temporary resident|travel)/.test(text)) return "travel";
  if (/(business|start-up|startup|entrepreneur|self-employed)/.test(text)) return "business";
  if (/(work permit|work visa|work authorization|caregiver|worker|lmia)/.test(text)) return "work";
  if (/(study permit|student|pgwp|post-graduation|education|university)/.test(text)) return "study";
  return "pr";
}

export default function ServiceImageGallery({ page }) {
  const category = getServiceImageCategory(page);
  const images = GALLERY_BY_CATEGORY[category];

  return (
    <section className="section relative z-[1] bg-[var(--surface-alt)] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 alt service-image-section overflow-hidden" aria-labelledby="service-image-heading">
      <div className="section-inner mx-auto w-[var(--container)]">
        <header className="service-image-gallery__head grid grid-cols-[1.05fr_.95fr] items-end gap-[45px] max-[880px]:grid-cols-1 max-[880px]:gap-[18px] reveal">
          <div>
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">A visual route guide</p>
            <h2 id="service-image-heading" className="max-w-[650px] m-0 text-[clamp(31px,1.7rem+2.6vw,50px)] font-semibold tracking-[-0.03em] leading-[1.04] max-[620px]:text-[clamp(29px,9.5vw,40px)]">See the pathway in context</h2>
          </div>
          <p className="max-w-[470px] m-[0_0_3px_auto] text-[var(--muted)] text-[16px] leading-[1.75] max-[880px]:ml-0 max-[620px]:text-[14px]">Every file has a human story behind it. These moments reflect the preparation, decisions and new beginnings that shape this service.</p>
        </header>

        <div className="service-image-gallery grid grid-cols-3 grid-rows-[repeat(3,190px)] gap-[14px] mt-[38px] max-[880px]:grid-cols-2 max-[880px]:grid-rows-none max-[620px]:grid-cols-1 max-[620px]:gap-3 max-[620px]:mt-7" data-gallery-category={category}>
          {images.map((item, index) => (
            <figure
              className={`service-image-gallery__item group relative min-h-[190px] m-0 overflow-hidden border border-[var(--border)] rounded-[22px] bg-[var(--surface)] shadow-[var(--shadow-soft)] isolate after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(180deg,transparent_40%,color-mix(in_srgb,var(--cmg-template-deep-surface)_82%,transparent))] after:content-[''] after:pointer-events-none max-[880px]:col-auto max-[880px]:row-auto max-[880px]:min-h-[215px] max-[620px]:min-h-[230px] max-[620px]:rounded-[18px] ${GRID_POSITIONS[index]} ${index === 0 ? "service-image-gallery__item--featured col-start-1 row-start-1 row-span-2 min-h-[380px] max-[880px]:col-start-1 max-[880px]:row-span-2 max-[880px]:min-h-[445px] max-[620px]:col-auto max-[620px]:row-auto max-[620px]:min-h-[330px]" : ""} reveal`}
              key={item.src}
              tabIndex={0}
              role="group"
              aria-label={`${item.label}: ${item.story}`}
              style={{ "--delay": `${index * 45}ms` }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 620px) 100vw, (max-width: 880px) 50vw, 32vw"
                className="service-image-gallery__image object-cover"
                style={{ objectPosition: getImageObjectPosition(item.src) }}
              />
              <figcaption className="service-image-gallery__caption absolute z-[2] right-[17px] bottom-[15px] left-[17px] text-[var(--template-on-primary)]">
                <div className="flex items-center gap-[10px]">
                  <span className="service-image-gallery__number text-[var(--primary)] text-[11px] font-extrabold leading-none tracking-[.12em]">0{index + 1}</span>
                  <strong className="service-image-gallery__title font-bold text-[14px] leading-[1.2] tracking-[.01em]">{item.label}</strong>
                </div>
                <p className="service-image-gallery__story">{item.story}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
