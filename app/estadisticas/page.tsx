import AdminGuard from "@/components/admin-guard"
import ClientDashboardWrapper from "./client-wrapper"

export const metadata = {
  title: "Estadísticas - LegalPO",
  description: "Panel de estadísticas y análisis de eventos",
}

export default function EstadisticasPage() {
  return (
    <AdminGuard>
      <ClientDashboardWrapper />
    </AdminGuard>
  )
}
