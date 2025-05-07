import type { Metadata } from "next"
import { PageAds } from "@/components/page-ads"
import { SidebarAds } from "@/components/sidebar-ads"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
  title: "Accidentes de Tránsito en Chile: Qué Hacer y Tus Derechos | LegalPO",
  description:
    "Aprende qué hacer después de un accidente de tránsito en Chile, conoce tus derechos, qué cubre el SOAP y cuándo demandar para recibir compensación.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/accidentes-transito",
  },
}

export default function AccidentesTransitoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageAds />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">¿Tuviste un accidente de tránsito? Conoce tus derechos en Chile</h1>

          <p className="text-lg mb-6">
            En Chile, toda persona que sufre un accidente de tránsito tiene derecho a recibir atención médica inmediata,
            determinar responsabilidades y, en ciertos casos, obtener una indemnización.
          </p>

          <AdUnit slot="1357924680" format="horizontal" position="in-content" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">¿Qué hacer tras un accidente?</h2>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Llamar al 133 (Carabineros).</li>
            <li>Registrar datos de los involucrados y testigos.</li>
            <li>Acudir al SAPU o servicio de urgencia.</li>
            <li>Ingresar una denuncia si corresponde.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-8 mb-4">¿Qué cubre el SOAP?</h2>
          <p className="mb-6">
            El Seguro Obligatorio cubre hasta 300 UF por fallecimiento o incapacidad, y gastos médicos hasta 300 UF.
          </p>

          <AdUnit slot="2468013579" format="horizontal" position="in-content" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">¿Debo demandar para recibir compensación?</h2>
          <p className="mb-6">
            Si hubo daños materiales o lesiones graves, puedes presentar una demanda civil. Si hay responsabilidad penal
            (por ejemplo, conducción en estado de ebriedad), puedes querellarte.
          </p>

          <p className="text-lg font-semibold mt-8">Consulta en LegalPO y analizamos tu caso gratis.</p>
        </div>

        <div className="lg:col-span-1">
          <SidebarAds />
        </div>
      </div>

      <PageAds />
    </div>
  )
}
