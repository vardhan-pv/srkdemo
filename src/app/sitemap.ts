import { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS.seo.canonical;
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    // Future service pages — add when content is ready
    // { url: `${baseUrl}/home-interiors-chintamani`, ... },
    // { url: `${baseUrl}/modular-kitchen-chintamani`, ... },
    // { url: `${baseUrl}/projects`, ... },
  ];
}
