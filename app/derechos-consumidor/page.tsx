import type { Metadata } from "next"
import { PageAds } from "@/components/page-ads"
import { SidebarAds } from "@/components/sidebar-ads"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
  title: "Derechos del Consumidor en Chile: Garantías, Devoluciones y Más | LegalPO",
  description:
    "Conoce tus derechos como consumidor en Chile: garantías, devoluciones y qué hacer si una empresa no responde a tus reclamos.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/derechos-consumidor",
  },
}

export default function DerechosConsumidorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageAds />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">¿Te vendieron un producto defectuoso? Conoce tus derechos</h1>

          <p className="text-lg mb-6">El SERNAC garantiza que, si compras un producto con fallas, puedes:</p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Cambiarlo.</li>
            <li>Repararlo.</li>
            <li>Recuperar tu dinero (en 3 meses desde la compra).</li>
          </ul>

          <AdUnit slot="1357924680" format="horizontal" position="in-content" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">¿Qué pasa si una empresa no responde?</h2>
          <p className="mb-6">
            Puedes reclamar ante SERNAC o acudir a un Juzgado de Policía Local. Incluso puedes pedir indemnización por
            daño moral si corresponde.
          </p>

          <AdUnit slot="2468013579" format="horizontal" position="in-content" />

          <p className="text-lg font-semibold mt-8">
            LegalPO puede ayudarte a redactar tu reclamo y guiarte en el proceso.
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
