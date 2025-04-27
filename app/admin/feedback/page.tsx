"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Download, Filter, Search } from "lucide-react"

// Tipos para el feedback
interface FeedbackItem {
  id: string
  type: "quick" | "detailed"
  quickRating: "positive" | "negative" | null
  detailedRating: number | null
  comment: string
  serviceUsed: string
  userId: string
  userType: "anonymous" | "registered"
  path: string
  timestamp: string
  context?: string
}

export default function FeedbackDashboardPage() {
  const [feedback, setFeedback] = useState<FeedbackItem[]>([])
  const [filteredFeedback, setFilteredFeedback] = useState<FeedbackItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [serviceFilter, setServiceFilter] = useState<string>("all")
  const [ratingFilter, setRatingFilter] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [activeTab, setActiveTab] = useState<string>("overview")
  const [adminKey, setAdminKey] = useState("")
  const [error, setError] = useState<string | null>(null)

  // Función para obtener el feedback
  const fetchFeedback = async () => {
    if (!adminKey) {
      setError("Por favor ingresa la clave de administrador")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/admin/feedback?key=${adminKey}`)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Error fetching feedback")
      }

      const data = await response.json()
      setFeedback(data)
      setFilteredFeedback(data)
    } catch (error) {
      console.error("Error fetching feedback:", error)
      setError(error.message || "Error desconocido")
    } finally {
      setIsLoading(false)
    }
  }

  // Aplicar filtros
  useEffect(() => {
    let result = [...feedback]

    // Filtrar por servicio
    if (serviceFilter !== "all") {
      result = result.filter((item) => item.serviceUsed === serviceFilter)
    }

    // Filtrar por rating
    if (ratingFilter !== "all") {
      if (ratingFilter === "positive") {
        result = result.filter(
          (item) => item.quickRating === "positive" || (item.detailedRating && item.detailedRating >= 4),
        )
      } else if (ratingFilter === "negative") {
        result = result.filter(
          (item) => item.quickRating === "negative" || (item.detailedRating && item.detailedRating <= 2),
        )
      } else if (ratingFilter === "neutral") {
        result = result.filter((item) => item.detailedRating === 3)
      }
    }

    // Filtrar por búsqueda
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (item) =>
          (item.comment && item.comment.toLowerCase().includes(query)) ||
          (item.userId && item.userId.toLowerCase().includes(query)) ||
          (item.path && item.path.toLowerCase().includes(query)),
      )
    }

    setFilteredFeedback(result)
  }, [feedback, serviceFilter, ratingFilter, searchQuery])

  // Preparar datos para gráficos
  const prepareServiceData = () => {
    const serviceCounts: Record<string, number> = {}

    feedback.forEach((item) => {
      const service = item.serviceUsed || "desconocido"
      serviceCounts[service] = (serviceCounts[service] || 0) + 1
    })

    return Object.entries(serviceCounts).map(([name, value]) => ({
      name,
      value,
    }))
  }

  const prepareRatingData = () => {
    const ratings = [
      { name: "1 ⭐", value: 0 },
      { name: "2 ⭐", value: 0 },
      { name: "3 ⭐", value: 0 },
      { name: "4 ⭐", value: 0 },
      { name: "5 ⭐", value: 0 },
    ]

    feedback.forEach((item) => {
      if (item.detailedRating && item.detailedRating >= 1 && item.detailedRating <= 5) {
        ratings[item.detailedRating - 1].value++
      }
    })

    return ratings
  }

  const prepareSentimentData = () => {
    let positive = 0
    let negative = 0
    let neutral = 0

    feedback.forEach((item) => {
      if (item.quickRating === "positive" || (item.detailedRating && item.detailedRating >= 4)) {
        positive++
      } else if (item.quickRating === "negative" || (item.detailedRating && item.detailedRating <= 2)) {
        negative++
      } else if (item.detailedRating === 3) {
        neutral++
      }
    })

    return [
      { name: "Positivo", value: positive },
      { name: "Neutral", value: neutral },
      { name: "Negativo", value: negative },
    ]
  }

  // Exportar datos a CSV
  const exportToCSV = () => {
    // Crear encabezados
    const headers = [
      "ID",
      "Tipo",
      "Rating Rápido",
      "Rating Detallado",
      "Comentario",
      "Servicio",
      "Usuario",
      "Tipo Usuario",
      "Ruta",
      "Fecha",
    ].join(",")

    // Crear filas
    const rows = filteredFeedback.map((item) =>
      [
        item.id,
        item.type,
        item.quickRating,
        item.detailedRating,
        `"${item.comment?.replace(/"/g, '""') || ""}"`, // Escapar comillas
        item.serviceUsed,
        item.userId,
        item.userType,
        `"${item.path}"`,
        item.timestamp,
      ].join(","),
    )

    // Combinar todo
    const csv = [headers, ...rows].join("\n")

    // Crear blob y descargar
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `feedback_export_${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Panel de Feedback</h1>

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
              <Button onClick={fetchFeedback} disabled={isLoading}>
                {isLoading ? "Cargando..." : "Cargar Datos"}
              </Button>
            </div>
            {error && <div className="mt-2 text-sm text-red-500">{error}</div>}
          </CardContent>
        </Card>
      </div>

      {feedback.length > 0 ? (
        <>
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filtrar por servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los servicios</SelectItem>
                    <SelectItem value="document-analysis">Análisis de documentos</SelectItem>
                    <SelectItem value="contract-generator">Generador de contratos</SelectItem>
                    <SelectItem value="calculator">Calculadoras</SelectItem>
                    <SelectItem value="chat">Chat asistente</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={ratingFilter} onValueChange={setRatingFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filtrar por rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los ratings</SelectItem>
                    <SelectItem value="positive">Positivos</SelectItem>
                    <SelectItem value="neutral">Neutrales</SelectItem>
                    <SelectItem value="negative">Negativos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar comentarios..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 w-[250px]"
                />
              </div>

              <Button variant="outline" onClick={exportToCSV}>
                <Download className="mr-2 h-4 w-4" />
                Exportar CSV
              </Button>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="details">Detalles</TabsTrigger>
              <TabsTrigger value="comments">Comentarios</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Distribución por servicio</CardTitle>
                    <CardDescription>Feedback recibido por cada servicio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <div className="flex flex-col gap-2">
                        {prepareServiceData().map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: `hsl(${index * 50}, 70%, 50%)` }}
                            ></div>
                            <div className="flex-1">{item.name}</div>
                            <div className="font-medium">{item.value}</div>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div
                                className="h-2 rounded-full"
                                style={{
                                  width: `${(item.value / feedback.length) * 100}%`,
                                  backgroundColor: `hsl(${index * 50}, 70%, 50%)`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Distribución de ratings</CardTitle>
                    <CardDescription>Ratings detallados recibidos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <div className="flex flex-col gap-2">
                        {prepareRatingData().map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-12">{item.name}</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-6">
                              <div
                                className="h-6 rounded-full flex items-center px-2 text-xs text-white"
                                style={{
                                  width: `${Math.max(
                                    (item.value / Math.max(...prepareRatingData().map((i) => i.value), 1)) * 100,
                                    5,
                                  )}%`,
                                  backgroundColor: `hsl(${index * 50}, 70%, 50%)`,
                                }}
                              >
                                {item.value}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sentimiento general</CardTitle>
                    <CardDescription>Distribución de feedback positivo, neutral y negativo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <div className="flex flex-col gap-2">
                        {prepareSentimentData().map((item, index) => {
                          const colors = ["#4CAF50", "#FFC107", "#F44336"]
                          return (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors[index] }}></div>
                              <div className="flex-1">{item.name}</div>
                              <div className="font-medium">{item.value}</div>
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div
                                  className="h-2 rounded-full"
                                  style={{
                                    width: `${(item.value / feedback.length) * 100}%`,
                                    backgroundColor: colors[index],
                                  }}
                                ></div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Estadísticas generales</CardTitle>
                    <CardDescription>Resumen de métricas clave</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Total feedback</p>
                        <p className="text-2xl font-bold">{feedback.length}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Tasa de respuesta</p>
                        <p className="text-2xl font-bold">
                          {feedback.filter((item) => item.comment && item.comment.trim() !== "").length} /{" "}
                          {feedback.length}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Rating promedio</p>
                        <p className="text-2xl font-bold">
                          {(
                            feedback
                              .filter((item) => item.detailedRating)
                              .reduce((acc, item) => acc + (item.detailedRating || 0), 0) /
                              feedback.filter((item) => item.detailedRating).length || 0
                          ).toFixed(1)}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">% Positivo</p>
                        <p className="text-2xl font-bold">
                          {(
                            (feedback.filter(
                              (item) =>
                                item.quickRating === "positive" || (item.detailedRating && item.detailedRating >= 4),
                            ).length /
                              feedback.length) *
                              100 || 0
                          ).toFixed(0)}
                          %
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <CardTitle>Detalles del feedback</CardTitle>
                  <CardDescription>{filteredFeedback.length} resultados encontrados</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Servicio</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Usuario</TableHead>
                        <TableHead>Ruta</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredFeedback.slice(0, 50).map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{new Date(item.timestamp).toLocaleDateString()}</TableCell>
                          <TableCell>{item.serviceUsed}</TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>
                            {item.detailedRating
                              ? `${item.detailedRating}/5`
                              : item.quickRating === "positive"
                                ? "👍"
                                : item.quickRating === "negative"
                                  ? "👎"
                                  : "-"}
                          </TableCell>
                          <TableCell>{item.userId || "Anónimo"}</TableCell>
                          <TableCell className="max-w-[200px] truncate">{item.path}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  {filteredFeedback.length > 50 && (
                    <div className="mt-4 text-center text-sm text-muted-foreground">
                      Mostrando 50 de {filteredFeedback.length} resultados. Exporta a CSV para ver todos.
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="comments">
              <Card>
                <CardHeader>
                  <CardTitle>Comentarios de usuarios</CardTitle>
                  <CardDescription>
                    {filteredFeedback.filter((item) => item.comment && item.comment.trim() !== "").length} comentarios
                    encontrados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredFeedback
                      .filter((item) => item.comment && item.comment.trim() !== "")
                      .slice(0, 30)
                      .map((item) => (
                        <div key={item.id} className="border rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{item.userId || "Usuario anónimo"}</span>
                              <span className="text-sm text-muted-foreground">
                                {new Date(item.timestamp).toLocaleDateString()}
                              </span>
                            </div>
                            <div>
                              {item.detailedRating
                                ? `${item.detailedRating}/5`
                                : item.quickRating === "positive"
                                  ? "👍"
                                  : item.quickRating === "negative"
                                    ? "👎"
                                    : "-"}
                            </div>
                          </div>
                          <p className="text-gray-700">{item.comment}</p>
                          <div className="mt-2 text-xs text-muted-foreground">
                            Servicio: {item.serviceUsed} | Ruta: {item.path}
                          </div>
                        </div>
                      ))}

                    {filteredFeedback.filter((item) => item.comment && item.comment.trim() !== "").length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">
                        No se encontraron comentarios con los filtros actuales.
                      </div>
                    )}

                    {filteredFeedback.filter((item) => item.comment && item.comment.trim() !== "").length > 30 && (
                      <div className="mt-4 text-center text-sm text-muted-foreground">
                        Mostrando 30 de{" "}
                        {filteredFeedback.filter((item) => item.comment && item.comment.trim() !== "").length}{" "}
                        comentarios. Exporta a CSV para ver todos.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      ) : (
        !isLoading && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-500">No hay datos de feedback disponibles</p>
            <p className="text-sm text-gray-400 mt-2">Ingresa la clave de administrador y haz clic en "Cargar Datos"</p>
          </div>
        )
      )}

      {isLoading && (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground">Cargando datos de feedback...</p>
        </div>
      )}
    </div>
  )
}
