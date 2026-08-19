import { PUBLIC_SAMPLE_MEASURES } from "@/lib/marketing/public-sample-report-excerpts";

export function ReportMeasuresExcerpt() {
  return (
    <div
      className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-100 sm:p-6"
      aria-label="Ausschnitt aus dem öffentlichen MentionBee-Beispielreport: priorisierte Massnahmen"
    >
      <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">
        Report-Ausschnitt
      </p>
      <p className="mt-1.5 font-heading text-lg font-semibold text-mention-dark sm:text-xl">
        Priorisierte Massnahmen
      </p>
      <p className="mt-1 text-sm text-mention-gray">
        Nicht nur Befunde. Priorisierte nächste Schritte.
      </p>

      <ul className="mt-4 space-y-2.5" role="list">
        {PUBLIC_SAMPLE_MEASURES.map((measure) => (
          <li
            key={measure.title}
            className="rounded-xl border border-zinc-200/80 bg-mention-light/30 p-3.5"
          >
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-mention-dark">
                {measure.rank}
              </span>
              {"quickWin" in measure && measure.quickWin ? (
                <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-bold tracking-wide text-mention-dark uppercase ring-1 ring-primary/40">
                  Quick Win
                </span>
              ) : null}
              {"impact" in measure && measure.impact ? (
                <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-bold tracking-wide text-red-950 uppercase ring-1 ring-red-200">
                  Wirkung: {measure.impact}
                </span>
              ) : null}
              {"effort" in measure && measure.effort ? (
                <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-bold tracking-wide text-mention-dark uppercase ring-1 ring-zinc-200">
                  Aufwand: {measure.effort}
                </span>
              ) : null}
            </div>
            <p className="mt-2 font-heading text-sm font-semibold text-mention-dark sm:text-base">
              {measure.title}
            </p>
            <p className="mt-1 text-sm leading-snug text-mention-gray">{measure.summary}</p>
            <p className="mt-2.5 text-sm font-semibold text-mention-dark underline decoration-primary decoration-2 underline-offset-2">
              So setzt du das konkret um →
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
