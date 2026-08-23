import Image from "next/image";
import Link from "next/link";

import { ReportMeasuresExcerpt } from "@/components/marketing/ReportMeasuresExcerpt";

const areas = [
  {
    n: "1",
    title: "KI-Präsenz & Sichtbarkeit",
    iconSrc: "/images/audit-dimensions/01-ki-empfehlungen.svg",
    body: "Wo und wie häufig wirst du bei relevanten Fragen von ChatGPT, Claude, Gemini und Perplexity genannt und empfohlen?",
  },
  {
    n: "2",
    title: "Inhalte & Verständlichkeit",
    iconSrc: "/images/audit-dimensions/03-inhalte-positionierung.svg",
    body: "Ist klar, was du anbietest, für wen dein Angebot relevant ist und wodurch du dich unterscheidest?",
  },
  {
    n: "3",
    title: "Technische Grundlagen",
    iconSrc: "/images/audit-dimensions/05-technische-voraussetzungen.svg",
    body: "Können Suchmaschinen und KI-nahe Systeme deine wichtigsten Inhalte sauber erreichen und verarbeiten?",
  },
  {
    n: "4",
    title: "Vertrauen & Expertise",
    iconSrc: "/images/audit-dimensions/06-website-nutzererlebnis.svg",
    body: "Zeigt deine Website ausreichend deutlich, wer hinter dem Unternehmen steht und warum Kunden und KI-Systeme dir vertrauen können?",
  },
  {
    n: "5",
    title: "Nutzererlebnis & Conversion",
    iconSrc: "/images/audit-dimensions/02-wettbewerb.svg",
    body: "Finden Besucher schnell die richtigen Informationen und einen klaren nächsten Schritt?",
  },
  {
    n: "6",
    title: "Externe Marktsignale",
    iconSrc: "/images/audit-dimensions/04-digitale-praesenz.svg",
    body: "Welche Signale über dein Unternehmen existieren ausserhalb deiner eigenen Website – etwa Reviews, Verzeichnisse, Presse, Social und Vergleichsplattformen?",
  },
] as const;

export function WhatWeAnalyze() {
  return (
    <section
      id="so-funktionierts"
      className="scroll-mt-24 border-b border-zinc-200/80 bg-mention-light py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto min-w-0 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
            <span className="contents sm:hidden">
              Vom{" "}
              <span className="whitespace-nowrap">„Wir werden</span>{" "}
              <span className="whitespace-nowrap">
                <span className="relative inline-block">
                  {"nicht genannt"}
                  <svg
                    className="pointer-events-none absolute left-0 -bottom-[0.2em] h-[0.36em] w-full overflow-hidden"
                    viewBox="0 0 400 16"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M5 9.55 C 16 8.9, 29 10.15, 47 9.05 C 61 9.7, 74 8.65, 93 9.45 C 118 9.1, 139 10.2, 163 8.85 C 186 9.9, 207 8.7, 236 9.5 C 258 9.05, 281 10.05, 309 9.15 C 332 9.65, 351 8.8, 376 9.4"
                      stroke="#FFC400"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 10.2 C 33 9.35, 59 10.55, 90 9.5 C 121 10.4, 152 8.95, 189 10.1 C 223 9.2, 261 10.45, 298 9.35 C 328 10.15, 351 9.25, 369 9.7"
                      stroke="#FFC400"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{`“`}
              </span>
              <br />
              zur konkreten Diagnose.
            </span>
            <span className="hidden sm:contents">
              Vom „
              <span className="relative inline-block max-w-full sm:whitespace-nowrap">
                Wir werden nicht genannt“
                <svg
                  className="pointer-events-none absolute left-0 -bottom-[0.2em] h-[0.36em] w-[96%] max-w-full overflow-hidden sm:-bottom-[0.16em] sm:h-[0.34em] sm:overflow-visible"
                  viewBox="0 0 400 16"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M5 9.55 C 16 8.9, 29 10.15, 47 9.05 C 61 9.7, 74 8.65, 93 9.45 C 118 9.1, 139 10.2, 163 8.85 C 186 9.9, 207 8.7, 236 9.5 C 258 9.05, 281 10.05, 309 9.15 C 332 9.65, 351 8.8, 376 9.4"
                    stroke="#FFC400"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 10.2 C 33 9.35, 59 10.55, 90 9.5 C 121 10.4, 152 8.95, 189 10.1 C 223 9.2, 261 10.45, 298 9.35 C 328 10.15, 351 9.25, 369 9.7"
                    stroke="#FFC400"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{" "}
              zur konkreten Diagnose.
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mention-gray sm:text-lg">
            Der AI Visibility Audit untersucht sechs Messbereiche – von KI-Präsenz & Sichtbarkeit und Inhalten
            bis zu Technik, Vertrauen und externen Marktsignalen.
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

        <div className="mt-4 flex items-start gap-3.5 rounded-xl bg-white/55 px-4 py-3.5 ring-1 ring-zinc-200/60 sm:items-center sm:gap-4 sm:px-5">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#FFF3C2]">
            <Image
              src="/images/audit-dimensions/02-wettbewerb.svg"
              alt=""
              width={26}
              height={26}
              className="size-[26px]"
              unoptimized
            />
          </span>
          <div className="min-w-0">
            <p className="font-heading text-sm font-bold tracking-tight text-mention-dark sm:text-base">
              Und deine Wettbewerber?
            </p>
            <p className="mt-1 text-sm leading-snug text-mention-gray">
              Wir betrachten diese Messbereiche nicht isoliert. Bei bis zu drei relevanten Wettbewerbern
              prüfen wir, wer in KI-Antworten häufiger auftaucht und wo entscheidende Unterschiede
              liegen.
            </p>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-10 md:mt-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-mention-dark sm:text-3xl">
              Das Ergebnis: keine weitere Datenhalde, sondern Prioritäten.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-mention-gray sm:text-lg">
              Nicht jede Auffälligkeit ist gleich wichtig. Deshalb führt MentionBee die Erkenntnisse aus
              diesen sechs Messbereichen zusammen und priorisiert die Massnahmen danach, wo du
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
