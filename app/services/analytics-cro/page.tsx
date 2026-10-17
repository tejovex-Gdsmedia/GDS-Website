import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/services/analytics-cro")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const INCLUDED = [
  "GA4 & Meta Pixel setup & audit",
  "Conversion tracking & goal configuration",
  "Funnel mapping & drop-off analysis",
  "Landing page CRO (copy, layout, CTAs)",
  "Ad performance dashboards",
  "Monthly data reviews & action plans",
];

export default function AnalyticsCroPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Analytics & CRO", href: "/services/analytics-cro" },
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
          title="Data That Drives Decisions. Funnels That Convert."
          subtitle="We Track Every Click & Optimize Every Point Where Customers Drop Off"
          badge="Analytics & CRO"
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: "Analytics & CRO", href: "/services/analytics-cro" },
          ]}
          videoSrc="/videos/about-hero.mp4" />
      </Revealable>

      <Revealable>
        <section className="py-24 px-4 max-w-4xl mx-auto">
          <p className="text-brand-ink/70 text-base leading-relaxed mb-10">
            Most businesses are losing money at invisible points in their funnel — they just don&rsquo;t know where. We install the tracking, read the data, and fix the leaks. From Meta Pixel setup and Google Analytics 4 to conversion rate optimization and heatmap analysis, we turn your numbers into a clear roadmap for growth.
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

          <p className="italic text-brand-blue text-center mb-12">Better data. Better decisions. Better results.</p>

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
