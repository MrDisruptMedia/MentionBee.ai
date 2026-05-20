import { FAQ } from "@/components/marketing/FAQ";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { FreeVsPaid } from "@/components/marketing/FreeVsPaid";
import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { UnsichtbarkeitSection } from "@/components/marketing/UnsichtbarkeitSection";
import { SampleReportTeaser } from "@/components/marketing/SampleReportTeaser";
import { TrustSection } from "@/components/marketing/TrustSection";
import { ValueAnchor } from "@/components/marketing/ValueAnchor";
import { WhatWeAnalyze } from "@/components/marketing/WhatWeAnalyze";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <UnsichtbarkeitSection />
      <WhatWeAnalyze />
      <ValueAnchor />
      <FreeVsPaid />
      <HowItWorks />
      <SampleReportTeaser />
      <TrustSection />
      <FAQ />
      <FinalCTA />
      <div className="mx-auto max-w-6xl px-4 pb-8">
        <a href="/llms.txt" className="text-mention-dark/90 transition-colors hover:text-primary">
          llms.txt
        </a>
      </div>
    </>
  );
}
