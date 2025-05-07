import { Suspense } from "react"
import { FirebaseErrorBoundary } from "@/components/firebase-error-boundary"
import StatsDashboard from "@/components/stats-dashboard"

export default function EstadisticasPage() {
  return (
    <div className="container mx-auto py-6">
      <FirebaseErrorBoundary>
        <Suspense fallback={<div>Cargando estadísticas...</div>}>
          <StatsDashboard />
        </Suspense>
      </FirebaseErrorBoundary>
    </div>
  )
}
