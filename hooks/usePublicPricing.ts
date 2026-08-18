"use client";

import { useEffect, useState } from "react";
import {
  PRICING_FALLBACK,
  PRICING_PLACEHOLDER,
  getClientPricingApiUrl,
  parsePublicPricingFromJson,
  type PublicPricing,
} from "@/lib/public-pricing";

export type { PublicPricing };

/**
 * Client: Preise von der Haupt-App (Neon `settings`).
 * Lädt über `NEXT_PUBLIC_APP_URL` oder same-origin `/api/public/pricing` (Rewrite).
 * Zeigt während des Ladens keinen hardcodierten Verkaufspreis.
 */
export function usePublicPricing(): {
  pricing: PublicPricing;
  loading: boolean;
  isFallback: boolean;
} {
  const [pricing, setPricing] = useState<PublicPricing>(PRICING_PLACEHOLDER);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(true);

  useEffect(() => {
    const url = getClientPricingApiUrl() || "/api/public/pricing";

    let cancelled = false;
    void fetch(url, { credentials: "omit" })
      .then((r) => {
        if (!r.ok) throw new Error(`pricing ${r.status}`);
        return r.json();
      })
      .then((body: unknown) => {
        if (cancelled) return;
        const parsed = parsePublicPricingFromJson(body);
        if (parsed) {
          setPricing(parsed);
          setIsFallback(false);
        } else {
          setPricing(PRICING_PLACEHOLDER);
          setIsFallback(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setPricing(PRICING_FALLBACK);
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
