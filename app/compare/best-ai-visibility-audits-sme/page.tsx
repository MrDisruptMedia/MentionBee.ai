import type { Metadata } from "next";
import { ComparisonPageTemplate } from "@/components/content/ComparisonPageTemplate";
import { bestAiVisibilityAuditsSmeContent } from "@/content/compare/best-ai-visibility-audits-sme";

export const metadata: Metadata = {
  title: "Beste KI-Visibility-Audits für KMU im Vergleich",
  description: "Vergleich der besten KI-Visibility-Audits für kleine und mittlere Unternehmen. Welche Lösung passt zu Ihrem Bedarf? Ehrliche Kriterien für KMU.",
  alternates: { canonical: "https://mentionbee.ai/compare/best-ai-visibility-audits-sme" },
};

export default function Page() {
  return <ComparisonPageTemplate content={bestAiVisibilityAuditsSmeContent} />;
}
