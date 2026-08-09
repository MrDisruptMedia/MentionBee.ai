"use client";

import { useEffect, useRef } from "react";

import {
  trackViewPaidReport,
  trackViewSampleReport,
  type FunnelEventName,
  FUNNEL_EVENTS,
} from "@/lib/analytics/data-layer";

type ViewEvent =
  | typeof FUNNEL_EVENTS.VIEW_PAID_REPORT
  | typeof FUNNEL_EVENTS.VIEW_SAMPLE_REPORT;

/**
 * Fires a funnel page-view event once per mount (Strict Mode safe via ref).
 * Renders nothing.
 */
export function TrackFunnelView({ event }: { event: ViewEvent }) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    if (event === FUNNEL_EVENTS.VIEW_PAID_REPORT) trackViewPaidReport();
    else if (event === FUNNEL_EVENTS.VIEW_SAMPLE_REPORT) trackViewSampleReport();
  }, [event]);

  return null;
}

export type { FunnelEventName };
