"use client";

import Link from "next/link";
import { usePublicPricing } from "@/hooks/usePublicPricing";

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
  "siehst du, bei welchen Kauf-Fragen du nicht auftauchst",
  "erkennst du, welche Wettbewerber KI stattdessen empfiehlt",
  "verstehst du, welche Quellen und Inhalte dir fehlen",
  "bekommst du 25 gewichtete Maßnahmen in 3 wichtigen Kategorien",
  "erhältst du einen priorisierten Maßnahmenplan",
  "erhältst du konkrete Content- und PR-Empfehlungen",
  "erfährst du, wie du Maßnahmen in deinem CMS umsetzt",
  "analysieren wir 5–6 kaufnahe Suchanfragen deiner Branche über 4 KI-Systeme",
] as const;

export function FreeVsPaid() {
  const { pricing } = usePublicPricing();
  const sale = pricing.deepDivePriceFormatted;
  const regular = pricing.deepDiveRegularPriceFormatted;

  return (
    <section className="border-b border-zinc-200/80 bg-mention-light py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          Kostenloser Report vs. Deep-Dive Report
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-mention-gray">
          Der kostenlose Report zeigt dir, ob du sichtbar bist. Der Deep-Dive zeigt dir, warum du gewinnst oder
          verlierst – und was du als Nächstes ändern solltest.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-mention-dark">Kostenloser Report</h3>
            <p className="mt-3 text-2xl font-bold tabular-nums text-mention-dark">0 €</p>
            <p className="mt-1 text-sm text-mention-gray">Sofort starten · Kein Konto nötig · 0 €</p>
            <ul className="mt-6 flex flex-col gap-4" role="list">
              <CheckItem>Erster Sichtbarkeitscheck</CheckItem>
              <CheckItem>Begrenzte Anzahl Prompts</CheckItem>
              <CheckItem>Kurzfazit</CheckItem>
              <CheckItem>Kostenlos</CheckItem>
            </ul>
            <Link
              href="/free-report"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-gray-900 transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-primary-dark sm:w-auto sm:self-start"
            >
              Free Report starten →
            </Link>
          </div>

          <div className="relative flex flex-col rounded-2xl border-2 border-primary bg-white p-8 pt-10 shadow-md ring-2 ring-primary/10 sm:pt-8">
            <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-gray-900 sm:top-6 sm:right-6">
              Empfohlen
            </span>
            <h3 className="pr-24 font-heading text-xl font-semibold text-mention-dark">Deep-Dive Report</h3>

            <div className="mt-4 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl border border-primary/25 bg-primary/5 px-4 py-3">
              <span className="text-lg font-medium text-mention-gray line-through decoration-mention-gray/80">
                {regular}
              </span>
              <span className="text-2xl font-bold text-primary tabular-nums">
                {sale} netto
              </span>
            </div>
            <p className="mt-2 text-xs text-mention-gray">
              Einführungspreis · Regulär {regular} · Lieferung in 24–48h
            </p>

            <p className="mb-3 mt-6 text-sm italic text-mention-gray">
              Mit diesem Business Audit...
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {deepDiveItems.map((line) => (
                <CheckItem key={line}>{line}</CheckItem>
              ))}
            </ul>
            <Link
              href="/report"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border-2 border-primary bg-primary/5 px-6 py-3 text-center text-sm font-semibold text-primary transition-colors duration-200 hover:border-mention-dark hover:bg-mention-dark hover:text-white sm:w-auto sm:self-start"
            >
              Deep-Dive ansehen →
            </Link>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-mention-gray md:text-lg">
          🐝 1 % des Erlöses geht an{" "}
          <a
            href="https://bienen.ch/spenden/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-mention-gray underline decoration-zinc-400/70 underline-offset-3 transition-colors hover:text-mention-dark hover:decoration-mention-dark/40"
          >
            bienen.ch
          </a>{" "}
          – für den Schutz der Wildbienen in der Schweiz.
        </p>
      </div>
    </section>
  );
}
