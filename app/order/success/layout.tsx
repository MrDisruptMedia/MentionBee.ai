import type { Metadata } from "next";
import type { ReactNode } from "react";

import { canonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: canonicalUrl("/order/success") },
};

export default function OrderSuccessLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
