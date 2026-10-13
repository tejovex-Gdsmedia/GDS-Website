import type { Metadata } from "next";
import { SITE_URL, BRAND_NAME } from "./routes";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

/**
 * Generates complete Next.js Metadata for a page.
 * Every page gets: unique title, description, self-referencing canonical,
 * Open Graph tags, and Twitter card tags.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage ?? `${SITE_URL}/og/default.png`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

/** For pages that should never be indexed (thank-you, drafts, etc.) */
export function buildNoIndexMetadata(title: string): Metadata {
  return {
    title,
    robots: { index: false, follow: false },
  };
}
