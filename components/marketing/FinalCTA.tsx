import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-mention-dark py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Finde heraus, ob KI deine Marke empfiehlt.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Ideal für Startups, Agenturen und B2B SaaS.
          </p>
          <Link
            href="/free-report"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-mention-dark shadow-lg transition-colors hover:bg-primary-dark"
          >
            Kostenlosen Report anfordern →
          </Link>
        </div>
      </div>
      <span
        className="pointer-events-none absolute -right-4 bottom-4 text-7xl opacity-30 select-none sm:right-8 sm:bottom-8 sm:text-8xl"
        aria-hidden
      >
        🐝
      </span>
    </section>
  );
}
