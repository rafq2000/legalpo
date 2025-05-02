"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TestEventButton } from "@/components/test-event-button"
import { obtenerTodosEventos } from "@/utils/firestore-service"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export default function TestEventosPage() {
  const [eventos, setEventos] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const cargarEventos = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const eventosData = await obtenerTodosEventos()
      setEventos(eventosData.slice(0, 10)) // Mostrar solo los 10 más recientes para la prueba
    } catch (error) {
      console.error("Error al cargar eventos:", error)
      setError("No se pudieron cargar los eventos. Intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    cargarEventos()
  }, [])

  // Función para formatear timestamp
  const formatTimestamp = (timestamp: any) => {
    if (!timestamp) return "N/A"

    if (typeof timestamp === "string") {
      return new Date(timestamp).toLocaleString()
    }

    if (timestamp.toDate && typeof timestamp.toDate === "function") {
      try {
        return timestamp.toDate().toLocaleString()
      } catch (e) {
        return "Fecha inválida"
      }
    }

    return "Formato desconocido"
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Prueba de Registro de Eventos</h1>

      <div className="mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Registrar Evento de Prueba</CardTitle>
            <CardDescription>Haz clic en el botón para registrar un evento de prueba en Firestore</CardDescription>
          </CardHeader>
          <CardContent>
            <TestEventButton />
          </CardContent>
        </Card>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Eventos Recientes</h2>
          <Button variant="outline" onClick={cargarEventos} disabled={isLoading} className="flex items-center gap-2">
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            {isLoading ? "Cargando..." : "Actualizar"}
          </Button>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-4">{error}</div>}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">ID</th>
                <th className="py-2 px-4 border-b text-left">Tipo</th>
                <th className="py-2 px-4 border-b text-left">Timestamp</th>
                <th className="py-2 px-4 border-b text-left">Email</th>
                <th className="py-2 px-4 border-b text-left">Datos</th>
              </tr>
            </thead>
            <tbody>
              {eventos.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-4 px-4 text-center text-gray-500">
                    {isLoading ? "Cargando eventos..." : "No hay eventos para mostrar"}
                  </td>
                </tr>
              ) : (
                eventos.map((evento) => (
                  <tr key={evento.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{evento.id}</td>
                    <td className="py-2 px-4 border-b">{evento.tipo || "N/A"}</td>
                    <td className="py-2 px-4 border-b">{formatTimestamp(evento.timestamp)}</td>
                    <td className="py-2 px-4 border-b">{evento.email || evento.datos?.email || "N/A"}</td>
                    <td className="py-2 px-4 border-b">
                      <pre className="text-xs overflow-x-auto max-w-xs">{JSON.stringify(evento.datos, null, 2)}</pre>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
