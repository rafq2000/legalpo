"use client"

import { useEffect, useState } from "react"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function ConfigChecker() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState<string>("")

  useEffect(() => {
    // Modificar la función checkConfig para manejar mejor los errores
    // Reemplazar la función checkConfig con esta versión mejorada:
    const checkConfig = async () => {
      try {
        let configStatus = true
        const errorMessages = []

        // Verificar la configuración de autenticación
        try {
          const authResponse = await fetch("/api/auth/check", { method: "GET" })
          if (!authResponse.ok) {
            configStatus = false
            errorMessages.push("Error en la configuración de autenticación")
          }
        } catch (error) {
          configStatus = false
          errorMessages.push("No se pudo verificar la configuración de autenticación")
        }

        // Verificar la configuración de OpenAI
        try {
          const openaiResponse = await fetch("/api/test-openai", { method: "GET" })
          const openaiData = await openaiResponse.json()

          if (!openaiResponse.ok || !openaiData.success) {
            configStatus = false
            errorMessages.push(openaiData.error || "Error en la configuración de OpenAI")
          }
        } catch (error) {
          configStatus = false
          errorMessages.push("No se pudo verificar la configuración de OpenAI")
        }

        // Verificar la configuración de Analytics
        try {
          const analyticsResponse = await fetch("/api/analytics/check", { method: "GET" })
          if (!analyticsResponse.ok) {
            configStatus = false
            errorMessages.push("Error en la configuración de Analytics")
          }
        } catch (error) {
          configStatus = false
          errorMessages.push("No se pudo verificar la configuración de Analytics")
        }

        if (configStatus) {
          setStatus("success")
          setMessage("Todas las configuraciones están correctas")
        } else {
          setStatus("error")
          setMessage(errorMessages.join(". "))
        }
      } catch (error) {
        setStatus("error")
        setMessage(error instanceof Error ? error.message : "Error desconocido en la configuración")
      }
    }

    checkConfig()
  }, [])

  if (status === "loading") return null

  return (
    <Alert variant={status === "success" ? "default" : "destructive"}>
      {status === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
      <AlertTitle>Estado de configuración</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}
