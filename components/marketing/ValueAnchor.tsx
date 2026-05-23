"use client";

import { usePublicPricing } from "@/hooks/usePublicPricing";

export function ValueAnchor() {
  const { pricing } = usePublicPricing();
  const offer = pricing.deepDivePriceFormatted;

  return (
    <section className="border-b border-zinc-200/80 bg-primary/10 py-10">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm text-mention-gray">Warum dir dieser Report bares Geld spart</p>
        <p className="mx-auto mt-3 max-w-3xl text-2xl font-semibold leading-snug text-mention-dark md:text-3xl">
          Was Agenturen für 2.500–5.000 € als AI- und Website-Audit liefern, erhältst du hier strukturiert,
          transparent und praktikabel innerhalb von 48h für {offer}.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-mention-gray">
          Kein Agentur-Briefing. Kein wochenlanges Warten. Kein generischer Bericht.
        </p>
      </div>
    </section>
  );
}
