import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const routeConfig = getRoute("/services/ai-ad-films")!;
export const metadata: Metadata = buildMetadata(routeConfig);

export default function AiAdFilmsPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Cinematic AI Ads", href: "/services/ai-ad-films" },
          ]),
          serviceSchema({
            name: routeConfig.title,
            description: routeConfig.description,
            url: routeConfig.path,
          }),
        ]}
      />

      <PageHero
        title="Cinematic AI Ad Film Production"
        subtitle="Get Hollywood-grade video ads and commercials at a fraction of traditional shoot costs. No crew rentals, no location hassles."
        badge="Studio Pillar"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Cinematic AI Ads", href: "/services/ai-ad-films" },
        ]}
      />

      <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-brand-white mb-6">Hollywood Quality, MSME Budget</h2>
        <p className="text-brand-white/70 text-base leading-relaxed mb-6">
          Traditional video production requires hiring camera crews, booking studios, coordinating actors, and waiting weeks for post-production. Cinematic AI ads change the rules entirely.
        </p>
        <p className="text-brand-white/70 text-base leading-relaxed mb-12">
          We produce breathtaking, high-converting video commercials tailored for Indian brands, products, and services — delivered in days.
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
