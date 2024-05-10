import { fullURL } from "@/lib/utils/url-fns/full-url"
import type { MetadataRoute } from "next"

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
