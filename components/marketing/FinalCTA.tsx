import Link from "next/link";

import type { PublicPricing } from "@/lib/public-pricing";

export function FinalCTA({ pricing }: { pricing: PublicPricing }) {
  return (
    <section className="bg-mention-dark py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Weisst du, wen KI empfiehlt, wenn deine Kunden nach deinem Angebot fragen?
        </h2>

        <p className="mt-6 text-lg text-white/80">Und noch wichtiger:</p>
        <p className="mt-3 font-heading text-2xl font-bold tracking-tight text-primary sm:text-3xl">
          Weisst du, warum du dabei auftauchst – oder eben nicht?
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Der AI Visibility Audit von MentionBee gibt dir einen Ausgangspunkt und zeigt dir, wo du
          konkret ansetzen kannst.
        </p>

        <Link
          href="/report"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-mention-dark shadow-lg transition-all duration-200 hover:scale-105 hover:bg-primary-dark"
        >
          Meine Sichtbarkeit prüfen →
        </Link>
        <p className="mt-3 text-sm text-white/70">
          Einmaliger Report · {pricing.deepDivePriceFormatted} · Kein Abo
        </p>
      </div>
    </section>
  );
}
