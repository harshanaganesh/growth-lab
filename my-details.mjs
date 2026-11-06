// ─────────────────────────────────────────────────────────────
//  MY DETAILS  ✏️  This is the only file you need to edit.
//
//  How to edit safely:
//   • Change only the words inside the "quotes".
//   • Keep every quote mark, comma and bracket exactly where it is.
//   • Save with Ctrl + S (Mac: Cmd + S). Your site updates by itself.
// ─────────────────────────────────────────────────────────────

export const me = {
  // ── Who you are ──────────────────────────────────────────
  name: "Harshana",                       // your full name
  role: "Growth Marketer & Analyst",
  location: "India",
  headline: "Current project: the AI Echo study. Every month I ask ChatGPT, Gemini, Perplexity and Copilot the same 20 questions about investing apps in India, track which apps they recommend and which sources they trust, and publish what I find.",
  intro:
    "I research how AI assistants are changing search, build free tools marketers actually use, and measure everything I ship.",
  openToWork: true,                       // shows the green “Open to roles” badge
  lookingFor: "Growth marketing and marketing analyst roles",

  // ── Your web address (after Level 5, paste your pages.dev address) ──
     siteUrl: "https://the-ai-echolab.pages.dev",

  // ── Where people can find you ────────────────────────────
  email: "harshana.growthlab@gmail.com",
  linkedin: "https://www.linkedin.com/in/harshanaganeshrajan/",
  github: "https://github.com/harshanaganesh",

  // ── Resume: drop resume.pdf into the "public" folder, then set true ──
  hasResume: false,

  // ── Tracking IDs (Level 6). Leave "" until you have them. ──
  ga4Id: "G-RWKFR2QZ7T",                              // looks like "G-AB12CD34EF"
  clarityId: "",                          // looks like "abc123xyz9"

  // ── Contact form (Level 6). Your Tally form ID, e.g. "w7Bq2a" ──
  tallyFormId: "",

  // ── Research dashboard (Idea 1). Looker Studio embed link. ──
  lookerEmbedUrl: "",                     // starts with https://lookerstudio.google.com/embed/...

  // ── Your research niche (Idea 1) ─────────────────────────
  study: {
       niche: "investing apps in India",
    questions: 20,
    assistants: ["ChatGPT", "Gemini", "Perplexity", "Copilot"],
    rounds: [
      { name: "Round 1", dates: "Nov 24–27, 2026", status: "Planned" },
      { name: "Round 2", dates: "Dec 22–25, 2026", status: "Planned" },
      { name: "Round 3", dates: "Jan 12–15, 2027", status: "Planned" },
    ],
  },

  // ── The big numbers on your home page ────────────────────
  //    Start with facts that are true today. Swap in results later.
  stats: [
    { value: "80", label: "AI answers collected every round" },
    { value: "4", label: "AI assistants tracked" },
    { value: "3", label: "monthly research rounds" },
    { value: "₹0", label: "spent on tools" },
  ],

  // ── Your Lab board. status can be "Planned", "Running" or "Done" ──
  experiments: [
    { name: "Which investing apps do AI assistants recommend in India?", project: "Research", status: "Running" },
    { name: "Can a new site get cited by AI in 6 weeks?", project: "Research", status: "Planned" },
    { name: "Does a pre-filled margin box lift completions?", project: "Tools", status: "Planned" },
  ],
  nowTesting: "Building the 20-question set for Round 1",

  // ── Skills and tools you use ─────────────────────────────
  toolkit: ["GA4", "Google Tag Manager", "Search Console", "Looker Studio", "Google Sheets", "Microsoft Clarity", "SEO", "A/B testing", "Astro", "GitHub"],
};
