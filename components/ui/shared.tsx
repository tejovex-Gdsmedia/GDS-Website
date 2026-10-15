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
    <section className="bg-brand-black border-y-2 border-brand-gold/40 py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10 border-2 border-brand-gold/30 bg-brand-gray/30 p-12 sm:p-16">
        <span className="inline-block text-[10px] font-mono font-black uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 mb-6 border border-brand-gold/30">
          // CONVERSION ENGINE
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-white uppercase tracking-tight mb-6">
          {heading}
        </h2>
        <p className="font-mono text-brand-white/70 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-brand-gold text-brand-black font-mono font-black uppercase tracking-wider text-sm hover:bg-brand-gold-light transition-all shadow-[4px_4px_0px_0px_rgba(245,245,245,0.2)] hover:translate-x-0.5 hover:translate-y-0.5"
          >
            Book Your Strategy Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-brand-gold/60 text-brand-gold font-mono font-bold uppercase tracking-wider text-sm hover:bg-brand-gold/10 transition-all"
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
    <section className="pt-36 pb-20 px-4 bg-brand-black border-b-2 border-brand-gold/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 font-mono text-xs text-brand-white/50 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-gold transition-colors">HOME</Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <span>/</span>
                <Link href={crumb.href} className="hover:text-brand-gold transition-colors uppercase">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        {badge && (
          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-brand-gold bg-brand-gold/10 border-2 border-brand-gold/40 px-4 py-1.5 mb-6">
            // {badge}
          </span>
        )}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-brand-white uppercase tracking-tighter leading-none mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="font-mono text-lg text-brand-white/70 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

/** Placeholder card for client logos — to be filled with real approved logos */
export function ClientLogoPlaceholder({ label }: { label: string }) {
  return (
    <div className="border-2 border-brand-gold/20 bg-brand-black p-6 flex items-center justify-center hover:border-brand-gold/60 transition-colors">
      <span className="font-mono text-xs text-brand-white/40 uppercase tracking-wider text-center">
        {/* TODO: replace with actual client logo */}
        [LOGO: {label}]
      </span>
    </div>
  );
}

/** Placeholder for case study cards — to be filled with real approved content */
export function CaseStudyPlaceholder({ industry }: { industry: string }) {
  return (
    <div className="border-2 border-brand-gold/30 bg-brand-gray/40 p-8 flex flex-col justify-between hover:border-brand-gold transition-colors">
      <div>
        <span className="font-mono text-[10px] font-black text-brand-gold uppercase tracking-widest bg-brand-gold/10 px-2 py-1 border border-brand-gold/30">
          // PORTFOLIO SLOT
        </span>
        <h3 className="font-display text-xl font-black text-brand-white uppercase mt-4 mb-2">
          {industry}
        </h3>
        {/* TODO: replace with real approved case study content */}
        <p className="font-mono text-brand-white/40 text-xs mt-3 leading-relaxed">
          Case study coming soon — real results and metrics to be added here.
        </p>
      </div>
      <div className="mt-8 pt-4 border-t border-brand-white/10 flex items-center justify-between">
        <span className="font-mono text-[10px] text-brand-gold uppercase">Status: Pending Verification</span>
        <span className="font-mono text-xs font-bold text-brand-white">GDS ARCHIVE</span>
      </div>
    </div>
  );
}

/** Placeholder for testimonials — real approved quotes only */
export function TestimonialPlaceholder() {
  return (
    <div className="border-2 border-brand-gold/30 bg-brand-gray/40 p-8 flex flex-col justify-between">
      {/* TODO: replace with real approved testimonial quote, name, business name, city */}
      <p className="font-mono text-brand-white/70 text-sm italic leading-relaxed mb-6">
        &quot;[Real client testimonial to be added here — name, business name, city]&quot;
      </p>
      <div className="pt-4 border-t border-brand-white/10 flex items-center justify-between">
        <span className="font-mono text-[10px] font-bold text-brand-gold uppercase">Verified Client</span>
        <span className="font-mono text-[10px] text-brand-white/40">GDS MEDIA MSME</span>
      </div>
    </div>
  );
}
