import Link from "next/link";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm text-mention-dark">
      <span
        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary"
        aria-hidden
      >
        ✓
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

const deepDiveItems = [
  "Mehr Prompts & Use Cases",
  "Wettbewerbsvergleich (3 Konkurrenten)",
  "Ursachenanalyse",
  "Priorisierter Maßnahmenplan",
  "SEO & Technische Analyse",
  "UX & Conversion-Bewertung",
  "Schema & E-E-A-T Check",
  "Markt & Externsichtbarkeit",
  "Über 150 strukturierte Checks",
] as const;

export function FreeVsPaid() {
  return (
    <section className="border-b border-zinc-200/80 bg-mention-light py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          Kostenloser Report vs. Deep-Dive Report
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-mention-gray">
          Der kostenlose Report zeigt dir, ob ein Problem oder Potenzial besteht. Der Deep-Dive Report
          zeigt dir, warum – und was du ändern solltest.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-mention-dark">
              Kostenloser Report
            </h3>
            <ul className="mt-6 flex flex-col gap-4" role="list">
              <CheckItem>Erster Sichtbarkeitscheck</CheckItem>
              <CheckItem>Begrenzte Anzahl Prompts</CheckItem>
              <CheckItem>Kurzfazit</CheckItem>
              <CheckItem>Kostenlos</CheckItem>
            </ul>
            <Link
              href="/free-report"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto sm:self-start"
            >
              Free Report starten →
            </Link>
          </div>

          <div className="relative flex flex-col rounded-2xl border-2 border-primary bg-white p-8 pt-10 shadow-md ring-2 ring-primary/10 sm:pt-8">
            <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-mention-dark sm:top-6 sm:right-6">
              Empfohlen
            </span>
            <h3 className="pr-24 font-heading text-xl font-semibold text-mention-dark">
              Deep-Dive Report
            </h3>
            <ul className="mt-6 flex flex-col gap-3" role="list">
              {deepDiveItems.map((line) => (
                <CheckItem key={line}>{line}</CheckItem>
              ))}
            </ul>
            <Link
              href="/report"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border-2 border-primary bg-primary/5 px-6 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary/10 sm:w-auto sm:self-start"
            >
              Deep-Dive ansehen →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
