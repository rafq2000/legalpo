"use client"

import { useEffect, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export function ConfigChecker() {
  const [missingConfigs, setMissingConfigs] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function checkConfigs() {
      try {
        const response = await fetch("/api/auth/check")
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || "Error al verificar configuración")
        }

        setMissingConfigs(data.missingConfigs || [])
      } catch (error) {
        console.error("Error al verificar configuración:", error)
        // No mostrar errores específicos al usuario
      } finally {
        setIsLoading(false)
      }
    }

    checkConfigs()
  }, [])

  if (isLoading || missingConfigs.length === 0) {
    return null
  }

  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Configuración incompleta</AlertTitle>
      <AlertDescription>
        <p>Faltan las siguientes variables de entorno:</p>
        <ul className="list-disc pl-5 mt-2">
          {missingConfigs.map((config) => (
            <li key={config}>{config}</li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  )
}
