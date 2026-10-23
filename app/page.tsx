import { Metadata } from "next";
import Link from "next/link";
import { getRoute, CALENDLY_URL, WHATSAPP_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { CtaSection, CaseStudyPlaceholder, TestimonialPlaceholder } from "@/components/ui/shared";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { JsonLd } from "@/components/schema/JsonLd";
import { faqSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";
import NeuralHero from "@/components/NeuralHero";
import OrbitalType from "@/components/OrbitalType";

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

      {/* Hero Section — Asymmetric Editorial Brutalist */}
      <Revealable>
        <section className="relative pt-40 pb-28 px-4 overflow-hidden border-b-2 border-brand-blue/40">
          <NeuralHero />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-brand-blue bg-brand-blue/10 border-2 border-brand-blue/40 px-4 py-1.5 mb-8">
                  // AI-Powered Digital Marketing for Indian MSMEs
                </span>
                <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-brand-ink leading-[0.95] tracking-tighter uppercase mb-8">
                  Make AI Marketing Work for Your <span className="text-brand-blue underline decoration-brand-blue/50">Indian Business</span>
                </h1>
                <p className="font-mono text-lg sm:text-xl text-brand-ink/80 max-w-2xl mb-12 leading-relaxed">
                  Accessible, affordable, and results-driven marketing without bloated agency timelines or studio costs. Strategy first, technology second.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-brand-orange text-brand-ink font-mono font-black uppercase tracking-wider text-sm hover:bg-brand-orange-vivid transition-all text-center shadow-[6px_6px_0px_0px_rgba(23,43,77,0.15)] hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    Book Your Strategy Call
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border-2 border-brand-green/60 text-brand-green font-mono font-bold uppercase tracking-wider text-sm hover:bg-brand-green/10 transition-all text-center"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 h-[420px] lg:h-[480px]">
                <OrbitalType />
              </div>
            </div>
          </div>
        </section>
      </Revealable>

      {/* Client Logos */}
      <Revealable>
        <section className="py-16 border-b-2 border-brand-blue/40 bg-brand-bg px-4">
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-center text-xs font-bold uppercase tracking-widest text-brand-ink/50 mb-10">
              // Trusted by Indian business owners across retail, healthcare, real estate & more
            </p>
            <LogoMarquee />
          </div>
        </section>
      </Revealable>

      {/* Three Pillars — Asymmetric Editorial Grid */}
      <Revealable>
        <section className="py-32 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b-2 border-brand-blue/30 pb-8">
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1 border border-brand-blue/30">
                // FRAMEWORK ARCHITECTURE
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-black text-brand-ink uppercase tracking-tighter mt-4">
                The Three Pillars of GDS Media
              </h2>
            </div>
            <p className="font-mono text-brand-ink/60 text-sm max-w-md mt-4 md:mt-0">
              Marketing shouldn&apos;t be a patchwork of disconnected agencies. We built a connected system from strategy to sales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Revealable delay={0}>
              <div className="h-full border-2 border-brand-blue/40 bg-brand-surface/30 p-10 flex flex-col justify-between relative group hover:border-brand-blue hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-300 ease-out">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-black text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1 border border-brand-blue/30 transition-colors group-hover:bg-brand-blue group-hover:text-white">
                      PILLAR 01
                    </span>
                    <span className="font-mono text-xs text-brand-ink/30">BLUEPRINT</span>
                  </div>
                  <h3 className="font-display text-3xl font-black text-brand-ink uppercase mb-4 tracking-tight">
                    BLUEPRINT
                  </h3>
                  <p className="font-mono text-brand-ink/70 text-sm leading-relaxed mb-8">
                    Strategy + Brand. We define your unique positioning, audience psychology, and messaging roadmap before spending a single rupee on ads.
                  </p>
                </div>
                <div>
                  <Link
                    href="/services/brand-creative"
                    className="font-mono text-xs font-black uppercase tracking-wider text-brand-blue hover:underline inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 border border-brand-blue/30"
                  >
                    Explore Brand Strategy
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </Revealable>

            <Revealable delay={120}>
              <div className="h-full border-2 border-brand-blue/40 bg-brand-surface/30 p-10 flex flex-col justify-between relative group hover:border-brand-blue hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-300 ease-out">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-black text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1 border border-brand-blue/30 transition-colors group-hover:bg-brand-blue group-hover:text-white">
                      PILLAR 02
                    </span>
                    <span className="font-mono text-xs text-brand-ink/30">STUDIO</span>
                  </div>
                  <h3 className="font-display text-3xl font-black text-brand-ink uppercase mb-4 tracking-tight">
                    STUDIO
                  </h3>
                  <p className="font-mono text-brand-ink/70 text-sm leading-relaxed mb-8">
                    AI Creative + Storytelling. Cinematic ad films, AI brand ambassadors, branded micro-dramas, jingles, and product spotlights without studio budgets.
                  </p>
                </div>
                <div>
                  <Link
                    href="/services"
                    className="font-mono text-xs font-black uppercase tracking-wider text-brand-blue hover:underline inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 border border-brand-blue/30"
                  >
                    Explore Creative Studio
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </Revealable>

            <Revealable delay={240}>
              <div className="h-full border-2 border-brand-blue/40 bg-brand-surface/30 p-10 flex flex-col justify-between relative group hover:border-brand-blue hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-300 ease-out">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-black text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1 border border-brand-blue/30 transition-colors group-hover:bg-brand-blue group-hover:text-white">
                      PILLAR 03
                    </span>
                    <span className="font-mono text-xs text-brand-ink/30">GROWTH</span>
                  </div>
                  <h3 className="font-display text-3xl font-black text-brand-ink uppercase mb-4 tracking-tight">
                    GROWTH ENGINE
                  </h3>
                  <p className="font-mono text-brand-ink/70 text-sm leading-relaxed mb-8">
                    AI Advertising + Sales Automation. Meta & Google performance marketing paired with instant WhatsApp replies and AI voice calling follow-up.
                  </p>
                </div>
                <div>
                  <Link
                    href="/ai-sales-automation"
                    className="font-mono text-xs font-black uppercase tracking-wider text-brand-blue hover:underline inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 border border-brand-blue/30"
                  >
                    Explore Sales Autopilot
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </Revealable>
          </div>
        </section>
      </Revealable>

      {/* Comparison Section — Brutalist Table */}
      <Revealable>
        <section className="py-32 bg-brand-bg border-y-2 border-brand-blue/40 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1 border border-brand-blue/30">
                // COMPARATIVE MATRIX
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-black text-brand-ink uppercase tracking-tighter mt-4 mb-6">
                Traditional Agencies vs. The GDS Lead-to-Sale Engine
              </h2>
              <p className="font-mono text-brand-ink/60 text-base">
                See why Indian MSMEs are switching from bloated traditional agencies to intelligent, connected growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-2 border-red-500/40 bg-red-950/10 p-10">
                <h3 className="font-display text-2xl font-black text-red-400 uppercase mb-8 border-b border-red-500/30 pb-4">
                  [X] Traditional Agencies
                </h3>
                <ul className="space-y-6 font-mono text-sm text-brand-ink/80">
                  <li className="flex items-start gap-4 border-b border-red-500/10 pb-4">
                    <span className="text-red-400 font-black text-lg">✕</span>
                    <span>High production budgets and multi-week shoot schedules.</span>
                  </li>
                  <li className="flex items-start gap-4 border-b border-red-500/10 pb-4">
                    <span className="text-red-400 font-black text-lg">✕</span>
                    <span>Disconnected teams (creative agency doesn&apos;t talk to the media buyer).</span>
                  </li>
                  <li className="flex items-start gap-4 border-b border-red-500/10 pb-4">
                    <span className="text-red-400 font-black text-lg">✕</span>
                    <span>Leads arrive, sit for hours, and go cold before anyone calls them.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-red-400 font-black text-lg">✕</span>
                    <span>Vanity metrics (likes & impressions) instead of closed sales.</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-brand-blue bg-brand-blue/5 p-10">
                <h3 className="font-display text-2xl font-black text-brand-blue uppercase mb-8 border-b border-brand-blue/40 pb-4">
                  [✓] GDS Lead-to-Sale Engine
                </h3>
                <ul className="space-y-6 font-mono text-sm text-brand-ink/90">
                  <li className="flex items-start gap-4 border-b border-brand-blue/20 pb-4">
                    <span className="text-brand-blue font-black text-lg">✓</span>
                    <span>Cinematic AI creatives produced in days, not weeks, at a fraction of the cost.</span>
                  </li>
                  <li className="flex items-start gap-4 border-b border-brand-blue/20 pb-4">
                    <span className="text-brand-blue font-black text-lg">✓</span>
                    <span>Fully connected pipeline: Brand → Ad → Lead → WhatsApp → Voice Call → Sale.</span>
                  </li>
                  <li className="flex items-start gap-4 border-b border-brand-blue/20 pb-4">
                    <span className="text-brand-blue font-black text-lg">✓</span>
                    <span>Instant Reply Assistant responds to every lead on WhatsApp within seconds.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-brand-blue font-black text-lg">✓</span>
                    <span>AI Voice Follow-Up Agent calls leads automatically to qualify them for your team.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Revealable>

      {/* Case Studies / Work Preview */}
      <Revealable>
        <section className="py-32 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b-2 border-brand-blue/30 pb-8">
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1 border border-brand-blue/30">
                // PORTFOLIO ARCHIVE
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-black text-brand-ink uppercase tracking-tighter mt-4">
                Results & Creative Work
              </h2>
            </div>
            <Link
              href="/work"
              className="font-mono text-xs font-black uppercase tracking-wider text-brand-blue hover:underline mt-4 md:mt-0 bg-brand-blue/10 px-4 py-2 border border-brand-blue/30 inline-block"
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
      </Revealable>

      {/* FAQ Section */}
      <Revealable>
        <section className="py-32 bg-brand-bg border-t-2 border-brand-blue/40 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1 border border-brand-blue/30">
                // KNOWLEDGE BASE
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-black text-brand-ink uppercase tracking-tighter mt-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {HOME_FAQS.map((faq, i) => (
                <div key={i} className="border-2 border-brand-blue/30 bg-brand-surface/40 p-8 hover:border-brand-blue transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs font-black text-brand-blue bg-brand-blue/10 px-2 py-0.5 border border-brand-blue/30">
                      Q.0{i + 1}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-black text-brand-ink uppercase tracking-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="font-mono text-brand-ink/70 text-sm leading-relaxed pl-10">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Revealable>

      {/* CTA */}
      <CtaSection />
    </div>
  );
}
