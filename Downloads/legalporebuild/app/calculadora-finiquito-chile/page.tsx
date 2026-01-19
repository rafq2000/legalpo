import type { Metadata } from "next"
import { redirect, permanentRedirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Calculadora Finiquito Chile 2026 - Gratis y Precisa | LegalPO",
  description:
    "🥇 Calculadora de finiquito Chile #1. Calcula tu indemnización por años de servicio, vacaciones y aviso previo. 100% gratis, precisa y basada en la ley chilena 2026.",
  keywords: [
    "calculadora finiquito chile",
    "calculadora de finiquito",
    "calcular finiquito chile",
    "finiquito laboral chile",
    "calculadora finiquito gratis",
    "indemnización años servicio",
    "finiquito chile 2026",
    "como calcular finiquito",
    "calculadora indemnización",
    "finiquito trabajador chile",
  ],
  openGraph: {
    title: "Calculadora Finiquito Chile 2026 - La Más Precisa y Confiable",
    description:
      "🚀 Calculadora de finiquito Chile #1. Más de 150,000 trabajadores confían en nosotros. Calcula tu finiquito laboral gratis en 15 segundos.",
    url: "https://legalpo.cl/calculadora-finiquito-chile",
    siteName: "LegalPO - Calculadora Finiquito Chile",
    images: [
      {
        url: "/images/calculadora-finiquito-chile-og.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Finiquito Chile - LegalPO",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora Finiquito Chile 2026 - Gratis y Precisa",
    description:
      "🥇 La calculadora de finiquito más usada en Chile. 150,000+ usuarios. Calcula tu indemnización laboral gratis.",
    images: ["/images/calculadora-finiquito-chile-twitter.jpg"],
  },
  alternates: {
    canonical: "https://legalpo.cl/calculators/finiquito",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function CalculadoraFiniquitoChilePage() {
  permanentRedirect("/calculators/finiquito")
}
