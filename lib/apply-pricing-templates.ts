import type { PublicPricing } from "@/lib/public-pricing";

/**
 * Platzhalter in statischen FAQs / Copy ({{DEEP_DIVE_PRICE}}, {{DEEP_DIVE_REGULAR}}).
 */
export function applyPricingTemplates(template: string, pricing: PublicPricing): string {
  return template
    .replace(/\{\{DEEP_DIVE_PRICE\}\}/g, pricing.deepDivePriceFormatted)
    .replace(/\{\{DEEP_DIVE_REGULAR\}\}/g, pricing.deepDiveRegularPriceFormatted);
}
