import { Metadata } from "next";
import Link from "next/link";
import { getRoute } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const routeConfig = getRoute("/blog")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const POSTS = [
  { slug: "how-ai-is-transforming-msme-marketing-in-india", title: "How AI is Transforming MSME Marketing in India", date: "2026-10-13", excerpt: "Discover how Indian business owners are leveraging AI ad films and automated follow-ups to outpace larger competitors." },
  { slug: "why-leads-go-cold-and-how-whatsapp-ai-solves-it", title: "Why Leads Go Cold (And How WhatsApp AI Solves It)", date: "2026-10-10", excerpt: "Speed to lead is everything. Learn how instant AI replies on WhatsApp multiply your conversion rates." },
];

export default function BlogIndexPage() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Blog", href: routeConfig.path }])]} />
      <PageHero title="GDS Media Insights & Blog" subtitle="Practical guides, insights, and strategies on AI advertising, video marketing, and sales automation for Indian businesses." badge="Blog" breadcrumbs={[{ label: "Blog", href: routeConfig.path }]} />
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          {POSTS.map((post) => (
            <article key={post.slug} className="bg-brand-gray border border-brand-gold/10 p-8 rounded-2xl">
              <span className="text-xs text-brand-gold font-semibold">{post.date}</span>
              <h2 className="font-display text-2xl font-bold text-brand-white mt-2 mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand-gold transition-colors">{post.title}</Link>
              </h2>
              <p className="text-brand-white/70 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-brand-gold hover:underline">Read Article →</Link>
            </article>
          ))}
        </div>
      </section>
      <CtaSection />
    </div>
  );
}
