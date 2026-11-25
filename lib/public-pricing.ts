/** Antwortschema von AI-Visibility-Report `GET /api/public/pricing`. */
export type PublicPricing = {
  deepDivePrice: number;
  deepDivePriceFormatted: string;
  deepDiveRegularPrice: number;
  deepDiveRegularPriceFormatted: string;
  currency: string;
  priceChf: number;
  priceEur: number;
  /** Neutrale Angabe beider Settings, unabhängig vom Besucher- oder Serverland. */
  blogPriceFormatted: string;
};

/**
 * Letzter Server-/Fehlerfallback, angeglichen an die Backend-`settings`-SoT.
 * Kein Verkaufspreis für Client-Loading; siehe `PRICING_PLACEHOLDER`.
 */
export const PRICING_FALLBACK: PublicPricing = {
  deepDivePrice: 190,
  deepDivePriceFormatted: "€ 190",
  deepDiveRegularPrice: 249,
  deepDiveRegularPriceFormatted: "€ 249",
  currency: "EUR",
  priceChf: 0,
  priceEur: 0,
  blogPriceFormatted: "",
};

/** Kein Verkaufspreis — nur Layout-Platzhalter, bis `/api/public/pricing` geantwortet hat. */
export const PRICING_PLACEHOLDER: PublicPricing = {
  deepDivePrice: 0,
  deepDivePriceFormatted: "",
  deepDiveRegularPrice: 0,
  deepDiveRegularPriceFormatted: "",
  currency: "",
  priceChf: 0,
  priceEur: 0,
  blogPriceFormatted: "",
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
  const blogPriceFormatted = String(b.blogPriceFormatted ?? "").trim();

  const raw = b.deepDivePrice;
  const num = typeof raw === "number" ? raw : Number(raw);
  const deepDivePrice = Number.isFinite(num) && num >= 0 ? num : 0;
  const priceChf = majorAmount(b.priceChf);
  const priceEur = majorAmount(b.priceEur);

  const currency = String(b.currency ?? "").trim().toUpperCase();

  if (!deepDivePriceFormatted && !blogPriceFormatted) return null;

  return {
    deepDivePrice,
    deepDivePriceFormatted,
    deepDiveRegularPrice: 0,
    deepDiveRegularPriceFormatted: "",
    currency,
    priceChf,
    priceEur,
    blogPriceFormatted,
  };
}

function majorAmount(value: unknown): number {
  const num = typeof value === "number" ? value : Number(value);
  return Number.isFinite(num) && num >= 0 ? num : 0;
}

/** Server: zentrale Preise für JSON-LD / FAQ — Base-URL = AI-Visibility-Deployment. */
export async function fetchPublicPricing(): Promise<PublicPricing> {
  const base = getPricingApiBaseUrl();
  if (!base) return PRICING_PLACEHOLDER;

  try {
    const res = await fetch(`${base}/api/public/pricing`, { cache: "no-store" });
    if (!res.ok) return PRICING_PLACEHOLDER;
    const body: unknown = await res.json();
    return parsePublicPricingFromJson(body) ?? PRICING_PLACEHOLDER;
  } catch {
    return PRICING_PLACEHOLDER;
  }
}
