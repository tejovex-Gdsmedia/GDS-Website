import { Metadata } from "next";
import { getRoute, PHONE, EMAIL, WHATSAPP_URL, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const routeConfig = getRoute("/contact")!;
export const metadata: Metadata = buildMetadata(routeConfig);

export default function ContactPage() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Contact", href: routeConfig.path }])]} />
      <PageHero title="Contact GDS Media" subtitle="Ready to grow your business with AI-powered marketing? Book a call, chat on WhatsApp, or send us a message." badge="Get in Touch" breadcrumbs={[{ label: "Contact", href: routeConfig.path }]} />
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-white mb-6">Direct Channels</h2>
            <div className="space-y-6 text-brand-white/80">
              <div className="bg-brand-gray border border-brand-gold/10 p-6 rounded-xl">
                <h3 className="font-semibold text-brand-gold mb-1">Strategy Call (Recommended)</h3>
                <p className="text-sm text-brand-white/70 mb-4">Book a free 30-minute 1-on-1 consultation.</p>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2.5 bg-brand-gold text-brand-black font-semibold rounded-full text-sm">Book on Calendly</a>
              </div>
              <div className="bg-brand-gray border border-brand-gold/10 p-6 rounded-xl">
                <h3 className="font-semibold text-brand-gold mb-1">WhatsApp Chat</h3>
                <p className="text-sm text-brand-white/70 mb-4">+91 {PHONE} (Mon–Sat, 11AM–8PM)</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2.5 border border-brand-gold/30 text-brand-gold font-semibold rounded-full text-sm">Open WhatsApp</a>
              </div>
              <div className="bg-brand-gray border border-brand-gold/10 p-6 rounded-xl">
                <h3 className="font-semibold text-brand-gold mb-1">Email Us</h3>
                <p className="text-sm text-brand-white/70"><a href={`mailto:${EMAIL}`} className="hover:text-brand-gold">{EMAIL}</a></p>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray border border-brand-gold/10 p-8 rounded-2xl">
            <h2 className="font-display text-2xl font-bold text-brand-white mb-6">Send a Message</h2>
            <form action="/api/contact" method="POST" className="space-y-4">
              {/* Honeypot for spam protection */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              <div>
                <label className="block text-xs font-semibold text-brand-gold uppercase tracking-wider mb-2">Your Name</label>
                <input type="text" name="name" required className="w-full bg-brand-black border border-brand-gold/20 rounded-lg px-4 py-3 text-brand-white text-sm focus:border-brand-gold" placeholder="Rahul Sharma" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-gold uppercase tracking-wider mb-2">Phone Number</label>
                <input type="tel" name="phone" required className="w-full bg-brand-black border border-brand-gold/20 rounded-lg px-4 py-3 text-brand-white text-sm focus:border-brand-gold" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-gold uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" name="email" required className="w-full bg-brand-black border border-brand-gold/20 rounded-lg px-4 py-3 text-brand-white text-sm focus:border-brand-gold" placeholder="rahul@business.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-gold uppercase tracking-wider mb-2">Message</label>
                <textarea name="message" rows={4} required className="w-full bg-brand-black border border-brand-gold/20 rounded-lg px-4 py-3 text-brand-white text-sm focus:border-brand-gold" placeholder="Tell us about your business and goals..." />
              </div>
              <button type="submit" className="w-full py-3.5 bg-brand-gold text-brand-black font-semibold rounded-lg text-sm hover:bg-brand-gold-light transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <CtaSection />
    </div>
  );
}
