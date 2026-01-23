import type { MetadataRoute } from "next"
import { comunasChile } from "@/lib/comunas-chile"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://legalpo.cl"
  // Fecha de última actualización del sitio - actualizar manualmente cuando hay cambios importantes
  const lastUpdate = "2026-01-21T00:00:00.000Z"

  // Main pages
  const mainPages = [
    { url: baseUrl, lastModified: lastUpdate, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${baseUrl}/herramientas`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/como-funciona`, lastModified: lastUpdate, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/quienes-somos`, lastModified: lastUpdate, changeFrequency: "monthly" as const, priority: 0.7 },
  ]

  // Calculator pages - High priority for SEO
  const calculatorPages = [
    { url: `${baseUrl}/calculators/finiquito`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/calculators/pension-alimentos`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/calculators/herencia`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/calculators/indemnizacion`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/calculators/reajuste-pension`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/calculators/feriado-legal`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/calculators/embargo-sueldo`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
  ]

  // Legal content pages
  const legalContentPages = [
    { url: `${baseUrl}/dudas-laborales`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/herencias`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/accidentes-transito`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/suplantacion-identidad`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/consulta-familia`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/ia-legal-chile`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.9 },
  ]

  // Tool pages
  const toolPages = [
    { url: `${baseUrl}/tools/document-analyzer`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/tools/contract-generator`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/generador-contratos`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/analisis-legal-documentos`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/carta-de-renuncia`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
  ]

  // SEO landing pages for calculator keywords
  const seoLandingPages = [
    { url: `${baseUrl}/calculadora-de-finiquito`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/calculadora-finiquito`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/calculadora-finiquito-chile`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/calcular-finiquito`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/como-calcular-finiquito`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/finiquito-calculadora`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/finiquito-chile`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/calculadora-pensiones`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/como-calcular-pension-alimentos`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/como-calcular-herencia`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/calculadora-sueldo-liquido`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/valor-minimo-pension-alimentos`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
  ]

  // FAQ and Guide pages - High priority for SEO
  const faqAndGuidePages = [
    { url: `${baseUrl}/preguntas-frecuentes`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/guias`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/guias/como-calcular-finiquito-completo`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/pension-alimentos-2026`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/dicom-chile`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/despido-injustificado`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/consultas-legales-gratis`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
  ]

  // Specialty lawyer pages - High priority for SEO
  const specialtyPages = [
    { url: `${baseUrl}/abogado-laboral`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/abogado-familia`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/abogado-arriendos`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/abogado-deudas`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/abogado-herencias`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/abogado-accidentes`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.95 },
  ]


  // Local SEO - 100 Comunas de Chile
  const comunaPages = [
    { url: `${baseUrl}/abogado`, lastModified: lastUpdate, changeFrequency: "weekly" as const, priority: 0.9 },
    ...comunasChile.map((comuna) => ({
      url: `${baseUrl}/abogado/${comuna.slug}`,
      lastModified: lastUpdate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ]

  // Legal pages
  const legalPages = [
    { url: `${baseUrl}/politicas-privacidad`, lastModified: lastUpdate, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/privacidad`, lastModified: lastUpdate, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terminos-servicio`, lastModified: lastUpdate, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terminos-legales`, lastModified: lastUpdate, changeFrequency: "yearly" as const, priority: 0.3 },
  ]

  return [
    ...mainPages,
    ...calculatorPages,
    ...legalContentPages,
    ...toolPages,
    ...seoLandingPages,
    ...faqAndGuidePages,
    ...specialtyPages,
    ...comunaPages,
    ...legalPages,
  ]
}

