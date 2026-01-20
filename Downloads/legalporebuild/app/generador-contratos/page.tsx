import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Generador de Contratos - LegalPo Chile",
  description: "Genera contratos legales personalizados para Chile.",
}

export default function GeneradorContratosPage() {
  redirect("/tools/contract-generator")
}
