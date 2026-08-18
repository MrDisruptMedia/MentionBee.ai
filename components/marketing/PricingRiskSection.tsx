import Link from "next/link";

export function PricingRiskSection() {
  return (
    <section className="border-b border-zinc-200/80 bg-mention-light py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="mx-auto w-fit rounded-full border border-zinc-200/90 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-mention-dark uppercase">
          AI Visibility Audit
        </p>

        <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          Finde heraus, warum andere empfohlen werden – und du vielleicht nicht.
        </h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-mention-gray sm:text-lg">
          <p>
            Du brauchst kein weiteres Dashboard und kein laufendes Monitoring, um mit dem Thema
            anzufangen.
          </p>
          <p>Du brauchst zuerst eine belastbare Bestandsaufnahme.</p>
          <p>
            MentionBee untersucht deine aktuelle Situation und liefert dir einen priorisierten Report
            mit konkreten Massnahmen.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-200/80 bg-white px-6 py-8 shadow-sm">
          <p className="font-heading text-5xl font-bold tracking-tight text-mention-dark tabular-nums sm:text-6xl">
            190 CHF
          </p>
          <p className="mt-2 text-sm text-mention-gray">einmalig · kein Abo</p>
        </div>

        <div className="mt-10 space-y-4 text-left text-base leading-relaxed text-mention-gray sm:text-lg">
          <p>
            Niemand kann dir seriös garantieren, dass ChatGPT, Claude, Gemini oder Perplexity dein
            Unternehmen nach einer bestimmten Änderung häufiger empfiehlt.
          </p>
          <p>
            Aber die zentralen Ansatzpunkte aus dem Audit – klarere Inhalte, eine verständlichere
            Positionierung, bessere technische Zugänglichkeit und eine stärkere digitale Präsenz –
            sind nicht nur für KI relevant.
          </p>
          <p className="rounded-2xl border border-primary/25 bg-primary/10 px-5 py-5 font-medium text-mention-dark">
            Du investierst also nicht in einen Trick für einen unbekannten Algorithmus. Du investierst
            in ein klareres und besser verständliches digitales Bild deines Unternehmens.
          </p>
        </div>

        <Link
          href="/report"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-mention-dark shadow-md transition-all duration-200 hover:scale-105 hover:bg-primary-dark"
        >
          Meine Sichtbarkeit prüfen →
        </Link>
        <p className="mt-3 text-sm text-mention-gray">Klarer Ausgangspunkt. Konkrete nächste Schritte.</p>
      </div>
    </section>
  );
}
