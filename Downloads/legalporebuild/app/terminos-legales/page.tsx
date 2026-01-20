import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Términos Legales - LegalPo Chile",
  description: "Términos y condiciones legales de uso de la plataforma LegalPo Chile.",
}

export default function TerminosLegalesPage() {
  redirect("/terminos-servicio")
}
