import { XCircle } from "lucide-react";

import {
  PUBLIC_SAMPLE_AI_MENTION_MODULE,
  PUBLIC_SAMPLE_AI_PROVIDERS,
  PUBLIC_SAMPLE_COMPANY,
} from "@/lib/marketing/public-sample-report-excerpts";

export function ReportAiVisibilityExcerpt() {
  const { name, scoreLabel, max } = PUBLIC_SAMPLE_AI_MENTION_MODULE;

  return (
    <figure className="mt-12">
      <figcaption className="text-sm font-medium text-mention-gray sm:text-base">
        Vier KI-Systeme. Dieselben kaufnahen Fragen.
      </figcaption>
      <div
        className="mt-4 rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-100 sm:p-8"
        aria-label={`Ausschnitt aus dem öffentlichen MentionBee-Beispielreport: AI Visibility für ${PUBLIC_SAMPLE_COMPANY}`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">
              Report-Ausschnitt
            </p>
            <p className="mt-1 font-heading text-xl font-bold text-mention-dark sm:text-2xl">
              AI Visibility
            </p>
            <p className="mt-1 text-sm text-mention-gray">Beispiel: {PUBLIC_SAMPLE_COMPANY}</p>
          </div>
          <p className="inline-flex w-fit shrink-0 rounded-full bg-red-100 px-3 py-1 text-sm font-bold tabular-nums text-red-950 ring-1 ring-red-200">
            {name} {scoreLabel}/{max}
          </p>
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2" role="list">
          {PUBLIC_SAMPLE_AI_PROVIDERS.map((provider) => (
            <li
              key={provider.name}
              className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200/80 bg-mention-light/30 px-4 py-3"
            >
              <span className="font-heading text-sm font-semibold text-mention-dark">
                {provider.name}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700">
                <XCircle className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                {provider.mentioned ? "Erwähnt" : "Nicht erwähnt"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
