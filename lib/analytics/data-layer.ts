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

declare global {
  interface Window {
    dataLayer?: DataLayerPayload[];
  }
}

const PURCHASE_DEDUP_PREFIX = "mb_purchase_tracked:";

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

/**
 * Fire purchase once per transaction_id (sessionStorage dedupe).
 * Returns true if the event was pushed, false if skipped (duplicate / missing id).
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

  const key = `${PURCHASE_DEDUP_PREFIX}${id}`;
  try {
    if (window.sessionStorage.getItem(key) === "1") return false;
    window.sessionStorage.setItem(key, "1");
  } catch {
    // sessionStorage unavailable — still push once this page load
  }

  pushDataLayerEvent(FUNNEL_EVENTS.PURCHASE, {
    transaction_id: id,
    value: params.value,
    currency: params.currency,
    product: params.product ?? "mentionbee_deep_dive",
  });
  return true;
}
