export type FaqEntry = {
  id: string;
  question: string;
  answer: string;
};

export const faqEntries: FaqEntry[] = [
  {
    id: "free-report-inhalt",
    question: "Was ist im kostenlosen Report enthalten?",
    answer:
      "Der kostenlose Report gibt dir einen ersten Überblick über deine Sichtbarkeit in ausgewählten KI-Antworten: ob deine Marke überhaupt vorkommt, wie oft sie erwähnt wird und ein kompaktes Fazit. Die Anzahl der geprüften Prompts ist bewusst begrenzt – genug, um ein Potenzial oder Problem zu erkennen.",
  },
  {
    id: "paid-difference",
    question: "Was ist im bezahlten Report anders?",
    answer:
      "Der Deep-Dive Report geht viel tiefer: mehr Prompts und Use Cases, ein strukturierter Wettbewerbsvergleich, Ursachenanalyse (warum du sichtbar bist oder nicht) und ein priorisierter Maßnahmenplan. Du siehst, in welchen Themenfeldern andere Marken dominieren und welche Hebel für dich am wirkungsvollsten sind.",
  },
  {
    id: "ai-systems",
    question: "Welche KI-Systeme werden analysiert?",
    answer:
      "Wir prüfen relevante, marktführende Assistenz- und Such-KI, die Kauf- und Rechercheentscheidungen beeinflussen – z. B. ChatGPT und Perplexity. Die genaue Auswahl kann sich weiterentwickeln; im Report siehst du transparent, welche Systeme für deine Auswertung herangezogen wurden.",
  },
  {
    id: "vs-own-chatgpt",
    question: "Ich nutze bereits ChatGPT oder Claude – was bringt mir der Report mehr?",
    answer:
      "Ein AI-Abo zeigt dir, was KI antwortet, wenn du fragst. MentionBee zeigt dir, was KI antwortet, wenn deine potenziellen Kunden fragen – ohne dass du dabei bist. Wir testen 20–50 kaufnahe Prompts deiner Branche, vergleichen dich mit bis zu 3 Wettbewerbern und analysieren strukturiert, warum du empfohlen wirst oder nicht. Das ist kein Chat – das ist ein Audit.",
  },
  {
    id: "competitors",
    question: "Kann ich Wettbewerber angeben?",
    answer:
      "Ja. Du kannst Marken definieren, gegen die du verglichen werden möchtest. So wird die Wettbewerbslücke greifbar: wer in den gleichen Themen genannt wird, empfohlen wird oder öfter auftaucht als du.",
  },
  {
    id: "duration",
    question: "Wie lange dauert der Report?",
    answer:
      "Die Laufzeit hängt vom Umfang der Analyse ab (z. B. Anzahl Prompts und Systeme). In der Regel erhältst du den kostenlosen Report zeitnah per E-Mail; beim Deep-Dive kann es etwas länger dauern, bis alle Daten aufbereitet sind. Du siehst den Fortschritt bzw. die Zustellung transparent in der Kommunikation per E-Mail.",
  },
  {
    id: "vs-seo",
    question: "Ist das klassisches SEO?",
    answer:
      "Nein – es geht um AI Visibility: wie KI-Systeme deine Marke in natürlichen Antworten darstellen, ob du empfohlen wirst und wie du im Vergleich zu Wettbewerbern wahrgenommen wirst. Klassisches SEO (Google-Ranking, Metadaten) ist ein anderes Spielfeld; MentionBee ergänzt deine Sichtbarkeit dort, wo Nutzer heute zunehmend fragen: bei KI.",
  },
  {
    id: "ki-antworten-varianz",
    question: "Wie zuverlässig sind KI-Antworten? Variieren die nicht ständig?",
    answer:
      "KI-Antworten variieren tatsächlich – das ist ein bekanntes Phänomen. Deshalb testen wir nicht einmal, sondern mit mehreren Prompts über 4 verschiedene KI-Systeme. Das ergibt ein statistisch stabileres Bild deiner Sichtbarkeit. Kein einzelner Prompt ist repräsentativ – aber 20–50 Prompts über ChatGPT, Perplexity, Gemini und Claude schon.",
  },
];
