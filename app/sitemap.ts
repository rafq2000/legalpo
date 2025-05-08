import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://legalpo.cl"

  // Rutas principales del sitio
  const routes = [
    "",
    "/analyze",
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
    // Páginas de contenido legal
    "/accidentes-transito",
    "/pension-alimentos",
    "/herencias",
    "/finiquito-chile",
    "/derechos-consumidor",
    "/consulta-deudas",
    "/deudas",
    "/consulta-familia",
    "/laboral",
  ]

  // Páginas de herramientas y servicios
  const toolRoutes = [
    "/contratos/arriendo",
    "/contratos/trabajo",
    "/contratos/general",
    "/generador-contratos/laboral",
    "/generador-contratos/servicios",
    "/generador-contratos/personalizado",
  ]

  // Páginas de información legal específica
  const legalInfoRoutes = [
    "/deudas-prescritas",
    "/derechos-deudor",
    "/victima-delito",
    "/cobros-excesivos",
    "/clonacion-tarjeta",
    "/arriendo-falso",
    "/hackeo-whatsapp",
    "/cobranza-falsa",
    "/estafas-internet",
    "/suplantacion-identidad",
    "/informacion-legal",
  ]

  // Combinar todas las rutas
  const allRoutes = [...routes, ...toolRoutes, ...legalInfoRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.includes("/generador-") || route.includes("/calculadora-") ? 0.9 : 0.8,
  }))
}
