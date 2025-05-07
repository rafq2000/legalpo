"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import dynamic from "next/dynamic"
import { Users, Activity, RefreshCw, MousePointer, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/app/admin/estadisticas/date-range-picker"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "@/components/ui/use-toast"
import {
  getEventStats,
  getMostVisitedPages,
  getDailyUserStats,
  getTrafficSources,
  type EventStats,
  type PageView,
  type DailyStats,
} from "@/lib/firebase-stats-service"

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
  const [statsData, setStatsData] = useState<EventStats | null>(null)
  const [mostVisitedPages, setMostVisitedPages] = useState<PageView[]>([])
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([])
  const [trafficSources, setTrafficSources] = useState<{ source: string; count: number }[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [timeFrame, setTimeFrame] = useState("30d")
  const [error, setError] = useState<string | null>(null)

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

      console.log("🔄 Cargando estadísticas desde Firebase...")

      // Calcular días entre las fechas
      const days = Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))

      // Cargar datos en paralelo
      const [stats, pages, daily, traffic] = await Promise.all([
        getEventStats(days),
        getMostVisitedPages(days),
        getDailyUserStats(days),
        getTrafficSources(days),
      ])

      setStatsData(stats)
      setMostVisitedPages(pages)
      setDailyStats(daily)
      setTrafficSources(traffic)

      console.log("✅ Estadísticas cargadas correctamente")

      toast({
        title: "Datos actualizados",
        description: `Se han cargado ${stats.totalEvents} eventos de los últimos ${days} días.`,
      })
    } catch (error) {
      console.error("❌ Error al cargar estadísticas:", error)
      setError(`Error al cargar estadísticas: ${error instanceof Error ? error.message : "Error desconocido"}`)

      toast({
        title: "Error",
        description: "No se pudieron cargar las estadísticas. Intente nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
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

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Panel de Administración</h1>
          <p className="text-muted-foreground">
            Estadísticas y métricas de usuarios
            <span className="ml-2 text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">
              ✅ Datos de Firebase Firestore
            </span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <Button variant="outline" onClick={loadStats} disabled={isLoading} className="flex items-center">
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            {isLoading ? "Cargando..." : "Actualizar"}
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
                <li>No se ha configurado correctamente la conexión con Firebase</li>
                <li>No hay suficientes permisos para acceder a Firestore</li>
                <li>El servidor no puede acceder a las APIs externas</li>
              </ul>
              <p className="mt-2">
                Verifica las variables de entorno de Firebase y asegúrate de que estén correctamente configuradas.
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
                    <CardTitle className="text-sm font-medium">Total Eventos</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{statsData?.totalEvents || 0}</div>
                    <p className="text-xs text-muted-foreground">Eventos registrados en el período</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Usuarios Únicos</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{statsData?.uniqueUsers || 0}</div>
                    <p className="text-xs text-muted-foreground">
                      {statsData?.registeredEmails || 0} con email registrado
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Clics WhatsApp</CardTitle>
                    <MousePointer className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{statsData?.whatsappClicks || 0}</div>
                    <p className="text-xs text-muted-foreground">Contactos vía WhatsApp</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Página Popular</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-medium truncate">{statsData?.mostPopularPage?.path || "N/A"}</div>
                    <p className="text-xs text-muted-foreground">{statsData?.mostPopularPage?.views || 0} visitas</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Actividad de Usuarios</CardTitle>
                  <CardDescription>Usuarios activos por día en el período seleccionado</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  {dailyStats.length > 0 ? (
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
                        <DynamicLine type="monotone" dataKey="total_sessions" name="Sesiones" stroke="#82ca9d" />
                      </DynamicLineChart>
                    </DynamicResponsiveContainer>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-[350px]">
                      <p className="text-muted-foreground">No hay datos disponibles para el período seleccionado</p>
                      <Button variant="outline" onClick={loadStats} className="mt-4">
                        Cargar datos
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </>
          )}
        </TabsContent>

        {/* Pestaña de Páginas */}
        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Páginas más visitadas</CardTitle>
              <CardDescription>Las páginas con más visitas en el período seleccionado</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-[400px] w-full" />
              ) : mostVisitedPages.length > 0 ? (
                <DynamicResponsiveContainer width="100%" height={400}>
                  <DynamicBarChart
                    data={mostVisitedPages}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <DynamicCartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <DynamicXAxis type="number" />
                    <DynamicYAxis dataKey="path" type="category" width={150} />
                    <DynamicTooltip />
                    <DynamicBar dataKey="views" name="Visitas" fill="#8884d8" />
                  </DynamicBarChart>
                </DynamicResponsiveContainer>
              ) : (
                <div className="flex flex-col items-center justify-center h-[400px]">
                  <p className="text-muted-foreground">No hay datos disponibles para el período seleccionado</p>
                  <Button variant="outline" onClick={loadStats} className="mt-4">
                    Cargar datos
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pestaña de Usuarios */}
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Usuarios activos</CardTitle>
              <CardDescription>Usuarios que han interactuado con la aplicación</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-[400px] w-full" />
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-muted/20 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-medium mb-2">Usuarios Únicos</h3>
                    <p className="text-3xl font-bold">{statsData?.uniqueUsers || 0}</p>
                    <p className="text-sm text-muted-foreground mt-2">Basado en IDs de usuario</p>
                  </div>
                  <div className="bg-muted/20 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-medium mb-2">Emails Registrados</h3>
                    <p className="text-3xl font-bold">{statsData?.registeredEmails || 0}</p>
                    <p className="text-sm text-muted-foreground mt-2">Usuarios con email</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pestaña de Tráfico */}
        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fuentes de tráfico</CardTitle>
              <CardDescription>De dónde provienen los visitantes</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-[400px] w-full" />
              ) : trafficSources.length > 0 ? (
                <DynamicResponsiveContainer width="100%" height={400}>
                  <DynamicPieChart>
                    <DynamicPie
                      data={trafficSources}
                      cx="50%"
                      cy="50%"
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="count"
                      nameKey="source"
                      label
                    >
                      {trafficSources.map((entry, index) => (
                        <DynamicCell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </DynamicPie>
                    <DynamicTooltip />
                    <DynamicLegend />
                  </DynamicPieChart>
                </DynamicResponsiveContainer>
              ) : (
                <div className="flex flex-col items-center justify-center h-[400px]">
                  <p className="text-muted-foreground">No hay datos disponibles para el período seleccionado</p>
                  <Button variant="outline" onClick={loadStats} className="mt-4">
                    Cargar datos
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pestaña de Conversión */}
        <TabsContent value="conversion" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conversiones</CardTitle>
              <CardDescription>Acciones completadas por los usuarios</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-[400px] w-full" />
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-muted/20 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-medium mb-2">Clics a WhatsApp</h3>
                    <p className="text-3xl font-bold">{statsData?.whatsappClicks || 0}</p>
                    <p className="text-sm text-muted-foreground mt-2">Contactos vía WhatsApp</p>
                  </div>
                  <div className="bg-muted/20 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-medium mb-2">Tasa de Conversión</h3>
                    <p className="text-3xl font-bold">
                      {statsData && statsData.uniqueUsers > 0
                        ? `${((statsData.whatsappClicks / statsData.uniqueUsers) * 100).toFixed(2)}%`
                        : "0%"}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">Clics WhatsApp / Usuarios Únicos</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
