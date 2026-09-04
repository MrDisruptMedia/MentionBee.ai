import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { authorProfileImageSrc, getAuthorFromArticles } from "@/lib/blog";
import { formatDeDate } from "@/lib/blog-seo";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [{ slug: "olaf-kunz" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getAuthorFromArticles(slug);
  if (!data) return { robots: { index: false, follow: false } };

  const canonical = absoluteUrl(`/autor/${data.author.slug}`);
  const title = `${data.author.name} | Autor | MentionBee`;
  const description =
    data.author.shortBio ||
    `Artikel von ${data.author.name}${data.author.role ? ` – ${data.author.role}` : ""}.`;
  const image = authorProfileImageSrc(data.author);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "profile",
      url: canonical,
      title,
      description,
      siteName: "MentionBee",
      locale: "de_CH",
      ...(image
        ? { images: [{ url: absoluteUrl(image), alt: data.author.name }] }
        : {}),
    },
  };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const data = getAuthorFromArticles(slug);
  if (!data) notFound();

  const { author, articles } = data;
  const profileImage = authorProfileImageSrc(author);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    url: absoluteUrl(`/autor/${author.slug}`),
    jobTitle: author.role || undefined,
    description: author.shortBio || undefined,
    ...(profileImage
      ? { image: absoluteUrl(profileImage) }
      : {}),
    worksFor: {
      "@type": "Organization",
      name: "MentionBee",
      url: absoluteUrl("/"),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            {profileImage ? (
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full bg-mention-light sm:h-32 sm:w-32">
                <Image
                  src={profileImage}
                  alt={author.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            ) : null}
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">
                Autor
              </p>
              <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
                {author.name}
              </h1>
              {author.role ? <p className="mt-2 text-mention-gray">{author.role}</p> : null}
            </div>
          </div>
          {author.shortBio ? (
            <p className="mt-6 text-base leading-relaxed text-mention-dark md:text-lg">
              {author.shortBio}
            </p>
          ) : null}

          <section className="mt-12">
            <h2 className="font-heading text-xl font-semibold text-mention-dark">
              Veröffentlichte Artikel
            </h2>
            <ul className="mt-5 space-y-5">
              {articles.map((a) => (
                <li key={a.publicSlug} className="border-b border-zinc-200 pb-5 last:border-0">
                  <Link
                    href={a.canonicalPath}
                    className="text-lg font-semibold text-mention-dark no-underline hover:text-mention-gray"
                  >
                    {a.title}
                  </Link>
                  <p className="mt-1 text-sm text-mention-gray">{formatDeDate(a.publishedAt)}</p>
                  {a.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-mention-gray">{a.description}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>

          <p className="mt-10">
            <Link href="/blog" className="text-sm font-medium text-mention-dark underline decoration-primary">
              ← Alle Blog-Artikel
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
