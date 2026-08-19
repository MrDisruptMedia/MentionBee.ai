import Link from "next/link";

import { ReportAiVisibilityExcerpt } from "@/components/marketing/ReportAiVisibilityExcerpt";
import { ReportMeasuresExcerpt } from "@/components/marketing/ReportMeasuresExcerpt";

const areas = [
  {
    n: "1",
    title: "KI-Empfehlungen",
    body: "Wir testen relevante Fragen bei ChatGPT, Claude, Gemini und Perplexity. Du siehst, bei welchen Fragen dein Unternehmen genannt wird, wann es fehlt und welche anderen Anbieter stattdessen auftauchen.",
  },
  {
    n: "2",
    title: "Wettbewerb",
    body: "Wir vergleichen deine Sichtbarkeit mit relevanten Wettbewerbern. So erkennst du, wer häufiger auftaucht und wo sich Unterschiede zeigen, die für deine weitere Arbeit interessant sein können.",
  },
  {
    n: "3",
    title: "Inhalte & Positionierung",
    body: "Wir untersuchen, wie klar online dokumentiert ist, was dein Unternehmen anbietet, für wen es relevant ist und wodurch es sich unterscheidet. So siehst du, wo wichtige Informationen fehlen oder dein Angebot möglicherweise nicht eindeutig genug beschrieben ist.",
  },
  {
    n: "4",
    title: "Digitale Präsenz",
    body: "Wir betrachten, welche Informationen und Signale zu deinem Unternehmen im Web vorhanden sind. So erkennst du, wie vollständig und konsistent das digitale Bild deines Unternehmens ist und wo mögliche Lücken bestehen.",
  },
  {
    n: "5",
    title: "Technische Voraussetzungen",
    body: "Wir prüfen, ob Suchmaschinen und KI-nahe Crawler wichtige Inhalte deiner Website sauber erreichen und verarbeiten können. So findest du technische Hindernisse, die du möglicherweise beheben solltest.",
  },
  {
    n: "6",
    title: "Website & Nutzererlebnis",
    body: "Wir untersuchen, wie schnell Menschen und Maschinen die entscheidenden Informationen über dein Unternehmen und dein Angebot finden. So erkennst du Unklarheiten in Struktur, Nutzerführung und wichtigen nächsten Schritten.",
  },
] as const;

export function WhatWeAnalyze() {
  return (
    <section
      id="so-funktionierts"
      className="scroll-mt-24 border-b border-zinc-200/80 bg-mention-light py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
            Vom „Wir werden nicht genannt“ zur konkreten Diagnose.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mention-gray sm:text-lg">
            Der AI Visibility Audit betrachtet nicht nur eine einzelne KI-Antwort. Er untersucht sechs
            Ebenen deiner digitalen Sichtbarkeit und zeigt dir, wo relevante Unterschiede, Lücken und
            Ansatzpunkte liegen.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {areas.map((area) => (
            <li
              key={area.n}
              className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                {area.n}. {area.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mention-gray">{area.body}</p>
            </li>
          ))}
        </ol>

        <ReportAiVisibilityExcerpt />

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-mention-dark sm:text-3xl">
              Das Ergebnis: keine weitere Datenhalde, sondern Prioritäten.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-mention-gray sm:text-lg">
              Nicht jede Auffälligkeit ist gleich wichtig. Deshalb führt MentionBee die Erkenntnisse aus
              diesen sechs Bereichen zusammen und priorisiert die Massnahmen danach, wo du
              sinnvollerweise zuerst ansetzen solltest.
            </p>

            <div className="mt-8 space-y-3">
              <p className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-mention-gray line-through decoration-zinc-400">
                „ChatGPT nennt uns nicht.“
              </p>
              <p className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-semibold text-mention-dark">
                „Das sind die nächsten Dinge, die wir prüfen und verbessern sollten.“
              </p>
            </div>

            <Link
              href="/sample-report"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-mention-dark shadow-md transition-all duration-200 hover:scale-105 hover:bg-primary-dark"
            >
              Beispielreport ansehen →
            </Link>
          </div>

          <ReportMeasuresExcerpt />
        </div>
      </div>
    </section>
  );
}
