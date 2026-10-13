// Single source of truth for all site routes and their SEO metadata.
// Used by: sitemap.ts, metadata helpers, nav components.

export const SITE_URL = "https://www.gdsmedia.in";
export const BRAND_NAME = "GDS Media";
export const PHONE = "7400168255";
export const WHATSAPP_URL = `https://wa.me/91${PHONE}`;
export const EMAIL = "yogeshgdsmedia@gmail.com";
export const CALENDLY_URL = "https://calendly.com/gdstejovex/ai-powered-marketing";
export const BUSINESS_HOURS = "Mo-Sa 11:00-20:00";

export interface RouteConfig {
  path: string;
  title: string;
  description: string;
  keyword: string;
  changeFreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
  noIndex?: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    title: "GDS Media — AI Marketing Agency for Indian Businesses",
    description:
      "GDS Media helps Indian businesses grow with AI-powered ads, videos, WhatsApp automation, and performance marketing. Book a free strategy call.",
    keyword: "AI marketing agency India",
    changeFreq: "weekly",
    priority: 1.0,
  },
  {
    path: "/about",
    title: "About GDS Media — AI-Powered Marketing for MSMEs",
    description:
      "Meet the GDS Media team — AI specialists, content strategists and performance marketers helping Indian businesses compete with premium marketing.",
    keyword: "AI digital marketing team India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services",
    title: "AI Marketing Services for Indian Businesses — GDS Media",
    description:
      "Explore GDS Media's full suite: AI ad films, brand strategy, Meta & Google ads, WhatsApp automation, and AI calling bots for Indian MSMEs.",
    keyword: "AI marketing services India",
    changeFreq: "weekly",
    priority: 0.9,
  },
  {
    path: "/services/brand-strategy",
    title: "Brand Blueprint: Brand Strategy for Indian Businesses",
    description:
      "GDS Media's Brand Blueprint builds your brand identity, messaging and positioning — so every ad and campaign starts with a solid strategy.",
    keyword: "brand strategy for small business India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/ai-ad-films",
    title: "Cinematic AI Ads: AI Ad Film Production for Indian Brands",
    description:
      "Get cinematic-quality AI ad films at a fraction of traditional shoot costs. GDS Media produces AI-powered video ads for Indian businesses.",
    keyword: "AI ad film production India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/ai-avatars",
    title: "AI Brand Ambassador: AI Avatar Videos for Indian Brands",
    description:
      "Create a consistent AI brand ambassador for your business. GDS Media builds AI avatar videos that represent your brand 24/7 across every channel.",
    keyword: "AI avatar for business India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/branded-micro-dramas",
    title: "Micro-Drama Studio: Branded Short-Form Dramas for India",
    description:
      "Turn your brand story into addictive short-form micro-dramas. GDS Media writes, produces and distributes branded content Indian audiences love.",
    keyword: "branded micro-drama marketing India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/brand-music",
    title: "Jingle & Sound Lab: Brand Music Production for India",
    description:
      "A memorable jingle makes your brand unforgettable. GDS Media's Sound Lab creates original brand music, jingles and audio identity for Indian brands.",
    keyword: "brand jingle production India",
    changeFreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/services/music-videos",
    title: "Sound & Vision Reels: AI Music Video Production India",
    description:
      "Combine music and visuals with GDS Media's AI-powered music video production — high-impact content for brands and artists across India.",
    keyword: "music video production India AI",
    changeFreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/services/ai-product-explainer-videos",
    title: "Product Spotlight: AI Product Explainer Videos for India",
    description:
      "Show your product at its best with AI-powered explainer videos. GDS Media creates clear, compelling product spotlight videos for Indian businesses.",
    keyword: "AI product explainer video India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/ai-influencer-ugc-videos",
    title: "Virtual Creator Studio: AI Influencer & UGC Videos India",
    description:
      "Skip the influencer fees. GDS Media creates AI-powered UGC-style and influencer videos that drive real engagement for Indian brands.",
    keyword: "AI influencer UGC videos India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/social-media-management",
    title: "Always-On Social: Social Media Management for MSMEs",
    description:
      "Consistent, strategy-led social media management for Indian MSMEs. GDS Media keeps your brand active and growing across every platform.",
    keyword: "social media management for MSMEs India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/meta-performance-marketing",
    title: "Meta Ads Lab: Meta Performance Marketing Agency India",
    description:
      "Data-driven Meta advertising that turns spend into leads. GDS Media runs full-funnel Meta ad campaigns for Indian businesses of every size.",
    keyword: "Meta ads agency India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/google-ads",
    title: "Intent Ads: Google Search & Display Advertising India",
    description:
      "Reach customers who are already searching for what you sell. GDS Media manages Google Search and Display campaigns for Indian businesses.",
    keyword: "Google ads agency India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/ai-whatsapp-chat-assistant",
    title: "Instant Reply Assistant: AI WhatsApp Chatbot for Leads",
    description:
      "Never lose a lead to slow replies. GDS Media's AI WhatsApp chat assistant responds to every enquiry instantly, 24/7, for Indian businesses.",
    keyword: "AI WhatsApp chatbot for leads India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/ai-calling-bot",
    title: "Voice Follow-Up Agent: AI Calling Bot for Sales India",
    description:
      "Follow up every lead automatically with a natural-sounding AI voice agent. GDS Media's calling bot qualifies and converts leads around the clock.",
    keyword: "AI calling bot for sales India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/ai-sales-automation",
    title: "Lead-to-Sale Autopilot: AI Sales Automation for India",
    description:
      "Connect your ads to your sales team with GDS Media's Lead-to-Sale Engine — AI WhatsApp replies, voice follow-ups and automatic lead qualification.",
    keyword: "AI sales automation for Indian businesses",
    changeFreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/work",
    title: "Our Work — AI Marketing Portfolio & Case Studies",
    description:
      "See how GDS Media has helped Indian businesses grow with AI ads, automation and performance marketing. Case studies and creative work portfolio.",
    keyword: "AI marketing portfolio India",
    changeFreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/process",
    title: "Our Process — How GDS Media Builds Your Growth Engine",
    description:
      "From discovery to growth, see exactly how GDS Media works: Discuss, Strategise, Create, Reach, Engage, Grow — a clear 6-step process.",
    keyword: "how AI marketing agency works India",
    changeFreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/faq",
    title: "FAQ — AI Marketing for Indian Businesses Answered",
    description:
      "Answers to the most common questions about AI ads, WhatsApp bots, Meta campaigns, and what working with GDS Media looks like for your business.",
    keyword: "AI marketing FAQ India",
    changeFreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog",
    title: "Blog — AI Marketing Insights for Indian Businesses",
    description:
      "Practical guides, tips and case studies on AI advertising, video marketing, social media, and lead automation for Indian MSMEs and business owners.",
    keyword: "AI marketing blog India",
    changeFreq: "daily",
    priority: 0.7,
  },
  {
    path: "/contact",
    title: "Contact GDS Media — Book a Free Strategy Call Today",
    description:
      "Ready to grow? Book a free strategy call with GDS Media, contact us on WhatsApp, or send us a message. We work with businesses across India.",
    keyword: "contact AI marketing agency India",
    changeFreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy — GDS Media",
    description:
      "Read GDS Media's privacy policy to understand how we collect, use and protect your personal data on gdsmedia.in.",
    keyword: "",
    changeFreq: "yearly",
    priority: 0.3,
  },
  {
    path: "/terms",
    title: "Terms of Service — GDS Media",
    description:
      "Read GDS Media's terms of service governing use of gdsmedia.in and all services offered by GDS Media.",
    keyword: "",
    changeFreq: "yearly",
    priority: 0.3,
  },
];

export function getRoute(path: string): RouteConfig | undefined {
  return routes.find((r) => r.path === path);
}
