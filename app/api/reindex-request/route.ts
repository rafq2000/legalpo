import { NextResponse } from "next/server"

// Esta API envía solicitudes a Google para reindexar páginas importantes
export async function GET() {
  const importantUrls = [
    "https://legalpo.cl/calculadora-pensiones",
    "https://legalpo.cl/calculadora-finiquito",
    "https://legalpo.cl/calculadora-herencia",
    "https://legalpo.cl/contratos/arriendo",
    "https://legalpo.cl/contratos/trabajo",
    "https://legalpo.cl/analyze",
    "https://legalpo.cl/dudas-laborales",
    "https://legalpo.cl/deudas",
    "https://legalpo.cl/consulta-familia",
  ]

  // Esto es solo para registrar que se ha hecho la solicitud
  // La reindexación real debe hacerse a través de Google Search Console
  const results = importantUrls.map((url) => ({
    url,
    status: "requested",
    timestamp: new Date().toISOString(),
  }))

  return NextResponse.json({
    success: true,
    message: "Reindex requests logged. Please submit these URLs manually in Google Search Console.",
    results,
  })
}
