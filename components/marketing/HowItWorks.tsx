import Link from "next/link";

const steps = [
  { n: 1, title: "Marke, Wettbewerber & Ziele eingeben" },
  {
    n: 2,
    title:
      "MentionBee führt 150+ strukturierte Checks durch – inklusive 4 KI-Systeme, Tech SEO, UX und mehr",
  },
  { n: 3, title: "Du erhältst einen priorisierten Maßnahmenplan per E-Mail" },
  { n: 4, title: "Optional: Umsetzungs-Support buchen" },
] as const;

export function HowItWorks() {
  return (
    <section
      id="methodik"
      className="scroll-mt-24 border-b border-zinc-200/80 bg-mention-light py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          So funktioniert&apos;s
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-mention-gray">
          Von der Analyse zur konkreten Maßnahme – in einem strukturierten Report.
        </p>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-zinc-200/90 bg-mention-light p-6 shadow-sm ring-1 ring-zinc-100 md:p-8">
          <ol className="flex flex-col gap-5" role="list">
            {steps.map((step) => (
              <li key={step.n} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-gray-900 shadow-sm">
                  {step.n}
                </span>
                <p className="pt-1.5 text-sm font-medium leading-snug text-mention-dark">{step.title}</p>
              </li>
            ))}
          </ol>
          <Link
            href="/report"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-gray-900 shadow-md transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-primary-dark"
          >
            Deep-Dive Report ansehen →
          </Link>
          <p className="mt-5 text-center text-sm text-mention-gray">
            <Link href="/free-report" className="font-medium text-mention-dark underline-offset-4 hover:underline">
              Noch nicht sicher? Starte mit dem kostenlosen Report.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
