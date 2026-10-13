import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const routeConfig = getRoute("/services/ai-product-explainer-videos")!;
export const metadata: Metadata = buildMetadata(routeConfig);
export default function Page() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Product Spotlight", href: routeConfig.path }]), serviceSchema({ name: routeConfig.title, description: routeConfig.description, url: routeConfig.path })]} />
      <PageHero title="Product Spotlight: AI Explainer Videos" subtitle="Clear, compelling product explainer videos that showcase your product at its absolute best." badge="Studio Pillar" breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Product Spotlight", href: routeConfig.path }]} />
      <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <p className="text-brand-white/70 mb-8">Showcase features, benefits, and use cases with stunning 3D and AI-generated product videos.</p>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full">Book Strategy Call</a>
      </section>
      <CtaSection />
    </div>
  );
}
