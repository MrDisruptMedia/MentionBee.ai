import Link from "next/link";

function HeroAnswerVisual() {
  return (
    <div
      className="mx-auto w-full max-w-md rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-lg ring-1 ring-zinc-100 sm:p-6 lg:mx-0 lg:max-w-none"
      aria-label="Beispiel: KI-Antwort ohne dein Unternehmen"
    >
      <div className="flex items-center gap-2 border-b border-zinc-100 pb-4">
        <span className="flex size-8 items-center justify-center rounded-full bg-mention-light text-sm font-bold text-mention-dark">
          KI
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-mention-dark">Kaufnahe Frage</p>
          <p className="text-xs text-mention-gray">ChatGPT · Claude · Gemini · Perplexity</p>
        </div>
      </div>

      <blockquote className="mt-4 rounded-xl bg-mention-light/70 px-4 py-3 text-sm leading-relaxed text-mention-dark">
        „Welche Anbieter für [deine Leistung] gibt es in meiner Region?“
      </blockquote>

      <div className="mt-5 space-y-3">
        <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">
          Antwort der KI
        </p>
        <ul className="space-y-2.5" role="list">
          <li className="flex items-start gap-3 rounded-xl border border-emerald-200/80 bg-emerald-50/70 px-3 py-2.5">
            <span className="mt-0.5 text-sm font-bold text-emerald-700" aria-hidden>
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-mention-dark">Wettbewerber A</p>
              <p className="text-xs text-mention-gray">Wird empfohlen</p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-xl border border-emerald-200/80 bg-emerald-50/70 px-3 py-2.5">
            <span className="mt-0.5 text-sm font-bold text-emerald-700" aria-hidden>
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-mention-dark">Wettbewerber B</p>
              <p className="text-xs text-mention-gray">Wird empfohlen</p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-3 py-2.5">
            <span className="mt-0.5 text-sm font-bold text-zinc-400" aria-hidden>
              —
            </span>
            <div>
              <p className="text-sm font-semibold text-mention-dark">Dein Unternehmen</p>
              <p className="text-xs font-medium text-red-600">Nicht genannt</p>
            </div>
          </li>
        </ul>
      </div>

      <p className="mt-5 border-t border-zinc-100 pt-4 text-center text-sm font-semibold text-mention-dark">
        Andere werden empfohlen. Du nicht.
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="border-b border-zinc-200/80 bg-white">
      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center gap-12 px-4 py-16 max-lg:items-start lg:grid lg:min-h-[80vh] lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
        <div className="flex max-w-xl flex-col gap-6">
          <p className="w-fit rounded-full border border-zinc-200/90 bg-mention-light px-3 py-1 text-xs font-semibold tracking-wide text-mention-dark uppercase">
            AI Visibility Audit
          </p>

          <h1 className="font-heading text-4xl leading-[1.12] font-bold text-mention-dark sm:text-5xl lg:text-6xl">
            Warum empfiehlt KI deine Konkurrenz – dich aber nicht?
          </h1>

          <p className="text-lg leading-relaxed text-mention-gray">
            MentionBee zeigt dir, warum ChatGPT, Claude, Gemini &amp; Co. dein Unternehmen (noch) nicht
            empfehlen – und was du tun kannst, damit sich das ändert.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/report"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-mention-dark shadow-md transition-all duration-200 hover:scale-105 hover:bg-primary-dark sm:w-auto"
            >
              Meine Sichtbarkeit prüfen →
            </Link>
            <p className="text-sm text-mention-gray">
              Einmaliger Report · 190 CHF · Konkrete Massnahmen statt Abo
            </p>
          </div>
        </div>

        <HeroAnswerVisual />
      </div>
    </section>
  );
}
