import Image from "next/image";
import Link from "next/link";

import { MEMS_REVIEW_QUOTE } from "@/lib/json-ld";

const SAVESPACE_REVIEW_QUOTE =
  "„MentionBee hat uns geholfen, unsere digitale Sichtbarkeit erstmals systematisch und in der Tiefe zu erfassen. Der Report diente uns als wertvoller Benchmark und hat klare Ansatzpunkte für unsere weitere Arbeit geliefert.“";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  note?: string;
};

const testimonials: Testimonial[] = [
  {
    quote: MEMS_REVIEW_QUOTE,
    name: "Markus Nägele",
    role: "CEO, MEMS AG",
    imageSrc: "/images/testimonials/markus-naegele.jpg",
    imageAlt: "Markus Nägele, MEMS AG",
    note: "MEMS entwickelt Messtechnik für Gasqualität und Brennwertbestimmung.",
  },
  {
    quote: SAVESPACE_REVIEW_QUOTE,
    name: "Max Bieri",
    role: "CEO & Co-Founder, SaveSpace",
    imageSrc: "/images/testimonials/max-bieri-savespace.jpg",
    imageAlt: "Max Bieri, CEO & Co-Founder von SaveSpace",
  },
];

function TestimonialFigure({ quote, name, role, imageSrc, imageAlt, note }: Testimonial) {
  return (
    <figure className="grid gap-8 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-start sm:gap-10">
      <div className="mx-auto sm:mx-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={320}
          height={320}
          sizes="160px"
          className="size-40 rounded-2xl object-cover object-center shadow-md ring-1 ring-zinc-200"
        />
      </div>

      <div>
        <blockquote className="font-heading text-xl leading-relaxed text-mention-dark sm:text-2xl">
          {quote}
        </blockquote>
        <figcaption className="mt-6">
          <p className="text-base font-semibold text-mention-dark">{name}</p>
          <p className="text-sm text-mention-gray">{role}</p>
          {note ? (
            <p className="mt-3 text-sm leading-relaxed text-mention-gray">{note}</p>
          ) : null}
        </figcaption>
      </div>
    </figure>
  );
}

export function MemsTestimonial() {
  return (
    <section className="border-b border-zinc-200/80 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mx-auto max-w-3xl text-center font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          Ein Blick von aussen zeigt Dinge, die man selbst leicht übersieht.
        </h2>

        <div className="mt-12 flex flex-col gap-12 md:gap-16">
          {testimonials.map((testimonial) => (
            <TestimonialFigure key={testimonial.name} {...testimonial} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/sample-report"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-mention-dark shadow-md transition-all duration-200 hover:scale-105 hover:bg-primary-dark"
          >
            Beispielreport ansehen →
          </Link>
        </div>
      </div>
    </section>
  );
}
