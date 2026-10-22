import { Metadata } from "next";
import { getRoute } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection, TestimonialPlaceholder } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";
import { ExpertiseCard } from "@/components/about/ExpertiseCard";

const routeConfig = getRoute("/about")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const HOME_FAQS = [
  {
    question: "What is the GDS Lead-to-Sale Engine?",
    answer: "It is an end-to-end connected system that takes your business from Brand Blueprint → AI Ad Creative → Meta & Google Ads → Instant WhatsApp Reply → AI Voice Follow-Up → Closed Sales. No disconnected agencies."
  },
  {
    question: "How do AI ad films compare to traditional shoots?",
    answer: "Cinematic AI ad films deliver Hollywood-grade visuals and storytelling at a fraction of traditional shoot costs, without crew rentals, set delays or logistics overhead."
  },
  {
    question: "How fast can we launch our first campaign?",
    answer: "TODO: confirm with GDS Media. Typically campaigns are planned and launched within 7–10 days of completing the Brand Blueprint."
  },
  {
    question: "Do you work with businesses outside major metros?",
    answer: "Yes, we work with MSMEs, clinics, salons, real estate, and retail businesses across India, with remote strategy and execution available nationwide."
  },
];

export default function AboutPage() {
  return (
    <div>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
      ])} />

      <Revealable>
        <PageHero
          title="About GDS Media"
          subtitle="We combine AI specialists, content strategists and performance marketers to help Indian businesses compete and win."
          badge="Our Mission & Team"
          breadcrumbs={[{ label: "About", href: "/about" }]}
          videoSrc="/videos/about-hero.mp4"
        />
      </Revealable>

      <Revealable>
        <section className="py-32 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-28">
            <div className="md:col-span-7">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-brand-blue bg-brand-blue/10 border-2 border-brand-blue/30 inline-block mb-6">
                // MISSION STATEMENT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-ink uppercase tracking-tight mb-6 leading-tight">
                Making AI Marketing Accessible & Affordable for Every Indian MSME
              </h2>
              <p className="font-mono text-brand-ink/70 text-sm sm:text-base leading-relaxed mb-6">
                Traditional advertising agencies are built for large enterprises with multi-crore budgets and months of production time. For most Indian business owners — in healthcare, real estate, retail, or hospitality — that model simply doesn't work.
              </p>
              <p className="font-mono text-brand-ink/70 text-sm sm:text-base leading-relaxed">
                GDS Media was founded to bridge this gap. By combining cutting-edge AI creative tools with rigorous marketing strategy and automated sales funnels, we deliver premium agency results at a fraction of traditional shoot costs.
              </p>
            </div>
            <div className="md:col-span-5 border-2 border-brand-blue/40 bg-brand-surface/40 p-8 sm:p-10">
              <h3 className="font-display text-xl font-black text-brand-blue uppercase tracking-wider mb-6 border-b border-brand-blue/30 pb-3">
                // Core Principles
              </h3>
              <ul className="space-y-6 font-mono text-xs sm:text-sm text-brand-ink/90">
                <li className="flex items-start gap-4 border-b border-brand-ink/10 pb-4">
                  <span className="text-brand-blue font-black text-base">1.</span>
                  <span>Strategy before AI: Technology without positioning is just expensive noise.</span>
                </li>
                <li className="flex items-start gap-4 border-b border-brand-ink/10 pb-4">
                  <span className="text-brand-blue font-black text-base">2.</span>
                  <span>Sales don't stop at the lead: Instant WhatsApp replies and voice follow-ups close the gap.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-blue font-black text-base">3.</span>
                  <span>Radical transparency: No vanity metrics, no hidden fees, clear accountability.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Revealable>

      <Revealable>
        <section className="border-t-2 border-brand-blue/40 pt-28">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1 border border-brand-blue/30">
              // MULTIDISCIPLINARY EXPERTISE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-ink uppercase tracking-tighter mt-4 mb-4">
              The GDS Expertise
            </h2>
            <p className="font-mono text-brand-ink/60 text-base">
              Our multidisciplinary team brings together deep expertise across three critical domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExpertiseCard
              title="AI Specialists"
              description="Prompt engineers, generative video creators, and automation architects building bespoke workflows for your brand."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
                  <rect x="7" y="7" width="10" height="10" rx="1.5" />
                  <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
                  <path
                    strokeLinecap="round"
                    d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2"
                  />
                </svg>
              }
            />
            <ExpertiseCard
              title="Content Strategists"
              description="Experienced copywriters and storytellers who understand Indian consumer psychology and regional nuances."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
                  <path strokeLinecap="round" d="M12 20h9" />
                  <path strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              }
            />
            <ExpertiseCard
              title="Performance Marketers"
              description="Media buyers and funnel experts obsessed with ROAS, lead quality, and cost-per-acquisition."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 15l4-4 3 3 5-6" />
                </svg>
              }
            />
          </div>
        </section>
      </Revealable>

      <Revealable>
        <section className="py-32 bg-brand-bg border-t-2 border-brand-blue/40 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1 border border-brand-blue/30">
                // SOCIAL PROOF
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-ink uppercase tracking-tighter mt-4 mb-4">
                What Clients Say
              </h2>
              <p className="font-mono text-brand-ink/60 text-sm">Real feedback from business owners who work with GDS Media.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TestimonialPlaceholder />
              <TestimonialPlaceholder />
            </div>
          </div>
        </section>
      </Revealable>

      <CtaSection />
    </div>
  );
}