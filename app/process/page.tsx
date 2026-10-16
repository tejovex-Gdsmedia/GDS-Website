import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import CardsRotateSlider from "@/components/ui/cards-rotate-slider";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/process")!;
export const metadata: Metadata = buildMetadata(routeConfig);

// TODO: replace with real GDS Media photography/footage for each step
const PROCESS_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=70&auto=format&fit=crop",
    text: "01 · Discuss",
    detail: "A 30-minute discovery call to understand your business, goals, and current bottlenecks.",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=70&auto=format&fit=crop",
    text: "02 · Strategise",
    detail: "We build your custom Brand Blueprint, audience profiling, and campaign roadmap.",
  },
  {
    src: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&q=70&auto=format&fit=crop",
    text: "03 · Create",
    detail: "Our studio produces cinematic AI ad films, avatars, and high-converting creatives.",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=70&auto=format&fit=crop",
    text: "04 · Reach",
    detail: "We launch targeted Meta and Google performance ad campaigns across India.",
  },
  {
    src: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&q=70&auto=format&fit=crop",
    text: "05 · Engage",
    detail: "Instant WhatsApp replies and AI voice calling follow up with every lead automatically.",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=70&auto=format&fit=crop",
    text: "06 · Grow",
    detail: "Continuous optimisation, higher ROAS, and predictable closed sales for your business.",
  },
];

export default function Page() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Process", href: routeConfig.path }])]} />
      <Revealable>
        <PageHero title="Our 6-Step Growth Process" subtitle="From initial discovery to predictable growth, here is exactly how GDS Media works with your business." badge="How We Work" breadcrumbs={[{ label: "Process", href: routeConfig.path }]}   videoSrc="/videos/about-hero.mp4" />
      </Revealable>

      {/* Click any card to reveal that step's detail behind it. */}
      <CardsRotateSlider images={PROCESS_SLIDES} rotationAmount={1} verticalDrift={1} perspective={1200} textColor="#ffffff" />

      <Revealable>
        <section className="py-20 px-4 max-w-5xl mx-auto text-center">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-orange text-brand-ink font-semibold rounded-full">Book Your Strategy Call</a>
        </section>
      </Revealable>
      <CtaSection />
    </div>
  );
}
