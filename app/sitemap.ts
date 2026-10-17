import { MetadataRoute } from "next";
import { routes, SITE_URL } from "@/lib/routes";
import { getAllBlogPosts } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFreq ?? "monthly",
    priority: route.priority ?? 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
