import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/services/music-videos")!;
export const metadata: Metadata = buildMetadata(routeConfig);
export default function Page() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Sound & Vision Reels", href: routeConfig.path }]), serviceSchema({ name: routeConfig.title, description: routeConfig.description, url: routeConfig.path })]} />
      <Revealable>
        <PageHero title="Sound & Vision Reels: AI Music Video Production" subtitle="High-impact AI-powered music videos for brands and artists across India." badge="Studio Pillar" breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Music Videos", href: routeConfig.path }]}   videoSrc="/videos/about-hero.mp4" />
      </Revealable>
      <Revealable>
        <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <p className="text-brand-ink/70 mb-8">Combine captivating music with cutting-edge visual storytelling.</p>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-orange text-brand-ink font-semibold rounded-full">Book Strategy Call</a>
      </section>
      </Revealable>
      <CtaSection />
    </div>
  );
}
