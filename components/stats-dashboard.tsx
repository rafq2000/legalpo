"use client"

import { useState, useEffect, useMemo } from "react"
import dynamic from "next/dynamic"
import { Download, Filter, RefreshCw, Search, Mail, Users, Eye, MousePointer, FileText } from "lucide-react"
import { format, subDays, isValid } from "date-fns"
import { es } from "date-fns/locale"
import * as XLSX from "xlsx"

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
  obtenerEventosPorPaginas,
  obtenerEventosPorDia,
  obtenerEventosPorTipo,
  obtenerUsuariosUnicos,
  obtenerPaginasPopulares,
  obtenerContactosWhatsApp,
  exportarCorreosExcel,
  obtenerDistribucionPreguntasPorTema,
  type EventoStats,
  type EventosPorDia,
  type EventosPorTipo,
  type FiltrosEventos,
  type UsuarioUnico,
  type PaginaPopular,
} from "@/utils/stats-service"
// Add the import for obtenerPreguntas at the top of the file
import { obtenerPreguntas } from "@/utils/firestore-service"
import type { QueryDocumentSnapshot, DocumentData } from "firebase/firestore"

// Importar Recharts dinámicamente para evitar errores de SSR
const DynamicLineChart = dynamic(() => import("recharts").then((mod) => mod.LineChart), { ssr: false })
const DynamicLine = dynamic(() => import("recharts").then((mod) => mod.Line), { ssr: false })
const DynamicBarChart = dynamic(() => import("recharts").then((mod) => mod.BarChart), { ssr: false })
const DynamicBar = dynamic(() => import("recharts").then((mod) => mod.Bar), { ssr: false })
const DynamicPieChart = dynamic(() => import("recharts").then((mod) => mod.PieChart), { ssr: false })
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

// Colores específicos para temas de preguntas
const TEMA_COLORS = {
  laboral: "#34D399", // verde
  deuda: "#60A5FA", // azul
  legal: "#FBBF24", // amarillo
  otro: "#F87171", // rojo
  sin_tema: "#A78BFA", // morado
}

// Función para validar fechas
const isValidDate = (date: any): boolean => {
  if (!date) return false
  if (date instanceof Date) return isValid(date)
  try {
    const d = new Date(date)
    return isValid(d)
  } catch (e) {
    return false
  }
}

// Función para formatear fechas de manera segura
const safeFormatDate = (date: any, formatStr: string): string => {
  if (!date) return "Fecha inválida"
  try {
    const d = new Date(date)
    if (!isValid(d)) return "Fecha inválida"
    return format(d, formatStr, { locale: es })
  } catch (e) {
    return "Fecha inválida"
  }
}

// Agregar esta función de utilidad al principio del archivo (después de los imports)
const safeTimestamp = (timestamp: any): Date => {
  if (!timestamp) return new Date()

  if (typeof timestamp === "string") {
    return new Date(timestamp)
  }

  if (timestamp instanceof Date) {
    return timestamp
  }

  if (timestamp && typeof timestamp.toDate === "function") {
    try {
      return timestamp.toDate()
    } catch (e) {
      return new Date()
    }
  }

  return new Date()
}

// Función para traducir nombres de temas
const traducirTema = (tema: string): string => {
  const traducciones: Record<string, string> = {
    laboral: "Laboral",
    deuda: "Deudas",
    legal: "Legal",
    otro: "Otros",
    sin_tema: "Sin tema",
  }
  return traducciones[tema] || tema
}

export default function StatsDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoading, setIsLoading] = useState(true)
  const [isExporting, setIsExporting] = useState(false)
  const [eventos, setEventos] = useState<EventoStats[]>([])
  const [eventosPorDia, setEventosPorDia] = useState<EventosPorDia[]>([])
  const [eventosPorTipo, setEventosPorTipo] = useState<EventosPorTipo[]>([])
  const [usuariosUnicos, setUsuariosUnicos] = useState<UsuarioUnico[]>([])
  const [paginasPopulares, setPaginasPopulares] = useState<PaginaPopular[]>([])
  const [contactosWhatsApp, setContactosWhatsApp] = useState(0)
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
  const [isClient, setIsClient] = useState(false)
  const [error, setError] = useState<string | null>(null)
  // Add a new state for questions inside the StatsDashboard component
  const [preguntas, setPreguntas] = useState<any[]>([])
  // Add a new state for question distribution by topic
  const [preguntasPorTema, setPreguntasPorTema] = useState<Record<string, number>>({})

  // Estados para la paginación
  const [cursor, setCursor] = useState<QueryDocumentSnapshot<DocumentData> | null>(null)
  const [hayMas, setHayMas] = useState(true)
  const [cargando, setCargando] = useState(false)

  // Verificar si estamos en el cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Cargar datos iniciales
  useEffect(() => {
    if (isClient) {
      cargarDatos()
    }
  }, [isClient])

  // Actualizar filtros cuando cambia el rango de fechas
  useEffect(() => {
    if (dateRange.from && dateRange.to && isValidDate(dateRange.from) && isValidDate(dateRange.to)) {
      setFiltros((prev) => ({
        ...prev,
        startDate: dateRange.from,
        endDate: dateRange.to,
      }))
    }
  }, [dateRange])

  // Cargar datos con filtros actualizados
  useEffect(() => {
    if (isClient) {
      // Resetear eventos y cursor cuando cambian los filtros
      setEventos([])
      setCursor(null)
      setHayMas(true)
      cargarDatos()
    }
  }, [filtros, isClient])

  // Función para cargar todos los datos
  const cargarDatos = async () => {
    setIsLoading(true)
    setError(null)
    try {
      // Cargar eventos recientes con la nueva función de paginación
      const { eventos: nuevosEventos, siguienteCursor } = await obtenerEventosPorPaginas({
        desde: filtros.startDate,
        hasta: filtros.endDate,
        tipo: filtros.tipo,
        email: filtros.email,
        lastVisible: null, // Empezar desde el principio
      })

      setEventos(nuevosEventos)
      setCursor(siguienteCursor)
      setHayMas(!!siguienteCursor)

      // Cargar datos para gráficos
      const eventosDiarios = await obtenerEventosPorDia(filtros)
      setEventosPorDia(eventosDiarios)

      const eventosTipo = await obtenerEventosPorTipo(filtros)
      setEventosPorTipo(eventosTipo)

      // Cargar datos adicionales para el panel resumen
      const usuarios = await obtenerUsuariosUnicos(filtros)
      setUsuariosUnicos(usuarios)

      const paginas = await obtenerPaginasPopulares(filtros)
      setPaginasPopulares(paginas)

      const contactosWA = await obtenerContactosWhatsApp(filtros)
      setContactosWhatsApp(contactosWA)

      // Update the cargarDatos function to also load questions
      const preguntasUsuarios = await obtenerPreguntas(100)
      setPreguntas(preguntasUsuarios)

      // Cargar distribución de preguntas por tema
      const distribucionTemas = await obtenerDistribucionPreguntasPorTema()
      setPreguntasPorTema(distribucionTemas)
    } catch (error) {
      console.error("Error al cargar datos:", error)
      setError("Error al cargar los datos. Por favor, intenta de nuevo.")
      toast({
        title: "Error",
        description: "No se pudieron cargar los datos. Intenta de nuevo más tarde.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Función para cargar más eventos
  const cargarMasEventos = async () => {
    if (cargando || !hayMas || !cursor) return

    setCargando(true)
    try {
      const { eventos: nuevosEventos, siguienteCursor } = await obtenerEventosPorPaginas({
        desde: filtros.startDate,
        hasta: filtros.endDate,
        tipo: filtros.tipo,
        email: filtros.email,
        lastVisible: cursor,
      })

      setEventos((prev) => [...prev, ...nuevosEventos])
      setCursor(siguienteCursor)
      setHayMas(!!siguienteCursor)

      if (nuevosEventos.length > 0) {
        toast({
          title: "Eventos cargados",
          description: `Se han cargado ${nuevosEventos.length} eventos adicionales.`,
        })
      } else {
        toast({
          title: "No hay más eventos",
          description: "Has llegado al final de la lista de eventos.",
        })
        setHayMas(false)
      }
    } catch (error) {
      console.error("Error al cargar más eventos:", error)
      toast({
        title: "Error",
        description: "No se pudieron cargar más eventos. Intenta de nuevo más tarde.",
        variant: "destructive",
      })
    } finally {
      setCargando(false)
    }
  }

  // Función para exportar correos a Excel
  const exportarCorreos = async () => {
    setIsExporting(true)
    try {
      const blob = await exportarCorreosExcel(filtros)

      // Crear URL y descargar
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `correos_${format(new Date(), "yyyy-MM-dd")}.xlsx`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      toast({
        title: "Exportación completada",
        description: "Los correos se han exportado correctamente.",
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

    if (tipoSeleccionado && tipoSeleccionado !== "all") {
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
    return safeFormatDate(fecha, "dd MMM yyyy, HH:mm")
  }

  // Preparar datos para el gráfico de preguntas por tema
  const datosPreguntasPorTema = useMemo(() => {
    return Object.entries(preguntasPorTema).map(([tema, cantidad]) => ({
      name: traducirTema(tema),
      value: cantidad,
      tema: tema,
    }))
  }, [preguntasPorTema])

  if (!isClient) {
    return (
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Dashboard de Estadísticas</h1>
            <p className="text-muted-foreground">Cargando...</p>
          </div>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-[200px] w-full" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Skeleton className="h-[120px]" />
            <Skeleton className="h-[120px]" />
            <Skeleton className="h-[120px]" />
          </div>
          <Skeleton className="h-[300px] w-full" />
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard de Estadísticas</h1>
          <p className="text-muted-foreground">Análisis de resultados y actividad de usuarios</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <Button variant="outline" onClick={cargarDatos} disabled={isLoading} className="flex items-center">
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            {isLoading ? "Cargando..." : "Actualizar"}
          </Button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
          <p className="text-red-700">{error}</p>
          <Button variant="outline" onClick={cargarDatos} className="mt-2">
            Reintentar
          </Button>
        </div>
      )}

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

      {/* Panel Resumen */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Visitas</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <>
                <div className="text-2xl font-bold">{eventosPorDia.reduce((sum, item) => sum + item.total, 0)}</div>
                <p className="text-xs text-muted-foreground">En el período seleccionado</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Correos Registrados</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <>
                <div className="text-2xl font-bold">{usuariosUnicos.length}</div>
                <p className="text-xs text-muted-foreground">Usuarios con email</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuarios Únicos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <>
                <div className="text-2xl font-bold">{usuariosUnicos.length}</div>
                <p className="text-xs text-muted-foreground">Visitantes distintos</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clics WhatsApp</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <>
                <div className="text-2xl font-bold">{contactosWhatsApp}</div>
                <p className="text-xs text-muted-foreground">Contactos potenciales</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Página Popular</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <>
                <div className="text-lg font-bold truncate">
                  {paginasPopulares.length > 0 ? paginasPopulares[0].ruta : "N/A"}
                </div>
                <p className="text-xs text-muted-foreground">Más visitada</p>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        {/* Update the TabsList to include a new "questions" tab */}
        <TabsList className="grid grid-cols-4 gap-2">
          <TabsTrigger value="overview">Visitas</TabsTrigger>
          <TabsTrigger value="emails">Correos</TabsTrigger>
          <TabsTrigger value="events">Eventos</TabsTrigger>
          <TabsTrigger value="questions">Preguntas</TabsTrigger>
        </TabsList>

        {/* Pestaña de Visitas */}
        <TabsContent value="overview" className="space-y-4">
          {/* Gráfico de visitas por día */}
          <Card>
            <CardHeader>
              <CardTitle>Visitas por Día</CardTitle>
              <CardDescription>Evolución de visitas en el período seleccionado</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              {isLoading ? (
                <div className="h-full w-full flex items-center justify-center">
                  <Skeleton className="h-full w-full" />
                </div>
              ) : (
                <DynamicResponsiveContainer width="100%" height="100%">
                  <DynamicLineChart data={eventosPorDia} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <DynamicCartesianGrid strokeDasharray="3 3" />
                    <DynamicXAxis
                      dataKey="fecha"
                      tickFormatter={(fecha) => {
                        try {
                          return format(new Date(fecha), "dd/MM")
                        } catch (e) {
                          return "Inválido"
                        }
                      }}
                    />
                    <DynamicYAxis />
                    <DynamicTooltip
                      formatter={(value: number) => [`${value} visitas`, "Total"]}
                      labelFormatter={(fecha) => {
                        try {
                          return format(new Date(fecha), "dd MMM yyyy", { locale: es })
                        } catch (e) {
                          return "Fecha inválida"
                        }
                      }}
                    />
                    <DynamicLegend />
                    <DynamicLine
                      type="monotone"
                      dataKey="total"
                      name="Visitas"
                      stroke="#8884d8"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                  </DynamicLineChart>
                </DynamicResponsiveContainer>
              )}
            </CardContent>
          </Card>

          {/* Gráficos de distribución */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Gráfico de eventos por tipo */}
            <Card>
              <CardHeader>
                <CardTitle>Distribución por Tipo de Evento</CardTitle>
                <CardDescription>Proporción de cada tipo de evento</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px]">
                {isLoading ? (
                  <div className="h-full w-full flex items-center justify-center">
                    <Skeleton className="h-full w-full" />
                  </div>
                ) : (
                  <DynamicResponsiveContainer width="100%" height="100%">
                    <DynamicPieChart>
                      <DynamicPie
                        data={eventosPorTipo}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="total"
                        nameKey="tipo"
                        label={({ tipo, percent }) => `${tipo}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {eventosPorTipo.map((entry, index) => (
                          <DynamicCell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </DynamicPie>
                      <DynamicTooltip
                        formatter={(value: number, name, props) => [`${value} eventos`, props.payload.tipo]}
                      />
                      <DynamicLegend layout="vertical" align="right" verticalAlign="middle" />
                    </DynamicPieChart>
                  </DynamicResponsiveContainer>
                )}
              </CardContent>
            </Card>

            {/* Páginas más visitadas */}
            <Card>
              <CardHeader>
                <CardTitle>Páginas Más Visitadas</CardTitle>
                <CardDescription>Top 10 páginas con más visitas</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px]">
                {isLoading ? (
                  <div className="h-full w-full flex items-center justify-center">
                    <Skeleton className="h-full w-full" />
                  </div>
                ) : (
                  <DynamicResponsiveContainer width="100%" height="100%">
                    <DynamicBarChart
                      data={paginasPopulares.slice(0, 10)}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <DynamicCartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <DynamicXAxis type="number" />
                      <DynamicYAxis
                        dataKey="ruta"
                        type="category"
                        width={150}
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => (value.length > 20 ? `${value.substring(0, 20)}...` : value)}
                      />
                      <DynamicTooltip formatter={(value: number) => [`${value} visitas`, "Total"]} />
                      <DynamicBar dataKey="visitas" name="Visitas" fill="#82ca9d" />
                    </DynamicBarChart>
                  </DynamicResponsiveContainer>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Pestaña de Correos */}
        <TabsContent value="emails">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Correos Registrados</CardTitle>
                <CardDescription>Usuarios que han proporcionado su correo electrónico</CardDescription>
              </div>
              <Button onClick={exportarCorreos} disabled={isExporting || isLoading} className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                {isExporting ? "Exportando..." : "Exportar Excel"}
              </Button>
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
                        <TableHead>Correo</TableHead>
                        <TableHead>Primera Visita</TableHead>
                        <TableHead>Última Acción</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {usuariosUnicos.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-4">
                            No se encontraron correos registrados con los filtros seleccionados
                          </TableCell>
                        </TableRow>
                      ) : (
                        usuariosUnicos.map((usuario) => (
                          <TableRow key={usuario.email}>
                            <TableCell className="font-medium">{usuario.email}</TableCell>
                            <TableCell>{formatearFecha(safeTimestamp(usuario.primeraVisita))}</TableCell>
                            <TableCell>{formatearFecha(safeTimestamp(usuario.ultimaAccion))}</TableCell>
                            <TableCell>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  toast({
                                    title: "Detalles del usuario",
                                    description: (
                                      <pre className="mt-2 w-full rounded-md bg-slate-950 p-4 overflow-x-auto">
                                        <code className="text-white">{JSON.stringify(usuario, null, 2)}</code>
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
                            <TableCell className="font-medium">
                              {formatearFecha(safeTimestamp(evento.timestamp))}
                            </TableCell>
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
                  {hayMas && (
                    <div className="flex justify-center p-4">
                      <Button onClick={cargarMasEventos} disabled={cargando || !hayMas} variant="outline">
                        {cargando ? (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                            Cargando...
                          </>
                        ) : (
                          <>Cargar más eventos</>
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add a new TabsContent for the questions tab after the "events" TabsContent */}
        <TabsContent value="questions">
          {/* Gráfico de distribución de preguntas por tema */}
          <div className="grid gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Distribución de Preguntas por Tema</CardTitle>
                <CardDescription>Proporción de preguntas según su categoría</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px]">
                {isLoading ? (
                  <div className="h-full w-full flex items-center justify-center">
                    <Skeleton className="h-full w-full" />
                  </div>
                ) : (
                  <DynamicResponsiveContainer width="100%" height="100%">
                    <DynamicPieChart>
                      <DynamicPie
                        data={datosPreguntasPorTema}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {datosPreguntasPorTema.map((entry) => (
                          <DynamicCell
                            key={`cell-${entry.tema}`}
                            fill={TEMA_COLORS[entry.tema as keyof typeof TEMA_COLORS] || COLORS[0]}
                          />
                        ))}
                      </DynamicPie>
                      <DynamicTooltip formatter={(value: number, name, props) => [`${value} preguntas`, name]} />
                      <DynamicLegend layout="vertical" align="right" verticalAlign="middle" />
                    </DynamicPieChart>
                  </DynamicResponsiveContainer>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Preguntas de Usuarios</CardTitle>
                <CardDescription>Preguntas realizadas por los usuarios en el sitio</CardDescription>
              </div>
              <Button
                onClick={() => {
                  // Export questions to Excel
                  const workbook = XLSX.utils.book_new()
                  const worksheet = XLSX.utils.json_to_sheet(
                    preguntas.map((p) => ({
                      email: p.email || "Anónimo",
                      tema: p.tema,
                      pregunta: p.pregunta,
                      fecha: safeFormatDate(safeTimestamp(p.timestamp), "dd/MM/yyyy HH:mm"),
                    })),
                  )
                  XLSX.utils.book_append_sheet(workbook, worksheet, "Preguntas")
                  XLSX.writeFile(workbook, `preguntas_${format(new Date(), "yyyy-MM-dd")}.xlsx`)
                }}
                disabled={isLoading}
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Exportar Excel
              </Button>
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
                        <TableHead>Email</TableHead>
                        <TableHead>Tema</TableHead>
                        <TableHead>Pregunta</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {preguntas.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-4">
                            No se encontraron preguntas con los filtros seleccionados
                          </TableCell>
                        </TableRow>
                      ) : (
                        preguntas.map((pregunta) => (
                          <TableRow key={pregunta.id}>
                            <TableCell className="font-medium">
                              {formatearFecha(safeTimestamp(pregunta.timestamp))}
                            </TableCell>
                            <TableCell>{pregunta.email || "Anónimo"}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  pregunta.tema === "laboral"
                                    ? "default"
                                    : pregunta.tema === "deuda"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {pregunta.tema}
                              </Badge>
                            </TableCell>
                            <TableCell className="max-w-xs truncate">
                              <span title={pregunta.pregunta}>
                                {pregunta.pregunta.length > 50
                                  ? `${pregunta.pregunta.substring(0, 50)}...`
                                  : pregunta.pregunta}
                              </span>
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
