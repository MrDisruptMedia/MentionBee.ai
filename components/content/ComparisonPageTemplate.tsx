import Link from "next/link";

import type { ComparisonPageContent } from "@/content/compare/types";
import { applyPricingTemplates } from "@/lib/apply-pricing-templates";
import { fetchPublicPricing } from "@/lib/public-pricing";

function markdownishToParagraphs(text: string): string[] {
  return text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export async function ComparisonPageTemplate({ content }: { content: ComparisonPageContent }) {
  const pricing = await fetchPublicPricing();
  const sections = content.sections.map((section) => ({
    ...section,
    heading: section.heading ? applyPricingTemplates(section.heading, pricing) : section.heading,
    body: applyPricingTemplates(section.body, pricing),
  }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.title,
    description: content.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto w-full max-w-3xl px-4 pb-20 pt-24 md:pt-28">
        <header className="mb-10">
          <p className="text-sm font-medium uppercase tracking-wide text-mention-yellow-text">MentionBee Guide</p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
            {content.title}
          </h1>
        </header>

        <div className="prose prose-zinc max-w-none prose-headings:font-heading prose-a:text-mention-yellow-text">
          {sections.map((section, idx) => (
            <section key={idx} className="mb-10">
              {section.heading ? (
                <h2 className="font-heading text-2xl font-semibold text-mention-dark">{section.heading}</h2>
              ) : null}
              {markdownishToParagraphs(section.body).map((paragraph, pIdx) => (
                <p key={pIdx} className="mt-4 text-base leading-relaxed text-mention-gray">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        {content.internalLinks.length > 0 ? (
          <nav className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6" aria-label="Weiterführende Links">
            <h2 className="font-heading text-lg font-semibold text-mention-dark">Nächste Schritte</h2>
            <ul className="mt-4 space-y-2">
              {content.internalLinks.map((href) => (
                <li key={href}>
                  <Link href={href} className="font-medium text-mention-yellow-text underline underline-offset-2 hover:text-mention-yellow-text-hover">
                    {href}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </article>
    </>
  );
}
