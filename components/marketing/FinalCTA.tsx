import Link from "next/link";

const miniBars = [
  { label: "Wettbewerber A", widthPct: 85, barClass: "bg-emerald-500" },
  { label: "Deine Marke", widthPct: 63, barClass: "bg-amber-400" },
  { label: "Wettbewerber B", widthPct: 48, barClass: "bg-zinc-400" },
] as const;

function FinalCtaMockup() {
  return (
    <div
      className="w-full max-w-sm rotate-3 rounded-2xl border border-white/10 bg-white/95 p-5 text-mention-dark shadow-xl ring-1 ring-black/5"
      aria-hidden
    >
      <p className="text-center text-xs font-semibold tracking-wide text-mention-gray uppercase">
        MentionBee Score
      </p>
      <p className="mt-2 text-center font-heading text-3xl font-bold tabular-nums">
        <span className="text-primary">63</span>
        <span className="text-base font-semibold text-mention-gray">/100</span>
      </p>
      <div className="mt-5 space-y-3 border-t border-zinc-100 pt-4">
        <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">Überblick</p>
        <ul className="space-y-2.5" role="list">
          {miniBars.map((row) => (
            <li key={row.label} className="grid grid-cols-[minmax(0,1fr)_2.25rem] gap-2">
              <div className="min-w-0">
                <div className="flex h-2 overflow-hidden rounded-full bg-zinc-100">
                  <div className={`${row.barClass} rounded-full`} style={{ width: `${row.widthPct}%` }} />
                </div>
                <p className="mt-1 truncate text-xs font-medium text-mention-dark">{row.label}</p>
              </div>
              <span className="text-right text-xs font-semibold tabular-nums text-mention-dark">
                {row.widthPct}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-mention-dark py-14 md:py-20">
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Finde heraus, ob KI deine Marke empfiehlt.
            </h2>
            <p className="mt-4 text-lg text-white/80">Ideal für Startups, Agenturen und B2B SaaS.</p>
            <p className="mt-2 text-lg text-white/80">In 2 Minuten anfordern. Ergebnis per E-Mail.</p>
            <Link
              href="/free-report"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-mention-dark shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-primary-dark"
            >
              Kostenlosen Report anfordern →
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <FinalCtaMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
