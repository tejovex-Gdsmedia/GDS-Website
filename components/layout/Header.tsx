"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CALENDLY_URL, WHATSAPP_URL } from "@/lib/routes";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Performance Marketing", subtitle: "Meta, Google & YouTube Ads That Convert Browsers Into Buyers", href: "/services/performance-marketing" },
  
      { label: "SEO & Content", subtitle: "Keyword-Rich Strategies That Build Authority & Drive Organic Traffic", href: "/services/seo-content" },
      { label: "Brand & Creative", subtitle: "Creatives That Stop the Scroll & Build Trust Instantly", href: "/services/brand-creative" },
      { label: "Analytics & CRO", subtitle: "Track Every Click & Optimize Every Conversion Point", href: "/services/analytics-cro" },

    ],
  },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/95 backdrop-blur-md border-b border-brand-blue/15 shadow-soft-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <Image
              src="/images/gds-logo-mark.png"
              alt="GDS Media logo"
              width={36}
              height={36}
              priority
              className="h-9 w-9 object-contain"
            />
            <span className="font-display font-black text-xl text-brand-ink tracking-tighter uppercase group-hover:text-brand-blue transition-colors">
              GDS Media
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group py-6">
                  <button
                    className="text-xs uppercase font-mono font-bold tracking-widest text-brand-ink/90 hover:text-brand-blue transition-colors flex items-center gap-1.5 group whitespace-nowrap"
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg className="w-3 h-3 transition-transform group-hover:rotate-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 w-96 rounded-md bg-brand-bg border border-brand-blue/15 shadow-soft-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4 grid gap-1">
                    {link.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2.5 rounded-sm hover:bg-brand-blue/10 transition-colors duration-300"
                      >
                        <span className="block text-xs font-mono font-bold text-brand-ink hover:text-brand-blue">
                          {child.label}
                        </span>
                        {child.subtitle && (
                          <span className="block text-[11px] text-brand-ink/60 mt-0.5 leading-snug">
                            {child.subtitle}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase font-mono font-bold tracking-widest text-brand-ink/90 hover:text-brand-blue transition-colors py-6 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <div className="group">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full text-xs font-mono uppercase tracking-wider px-4 xl:px-5 py-2.5 border border-brand-green/40 text-brand-green font-bold hover:bg-brand-green/10 transition-all duration-300 group-hover:scale-105 whitespace-nowrap"
              >
                WhatsApp
              </a>
            </div>
            <div className="group">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full text-xs font-mono uppercase tracking-wider px-4 xl:px-5 py-2.5 bg-brand-orange text-brand-ink font-extrabold hover:bg-brand-orange-vivid transition-all duration-300 shadow-soft hover:shadow-soft-lg group-hover:scale-105 whitespace-nowrap"
              >
                Book Strategy Call
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 rounded-sm border border-brand-blue/25 text-brand-blue bg-brand-bg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-bg border-t border-brand-blue/15 rounded-b-lg shadow-soft max-h-[85vh] overflow-y-auto">
          <nav className="px-6 py-6 flex flex-col gap-3" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.href} className="border-b border-brand-ink/10 pb-3">
                  <button
                    className="w-full text-left text-sm font-mono font-bold text-brand-blue uppercase tracking-wider py-2 flex items-center justify-between"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <span>{link.label}</span>
                    <span>{servicesOpen ? "[-]" : "[+]"}</span>
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 flex flex-col gap-2 mt-2 border-l border-brand-blue/20">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-1.5 hover:text-brand-blue transition-colors"
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className="block text-xs font-mono font-bold text-brand-ink/80">{child.label}</span>
                          {child.subtitle && (
                            <span className="block text-[11px] text-brand-ink/50 mt-0.5 leading-snug">{child.subtitle}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-mono font-bold text-brand-ink uppercase tracking-wider py-2 border-b border-brand-ink/10 hover:text-brand-blue transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-6 flex flex-col gap-3">
              <div className="group">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-center text-xs font-mono uppercase font-bold px-4 py-3 border border-brand-green/40 text-brand-green hover:bg-brand-green/10 transition-all duration-300 group-hover:scale-105"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="group">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-center text-xs font-mono font-extrabold px-4 py-3 bg-brand-orange text-brand-ink hover:bg-brand-orange-vivid transition-all duration-300 shadow-soft group-hover:scale-105"
                >
                  Book Strategy Call
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
