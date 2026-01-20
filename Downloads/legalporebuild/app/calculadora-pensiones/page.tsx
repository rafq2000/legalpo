import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Calculadora de Pensiones Alimenticias - LegalPo Chile",
  description: "Calcula pensiones alimenticias según la ley chilena.",
}

export default function CalculadoraPensionesPage() {
  redirect("/calculators/pension-alimentos")
}
