import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Calculadora de Herencias Chile - LegalPo",
  description: "Calcula la distribución de herencias según el Código Civil chileno.",
}

export default function HerenciasPage() {
  redirect("/calculators/herencia")
}
