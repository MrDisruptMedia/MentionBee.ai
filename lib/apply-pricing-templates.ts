import type { PublicPricing } from "@/lib/public-pricing";

/**
 * Allgemeine Texte nennen beide Settings-Preise.
 * Der besucherspezifische Betrag bleibt den Kaufbuttons vorbehalten.
 */
export function applyPricingTemplates(template: string, pricing: PublicPricing): string {
  return template
    .replace(/\{\{DEEP_DIVE_PRICE\}\}/g, pricing.blogPriceFormatted)
    .replace(/\{\{DEEP_DIVE_REGULAR\}\}/g, "");
}
