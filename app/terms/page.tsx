import { Metadata } from "next";
import { getRoute, BRAND_NAME, SITE_URL, EMAIL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const routeConfig = getRoute("/terms")!;
export const metadata: Metadata = buildMetadata(routeConfig);

export default function Page() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Terms of Service", href: routeConfig.path }])]} />
      <PageHero title="Terms of Service" subtitle={`Terms governing the use of ${SITE_URL} and services provided by ${BRAND_NAME}.`} badge="Legal" breadcrumbs={[{ label: "Terms", href: routeConfig.path }]} />
      <section className="py-24 px-4 max-w-3xl mx-auto prose prose-invert text-brand-white/80 leading-relaxed space-y-6">
        <p>Last updated: October 2026</p>
        <h2 className="text-xl font-bold text-brand-gold">1. Acceptance of Terms</h2>
        <p>By accessing gdsmedia.in, you agree to be bound by these terms of service and all applicable Indian laws and regulations.</p>
        <h2 className="text-xl font-bold text-brand-gold">2. Services</h2>
        <p>{BRAND_NAME} provides AI-powered digital marketing services, brand strategy, ad management, and sales automation for businesses.</p>
        <h2 className="text-xl font-bold text-brand-gold">3. Contact</h2>
        <p>For inquiries regarding these terms, contact <a href={`mailto:${EMAIL}`} className="text-brand-gold hover:underline">{EMAIL}</a>.</p>
      </section>
    </div>
  );
}
