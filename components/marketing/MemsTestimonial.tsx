import Image from "next/image";
import Link from "next/link";

export function MemsTestimonial() {
  return (
    <section className="border-b border-zinc-200/80 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mx-auto max-w-3xl text-center font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          Ein Blick von aussen zeigt Dinge, die man selbst leicht übersieht.
        </h2>

        <figure className="mt-12 grid gap-8 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-start sm:gap-10">
          <div className="mx-auto sm:mx-0">
            <Image
              src="/images/testimonials/markus-naegele.jpg"
              alt="Markus Nägele, MEMS AG"
              width={320}
              height={320}
              sizes="160px"
              className="size-40 rounded-2xl object-cover object-center shadow-md ring-1 ring-zinc-200"
            />
          </div>

          <div>
            <blockquote className="font-heading text-xl leading-relaxed text-mention-dark sm:text-2xl">
              „Der Report offenbarte den dringenden Handlungsbedarf für unseren Webauftritt. Daraufhin
              haben wir unsere Website neu gestaltet – seitdem erhalten wir messbar mehr verwertbare
              Anfragen.“
            </blockquote>
            <figcaption className="mt-6">
              <p className="text-base font-semibold text-mention-dark">Markus Nägele</p>
              <p className="text-sm text-mention-gray">MEMS AG</p>
              <p className="mt-3 text-sm leading-relaxed text-mention-gray">
                MEMS entwickelt Messtechnik für Gasqualität und Brennwertbestimmung.
              </p>
            </figcaption>
          </div>
        </figure>

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
