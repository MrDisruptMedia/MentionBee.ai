/** Antwortschema von AI-Visibility-Report `GET /api/public/pricing`. */
export type PublicPricing = {
  deepDivePrice: number;
  deepDivePriceFormatted: string;
  deepDiveRegularPrice: number;
  deepDiveRegularPriceFormatted: string;
  currency: string;
};

/** Entspricht dem API-Fehlerfallback der Haupt-App (Backend-SoT: EUR 190). */
export const PRICING_FALLBACK: PublicPricing = {
  deepDivePrice: 190,
  deepDivePriceFormatted: "€ 190",
  deepDiveRegularPrice: 249,
  deepDiveRegularPriceFormatted: "€ 249",
  currency: "EUR",
};

export function getPricingApiBaseUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/$/, "") ?? "";
}

/** Client: `/api/public/pricing` — same-origin rewrite when `NEXT_PUBLIC_APP_URL` is unset. */
export function getClientPricingApiUrl(): string {
  const base = getPricingApiBaseUrl();
  if (base) return `${base}/api/public/pricing`;
  if (typeof window !== "undefined") {
    return `${window.location.origin}/api/public/pricing`;
  }
  return "";
}

/** Parst das JSON eines erfolgreichen Pricing-Calls. Gibt bei ungültigem Body `null`. */
export function parsePublicPricingFromJson(body: unknown): PublicPricing | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;

  const deepDivePriceFormatted = String(b.deepDivePriceFormatted ?? b.deepDiveDisplay ?? "").trim();
  const deepDiveRegularPriceFormatted = String(b.deepDiveRegularPriceFormatted ?? "").trim();

  const raw = b.deepDivePrice;
  const num = typeof raw === "number" ? raw : Number(raw);
  const deepDivePrice = Number.isFinite(num) && num >= 0 ? num : PRICING_FALLBACK.deepDivePrice;

  const rawR = b.deepDiveRegularPrice;
  const numR = typeof rawR === "number" ? rawR : Number(rawR);
  const deepDiveRegularPrice = Number.isFinite(numR) && numR >= 0 ? numR : PRICING_FALLBACK.deepDiveRegularPrice;

  const currency = String(b.currency ?? "EUR").trim().toUpperCase() || PRICING_FALLBACK.currency;

  if (!deepDivePriceFormatted) return null;

  return {
    deepDivePrice,
    deepDivePriceFormatted,
    deepDiveRegularPrice,
    deepDiveRegularPriceFormatted:
      deepDiveRegularPriceFormatted || PRICING_FALLBACK.deepDiveRegularPriceFormatted,
    currency,
  };
}

/** Server: zentrale Preise für JSON-LD / FAQ — Base-URL = AI-Visibility-Deployment. */
export async function fetchPublicPricing(): Promise<PublicPricing> {
  const base = getPricingApiBaseUrl();
  if (!base) return PRICING_FALLBACK;

  try {
    const res = await fetch(`${base}/api/public/pricing`, {
      next: { revalidate: 120 },
    });
    if (!res.ok) return PRICING_FALLBACK;
    const body: unknown = await res.json();
    return parsePublicPricingFromJson(body) ?? PRICING_FALLBACK;
  } catch {
    return PRICING_FALLBACK;
  }
}
