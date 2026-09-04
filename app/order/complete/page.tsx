import type { Metadata } from "next";
import { Suspense } from "react";

import { OrderCompleteForm } from "@/components/order/OrderCompleteForm";

import { canonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Report einrichten | MentionBee",
  description: "Ergänze die Angaben für deinen MentionBee AI Visibility Report.",
  robots: { index: false, follow: false },
  alternates: { canonical: canonicalUrl("/order/complete") },
};

export default function OrderCompletePage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto flex min-h-[50vh] max-w-2xl items-center justify-center px-4 pt-24">
          <div
            className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-200 border-t-primary"
            aria-label="Wird geladen"
          />
        </div>
      }
    >
      <div className="mx-auto max-w-5xl px-4 pt-24 pb-16">
        <OrderCompleteForm />
      </div>
    </Suspense>
  );
}
