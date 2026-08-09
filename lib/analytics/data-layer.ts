/**
 * MentionBee Measurement Layer v1 — GTM dataLayer abstraction.
 * App pushes business events; GTM/GA4 consumes them (EXTERNAL CONFIG REQUIRED in GTM).
 */

export const FUNNEL_EVENTS = {
  VIEW_PAID_REPORT: "view_paid_report",
  VIEW_SAMPLE_REPORT: "view_sample_report",
  FREE_REPORT_SUBMIT: "free_report_submit",
  BEGIN_CHECKOUT: "begin_checkout",
  PURCHASE: "purchase",
} as const;

export type FunnelEventName = (typeof FUNNEL_EVENTS)[keyof typeof FUNNEL_EVENTS];

export type DataLayerPayload = {
  event: FunnelEventName | string;
  [key: string]: unknown;
};

export type PurchaseTrackStatus = "pushed" | "already_tracked" | "invalid";

declare global {
  interface Window {
    dataLayer?: DataLayerPayload[];
  }
}

export const PURCHASE_DEDUP_PREFIX = "mb_purchase_tracked:";

const purchasePushInFlight = new Set<string>();

export function purchaseDedupKey(transactionId: string): string {
  return `${PURCHASE_DEDUP_PREFIX}${transactionId.trim()}`;
}

/** Push a business event to the GTM dataLayer. No-op on server. */
export function pushDataLayerEvent(
  event: FunnelEventName | string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

export function trackViewPaidReport(): void {
  pushDataLayerEvent(FUNNEL_EVENTS.VIEW_PAID_REPORT, {
    page_path: "/report",
  });
}

export function trackViewSampleReport(): void {
  pushDataLayerEvent(FUNNEL_EVENTS.VIEW_SAMPLE_REPORT, {
    page_path: "/sample-report",
  });
}

export function trackFreeReportSubmit(params?: { website?: string }): void {
  pushDataLayerEvent(FUNNEL_EVENTS.FREE_REPORT_SUBMIT, {
    ...(params?.website ? { website: params.website } : {}),
  });
}

export function trackBeginCheckout(params: {
  value: number;
  currency: string;
  product?: string;
}): void {
  pushDataLayerEvent(FUNNEL_EVENTS.BEGIN_CHECKOUT, {
    value: params.value,
    currency: params.currency,
    product: params.product ?? "mentionbee_deep_dive",
  });
}

export function isPurchaseTracked(transactionId: string): boolean {
  if (typeof window === "undefined") return false;
  const id = transactionId.trim();
  if (!id) return false;
  try {
    return window.sessionStorage.getItem(purchaseDedupKey(id)) === "1";
  } catch {
    return false;
  }
}

function markPurchaseTracked(transactionId: string): void {
  try {
    window.sessionStorage.setItem(purchaseDedupKey(transactionId), "1");
  } catch {
    // Push already happened for this page load; storage unavailable is non-fatal.
  }
}

/**
 * Fire purchase once per transaction_id (sessionStorage dedupe).
 * Returns true only when a new event was pushed.
 */
export function trackPurchaseOnce(params: {
  transaction_id: string;
  value: number;
  currency: string;
  product?: string;
}): boolean {
  if (typeof window === "undefined") return false;
  const id = params.transaction_id.trim();
  if (!id) return false;
  if (isPurchaseTracked(id)) return false;
  if (purchasePushInFlight.has(id)) return false;

  purchasePushInFlight.add(id);
  try {
    pushDataLayerEvent(FUNNEL_EVENTS.PURCHASE, {
      transaction_id: id,
      value: params.value,
      currency: params.currency,
      product: params.product ?? "mentionbee_deep_dive",
    });
    markPurchaseTracked(id);
    return true;
  } finally {
    purchasePushInFlight.delete(id);
  }
}

/**
 * Idempotent purchase tracking for /order/success.
 * Safe for React Strict Mode remounts and Stripe success URL reloads.
 */
export function ensurePurchaseTracked(params: {
  transaction_id: string;
  value: number;
  currency: string;
  product?: string;
}): PurchaseTrackStatus {
  if (typeof window === "undefined") return "invalid";
  const id = params.transaction_id.trim();
  if (!id) return "invalid";
  if (isPurchaseTracked(id)) return "already_tracked";
  return trackPurchaseOnce(params) ? "pushed" : "invalid";
}
