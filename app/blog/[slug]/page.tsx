import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { PageHero, CtaSection } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";
import { getBlogPost } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/routes";
import Revealable from "@/components/animations/Revealable";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.description,
    path: `/blog/${slug}`,
    ogImage: post.heroImage.startsWith("http") ? post.heroImage : `${SITE_URL}${post.heroImage}`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const schemas: Record<string, unknown>[] = [
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
      image: post.heroImage.startsWith("http") ? post.heroImage : `${SITE_URL}${post.heroImage}`,
    }),
  ];
  if (post.faqs && post.faqs.length > 0) {
    schemas.push(faqSchema(post.faqs));
  }

  return (
    <div>
      <JsonLd data={schemas} />

      <Revealable>
        <PageHero
          title={post.title}
          subtitle={`Published on ${post.date} · GDS Media Insights`}
          badge="Article"
          breadcrumbs={[
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${slug}` },
          ]}
          videoSrc="/videos/about-hero.mp4" />
      </Revealable>

      <Revealable>
      <article className="py-16 px-4 max-w-3xl mx-auto">
        {!post.heroImage.startsWith("/og/") && (
          <div className="relative w-full aspect-[16/9] mb-12 overflow-hidden rounded-xl border border-brand-blue/10">
            <Image
              src={post.heroImage}
              alt={post.heroImageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        <div className="prose prose-invert max-w-none text-brand-ink/80 leading-relaxed">
          <p className="text-lg font-medium text-brand-blue mb-8">{post.description}</p>

          {post.blocks.map((block, i) => {
            if (block.type === "heading") {
              const Tag = block.level === 2 ? "h2" : "h3";
              return (
                <Tag
                  key={i}
                  className={`font-display font-bold text-brand-ink ${
                    block.level === 2
                      ? "text-2xl sm:text-3xl mt-12 mb-4"
                      : "text-xl sm:text-2xl mt-8 mb-3"
                  }`}
                >
                  {block.text}
                </Tag>
              );
            }
            if (block.type === "list") {
              const ListTag = block.style === "ordered" ? "ol" : "ul";
              return (
                <ListTag
                  key={i}
                  className={`space-y-2 mb-6 pl-6 ${block.style === "ordered" ? "list-decimal" : "list-disc"}`}
                >
                  {block.items.map((item, j) => (
                    <li key={j} className="text-brand-ink/80">{item}</li>
                  ))}
                </ListTag>
              );
            }
            if (block.type === "callout") {
              return (
                <div
                  key={i}
                  className="not-prose mb-10 border-l-4 border-brand-blue bg-brand-blue/5 px-6 py-5"
                >
                  <p className="font-display text-xs font-bold uppercase tracking-widest text-brand-blue mb-2">
                    {block.label}
                  </p>
                  <p className="text-brand-ink/90 leading-relaxed">{block.text}</p>
                </div>
              );
            }
            if (block.type === "table") {
              return (
                <div key={i} className="not-prose mb-8 overflow-x-auto border border-brand-blue/15">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-brand-blue/10">
                        {block.headers.map((h, hIdx) => (
                          <th
                            key={hIdx}
                            className="text-left font-display font-bold text-brand-ink px-4 py-3 border-b border-brand-blue/15"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 1 ? "bg-brand-surface/40" : undefined}>
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className="align-top text-brand-ink/80 px-4 py-3 border-b border-brand-blue/10 leading-relaxed"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            return (
              <p key={i} className="mb-6">
                {block.text}
              </p>
            );
          })}
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <section className="mt-16 pt-12 border-t border-brand-blue/10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-ink mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {post.faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-display text-lg font-bold text-brand-blue mb-2">
                    {i + 1}. {faq.question}
                  </h3>
                  <p className="text-brand-ink/80 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="border-t border-brand-blue/10 pt-8 mt-12">
          <p className="text-sm text-brand-ink/50">
            Have questions about implementing AI marketing in your business?{" "}
            <Link href="/contact" className="text-brand-blue hover:underline">
              Book a free strategy call
            </Link>{" "}
            with our team.
          </p>
        </div>
      </article>
      </Revealable>

      <CtaSection />
    </div>
  );
}
