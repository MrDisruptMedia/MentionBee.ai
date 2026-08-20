export type FaqEntry = {
  id: string;
  question: string;
  answer: string;
};

/** Homepage FAQ teaser — Source of Truth: AI Visibility Audit storyline */
export const faqEntries: FaqEntry[] = [
  {
    id: "was-ist-ai-visibility-audit",
    question: "Was genau ist ein AI Visibility Audit?",
    answer:
      "Eine strukturierte Bestandsaufnahme deiner Sichtbarkeit in KI-Antworten sowie relevanter inhaltlicher, technischer und digitaler Faktoren. Der Audit ist die Untersuchung; das Ergebnis erhältst du als Report.",
  },
  {
    id: "garantie-empfehlung",
    question: "Garantiert MentionBee, dass ChatGPT oder andere KI-Systeme mich danach empfehlen?",
    answer:
      "Nein. Eine solche Garantie wäre unseriös. Der Report zeigt dir beobachtbare Befunde, plausible Einflussfaktoren und konkrete Ansatzpunkte – nicht einen geheimen Algorithmus für garantierte KI-Rankings.",
  },
  {
    id: "abo-noetig",
    question: "Brauche ich danach ein Abo?",
    answer:
      "Nein. Der Report ist eine einmalige Analyse. Du entscheidest danach selbst, welche Massnahmen du umsetzt.",
  },
  {
    id: "selbst-machen",
    question: "Kann ich die Analyse auch selbst machen?",
    answer:
      "Einzelne KI-Abfragen kannst und solltest du selbst ausprobieren. MentionBee geht darüber hinaus und führt die Beobachtungen mit Wettbewerbs-, Content-, Website- und technischen Analysen zu einer strukturierten Diagnose zusammen.",
  },
  {
    id: "chatgpt-selbst-fragen",
    question: "Kann ich nicht einfach selbst ChatGPT fragen?",
    answer:
      "Ja. Und das solltest du sogar. Frag ChatGPT, Claude, Gemini oder Perplexity nach Anbietern aus deinem Markt und schau, wer genannt wird. Eine einzelne Antwort zeigt dir aber noch nicht, wie belastbar diese Beobachtung ist – und vor allem nicht, warum ein Wettbewerber auftaucht und du nicht. Der AI Visibility Audit untersucht deshalb mehrere kaufnahe Fragen über vier KI-Systeme hinweg und verbindet die Ergebnisse mit der Analyse deiner Website, deiner Inhalte, deiner technischen Voraussetzungen, deiner digitalen Präsenz und relevanter Marktsignale. So erfährst du nicht nur, ob du sichtbar bist, sondern wo du zuerst ansetzen solltest.",
  },
  {
    id: "umfang-analyse",
    question: "Wie umfangreich ist die Analyse?",
    answer:
      "Ein typischer MentionBee-Report wertet über 120 Datenpunkte aus. Dazu gehören deine Sichtbarkeit bei kaufnahen Fragen in vier KI-Systemen, die Erwähnungen relevanter Wettbewerber sowie mehr als 60 Prüfungen deiner Inhalte, Website, technischen Voraussetzungen, Vertrauens- und Marktsignale. Die genaue Zahl variiert je nach Anzahl der untersuchten Fragen und Wettbewerber.",
  },
];
