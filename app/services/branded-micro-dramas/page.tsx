import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/services/branded-micro-dramas")!;
export const metadata: Metadata = buildMetadata(routeConfig);

export default function MicroDramasPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Micro-Drama Studio", href: "/services/branded-micro-dramas" },
          ]),
          serviceSchema({ name: routeConfig.title, description: routeConfig.description, url: routeConfig.path }),
        ]}
      />
      <Revealable>
        <PageHero
        title="Micro-Drama Studio: Branded Short-Form Dramas"
        subtitle="Turn your brand story into addictive, episodic short-form drama content that Indian audiences love to watch and share."
        badge="Studio Pillar"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Micro-Drama Studio", href: "/services/branded-micro-dramas" },
        ]}
        videoSrc="/videos/about-hero.mp4" />
      </Revealable>
      <Revealable>
        <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <p className="text-brand-ink/70 text-base mb-12">
          Short-form serialised storytelling drives massive organic reach and emotional connection. Let GDS Media produce your next viral branded drama series.
        </p>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-orange text-brand-ink font-semibold rounded-full hover:bg-brand-orange-vivid transition-colors text-sm">
          Book Your Strategy Call
        </a>
      </section>
      </Revealable>
      <CtaSection />
    </div>
  );
}
