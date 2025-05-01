"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { Trash2, RefreshCw, Search } from "lucide-react"

interface CachedResponse {
  id: string
  query: string
  normalized_query: string
  response: string
  provider: string
  created_at: string
}

export default function CacheAdminPage() {
  const [responses, setResponses] = useState<CachedResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [daysToKeep, setDaysToKeep] = useState(30)
  const { toast } = useToast()

  useEffect(() => {
    fetchResponses()
  }, [])

  const fetchResponses = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/admin/cache")
      if (!res.ok) throw new Error("Error al cargar respuestas en caché")

      const data = await res.json()
      setResponses(data)
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "No se pudieron cargar las respuestas en caché",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCleanup = async () => {
    try {
      const res = await fetch("/api/admin/cache/cleanup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ days: daysToKeep }),
      })

      if (!res.ok) throw new Error("Error al limpiar caché")

      const { deleted } = await res.json()

      toast({
        title: "Caché limpiado",
        description: `Se eliminaron ${deleted} respuestas antiguas`,
      })

      fetchResponses()
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "No se pudo limpiar el caché",
        variant: "destructive",
      })
    }
  }

  const handleDeleteResponse = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/cache/${id}`, {
        method: "DELETE",
      })

      if (!res.ok) throw new Error("Error al eliminar respuesta")

      toast({
        title: "Respuesta eliminada",
        description: "La respuesta ha sido eliminada del caché",
      })

      setResponses(responses.filter((r) => r.id !== id))
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "No se pudo eliminar la respuesta",
        variant: "destructive",
      })
    }
  }

  const filteredResponses = searchTerm
    ? responses.filter(
        (r) =>
          r.query.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.normalized_query.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : responses

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Administración de Caché</h1>

      <Tabs defaultValue="responses">
        <TabsList className="mb-4">
          <TabsTrigger value="responses">Respuestas en Caché</TabsTrigger>
          <TabsTrigger value="cleanup">Limpieza</TabsTrigger>
        </TabsList>

        <TabsContent value="responses">
          <Card>
            <CardHeader>
              <CardTitle>Respuestas Almacenadas</CardTitle>
              <CardDescription>
                Administra las respuestas almacenadas en caché para consultas frecuentes.
              </CardDescription>

              <div className="flex items-center gap-2 mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar consultas..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" onClick={fetchResponses} disabled={loading}>
                  <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
                  Actualizar
                </Button>
              </div>
            </CardHeader>

            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Consulta</TableHead>
                      <TableHead>Proveedor</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead className="w-[100px]">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-8">
                          Cargando respuestas...
                        </TableCell>
                      </TableRow>
                    ) : filteredResponses.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-8">
                          {searchTerm ? "No se encontraron resultados" : "No hay respuestas en caché"}
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredResponses.map((response) => (
                        <TableRow key={response.id}>
                          <TableCell className="font-medium">
                            {response.query.length > 50 ? `${response.query.substring(0, 50)}...` : response.query}
                          </TableCell>
                          <TableCell>{response.provider}</TableCell>
                          <TableCell>{new Date(response.created_at).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon" onClick={() => handleDeleteResponse(response.id)}>
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cleanup">
          <Card>
            <CardHeader>
              <CardTitle>Limpieza de Caché</CardTitle>
              <CardDescription>Elimina respuestas antiguas para mantener el rendimiento del sistema.</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="days">Días a mantener</Label>
                  <Input
                    id="days"
                    type="number"
                    min="1"
                    max="365"
                    value={daysToKeep}
                    onChange={(e) => setDaysToKeep(Number.parseInt(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground">
                    Las respuestas más antiguas que {daysToKeep} días serán eliminadas.
                  </p>
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button onClick={handleCleanup}>
                <Trash2 className="h-4 w-4 mr-2" />
                Limpiar caché antiguo
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
