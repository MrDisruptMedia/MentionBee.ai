import Image from "next/image";
import Link from "next/link";

import { formatDeDate } from "@/lib/blog-seo";
import { getBlogImages } from "@/lib/blog-images";

type BlogArticleCardProps = {
  publicSlug: string;
  canonicalPath: string;
  title: string;
  description?: string;
  publishedAt: string;
  contentTypeLabel?: string | null;
  /** Eager-load card image (e.g. above-the-fold homepage cards). */
  priority?: boolean;
};

export function BlogArticleCard({
  publicSlug,
  canonicalPath,
  title,
  description,
  publishedAt,
  contentTypeLabel,
  priority = false,
}: BlogArticleCardProps) {
  const images = getBlogImages(publicSlug);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm">
      {images ? (
        <Link href={canonicalPath} className="block shrink-0 overflow-hidden">
          <div className="relative aspect-video w-full overflow-hidden bg-mention-light">
            <Image
              src={images.card.src}
              alt={images.card.alt ?? images.alt}
              width={images.card.width}
              height={images.card.height}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full object-cover"
              priority={priority}
            />
          </div>
        </Link>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        {contentTypeLabel ? (
          <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">
            {contentTypeLabel}
          </p>
        ) : null}
        <h3
          className={`font-heading text-lg font-semibold tracking-tight text-mention-dark ${contentTypeLabel ? "mt-2" : ""}`}
        >
          <Link
            href={canonicalPath}
            className="text-mention-dark transition-colors hover:text-mention-gray"
          >
            {title}
          </Link>
        </h3>
        {description ? (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-mention-gray">{description}</p>
        ) : null}
        <p className="mt-4 text-sm text-mention-gray">{formatDeDate(publishedAt)}</p>
      </div>
    </article>
  );
}
