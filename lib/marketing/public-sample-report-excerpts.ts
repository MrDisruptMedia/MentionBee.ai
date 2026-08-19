/**
 * Homepage product-proof excerpts sourced from the public Disrupt Media
 * sample at `/sample-report`. Do not add invented competitors, questions,
 * scores, or measures. Do not copy stale sample claims (e.g. “0 von 24”,
 * Deep-Dive, PageSpeed API-key row).
 */

export const PUBLIC_SAMPLE_COMPANY = "Disrupt Media";

/** Module score from the public sample MentionBee Score board. */
export const PUBLIC_SAMPLE_AI_MENTION_MODULE = {
  name: "KI-Erwähnungen",
  scoreLabel: "2.0",
  max: 10,
} as const;

/**
 * Mention status per provider as shown on `/sample-report` (all “Nicht erwähnt”).
 * Display order follows the current product listing, not the sample’s Claude-first order.
 */
export const PUBLIC_SAMPLE_AI_PROVIDERS = [
  { name: "ChatGPT", mentioned: false },
  { name: "Claude", mentioned: false },
  { name: "Gemini", mentioned: false },
  { name: "Perplexity", mentioned: false },
] as const;

/**
 * First three measures from `/sample-report` (“Deine 10 Top-Maßnahmen”).
 * Rank is display order on that page. Badges exist only on the first measure.
 */
export const PUBLIC_SAMPLE_MEASURES = [
  {
    rank: 1,
    title: "llms.txt für Disrupt Media erstellen",
    badges: [
      { label: "Quick Win", tone: "accent" },
      { label: "Hoch", tone: "high" },
      { label: "Klein", tone: "neutral" },
    ],
    problem: "KI-Systeme haben keinen strukturierten Überblick über deine Angebote",
    solution: "Erstelle eine /llms.txt-Datei mit deinen Kern-Angeboten",
  },
  {
    rank: 2,
    title: "Google Business Profile mit KI-tauglichen FAQs pflegen",
    badges: [],
    problem:
      "Lokale und vertrauensbildende Signale sind nicht strukturiert – KI-Systeme erkennen deine Relevanz im Raum Zürich schlecht.",
    solution:
      "Ergänze FAQs mit klaren Entitäten, Leistungen und Standorten; verknüpfe sie mit deinen Money-Pages.",
  },
  {
    rank: 3,
    title: "Thought-Leadership zu AI Visibility & Conversion Tracking",
    badges: [],
    problem:
      "Fachliche Tiefe zu deinen Kern-Themen fehlt als eigenständige, zitierfähige Inhalte – du wirst nicht als Go-to-Expert wahrgenommen.",
    solution:
      "Veröffentliche 2–3 analystische Artikel mit klaren Definitionen, Frameworks und Fallstudien; verlinke intern auf Services.",
  },
] as const;
