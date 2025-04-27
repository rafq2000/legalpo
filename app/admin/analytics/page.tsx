"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, RefreshCw, AlertCircle } from "lucide-react"

export default function AnalyticsPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<any>(null)
  const [adminKey, setAdminKey] = useState("")
  const [activeTab, setActiveTab] = useState("overview")

  const fetchAnalytics = async () => {
    if (!adminKey) {
      setError("Ingresa la clave de administrador")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/analytics?key=${adminKey}`)

      if (!response.ok) {
        throw new Error("Error al cargar los datos de analítica")
      }

      const analyticsData = await response.json()
      setData(analyticsData)
    } catch (err) {
      console.error("Error fetching analytics:", err)
      setError(err.message || "Error desconocido")

      // Generar datos de ejemplo en caso de error
      setData(getMockAnalyticsData())
    } finally {
      setLoading(false)
    }
  }

  // Función para generar datos de ejemplo
  const getMockAnalyticsData = () => {
    const today = new Date()
    const days = Array.from({ length: 30 }, (_, i) => {
      const date = new Date()
      date.setDate(today.getDate() - (29 - i))
      return date.toISOString().split("T")[0]
    })

    return {
      dailyVisits: days.map((day) => ({
        date: day,
        count: Math.floor(Math.random() * 100) + 20,
      })),
      totalUsers: 1250,
      activeUsers: 450,
      newUsers: 75,
      pageViews: 8750,
      averageSessionTime: 320,
      topPages: [
        { path: "/analyze", views: 2340 },
        { path: "/contratos/general", views: 1820 },
        { path: "/calculadora-finiquito", views: 1250 },
        { path: "/dudas-laborales", views: 980 },
        { path: "/ask", views: 760 },
      ],
      registrations: days.map((day) => ({
        date: day,
        count: Math.floor(Math.random() * 10) + 1,
      })),
      mock: true,
    }
  }

  // Renderizar gráficos simples con divs
  const renderSimpleChart = (data, valueKey = "count") => {
    if (!data || !data.length) return <div className="text-center py-4">No hay datos disponibles</div>

    const maxValue = Math.max(...data.map((item) => item[valueKey]))

    return (
      <div className="flex items-end h-60 gap-1">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className="bg-blue-500 w-full rounded-t"
              style={{ height: `${(item[valueKey] / maxValue) * 100}%` }}
            ></div>
            <div className="text-xs mt-1 rotate-45 origin-left truncate w-8">
              {item.date
                ? new Date(item.date).toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit" })
                : index}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Analíticas</h1>

      <div className="mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Cargar datos</CardTitle>
            <CardDescription>Ingresa la clave de administrador para cargar los datos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                type="password"
                placeholder="Clave de administrador"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                className="max-w-xs"
              />
              <Button onClick={fetchAnalytics} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Cargando...
                  </>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" /> Cargar Datos
                  </>
                )}
              </Button>
            </div>
            {error && (
              <div className="mt-2 flex items-center text-red-600">
                <AlertCircle className="h-4 w-4 mr-2" />
                {error}
              </div>
            )}
            {data?.mock && (
              <div className="mt-2 text-amber-600 text-sm">
                Mostrando datos de ejemplo. La conexión a la base de datos falló.
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {data && (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="users">Usuarios</TabsTrigger>
            <TabsTrigger value="pages">Páginas</TabsTrigger>
            <TabsTrigger value="registrations">Registros</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Usuarios Totales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">{data.totalUsers}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usuarios Activos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">{data.activeUsers}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nuevos Usuarios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">{data.newUsers}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Visitas Diarias</CardTitle>
                </CardHeader>
                <CardContent>{renderSimpleChart(data.dailyVisits)}</CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vistas de Página</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">{data.pageViews}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tiempo Promedio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">
                    {Math.floor(data.averageSessionTime / 60)}m {data.averageSessionTime % 60}s
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Usuarios Registrados</CardTitle>
                <CardDescription>Evolución de registros en los últimos 30 días</CardDescription>
              </CardHeader>
              <CardContent>{renderSimpleChart(data.registrations)}</CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pages">
            <Card>
              <CardHeader>
                <CardTitle>Páginas Más Visitadas</CardTitle>
                <CardDescription>Las páginas con más visitas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.topPages.map((page, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1/2 font-medium truncate">{page.path}</div>
                      <div className="w-1/2">
                        <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
                          <div
                            className="bg-blue-500 h-full"
                            style={{ width: `${(page.views / data.topPages[0].views) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-right text-sm mt-1">{page.views} visitas</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="registrations">
            <Card>
              <CardHeader>
                <CardTitle>Registros de Usuarios</CardTitle>
                <CardDescription>Evolución de registros en los últimos 30 días</CardDescription>
              </CardHeader>
              <CardContent>
                {renderSimpleChart(data.registrations)}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Total registros (30 días)</p>
                    <p className="text-2xl font-bold">
                      {data.registrations.reduce((sum, item) => sum + item.count, 0)}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Promedio diario</p>
                    <p className="text-2xl font-bold">
                      {(
                        data.registrations.reduce((sum, item) => sum + item.count, 0) / data.registrations.length
                      ).toFixed(1)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground">Cargando datos de analítica...</p>
        </div>
      )}

      {!data && !loading && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-lg text-gray-500">No hay datos de analítica disponibles</p>
          <p className="text-sm text-gray-400 mt-2">Ingresa la clave de administrador y haz clic en "Cargar Datos"</p>
        </div>
      )}
    </div>
  )
}
