"use client";

import { useEffect, useState } from "react";
import {
  PRICING_FALLBACK,
  getPricingApiBaseUrl,
  parsePublicPricingFromJson,
  type PublicPricing,
} from "@/lib/public-pricing";

export type { PublicPricing };

/**
 * Client: Preise von der Haupt-App (Neon `settings`). `NEXT_PUBLIC_APP_URL` = Basis-URL ohne trailing slash.
 */
export function usePublicPricing(): {
  pricing: PublicPricing;
  loading: boolean;
  isFallback: boolean;
} {
  const [pricing, setPricing] = useState<PublicPricing>(PRICING_FALLBACK);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(true);

  useEffect(() => {
    const base = getPricingApiBaseUrl();
    const url = base ? `${base}/api/public/pricing` : "";
    if (!url) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("[usePublicPricing] NEXT_PUBLIC_APP_URL fehlt; nutze Fallback-Preis.");
      }
      setLoading(false);
      setIsFallback(true);
      return;
    }

    let cancelled = false;
    void fetch(url, { credentials: "omit" })
      .then((r) => r.json())
      .then((body: unknown) => {
        if (cancelled) return;
        const parsed = parsePublicPricingFromJson(body);
        if (parsed) {
          setPricing(parsed);
          setIsFallback(false);
        }
      })
      .catch(() => {
        if (!cancelled) setIsFallback(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { pricing, loading, isFallback };
}
