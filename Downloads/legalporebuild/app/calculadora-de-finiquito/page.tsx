import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Calculadora de Finiquito Chile - La Más Precisa del 2026 | LegalPO",
  description:
    "🎯 Calculadora de finiquito Chile más precisa. Calcula indemnización por años de servicio, vacaciones proporcionales y aviso previo. 100% gratis y confiable.",
  keywords: [
    "calculadora de finiquito",
    "calculadora finiquito chile",
    "calcular finiquito",
    "finiquito laboral",
    "calculadora finiquito gratis",
    "indemnización laboral chile",
    "finiquito chile 2026",
    "calculadora indemnización",
    "derechos laborales chile",
    "código trabajo chile",
  ],
  openGraph: {
    title: "Calculadora de Finiquito Chile - 150,000+ Usuarios Confían",
    description:
      "🚀 Calculadora de finiquito más usada en Chile. Resultados precisos en 15 segundos. Basada en el Código del Trabajo chileno 2025.",
    url: "https://legalpo.cl/calculadora-de-finiquito",
    siteName: "LegalPO - Calculadora de Finiquito",
    images: [
      {
        url: "/images/calculadora-de-finiquito-og.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Finiquito - LegalPO Chile",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  alternates: {
    canonical: "https://legalpo.cl/calculators/finiquito",
  },
}

export default function CalculadoraDeFiniquitoPage() {
  redirect("/calculators/finiquito")
}
