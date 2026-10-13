import Link from "next/link";
import { BRAND_NAME, PHONE, EMAIL, WHATSAPP_URL, CALENDLY_URL, SITE_URL } from "@/lib/routes";

const SERVICE_LINKS = [
  { label: "Brand Blueprint", href: "/services/brand-strategy" },
  { label: "Cinematic AI Ads", href: "/services/ai-ad-films" },
  { label: "AI Brand Ambassador", href: "/services/ai-avatars" },
  { label: "Micro-Drama Studio", href: "/services/branded-micro-dramas" },
  { label: "Always-On Social", href: "/services/social-media-management" },
  { label: "Meta Ads Lab", href: "/services/meta-performance-marketing" },
  { label: "Intent Ads", href: "/services/google-ads" },
  { label: "Instant Reply Assistant", href: "/services/ai-whatsapp-chat-assistant" },
  { label: "Voice Follow-Up Agent", href: "/services/ai-calling-bot" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-gray border-t border-brand-gold/10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              {/* TODO: replace with actual GDS Media logo */}
              <span className="font-display font-bold text-2xl text-brand-gold tracking-tight">
                GDS<span className="text-brand-white"> Media</span>
              </span>
            </Link>
            <p className="text-sm text-brand-white/60 leading-relaxed mb-6">
              AI-powered marketing for Indian businesses. Strategy first, technology second — always.
            </p>
            <div className="flex flex-col gap-2 text-sm text-brand-white/60">
              <a href={`tel:+91${PHONE}`} className="hover:text-brand-gold transition-colors">
                +91 {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="hover:text-brand-gold transition-colors">
                {EMAIL}
              </a>
              <span>Mon–Sat, 11AM–8PM IST</span>
            </div>
            {/* TODO: add verified social profile links */}
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-white/60 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-white/60 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4">
              Get Started
            </h3>
            <p className="text-sm text-brand-white/60 mb-4">
              Book a free 30-minute strategy call. No commitment, no jargon — just a clear plan for your business.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center text-sm px-4 py-3 bg-brand-gold text-brand-black font-semibold rounded-lg hover:bg-brand-gold-light transition-colors mb-3"
            >
              Book Strategy Call
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center text-sm px-4 py-3 border border-brand-gold/30 text-brand-gold rounded-lg hover:bg-brand-gold/10 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-white/40">
            © {currentYear} {BRAND_NAME}. All rights reserved. | {SITE_URL}
          </p>
          <div className="flex items-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-brand-white/40 hover:text-brand-gold/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
