"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Loader2, RefreshCw } from "lucide-react"

interface Feedback {
  id: string
  type: string
  serviceUsed: string
  quickRating?: string
  detailedRating?: number
  comment?: string
  userId: string
  path?: string
  created_at: string
  timestamp?: string
}

export default function SugerenciasPage() {
  const [sugerencias, setSugerencias] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchSugerencias = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/admin/feedback")

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      setSugerencias(data.feedback || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido al cargar sugerencias")
      console.error("Error al cargar sugerencias:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSugerencias()
  }, [])

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Fecha desconocida"
    try {
      return new Date(dateString).toLocaleString("es-CL")
    } catch (e) {
      return dateString
    }
  }

  const getRatingBadge = (item: Feedback) => {
    if (item.quickRating === "positive") {
      return <Badge className="bg-green-100 text-green-800">Positiva</Badge>
    } else if (item.quickRating === "negative") {
      return <Badge className="bg-red-100 text-red-800">Negativa</Badge>
    } else if (item.detailedRating !== undefined) {
      const color =
        item.detailedRating >= 4
          ? "bg-green-100 text-green-800"
          : item.detailedRating >= 3
            ? "bg-yellow-100 text-yellow-800"
            : "bg-red-100 text-red-800"
      return <Badge className={color}>{item.detailedRating}/5</Badge>
    }
    return <span className="text-gray-500">-</span>
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Sugerencias y Feedback</CardTitle>
            <CardDescription>Listado de todas las sugerencias y feedback recibidos de los usuarios</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={fetchSugerencias} disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            <span className="ml-2">Actualizar</span>
          </Button>
        </CardHeader>
        <CardContent>
          {loading && sugerencias.length === 0 ? (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
            </div>
          ) : error ? (
            <div className="bg-red-50 p-4 rounded-md text-red-800">
              <p className="font-medium">Error al cargar sugerencias</p>
              <p className="text-sm">{error}</p>
            </div>
          ) : sugerencias.length === 0 ? (
            <div className="text-center py-10 text-gray-500">No hay sugerencias registradas</div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Servicio</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Valoración</TableHead>
                    <TableHead>Comentario</TableHead>
                    <TableHead>Usuario</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sugerencias.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="whitespace-nowrap">
                        {formatDate(item.timestamp || item.created_at)}
                      </TableCell>
                      <TableCell>{item.serviceUsed || "General"}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{item.type || "No especificado"}</Badge>
                      </TableCell>
                      <TableCell>{getRatingBadge(item)}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {item.comment || <span className="text-gray-500">Sin comentarios</span>}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {item.userId === "anonymous" ? <span className="text-gray-500">Anónimo</span> : item.userId}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
