import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Calcular Finiquito Chile 2026 - Calculadora Gratis y Precisa | LegalPO",
  description:
    "🔥 Calcular finiquito Chile nunca fue tan fácil. Calculadora gratuita para obtener tu indemnización laboral exacta. Más de 150,000 trabajadores nos eligen.",
  keywords: [
    "calcular finiquito",
    "calcular finiquito chile",
    "calculadora finiquito",
    "como calcular finiquito",
    "finiquito laboral chile",
    "calcular indemnización",
    "finiquito chile 2026",
    "calculadora finiquito gratis",
    "derechos trabajador chile",
    "indemnización años servicio",
  ],
  openGraph: {
    title: "Calcular Finiquito Chile - La Herramienta #1 para Trabajadores",
    description:
      "💪 Calcular finiquito Chile de forma precisa y gratuita. Conoce tus derechos laborales y obtén la indemnización que te corresponde.",
    url: "https://legalpo.cl/calcular-finiquito",
    siteName: "LegalPO - Calcular Finiquito Chile",
    images: [
      {
        url: "/images/calcular-finiquito-og.jpg",
        width: 1200,
        height: 630,
        alt: "Calcular Finiquito Chile - LegalPO",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  alternates: {
    canonical: "https://legalpo.cl/calculators/finiquito",
  },
}

export default function CalcularFiniquitoPage() {
  redirect("/calculators/finiquito")
}
