import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/services/ai-automation")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const INCLUDED = [
  "WhatsApp AI chatbots (AutomateChats / n8n)",
  "CRM integration & lead sync automation",
  "Automated follow-up sequences",
  "AI-powered lead qualification",
  "Appointment booking workflows",
  "Custom n8n / Pabbly automation builds",
];

export default function AiAutomationPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "AI & Automation", href: "/services/ai-automation" },
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
          title="Your Business on Autopilot — 24/7, Zero Missed Leads"
          subtitle="WhatsApp Bots, CRM Workflows & Lead Nurturing Without Lifting a Finger"
          badge="AI & Automation"
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: "AI & Automation", href: "/services/ai-automation" },
          ]}
          videoSrc="/videos/about-hero.mp4" />
      </Revealable>

      <Revealable>
        <section className="py-24 px-4 max-w-4xl mx-auto">
          <p className="text-brand-ink/70 text-base leading-relaxed mb-10">
            Manual follow-ups kill deals. We automate your entire sales and support pipeline — from the moment a lead lands to the moment they pay. Our AI systems handle lead qualification, appointment booking, WhatsApp drip sequences, CRM updates, and more. You focus on closing; we handle everything else.
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

          <p className="italic text-brand-blue text-center mb-12">Work less. Convert more. Scale faster.</p>

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
