import { Metadata } from "next";
import Link from "next/link";
import { getRoute, CALENDLY_URL, WHATSAPP_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { CtaSection, ClientLogoPlaceholder, CaseStudyPlaceholder, TestimonialPlaceholder } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { faqSchema } from "@/lib/schema";

const routeConfig = getRoute("/")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const HOME_FAQS = [
  {
    question: "What is the GDS Lead-to-Sale Engine?",
    answer: "It is an end-to-end connected system that takes your business from Brand Blueprint → AI Ad Creative → Meta & Google Ads → Instant WhatsApp Reply → AI Voice Follow-Up → Closed Sales. No disconnected agencies.",
  },
  {
    question: "How do AI ad films compare to traditional shoots?",
    answer: "Cinematic AI ad films deliver Hollywood-grade visuals and storytelling at a fraction of traditional shoot costs, without crew rentals, set delays or logistics overhead.",
  },
  {
    question: "How fast can we launch our first campaign?",
    answer: "TODO: confirm with GDS Media. Typically campaigns are planned and launched within 7–10 days of completing the Brand Blueprint.",
  },
  {
    question: "Do you work with businesses outside major metros?",
    answer: "Yes, we work with MSMEs, clinics, salons, real estate, and retail businesses across India, with remote strategy and execution available nationwide.",
  },
];

export default function HomePage() {
  return (
    <div>
      <JsonLd data={faqSchema(HOME_FAQS)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-gold border border-brand-gold/30 rounded-full px-4 py-1.5 mb-6">
            AI-Powered Digital Marketing for Indian MSMEs
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-brand-white leading-tight tracking-tight mb-6">
            Make AI Marketing Work for Your <span className="text-brand-gold">Indian Business</span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            Accessible, affordable, and results-driven marketing without bloated agency timelines or studio costs. Strategy first, technology second.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-light transition-colors text-base text-center"
            >
              Book Your Free Strategy Call
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border border-brand-gold/30 text-brand-gold font-semibold rounded-full hover:bg-brand-gold/10 transition-colors text-base text-center"
            >
              Chat on WhatsApp (+91 7400168255)
            </a>
          </div>
        </div>
      </section>

      {/* Client Logos Slot */}
      <section className="py-12 border-y border-brand-gold/10 bg-brand-gray/30 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-white/40 mb-8">
            Trusted by Indian business owners across retail, healthcare, real estate & more
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ClientLogoPlaceholder label="Clinic & Healthcare" />
            <ClientLogoPlaceholder label="Real Estate Developer" />
            <ClientLogoPlaceholder label="Fashion & Retail" />
            <ClientLogoPlaceholder label="D2C Brand" />
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Our Framework
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-white mt-2 mb-4">
            The Three Pillars of GDS Media
          </h2>
          <p className="text-brand-white/60 text-base">
            Marketing shouldn&apos;t be a patchwork of disconnected agencies. We built a connected system from strategy to sales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-brand-gray border border-brand-gold/20 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">Pillar 01</span>
              <h3 className="font-display text-2xl font-bold text-brand-white mt-2 mb-4">BLUEPRINT</h3>
              <p className="text-brand-white/70 text-sm leading-relaxed mb-6">
                Strategy + Brand. We define your unique positioning, audience psychology, and messaging roadmap before spending a single rupee on ads.
              </p>
            </div>
            <Link
              href="/services/brand-strategy"
              className="text-sm font-semibold text-brand-gold hover:underline inline-flex items-center gap-1"
            >
              Explore Brand Strategy →
            </Link>
          </div>

          <div className="bg-brand-gray border border-brand-gold/20 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">Pillar 02</span>
              <h3 className="font-display text-2xl font-bold text-brand-white mt-2 mb-4">STUDIO</h3>
              <p className="text-brand-white/70 text-sm leading-relaxed mb-6">
                AI Creative + Storytelling. Cinematic ad films, AI brand ambassadors, branded micro-dramas, jingles, and product spotlights without studio budgets.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-gold hover:underline inline-flex items-center gap-1"
            >
              Explore Creative Studio →
            </Link>
          </div>

          <div className="bg-brand-gray border border-brand-gold/20 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">Pillar 03</span>
              <h3 className="font-display text-2xl font-bold text-brand-white mt-2 mb-4">GROWTH ENGINE</h3>
              <p className="text-brand-white/70 text-sm leading-relaxed mb-6">
                AI Advertising + Sales Automation. Meta & Google performance marketing paired with instant WhatsApp replies and AI voice calling follow-up.
              </p>
            </div>
            <Link
              href="/ai-sales-automation"
              className="text-sm font-semibold text-brand-gold hover:underline inline-flex items-center gap-1"
            >
              Explore Sales Autopilot →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-brand-gray/20 border-y border-brand-gold/10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-white mb-4">
              Traditional Agencies vs. The GDS Lead-to-Sale Engine
            </h2>
            <p className="text-brand-white/60 text-base">
              See why Indian MSMEs are switching from bloated traditional agencies to intelligent, connected growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-red-500/20 bg-red-950/10 rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-red-400 mb-6">Traditional Agencies</h3>
              <ul className="space-y-4 text-sm text-brand-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span> High production budgets and multi-week shoot schedules.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span> Disconnected teams (creative agency doesn&apos;t talk to the media buyer).
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span> Leads arrive, sit for hours, and go cold before anyone calls them.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span> Vanity metrics (likes & impressions) instead of closed sales.
                </li>
              </ul>
            </div>

            <div className="border border-brand-gold/30 bg-brand-gold/5 rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-brand-gold mb-6">GDS Lead-to-Sale Engine</h3>
              <ul className="space-y-4 text-sm text-brand-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold">✓</span> Cinematic AI creatives produced in days, not weeks, at a fraction of the cost.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold">✓</span> Fully connected pipeline: Brand → Ad → Lead → WhatsApp → Voice Call → Sale.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold">✓</span> Instant Reply Assistant responds to every lead on WhatsApp within seconds.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold">✓</span> AI Voice Follow-Up Agent calls leads automatically to qualify them for your team.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Work Preview */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Portfolio</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-white mt-2">
              Results & Creative Work
            </h2>
          </div>
          <Link
            href="/work"
            className="mt-4 md:mt-0 text-sm font-semibold text-brand-gold hover:underline"
          >
            View All Case Studies →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CaseStudyPlaceholder industry="Healthcare & Aesthetics" />
          <CaseStudyPlaceholder industry="Real Estate Development" />
          <CaseStudyPlaceholder industry="Retail & D2C Brand" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-gray/20 border-t border-brand-gold/10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">FAQ</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-white mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {HOME_FAQS.map((faq, i) => (
              <div key={i} className="border border-brand-gold/10 bg-brand-gray rounded-xl p-6">
                <h3 className="font-display text-lg font-bold text-brand-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-brand-white/70 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </div>
  );
}
