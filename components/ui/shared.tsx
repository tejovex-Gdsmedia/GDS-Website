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
    <section className="bg-brand-bg border-y-2 border-brand-blue/40 py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10 border-2 border-brand-blue/30 bg-brand-surface/30 p-12 sm:p-16">
        <span className="inline-block text-[10px] font-mono font-black uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1 mb-6 border border-brand-blue/30">
          // CONVERSION ENGINE
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-ink uppercase tracking-tight mb-6">
          {heading}
        </h2>
        <p className="font-mono text-brand-ink/70 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-brand-orange text-brand-ink font-mono font-black uppercase tracking-wider text-sm hover:bg-brand-orange-vivid transition-all shadow-[4px_4px_0px_0px_rgba(23,43,77,0.15)] hover:translate-x-0.5 hover:translate-y-0.5"
          >
            Book Your Strategy Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-brand-green/60 text-brand-green font-mono font-bold uppercase tracking-wider text-sm hover:bg-brand-green/10 transition-all"
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
  /** Optional background video for this page's hero only (e.g. /videos/about-hero.mp4). */
  videoSrc?: string;
  videoPoster?: string;
}

export function PageHero({ title, subtitle, badge, breadcrumbs, videoSrc, videoPoster }: PageHeroProps) {
  return (
    <section className="pt-36 pb-20 px-4 bg-brand-bg border-b-2 border-brand-blue/40 relative overflow-hidden">
      {videoSrc && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={videoPoster}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Light scrim so dark text stays readable over the video */}
          <div className="absolute inset-0 bg-brand-bg/80" />
        </>
      )}
      <div className="max-w-5xl mx-auto relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 font-mono text-xs text-brand-ink/50 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-blue transition-colors">HOME</Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <span>/</span>
                <Link href={crumb.href} className="hover:text-brand-blue transition-colors uppercase">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        {badge && (
          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-brand-blue bg-brand-blue/10 border-2 border-brand-blue/40 px-4 py-1.5 mb-6">
            // {badge}
          </span>
        )}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-brand-ink uppercase tracking-tighter leading-none mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="font-mono text-lg text-brand-ink/70 max-w-3xl leading-relaxed">
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
    <div className="border-2 border-brand-blue/20 bg-brand-bg p-6 flex items-center justify-center hover:border-brand-blue/60 transition-colors">
      <span className="font-mono text-xs text-brand-ink/40 uppercase tracking-wider text-center">
        {/* TODO: replace with actual client logo */}
        [LOGO: {label}]
      </span>
    </div>
  );
}

/** Placeholder for case study cards — to be filled with real approved content */
export function CaseStudyPlaceholder({ industry }: { industry: string }) {
  return (
    <div className="border-2 border-brand-blue/30 bg-brand-surface/40 p-8 flex flex-col justify-between hover:border-brand-blue transition-colors">
      <div>
        <span className="font-mono text-[10px] font-black text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-2 py-1 border border-brand-blue/30">
          // PORTFOLIO SLOT
        </span>
        <h3 className="font-display text-xl font-black text-brand-ink uppercase mt-4 mb-2">
          {industry}
        </h3>
        {/* TODO: replace with real approved case study content */}
        <p className="font-mono text-brand-ink/40 text-xs mt-3 leading-relaxed">
          Case study coming soon — real results and metrics to be added here.
        </p>
      </div>
      <div className="mt-8 pt-4 border-t border-brand-ink/10 flex items-center justify-between">
        <span className="font-mono text-[10px] text-brand-blue uppercase">Status: Pending Verification</span>
        <span className="font-mono text-xs font-bold text-brand-ink">GDS ARCHIVE</span>
      </div>
    </div>
  );
}

/** Placeholder for testimonials — real approved quotes only */
export function TestimonialPlaceholder() {
  return (
    <div className="border-2 border-brand-blue/30 bg-brand-surface/40 p-8 flex flex-col justify-between">
      {/* TODO: replace with real approved testimonial quote, name, business name, city */}
      <p className="font-mono text-brand-ink/70 text-sm italic leading-relaxed mb-6">
        &quot;[Real client testimonial to be added here — name, business name, city]&quot;
      </p>
      <div className="pt-4 border-t border-brand-ink/10 flex items-center justify-between">
        <span className="font-mono text-[10px] font-bold text-brand-blue uppercase">Verified Client</span>
        <span className="font-mono text-[10px] text-brand-ink/40">GDS MEDIA MSME</span>
      </div>
    </div>
  );
}
