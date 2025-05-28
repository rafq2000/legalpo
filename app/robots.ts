import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/auth/", "/login", "/register", "/registro", "/*?callbackUrl=*", "/*?callback=*"],
    },
    sitemap: "https://legalpo.cl/sitemap.xml",
  }
}
