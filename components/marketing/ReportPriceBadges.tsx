"use client";

import { usePublicPricing } from "@/hooks/usePublicPricing";

type Variant = "hero" | "aside";

/** Preis + durchgestrichener Regulärpreis — Daten von `NEXT_PUBLIC_APP_URL/api/public/pricing`. */
export function ReportPriceBadges({ variant }: { variant: Variant }) {
  const { pricing, loading } = usePublicPricing();

  const sale = loading ? "…" : pricing.deepDivePriceFormatted;
  const regular = loading ? "…" : pricing.deepDiveRegularPriceFormatted;

  if (variant === "hero") {
    return (
      <div className="mt-8 flex flex-wrap items-baseline justify-center gap-3">
        <span className="text-4xl font-bold text-primary">{sale}</span>
        <span className="text-lg text-mention-gray line-through">{regular}</span>
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-wrap items-baseline gap-2">
      <span className="text-3xl font-bold text-primary">{sale}</span>
      <span className="text-base text-mention-gray line-through">{regular}</span>
    </div>
  );
}
