import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/services/meta-performance-marketing")!;
export const metadata: Metadata = buildMetadata(routeConfig);
export default function Page() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Meta Ads Lab", href: routeConfig.path }]), serviceSchema({ name: routeConfig.title, description: routeConfig.description, url: routeConfig.path })]} />
      <Revealable>
        <PageHero title="Meta Ads Lab: Performance Marketing" subtitle="Data-driven Meta advertising campaigns designed to turn ad spend into qualified leads and sales." badge="Growth Engine" breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Meta Ads Lab", href: routeConfig.path }]}   videoSrc="/videos/about-hero.mp4" />
      </Revealable>
      <Revealable>
        <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <p className="text-brand-ink/70 mb-8">Full-funnel Facebook and Instagram ads engineered for Indian businesses seeking predictable ROI.</p>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-orange text-brand-ink font-semibold rounded-full">Book Strategy Call</a>
      </section>
      </Revealable>
      <CtaSection />
    </div>
  );
}
