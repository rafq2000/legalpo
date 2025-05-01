import { Suspense } from "react"
import type { Metadata } from "next"
import StatsDashboard from "@/components/admin/stats-dashboard"
import SupabaseDiagnostics from "@/components/admin/supabase-diagnostics"
import { Skeleton } from "@/components/ui/skeleton"
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
          <TabsTrigger value="diagnostics">Diagnóstico</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Suspense fallback={<StatsLoading />}>
            <StatsDashboard />
          </Suspense>
        </TabsContent>

        <TabsContent value="diagnostics">
          <SupabaseDiagnostics />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function StatsLoading() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-10 w-[200px]" />
      </div>
      <div className="grid gap-6">
        <Skeleton className="h-[300px] w-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Skeleton className="h-[120px]" />
          <Skeleton className="h-[120px]" />
          <Skeleton className="h-[120px]" />
        </div>
      </div>
    </div>
  )
}
