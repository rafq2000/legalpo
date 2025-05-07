import type { Metadata } from "next"
import { PageAds } from "@/components/page-ads"
import { SidebarAds } from "@/components/sidebar-ads"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
  title: "Finiquito en Chile: Qué debe contener y cómo calcularlo | LegalPO",
  description:
    "Conoce qué debe incluir un finiquito laboral en Chile, cómo calcularlo y qué hacer si no estás de acuerdo con el documento.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/finiquito-chile",
  },
}

export default function FiniquitoChilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageAds />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Finiquito laboral: tus derechos al terminar un contrato</h1>

          <p className="text-lg mb-6">
            El finiquito es el documento que formaliza el término de la relación laboral. Debe incluir:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Sueldo pendiente.</li>
            <li>Vacaciones proporcionales.</li>
            <li>Indemnización por años de servicio (si aplica).</li>
            <li>Otros pactos.</li>
          </ul>

          <AdUnit slot="1357924680" format="horizontal" position="in-content" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">¿Debo firmarlo inmediatamente?</h2>
          <p className="mb-6">
            No. Puedes revisarlo con calma y firmarlo ante notario. Si no estás conforme, puedes presentar un reclamo
            ante la Dirección del Trabajo o iniciar demanda laboral.
          </p>

          <AdUnit slot="2468013579" format="horizontal" position="in-content" />

          <p className="text-lg font-semibold mt-8">En LegalPO te ayudamos a revisar tu finiquito en segundos.</p>
        </div>

        <div className="lg:col-span-1">
          <SidebarAds />
        </div>
      </div>

      <PageAds />
    </div>
  )
}
