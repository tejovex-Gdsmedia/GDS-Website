import {
  SITE_URL,
  BRAND_NAME,
  PHONE,
  EMAIL,
  BUSINESS_HOURS,
} from "./routes";

// ─── Organization / ProfessionalService ──────────────────────────────────────

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/gds-logo.png`, // TODO: replace with actual logo URL
    telephone: `+91${PHONE}`,
    email: EMAIL,
    openingHours: BUSINESS_HOURS,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: [
      // TODO: add verified social profile URLs
      // "https://www.instagram.com/gdsmedia",
      // "https://www.facebook.com/gdsmedia",
      // "https://www.linkedin.com/company/gdsmedia",
    ],
    description:
      "GDS Media is an AI-powered digital marketing agency for Indian businesses and MSMEs, offering AI ad films, brand strategy, Meta and Google advertising, and AI-driven sales automation.",
  };
}

// ─── BreadcrumbList ───────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

// ─── Service ──────────────────────────────────────────────────────────────────

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "India" },
  };
}

// ─── FAQPage ──────────────────────────────────────────────────────────────────

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ─── Article (Blog) ───────────────────────────────────────────────────────────

export function articleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    image: image ?? `${SITE_URL}/og/blog-default.png`,
    author: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/gds-logo.png` },
    },
  };
}
