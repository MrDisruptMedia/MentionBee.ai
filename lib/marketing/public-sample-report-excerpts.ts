/**
 * Homepage product-proof excerpts sourced from the public Disrupt Media
 * sample at `/sample-report`. Do not add invented competitors, questions,
 * scores, or measures. Do not copy stale sample claims (e.g. “0 von 24”,
 * Deep-Dive, PageSpeed API-key row).
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
