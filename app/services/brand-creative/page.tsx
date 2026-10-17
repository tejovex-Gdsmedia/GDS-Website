import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/services/brand-creative")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const INCLUDED = [
  "Brand identity & logo design",
  "Social media creatives (static + carousel)",
  "UGC-style & AI video ads",
  "Reels & short-form video editing",
  "Ad creative strategy",
  "Brand guideline documentation",
];

export default function BrandCreativePage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Brand & Creative", href: "/services/brand-creative" },
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
          title="Creatives That Stop the Scroll & Build Trust Instantly"
          subtitle="Brand Identity, Social Creatives & Reels That Make People Remember You"
          badge="Brand & Creative"
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: "Brand & Creative", href: "/services/brand-creative" },
          ]}
          videoSrc="/videos/about-hero.mp4" />
      </Revealable>

      <Revealable>
        <section className="py-24 px-4 max-w-4xl mx-auto">
          <p className="text-brand-ink/70 text-base leading-relaxed mb-10">
            In a crowded feed, attention is currency. We craft visual identities and content that make your brand impossible to ignore — from logo and brand kits to scroll-stopping reels and ad creatives. Whether you&rsquo;re launching a brand or refreshing one, we bring the strategy, design, and storytelling that turns viewers into fans and fans into customers.
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

          <p className="italic text-brand-blue text-center mb-12">Look like a brand people trust before they even click.</p>

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
