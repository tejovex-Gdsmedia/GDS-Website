"use client";

import Link from "next/link";
import { useState } from "react";
import { CALENDLY_URL, WHATSAPP_URL } from "@/lib/routes";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      // BLUEPRINT
      { group: "Blueprint", label: "Brand Blueprint", href: "/services/brand-strategy" },
      // STUDIO
      { group: "Studio", label: "Cinematic AI Ads", href: "/services/ai-ad-films" },
      { group: "Studio", label: "AI Brand Ambassador", href: "/services/ai-avatars" },
      { group: "Studio", label: "Micro-Drama Studio", href: "/services/branded-micro-dramas" },
      { group: "Studio", label: "Jingle & Sound Lab", href: "/services/brand-music" },
      { group: "Studio", label: "Sound & Vision Reels", href: "/services/music-videos" },
      { group: "Studio", label: "Product Spotlight Videos", href: "/services/ai-product-explainer-videos" },
      { group: "Studio", label: "Virtual Creator Studio", href: "/services/ai-influencer-ugc-videos" },
      { group: "Studio", label: "Always-On Social", href: "/services/social-media-management" },
      // GROWTH ENGINE
      { group: "Growth Engine", label: "Meta Ads Lab", href: "/services/meta-performance-marketing" },
      { group: "Intent Ads", label: "Intent Ads", href: "/services/google-ads" },
      { group: "Growth Engine", label: "Instant Reply Assistant", href: "/services/ai-whatsapp-chat-assistant" },
      { group: "Growth Engine", label: "Voice Follow-Up Agent", href: "/services/ai-calling-bot" },
    ],
  },
  { label: "Lead-to-Sale Autopilot", href: "/ai-sales-automation" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-sm border-b border-brand-gold/10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            {/* TODO: replace with actual GDS Media logo image */}
            <span className="font-display font-bold text-xl text-brand-gold tracking-tight">
              GDS<span className="text-brand-white"> Media</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <button
                    className="text-sm text-brand-white/80 hover:text-brand-gold transition-colors flex items-center gap-1"
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-72 bg-brand-gray border border-brand-gold/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="p-4 grid gap-1">
                      {["Blueprint", "Studio", "Growth Engine"].map((group) => (
                        <div key={group}>
                          <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider px-2 pt-2 pb-1">
                            {group}
                          </p>
                          {link.children!
                            .filter((c) => c.group === group)
                            .map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-2 py-1.5 text-sm text-brand-white/70 hover:text-brand-gold hover:bg-brand-gold/5 rounded transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-brand-white/80 hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 border border-brand-gold/30 text-brand-gold rounded-full hover:bg-brand-gold/10 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-light transition-colors"
            >
              Book Strategy Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-brand-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-gray border-t border-brand-gold/10">
          <nav className="px-4 py-4 flex flex-col gap-2" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    className="w-full text-left text-sm font-semibold text-brand-gold py-2"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {link.label}
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-sm text-brand-white/70 py-1.5 hover:text-brand-gold transition-colors"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-brand-white/80 py-2 hover:text-brand-gold transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 flex flex-col gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm px-4 py-2.5 border border-brand-gold/30 text-brand-gold rounded-full"
              >
                WhatsApp Us
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm px-4 py-2.5 bg-brand-gold text-brand-black font-semibold rounded-full"
              >
                Book Strategy Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
