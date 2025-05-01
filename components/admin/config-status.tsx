"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"

interface ConfigStatus {
  allPresent: boolean
  missing: string[]
  results: Array<{ name: string; exists: boolean }>
}

export default function ConfigStatus() {
  const [status, setStatus] = useState<ConfigStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function checkConfig() {
      try {
        const res = await fetch("/api/admin/config-check")
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`)
        }
        const data = await res.json()
        setStatus(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido")
      } finally {
        setLoading(false)
      }
    }

    checkConfig()
  }, [])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Verificando configuración...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error al verificar configuración</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  if (!status) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Estado de la configuración</CardTitle>
        <CardDescription>Verificación de variables de entorno y conexiones</CardDescription>
      </CardHeader>
      <CardContent>
        {status.allPresent ? (
          <Alert variant="default" className="bg-green-50 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <AlertTitle className="text-green-700">Configuración correcta</AlertTitle>
            <AlertDescription className="text-green-600">
              Todas las variables de entorno requeridas están configuradas.
            </AlertDescription>
          </Alert>
        ) : (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Configuración incompleta</AlertTitle>
            <AlertDescription>Faltan las siguientes variables de entorno: {status.missing.join(", ")}</AlertDescription>
          </Alert>
        )}

        <div className="mt-4">
          <h3 className="font-medium mb-2">Variables de entorno:</h3>
          <ul className="space-y-1">
            {status.results.map((item) => (
              <li key={item.name} className="flex items-center">
                {item.exists ? (
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-500 mr-2" />
                )}
                <span className={item.exists ? "text-green-700" : "text-red-700"}>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
