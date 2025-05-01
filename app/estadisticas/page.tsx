import AdminGuard from "@/components/admin-guard"
import StatsDashboard from "@/components/stats-dashboard"

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
