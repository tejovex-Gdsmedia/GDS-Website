import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const routeConfig = getRoute("/services/ai-avatars")!;
export const metadata: Metadata = buildMetadata(routeConfig);

export default function AiAvatarsPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "AI Brand Ambassador", href: "/services/ai-avatars" },
          ]),
          serviceSchema({
            name: routeConfig.title,
            description: routeConfig.description,
            url: routeConfig.path,
          }),
        ]}
      />

      <PageHero
        title="AI Brand Ambassador & Avatars"
        subtitle="Create a consistent, professional AI spokesperson representing your brand 24/7 across every digital channel."
        badge="Studio Pillar"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "AI Brand Ambassador", href: "/services/ai-avatars" },
        ]}
      />

      <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-brand-white mb-6">Your 24/7 Brand Voice</h2>
        <p className="text-brand-white/70 text-base leading-relaxed mb-12">
          Build a custom AI avatar that speaks in multiple languages and dialects, delivering your brand message with absolute consistency across social media, ads, and website videos.
        </p>
        <div className="text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-light transition-colors text-sm"
          >
            Book Your Strategy Call
          </a>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
