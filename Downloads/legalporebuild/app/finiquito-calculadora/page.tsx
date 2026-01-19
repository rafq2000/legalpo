import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Finiquito Calculadora Chile - Herramienta Gratuita 2026 | LegalPO",
  description:
    "⚡ Finiquito calculadora Chile más confiable. Calcula tu liquidación laboral con precisión. Incluye indemnización, vacaciones y aviso previo. 100% gratis.",
  keywords: [
    "finiquito calculadora",
    "finiquito calculadora chile",
    "calculadora finiquito",
    "finiquito laboral calculadora",
    "calculadora finiquito gratis",
    "finiquito chile calculadora",
    "calculadora indemnización finiquito",
    "herramienta calcular finiquito",
    "finiquito trabajador calculadora",
    "liquidación laboral calculadora",
  ],
  openGraph: {
    title: "Finiquito Calculadora Chile - Confiable y Precisa",
    description:
      "🎯 Finiquito calculadora más usada por trabajadores chilenos. Resultados instantáneos y precisos basados en la ley laboral vigente.",
    url: "https://legalpo.cl/finiquito-calculadora",
    siteName: "LegalPO - Finiquito Calculadora",
    images: [
      {
        url: "/images/finiquito-calculadora-og.jpg",
        width: 1200,
        height: 630,
        alt: "Finiquito Calculadora Chile - LegalPO",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  alternates: {
    canonical: "https://legalpo.cl/calculators/finiquito",
  },
}

export default function FiniquitoCalculadoraPage() {
  redirect("/calculators/finiquito")
}
