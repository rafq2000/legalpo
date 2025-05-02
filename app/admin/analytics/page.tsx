// Este es un componente de servidor por defecto
import { Suspense } from "react"
import AnalyticsClient from "./analytics-client"

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Panel de Análisis</h1>

      <Suspense fallback={<p>Cargando datos de análisis...</p>}>
        <AnalyticsClient />
      </Suspense>
    </div>
  )
}
