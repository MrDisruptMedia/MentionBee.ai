import { calculateTotalScore } from "@/lib/scoring/total-score";

/**
 * Homepage product-proof excerpts. Do not add invented competitors, questions,
 * scores, or measures. Do not copy stale sample claims (e.g. “0 von 24”,
 * Deep-Dive, PageSpeed API-key row). Do not use MEMS report data.
 */

/**
 * First three measures from `/sample-report` (“Deine 10 Top-Maßnahmen”).
 * Rank is display order on that page. Impact/effort/Quick-Win badges exist only
 * on the first measure in the public sample; do not invent them for 2–3.
 * Summaries compress the public problem/solution texts, without new advice.
 */
export const PUBLIC_SAMPLE_MEASURES = [
  {
    rank: 1,
    title: "llms.txt für Disrupt Media erstellen",
    quickWin: true,
    impact: "Hoch",
    effort: "Klein",
    summary: "KI-Systemen einen strukturierten Überblick über Angebote geben.",
  },
  {
    rank: 2,
    title: "Google Business Profile mit KI-tauglichen FAQs pflegen",
    summary:
      "Lokale Relevanz und vertrauensbildende Signale für KI-Systeme stärken.",
  },
  {
    rank: 3,
    title: "Thought-Leadership zu AI Visibility & Conversion Tracking",
    summary: "Fachliche Autorität zu den Kernthemen gezielt ausbauen.",
  },
] as const;

/** Same six module scores as shown on the homepage score excerpt (0–10 scale). */
const PUBLIC_SAMPLE_MODULE_SCORES = {
  llm: 2.0,
  pki: 5.6,
  technical_seo: 9.0,
  schema: 7.7,
  ux: 6.0,
  mss: 6.0,
} as const;

/**
 * Public MentionBee Score excerpt for homepage product proof.
 * Module names, descriptions, scores, and weights match the product score UI.
 * Overall total is derived via `calculateTotalScore` (same formula as paid reports).
 */
export const PUBLIC_SAMPLE_SCORE = {
  total: calculateTotalScore(PUBLIC_SAMPLE_MODULE_SCORES),
  max: 100,
  status: "Verbesserungspotenzial vorhanden",
  explanation:
    "Der Gesamtscore berechnet sich aus 6 Messbereichen, gewichtet nach ihrer Relevanz für deine KI-Sichtbarkeit und SEO-Performance.",
  modules: [
    {
      name: "KI-Präsenz & Sichtbarkeit",
      description:
        "Wie häufig und in welchem Kontext die Marke in Antworten von ChatGPT, Claude, Gemini und Perplexity erscheint",
      score: PUBLIC_SAMPLE_MODULE_SCORES.llm,
      weightPct: 30,
    },
    {
      name: "Inhalte & Verständlichkeit",
      description:
        "Wie klar, relevant und nachvollziehbar Angebot und Inhalte für Nutzer und KI-Systeme wirken",
      score: PUBLIC_SAMPLE_MODULE_SCORES.pki,
      weightPct: 25,
    },
    {
      name: "Technische Grundlagen",
      description: "Technische Basis für Suchmaschinen, KI-Crawler und saubere Erfassung von Inhalten",
      score: PUBLIC_SAMPLE_MODULE_SCORES.technical_seo,
      weightPct: 15,
    },
    {
      name: "Vertrauen & Expertise",
      description:
        "Signale für Erfahrung, Fachwissen, Autorität und Vertrauen (E-E-A-T) auf der Website",
      score: PUBLIC_SAMPLE_MODULE_SCORES.schema,
      weightPct: 10,
    },
    {
      name: "Nutzererlebnis & Conversion",
      description: "Nutzerführung, Orientierung und Conversion-Potenzial der Website",
      score: PUBLIC_SAMPLE_MODULE_SCORES.ux,
      weightPct: 10,
    },
    {
      name: "Externe Marktsignale",
      description: "Externe Signale wie Bewertungen, Presse, Erwähnungen und Branchenportale",
      score: PUBLIC_SAMPLE_MODULE_SCORES.mss,
      weightPct: 10,
    },
  ],
} as const;
