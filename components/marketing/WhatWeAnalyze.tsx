import Link from "next/link";

import {
  IconDigitalePraesenz,
  IconInhalte,
  IconKiEmpfehlungen,
  IconNutzererlebnis,
  IconTechnik,
  IconWettbewerb,
} from "@/components/marketing/AuditDimensionIcons";
import { ReportMeasuresExcerpt } from "@/components/marketing/ReportMeasuresExcerpt";

const areas = [
  {
    n: "1",
    title: "KI-Empfehlungen",
    icon: IconKiEmpfehlungen,
    body: "Wir testen, bei welchen relevanten Fragen dein Unternehmen in ChatGPT, Claude, Gemini und Perplexity genannt wird – und wann nicht.",
  },
  {
    n: "2",
    title: "Wettbewerb",
    icon: IconWettbewerb,
    body: "Wir zeigen, wer stattdessen auftaucht und wo sich relevante Unterschiede zu deinen Wettbewerbern zeigen.",
  },
  {
    n: "3",
    title: "Inhalte & Positionierung",
    icon: IconInhalte,
    body: "Wir prüfen, ob Angebot, Leistungen und Kernthemen klar, vollständig und für Menschen wie KI-Systeme verständlich beschrieben sind.",
  },
  {
    n: "4",
    title: "Digitale Präsenz",
    icon: IconDigitalePraesenz,
    body: "Wir analysieren, wie vollständig und konsistent dein Unternehmen im Web sichtbar ist und wo wichtige Signale fehlen.",
  },
  {
    n: "5",
    title: "Technische Voraussetzungen",
    icon: IconTechnik,
    body: "Wir prüfen, ob Suchmaschinen und KI-nahe Crawler deine wichtigsten Inhalte sauber erreichen und verarbeiten können.",
  },
  {
    n: "6",
    title: "Website & Nutzererlebnis",
    icon: IconNutzererlebnis,
    body: "Wir untersuchen, wie schnell Menschen und Maschinen wichtige Informationen finden und wo Struktur oder Nutzerführung im Weg stehen.",
  },
] as const;

const markerUnderline = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 16" preserveAspectRatio="none"><path d="M1 11c28-5.5 58 3 92-1.2 36-4.4 62 5.8 98 1.4 16-1.9 36 2.4 48-1.6" fill="none" stroke="#FFC400" stroke-width="7.2" stroke-linecap="round"/></svg>`,
)}")`;

export function WhatWeAnalyze() {
  return (
    <section
      id="so-funktionierts"
      className="scroll-mt-24 border-b border-zinc-200/80 bg-mention-light py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
            Vom „
            <span
              className="inline bg-bottom bg-no-repeat pb-[0.12em] [background-size:100%_0.46em] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]"
              style={{ backgroundImage: markerUnderline }}
            >
              Wir werden nicht genannt
            </span>
            “ zur konkreten Diagnose.
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
                <div className="flex items-start gap-4">
                  <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#FFF3C2]">
                    <Icon className="size-8 text-mention-dark" />
                  </span>
                  <p className="pt-1 font-heading text-base font-bold leading-snug tracking-tight text-mention-dark">
                    <span className="text-primary">{area.n}.</span> {area.title}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-snug text-mention-gray">{area.body}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 grid items-start gap-10 md:mt-16 lg:grid-cols-2 lg:gap-12">
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
