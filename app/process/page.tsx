import { Metadata } from "next";
import { getRoute, CALENDLY_URL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const routeConfig = getRoute("/process")!;
export const metadata: Metadata = buildMetadata(routeConfig);
export default function Page() {
  const steps = [
    { num: "01", title: "Discuss", desc: "A 30-minute discovery call to understand your business, goals, and current bottlenecks." },
    { num: "02", title: "Strategise", desc: "We build your custom Brand Blueprint, audience profiling, and campaign roadmap." },
    { num: "03", title: "Create", desc: "Our studio produces cinematic AI ad films, avatars, and high-converting creatives." },
    { num: "04", title: "Reach", desc: "We launch targeted Meta and Google performance ad campaigns across India." },
    { num: "05", title: "Engage", desc: "Instant WhatsApp replies and AI voice calling follow up with every lead automatically." },
    { num: "06", title: "Grow", desc: "Continuous optimisation, higher ROAS, and predictable closed sales for your business." },
  ];
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Process", href: routeConfig.path }])]} />
      <PageHero title="Our 6-Step Growth Process" subtitle="From initial discovery to predictable growth, here is exactly how GDS Media works with your business." badge="How We Work" breadcrumbs={[{ label: "Process", href: routeConfig.path }]} />
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="bg-brand-gray border border-brand-gold/10 p-8 rounded-2xl">
              <span className="text-2xl font-bold font-display text-brand-gold">{s.num}</span>
              <h2 className="font-display text-xl font-bold text-brand-white mt-2 mb-3">{s.title}</h2>
              <p className="text-brand-white/70 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full">Book Your Strategy Call</a>
        </div>
      </section>
      <CtaSection />
    </div>
  );
}
