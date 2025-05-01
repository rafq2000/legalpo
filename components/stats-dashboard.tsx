"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Calendar, Download, Filter, RefreshCw, Search } from "lucide-react"
import { format, subDays } from "date-fns"
import { es } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

import {
  obtenerEventos,
  obtenerEventosPorDia,
  obtenerEventosPorTipo,
  exportarEventosExcel,
  type EventoStats,
  type EventosPorDia,
  type EventosPorTipo,
  type FiltrosEventos,
} from "@/utils/stats-service"

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

export default function StatsDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoading, setIsLoading] = useState(true)
  const [isExporting, setIsExporting] = useState(false)
  const [eventos, setEventos] = useState<EventoStats[]>([])
  const [eventosPorDia, setEventosPorDia] = useState<EventosPorDia[]>([])
  const [eventosPorTipo, setEventosPorTipo] = useState<EventosPorTipo[]>([])
  const [filtros, setFiltros] = useState<FiltrosEventos>({
    startDate: subDays(new Date(), 30),
    endDate: new Date(),
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [tipoSeleccionado, setTipoSeleccionado] = useState<string>("")
  const [dateRange, setDateRange] = useState<{
    from: Date
    to: Date
  }>({
    from: subDays(new Date(), 30),
    to: new Date(),
  })

  // Cargar datos iniciales
  useEffect(() => {
    cargarDatos()
  }, [])

  // Actualizar filtros cuando cambia el rango de fechas
  useEffect(() => {
    if (dateRange.from && dateRange.to) {
      setFiltros((prev) => ({
        ...prev,
        startDate: dateRange.from,
        endDate: dateRange.to,
      }))
    }
  }, [dateRange])

  // Cargar datos con filtros actualizados
  useEffect(() => {
    cargarDatos()
  }, [filtros])

  // Función para cargar todos los datos
  const cargarDatos = async () => {
    setIsLoading(true)
    try {
      // Cargar eventos recientes
      const { eventos } = await obtenerEventos(filtros, null, 50)
      setEventos(eventos)

      // Cargar datos para gráficos
      const eventosDiarios = await obtenerEventosPorDia(filtros)
      setEventosPorDia(eventosDiarios)

      const eventosTipo = await obtenerEventosPorTipo(filtros)
      setEventosPorTipo(eventosTipo)
    } catch (error) {
      console.error("Error al cargar datos:", error)
      toast({
        title: "Error",
        description: "No se pudieron cargar los datos. Intenta de nuevo más tarde.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Función para exportar a Excel
  const exportarExcel = async () => {
    setIsExporting(true)
    try {
      const blob = await exportarEventosExcel(filtros)

      // Crear URL y descargar
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `eventos_${format(new Date(), "yyyy-MM-dd")}.xlsx`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      toast({
        title: "Exportación completada",
        description: "Los datos se han exportado correctamente.",
      })
    } catch (error) {
      console.error("Error al exportar:", error)
      toast({
        title: "Error",
        description: "No se pudieron exportar los datos. Intenta de nuevo más tarde.",
        variant: "destructive",
      })
    } finally {
      setIsExporting(false)
    }
  }

  // Función para aplicar filtros de búsqueda
  const aplicarFiltros = () => {
    const nuevosFiltros: FiltrosEventos = {
      startDate: dateRange.from,
      endDate: dateRange.to,
    }

    if (tipoSeleccionado) {
      nuevosFiltros.tipo = tipoSeleccionado
    }

    if (searchTerm) {
      nuevosFiltros.email = searchTerm
    }

    setFiltros(nuevosFiltros)
  }

  // Función para resetear filtros
  const resetearFiltros = () => {
    setDateRange({
      from: subDays(new Date(), 30),
      to: new Date(),
    })
    setTipoSeleccionado("")
    setSearchTerm("")
    setFiltros({
      startDate: subDays(new Date(), 30),
      endDate: new Date(),
    })
  }

  // Obtener tipos únicos para el selector
  const tiposUnicos = useMemo(() => {
    const tipos = new Set<string>()
    eventosPorTipo.forEach((item) => tipos.add(item.tipo))
    return Array.from(tipos)
  }, [eventosPorTipo])

  // Formatear fecha para mostrar
  const formatearFecha = (fecha: Date) => {
    return format(new Date(fecha), "dd MMM yyyy, HH:mm", { locale: es })
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard de Estadísticas</h1>
          <p className="text-muted-foreground">Análisis de eventos y actividad de usuarios</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <Button variant="outline" onClick={cargarDatos} disabled={isLoading} className="flex items-center">
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            {isLoading ? "Cargando..." : "Actualizar"}
          </Button>

          <Button onClick={exportarExcel} disabled={isExporting || isLoading} className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            {isExporting ? "Exportando..." : "Exportar Excel"}
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Filtros</CardTitle>
          <CardDescription>Filtra los datos por fecha, tipo de evento o email</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="date-range">Rango de fechas</Label>
              <div className="mt-1">
                <DatePickerWithRange id="date-range" date={dateRange} onDateChange={setDateRange} />
              </div>
            </div>

            <div>
              <Label htmlFor="tipo">Tipo de evento</Label>
              <Select value={tipoSeleccionado} onValueChange={setTipoSeleccionado}>
                <SelectTrigger id="tipo" className="mt-1">
                  <SelectValue placeholder="Todos los tipos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los tipos</SelectItem>
                  {tiposUnicos.map((tipo) => (
                    <SelectItem key={tipo} value={tipo}>
                      {tipo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <div className="flex mt-1">
                <Input
                  id="email"
                  placeholder="Buscar por email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={resetearFiltros}>
              Resetear
            </Button>
            <Button onClick={aplicarFiltros}>
              <Filter className="mr-2 h-4 w-4" />
              Aplicar filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="charts">Gráficos</TabsTrigger>
          <TabsTrigger value="events">Eventos</TabsTrigger>
        </TabsList>

        {/* Pestaña de Resumen */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Eventos</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-8 w-24" />
                ) : (
                  <>
                    <div className="text-2xl font-bold">
                      {eventosPorTipo.reduce((sum, item) => sum + item.total, 0)}
                    </div>
                    <p className="text-xs text-muted-foreground">En el período seleccionado</p>
                  </>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Eventos por Día</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-8 w-24" />
                ) : (
                  <>
                    <div className="text-2xl font-bold">
                      {Math.round(
                        eventosPorTipo.reduce((sum, item) => sum + item.total, 0) / (eventosPorDia.length || 1),
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">Promedio diario</p>
                  </>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tipo Principal</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-8 w-24" />
                ) : (
                  <>
                    <div className="text-2xl font-bold">
                      {eventosPorTipo.length > 0 ? eventosPorTipo.sort((a, b) => b.total - a.total)[0].tipo : "N/A"}
                    </div>
                    <p className="text-xs text-muted-foreground">Evento más frecuente</p>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Gráfico de eventos por día */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Eventos por Día</CardTitle>
                <CardDescription>Total de eventos registrados por día</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                {isLoading ? (
                  <div className="h-full w-full flex items-center justify-center">
                    <Skeleton className="h-full w-full" />
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={eventosPorDia} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="fecha" tickFormatter={(fecha) => format(new Date(fecha), "dd/MM")} />
                      <YAxis />
                      <Tooltip
                        formatter={(value: number) => [value, "Eventos"]}
                        labelFormatter={(fecha) => format(new Date(fecha), "dd MMM yyyy", { locale: es })}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="total"
                        name="Total Eventos"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>

            {/* Gráfico de eventos por tipo */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Eventos por Tipo</CardTitle>
                <CardDescription>Distribución de eventos por tipo</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                {isLoading ? (
                  <div className="h-full w-full flex items-center justify-center">
                    <Skeleton className="h-full w-full" />
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={eventosPorTipo}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="total"
                        nameKey="tipo"
                      >
                        {eventosPorTipo.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number, name, props) => [value, props.payload.tipo]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Pestaña de Gráficos */}
        <TabsContent value="charts" className="space-y-4">
          {/* Gráfico de evolución diaria */}
          <Card>
            <CardHeader>
              <CardTitle>Evolución Diaria de Eventos</CardTitle>
              <CardDescription>Tendencia de eventos en el período seleccionado</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              {isLoading ? (
                <div className="h-full w-full flex items-center justify-center">
                  <Skeleton className="h-full w-full" />
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={eventosPorDia} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="fecha" tickFormatter={(fecha) => format(new Date(fecha), "dd/MM")} />
                    <YAxis />
                    <Tooltip
                      formatter={(value: number) => [value, "Eventos"]}
                      labelFormatter={(fecha) => format(new Date(fecha), "dd MMM yyyy", { locale: es })}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="total" name="Total Eventos" stroke="#8884d8" activeDot={{ r: 8 }} />
                    {/* Mostrar líneas para tipos específicos si están filtrados */}
                    {tipoSeleccionado ? (
                      <Line type="monotone" dataKey={tipoSeleccionado} name={tipoSeleccionado} stroke="#82ca9d" />
                    ) : (
                      // Mostrar líneas para los tipos más comunes (máximo 3)
                      eventosPorTipo
                        .sort((a, b) => b.total - a.total)
                        .slice(0, 3)
                        .map((item, index) => (
                          <Line
                            key={item.tipo}
                            type="monotone"
                            dataKey={item.tipo}
                            name={item.tipo}
                            stroke={COLORS[(index + 1) % COLORS.length]}
                          />
                        ))
                    )}
                  </LineChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          {/* Gráfico de barras por tipo */}
          <Card>
            <CardHeader>
              <CardTitle>Distribución por Tipo de Evento</CardTitle>
              <CardDescription>Cantidad de eventos por cada tipo</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              {isLoading ? (
                <div className="h-full w-full flex items-center justify-center">
                  <Skeleton className="h-full w-full" />
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={eventosPorTipo} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="tipo" width={150} />
                    <Tooltip formatter={(value: number) => [value, "Eventos"]} />
                    <Legend />
                    <Bar dataKey="total" name="Total Eventos" fill="#8884d8">
                      {eventosPorTipo.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          {/* Gráfico específico para registros */}
          <Card>
            <CardHeader>
              <CardTitle>Evolución de Registros</CardTitle>
              <CardDescription>Tendencia de eventos de tipo "registro"</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              {isLoading ? (
                <div className="h-full w-full flex items-center justify-center">
                  <Skeleton className="h-full w-full" />
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={eventosPorDia.map((dia) => ({
                      fecha: dia.fecha,
                      registros: dia.registro || 0,
                    }))}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="fecha" tickFormatter={(fecha) => format(new Date(fecha), "dd/MM")} />
                    <YAxis />
                    <Tooltip
                      formatter={(value: number) => [value, "Registros"]}
                      labelFormatter={(fecha) => format(new Date(fecha), "dd MMM yyyy", { locale: es })}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="registros" name="Registros" stroke="#82ca9d" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pestaña de Eventos */}
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Eventos Recientes</CardTitle>
              <CardDescription>Últimos eventos registrados en el sistema</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-12 w-full" />
                    ))}
                </div>
              ) : (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Detalles</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {eventos.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-4">
                            No se encontraron eventos con los filtros seleccionados
                          </TableCell>
                        </TableRow>
                      ) : (
                        eventos.map((evento) => (
                          <TableRow key={evento.id}>
                            <TableCell className="font-medium">{formatearFecha(evento.timestamp)}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{evento.tipo}</Badge>
                            </TableCell>
                            <TableCell>{evento.email || evento.datos?.email || "N/A"}</TableCell>
                            <TableCell>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  toast({
                                    title: "Detalles del evento",
                                    description: (
                                      <pre className="mt-2 w-full rounded-md bg-slate-950 p-4 overflow-x-auto">
                                        <code className="text-white">{JSON.stringify(evento, null, 2)}</code>
                                      </pre>
                                    ),
                                  })
                                }}
                              >
                                <Search className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
