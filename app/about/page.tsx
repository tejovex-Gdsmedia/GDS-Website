import { Metadata } from "next";
import { getRoute } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection, TestimonialPlaceholder } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const routeConfig = getRoute("/about")!;
export const metadata: Metadata = buildMetadata(routeConfig);

export default function AboutPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ])}
      />

      <PageHero
        title="About GDS Media"
        subtitle="We combine AI specialists, content strategists and performance marketers to help Indian businesses compete and win."
        badge="Our Mission & Team"
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-display text-3xl font-bold text-brand-white mb-6">
              Making AI Marketing Accessible & Affordable for Every Indian MSME
            </h2>
            <p className="text-brand-white/70 text-base leading-relaxed mb-4">
              Traditional advertising agencies are built for large enterprises with multi-crore budgets and months of production time. For most Indian business owners — in healthcare, real estate, retail, or hospitality — that model simply doesn&apos;t work.
            </p>
            <p className="text-brand-white/70 text-base leading-relaxed">
              GDS Media was founded to bridge this gap. By combining cutting-edge AI creative tools with rigorous marketing strategy and automated sales funnels, we deliver premium agency results at a fraction of traditional shoot costs.
            </p>
          </div>
          <div className="border border-brand-gold/20 bg-brand-gray rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-brand-gold mb-4">Core Principles</h3>
            <ul className="space-y-4 text-sm text-brand-white/80">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold">1.</span> Strategy before AI: Technology without positioning is just expensive noise.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold">2.</span> Sales don&apos;t stop at the lead: Instant WhatsApp replies and voice follow-ups close the gap.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold">3.</span> Radical transparency: No vanity metrics, no hidden fees, clear accountability.
              </li>
            </ul>
          </div>
        </div>

        {/* Team / Expertise section */}
        <div className="border-t border-brand-gold/10 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-brand-white mb-4">
              The GDS Expertise
            </h2>
            <p className="text-brand-white/60 text-base">
              Our multidisciplinary team brings together deep expertise across three critical domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-gray border border-brand-gold/10 rounded-xl p-6">
              <h3 className="font-display text-lg font-bold text-brand-gold mb-2">AI Specialists</h3>
              <p className="text-brand-white/70 text-sm leading-relaxed">
                Prompt engineers, generative video creators, and automation architects building bespoke workflows for your brand.
              </p>
            </div>
            <div className="bg-brand-gray border border-brand-gold/10 rounded-xl p-6">
              <h3 className="font-display text-lg font-bold text-brand-gold mb-2">Content Strategists</h3>
              <p className="text-brand-white/70 text-sm leading-relaxed">
                Experienced copywriters and storytellers who understand Indian consumer psychology and regional nuances.
              </p>
            </div>
            <div className="bg-brand-gray border border-brand-gold/10 rounded-xl p-6">
              <h3 className="font-display text-lg font-bold text-brand-gold mb-2">Performance Marketers</h3>
              <p className="text-brand-white/70 text-sm leading-relaxed">
                Media buyers and funnel experts obsessed with ROAS, lead quality, and cost-per-acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-gray/20 border-t border-brand-gold/10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-brand-white mb-4">What Clients Say</h2>
            <p className="text-brand-white/60 text-sm">Real feedback from business owners who work with GDS Media.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialPlaceholder />
            <TestimonialPlaceholder />
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
