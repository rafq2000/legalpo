"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
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
import { Loader2 } from "lucide-react"

interface StatsOverview {
  period: string
  total_users: number
  new_users: number
  total_sessions: number
  active_users: number
  avg_session_duration: number
  start_date: string
  end_date: string
}

export function UserStatsDashboard() {
  const [overview, setOverview] = useState<StatsOverview | null>(null)
  const [period, setPeriod] = useState<string>("week")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchOverview(period)
  }, [period])

  const fetchOverview = async (selectedPeriod: string) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/stats/overview?period=${selectedPeriod}`)

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()
      setOverview(data)
    } catch (err) {
      console.error("Error al obtener estadísticas:", err)
      setError("No se pudieron cargar las estadísticas. Intente nuevamente más tarde.")
    } finally {
      setLoading(false)
    }
  }

  const handleRefresh = () => {
    fetchOverview(period)
  }

  const formatDuration = (seconds: number) => {
    if (!seconds) return "0 min"
    const minutes = Math.floor(seconds / 60)
    return `${minutes} min`
  }

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  const pieData = overview
    ? [
        { name: "Usuarios Activos", value: overview.active_users },
        { name: "Usuarios Inactivos", value: overview.total_users - overview.active_users },
      ]
    : []

  const barData = overview
    ? [
        { name: "Total Usuarios", value: overview.total_users },
        { name: "Nuevos Usuarios", value: overview.new_users },
        { name: "Sesiones", value: overview.total_sessions },
        { name: "Usuarios Activos", value: overview.active_users },
      ]
    : []

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Estadísticas de Usuarios</h2>
        <Button onClick={handleRefresh} disabled={loading}>
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Actualizar"}
        </Button>
      </div>

      <Tabs defaultValue="week" value={period} onValueChange={setPeriod}>
        <TabsList>
          <TabsTrigger value="week">Última Semana</TabsTrigger>
          <TabsTrigger value="month">Último Mes</TabsTrigger>
          <TabsTrigger value="year">Último Año</TabsTrigger>
        </TabsList>
      </Tabs>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : error ? (
        <div className="bg-red-50 p-4 rounded-md text-red-800">{error}</div>
      ) : overview ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Usuarios</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overview.total_users}</div>
              <p className="text-xs text-muted-foreground">{overview.new_users} nuevos en este período</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Usuarios Activos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overview.active_users}</div>
              <p className="text-xs text-muted-foreground">
                {Math.round((overview.active_users / overview.total_users) * 100)}% del total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Sesiones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overview.total_sessions}</div>
              <p className="text-xs text-muted-foreground">
                {(overview.total_sessions / overview.active_users).toFixed(1)} por usuario activo
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Duración Promedio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatDuration(overview.avg_session_duration)}</div>
              <p className="text-xs text-muted-foreground">Por sesión</p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Distribución de Usuarios</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Resumen de Estadísticas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={barData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : null}
    </div>
  )
}
