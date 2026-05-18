import Link from "next/link";

const moduleTiles = [
  {
    name: "LLM + ASA",
    description: "Erwähnungen bei ChatGPT, Claude, Gemini & Perplexity",
    score: 0.7,
    weightPct: 30,
  },
  {
    name: "PKI",
    description: "Klarheit und Überzeugungskraft deiner Positionierung",
    score: 4.8,
    weightPct: 25,
  },
  {
    name: "Tech SEO",
    description: "Technische Grundlagen für Suchmaschinen & AI-Crawler",
    score: 4.0,
    weightPct: 15,
  },
  {
    name: "Schema",
    description: "Strukturierte Daten und Vertrauenssignale",
    score: 6.7,
    weightPct: 10,
  },
  {
    name: "UX",
    description: "Nutzerfreundlichkeit und Conversion",
    score: 5.8,
    weightPct: 10,
  },
  {
    name: "MSS",
    description: "Externe Signale: Bewertungen, Presse, Social Media",
    score: 5.0,
    weightPct: 10,
  },
] as const;

function scoreBarColor(score: number): string {
  if (score < 4) return "bg-red-500";
  if (score <= 7) return "bg-amber-400";
  return "bg-emerald-500";
}

const topMeasures = [
  {
    priority: "Hoch",
    emoji: "🔴",
    badgeClass: "bg-red-100 text-red-900 ring-red-200",
    title: "Organization Schema ergänzen",
    description:
      "Strukturierte Daten fehlen – KI-Systeme können deine Marke nicht eindeutig klassifizieren.",
    implementationExtra: true,
  },
  {
    priority: "Mittel",
    emoji: "🟡",
    badgeClass: "bg-amber-100 text-amber-950 ring-amber-200",
    title: "FAQ-Content für KI-Prompts optimieren",
    description: "Erstelle zielgerichtete FAQ-Seiten für typische Branchenfragen.",
    implementationExtra: false,
  },
  {
    priority: "Mittel",
    emoji: "🟡",
    badgeClass: "bg-amber-100 text-amber-950 ring-amber-200",
    title: "Wettbewerbsvergleiche aufbauen",
    description: "Vergleichsartikel erhöhen die Chance, in KI-Empfehlungen genannt zu werden.",
    implementationExtra: false,
  },
] as const;

export function SampleReportTeaser() {
  return (
    <section className="border-b border-zinc-200/80 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          Sieh, wie dein Report aussehen könnte
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-zinc-200/90 bg-mention-light/50 p-6 shadow-sm ring-1 ring-zinc-100">
              <p className="text-center text-xs font-semibold tracking-wide text-mention-gray uppercase">
                MentionBee Score
              </p>
              <div className="mt-3 text-center">
                <p className="font-heading text-5xl font-bold leading-none tabular-nums sm:text-6xl">
                  <span className="text-primary">40</span>
                  <span className="text-lg font-semibold text-mention-gray sm:text-xl"> / 100</span>
                </p>
                <p className="mt-4 inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-mention-dark ring-1 ring-zinc-200">
                  Verbesserungspotenzial vorhanden
                </p>
              </div>

              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
                {moduleTiles.map((mod) => {
                  const barPct = Math.min(100, Math.max(0, (mod.score / 10) * 100));
                  const barColor = scoreBarColor(mod.score);
                  return (
                    <li
                      key={mod.name}
                      className="rounded-xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-heading text-sm font-semibold text-mention-dark">{mod.name}</h3>
                        <span className="shrink-0 text-xs font-semibold tabular-nums text-mention-dark">
                          {mod.score}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-mention-gray">{mod.description}</p>
                      <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-zinc-100">
                        <div
                          className={`${barColor} rounded-full transition-all`}
                          style={{ width: `${barPct}%` }}
                        />
                      </div>
                      <p className="mt-2 text-xs font-medium text-mention-gray">
                        Gewichtung: {mod.weightPct}%
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <Link
              href="/sample-report"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-primary-dark sm:w-auto sm:self-start"
            >
              Beispielreport ansehen →
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-mention-dark sm:text-3xl">
              Deine Top-Maßnahmen
            </h2>

            <ul className="flex flex-col gap-4" role="list">
              {topMeasures.map((m) => (
                <li
                  key={m.title}
                  className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-100"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-base" aria-hidden>
                      {m.emoji}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-bold ring-1 ${m.badgeClass}`}
                    >
                      {m.priority}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-base font-semibold text-mention-dark">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mention-gray">{m.description}</p>
                  {m.implementationExtra ? (
                    <p className="mt-2 text-xs leading-relaxed text-mention-gray">
                      Inkl. Schritt-für-Schritt-Anleitung zur Umsetzung direkt im Report.
                    </p>
                  ) : null}
                  <button
                    type="button"
                    disabled
                    title="Im vollständigen Report verfügbar"
                    className="mt-4 w-full cursor-default rounded-full border border-zinc-200 bg-mention-light/60 px-4 py-2.5 text-center text-xs font-semibold text-mention-dark opacity-60"
                  >
                    Umsetzung anzeigen →
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
