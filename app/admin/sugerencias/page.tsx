"use client"

import { Suspense } from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"

async function SugerenciasTable() {
  // Verificar si el usuario es administrador
  const session = await getServerSession(authOptions)
  const isAdmin = session?.user?.email === process.env.ADMIN_EMAIL

  if (!isAdmin) {
    redirect("/")
  }

  // Obtener sugerencias de Supabase
  const { createClient } = await import("@supabase/supabase-js")
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || "", process.env.SUPABASE_SERVICE_KEY || "")

  const { data: sugerencias, error } = await supabase
    .from("user_feedback")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error al obtener sugerencias:", error)
    return <div>Error al cargar sugerencias: {error.message}</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Total: {sugerencias?.length || 0} sugerencias</h2>
        <Button onClick={() => window.location.reload()}>Actualizar</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Fecha</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Servicio</TableHead>
            <TableHead>Valoración</TableHead>
            <TableHead>Comentario</TableHead>
            <TableHead>Usuario</TableHead>
            <TableHead>Página</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sugerencias && sugerencias.length > 0 ? (
            sugerencias.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="whitespace-nowrap">
                  {formatDistanceToNow(new Date(item.timestamp || item.created_at), {
                    addSuffix: true,
                    locale: es,
                  })}
                </TableCell>
                <TableCell>
                  <Badge variant={item.type === "quick" ? "outline" : "secondary"}>
                    {item.type === "quick" ? "Rápido" : "Detallado"}
                  </Badge>
                </TableCell>
                <TableCell>{item.serviceUsed || "General"}</TableCell>
                <TableCell>
                  {item.quickRating ? (
                    <Badge variant={item.quickRating === "positive" ? "success" : "destructive"}>
                      {item.quickRating === "positive" ? "Positiva" : "Negativa"}
                    </Badge>
                  ) : item.detailedRating ? (
                    <Badge variant={item.detailedRating >= 4 ? "success" : "default"}>{item.detailedRating}/5</Badge>
                  ) : (
                    "N/A"
                  )}
                </TableCell>
                <TableCell className="max-w-md truncate">{item.comment || "Sin comentario"}</TableCell>
                <TableCell>{item.userId || "Anónimo"}</TableCell>
                <TableCell className="max-w-xs truncate">{item.path || "N/A"}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-4">
                No hay sugerencias disponibles
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default function SugerenciasPage() {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Panel de Sugerencias</CardTitle>
          <CardDescription>Visualiza todas las sugerencias y feedback enviados por los usuarios</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Cargando sugerencias...</div>}>
            <SugerenciasTable />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}
