import { MetadataRoute } from "next";
import { routes, SITE_URL } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFreq ?? "monthly",
    priority: route.priority ?? 0.7,
  }));
}
