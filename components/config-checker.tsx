"use client"

import { useEffect, useState } from "react"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function ConfigChecker() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState<string>("")

  useEffect(() => {
    const checkConfig = async () => {
      try {
        // Verificar la configuración de autenticación
        const authResponse = await fetch("/api/auth/check", { method: "GET" })
        if (!authResponse.ok) throw new Error("Error en la configuración de autenticación")

        // Verificar la configuración de OpenAI
        const openaiResponse = await fetch("/api/test-openai", { method: "GET" })
        if (!openaiResponse.ok) throw new Error("Error en la configuración de OpenAI")

        // Verificar la configuración de Analytics
        const analyticsResponse = await fetch("/api/analytics/check", { method: "GET" })
        if (!analyticsResponse.ok) throw new Error("Error en la configuración de Analytics")

        setStatus("success")
        setMessage("Todas las configuraciones están correctas")
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
