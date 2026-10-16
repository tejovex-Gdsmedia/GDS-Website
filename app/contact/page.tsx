import { Metadata } from "next";
import Link from "next/link";
import { getRoute, PHONE, EMAIL, WHATSAPP_URL, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Revealable from "@/components/animations/Revealable";
import ContactForm from "@/components/contact/ContactForm";

const routeConfig = getRoute("/contact")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const CHANNELS = [
  {
    name: "Strategy call",
    detail: "A free 30-minute 1-on-1 call — we map what AI marketing can do for your business.",
    action: "Book on Calendly",
    href: CALENDLY_URL,
    external: true,
    accent: "bg-brand-orange text-brand-ink",
  },
  {
    name: "WhatsApp",
    detail: `+91 ${PHONE} — Mon–Sat, 11AM–8PM IST`,
    action: "Open WhatsApp",
    href: WHATSAPP_URL,
    external: true,
    accent: "bg-brand-green text-white",
  },
  {
    name: "Email",
    detail: EMAIL,
    action: "Write to us",
    href: `mailto:${EMAIL}`,
    external: false,
    accent: "bg-brand-blue text-white",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-brand-bg">
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Contact", href: routeConfig.path }])]} />

      {/* Hero — statement, no eyebrow, no card */}
      <section className="px-4 sm:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28 max-w-[1400px] mx-auto">
        <nav className="flex items-center gap-2 text-sm text-brand-ink/40 mb-10" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-ink/70">Contact</span>
        </nav>

        <Revealable>
          <h1 className="font-display uppercase text-[14vw] sm:text-[9vw] lg:text-[7.5vw] font-extrabold text-brand-ink leading-[0.88] tracking-tight max-w-4xl">
            Let&rsquo;s talk AI<br />marketing.
          </h1>
        </Revealable>

        <Revealable delay={150}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mt-16">
            <p className="text-brand-ink/70 text-lg sm:text-xl max-w-xl leading-relaxed">
              Tell us about your business, and we&rsquo;ll show you exactly where AI-powered ads, video and automation fit — no fluff, no hard sell.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-brand-ink font-semibold uppercase text-base hover:bg-brand-orange-vivid transition-colors"
            >
              Book your strategy call
            </a>
          </div>
        </Revealable>
      </section>

      {/* Channels — display rows, not cards */}
      <section className="bg-brand-surface/20">
        {CHANNELS.map((channel, i) => (
          <Revealable key={channel.name} delay={i * 80}>
            <a
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 sm:px-8 py-10 sm:py-12 max-w-[1400px] mx-auto ${
                i % 2 === 1 ? "bg-brand-surface/50" : ""
              } hover:bg-brand-blue/5 transition-colors`}
            >
              <div>
                <h2 className="font-display uppercase text-3xl sm:text-5xl font-bold text-brand-ink leading-none mb-3">
                  {channel.name}
                </h2>
                <p className="text-brand-ink/60 text-base sm:text-lg">{channel.detail}</p>
              </div>
              <span className="shrink-0 inline-flex items-center gap-3 text-brand-blue text-base sm:text-lg font-semibold uppercase">
                {channel.action}
                <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full group-hover:translate-x-1 transition-transform ${channel.accent}`}>
                  →
                </span>
              </span>
            </a>
          </Revealable>
        ))}
      </section>

      {/* Form */}
      <section className="px-4 sm:px-8 py-20 lg:py-28 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Revealable>
            <h2 className="font-display uppercase text-4xl sm:text-5xl font-bold text-brand-ink leading-tight mb-6">
              Or write to us directly.
            </h2>
            <p className="text-brand-ink/60 text-lg leading-relaxed max-w-md">
              Share a little about your business and what you&rsquo;re trying to grow. We read every message and reply within one business day.
            </p>
          </Revealable>

          <Revealable delay={120}>
            <ContactForm />
          </Revealable>
        </div>
      </section>
    </div>
  );
}
