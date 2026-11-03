import rankingFile from "@/content/ki-index/zweisprachige-kitas-zuerich/ranking.json";

const DENOMINATOR = 72;

const DIRECTORY_HOSTS = new Set([
  "stadt-zuerich.ch",
  "zuerich.ch",
  "google.com",
  "google.ch",
  "wikipedia.org",
  "local.ch",
  "search.ch",
  "facebook.com",
  "instagram.com",
  "linkedin.com",
  "youtube.com",
  "yelp.com",
  "swiss90.com",
  "kitamaps.ch",
  "liliput.ch",
  "provenexpert.com",
  "kitasuche.ch",
  "kinderkrippen-online.ch",
  "awina.ch",
  "allbiz.ch",
]);

type StoredProvider = {
  rank: number;
  id: string;
  name: string;
  website: string | null;
  recommendedCount: number;
  empfehlungsquote: number;
  modelsRecommending?: number;
  models?: string[];
};

type StoredRanking = {
  denominator: number;
  collectedFrom: string | null;
  questions: Array<{ id: string; lang: string; text: string }>;
  models: Record<string, string>;
  providers: StoredProvider[];
  unresolved: Array<{ name: string; answers: string[] }>;
  completeness: { ok: number; expected: number };
};

const ranking = rankingFile as StoredRanking;

export type IndexProviderRow = {
  rank: number;
  id: string;
  name: string;
  href: string | null;
  recommendedCount: number;
  empfehlungsquote: number;
  barPercent: number;
  modelsRecommending: number | null;
  modelNames: string;
};

function hostOf(website: string): string | null {
  try {
    return new URL(website).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return null;
  }
}

export function verifiedProviderHref(website: string | null | undefined): string | null {
  if (!website?.trim()) return null;
  let url: URL;
  try {
    url = new URL(website);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return null;
  const host = hostOf(website);
  if (!host || DIRECTORY_HOSTS.has(host)) return null;
  return url.toString();
}

function assertPublicationShape(): void {
  if (ranking.denominator !== DENOMINATOR || ranking.completeness.expected !== DENOMINATOR) {
    throw new Error("Der Nenner dieses Index ist 72.");
  }
  if (ranking.completeness.ok !== DENOMINATOR) {
    throw new Error("Die Veröffentlichung setzt 72 gespeicherte Antworten voraus.");
  }
  if (ranking.questions.length !== 6) {
    throw new Error("Der Index erwartet die sechs gespeicherten Fragen.");
  }
  const modelIds = ["claude", "chatgpt", "gemini", "perplexity"].map((key) => ranking.models[key]);
  if (modelIds.some((id) => !id)) {
    throw new Error("Eine Modellbezeichnung fehlt in den gespeicherten Ergebnissen.");
  }
  const ambiguous = ranking.unresolved.filter((row) => row.name === "Akidemy / globegarden");
  if (ambiguous.length !== 1 || ambiguous[0]?.answers.length !== 4) {
    throw new Error("Der Stand der vier Akidemy/globegarden-Nennungen hat sich geändert.");
  }
  if (!ranking.collectedFrom?.startsWith("2026-11-03")) {
    throw new Error("Das Erhebungsdatum weicht vom 3. November 2026 ab.");
  }
}

assertPublicationShape();

const MODEL_LABEL_BY_KEY: Record<string, string> = {
  claude: "Claude",
  chatgpt: "ChatGPT",
  gemini: "Gemini",
  perplexity: "Perplexity",
};

function modelLabel(key: string): string {
  return MODEL_LABEL_BY_KEY[key] ?? key;
}

const modelCount = Object.keys(ranking.models).length;

const recommended: IndexProviderRow[] = ranking.providers
  .filter((row) => row.recommendedCount > 0)
  .map((row) => ({
    rank: row.rank,
    id: row.id,
    name: row.name,
    href: verifiedProviderHref(row.website),
    recommendedCount: row.recommendedCount,
    empfehlungsquote: row.empfehlungsquote,
    barPercent: row.empfehlungsquote,
    modelsRecommending: typeof row.modelsRecommending === "number" ? row.modelsRecommending : null,
    modelNames: (row.models ?? []).map(modelLabel).join(", "),
  }));

const leader = recommended[0];
const second = recommended[1];
const third = recommended[2];
if (!leader || !second || !third || leader.name !== "KiddieLand" || leader.recommendedCount !== 54) {
  throw new Error("Die Führungszahl von KiddieLand weicht von 54 von 72 ab.");
}

const GAP_WORDS = ["null", "eine", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn"];
const recommendationGap = leader.recommendedCount - second.recommendedCount;
const gapWords = GAP_WORDS[recommendationGap] ?? String(recommendationGap);
const gapPhrase = recommendationGap === 1 ? "eine Empfehlung" : `${gapWords} Empfehlungen`;

const ENGLISH_QUESTION_DE =
  "Wir ziehen mit unserem dreijährigen Kind nach Zürich. Welche deutsch-englischsprachigen Kitas würdest du empfehlen?";

export const kitaIndexDraft = {
  denominator: DENOMINATOR,
  modelCount,
  collectedAt: ranking.collectedFrom!,
  title: "Welche zweisprachigen Kitas in Zürich empfehlen KI-Systeme?",
  lead: "Wir haben ChatGPT, Claude, Gemini und Perplexity sechs Fragen zu deutsch-englischen Kinderbetreuungsangeboten in Zürich gestellt. Aus den 72 Antworten ergibt sich ein klares Bild: Einige Anbieter werden besonders häufig empfohlen.",
  resultTitle: `And the winner is … ${leader.name}`,
  result: [
    `Von insgesamt ${recommended.length} empfohlenen Anbietern erreicht ${leader.name} die höchste Empfehlungsquote. Die deutsch-englischsprachige Kita in Zürich-Wipkingen wurde in ${leader.recommendedCount} von ${DENOMINATOR} Antworten empfohlen – das entspricht ${leader.empfehlungsquote} Prozent.`,
    `Damit liegt ${leader.name} ${gapPhrase} vor ${second.name} mit ${second.recommendedCount} von ${DENOMINATOR} Antworten. Auf Platz drei folgt ${third.name} mit ${third.recommendedCount} Empfehlungen.`,
  ],
  counting:
    "Jede Frage wurde jedem der vier KI-Systeme dreimal gestellt. Anschliessend haben wir verglichen, welche Anbieter empfohlen wurden: Pro Antwort zählt jede Kita-Marke höchstens einmal – auch wenn sie mit verschiedenen Namen oder Standorten auftaucht.",
  collectedLabel: new Intl.DateTimeFormat("de-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Zurich",
  }).format(new Date(ranking.collectedFrom!)),
  questions: ranking.questions.map((question) => ({
    id: question.id,
    lang: question.lang,
    text: question.text,
    displayText:
      question.lang === "en" && question.text.startsWith("We're moving to Zurich")
        ? ENGLISH_QUESTION_DE
        : question.text,
  })),
  models: [
    { label: "Claude", modelId: ranking.models.claude },
    { label: "ChatGPT", modelId: ranking.models.chatgpt },
    { label: "Gemini", modelId: ranking.models.gemini },
    { label: "Perplexity", modelId: ranking.models.perplexity },
  ],
  methodology: [
    "Erhebung am 3. November 2026.",
    `Vier Modelle: Claude (${ranking.models.claude}), ChatGPT (${ranking.models.chatgpt}), Gemini (${ranking.models.gemini}) und Perplexity (${ranking.models.perplexity}).`,
    "72 gespeicherte Antworten.",
    "Gezählt werden Empfehlungen je Marke. In einer Antwort zählt jede Marke höchstens einmal.",
    "Empfehlungsquote = Antworten mit Empfehlung / 72.",
    "Namens- und Standortvarianten wurden zusammengeführt.",
    "Vier mehrdeutige Nennungen «Akidemy / globegarden» wurden keiner der beiden Marken zugerechnet.",
    "Die Antworten stammen aus einzelnen API-Abfragen mit Websuche. In den Chat-Anwendungen derselben Anbieter kann dieselbe Frage anders beantwortet werden.",
  ],
  einordnung:
    "Der Index misst die Sichtbarkeit in den untersuchten KI-Antworten. Er bewertet nicht die Betreuungsqualität. Andere Fragen, Modelle oder Erhebungszeitpunkte können andere Ergebnisse liefern.",
  providers: recommended,
};

/** Gleicher Lesetakt wie die Blog-Beiträge: 220 Wörter je Minute. */
export function readingMinutesFromText(text: string): number | null {
  const words = text.split(/\s+/).filter(Boolean).length;
  if (words === 0) return null;
  return Math.max(1, Math.round(words / 220));
}

export function splitVisibleRanking(rows: IndexProviderRow[], initialCount = 10): {
  shown: IndexProviderRow[];
  rest: IndexProviderRow[];
} {
  const head = rows.slice(0, initialCount);
  if (head.length < initialCount) return { shown: head, rest: [] };
  const floor = head[head.length - 1]!.recommendedCount;
  let end = initialCount;
  while (end < rows.length && rows[end]!.recommendedCount === floor) end += 1;
  return { shown: rows.slice(0, end), rest: rows.slice(end) };
}
