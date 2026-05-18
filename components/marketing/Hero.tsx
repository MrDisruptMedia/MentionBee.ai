import Link from "next/link";

const competitorRows = [
  { name: "Competitor A", score: 87, barClass: "bg-emerald-500" },
  { name: "Competitor B", score: 72, barClass: "bg-emerald-500" },
  { name: "YourBrand", score: 63, barClass: "bg-primary" },
  { name: "Competitor C", score: 41, barClass: "bg-zinc-400" },
  { name: "Competitor D", score: 28, barClass: "bg-zinc-400" },
] as const;

function ScoreRing({ score, max = 100 }: { score: number; max?: number }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const progress = Math.min(Math.max(score / max, 0), 1);
  const dash = progress * c;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative size-36 sm:size-40">
        <svg className="-rotate-90 size-full" viewBox="0 0 120 120" aria-hidden>
          <circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            className="stroke-mention-light"
            strokeWidth="10"
          />
          <circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            className="stroke-primary"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${c}`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-3xl font-bold text-primary tabular-nums sm:text-4xl">{score}</span>
          <span className="text-xs font-medium text-mention-gray">von {max}</span>
        </div>
      </div>
      <p className="text-xs font-medium text-mention-gray">AI Visibility Score</p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="border-b border-zinc-200/80 bg-white">
      <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center gap-12 px-4 py-16 max-lg:items-start lg:grid lg:min-h-[85vh] lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
        <div className="flex max-w-xl flex-col gap-6">
          <p className="w-fit rounded-full border border-zinc-200/90 bg-mention-light px-3 py-1 text-xs font-semibold tracking-wide text-mention-dark uppercase">
            KI-Sichtbarkeitsanalyse
          </p>

          <h1 className="font-heading text-4xl leading-[1.1] font-bold sm:text-5xl lg:text-[2.75rem]">
            <span className="text-mention-dark">Wirst du von </span>
            <span className="text-primary italic">KI empfohlen?</span>
          </h1>

          <p className="text-lg leading-relaxed text-mention-gray">
            MentionBee zeigt dir, ob ChatGPT, Perplexity &amp; Co. deine Marke nennen, empfehlen oder
            ignorieren – inklusive Wettbewerbsvergleich und konkreten nächsten Schritten.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/free-report"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition-colors hover:bg-primary-dark"
            >
              Kostenlosen Report anfordern →
            </Link>
            <Link
              href="/sample-report"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-center text-sm font-semibold text-mention-dark transition-colors hover:border-primary/40 hover:bg-mention-light"
            >
              Beispielreport ansehen
            </Link>
          </div>

          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-mention-gray">
            <span>🔒 Ohne Login</span>
            <span className="hidden text-zinc-300 sm:inline" aria-hidden>
              ·
            </span>
            <span>🛡️ DSGVO-bewusst</span>
            <span className="hidden text-zinc-300 sm:inline" aria-hidden>
              ·
            </span>
            <span>📧 Ergebnis per E-Mail</span>
          </p>
        </div>

        <div
          className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-lg ring-1 ring-zinc-100 lg:mx-0 lg:max-w-none"
          aria-label="Beispiel Report-Vorschau"
        >
          <div className="border-b border-zinc-100 pb-4">
            <p className="text-sm font-semibold text-mention-dark">AI Visibility Overview</p>
            <p className="mt-1 text-xs text-mention-gray">
              Report für: YourBrand · Datum: 12. Mai 2026
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-6 sm:flex-row sm:items-start sm:justify-between">
            <ScoreRing score={63} />

            <div className="min-w-0 flex-1 space-y-4">
              <div>
                <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">
                  Mentions
                </p>
                <p className="mt-1 text-sm font-medium text-mention-dark">
                  7 / 20 Prompts mit Erwähnung
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">
                  Top Wettbewerber
                </p>
                <ul className="mt-3 space-y-2.5" role="list">
                  {competitorRows.map((row) => (
                    <li key={row.name} className="grid grid-cols-[minmax(0,1fr)_2.5rem] gap-2">
                      <div className="min-w-0">
                        <div className="flex h-2 overflow-hidden rounded-full bg-mention-light">
                          <div
                            className={`${row.barClass} rounded-full`}
                            style={{ width: `${row.score}%` }}
                          />
                        </div>
                        <p className="mt-1 truncate text-xs font-medium text-mention-dark">
                          {row.name}
                        </p>
                      </div>
                      <span className="text-right text-xs font-semibold tabular-nums text-mention-dark">
                        {row.score}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 border-t border-zinc-100 pt-6 sm:grid-cols-2">
            <figure className="rounded-xl border border-zinc-100 bg-mention-light/60 p-3">
              <figcaption className="text-xs font-semibold text-mention-dark">ChatGPT</figcaption>
              <blockquote className="mt-2 text-xs leading-relaxed text-mention-gray italic">
                „YourBrand wird oft als solide Option genannt; Alternativen mit stärkerer Präsenz sind
                …“
              </blockquote>
            </figure>
            <figure className="rounded-xl border border-zinc-100 bg-mention-light/60 p-3">
              <figcaption className="text-xs font-semibold text-mention-dark">Perplexity</figcaption>
              <blockquote className="mt-2 text-xs leading-relaxed text-mention-gray italic">
                „Laut aktuellen Quellen: YourBrand taucht in Listen gelegentlich auf, jedoch seltener
                als …“
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
