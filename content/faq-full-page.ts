export type FaqFullPageItem = {
  id: string;
  question: string;
  /** Plain text for JSON-LD */
  answerText: string;
  /** Optional trusted HTML for rich answers (links) */
  answerHtml?: string;
};

export type FaqFullPageSection = {
  heading: string;
  items: FaqFullPageItem[];
};

export const faqFullPageSections: FaqFullPageSection[] = [
  {
    heading: "Was ist MentionBee?",
    items: [
      {
        id: "was-ist-mentionbee",
        question: "Was ist MentionBee?",
        answerText:
          "MentionBee ist ein automatisiertes Website-Analyse- und Audit-System, das die Sichtbarkeit, Verständlichkeit und Empfehlungsfähigkeit von Marken in generativen KI-Systemen, Suchmaschinen und digitalen Marktsignalen bewertet. Es zeigt, ob und wie Marken in Antworten führender KI-Systeme wie ChatGPT, Claude, Gemini und Perplexity erwähnt, eingeordnet und empfohlen werden.",
      },
      {
        id: "ist-seo-tool",
        question: "Ist MentionBee ein SEO-Tool?",
        answerText:
          "Nicht nur. MentionBee analysiert klassische SEO-Grundlagen wie technisches SEO, Schema-Markup und Seitenstruktur – aber der Kern ist AI Visibility: ob deine Marke in KI-Antworten auftaucht und empfohlen wird. Das ist ein anderes Spielfeld als Google-Rankings und erfordert andere Massnahmen.",
      },
      {
        id: "fuer-wen",
        question: "Für wen ist MentionBee geeignet?",
        answerText:
          "MentionBee ist für Startups, KMU, B2B-Unternehmen, Agenturen und Marketing-Teams, die wissen möchten ob ihre Marke in der KI-gestützten Customer Journey sichtbar ist – und was sie konkret dagegen tun können. Kein Enterprise-Budget nötig.",
      },
      {
        id: "wer-steht-hinter",
        question: "Wer steht hinter MentionBee?",
        answerText:
          "MentionBee wird betrieben von Disrupt Media, einer digitalen Marketing-Agentur aus Zürich, Schweiz. Disrupt Media spezialisiert sich auf Performance Marketing, Tracking, Analytics und AI Visibility.",
        answerHtml:
          'MentionBee wird betrieben von <a href="https://disruptmedia.com" target="_blank" rel="noopener noreferrer">Disrupt Media</a>, einer digitalen Marketing-Agentur aus Zürich, Schweiz. Disrupt Media spezialisiert sich auf Performance Marketing, Tracking, Analytics und AI Visibility.',
      },
    ],
  },
  {
    heading: "AI Visibility & GEO",
    items: [
      {
        id: "was-ist-ai-visibility",
        question: "Was ist AI Visibility?",
        answerText:
          "AI Visibility beschreibt wie prominent und positiv eine Marke in Antworten generativer KI-Systeme wie ChatGPT, Claude, Gemini und Perplexity erscheint. Anders als bei klassischem SEO geht es nicht um Rankings, sondern darum ob eine Marke erwähnt, eingeordnet und empfohlen wird wenn potenzielle Kunden KI-Assistenten kaufnahe Fragen stellen.",
      },
      {
        id: "was-ist-geo",
        question: "Was ist GEO?",
        answerText:
          "GEO steht für Generative Engine Optimization – die Praxis, die digitale Präsenz einer Marke so zu optimieren, dass generative KI-Systeme sie erkennen, zitieren und empfehlen. GEO ergänzt klassisches SEO, folgt aber anderen Regeln: KI-Systeme synthetisieren Antworten statt Links aufzulisten. Marken brauchen strukturierte Inhalte, klare Entity-Signale und starke externe Referenzen um in KI-Antworten zu erscheinen.",
      },
      {
        id: "ai-vs-google",
        question: "Warum unterscheidet sich AI Visibility von Google-Rankings?",
        answerText:
          "Eine Marke kann auf Seite 1 bei Google stehen und trotzdem in KI-Antworten komplett fehlen. Google bewertet Seiten nach Relevanz und Autorität für Suchanfragen. KI-Systeme synthetisieren Antworten basierend auf Trainingsdaten, strukturierten Inhalten, externen Erwähnungen und Quellenqualität. Zwei verschiedene Spiele – zwei verschiedene Regeln.",
      },
      {
        id: "welche-ki-systeme",
        question: "Welche KI-Systeme analysiert MentionBee?",
        answerText:
          "MentionBee analysiert die vier führenden KI-Systeme: ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google) und Perplexity. Diese decken den Grossteil der KI-gestützten Recherche- und Kaufentscheidungen ab.",
      },
      {
        id: "wie-misst-empfehlung",
        question: "Wie misst MentionBee, ob eine Marke empfohlen wird?",
        answerText:
          "MentionBee testet strukturierte kaufnahe Prompts aus der jeweiligen Branche über 4 KI-Systeme und klassifiziert jede Erwähnung: direkte Empfehlung, neutrale Erwähnung, Erwähnung im falschen Kontext oder keine Erwähnung. Daraus entsteht der Empfehlungs-Score als Teil des gewichteten Gesamtscores.",
      },
      {
        id: "zuverlaessigkeit-ki",
        question: "Wie zuverlässig sind KI-Antworten, wenn sie variieren?",
        answerText:
          "KI-Antworten variieren – das ist bekannt. Deshalb testet MentionBee nicht einmal, sondern mit mehreren Prompts über 4 verschiedene KI-Systeme. Das ergibt ein statistisch stabileres Bild. Kein einzelner Prompt ist repräsentativ – aber eine strukturierte Testreihe über ChatGPT, Perplexity, Gemini und Claude schon.",
      },
    ],
  },
  {
    heading: "Reports & Preise",
    items: [
      {
        id: "gratis-report-inhalt",
        question: "Was ist im kostenlosen Report enthalten?",
        answerText:
          "Der kostenlose Report gibt einen ersten Überblick über die AI Visibility: ob die Marke in ausgewählten KI-Antworten vorkommt, wie oft sie erwähnt wird, welche Wettbewerber auftauchen und ein kompaktes Fazit. Die Anzahl der geprüften Prompts ist bewusst begrenzt – genug um ein Potenzial oder Problem zu erkennen.",
      },
      {
        id: "deep-dive-inhalt",
        question: "Was ist im Deep-Dive Report enthalten?",
        answerText:
          "Der Deep-Dive Report umfasst 150+ strukturierte Checks über 6 Module: AI Visibility (4 KI-Systeme), Positionierungsklarheit, Tech SEO, Schema & E-E-A-T, UX & Conversion und Market Signals. Das Ergebnis: ein gewichteter Gesamtscore, eine vollständige Wettbewerbsanalyse, 25 gewichtete Massnahmen mit Umsetzungsanleitungen und konkrete Content- und PR-Empfehlungen. Lieferung in 24–48h per E-Mail.",
      },
      {
        id: "was-fuer-deep-dive-preis",
        question: "Was bekomme ich für {{DEEP_DIVE_PRICE}}?",
        answerText:
          "Der Deep-Dive Report liefert was Agenturen für CHF 2.500–5.000 berechnen: einen vollständigen AI Visibility- und Website-Audit mit 150+ Checks über 6 Module, Wettbewerbsanalyse, 25 gewichtete Massnahmen mit Umsetzungsanleitungen und konkrete Content- und PR-Empfehlungen – in 24–48h, ohne Briefing, ohne Wartezeit.",
      },
      {
        id: "wettbewerber-angeben",
        question: "Kann ich Wettbewerber angeben?",
        answerText:
          "Ja. Im Deep-Dive Report kannst du bis zu 3 Wettbewerber-Domains angeben. MentionBee analysiert wie diese über dieselben KI-Prompts und Audit-Dimensionen abschneiden – und zeigt dir konkret wo du zurückliegst und wo du Vorteile hast.",
      },
      {
        id: "analyse-dauer",
        question: "Wie lange dauert die Analyse?",
        answerText:
          "Der kostenlose Report wird zeitnah per E-Mail zugestellt. Der Deep-Dive Report wird innerhalb von 24–48 Stunden geliefert.",
      },
    ],
  },
  {
    heading: "Datenschutz & Dateneingabe",
    items: [
      {
        id: "welche-daten",
        question: "Welche Daten muss ich angeben?",
        answerText:
          "Für den kostenlosen Report reichen Domain und E-Mail-Adresse. Für den Deep-Dive Report gibst du zusätzlich Branche, Zielgruppe und optional bis zu 3 Wettbewerber-Domains an. Keine sensiblen Unternehmensdaten nötig.",
      },
      {
        id: "speicherung-daten",
        question: "Speichert MentionBee sensible Daten?",
        answerText:
          "MentionBee wird von Disrupt Media in der Schweiz betrieben und verarbeitet Daten DSGVO- und nDSG-konform. Es werden keine sensiblen Unternehmensdaten gespeichert. Für den kostenlosen Report ist kein Login erforderlich.",
      },
    ],
  },
];

/** Flat list for FAQPage JSON-LD */
export function getAllFaqFullPageItems(): FaqFullPageItem[] {
  return faqFullPageSections.flatMap((s) => s.items);
}
