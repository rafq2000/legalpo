import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Calculadora de Finiquito - LegalPo Chile 2026",
  description: "🎯 Calcula tu finiquito según la legislación laboral chilena 2026. Indemnización por años de servicio, vacaciones proporcionales y más. 100% gratis.",
  alternates: {
    canonical: "https://legalpo.cl/calculators/finiquito",
  },
}

export default function CalculadoraFiniquitoPage() {
  redirect("/calculators/finiquito")
}
