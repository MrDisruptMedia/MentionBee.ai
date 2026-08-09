import type { Metadata } from "next";
import { Suspense } from "react";

import { OrderConfirmationContent } from "@/components/order/OrderConfirmationContent";

export const metadata: Metadata = {
  title: "Report wird erstellt | MentionBee",
  description: "Dein MentionBee AI Visibility Report ist in Bearbeitung.",
  robots: { index: false, follow: false },
};

export default function OrderConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto flex min-h-[50vh] max-w-lg items-center justify-center px-4 pt-24">
          <div
            className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-200 border-t-primary"
            aria-label="Wird geladen"
          />
        </div>
      }
    >
      <div className="mx-auto max-w-5xl px-4 pt-24 pb-16">
        <OrderConfirmationContent />
      </div>
    </Suspense>
  );
}
