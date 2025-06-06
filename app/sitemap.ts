import type { MetadataRoute } from "next"
import { cities } from "@/lib/cities"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.legalpo.cl"

  // Rutas que no deben incluirse en el sitemap
  const excludedRoutes = [
    "/login",
    "/register",
    "/registro",
    "/auth",
    "/admin",
    "/api",
    "/test-adsense",
    "/test-ads",
    "/test-firebase",
    "/check-firebase-env",
    "/test-eventos",
    "/site.webmanifest",
    "/contratos/personalizado", // Redirige a generador-contratos
  ]

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
    "/ask",
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

  // Generar rutas para las páginas de ciudades
  const cityRoutes = cities.map((city) => `/abogados-en-${city.toLowerCase().replace(/ /g, "-")}`)

  // Página de abogados por ciudad
  const lawyerRoutes = ["/abogados-por-ciudad"]

  const allRoutes = [...routes, ...toolRoutes, ...legalInfoRoutes, ...cityRoutes, ...lawyerRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === ""
        ? "daily"
        : route.includes("/calculadora-") || route.includes("/generador-")
          ? "weekly"
          : route.includes("/abogados-en-")
            ? "monthly"
            : "weekly",
    priority:
      route === ""
        ? 1.0
        : route.includes("/generador-") || route.includes("/calculadora-")
          ? 0.9
          : route.includes("/abogados-en-")
            ? 0.8
            : route.includes("/accidentes-transito") ||
                route.includes("/finiquito-chile") ||
                route.includes("/herencias")
              ? 0.8
              : 0.7,
  }))
}
