import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "LegalPo Chile - Asesoría Legal Online",
  description: "Plataforma legal chilena con calculadoras, herramientas y asesoría jurídica especializada.",
}

export default function EsClPage() {
  redirect("/")
}
