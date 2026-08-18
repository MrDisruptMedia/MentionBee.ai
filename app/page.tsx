import { DiagnosisGapSection } from "@/components/marketing/DiagnosisGapSection";
import { DiyObjectionSection } from "@/components/marketing/DiyObjectionSection";
import { FAQ } from "@/components/marketing/FAQ";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Hero } from "@/components/marketing/Hero";
import { MemsTestimonial } from "@/components/marketing/MemsTestimonial";
import { PricingRiskSection } from "@/components/marketing/PricingRiskSection";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { WhatWeAnalyze } from "@/components/marketing/WhatWeAnalyze";
import { WhatYouGetSection } from "@/components/marketing/WhatYouGetSection";
import { fetchPublicPricing } from "@/lib/public-pricing";

export default async function Home() {
  const pricing = await fetchPublicPricing();

  return (
    <>
      <Hero />
      <ProblemSection />
      <DiagnosisGapSection />
      <WhatWeAnalyze />
      <MemsTestimonial />
      <DiyObjectionSection />
      <WhatYouGetSection />
      <PricingRiskSection />
      <FAQ pricing={pricing} />
      <FinalCTA />
    </>
  );
}
