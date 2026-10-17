import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/services/seo-content")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const INCLUDED = [
  "Technical SEO audit & fixes",
  "Keyword research & content planning",
  "On-page & meta optimization",
  "Service page & blog content writing",
  "Local SEO & Google Business Profile",
  "Monthly ranking reports",
];

export default function SeoContentPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "SEO & Content", href: "/services/seo-content" },
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
          title="Rank Higher. Get Found. Get Clients."
          subtitle="Keyword-Rich Content Strategies That Build Authority & Drive Organic Traffic"
          badge="SEO & Content"
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: "SEO & Content", href: "/services/seo-content" },
          ]}
          videoSrc="/videos/about-hero.mp4" />
      </Revealable>

      <Revealable>
        <section className="py-24 px-4 max-w-4xl mx-auto">
          <p className="text-brand-ink/70 text-base leading-relaxed mb-10">
            Paid ads stop when the budget stops. SEO compounds. We build long-term organic visibility through technical SEO, content strategy, and on-page optimization — so your business ranks when your ideal customers are searching. From local SEO for clinics and shops to authority-building for service businesses, we create content that Google trusts and users click.
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

          <p className="italic text-brand-blue text-center mb-12">Be where your customers are searching.</p>

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
