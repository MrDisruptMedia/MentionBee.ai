"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

const ANALYSIS_ITEMS = [
  "AI Visibility Score bei ChatGPT, Claude, Gemini & Perplexity",
  "Wie du im Vergleich zu deinen Mitbewerbern abschneidest",
  "Positionierungs-Klarheit deiner Website",
  "Technical SEO & AI-Crawler-Zugang",
  "Schema-Markup & E-E-A-T Signale",
  "UX & Conversion-Optimierung",
  "Market Signal Score (Bewertungen, Presse, Social)",
  "10 priorisierte Massnahmen mit fertigen Umsetzungsanleitungen",
] as const;

export function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const reportId = searchParams.get("reportId")?.trim() ?? "";

  return (
    <div className="mx-auto w-full max-w-lg text-center">
      <CheckCircle className="mx-auto size-16 text-green-500" strokeWidth={1.5} aria-hidden />

      <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
        Dein Report wird erstellt!
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-mention-gray">
        Wir analysieren jetzt deine Website mit 6 verschiedenen Modulen. Du erhältst den fertigen
        individuellen Online-Report per E-Mail-Link – innerhalb von 24 Stunden.
      </p>

      <div className="mt-8 rounded-xl border border-zinc-200/90 bg-white px-6 py-5 text-left shadow-sm">
        <p className="text-sm font-semibold text-mention-dark">Was wir analysieren:</p>
        <ul className="mt-3 space-y-3">
          {ANALYSIS_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-primary" aria-hidden>
                ✓
              </span>
              <span className="text-sm text-mention-gray">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {reportId ? (
        <Link
          href={`/report/${reportId}`}
          className="mt-8 inline-block w-full rounded-lg bg-primary px-8 py-3 font-semibold text-mention-dark transition hover:bg-primary-dark"
        >
          Report-Status prüfen →
        </Link>
      ) : (
        <p className="mt-8 rounded-lg border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          Report-ID fehlt. Bitte prüfe deine E-Mail oder kontaktiere uns unter hello@mentionbee.ai.
        </p>
      )}

      <p className="mt-6 text-xs text-mention-gray">Fragen? Schreib uns: hello@mentionbee.ai</p>
    </div>
  );
}
