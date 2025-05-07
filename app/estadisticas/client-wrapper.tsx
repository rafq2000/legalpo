"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import {
  obtenerEventosPorPaginas,
  obtenerEventosPorDia,
  obtenerEventosPorTipo,
  obtenerUsuariosUnicos,
  obtenerPaginasPopulares,
  obtenerContactosWhatsApp,
  obtenerDistribucionPreguntasPorTema,
} from "@/utils/stats-service"
import { Loader2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

// Colores para gráficos
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82ca9d", "#ffc658", "#8dd1e1"]

export default function ClientDashboardWrapper() {
  // Estados para filtros
  const [desde, setDesde] = useState<Date>(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))
  const [hasta, setHasta] = useState<Date>(new Date())
  const [tipo, setTipo] = useState<string>("todos")
  const [email, setEmail] = useState<string>("")

  // Estados para datos
  const [eventos, setEventos] = useState<any[]>([])
  const [eventosPorDia, setEventosPorDia] = useState<any[]>([])
  const [eventosPorTipo, setEventosPorTipo] = useState<any[]>([])
  const [usuariosUnicos, setUsuariosUnicos] = useState<any[]>([])
  const [paginasPopulares, setPaginasPopulares] = useState<any[]>([])
  const [contactosWhatsApp, setContactosWhatsApp] = useState<number>(0)
  const [preguntasPorTema, setPreguntasPorTema] = useState<Record<string, number>>({})

  // Estados para paginación
  const [cursor, setCursor] = useState<any>(null)
  const [hayMas, setHayMas] = useState<boolean>(true)
  const [cargando, setCargando] = useState<boolean>(false)
  const [cargandoInicial, setCargandoInicial] = useState<boolean>(true)

  // Cargar datos iniciales
  useEffect(() => {
    cargarDatos()
  }, [])

  // Actualizar cuando cambian los filtros
  useEffect(() => {
    cargarEventosIniciales()
  }, [desde, hasta, tipo, email])

  // Función para cargar todos los datos
  async function cargarDatos() {
    setCargandoInicial(true)
    try {
      await Promise.all([
        cargarEventosIniciales(),
        cargarEventosPorDia(),
        cargarEventosPorTipo(),
        cargarUsuariosUnicos(),
        cargarPaginasPopulares(),
        cargarContactosWhatsApp(),
        cargarPreguntasPorTema(),
      ])
    } catch (error) {
      console.error("Error al cargar datos:", error)
      toast({
        title: "Error",
        description: "No se pudieron cargar los datos. Intente nuevamente.",
        variant: "destructive",
      })
    } finally {
      setCargandoInicial(false)
    }
  }

  // Función para cargar eventos iniciales con paginación
  async function cargarEventosIniciales() {
    setCargando(true)
    try {
      const { eventos: nuevos, siguienteCursor } = await obtenerEventosPorPaginas({
        desde,
        hasta,
        tipo,
        email,
      })
      setEventos(nuevos)
      setCursor(siguienteCursor)
      setHayMas(!!siguienteCursor)
    } catch (error) {
      console.error("Error al cargar eventos iniciales:", error)
      toast({
        title: "Error",
        description: "No se pudieron cargar los eventos. Intente nuevamente.",
        variant: "destructive",
      })
    } finally {
      setCargando(false)
    }
  }

  // Función para cargar más eventos (paginación)
  async function cargarMasEventos() {
    if (!cursor) return

    setCargando(true)
    try {
      const { eventos: nuevos, siguienteCursor } = await obtenerEventosPorPaginas({
        desde,
        hasta,
        tipo,
        email,
        lastVisible: cursor,
      })

      setEventos((prev) => [...prev, ...nuevos])
      setCursor(siguienteCursor)
      \
      setHayMas(!!siguienteCursor)iguienteCursor)
    } catch (error) {
      console.error("Error al cargar más eventos:", error)
      toast({
        title: "Error",
        description: "No se pudieron cargar más eventos. Intente nuevamente.",
        variant: "destructive",
      })
    } finally {
      setCargando(false)
    }
  }

  // Función para cargar eventos por día
  async function cargarEventosPorDia() {
    try {
      const datos = await obtenerEventosPorDia({ startDate: desde, endDate: hasta, tipo })
      setEventosPorDia(datos)
    } catch (error) {
      console.error("Error al cargar eventos por día:", error)
    }
  }

  // Función para cargar eventos por tipo
  async function cargarEventosPorTipo() {
    try {
      const datos = await obtenerEventosPorTipo({ startDate: desde, endDate: hasta })
      setEventosPorTipo(datos)
    } catch (error) {
      console.error("Error al cargar eventos por tipo:", error)
    }
  }

  // Función para cargar usuarios únicos
  async function cargarUsuariosUnicos() {
    try {
      const datos = await obtenerUsuariosUnicos({ startDate: desde, endDate: hasta })
      setUsuariosUnicos(datos)
    } catch (error) {
      console.error("Error al cargar usuarios únicos:", error)
    }
  }

  // Función para cargar páginas populares
  async function cargarPaginasPopulares() {
    try {
      const datos = await obtenerPaginasPopulares({ startDate: desde, endDate: hasta })
      setPaginasPopulares(datos)
    } catch (error) {
      console.error("Error al cargar páginas populares:", error)
    }
  }

  // Función para cargar contactos de WhatsApp
  async function cargarContactosWhatsApp() {
    try {
      const datos = await obtenerContactosWhatsApp({ startDate: desde, endDate: hasta })
      setContactosWhatsApp(datos)
    } catch (error) {
      console.error("Error al cargar contactos de WhatsApp:", error)
    }
  }

  // Función para cargar distribución de preguntas por tema
  async function cargarPreguntasPorTema() {
    try {
      const datos = await obtenerDistribucionPreguntasPorTema()
      setPreguntasPorTema(datos)
    } catch (error) {
      console.error("Error al cargar distribución de preguntas por tema:", error)
    }
  }

  // Función para aplicar filtros
  function aplicarFiltros() {
    cargarDatos()
  }

  // Función para formatear fecha
  function formatearFecha(fecha: Date): string {
    return format(fecha, "dd/MM/yyyy HH:mm", { locale: es })
  }

  // Función para traducir tipo de evento
  function traducirTipo(tipo: string): string {
    const traducciones: Record<string, string> = {
      page_view: "Vista de página",
      click: "Clic",
      login: "Inicio de sesión",
      signup: "Registro",
      document_analysis: "Análisis de documento",
      whatsapp_contacto: "Contacto WhatsApp",
      feedback: "Retroalimentación",
      search: "Búsqueda",
      download: "Descarga",
      error: "Error",
    }
    return traducciones[tipo] || tipo
  }

  // Función para traducir tema de pregunta
  function traducirTema(tema: string): string {
    const traducciones: Record<string, string> = {
      laboral: "Laboral",
      civil: "Civil",
      penal: "Penal",
      familia: "Familia",
      comercial: "Comercial",
      tributario: "Tributario",
      administrativo: "Administrativo",
      constitucional: "Constitucional",
      sin_tema: "Sin clasificar",
    }
    return traducciones[tema] || tema
  }

  // Preparar datos para gráfico de preguntas por tema
  const datosPreguntasPorTema = Object.entries(preguntasPorTema).map(([tema, cantidad], index) => ({
    name: traducirTema(tema),
    value: cantidad,
    color: COLORS[index % COLORS.length],
  }))

  if (cargandoInicial) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Cargando estadísticas...</span>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard de Estadísticas</h1>

      {/* Filtros */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-2">
              <DatePickerWithRange
                onChange={(range) => {
                  if (range?.from) setDesde(range.from)
                  if (range?.to) setHasta(range.to)
                }}
              />
            </div>
            <div>
              <Label htmlFor="tipo">Tipo de evento</Label>
              <Select value={tipo} onValueChange={setTipo}>
                <SelectTrigger id="tipo">
                  <SelectValue placeholder="Todos los tipos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos los tipos</SelectItem>
                  <SelectItem value="page_view">Vista de página</SelectItem>
                  <SelectItem value="click">Clic</SelectItem>
                  <SelectItem value="login">Inicio de sesión</SelectItem>
                  <SelectItem value="signup">Registro</SelectItem>
                  <SelectItem value="document_analysis">Análisis de documento</SelectItem>
                  <SelectItem value="whatsapp_contacto">Contacto WhatsApp</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="flex gap-2">
                <Input
                  id="email"
                  placeholder="Filtrar por email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button onClick={aplicarFiltros}>Aplicar</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="resumen">
        <TabsList className="mb-4">
          <TabsTrigger value="resumen">Resumen</TabsTrigger>
          <TabsTrigger value="eventos">Eventos</TabsTrigger>
          <TabsTrigger value="usuarios">Usuarios</TabsTrigger>
          <TabsTrigger value="paginas">Páginas</TabsTrigger>
          <TabsTrigger value="preguntas">Preguntas</TabsTrigger>
        </TabsList>

        {/* Tab: Resumen */}
        <TabsContent value="resumen">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Total de Eventos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{eventos.length}</p>
                <p className="text-sm text-muted-foreground">En el período seleccionado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Usuarios Únicos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{usuariosUnicos.length}</p>
                <p className="text-sm text-muted-foreground">En el período seleccionado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Contactos WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{contactosWhatsApp}</p>
                <p className="text-sm text-muted-foreground">En el período seleccionado</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Eventos por Día</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={eventosPorDia}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="fecha" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="total" fill="#8884d8" name="Total de eventos" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eventos por Tipo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
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
                      <Tooltip formatter={(value, name) => [value, traducirTipo(name as string)]} />
                      <Legend formatter={(value) => traducirTipo(value)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab: Eventos */}
        <TabsContent value="eventos">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Eventos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-2 text-left">ID</th>
                      <th className="p-2 text-left">Tipo</th>
                      <th className="p-2 text-left">Fecha</th>
                      <th className="p-2 text-left">Email</th>
                      <th className="p-2 text-left">Datos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventos.length > 0 ? (
                      eventos.map((evento) => (
                        <tr key={evento.id} className="border-b hover:bg-muted/50">
                          <td className="p-2">{evento.id}</td>
                          <td className="p-2">{traducirTipo(evento.tipo)}</td>
                          <td className="p-2">{formatearFecha(evento.timestamp)}</td>
                          <td className="p-2">{evento.email || evento.datos?.email || "-"}</td>
                          <td className="p-2">
                            <pre className="text-xs overflow-x-auto max-w-xs">
                              {JSON.stringify(evento.datos, null, 2)}
                            </pre>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="p-4 text-center">
                          No hay eventos para mostrar con los filtros seleccionados.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {hayMas && (
                <div className="flex justify-center mt-4">
                  <Button
                    onClick={cargarMasEventos}
                    disabled={cargando}
                    className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90"
                  >
                    {cargando ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Cargando...
                      </>
                    ) : (
                      "Cargar más eventos"
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Usuarios */}
        <TabsContent value="usuarios">
          <Card>
            <CardHeader>
              <CardTitle>Usuarios Únicos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-2 text-left">Email</th>
                      <th className="p-2 text-left">Primera Visita</th>
                      <th className="p-2 text-left">Última Acción</th>
                      <th className="p-2 text-left">Eventos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuariosUnicos.length > 0 ? (
                      usuariosUnicos.map((usuario) => (
                        <tr key={usuario.id} className="border-b hover:bg-muted/50">
                          <td className="p-2">{usuario.email}</td>
                          <td className="p-2">{formatearFecha(usuario.primeraVisita)}</td>
                          <td className="p-2">{formatearFecha(usuario.ultimaAccion)}</td>
                          <td className="p-2">{usuario.eventos}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="p-4 text-center">
                          No hay usuarios para mostrar con los filtros seleccionados.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Páginas */}
        <TabsContent value="paginas">
          <Card>
            <CardHeader>
              <CardTitle>Páginas Populares</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-2 text-left">Ruta</th>
                      <th className="p-2 text-left">Visitas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginasPopulares.length > 0 ? (
                      paginasPopulares.map((pagina, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="p-2">{pagina.ruta}</td>
                          <td className="p-2">{pagina.visitas}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2} className="p-4 text-center">
                          No hay datos de páginas para mostrar con los filtros seleccionados.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Preguntas */}
        <TabsContent value="preguntas">
          <Card>
            <CardHeader>
              <CardTitle>Distribución de Preguntas por Tema</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={datosPreguntasPorTema}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                    >
                      {datosPreguntasPorTema.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
