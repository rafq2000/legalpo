import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Finiquito Chile - Calculadora y Guía Legal 2026 | LegalPo",
  description: "✅ Todo sobre finiquitos en Chile 2026. Calculadora gratuita, guía legal y asesoría especializada. Calcula tu indemnización en segundos.",
  alternates: {
    canonical: "https://legalpo.cl/calculators/finiquito",
  },
}

export default function FiniquitoChilePage() {
  redirect("/calculators/finiquito")
}
