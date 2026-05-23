"use client";

import { usePublicPricing } from "@/hooks/usePublicPricing";

type Variant = "hero" | "aside";

/** Preis + durchgestrichener Regulärpreis — Daten von `NEXT_PUBLIC_APP_URL/api/public/pricing`. */
export function ReportPriceBadges({ variant }: { variant: Variant }) {
  const { pricing } = usePublicPricing();

  const sale = pricing.deepDivePriceFormatted;
  const regular = pricing.deepDiveRegularPriceFormatted;

  if (variant === "hero") {
    return (
      <div className="mt-8 flex flex-col items-center gap-1">
        <span className="text-lg font-medium text-mention-gray line-through decoration-mention-gray/80">
          {regular}
        </span>
        <span className="text-4xl font-bold text-primary">{sale}</span>
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-col gap-0.5">
      <span className="text-base text-mention-gray line-through">{regular}</span>
      <span className="text-3xl font-bold text-primary">{sale}</span>
    </div>
  );
}
