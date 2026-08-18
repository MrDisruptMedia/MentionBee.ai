import { DiagnosisGapSection } from "@/components/marketing/DiagnosisGapSection";
import { DiyObjectionSection } from "@/components/marketing/DiyObjectionSection";
import { FAQ } from "@/components/marketing/FAQ";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Hero } from "@/components/marketing/Hero";
import { LatestPostsSection } from "@/components/marketing/LatestPostsSection";
import { MemsTestimonial } from "@/components/marketing/MemsTestimonial";
import { PricingRiskSection } from "@/components/marketing/PricingRiskSection";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { WhatWeAnalyze } from "@/components/marketing/WhatWeAnalyze";
import { WhatYouGetSection } from "@/components/marketing/WhatYouGetSection";
import { getLatestPublishedArticles } from "@/lib/blog";
import { fetchPublicPricing } from "@/lib/public-pricing";

export default async function Home() {
  const pricing = await fetchPublicPricing();
  const latestPosts = getLatestPublishedArticles(3);

  return (
    <>
      <Hero pricing={pricing} />
      <ProblemSection />
      <DiagnosisGapSection />
      <WhatWeAnalyze />
      <MemsTestimonial />
      <DiyObjectionSection />
      <WhatYouGetSection />
      <PricingRiskSection pricing={pricing} />
      <FAQ pricing={pricing} />
      <LatestPostsSection articles={latestPosts} />
      <FinalCTA pricing={pricing} />
    </>
  );
}
