"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Loader2, Users, MessageSquare, FileText, Phone } from "lucide-react"
import Link from "next/link"

interface Analytics {
  totalUsers: number
  totalConsultas: number
  totalDocumentos: number
  totalWhatsApp: number
  consultasPorDia: Record<string, number>
  documentosPorDia: Record<string, number>
  whatsappPorDia: Record<string, number>
  ultimaActualizacion: string
  usuariosUnicos: string[]
}

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        setIsLoading(true)
        const response = await fetch("/api/analytics?key=docuscan_admin_key")

        if (!response.ok) {
          throw new Error("Error al cargar datos de analítica")
        }

        const data = await response.json()
        setAnalytics(data)
      } catch (error) {
        console.error("Error:", error)
        setError("No se pudieron cargar los datos de analítica")
      } finally {
        setIsLoading(false)
      }
    }

    fetchAnalytics()
  }, [])

  // Preparar datos para gráficos
  const prepareChartData = (dataObject: Record<string, number>) => {
    return Object.entries(dataObject)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date))
  }

  const consultasChartData = analytics ? prepareChartData(analytics.consultasPorDia) : []
  const documentosChartData = analytics ? prepareChartData(analytics.documentosPorDia) : []
  const whatsappChartData = analytics ? prepareChartData(analytics.whatsappPorDia || {}) : []

  // Datos para el gráfico de distribución de consultas
  const distribucionData = analytics
    ? [
        { name: "Web", value: analytics.totalConsultas - (analytics.totalWhatsApp || 0) },
        { name: "WhatsApp", value: analytics.totalWhatsApp || 0 },
      ]
    : []

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"]

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Cargando estadísticas...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-red-500 mb-4">{error}</div>
        <Button onClick={() => window.location.reload()}>Reintentar</Button>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">DocuScan AI</span>
            </Link>
            <h1 className="text-xl font-bold">Panel de Administración</h1>
          </div>
          <Button asChild variant="ghost">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Estadísticas de Uso</h2>
          <p className="text-muted-foreground">
            Última actualización: {analytics ? new Date(analytics.ultimaActualizacion).toLocaleString() : "N/A"}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Usuarios Únicos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics?.totalUsers || 0}</div>
              <p className="text-xs text-muted-foreground">Usuarios que han utilizado la plataforma</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Consultas Legales</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics?.totalConsultas || 0}</div>
              <p className="text-xs text-muted-foreground">Total de consultas realizadas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Documentos Analizados</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics?.totalDocumentos || 0}</div>
              <p className="text-xs text-muted-foreground">Total de documentos procesados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Consultas WhatsApp</CardTitle>
              <Phone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics?.totalWhatsApp || 0}</div>
              <p className="text-xs text-muted-foreground">Total de consultas por WhatsApp</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="consultas">Consultas por Día</TabsTrigger>
            <TabsTrigger value="documentos">Documentos por Día</TabsTrigger>
            <TabsTrigger value="whatsapp">WhatsApp por Día</TabsTrigger>
            <TabsTrigger value="distribucion">Distribución</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Resumen de Actividad</CardTitle>
                <CardDescription>Visión general de la actividad en la plataforma</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: "Usuarios", value: analytics?.totalUsers || 0 },
                        { name: "Consultas", value: analytics?.totalConsultas || 0 },
                        { name: "Documentos", value: analytics?.totalDocumentos || 0 },
                        { name: "WhatsApp", value: analytics?.totalWhatsApp || 0 },
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="consultas">
            <Card>
              <CardHeader>
                <CardTitle>Consultas por Día</CardTitle>
                <CardDescription>Número de consultas legales realizadas por día</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={consultasChartData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" angle={-45} textAnchor="end" height={70} tick={{ fontSize: 12 }} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" name="Consultas" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documentos">
            <Card>
              <CardHeader>
                <CardTitle>Documentos por Día</CardTitle>
                <CardDescription>Número de documentos analizados por día</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={documentosChartData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" angle={-45} textAnchor="end" height={70} tick={{ fontSize: 12 }} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" name="Documentos" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="whatsapp">
            <Card>
              <CardHeader>
                <CardTitle>Consultas WhatsApp por Día</CardTitle>
                <CardDescription>Número de consultas realizadas por WhatsApp por día</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={whatsappChartData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" angle={-45} textAnchor="end" height={70} tick={{ fontSize: 12 }} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" name="Consultas WhatsApp" fill="#25D366" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distribucion">
            <Card>
              <CardHeader>
                <CardTitle>Distribución de Consultas</CardTitle>
                <CardDescription>Distribución de consultas por canal (Web vs WhatsApp)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={distribucionData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {distribucionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} consultas`, ""]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
