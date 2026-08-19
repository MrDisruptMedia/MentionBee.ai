import { PUBLIC_SAMPLE_MEASURES } from "@/lib/marketing/public-sample-report-excerpts";

const badgeClass = {
  accent: "bg-primary/20 text-mention-dark ring-primary/40",
  high: "bg-red-100 text-red-950 ring-red-200",
  neutral: "bg-zinc-100 text-mention-dark ring-zinc-200",
} as const;

export function ReportMeasuresExcerpt() {
  return (
    <div
      className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-100 sm:p-7"
      aria-label="Ausschnitt aus dem öffentlichen MentionBee-Beispielreport: priorisierte Massnahmen"
    >
      <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">
        Report-Ausschnitt
      </p>
      <p className="mt-2 font-heading text-lg font-semibold text-mention-dark sm:text-xl">
        Priorisierte Massnahmen
      </p>
      <p className="mt-1 text-sm text-mention-gray">
        Nicht nur Befunde. Priorisierte nächste Schritte.
      </p>

      <ul className="mt-5 space-y-3" role="list">
        {PUBLIC_SAMPLE_MEASURES.map((measure) => (
          <li
            key={measure.title}
            className="rounded-xl border border-zinc-200/80 bg-mention-light/30 p-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-mention-dark">
                {measure.rank}
              </span>
              {measure.badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`rounded-full px-2.5 py-0.5 text-xs font-bold ring-1 ${badgeClass[badge.tone]}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
            <p className="mt-3 font-heading text-sm font-semibold text-mention-dark sm:text-base">
              {measure.title}
            </p>
            <p className="mt-2 text-xs font-medium text-mention-gray sm:text-sm">Problem</p>
            <p className="mt-0.5 text-sm leading-relaxed text-mention-dark">{measure.problem}</p>
            <p className="mt-2 text-xs font-medium text-mention-gray sm:text-sm">Lösung</p>
            <p className="mt-0.5 text-sm leading-relaxed text-mention-dark">{measure.solution}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
