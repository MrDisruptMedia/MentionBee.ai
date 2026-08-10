import type { Metadata } from "next";
import { ComparisonPageTemplate } from "@/components/content/ComparisonPageTemplate";
import { aiVisibilityAuditVsMonitoringContent } from "@/content/compare/ai-visibility-audit-vs-monitoring";

export const metadata: Metadata = {
  title: "AI Visibility Audit vs Monitoring: Was passt für KMU?",
  description: "Erfahren Sie, ob ein einmaliger AI Visibility Audit oder laufendes Monitoring für Ihr KMU sinnvoller ist. Klarer Vergleich für Marketing-Entscheider.",
  alternates: { canonical: "https://mentionbee.ai/compare/ai-visibility-audit-vs-monitoring" },
};

export default function Page() {
  return <ComparisonPageTemplate content={aiVisibilityAuditVsMonitoringContent} />;
}
