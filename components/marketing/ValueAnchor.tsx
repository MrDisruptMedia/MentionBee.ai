"use client";

import { usePublicPricing } from "@/hooks/usePublicPricing";

export function ValueAnchor() {
  const { pricing } = usePublicPricing();
  const offer = pricing.deepDivePriceFormatted;

  return (
    <section className="border-b border-zinc-200/80 bg-primary/10 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          Warum dir dieser Report bares Geld spart
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-mention-dark md:text-xl">
          Was Agenturen für 2.500–5.000 € als AI- und Website-Audit liefern, erhältst du hier strukturiert,
          transparent und praktikabel innerhalb von 48h für {offer}.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-mention-gray">
          Kein Agentur-Briefing. Kein wochenlanges Warten. Kein generischer Bericht.
        </p>
      </div>
    </section>
  );
}
