"use client";

import { usePublicPricing } from "@/hooks/usePublicPricing";

/** Preis aus dem Browser, damit das Besucherland und nicht der Serverstandort gilt. */
export function VisitorOfferPrice({
  before,
  after,
  className,
}: {
  before: string;
  after: string;
  className?: string;
}) {
  const { pricing, loading } = usePublicPricing();
  const amount = loading
    ? "…"
    : pricing.deepDivePriceFormatted || "Preis derzeit nicht verfügbar";

  return (
    <p className={className}>
      {before}
      {amount}
      {after}
    </p>
  );
}
