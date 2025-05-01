import AdminGuard from "@/components/admin-guard"
import dynamic from "next/dynamic"

// Importar el componente StatsDashboard dinámicamente para evitar errores de SSR
const StatsDashboard = dynamic(() => import("@/components/stats-dashboard"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4">Cargando dashboard...</p>
      </div>
    </div>
  ),
})

export const metadata = {
  title: "Estadísticas - LegalPO",
  description: "Panel de estadísticas y análisis de eventos",
}

export default function EstadisticasPage() {
  return (
    <AdminGuard>
      <StatsDashboard />
    </AdminGuard>
  )
}
