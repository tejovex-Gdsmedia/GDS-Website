import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/services/social-media-management")!;
export const metadata: Metadata = buildMetadata(routeConfig);
export default function Page() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Always-On Social", href: routeConfig.path }]), serviceSchema({ name: routeConfig.title, description: routeConfig.description, url: routeConfig.path })]} />
      <Revealable>
        <PageHero title="Always-On Social: Social Media Management" subtitle="Consistent, strategy-led social media management for Indian MSMEs across Instagram, LinkedIn, and YouTube." badge="Studio Pillar" breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Always-On Social", href: routeConfig.path }]}   videoSrc="/videos/about-hero.mp4" />
      </Revealable>
      <Revealable>
        <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <p className="text-brand-ink/70 mb-8">Keep your brand active, engaging, and top-of-mind with systematic content planning and AI execution.</p>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-orange text-brand-ink font-semibold rounded-full">Book Strategy Call</a>
      </section>
      </Revealable>
      <CtaSection />
    </div>
  );
}
