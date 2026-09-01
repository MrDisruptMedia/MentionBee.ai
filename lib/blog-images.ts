import manifest from "@/content/blog/image-manifest.json";

const BASE_PATH = manifest.basePathRecommendation || "/images/blog";

export type BlogImageVariant = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type BlogImageSet = {
  slug: string;
  alt: string;
  card: BlogImageVariant;
  hero: BlogImageVariant;
  social: BlogImageVariant;
};

export function getBlogImages(slug: string): BlogImageSet | null {
  const entry = manifest.articles.find((a) => a.slug === slug);
  if (!entry) return null;

  return {
    slug: entry.slug,
    alt: entry.alt,
    card: {
      src: `${BASE_PATH}/${entry.files.card}`,
      width: manifest.formats.card.width,
      height: manifest.formats.card.height,
      alt: entry.alt,
    },
    hero: {
      src: `${BASE_PATH}/${entry.files.hero}`,
      width: manifest.formats.hero.width,
      height: manifest.formats.hero.height,
      alt: entry.alt,
    },
    social: {
      src: `${BASE_PATH}/${entry.files.social}`,
      width: manifest.formats.social.width,
      height: manifest.formats.social.height,
    },
  };
}

export function listManifestSlugs(): string[] {
  return manifest.articles.map((a) => a.slug);
}
