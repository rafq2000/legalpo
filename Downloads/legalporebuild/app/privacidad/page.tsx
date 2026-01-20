import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Política de Privacidad - LegalPo Chile",
  description: "Política de privacidad y protección de datos de LegalPo Chile.",
}

export default function PrivacidadPage() {
  redirect("/politicas-privacidad")
}
