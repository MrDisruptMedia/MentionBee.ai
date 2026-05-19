import type { Metadata } from "next";
import { Check } from "lucide-react";

import { FreeReportForm } from "@/components/forms/FreeReportForm";

export const metadata: Metadata = {
  title: "Kostenloser AI Visibility Report | MentionBee",
  description:
    "Kostenloser Check: Sieh, ob ChatGPT, Perplexity und weitere KI deine Marke nennen – mit Sichtbarkeits-Score, Wettbewerbsvergleich und ersten Empfehlungen per E-Mail.",
};

const bullets = [
  "Analyse über 4 KI-Systeme",
  "Erster Sichtbarkeits-Score",
  "Wettbewerber-Vergleich",
  "Konkrete erste Empfehlungen",
] as const;

export default function FreeReportPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-24 pb-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="flex flex-col gap-6">
          <p className="w-fit rounded-full border border-zinc-200/90 bg-mention-light px-3 py-1 text-xs font-semibold tracking-wide text-mention-dark uppercase">
            Kostenlos · Kein Account nötig
          </p>

          <h1 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl lg:text-[2.5rem]">
            Dein kostenloser AI Visibility Check
          </h1>

          <p className="text-lg leading-relaxed text-mention-gray">
            Finde heraus, ob ChatGPT, Perplexity &amp; Co. deine Marke kennen – inklusive erstem
            Wettbewerbsvergleich.
          </p>

          <ul className="flex flex-col gap-3" role="list">
            {bullets.map((line) => (
              <li key={line} className="flex gap-3 text-mention-dark">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={2.25} aria-hidden />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-mention-gray">
            <span aria-hidden>🔒</span> Ohne Login · <span aria-hidden>📧</span> Ergebnis per E-Mail ·{" "}
            <span aria-hidden>⏱</span> Ergebnis in ca. 10 Min.
          </p>
        </div>

        <FreeReportForm />
      </div>
    </div>
  );
}
