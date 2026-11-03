import Link from "next/link";
import { CALENDLY_URL, WHATSAPP_URL } from "@/lib/routes";
import type { ServicePageContent } from "@/lib/content/servicePages";
import Revealable from "@/components/animations/Revealable";
import { AnimatedHeroHeading } from "@/components/animations/AnimatedHeroHeading";
import { BeamBackground } from "@/components/animations/BeamBackground";
import { FaqAccordion } from "@/components/animations/FaqAccordion";
import { ServiceClosingCta } from "@/components/services/ServiceClosingCta";

interface ServicePageTemplateProps {
  content: ServicePageContent;
}

function SectionBadgeHeading({ label, heading }: { label: string; heading: string }) {
  return (
    <>
      <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-brand-blue bg-brand-blue/10 border-2 border-brand-blue/40 px-4 py-1.5 mb-4">
        // {label}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-ink uppercase tracking-tight mb-10">
        {heading}
      </h2>
    </>
  );
}

/**
 * Shared layout for the four GDS Media service sub-pages: Hero, Problem,
 * What we do, Why GDS Media, Process, Who it's for, FAQ, closing CTA.
 * Every page passes its own ServicePageContent; nothing here is page-specific.
 */
export function ServicePageTemplate({ content }: ServicePageTemplateProps) {
  const { hero, problem, whatWeDo, whyGds, process, whoFor, faqs, closingCta, badge } = content;

  return (
    <div>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="pt-36 pb-20 px-4 bg-brand-bg border-b-2 border-brand-blue/40 relative overflow-hidden">
        <BeamBackground />
        <div className="max-w-5xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 font-mono text-xs text-brand-ink/50 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-blue transition-colors">HOME</Link>
            <span className="flex items-center gap-2">
              <span>/</span>
              <Link href="/services" className="hover:text-brand-blue transition-colors uppercase">Services</Link>
            </span>
            <span className="flex items-center gap-2">
              <span>/</span>
              <span className="uppercase">{badge}</span>
            </span>
          </nav>

          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-brand-blue bg-brand-blue/10 border-2 border-brand-blue/40 px-4 py-1.5 mb-6">
            // {badge}
          </span>

          <AnimatedHeroHeading
            text={hero.h1}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-brand-ink uppercase tracking-tighter leading-none mb-6"
          />

          <p className="font-mono text-lg text-brand-ink/70 max-w-3xl leading-relaxed mb-8">
            {hero.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-orange text-brand-ink font-mono font-black uppercase tracking-wider text-sm hover:bg-brand-orange-vivid transition-all text-center shadow-[6px_6px_0px_0px_rgba(23,43,77,0.15)] hover:translate-x-0.5 hover:translate-y-0.5"
            >
              {hero.primaryButtonLabel}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-brand-green/60 text-brand-green font-mono font-bold uppercase tracking-wider text-sm hover:bg-brand-green/10 transition-all text-center"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="font-mono text-xs text-brand-ink/50 max-w-2xl leading-relaxed">
            {hero.trustLine}
          </p>
        </div>
      </section>

      {/* ───────────────────────── Problem ───────────────────────── */}
      <Revealable>
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <SectionBadgeHeading label="The Challenge" heading={problem.heading} />
          <div className="space-y-5">
            {problem.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-brand-ink/70 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </Revealable>

      {/* ───────────────────────── What we do ───────────────────────── */}
      <section className="py-20 px-4 bg-brand-surface/40 border-y-2 border-brand-blue/10">
        <div className="max-w-5xl mx-auto">
          <Revealable>
            <SectionBadgeHeading label="What's Included" heading={whatWeDo.heading} />
          </Revealable>
          <div className="grid sm:grid-cols-2 gap-6">
            {whatWeDo.items.map((item, i) => (
              <Revealable key={item.title} delay={Math.min(i, 5) * 80}>
                <div className="h-full border-2 border-brand-blue/20 bg-brand-surface p-6 hover:border-brand-blue/50 transition-colors">
                  <h3 className="font-display text-lg font-bold text-brand-ink mb-2">{item.title}</h3>
                  <p className="text-brand-ink/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </Revealable>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Why GDS Media ───────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Revealable>
            <SectionBadgeHeading label="Why Us" heading={whyGds.heading} />
          </Revealable>
          <div className="space-y-5">
            {whyGds.items.map((item, i) => (
              <Revealable key={item.title} delay={Math.min(i, 5) * 60}>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 mt-0.5 flex items-center justify-center bg-brand-blue/10 border-2 border-brand-blue/40 text-brand-blue">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-brand-ink mb-1">{item.title}</h3>
                    <p className="text-brand-ink/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Revealable>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Process ───────────────────────── */}
      <section className="py-20 px-4 bg-brand-surface/40 border-y-2 border-brand-blue/10">
        <div className="max-w-3xl mx-auto">
          <Revealable>
            <SectionBadgeHeading label="How It Works" heading={process.heading} />
          </Revealable>
          <div className="space-y-8">
            {process.steps.map((step, i) => (
              <Revealable key={step.title} delay={Math.min(i, 5) * 70}>
                <div className="flex items-start gap-5">
                  <span className="flex-shrink-0 font-display text-3xl font-black text-brand-blue/30 w-14">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-lg font-bold text-brand-ink mb-1">{step.title}</h3>
                    <p className="text-brand-ink/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Revealable>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Who it's for ───────────────────────── */}
      <Revealable>
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <SectionBadgeHeading label="Who This Is For" heading={whoFor.heading} />
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {whoFor.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-brand-ink/70 text-base leading-relaxed">
                <span className="text-brand-blue mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </Revealable>

      {/* ───────────────────────── FAQ ───────────────────────── */}
      <section className="py-20 px-4 bg-brand-surface/40 border-y-2 border-brand-blue/10">
        <div className="max-w-3xl mx-auto">
          <Revealable>
            <SectionBadgeHeading label="FAQ" heading="Frequently Asked Questions" />
          </Revealable>
          <Revealable>
            <FaqAccordion items={faqs} />
          </Revealable>
        </div>
      </section>

      {/* ───────────────────────── Closing CTA ───────────────────────── */}
      <ServiceClosingCta
        heading={closingCta.heading}
        text={closingCta.text}
        primaryButtonLabel={closingCta.primaryButtonLabel}
      />
    </div>
  );
}
