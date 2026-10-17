import { Metadata } from "next";
import Link from "next/link";
import { getRoute } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/services")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const SERVICES_LIST = [
  {
    category: "Performance Marketing",
    title: "Every Rupee Spent, Engineered to Return More",
    href: "/services/performance-marketing",
    desc: "Meta, Google & YouTube Ads That Convert Browsers Into Buyers.",
  },
  {
    category: "AI & Automation",
    title: "Your Business on Autopilot — 24/7, Zero Missed Leads",
    href: "/services/ai-automation",
    desc: "WhatsApp Bots, CRM Workflows & Lead Nurturing on Autopilot.",
  },
  {
    category: "SEO & Content",
    title: "Rank Higher. Get Found. Get Clients.",
    href: "/services/seo-content",
    desc: "Keyword-Rich Strategies That Build Authority & Drive Organic Traffic.",
  },
  {
    category: "Brand & Creative",
    title: "Creatives That Stop the Scroll & Build Trust Instantly",
    href: "/services/brand-creative",
    desc: "Brand Identity, Social Creatives & Reels That Make People Remember You.",
  },
  {
    category: "Analytics & CRO",
    title: "Data That Drives Decisions. Funnels That Convert.",
    href: "/services/analytics-cro",
    desc: "Track Every Click & Optimize Every Conversion Point.",
  },
  {
    category: "WhatsApp & Social",
    title: "India's #1 Marketing Channel — Used the Right Way",
    href: "/services/whatsapp-social",
    desc: "Broadcast Campaigns, Drip Sequences & Community Management at Scale.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ])}
      />

      <Revealable>

        <PageHero
        title="AI Marketing Services"
        subtitle="Explore GDS Media's complete suite of AI creative studios, strategy blueprints, and automated growth engines."
        badge="Full Capability Suite"
        breadcrumbs={[{ label: "Services", href: "/services" }]}
        videoSrc="/videos/about-hero.mp4" />

      </Revealable>

      <Revealable>
        <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((srv, idx) => (
            <div
              key={srv.href}
              className="border-2 border-brand-blue/30 bg-brand-surface/30 p-8 flex flex-col justify-between hover:border-brand-blue transition-colors relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] font-black text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-2.5 py-1 border border-brand-blue/30">
                    // {srv.category}
                  </span>
                  <span className="font-mono text-xs text-brand-ink/30">SVC.{idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                </div>
                <h2 className="font-display text-2xl font-black text-brand-ink uppercase tracking-tight mt-2 mb-4">
                  {srv.title}
                </h2>
                <p className="font-mono text-brand-ink/70 text-xs sm:text-sm leading-relaxed mb-8">
                  {srv.desc}
                </p>
              </div>
              <div>
                <Link
                  href={srv.href}
                  className="font-mono text-xs font-black uppercase tracking-wider text-brand-blue hover:underline inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 border border-brand-blue/30 group-hover:bg-brand-orange group-hover:text-brand-ink transition-all"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      </Revealable>

      <CtaSection />
    </div>
  );
}
