import type { Metadata } from "next"
import { PageAds } from "@/components/page-ads"
import { SidebarAds } from "@/components/sidebar-ads"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
  title: "Pensión de Alimentos: Cómo se Calcula y Qué Hacer si No Pagan | LegalPO",
  description:
    "Todo lo que necesitas saber sobre la pensión de alimentos en Chile: cómo se solicita, cómo se calcula y qué hacer si no pagan.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/pension-alimentos",
  },
}

export default function PensionAlimentosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageAds />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Pensión de Alimentos: Todo lo que necesitas saber</h1>

          <p className="text-lg mb-6">
            La pensión de alimentos en Chile es un derecho de niños, niñas y adolescentes. Se calcula considerando las
            necesidades del menor y la capacidad económica del alimentante.
          </p>

          <AdUnit slot="1357924680" format="horizontal" position="in-content" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">¿Cómo se solicita?</h2>
          <p className="mb-6">
            A través del Juzgado de Familia. Puedes hacerlo con patrocinio de un abogado o mediante la Corporación de
            Asistencia Judicial.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">¿Qué pasa si no pagan?</h2>
          <p className="mb-4">
            Desde 2022 existe el Registro Nacional de Deudores de Alimentos. Si alguien debe más de 3 cuotas
            consecutivas o 5 discontinuas, se pueden tomar medidas como:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Retención de devolución de impuestos.</li>
            <li>Bloqueo de créditos.</li>
            <li>Suspensión de licencia de conducir.</li>
          </ul>

          <AdUnit slot="2468013579" format="horizontal" position="in-content" />

          <p className="text-lg font-semibold mt-8">
            En LegalPO puedes obtener cálculos estimados y documentos listos para presentar.
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
