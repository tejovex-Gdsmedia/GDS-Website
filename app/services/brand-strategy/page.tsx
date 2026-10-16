import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/services/brand-strategy")!;
export const metadata: Metadata = buildMetadata(routeConfig);

export default function BrandStrategyPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Brand Blueprint", href: "/services/brand-strategy" },
          ]),
          serviceSchema({
            name: routeConfig.title,
            description: routeConfig.description,
            url: routeConfig.path,
          }),
        ]}
      />

      <Revealable>

        <PageHero
        title="Brand Blueprint: Strategy for Growth"
        subtitle="Every successful campaign starts with a solid foundation. We define your positioning, audience psychology, and messaging before spending a single rupee."
        badge="Blueprint Pillar"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Brand Blueprint", href: "/services/brand-strategy" },
        ]}
        videoSrc="/videos/about-hero.mp4" />

      </Revealable>

      <Revealable>
        <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-brand-ink mb-6">Why Strategy Comes First</h2>
        <p className="text-brand-ink/70 text-base leading-relaxed mb-6">
          Most businesses fail with digital marketing not because their ads look bad, but because their message is unclear. Who are you speaking to? What makes you different from your competitors? Why should an Indian consumer choose you today?
        </p>
        <p className="text-brand-ink/70 text-base leading-relaxed mb-12">
          Our Brand Blueprint answers these questions definitively, giving your business a crystal-clear roadmap for all creative production and advertising.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-brand-surface border border-brand-blue/10 rounded-xl p-6">
            <h3 className="font-display text-lg font-bold text-brand-blue mb-2">Audience Psychology</h3>
            <p className="text-brand-ink/70 text-sm">
              Deep profiling of your Indian target audience — their pain points, aspirations, and buying triggers.
            </p>
          </div>
          <div className="bg-brand-surface border border-brand-blue/10 rounded-xl p-6">
            <h3 className="font-display text-lg font-bold text-brand-blue mb-2">Messaging & Positioning</h3>
            <p className="text-brand-ink/70 text-sm">
              Crafting your core value proposition and hook library for social media and performance ads.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-brand-orange text-brand-ink font-semibold rounded-full hover:bg-brand-orange-vivid transition-colors text-sm"
          >
            Book Your Strategy Call
          </a>
        </div>
      </section>
      </Revealable>

      <CtaSection />
    </div>
  );
}
