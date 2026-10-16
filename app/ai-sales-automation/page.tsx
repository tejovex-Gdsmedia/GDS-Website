import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/ai-sales-automation")!;
export const metadata: Metadata = buildMetadata(routeConfig);
export default function Page() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Lead-to-Sale Autopilot", href: routeConfig.path }]), serviceSchema({ name: routeConfig.title, description: routeConfig.description, url: routeConfig.path })]} />
      <Revealable>
        <PageHero title="Lead-to-Sale Autopilot: AI Sales Automation" subtitle="Connect your ads directly to sales with GDS Media's Lead-to-Sale Engine — instant WhatsApp replies, voice follow-ups, and automated qualification." badge="Growth Engine" breadcrumbs={[{ label: "Lead-to-Sale Autopilot", href: routeConfig.path }]}   videoSrc="/videos/about-hero.mp4" />
      </Revealable>
      <Revealable>
        <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-brand-ink mb-6">The Complete Flow</h2>
        <div className="space-y-6 text-brand-ink/80">
          <div className="bg-brand-surface border border-brand-blue/10 p-6 rounded-xl">
            <h3 className="font-bold text-brand-blue mb-2">1. Lead Generation</h3>
            <p className="text-sm text-brand-ink/70">Targeted Meta & Google ads bring high-intent prospects to your business.</p>
          </div>
          <div className="bg-brand-surface border border-brand-blue/10 p-6 rounded-xl">
            <h3 className="font-bold text-brand-blue mb-2">2. Instant Reply Assistant (WhatsApp)</h3>
            <p className="text-sm text-brand-ink/70">Within 3 seconds, our AI WhatsApp bot greets the lead, answers questions, and shares pricing or brochures.</p>
          </div>
          <div className="bg-brand-surface border border-brand-blue/10 p-6 rounded-xl">
            <h3 className="font-bold text-brand-blue mb-2">3. Voice Follow-Up Agent</h3>
            <p className="text-sm text-brand-ink/70">If a lead doesn&apos;t reply on WhatsApp, our AI voice calling bot follows up naturally to confirm interest and book calls.</p>
          </div>
          <div className="bg-brand-surface border border-brand-blue/10 p-6 rounded-xl">
            <h3 className="font-bold text-brand-blue mb-2">4. Closed Sales</h3>
            <p className="text-sm text-brand-ink/70">Qualified, warm prospects are handed over to your sales team or booked straight into Calendly.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-orange text-brand-ink font-semibold rounded-full">Book Strategy Call</a>
        </div>
      </section>
      </Revealable>
      <CtaSection />
    </div>
  );
}
