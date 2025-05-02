"use client"

import { useState, useEffect } from "react"
import { db } from "@/utils/firebaseClient"
import { collection, getDocs, query, limit } from "firebase/firestore"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertTriangle, RefreshCw } from "lucide-react"

export default function FirebaseDiagnostics() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [eventCount, setEventCount] = useState<number | null>(null)
  const [latestEvent, setLatestEvent] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [isChecking, setIsChecking] = useState(false)

  useEffect(() => {
    checkFirebaseConnection()
  }, [])

  const checkFirebaseConnection = async () => {
    try {
      setIsChecking(true)
      setStatus("loading")
      setError(null)

      // Verificar si Firebase está inicializado
      const firestore = db()
      if (!firestore) {
        throw new Error("Firebase no está inicializado correctamente")
      }

      // Intentar obtener eventos
      const eventosRef = collection(firestore, "eventos")
      const q = query(eventosRef, limit(1))
      const snapshot = await getDocs(q)

      // Contar eventos
      const countQuery = query(eventosRef, limit(1000))
      const countSnapshot = await getDocs(countQuery)
      setEventCount(countSnapshot.size)

      // Obtener el evento más reciente
      if (!snapshot.empty) {
        const doc = snapshot.docs[0]
        setLatestEvent({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate?.() || new Date(),
        })
      }

      setStatus("success")
    } catch (err) {
      console.error("Error al verificar Firebase:", err)
      setStatus("error")
      setError(err instanceof Error ? err.message : "Error desconocido")
    } finally {
      setIsChecking(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Diagnóstico de Firebase</CardTitle>
            <CardDescription>Estado de la conexión con Firebase Firestore</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={checkFirebaseConnection} disabled={isChecking}>
            <RefreshCw className={`mr-2 h-4 w-4 ${isChecking ? "animate-spin" : ""}`} />
            {isChecking ? "Verificando..." : "Verificar"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {status === "loading" && (
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Verificando conexión</AlertTitle>
            <AlertDescription>Comprobando la conexión con Firebase Firestore...</AlertDescription>
          </Alert>
        )}

        {status === "error" && (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Error de conexión</AlertTitle>
            <AlertDescription>
              No se pudo conectar con Firebase Firestore: {error}
              <div className="mt-2 text-sm">
                <p>Posibles causas:</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Firebase no está inicializado correctamente</li>
                  <li>No hay conexión a internet</li>
                  <li>Las credenciales de Firebase son incorrectas</li>
                </ul>
              </div>
            </AlertDescription>
          </Alert>
        )}

        {status === "success" && (
          <div className="space-y-4">
            <Alert variant="default" className="border-green-500 bg-green-50 dark:bg-green-900/20">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <AlertTitle>Conexión exitosa</AlertTitle>
              <AlertDescription>Firebase Firestore está conectado correctamente.</AlertDescription>
            </Alert>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium mb-2">Eventos en Firestore</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{eventCount !== null ? eventCount : "..."}</span>
                  <Badge variant={eventCount && eventCount > 0 ? "default" : "outline"}>
                    {eventCount && eventCount > 0 ? "Datos disponibles" : "Sin datos"}
                  </Badge>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium mb-2">Último evento registrado</h3>
                {latestEvent ? (
                  <div className="text-sm">
                    <p>
                      <span className="font-medium">Tipo:</span> {latestEvent.tipo || "N/A"}
                    </p>
                    <p>
                      <span className="font-medium">Fecha:</span>{" "}
                      {latestEvent.timestamp instanceof Date ? latestEvent.timestamp.toLocaleString() : "N/A"}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No se encontraron eventos</p>
                )}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
