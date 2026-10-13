import { Metadata } from "next";
import { getRoute } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const routeConfig = getRoute("/faq")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const FAQS = [
  { question: "What is AI-powered marketing?", answer: "AI marketing combines generative AI tools for video and creative production with automated lead qualification workflows, enabling premium results at a fraction of traditional agency costs." },
  { question: "How does GDS Media differ from traditional agencies?", answer: "We focus on the entire Lead-to-Sale Engine — not just posting ads or making videos, but instantly engaging every lead via WhatsApp and AI calling so your team only talks to qualified buyers." },
  { question: "What industries do you work with?", answer: "We work with Indian MSMEs across healthcare, real estate, retail, fashion, hospitality, and professional services." },
  { question: "How do we get started?", answer: "Book a free 30-minute strategy call with our team. We will review your current marketing and show you what's possible." },
];

export default function Page() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "FAQ", href: routeConfig.path }]), faqSchema(FAQS)]} />
      <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know about working with GDS Media and our AI-powered marketing services." badge="FAQ" breadcrumbs={[{ label: "FAQ", href: routeConfig.path }]} />
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-brand-gray border border-brand-gold/10 p-6 rounded-xl">
              <h2 className="font-display text-lg font-bold text-brand-white mb-2">{faq.question}</h2>
              <p className="text-brand-white/70 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaSection />
    </div>
  );
}
