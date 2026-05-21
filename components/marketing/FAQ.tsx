import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqEntries } from "@/content/faq";
import { faqHomepageSchemaExtensions } from "@/content/faq-schema-extensions";

export function FAQ() {
  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      ...faqEntries.map((faq) => ({
        "@type": "Question" as const,
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: faq.answer,
        },
      })),
      ...faqHomepageSchemaExtensions.map((faq) => ({
        "@type": "Question" as const,
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: faq.answer,
        },
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd),
        }}
      />
      <section
        id="faq"
        className="scroll-mt-24 border-b border-zinc-200/80 bg-white py-14 md:py-20"
      >
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          Häufige Fragen
        </h2>

        <Accordion className="mt-12 rounded-2xl border border-zinc-200/80 bg-mention-light/30 px-2 sm:px-4">
          {faqEntries.map((entry) => (
            <AccordionItem key={entry.id} value={entry.id} className="px-2 sm:px-2">
              <AccordionTrigger className="text-base font-semibold text-mention-dark hover:no-underline">
                {entry.question}
              </AccordionTrigger>
              <AccordionContent className="text-mention-gray">
                <p>{entry.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-8 text-center">
          <Link
            href="/faq"
            className="text-base font-semibold text-primary underline underline-offset-3 transition-colors hover:text-primary-dark"
          >
            Alle Fragen
          </Link>
        </p>
      </div>
    </section>
    </>
  );
}
