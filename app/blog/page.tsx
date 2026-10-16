import { Metadata } from "next";
import Link from "next/link";
import { getRoute } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAllBlogPosts } from "@/lib/blog-posts";
import Revealable from "@/components/animations/Revealable";

const routeConfig = getRoute("/blog")!;
export const metadata: Metadata = buildMetadata(routeConfig);

const POSTS = getAllBlogPosts();

export default function BlogIndexPage() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Blog", href: routeConfig.path }])]} />
      <Revealable>
        <PageHero title="GDS Media Insights & Blog" subtitle="Practical guides, insights, and strategies on AI advertising, video marketing, and sales automation for Indian businesses." badge="Blog" breadcrumbs={[{ label: "Blog", href: routeConfig.path }]}   videoSrc="/videos/about-hero.mp4" />
      </Revealable>
      <Revealable>
        <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          {POSTS.map((post) => (
            <article key={post.slug} className="bg-brand-surface border border-brand-blue/10 p-8 rounded-2xl">
              <span className="text-xs text-brand-blue font-semibold">{post.date}</span>
              <h2 className="font-display text-2xl font-bold text-brand-ink mt-2 mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand-blue transition-colors">{post.title}</Link>
              </h2>
              <p className="text-brand-ink/70 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-brand-blue hover:underline">Read Article →</Link>
            </article>
          ))}
        </div>
      </section>
      </Revealable>
      <CtaSection />
    </div>
  );
}
