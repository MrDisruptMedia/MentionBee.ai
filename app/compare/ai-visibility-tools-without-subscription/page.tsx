import type { Metadata } from "next";
import { ComparisonPageTemplate } from "@/components/content/ComparisonPageTemplate";
import { aiVisibilityToolsWithoutSubscriptionContent } from "@/content/compare/ai-visibility-tools-without-subscription";

export const metadata: Metadata = {
  title: "AI-Visibility-Tools ohne Abo: Einmalige Analyse für KMU",
  description: "Erfahren Sie, welche KI-Visibility-Tools ohne laufende Gebühren verfügbar sind. Einmalige Audits statt Abo – ideal für kostenbewusste Unternehmen.",
  alternates: { canonical: "https://mentionbee.ai/compare/ai-visibility-tools-without-subscription" },
};

export default function Page() {
  return <ComparisonPageTemplate content={aiVisibilityToolsWithoutSubscriptionContent} />;
}
