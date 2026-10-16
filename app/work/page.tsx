import { Metadata } from "next";
import { getRoute } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import MagazineWrapper from "@/components/work/MagazineWrapper";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/work")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const PORTFOLIO_IMAGES = [
  {
    image: {
      src: "/images/Image 1.png",
      alt: "Healthcare & Clinics AI Ad Campaign"
    },
    offsetY: 0
  },
  {
    image: {
      src: "/images/Image 2.png",
      alt: "Real Estate Development Cinematic Ad"
    },
    offsetY: 0
  },
  {
    image: {
      src: "/images/Image 3.png",
      alt: "Retail & Fashion AI Brand Ambassador"
    },
    offsetY: 0
  },
  {
    image: {
      src: "/images/Image 4.png",
      alt: "Hospitality & F&B Micro-Drama"
    },
    offsetY: 0
  },
  {
    image: {
      src: "/images/Image 5.png",
      alt: "Education & Coaching Growth Engine"
    },
    offsetY: 0
  }
];

export default function WorkPage() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Our Work", href: routeConfig.path }])]} />
      <Revealable>
        <PageHero
        title="Our Work & Case Studies"
        subtitle="Explore our interactive portfolio featuring cinematic AI ads, brand blueprints, and growth engines for Indian businesses."
        badge="Portfolio Magazine"
        breadcrumbs={[{ label: "Work", href: routeConfig.path }]}
        videoSrc="/videos/about-hero.mp4" />
      </Revealable>
      <Revealable>
        <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs font-black uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1 border border-brand-blue/35">
            // INTERACTIVE MAGAZINE ARCHIVE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-ink uppercase tracking-tighter mt-4 mb-4">
            Scroll & Tap to Inspect Creative Work
          </h2>
          <p className="font-mono text-brand-ink/60 text-sm max-w-2xl mx-auto">
            Scroll through the corridor to browse our campaign artifacts. Tap any page to focus and examine details in high definition.
          </p>
        </div>

        <div className="w-full h-[650px] border-2 border-brand-blue/40 bg-brand-bg relative shadow-2xl">
          <MagazineWrapper
            images={PORTFOLIO_IMAGES}
            background="#0a0a0a"
            pages={12}
            pageWidth={500}
            pageHeight={650}
            spacing={4}
            scrollSens={6}
          />
        </div>
      </section>
      </Revealable>
      <CtaSection />
    </div>
  );
}
