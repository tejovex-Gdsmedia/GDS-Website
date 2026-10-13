import Link from "next/link";
import { CALENDLY_URL, WHATSAPP_URL } from "@/lib/routes";

interface CtaSectionProps {
  heading?: string;
  subheading?: string;
}

export function CtaSection({
  heading = "Ready to grow your business with AI?",
  subheading = "Book a free 30-minute strategy call. We'll map out exactly what AI marketing can do for your business — no fluff, no hard sell.",
}: CtaSectionProps) {
  return (
    <section className="bg-brand-gold/5 border-y border-brand-gold/10 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-white mb-4">
          {heading}
        </h2>
        <p className="text-brand-white/60 text-lg mb-8">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-light transition-colors text-sm"
          >
            Book Your Strategy Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 border border-brand-gold/40 text-brand-gold font-semibold rounded-full hover:bg-brand-gold/10 transition-colors text-sm"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export function PageHero({ title, subtitle, badge, breadcrumbs }: PageHeroProps) {
  return (
    <section className="pt-28 pb-16 px-4 bg-brand-black border-b border-brand-gold/10">
      <div className="max-w-4xl mx-auto">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-brand-white/40 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <span>/</span>
                <Link href={crumb.href} className="hover:text-brand-gold transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        {badge && (
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-gold border border-brand-gold/30 rounded-full px-3 py-1 mb-4">
            {badge}
          </span>
        )}
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-brand-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-brand-white/60 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

/** Placeholder card for client logos — to be filled with real approved logos */
export function ClientLogoPlaceholder({ label }: { label: string }) {
  return (
    <div className="border border-brand-gold/10 rounded-lg px-6 py-4 flex items-center justify-center">
      <span className="text-xs text-brand-white/30 italic">
        {/* TODO: replace with actual client logo */}
        [Logo: {label}]
      </span>
    </div>
  );
}

/** Placeholder for case study cards — to be filled with real approved content */
export function CaseStudyPlaceholder({ industry }: { industry: string }) {
  return (
    <div className="border border-dashed border-brand-gold/20 rounded-xl p-6 bg-brand-gray/50">
      <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
        {industry}
      </span>
      {/* TODO: replace with real approved case study content */}
      <p className="text-brand-white/30 text-sm mt-2 italic">
        Case study coming soon — real results to be added here.
      </p>
    </div>
  );
}

/** Placeholder for testimonials — real approved quotes only */
export function TestimonialPlaceholder() {
  return (
    <div className="border border-dashed border-brand-gold/20 rounded-xl p-6 bg-brand-gray/50">
      {/* TODO: replace with real approved testimonial quote, name, business name, city */}
      <p className="text-brand-white/30 text-sm italic">
        &quot;[Real client testimonial to be added here — name, business name, city]&quot;
      </p>
    </div>
  );
}
