import Image from "next/image";
import Link from "next/link";

import { ReportMeasuresExcerpt } from "@/components/marketing/ReportMeasuresExcerpt";

const areas = [
  {
    n: "1",
    title: "KI-Empfehlungen",
    iconSrc: "/images/audit-dimensions/01-ki-empfehlungen.svg",
    body: "Wir testen, bei welchen relevanten Fragen dein Unternehmen in ChatGPT, Claude, Gemini und Perplexity genannt wird – und wann nicht.",
  },
  {
    n: "2",
    title: "Wettbewerb",
    iconSrc: "/images/audit-dimensions/02-wettbewerb.svg",
    body: "Wir zeigen, wer stattdessen auftaucht und wo sich relevante Unterschiede zu deinen Wettbewerbern zeigen.",
  },
  {
    n: "3",
    title: "Inhalte & Positionierung",
    iconSrc: "/images/audit-dimensions/03-inhalte-positionierung.svg",
    body: "Wir prüfen, ob Angebot, Leistungen und Kernthemen klar, vollständig und für Menschen wie KI-Systeme verständlich beschrieben sind.",
  },
  {
    n: "4",
    title: "Digitale Präsenz",
    iconSrc: "/images/audit-dimensions/04-digitale-praesenz.svg",
    body: "Wir analysieren, wie vollständig und konsistent dein Unternehmen im Web sichtbar ist und wo wichtige Signale fehlen.",
  },
  {
    n: "5",
    title: "Technische Voraussetzungen",
    iconSrc: "/images/audit-dimensions/05-technische-voraussetzungen.svg",
    body: "Wir prüfen, ob Suchmaschinen und KI-nahe Crawler deine wichtigsten Inhalte sauber erreichen und verarbeiten können.",
  },
  {
    n: "6",
    title: "Website & Nutzererlebnis",
    iconSrc: "/images/audit-dimensions/06-website-nutzererlebnis.svg",
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
            Vom „
            <span className="relative inline-block whitespace-nowrap">
              Wir werden nicht genannt
              <svg
                className="pointer-events-none absolute inset-x-[-1%] -bottom-[0.52em] h-[0.8em] w-[102%] overflow-visible sm:-bottom-[0.44em] sm:h-[0.62em]"
                viewBox="0 0 400 24"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M6 14.8 C 46 8.2, 86 18.6, 128 12.4 C 168 7.1, 206 17.8, 248 11.6 C 286 6.8, 328 16.4, 364 10.2 C 378 8.4, 390 13.6, 394 11.1"
                  stroke="#FFC400"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            “ zur konkreten Diagnose.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mention-gray sm:text-lg">
            Der AI Visibility Audit untersucht sechs Ebenen deiner digitalen Sichtbarkeit und zeigt,
            wo Unterschiede, Lücken und Ansatzpunkte liegen.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {areas.map((area) => (
            <li
              key={area.n}
              className="rounded-2xl border border-zinc-200/70 bg-white p-5"
            >
              <div className="flex items-center gap-4">
                <span className="flex size-[68px] shrink-0 items-center justify-center rounded-full bg-[#FFF3C2]">
                  <Image
                    src={area.iconSrc}
                    alt=""
                    width={44}
                    height={44}
                    className="size-11"
                    unoptimized
                  />
                </span>
                <p className="font-heading text-base font-bold leading-snug tracking-tight text-mention-dark">
                  {area.n}. {area.title}
                </p>
              </div>
              <p className="mt-3.5 text-sm leading-snug text-mention-gray">{area.body}</p>
            </li>
          ))}
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
