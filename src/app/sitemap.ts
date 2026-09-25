import type { MetadataRoute } from "next";
import { SEO } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SEO.siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
