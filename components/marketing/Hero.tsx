import Link from "next/link";

import { HeroReportExcerpt } from "@/components/marketing/HeroReportExcerpt";
import type { PublicPricing } from "@/lib/public-pricing";

export function Hero({ pricing }: { pricing: PublicPricing }) {
  return (
    <section className="border-b border-zinc-200/80 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-center gap-8 px-4 py-10 max-lg:items-start sm:gap-12 sm:py-16 lg:grid lg:min-h-[80vh] lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
        <div className="flex max-w-xl flex-col gap-4 sm:gap-6">
          <p className="w-fit rounded-full border border-zinc-200/90 bg-mention-light px-3 py-1 text-xs font-semibold tracking-wide text-mention-dark uppercase">
            AI Visibility Audit
          </p>

          <h1 className="font-heading text-[2rem] leading-[1.18] font-bold text-mention-dark sm:text-5xl sm:leading-[1.12] lg:text-6xl">
            Warum empfiehlt KI deine Konkurrenz – dich aber nicht?
          </h1>

          <p className="text-lg leading-relaxed text-mention-gray">
            MentionBee zeigt dir, warum ChatGPT, Claude, Gemini &amp; Co. dein Unternehmen (noch) nicht
            empfehlen – und was du tun kannst, damit sich das ändert.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/report"
              data-hero-cta=""
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-mention-dark shadow-md transition-all duration-200 hover:scale-105 hover:bg-primary-dark sm:w-auto"
            >
              Meine Sichtbarkeit prüfen →
            </Link>
            <p className="text-sm text-mention-gray">
              Einmaliger Report · {pricing.deepDivePriceFormatted} · Konkrete Massnahmen statt Abo
            </p>
          </div>
        </div>

        <HeroReportExcerpt />
      </div>
    </section>
  );
}
