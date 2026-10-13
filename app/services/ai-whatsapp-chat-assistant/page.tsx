import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const routeConfig = getRoute("/services/ai-whatsapp-chat-assistant")!;
export const metadata: Metadata = buildMetadata(routeConfig);
export default function Page() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Instant Reply Assistant", href: routeConfig.path }]), serviceSchema({ name: routeConfig.title, description: routeConfig.description, url: routeConfig.path })]} />
      <PageHero title="Instant Reply Assistant: AI WhatsApp Chatbot" subtitle="Never lose a lead to slow replies. 24/7 instant WhatsApp engagement and lead qualification." badge="Growth Engine" breadcrumbs={[{ label: "Services", href: "/services" }, { label: "WhatsApp Assistant", href: routeConfig.path }]} />
      <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <p className="text-brand-white/70 mb-8">When a lead clicks your ad, our AI WhatsApp assistant engages them within 3 seconds, answers questions, and books appointments.</p>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full">Book Strategy Call</a>
      </section>
      <CtaSection />
    </div>
  );
}
