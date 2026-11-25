import type { Metadata } from "next";

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
import { canonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: canonicalUrl("/") },
};

export default function Home() {
  const latestPosts = getLatestPublishedArticles(3);

  return (
    <>
      <Hero />
      <ProblemSection />
      <WhatWeAnalyze />
      <MemsTestimonial />
      <WhatYouGetSection />
      <PricingRiskSection />
      <FAQ />
      <LatestPostsSection articles={latestPosts} />
      <FinalCTA />
    </>
  );
}
