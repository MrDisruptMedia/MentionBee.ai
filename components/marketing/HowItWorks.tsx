const steps = [
  {
    n: 1,
    title: "Marke eingeben",
    body: "Gib deine Marke und ggf. Wettbewerber ein.",
  },
  {
    n: 2,
    title: "MentionBee analysiert relevante AI-Antworten",
    body: "Wir prüfen zahlreiche Prompts in führenden KI-Systemen.",
  },
  {
    n: 3,
    title: "Du erhältst deinen Report",
    body: "Erhalte Ergebnisse, Insights und konkrete Handlungsempfehlungen.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="methodik"
      className="scroll-mt-24 border-b border-zinc-200/80 bg-mention-light py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          So funktioniert&apos;s
        </h2>

        <div className="relative mt-16 md:mt-20">
          <div
            className="pointer-events-none absolute top-5 right-[15%] left-[15%] z-0 hidden h-0.5 bg-gradient-to-r from-primary/10 via-primary/35 to-primary/10 md:block"
            aria-hidden
          />

          <ol className="relative z-10 grid gap-12 md:grid-cols-3 md:gap-6 lg:gap-10">
            {steps.map((step) => (
              <li key={step.n} className="flex flex-col items-center text-center">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-sm">
                  {step.n}
                </span>
                <h3 className="mt-5 font-heading text-base font-semibold leading-snug text-mention-dark md:min-h-[3rem] md:max-w-[14rem]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-mention-gray">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
