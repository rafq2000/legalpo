import type { Metadata } from "next"
import { PageAds } from "@/components/page-ads"
import { SidebarAds } from "@/components/sidebar-ads"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
  title: "Herencias en Chile: Cómo funciona la sucesión | LegalPO",
  description:
    "Aprende cómo funciona la herencia en Chile, quiénes son los herederos forzosos y cómo realizar la posesión efectiva.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/herencias",
  },
}

export default function HerenciasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageAds />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">¿Falleció un familiar? Así funciona la herencia en Chile</h1>

          <p className="text-lg mb-6">
            Cuando una persona fallece, su patrimonio se transmite a sus herederos. En Chile, los herederos forzosos
            son:
          </p>

          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Hijos/as.</li>
            <li>Padres (si no hay hijos).</li>
            <li>Cónyuge o conviviente civil.</li>
          </ol>

          <AdUnit slot="1357924680" format="horizontal" position="in-content" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">¿Necesito hacer posesión efectiva?</h2>
          <p className="mb-4">Sí. Este trámite legal es obligatorio y puede hacerse:</p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>En el Registro Civil (si no hay testamento).</li>
            <li>En Tribunales (si hay testamento o bienes complejos).</li>
          </ul>

          <p className="mb-6">Una vez aceptada, podrás vender bienes, transferir autos o disponer de cuentas.</p>

          <AdUnit slot="2468013579" format="horizontal" position="in-content" />

          <p className="text-lg font-semibold mt-8">
            LegalPO puede ayudarte a calcular lo que te corresponde y a redactar los documentos necesarios.
          </p>
        </div>

        <div className="lg:col-span-1">
          <SidebarAds />
        </div>
      </div>

      <PageAds />
    </div>
  )
}
