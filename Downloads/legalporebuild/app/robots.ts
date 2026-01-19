import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/_next/", "/static/", "/adsense-test/", "/ask/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/adsense-test/", "/ask/"],
      },
    ],
    sitemap: "https://legalpo.cl/sitemap.xml",
    host: "https://legalpo.cl",
  }
}
