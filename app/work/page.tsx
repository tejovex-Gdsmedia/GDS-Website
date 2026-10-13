import { Metadata } from "next";
import { getRoute } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection, CaseStudyPlaceholder } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const routeConfig = getRoute("/work")!;
export const metadata: Metadata = buildMetadata(routeConfig);
export default function Page() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Our Work", href: routeConfig.path }])]} />
      <PageHero title="Our Work & Case Studies" subtitle="See how GDS Media helps Indian businesses grow with cinematic AI ads, performance marketing, and sales automation." badge="Portfolio" breadcrumbs={[{ label: "Work", href: routeConfig.path }]} />
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <CaseStudyPlaceholder industry="Healthcare & Clinics" />
          <CaseStudyPlaceholder industry="Real Estate Development" />
          <CaseStudyPlaceholder industry="Retail & Fashion" />
          <CaseStudyPlaceholder industry="Hospitality & F&B" />
          <CaseStudyPlaceholder industry="Education & Coaching" />
          <CaseStudyPlaceholder industry="B2B Manufacturing" />
        </div>
      </section>
      <CtaSection />
    </div>
  );
}
