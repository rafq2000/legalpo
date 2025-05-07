import type { Metadata } from "next"
import StatsDashboard from "@/components/admin/stats-dashboard"
import FirebaseDiagnostics from "@/components/admin/firebase-diagnostics"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Estadísticas | Panel de Administración",
  description: "Panel de estadísticas y métricas de usuarios",
}

export default function StatsPage() {
  return (
    <div className="container mx-auto py-10">
      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="diagnostics">Diagnóstico Firebase</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <StatsDashboard />
        </TabsContent>

        <TabsContent value="diagnostics">
          <FirebaseDiagnostics />
        </TabsContent>
      </Tabs>
    </div>
  )
}
