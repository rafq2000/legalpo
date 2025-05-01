"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import dynamic from "next/dynamic"
import { Calendar, Users, Clock, Activity, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/app/admin/estadisticas/date-range-picker"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "@/components/ui/use-toast"

// Importar componentes de gráficos dinámicamente para evitar errores de SSR
const DynamicLineChart = dynamic(() => import("recharts").then((mod) => mod.LineChart), { ssr: false })
const DynamicBarChart = dynamic(() => import("recharts").then((mod) => mod.BarChart), { ssr: false })
const DynamicPieChart = dynamic(() => import("recharts").then((mod) => mod.PieChart), { ssr: false })
const DynamicLine = dynamic(() => import("recharts").then((mod) => mod.Line), { ssr: false })
const DynamicBar = dynamic(() => import("recharts").then((mod) => mod.Bar), { ssr: false })
const DynamicPie = dynamic(() => import("recharts").then((mod) => mod.Pie), { ssr: false })
const DynamicCell = dynamic(() => import("recharts").then((mod) => mod.Cell), { ssr: false })
const DynamicXAxis = dynamic(() => import("recharts").then((mod) => mod.XAxis), { ssr: false })
const DynamicYAxis = dynamic(() => import("recharts").then((mod) => mod.YAxis), { ssr: false })
const DynamicCartesianGrid = dynamic(() => import("recharts").then((mod) => mod.CartesianGrid), { ssr: false })
const DynamicTooltip = dynamic(() => import("recharts").then((mod) => mod.Tooltip), { ssr: false })
const DynamicLegend = dynamic(() => import("recharts").then((mod) => mod.Legend), { ssr: false })
const DynamicResponsiveContainer = dynamic(() => import("recharts").then((mod) => mod.ResponsiveContainer), {
  ssr: false,
})

// Colores para gráficos
const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#0088fe",
  "#00c49f",
  "#ffbb28",
  "#ff8042",
  "#a4de6c",
  "#d0ed57",
]

// Definir la interfaz para las props
interface StatsDashboardProps {
  initialData?: any
}

export default function StatsDashboard({ initialData }: StatsDashboardProps) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [dateRange, setDateRange] = useState({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    to: new Date(),
  })
  const [statsData, setStatsData] = useState<any>(initialData || null)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [isLoading, setIsLoading] = useState(true)
  const [timeFrame, setTimeFrame] = useState("30d")
  const [error, setError] = useState<string | null>(null)
  const [isInitializing, setIsInitializing] = useState(false)
  const [dataSource, setDataSource] = useState<string>("loading")

  // Verificar autenticación
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login?callbackUrl=/admin/estadisticas")
    }
  }, [status, router])

  // Cargar datos
  useEffect(() => {
    if (status === "authenticated") {
      loadStats()
    }
  }, [status, dateRange])

  // Función para cargar estadísticas
  const loadStats = async () => {
    try {
      setIsLoading(true)
      setError(null)

      console.log("🔄 Cargando estadísticas...")

      const response = await fetch(
        `/api/admin/analytics?startDate=${dateRange.from.toISOString().split("T")[0]}&endDate=${dateRange.to.toISOString().split("T")[0]}&page=${currentPage}&pageSize=${pageSize}`,
      )

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${await response.text()}`)
      }

      const data = await response.json()
      setStatsData(data)
      setDataSource(data.dataSource || "api")

      console.log("✅ Estadísticas cargadas correctamente")
    } catch (error) {
      console.error("❌ Error al cargar estadísticas:", error)
      setError(`Error al cargar estadísticas: ${error instanceof Error ? error.message : "Error desconocido"}`)
    } finally {
      setIsLoading(false)
    }
  }

  // Función para inicializar tablas y vistas
  const initializeAnalytics = async () => {
    try {
      setIsInitializing(true)
      setError(null)

      console.log("🔄 Inicializando tablas y vistas de analítica...")

      const response = await fetch("/api/admin/analytics?setup=true")

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${await response.text()}`)
      }

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Analítica inicializada",
          description: "Las tablas y vistas de analítica se han creado correctamente.",
        })

        // Recargar datos
        loadStats()
      } else {
        throw new Error(data.message || "Error al inicializar analítica")
      }
    } catch (error) {
      console.error("❌ Error al inicializar analítica:", error)
      setError(`Error al inicializar analítica: ${error instanceof Error ? error.message : "Error desconocido"}`)

      toast({
        title: "Error",
        description: `No se pudo inicializar la analítica: ${error instanceof Error ? error.message : "Error desconocido"}`,
        variant: "destructive",
      })
    } finally {
      setIsInitializing(false)
    }
  }

  // Función para exportar datos de usuarios
  const exportUsersCSV = async () => {
    try {
      window.open(`/api/admin/export?type=users`, "_blank")
    } catch (error) {
      console.error("❌ Error al exportar usuarios:", error)
      setError(`Error al exportar usuarios: ${error instanceof Error ? error.message : "Error desconocido"}`)
    }
  }

  // Función para cambiar el rango de fechas según el timeframe seleccionado
  const handleTimeFrameChange = (value: string) => {
    setTimeFrame(value)
    const now = new Date()
    const from = new Date()

    switch (value) {
      case "7d":
        from.setDate(now.getDate() - 7)
        break
      case "30d":
        from.setDate(now.getDate() - 30)
        break
      case "90d":
        from.setDate(now.getDate() - 90)
        break
      case "1y":
        from.setFullYear(now.getFullYear() - 1)
        break
    }

    setDateRange({ from, to: now })
  }

  // Formatear duración en minutos a formato legible
  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  // Formatear fecha
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleDateString()
  }

  // Si está cargando o no autenticado, mostrar esqueleto
  if (status !== "authenticated" || !session) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Cargando panel de administración...</h1>
        <div className="grid gap-6">
          <Skeleton className="h-[200px] w-full" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-[120px]" />
            <Skeleton className="h-[120px]" />
            <Skeleton className="h-[120px]" />
          </div>
        </div>
      </div>
    )
  }

  // Extraer datos
  const dailyStats = statsData?.dailyStats || []
  const activeUsers = statsData?.activeUsers || { daily: 0, weekly: 0, monthly: 0 }
  const totalUsers = statsData?.totalUsers || 0
  const totalSessions = statsData?.totalSessions || 0
  const avgSessionDuration = statsData?.avgSessionDuration || 0
  const mostVisitedPages = statsData?.mostVisitedPages || []
  const trafficSources = statsData?.trafficSources || []
  const users = statsData?.users || []
  const visitors = statsData?.visitors || 0
  const documents = statsData?.documents || 0
  const queries = statsData?.queries || 0
  const docRate = statsData?.docRate || 0
  const queryRate = statsData?.queryRate || 0

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Panel de Administración</h1>
          <p className="text-muted-foreground">
            Estadísticas y métricas de usuarios
            {dataSource !== "loading" && (
              <span className="ml-2 text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">
                {dataSource === "supabase"
                  ? "✅ Datos reales (Supabase)"
                  : dataSource === "google_analytics"
                    ? "✅ Datos reales (Google Analytics)"
                    : dataSource === "sample"
                      ? "⚠️ Datos de ejemplo"
                      : `🔍 ${dataSource}`}
              </span>
            )}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <Button
            variant="outline"
            onClick={initializeAnalytics}
            disabled={isInitializing}
            className="flex items-center"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isInitializing ? "animate-spin" : ""}`} />
            {isInitializing ? "Inicializando..." : "Inicializar Datos"}
          </Button>
          <Select value={timeFrame} onValueChange={handleTimeFrameChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Últimos 7 días</SelectItem>
              <SelectItem value="30d">Últimos 30 días</SelectItem>
              <SelectItem value="90d">Últimos 90 días</SelectItem>
              <SelectItem value="1y">Último año</SelectItem>
            </SelectContent>
          </Select>

          <DatePickerWithRange date={dateRange} onDateChange={setDateRange} />
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}
            <div className="mt-2 text-sm">
              <p>Posibles causas:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>No se ha configurado correctamente la conexión con Supabase</li>
                <li>No se ha configurado correctamente la conexión con Google Analytics</li>
                <li>El servidor no puede acceder a las APIs externas</li>
              </ul>
              <p className="mt-2">
                Verifica las variables de entorno NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_KEY, GA4_PROPERTY_ID,
                GOOGLE_CLIENT_EMAIL y GOOGLE_PRIVATE_KEY.
              </p>
            </div>
          </AlertDescription>
        </Alert>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="pages">Páginas</TabsTrigger>
          <TabsTrigger value="users">Usuarios</TabsTrigger>
          <TabsTrigger value="traffic">Tráfico</TabsTrigger>
          <TabsTrigger value="conversion">Conversión</TabsTrigger>
        </TabsList>

        {/* Pestaña de Resumen */}
        <TabsContent value="overview" className="space-y-4">
          {isLoading ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-[120px]" />
              ))}
            </div>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Usuarios</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{totalUsers}</div>
                    <p className="text-xs text-muted-foreground">
                      +{dailyStats.reduce((sum, day) => sum + (day.new_users || 0), 0)} nuevos en este período
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Usuarios Activos</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{activeUsers.daily}</div>
                    <p className="text-xs text-muted-foreground">
                      {activeUsers.weekly} semanales | {activeUsers.monthly} mensuales
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sesiones</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{totalSessions}</div>
                    <p className="text-xs text-muted-foreground">En el período seleccionado</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Tiempo Promedio</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{formatDuration(Math.round(avgSessionDuration / 60))}</div>
                    <p className="text-xs text-muted-foreground">Por sesión</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Actividad de Usuarios</CardTitle>
                  <CardDescription>Usuarios activos y nuevos registros en el período seleccionado</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <DynamicResponsiveContainer width="100%" height={350}>
                    <DynamicLineChart
                      data={dailyStats}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <DynamicCartesianGrid strokeDasharray="3 3" />
                      <DynamicXAxis
                        dataKey="date"
                        tickFormatter={(date) =>
                          new Date(date).toLocaleDateString(undefined, { day: "2-digit", month: "2-digit" })
                        }
                      />
                      <DynamicYAxis />
                      <DynamicTooltip
                        formatter={(value: number) => [value, ""]}
                        labelFormatter={(date) => new Date(date).toLocaleDateString()}
                      />
                      <DynamicLegend />
                      <DynamicLine
                        type="monotone"
                        dataKey="active_users"
                        name="Usuarios Activos"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      <DynamicLine type="monotone" dataKey="new_users" name="Nuevos Usuarios" stroke="#82ca9d" />
                    </DynamicLineChart>
                  </DynamicResponsiveContainer>
                </CardContent>
              </Card>
            </>
          )}
        </TabsContent>

        {/* Otras pestañas omitidas por brevedad */}
      </Tabs>
    </div>
  )
}
