import Link from "next/link";
import Image from "next/image";
import { BRAND_NAME, PHONE, EMAIL, WHATSAPP_URL, CALENDLY_URL, SITE_URL } from "@/lib/routes";

const SERVICE_LINKS = [
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "SEO & Content", href: "/services/seo-content" },
  { label: "Brand & Creative", href: "/services/brand-creative" },
  { label: "Analytics & CRO", href: "/services/analytics-cro" },
  { label: "WhatsApp & Social", href: "/services/whatsapp-social" },
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
    <footer className="bg-brand-bg border-t-2 border-brand-blue/40">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1 border-b md:border-b-0 md:border-r border-brand-ink/10 pb-8 md:pb-0 md:pr-8">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
              <Image
                src="/images/gds-logo-mark.png"
                alt="GDS Media logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-display font-black text-xl text-brand-ink tracking-tighter uppercase group-hover:text-brand-blue transition-colors">
                GDS Media
              </span>
            </Link>
            <p className="text-sm font-mono text-brand-ink/70 leading-relaxed mb-6">
              AI-powered marketing for Indian businesses. Strategy first, technology second — always.
            </p>
            <div className="flex flex-col gap-2 text-xs font-mono text-brand-ink/70">
              <a href={`tel:+91${PHONE}`} className="hover:text-brand-blue transition-colors">
                PHONE: +91 {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="hover:text-brand-blue transition-colors">
                EMAIL: {EMAIL}
              </a>
              <span className="text-brand-blue">HOURS: Mon–Sat, 11AM–8PM IST</span>
            </div>
            {/* TODO: add verified social profile links */}
          </div>

          {/* Services */}
          <div className="border-b md:border-b-0 md:border-r border-brand-ink/10 pb-8 md:pb-0 md:pr-8">
            <h3 className="text-xs font-mono font-black text-brand-blue uppercase tracking-widest mb-6 border-b border-brand-blue/30 pb-2">
              // Services Index
            </h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-mono text-brand-ink/70 hover:text-brand-blue transition-colors block py-0.5 hover:translate-x-1 duration-150"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="border-b md:border-b-0 md:border-r border-brand-ink/10 pb-8 md:pb-0 md:pr-8">
            <h3 className="text-xs font-mono font-black text-brand-blue uppercase tracking-widest mb-6 border-b border-brand-blue/30 pb-2">
              // Company Index
            </h3>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-mono text-brand-ink/70 hover:text-brand-blue transition-colors block py-0.5 hover:translate-x-1 duration-150"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div className="bg-brand-surface/50 border-2 border-brand-blue/30 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono font-black text-brand-blue uppercase tracking-widest mb-4">
                // Direct Action
              </h3>
              <p className="text-xs font-mono text-brand-ink/70 mb-6 leading-relaxed">
                Book a free 30-minute strategy call. No commitment, no jargon — just a clear plan for your business.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-xs font-mono font-black uppercase tracking-wider px-4 py-3 bg-brand-orange text-brand-ink hover:bg-brand-orange-vivid transition-colors"
              >
                Book Strategy Call
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-xs font-mono font-bold uppercase tracking-wider px-4 py-3 border-2 border-brand-green/60 text-brand-green hover:bg-brand-green/10 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t-2 border-brand-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-brand-ink/40 uppercase tracking-wider">
            © {currentYear} {BRAND_NAME}. ALL RIGHTS RESERVED. // {SITE_URL}
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-mono text-brand-ink/40 hover:text-brand-blue transition-colors uppercase tracking-wider"
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
