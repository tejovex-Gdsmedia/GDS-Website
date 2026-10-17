import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/services/performance-marketing")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const INCLUDED = [
  "Meta Ads (Facebook & Instagram) — Lead gen & sales campaigns",
  "Google Search, Display & Performance Max",
  "YouTube Video Ads",
  "Funnel building & landing page strategy",
  "A/B testing & creative iterations",
  "Weekly performance reports with insights",
];

export default function PerformanceMarketingPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Performance Marketing", href: "/services/performance-marketing" },
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
          title="Every Rupee Spent, Engineered to Return More"
          subtitle="Meta, Google & YouTube Ads That Convert Browsers Into Buyers"
          badge="Performance Marketing"
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: "Performance Marketing", href: "/services/performance-marketing" },
          ]}
          videoSrc="/videos/about-hero.mp4" />
      </Revealable>

      <Revealable>
        <section className="py-24 px-4 max-w-4xl mx-auto">
          <p className="text-brand-ink/70 text-base leading-relaxed mb-10">
            We don&rsquo;t just run ads — we build revenue machines. From audience research and creative strategy to funnel architecture and ROAS optimization, every campaign is built around one goal: profitable growth. Whether you&rsquo;re scaling an eCommerce brand or generating leads for a service business, we engineer your ad spend for maximum returns.
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

          <p className="italic text-brand-blue text-center mb-12">Stop boosting. Start converting.</p>

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
