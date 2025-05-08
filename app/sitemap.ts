import type { MetadataRoute } from "next"
import { getCiudades } from "@/lib/ciudades"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://legalpo.cl"

  // Obtener todas las ciudades
  const ciudades = await getCiudades()

  // Crear entradas de sitemap para las páginas de ciudades
  const ciudadesSitemap = ciudades.map((ciudad) => ({
    url: `${baseUrl}/abogados-en-${ciudad.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Páginas principales del sitio
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/asesoria-legal`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    // Otras páginas principales...
  ]

  return [...mainPages, ...ciudadesSitemap]
}
