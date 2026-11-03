import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { seoContentContent as content } from "@/lib/content/servicePages";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

// Root layout's title template already appends " | GDS Media"; the PDF's
// SEO title already ends with it too, so strip the duplicate suffix here
// (the stored content string itself is left untouched, verbatim from the PDF).
export const metadata: Metadata = buildMetadata({
  title: content.seoTitle.replace(/\s*\|\s*GDS Media\s*$/, ""),
  description: content.metaDescription,
  path: content.path,
});

export default function SeoContentPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: content.badge, href: content.path },
          ]),
          serviceSchema({
            name: content.hero.h1,
            description: content.metaDescription,
            url: content.path,
          }),
          faqSchema(content.faqs),
        ]}
      />
      <ServicePageTemplate content={content} />
    </div>
  );
}
