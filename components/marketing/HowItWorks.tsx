import Link from "next/link";

const freeReportSteps = [
  { n: 1, title: "Marke & E-Mail eingeben" },
  { n: 2, title: "MentionBee analysiert 4 KI-Systeme" },
  { n: 3, title: "Report kommt per E-Mail" },
] as const;

const deepDiveSteps = [
  { n: 1, title: "Marke, Wettbewerber & Ziele eingeben" },
  { n: 2, title: "MentionBee führt 150+ strukturierte Checks durch" },
  { n: 3, title: "Du erhältst priorisierten Maßnahmenplan" },
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

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex h-full flex-col rounded-2xl border border-zinc-200/90 bg-mention-light p-6 shadow-sm ring-1 ring-zinc-100 md:p-8">
            <p className="font-heading text-lg font-semibold text-mention-dark">Kostenloser Report</p>
            <ol className="mt-6 flex flex-1 flex-col gap-5" role="list">
              {freeReportSteps.map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-sm">
                    {step.n}
                  </span>
                  <p className="pt-1.5 text-sm font-medium leading-snug text-mention-dark">{step.title}</p>
                </li>
              ))}
            </ol>
            <Link
              href="/free-report"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-mention-dark shadow-md transition-colors hover:bg-primary-dark"
            >
              Jetzt kostenlos starten →
            </Link>
          </div>

          <div className="flex h-full flex-col rounded-2xl bg-mention-dark p-6 shadow-lg ring-1 ring-white/10 md:p-8">
            <p className="font-heading text-lg font-semibold text-white">Deep-Dive Report</p>
            <ol className="mt-6 flex flex-1 flex-col gap-5" role="list">
              {deepDiveSteps.map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-mention-dark shadow-sm">
                    {step.n}
                  </span>
                  <p className="pt-1.5 text-sm font-medium leading-snug text-white">{step.title}</p>
                </li>
              ))}
            </ol>
            <Link
              href="/report"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Deep-Dive ansehen →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
