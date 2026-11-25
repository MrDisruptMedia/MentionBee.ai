"use client";

import { usePublicPricing } from "@/hooks/usePublicPricing";

type Variant = "hero" | "aside";

/** Verkaufspreis von `NEXT_PUBLIC_APP_URL/api/public/pricing`, ohne Streichpreis. */
export function ReportPriceBadges({ variant }: { variant: Variant }) {
  const { pricing, loading } = usePublicPricing();
  const sale = loading ? "" : pricing.deepDivePriceFormatted;

  if (variant === "hero") {
    return (
      <div className="mt-8 flex flex-col items-center gap-1">
        <span className="text-4xl font-bold text-primary">{sale}</span>
      </div>
    );
  }

  return (
    <div className="mt-1 flex flex-col gap-0.5">
      <span className="text-3xl font-bold text-mention-dark">{sale}</span>
    </div>
  );
}
