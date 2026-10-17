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
    path: "/services/performance-marketing",
    title: "Performance Marketing: Meta, Google & YouTube Ads India",
    description:
      "Meta, Google & YouTube ads engineered for ROAS. GDS Media builds funnels and creative strategy that convert browsers into buyers for Indian brands.",
    keyword: "performance marketing agency India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/ai-automation",
    title: "AI & Automation: WhatsApp Bots & CRM Workflows India",
    description:
      "Put your sales pipeline on autopilot with WhatsApp AI chatbots, CRM workflows and automated lead nurturing — zero missed leads, 24/7.",
    keyword: "AI automation agency India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/seo-content",
    title: "SEO & Content: Organic Growth for Indian Businesses",
    description:
      "Keyword-rich SEO and content strategies that build authority and drive organic traffic. GDS Media helps Indian businesses rank and get found.",
    keyword: "SEO agency for small business India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/brand-creative",
    title: "Brand & Creative: Identity & Scroll-Stopping Content",
    description:
      "Brand identity, social creatives and reels that build trust instantly. GDS Media crafts visual strategy and storytelling for Indian brands.",
    keyword: "brand identity agency India",
    changeFreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/analytics-cro",
    title: "Analytics & CRO: Tracking & Conversion Optimization",
    description:
      "Track every click and optimize every drop-off point. GDS Media sets up GA4, Meta Pixel and CRO strategy that turns data into growth.",
    keyword: "conversion rate optimization agency India",
    changeFreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/services/whatsapp-social",
    title: "WhatsApp & Social: Broadcast Campaigns at Scale India",
    description:
      "WhatsApp broadcast campaigns, drip sequences and social community management at scale — India's #1 marketing channel, used the right way.",
    keyword: "WhatsApp marketing agency India",
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
