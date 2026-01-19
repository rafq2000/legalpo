import type React from "react"
import type { Metadata } from "next"
import ProtectedRoute from "@/components/protected-route"

export const metadata: Metadata = {
  title: "🥇 Calculadora de Finiquito Chile 2025 - La Más Precisa y Gratis | LegalPO",
  description:
    "Calculadora de finiquito Chile #1 - La más precisa y confiable. Calcula tu indemnización por años de servicio, vacaciones proporcionales, aviso previo. +100,000 usuarios. 100% gratis y basada en ley chilena 2025.",
  keywords: [
    "calculadora finiquito chile",
    "calculadora de finiquito",
    "calcular finiquito chile",
    "finiquito laboral chile",
    "calculadora finiquito gratis",
    "finiquito chile 2025",
    "indemnización años servicio",
    "calculadora indemnización chile",
    "finiquito online chile",
    "como calcular finiquito",
    "finiquito despido chile",
    "calculadora finiquito precisa",
    "finiquito laboral gratis",
    "derechos laborales chile",
    "código trabajo chile",
    "vacaciones proporcionales",
    "aviso previo indemnización",
    "gratificaciones proporcionales",
    "calculadora legal chile",
    "calculadora finiquito confiable",
    "calculadora finiquito 2025",
    "finiquito calculadora online",
    "calculadora finiquito trabajadores",
    "calculadora finiquito empleados",
  ].join(", "),
  authors: [{ name: "LegalPO - Calculadora Finiquito Chile" }],
  creator: "LegalPO",
  publisher: "LegalPO - Calculadora de Finiquito Chile",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://legalpo.cl"),
  alternates: {
    canonical: "/calculators/finiquito",
  },
  openGraph: {
    title: "🥇 Calculadora de Finiquito Chile 2025 - La Más Precisa y Confiable",
    description:
      "Calculadora de finiquito Chile #1. Calcula tu indemnización por años de servicio, vacaciones proporcionales y más. +100,000 usuarios confían en nosotros. 100% gratis.",
    url: "https://legalpo.cl/calculators/finiquito",
    siteName: "LegalPO - Calculadora Finiquito Chile",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/images/calculadora-finiquito-chile-2025.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Finiquito Chile 2025 - LegalPO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🥇 Calculadora de Finiquito Chile 2025 - La Más Precisa",
    description:
      "Calculadora de finiquito Chile #1. Calcula tu indemnización por años de servicio, vacaciones proporcionales y más. +100,000 usuarios. 100% gratis.",
    images: ["/images/calculadora-finiquito-chile-2025.jpg"],
    creator: "@LegalPOChile",
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
  other: {
    // "google-site-verification": "TU_CODIGO_AQUI", 
  },
}

export default function CalculadoraFiniquitoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProtectedRoute>{children}</ProtectedRoute>
}
