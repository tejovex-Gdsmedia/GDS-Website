import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const routeConfig = getRoute("/services/ai-influencer-ugc-videos")!;
export const metadata: Metadata = buildMetadata(routeConfig);
export default function Page() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Virtual Creator Studio", href: routeConfig.path }]), serviceSchema({ name: routeConfig.title, description: routeConfig.description, url: routeConfig.path })]} />
      <PageHero title="Virtual Creator Studio: AI Influencer & UGC" subtitle="Skip expensive influencer retainers. AI-powered UGC-style videos that drive authentic engagement." badge="Studio Pillar" breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Virtual Creator", href: routeConfig.path }]} />
      <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <p className="text-brand-white/70 mb-8">Generate native user-generated content and virtual creators for your brand ads and social feeds.</p>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full">Book Strategy Call</a>
      </section>
      <CtaSection />
    </div>
  );
}
