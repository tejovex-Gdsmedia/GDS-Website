import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/services/whatsapp-social")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const INCLUDED = [
  "WhatsApp broadcast campaign setup & execution",
  "Drip sequence design & automation",
  "WhatsApp API integration (AutomateChats)",
  "Instagram & Facebook page management",
  "Content calendar planning",
  "Engagement & community management",
];

export default function WhatsappSocialPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "WhatsApp & Social", href: "/services/whatsapp-social" },
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
          title="India's #1 Marketing Channel — Used the Right Way"
          subtitle="Broadcast Campaigns, Drip Sequences & Community Management at Scale"
          badge="WhatsApp & Social"
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: "WhatsApp & Social", href: "/services/whatsapp-social" },
          ]}
          videoSrc="/videos/about-hero.mp4" />
      </Revealable>

      <Revealable>
        <section className="py-24 px-4 max-w-4xl mx-auto">
          <p className="text-brand-ink/70 text-base leading-relaxed mb-10">
            WhatsApp has over 500 million users in India — and your competitors aren&rsquo;t using it properly yet. We build and manage end-to-end WhatsApp marketing systems: broadcast campaigns that get read, drip sequences that nurture leads, and community management that keeps your audience engaged. Combine it with Instagram and Facebook social management, and your brand stays top-of-mind across every platform.
          </p>

          <h2 className="font-display text-2xl font-bold text-brand-ink mb-6">What&rsquo;s Included</h2>
          <ul className="space-y-3 mb-12">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-brand-ink/70 text-base leading-relaxed">
                <span className="text-brand-blue mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="italic text-brand-blue text-center mb-12">Be in their pocket. Stay on their mind.</p>

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
