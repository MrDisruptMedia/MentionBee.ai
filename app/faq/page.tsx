import type { Metadata } from "next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqFullPageSections, getAllFaqFullPageItems } from "@/content/faq-full-page";

export const metadata: Metadata = {
  title: "FAQ – Häufige Fragen | MentionBee.ai",
  description:
    "Alles über MentionBee, AI Visibility, GEO, Reports und Preise – häufig gestellte Fragen mit klaren Antworten.",
};

export default function FaqPage() {
  const allItems = getAllFaqFullPageItems();
  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question" as const,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.answerText,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd),
        }}
      />

      <section className="border-b border-zinc-200/80 bg-white pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
            Häufige Fragen
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-mention-gray sm:text-xl">
            Alles was du über MentionBee, AI Visibility und unsere Reports wissen musst.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-12 px-4 py-14 md:py-20">
        {faqFullPageSections.map((section, sectionIndex) => (
          <section key={section.heading} aria-labelledby={`faq-section-${sectionIndex}`}>
            <h2
              id={`faq-section-${sectionIndex}`}
              className="mb-6 font-heading text-xl font-bold text-mention-dark md:text-2xl"
            >
              {section.heading}
            </h2>
            <Accordion className="rounded-2xl border border-zinc-200/80 bg-mention-light/30 px-2 sm:px-4">
              {section.items.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="px-2 sm:px-2">
                  <AccordionTrigger className="text-base font-semibold text-mention-dark hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-mention-gray">
                    {item.answerHtml ? (
                      <div
                        className="text-sm leading-relaxed md:text-base [&_a]:font-medium [&_a]:text-primary"
                        dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                      />
                    ) : (
                      <p className="text-sm leading-relaxed md:text-base">{item.answerText}</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
      </div>
    </>
  );
}
