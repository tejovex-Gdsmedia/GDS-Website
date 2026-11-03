import { CALENDLY_URL, WHATSAPP_URL } from "@/lib/routes";

interface ServiceClosingCtaProps {
  heading: string;
  text: string;
  primaryButtonLabel: string;
}

/**
 * Closing CTA for a service page. Visually mirrors the site-wide
 * CtaSection (components/ui/shared.tsx) exactly, but takes its heading,
 * body text and primary button label from the page's own content so the
 * approved closing-CTA copy can be used verbatim — while still pointing at
 * the same Calendly / WhatsApp links used everywhere else on the site.
 */
export function ServiceClosingCta({ heading, text, primaryButtonLabel }: ServiceClosingCtaProps) {
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
          {text}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-brand-orange text-brand-ink font-mono font-black uppercase tracking-wider text-sm hover:bg-brand-orange-vivid transition-all shadow-[4px_4px_0px_0px_rgba(23,43,77,0.15)] hover:translate-x-0.5 hover:translate-y-0.5"
          >
            {primaryButtonLabel}
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
