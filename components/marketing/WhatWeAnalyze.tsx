import Link from "next/link";
import { Bot, FileText, Globe, Settings, User, Users } from "lucide-react";

import { ReportAiVisibilityExcerpt } from "@/components/marketing/ReportAiVisibilityExcerpt";
import { ReportMeasuresExcerpt } from "@/components/marketing/ReportMeasuresExcerpt";

const areas = [
  {
    n: "1",
    title: "KI-Empfehlungen",
    icon: Bot,
    body: "Wir testen, bei welchen relevanten Fragen dein Unternehmen in ChatGPT, Claude, Gemini und Perplexity genannt wird – und wann nicht.",
  },
  {
    n: "2",
    title: "Wettbewerb",
    icon: Users,
    body: "Wir zeigen, wer stattdessen auftaucht und wo sich relevante Unterschiede zu deinen Wettbewerbern zeigen.",
  },
  {
    n: "3",
    title: "Inhalte & Positionierung",
    icon: FileText,
    body: "Wir prüfen, ob Angebot, Leistungen und Kernthemen klar, vollständig und für Menschen wie KI-Systeme verständlich beschrieben sind.",
  },
  {
    n: "4",
    title: "Digitale Präsenz",
    icon: Globe,
    body: "Wir analysieren, wie vollständig und konsistent dein Unternehmen im Web sichtbar ist und wo wichtige Signale fehlen.",
  },
  {
    n: "5",
    title: "Technische Voraussetzungen",
    icon: Settings,
    body: "Wir prüfen, ob Suchmaschinen und KI-nahe Crawler deine wichtigsten Inhalte sauber erreichen und verarbeiten können.",
  },
  {
    n: "6",
    title: "Website & Nutzererlebnis",
    icon: User,
    body: "Wir untersuchen, wie schnell Menschen und Maschinen wichtige Informationen finden und wo Struktur oder Nutzerführung im Weg stehen.",
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
          <p className="mt-4 text-base leading-relaxed text-mention-gray sm:text-lg">
            Der AI Visibility Audit untersucht sechs Ebenen deiner digitalen Sichtbarkeit und zeigt,
            wo Unterschiede, Lücken und Ansatzpunkte liegen.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <li
                key={area.n}
                className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Icon className="size-4 text-mention-dark" strokeWidth={2} aria-hidden />
                  </span>
                  <p className="font-heading text-base font-bold tracking-tight text-mention-dark">
                    <span className="text-primary">{area.n}.</span> {area.title}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-snug text-mention-gray">{area.body}</p>
              </li>
            );
          })}
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
