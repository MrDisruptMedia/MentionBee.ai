"use client";

import Link from "next/link";
import { usePublicPricing } from "@/hooks/usePublicPricing";

export function SampleReportDeepDiveCta() {
  const { pricing, loading } = usePublicPricing();
  const label = loading ? "Deep-Dive laden…" : `Deep-Dive für ${pricing.deepDivePriceFormatted} →`;

  return (
    <Link
      href="/report"
      className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-mention-dark shadow-md transition hover:bg-primary-dark sm:flex-none"
    >
      {label}
    </Link>
  );
}
