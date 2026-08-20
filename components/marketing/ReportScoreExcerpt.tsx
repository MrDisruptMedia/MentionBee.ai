import { Info } from "lucide-react";

import { PUBLIC_SAMPLE_SCORE } from "@/lib/marketing/public-sample-report-excerpts";

/** Same traffic-light bands as the existing sample score UIs in this repo. */
function moduleBarClass(score: number): string {
  if (score < 4) return "bg-red-500";
  if (score <= 7) return "bg-amber-400";
  return "bg-emerald-500";
}

function moduleBarWidth(score: number): number {
  return Math.min(100, Math.max(0, (score / 10) * 100));
}

export function ReportScoreExcerpt() {
  const { total, max, status, explanation, modules } = PUBLIC_SAMPLE_SCORE;

  return (
    <div
      className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6"
      aria-label="Ausschnitt aus dem MentionBee-Report: MentionBee Score"
    >
      <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">
        MentionBee Score
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-3">
        <p className="font-heading text-5xl font-bold leading-none tabular-nums text-orange-500 sm:text-6xl">
          {total}
          <span className="text-xl font-medium text-mention-gray sm:text-2xl"> /{max}</span>
        </p>
        <span className="inline-flex rounded-full bg-orange-50 px-3.5 py-1.5 text-sm font-medium text-orange-600 ring-1 ring-orange-100">
          {status}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-mention-gray">
        {explanation}
      </p>

      <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3" role="list">
        {modules.map((mod) => (
          <li key={mod.name} className="rounded-xl border border-zinc-200 bg-white p-3.5 sm:p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-heading text-sm font-semibold text-mention-dark">
                {mod.name}
              </h3>
              <span
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-zinc-400"
                aria-hidden
              >
                <Info className="size-4" strokeWidth={1.75} />
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-mention-gray">{mod.description}</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="w-8 shrink-0 text-sm font-bold tabular-nums text-mention-dark">
                {mod.score.toFixed(1)}
              </span>
              <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-zinc-100">
                <div
                  className={`${moduleBarClass(mod.score)} h-full rounded-full`}
                  style={{ width: `${moduleBarWidth(mod.score)}%` }}
                />
              </div>
              <span className="w-10 shrink-0 text-right text-sm tabular-nums text-mention-gray">
                {mod.weightPct}%
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
