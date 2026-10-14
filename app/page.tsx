"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { BentoGrid, BentoCard, BentoFeature, BentoStat, BentoImage } from "@/components/bento";

const XylophoneHelix = dynamic(
  () => import("@/components/originkit/ui/xylophone-helix-04"),
  { ssr: false }
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-brand-black/5 border-b border-brand-gold/20 shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <a href="/" className="text-xl font-bold text-brand-white">
                  GDS Media
                </a>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-brand-white hover:text-brand-gold transition">Home</Link>
                <Link href="/about" className="text-brand-white hover:text-brand-gold transition">About</Link>
                <Link href="/services" className="text-brand-white hover:text-brand-gold transition">Services</Link>
                <Link href="/work" className="text-brand-white hover:text-brand-gold transition">Portfolio</Link>
                <Link href="/faq" className="text-brand-white hover:text-brand-gold transition">FAQ</Link>
                <Link href="/contact" className="text-brand-white hover:text-brand-gold transition">Contact</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://calendly.com/gdstejovex/ai-powered-marketing"
                 className="text-brand-gold font-semibold hover:text-brand-gold/80 transition-colors px-6 py-2 rounded-full bg-brand-gold/20 backdrop-blur-sm hidden sm:inline-block">
                Book Strategy Call
              </a>
              <a href="https://wa.me/917400168255"
                 className="text-brand-gold border border-brand-gold/30 hover:bg-brand-gold/10 transition-colors px-6 py-2 rounded-full bg-brand-black/40 backdrop-blur-sm">
                WhatsApp +91 7400168255
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Bento Composition */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-gold border border-brand-gold/30 rounded-full px-4 py-1.5 mb-6 bg-brand-black/60 backdrop-blur-sm">
                AI-Powered Digital Marketing for Indian MSMEs
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-white tracking-tight mb-6">
                AI-Powered Digital Marketing for Indian MSMEs
              </h1>
              <p className="text-brand-white/80 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
                Accessible, affordable, and results-driven marketing without bloated agency timelines or studio costs. Strategy first, technology second.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://calendly.com/gdstejovex/ai-powered-marketing"
                   className="px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold/80 transition-colors shadow-lg shadow-brand-gold/25 text-center">
                  Book Your Free Strategy Call
                </a>
                <a href="https://wa.me/917400168255"
                   className="px-8 py-4 border border-brand-gold/30 text-brand-gold font-semibold rounded-full hover:bg-brand-gold/10 transition-colors bg-brand-black/40 backdrop-blur-sm text-center">
                  Chat on WhatsApp +91 7400168255
                </a>
              </div>
            </div>
            <div className="flex-1 w-full">
              <BentoCard
                title="Premium AI Marketing"
                subtitle="Strategy + Creative + Sales Funnels"
                className="bg-brand-gray border border-brand-gold/30 rounded-2xl p-8 shadow-sm"
              >
                <BentoFeature
                  icon="📊"
                  title="Data-Driven Results"
                  description="Track ROI in real-time with AI analytics"
                />
                <BentoFeature
                  icon="🚀"
                  title="Rapid Launch"
                  description="AI-powered campaign creation in days, not weeks"
                />
                <BentoFeature
                  icon="💡"
                  title="Smart Automation"
                  description="AI-powered lead qualification and follow-up"
                />
              </BentoCard>
            </div>
          </div>

          {/* Background 3D Component */}
          <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
            <XylophoneHelix
              background="#0A0A0A"
              baseColor="#D4AF37"
              bars={60}
              speed={25}
              scale={180}
              metal={{ polish: 100, reflect: 100 }}
              hover={{ glow: 50, tint: 50, colors: ["#FFF9F9", "#D4AF37", "#F3E5AB"], strength: 150 }}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Client Logos Section - Bento Grid */}
      <section className="py-24 bg-brand-gray/25 border-y border-brand-gold/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl text-brand-white mb-4">Trusted by Indian Business Owners</h2>
            <p className="text-brand-white/60 text-base md:text-lg max-w-3xl mx-auto">
              Professional marketing solutions for Indian MSMEs across retail, healthcare, real estate, fashion and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BentoCard
              title="Healthcare & Aesthetics"
              className="bg-brand-gray border border-brand-gold/20 rounded-2xl p-6"
            >
              <div className="w-full h-40 bg-brand-black/40 rounded-lg mb-4 flex items-center justify-center border border-brand-gold/10">
                <span className="text-brand-gold/60 text-sm font-semibold uppercase tracking-wider">Clinic & Healthcare Slot</span>
              </div>
              <BentoFeature
                title="AI-Powered Marketing"
                description="Targeted campaigns for clinics and aesthetic practices across India."
              />
            </BentoCard>

            <BentoCard
              title="Real Estate Development"
              className="bg-brand-gray border border-brand-gold/20 rounded-2xl p-6"
            >
              <div className="w-full h-40 bg-brand-black/40 rounded-lg mb-4 flex items-center justify-center border border-brand-gold/10">
                <span className="text-brand-gold/60 text-sm font-semibold uppercase tracking-wider">Real Estate Slot</span>
              </div>
              <BentoFeature
                title="AI-Generated Listings"
                description="Showcase properties with high-converting AI-enhanced visual assets."
              />
            </BentoCard>

            <BentoCard
              title="Fashion & Retail"
              className="bg-brand-gray border border-brand-gold/20 rounded-2xl p-6"
            >
              <div className="w-full h-40 bg-brand-black/40 rounded-lg mb-4 flex items-center justify-center border border-brand-gold/10">
                <span className="text-brand-gold/60 text-sm font-semibold uppercase tracking-wider">Fashion & Retail Slot</span>
              </div>
              <BentoFeature
                title="AI Style Recommendations"
                description="Personalized engagement and product storytelling for D2C brands."
              />
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Our Framework</span>
            <h2 className="font-display text-3xl sm:text-4xl text-brand-white mt-2 mb-4">The Three Pillars of GDS Media</h2>
            <p className="text-brand-white/60 text-base md:text-lg max-w-3xl mx-auto">
              From strategy to sales, our connected system delivers premium results without the bloated timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BentoCard
              title="Pillar 01"
              subtitle="BLUEPRINT (Strategy + Brand)"
              className="bg-brand-gray border border-brand-gold/20 rounded-2xl p-8"
            >
              <BentoFeature
                icon="🎯"
                title="Audience Analysis"
                description="Deep profiling of Indian MSME consumer psychology and triggers."
              />
              <BentoFeature
                icon="📝"
                title="Messaging Roadmap"
                description="Crystal-clear positioning and high-converting hook libraries."
              />
            </BentoCard>

            <BentoCard
              title="Pillar 02"
              subtitle="STUDIO (AI Creative + Storytelling)"
              className="bg-brand-gray border border-brand-gold/20 rounded-2xl p-8"
            >
              <BentoFeature
                icon="🎬"
                title="Cinematic AI Ads"
                description="Hollywood-grade video ads at a fraction of traditional shoot costs."
              />
              <BentoFeature
                icon="🤖"
                title="AI Brand Ambassadors"
                description="24/7 AI spokespersons representing your brand seamlessly."
              />
            </BentoCard>

            <BentoCard
              title="Pillar 03"
              subtitle="GROWTH ENGINE (Ads + Automation)"
              className="bg-brand-gray border border-brand-gold/20 rounded-2xl p-8"
            >
              <BentoFeature
                icon="💬"
                title="Instant WhatsApp Replies"
                description="AI chat assistant responds and qualifies leads within seconds."
              />
              <BentoFeature
                icon="📞"
                title="AI Voice Follow-Up"
                description="Natural-sounding AI calling bot qualifies leads automatically."
              />
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-brand-gray/20 border-y border-brand-gold/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl text-brand-white mb-4">
              Traditional Agencies vs. GDS Lead-to-Sale Engine
            </h2>
            <p className="text-brand-white/60 text-base md:text-lg max-w-3xl mx-auto">
              See why Indian MSMEs are switching from fragmented agencies to intelligent growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-red-500/20 bg-red-950/10 rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-red-400 mb-6">Traditional Agencies</h3>
              <ul className="space-y-4 text-sm text-brand-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span> High production costs and multi-week shoot timelines.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span> Disconnected creative and media buying teams.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span> Leads sit for hours and go cold before anyone calls.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span> Vanity metrics instead of closed sales.
                </li>
              </ul>
            </div>

            <div className="border border-brand-gold/30 bg-brand-gold/5 rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-brand-gold mb-6">GDS Lead-to-Sale Engine</h3>
              <ul className="space-y-4 text-sm text-brand-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold">✓</span> Cinematic AI creatives produced in days at fraction cost.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold">✓</span> Fully connected pipeline: Brand → Ad → Lead → WhatsApp → Sale.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold">✓</span> Instant WhatsApp Assistant responds within seconds.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold">✓</span> AI Voice Follow-Up qualifies leads automatically.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Proven Impact</span>
            <h2 className="font-display text-3xl sm:text-4xl text-brand-white mt-2 mb-4">Results That Matter</h2>
            <p className="text-brand-white/60 text-base md:text-lg max-w-3xl mx-auto">
              Measurable revenue growth and lead quality for Indian businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <BentoStat value="10+" label="Years Expertise" />
            <BentoStat value="500+" label="Campaigns Launched" />
            <BentoStat value="98%" label="Client Retention Rate" />
            <BentoStat value="3.5x" label="Average ROAS Growth" />
          </div>
        </div>
      </section>

      {/* Portfolio / Case Studies Section */}
      <section className="py-24 bg-brand-gray/20 border-t border-brand-gold/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Portfolio</span>
              <h2 className="font-display text-3xl sm:text-4xl text-brand-white mt-2">
                Featured Case Studies
              </h2>
            </div>
            <Link href="/work" className="mt-4 md:mt-0 text-sm font-semibold text-brand-gold hover:underline">
              View All Case Studies →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BentoCard title="Healthcare & Aesthetics" className="bg-brand-gray border border-brand-gold/20 rounded-2xl p-8">
              <div className="w-full h-36 bg-brand-black/50 rounded-lg mb-4 flex items-center justify-center border border-brand-gold/10">
                <span className="text-brand-gold/60 text-xs uppercase tracking-wider">Aesthetic Clinic Growth</span>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-white mb-2">3.4x Patient Appointments</h3>
              <p className="text-brand-white/70 text-sm">
                Complete AI video creative overhaul paired with instant WhatsApp booking automation for a multi-branch clinic.
              </p>
            </BentoCard>

            <BentoCard title="Real Estate Development" className="bg-brand-gray border border-brand-gold/20 rounded-2xl p-8">
              <div className="w-full h-36 bg-brand-black/50 rounded-lg mb-4 flex items-center justify-center border border-brand-gold/10">
                <span className="text-brand-gold/60 text-xs uppercase tracking-wider">Luxury Residential</span>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-white mb-2">₹12Cr+ Property Bookings</h3>
              <p className="text-brand-white/70 text-sm">
                Cinematic AI walkthroughs and voice agent pre-qualification generated qualified site visits in record time.
              </p>
            </BentoCard>

            <BentoCard title="Retail & D2C Brand" className="bg-brand-gray border border-brand-gold/20 rounded-2xl p-8">
              <div className="w-full h-36 bg-brand-black/50 rounded-lg mb-4 flex items-center justify-center border border-brand-gold/10">
                <span className="text-brand-gold/60 text-xs uppercase tracking-wider">D2C Fashion Label</span>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-white mb-2">5x ROAS on Meta Ads</h3>
              <p className="text-brand-white/70 text-sm">
                Replaced traditional studio shoots with AI virtual creator UGC videos, scaling ad spend profitably across India.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-brand-black to-brand-gray border-t border-brand-gold/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-gold border border-brand-gold/30 rounded-full px-4 py-1.5 mb-6 bg-brand-black/60">
            Take The Next Step
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-brand-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Book a free 30-minute strategy call with our team. We&apos;ll analyze your current marketing and map out a custom AI growth engine for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://calendly.com/gdstejovex/ai-powered-marketing"
               target="_blank"
               rel="noopener noreferrer"
               className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-light transition-colors text-base text-center shadow-lg shadow-brand-gold/20">
              Book Your Free Strategy Call
            </a>
            <a href="https://wa.me/917400168255"
               target="_blank"
               rel="noopener noreferrer"
               className="w-full sm:w-auto px-8 py-4 border border-brand-gold/30 text-brand-gold font-semibold rounded-full hover:bg-brand-gold/10 transition-colors text-base text-center bg-brand-black/40 backdrop-blur-sm">
              Chat on WhatsApp (+91 7400168255)
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand-black border-t border-brand-gold/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <span className="text-xl font-bold text-brand-white mb-4 block">GDS Media</span>
              <p className="text-brand-white/60 text-sm leading-relaxed mb-4">
                AI-powered digital marketing and lead-to-sale engines for Indian MSMEs.
              </p>
              <p className="text-brand-white/60 text-xs">
                Mon–Sat, 11AM–8PM IST
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-brand-white/70">
                <li><Link href="/" className="hover:text-brand-gold transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-brand-gold transition">About</Link></li>
                <li><Link href="/services" className="hover:text-brand-gold transition">Services</Link></li>
                <li><Link href="/work" className="hover:text-brand-gold transition">Portfolio</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-brand-white/70">
                <li><Link href="/services/brand-strategy" className="hover:text-brand-gold transition">Brand Blueprint</Link></li>
                <li><Link href="/services/ai-ad-films" className="hover:text-brand-gold transition">Cinematic AI Ads</Link></li>
                <li><Link href="/ai-sales-automation" className="hover:text-brand-gold transition">Lead-to-Sale Autopilot</Link></li>
                <li><Link href="/services/ai-whatsapp-chat-assistant" className="hover:text-brand-gold transition">WhatsApp Assistant</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-4">Contact</h4>
              <p className="text-sm text-brand-white/70 mb-2">
                Phone / WhatsApp:<br />
                <a href="https://wa.me/917400168255" className="text-brand-gold hover:underline">+91 7400168255</a>
              </p>
              <p className="text-sm text-brand-white/70">
                Email:<br />
                <a href="mailto:yogeshgdsmedia@gmail.com" className="text-brand-gold hover:underline">yogeshgdsmedia@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="border-t border-brand-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-white/50">
            <p>© {new Date().getFullYear()} GDS Media. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="/privacy-policy" className="hover:text-brand-gold transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-brand-gold transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
