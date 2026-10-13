import { Metadata } from "next";
import Link from "next/link";
import { getRoute } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const routeConfig = getRoute("/services")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const SERVICES_LIST = [
  {
    category: "BLUEPRINT",
    title: "Brand Blueprint",
    href: "/services/brand-strategy",
    desc: "Strategy + Brand. Define your unique positioning, messaging roadmap, and audience psychology.",
  },
  {
    category: "STUDIO",
    title: "Cinematic AI Ads",
    href: "/services/ai-ad-films",
    desc: "Hollywood-grade video ads at a fraction of traditional shoot costs.",
  },
  {
    category: "STUDIO",
    title: "AI Brand Ambassador",
    href: "/services/ai-avatars",
    desc: "A consistent AI avatar representing your brand 24/7 across every channel.",
  },
  {
    category: "STUDIO",
    title: "Micro-Drama Studio",
    href: "/services/branded-micro-dramas",
    desc: "Turn your brand story into addictive short-form micro-dramas.",
  },
  {
    category: "STUDIO",
    title: "Jingle & Sound Lab",
    href: "/services/brand-music",
    desc: "Original brand music, jingles and audio identity that stick in consumers' heads.",
  },
  {
    category: "STUDIO",
    title: "Sound & Vision Reels",
    href: "/services/music-videos",
    desc: "AI-powered music video production combining high-impact music and visuals.",
  },
  {
    category: "STUDIO",
    title: "Product Spotlight Videos",
    href: "/services/ai-product-explainer-videos",
    desc: "Clear, compelling product explainer videos that showcase your product at its best.",
  },
  {
    category: "STUDIO",
    title: "Virtual Creator Studio",
    href: "/services/ai-influencer-ugc-videos",
    desc: "AI-powered UGC-style and influencer videos without expensive influencer retainers.",
  },
  {
    category: "STUDIO",
    title: "Always-On Social",
    href: "/services/social-media-management",
    desc: "Consistent, strategy-led social media management for Indian MSMEs.",
  },
  {
    category: "GROWTH ENGINE",
    title: "Meta Ads Lab",
    href: "/services/meta-performance-marketing",
    desc: "Full-funnel Meta ad campaigns designed to turn ad spend into qualified leads.",
  },
  {
    category: "GROWTH ENGINE",
    title: "Intent Ads",
    href: "/services/google-ads",
    desc: "Google Search & Display campaigns capturing customers actively searching for your service.",
  },
  {
    category: "GROWTH ENGINE",
    title: "Instant Reply Assistant",
    href: "/services/ai-whatsapp-chat-assistant",
    desc: "24/7 AI WhatsApp chatbot that answers enquiries and qualifies leads instantly.",
  },
  {
    category: "GROWTH ENGINE",
    title: "Voice Follow-Up Agent",
    href: "/services/ai-calling-bot",
    desc: "Natural-sounding AI calling bot that follows up and qualifies every lead automatically.",
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

      <PageHero
        title="AI Marketing Services"
        subtitle="Explore GDS Media's complete suite of AI creative studios, strategy blueprints, and automated growth engines."
        badge="Full Capability Suite"
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.href}
              className="bg-brand-gray border border-brand-gold/10 hover:border-brand-gold/30 rounded-2xl p-8 flex flex-col justify-between transition-all"
            >
              <div>
                <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                  {srv.category}
                </span>
                <h2 className="font-display text-xl font-bold text-brand-white mt-2 mb-3">
                  {srv.title}
                </h2>
                <p className="text-brand-white/70 text-sm leading-relaxed mb-6">{srv.desc}</p>
              </div>
              <Link
                href={srv.href}
                className="text-sm font-semibold text-brand-gold hover:underline inline-flex items-center gap-1"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
