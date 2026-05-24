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
 * Erste und Fallback-Anzeige, bis `/api/public/pricing` geantwortet hat.
 * Bewusst echte Platzhalter-Strings — UI soll immer `pricing` rendern (nicht `loading`).
 */
const INITIAL_VISIBLE_PRICING: PublicPricing = {
  deepDivePrice: 199,
  deepDivePriceFormatted: "€ 199",
  deepDiveRegularPrice: 299,
  deepDiveRegularPriceFormatted: "€ 299",
  currency: "EUR",
};

/**
 * Client: Preise von der Haupt-App (Neon `settings`). `NEXT_PUBLIC_APP_URL` = Basis-URL ohne trailing slash.
 */
export function usePublicPricing(): {
  pricing: PublicPricing;
  loading: boolean;
  isFallback: boolean;
} {
  const [pricing, setPricing] = useState<PublicPricing>(INITIAL_VISIBLE_PRICING);
  const [loading, setLoading] = useState(() => Boolean(getPricingApiBaseUrl()));
  const [isFallback, setIsFallback] = useState(true);

  useEffect(() => {
    const base = getPricingApiBaseUrl();
    const url = base ? `${base}/api/public/pricing` : "";
    if (!url) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("[usePublicPricing] NEXT_PUBLIC_APP_URL fehlt; nutze Fallback-Preis.");
      }
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
        } else {
          setPricing({ ...INITIAL_VISIBLE_PRICING });
          setIsFallback(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setPricing({ ...PRICING_FALLBACK });
          setIsFallback(true);
        }
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
