import { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";

const SAMPLE_POSTS: Record<string, { title: string; description: string; date: string; content: string }> = {
  "how-ai-is-transforming-msme-marketing-in-india": {
    title: "How AI is Transforming MSME Marketing in India",
    description: "Discover how Indian business owners are leveraging AI ad films and automated follow-ups to outpace larger competitors.",
    date: "2026-10-13",
    content: "TODO: replace with human-written copy. In today's digital economy, Indian MSMEs face stiff competition. AI-powered marketing levels the playing field, allowing local businesses to produce cinematic video ads and run hyper-targeted campaigns without enterprise budgets.",
  },
  "why-leads-go-cold-and-how-whatsapp-ai-solves-it": {
    title: "Why Leads Go Cold (And How WhatsApp AI Solves It)",
    description: "Speed to lead is everything. Learn how instant AI replies on WhatsApp multiply your conversion rates.",
    date: "2026-10-10",
    content: "TODO: replace with human-written copy. If you call a lead after 5 minutes, your chances of conversion drop by 400%. Instant AI WhatsApp replies ensure every prospective customer gets an immediate, helpful response 24/7.",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = SAMPLE_POSTS[slug];
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} — GDS Media Blog`,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = SAMPLE_POSTS[slug];
  if (!post) notFound();

  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/blog/${slug}` },
          ]),
          articleSchema({
            title: post.title,
            description: post.description,
            slug,
            datePublished: post.date,
          }),
        ]}
      />

      <PageHero
        title={post.title}
        subtitle={`Published on ${post.date} · GDS Media Insights`}
        badge="Article"
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${slug}` },
        ]}
      />

      <section className="py-24 px-4 max-w-3xl mx-auto">
        <div className="prose prose-invert max-w-none text-brand-white/80 leading-relaxed space-y-6">
          <p className="text-lg font-medium text-brand-gold">{post.description}</p>
          <p>{post.content}</p>
          <div className="border-t border-brand-gold/10 pt-8 mt-12">
            <p className="text-sm text-brand-white/50">
              Have questions about implementing AI marketing in your business? Book a free strategy call with our team.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
