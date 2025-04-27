"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle, Loader2 } from "lucide-react"

interface User {
  email: string
  created_at: string
  last_login?: string
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [adminKey, setAdminKey] = useState("")
  const [showDebug, setShowDebug] = useState(false)
  const [debugInfo, setDebugInfo] = useState<any>(null)

  async function fetchUsers() {
    if (!adminKey) {
      setError("Ingresa la clave de administrador")
      return
    }

    setLoading(true)
    setError(null)
    setDebugInfo(null)

    try {
      const response = await fetch(`/api/admin/users?key=${adminKey}`)
      const data = await response.json()

      // Guardar información de depuración
      setDebugInfo(data)

      if (data.error && !data.users) {
        throw new Error(data.error)
      }

      setUsers(data.users || [])

      if (data.error && data.users) {
        // Si hay un error pero también hay usuarios (datos de ejemplo)
        setError(`${data.error} - Mostrando datos de ejemplo.`)
      }
    } catch (err) {
      console.error("Error fetching users:", err)
      setError(err.message || "Error desconocido")
    } finally {
      setLoading(false)
    }
  }

  function formatDate(dateString: string) {
    if (!dateString) return "N/A"
    try {
      const date = new Date(dateString)
      return date.toLocaleString()
    } catch (e) {
      return "Fecha inválida"
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Usuarios Registrados</CardTitle>
          <CardDescription>Visualiza todos los usuarios registrados en la plataforma</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 mb-6">
            <Input
              type="password"
              placeholder="Clave de administrador"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              className="max-w-xs"
            />
            <Button onClick={fetchUsers} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Cargando...
                </>
              ) : (
                "Cargar Usuarios"
              )}
            </Button>
            <Button variant="outline" onClick={() => setShowDebug(!showDebug)} className="ml-auto">
              {showDebug ? "Ocultar Debug" : "Mostrar Debug"}
            </Button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              {error}
            </div>
          )}

          {showDebug && debugInfo && (
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-md mb-6 overflow-auto max-h-60">
              <pre className="text-xs">{JSON.stringify(debugInfo, null, 2)}</pre>
            </div>
          )}

          {loading ? (
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Fecha de registro</TableHead>
                  <TableHead>Último acceso</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                      {adminKey
                        ? "No hay usuarios para mostrar"
                        : "Ingresa la clave de administrador para ver usuarios"}
                    </TableCell>
                  </TableRow>
                ) : (
                  users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{formatDate(user.created_at)}</TableCell>
                      <TableCell>{formatDate(user.last_login || "")}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
