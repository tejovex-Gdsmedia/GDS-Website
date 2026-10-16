import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/services/brand-music")!;
export const metadata: Metadata = buildMetadata(routeConfig);
export default function Page() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Jingle & Sound Lab", href: routeConfig.path }]), serviceSchema({ name: routeConfig.title, description: routeConfig.description, url: routeConfig.path })]} />
      <Revealable>
        <PageHero title="Jingle & Sound Lab: Brand Music Production" subtitle="Original brand music, jingles and audio identity that stick in consumers' heads." badge="Studio Pillar" breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Jingle Lab", href: routeConfig.path }]}   videoSrc="/videos/about-hero.mp4" />
      </Revealable>
      <Revealable>
        <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <p className="text-brand-ink/70 mb-8">Sound is half the cinematic experience. Our sound lab creates custom audio branding and memorable jingles for Indian brands.</p>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-orange text-brand-ink font-semibold rounded-full">Book Strategy Call</a>
      </section>
      </Revealable>
      <CtaSection />
    </div>
  );
}
