import type { MetadataRoute } from "next"

import { fullURL } from "@/lib/utils"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: fullURL().toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ]
}
