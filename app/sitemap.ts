import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kamuran.dev",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
