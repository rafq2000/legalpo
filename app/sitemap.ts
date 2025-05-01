import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://legalpo.cl"

  // Rutas principales del sitio
  const routes = [
    "",
    "/analyze",
    "/ask",
    "/dudas-laborales",
    "/calculadora-finiquito",
    "/calculadora-pensiones",
    "/calculadora-herencia",
    "/contratos",
    "/generador-contratos",
    "/acerca",
    "/quienes-somos",
    "/como-funciona",
    "/caracteristicas",
    "/privacidad",
    "/terminos",
    "/terminos-legales",
    "/ayuda-analizador",
    // Nuevas páginas de contenido legal
    "/accidentes-transito",
    "/pension-alimentos",
    "/herencias",
    "/finiquito-chile",
    "/derechos-consumidor",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }))
}
