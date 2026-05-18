import Link from "next/link";

const aiPills = [
  { name: "ChatGPT", label: "Direkt empfohlen", className: "bg-emerald-100 text-emerald-900 ring-1 ring-emerald-200" },
  { name: "Perplexity", label: "Erwähnt", className: "bg-blue-100 text-blue-900 ring-1 ring-blue-200" },
  { name: "Claude", label: "Nur Marke", className: "bg-amber-100 text-amber-950 ring-1 ring-amber-200" },
  { name: "Gemini", label: "Nicht erwähnt", className: "bg-zinc-200 text-zinc-700 ring-1 ring-zinc-300" },
] as const;

const competitorRows = [
  { name: "Competitor A", score: 82, barClass: "bg-emerald-500" },
  { name: "Competitor B", score: 71, barClass: "bg-emerald-500" },
  { name: "Competitor C", score: 55, barClass: "bg-zinc-400" },
  { name: "YourBrand", score: 63, barClass: "bg-primary" },
] as const;

const topMeasures = [
  {
    priority: "Hoch",
    emoji: "🔴",
    badgeClass: "bg-red-100 text-red-900 ring-red-200",
    title: "Organization Schema ergänzen",
    description:
      "Strukturierte Daten fehlen – KI-Systeme können deine Marke nicht eindeutig klassifizieren.",
  },
  {
    priority: "Mittel",
    emoji: "🟡",
    badgeClass: "bg-amber-100 text-amber-950 ring-amber-200",
    title: "FAQ-Content für KI-Prompts optimieren",
    description: "Erstelle zielgerichtete FAQ-Seiten für typische Branchenfragen.",
  },
  {
    priority: "Mittel",
    emoji: "🟡",
    badgeClass: "bg-amber-100 text-amber-950 ring-amber-200",
    title: "Wettbewerbsvergleiche aufbauen",
    description: "Vergleichsartikel erhöhen die Chance, in KI-Empfehlungen genannt zu werden.",
  },
] as const;

export function SampleReportTeaser() {
  return (
    <section className="border-b border-zinc-200/80 bg-white py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
            Sieh, wie dein Report aussehen könnte
          </h2>

          <div className="rounded-2xl border border-zinc-200/90 bg-mention-light/50 p-6 shadow-sm ring-1 ring-zinc-100">
            <p className="text-center text-xs font-semibold tracking-wide text-mention-gray uppercase">
              AI Visibility Score
            </p>
            <div className="mt-2 text-center">
              <p className="font-heading text-6xl font-bold tabular-nums text-primary sm:text-7xl">63</p>
              <p className="mt-1 text-sm font-medium text-mention-gray">von 100</p>
              <p className="mt-4 inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-mention-dark ring-1 ring-zinc-200">
                Mittel
              </p>
            </div>

            <div className="mt-6 border-t border-zinc-200/80 pt-5">
              <p className="text-center text-sm font-medium text-mention-dark">
                <span className="text-mention-gray">Mentions:</span> 7 / 24 Prompts mit Erwähnung
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">
              Status je KI-System
            </p>
            <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-2" role="list">
              {aiPills.map((p) => (
                <li key={p.name}>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ring-1 ${p.className}`}
                  >
                    <span className="font-semibold">{p.name}:</span>
                    {p.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">
              Top Wettbewerber
            </p>
            <ul className="mt-3 space-y-2.5" role="list">
              {competitorRows.map((row) => (
                <li key={row.name} className="grid grid-cols-[minmax(0,1fr)_2.5rem] gap-2">
                  <div className="min-w-0">
                    <div className="flex h-2 overflow-hidden rounded-full bg-zinc-100">
                      <div
                        className={`${row.barClass} rounded-full`}
                        style={{ width: `${row.score}%` }}
                      />
                    </div>
                    <p className="mt-1 truncate text-xs font-medium text-mention-dark">{row.name}</p>
                  </div>
                  <span className="text-right text-xs font-semibold tabular-nums text-mention-dark">
                    {row.score}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/sample-report"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-primary-dark sm:w-auto sm:self-start"
          >
            Beispielreport ansehen →
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-mention-dark sm:text-3xl">
            Deine Top-Massnahmen
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
