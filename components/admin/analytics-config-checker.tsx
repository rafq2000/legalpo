"use client"

import { useState, useEffect } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, RefreshCw } from "lucide-react"

export default function AnalyticsConfigChecker() {
  const [configStatus, setConfigStatus] = useState<any>(null)
  const [isChecking, setIsChecking] = useState(false)
  const [apiResponse, setApiResponse] = useState<any>(null)
  const [isTestingApi, setIsTestingApi] = useState(false)

  const checkConfig = async () => {
    setIsChecking(true)
    try {
      const res = await fetch("/api/admin/config-check?service=analytics")
      const data = await res.json()
      setConfigStatus(data)
    } catch (error) {
      console.error("Error al verificar configuración:", error)
      setConfigStatus({ isValid: false, error: String(error) })
    } finally {
      setIsChecking(false)
    }
  }

  const testAnalyticsApi = async () => {
    setIsTestingApi(true)
    try {
      const res = await fetch("/api/analytics")
      const data = await res.json()
      setApiResponse(data)
    } catch (error) {
      console.error("Error al probar API:", error)
      setApiResponse({ error: String(error) })
    } finally {
      setIsTestingApi(false)
    }
  }

  useEffect(() => {
    checkConfig()
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Verificación de Analytics</h2>
        <Button variant="outline" size="sm" onClick={checkConfig} disabled={isChecking}>
          <RefreshCw className={`mr-2 h-4 w-4 ${isChecking ? "animate-spin" : ""}`} />
          {isChecking ? "Verificando..." : "Verificar"}
        </Button>
      </div>

      {configStatus && (
        <Alert variant={configStatus.isValid ? "default" : "destructive"}>
          <div className="flex items-center gap-2">
            {configStatus.isValid ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            <AlertTitle>{configStatus.isValid ? "Configuración correcta" : "Configuración incompleta"}</AlertTitle>
          </div>
          <AlertDescription>
            {configStatus.isValid ? (
              <p>Todas las variables de entorno necesarias están configuradas correctamente.</p>
            ) : (
              <div className="mt-2">
                <p>Faltan las siguientes variables de entorno o tienen formato incorrecto:</p>
                <ul className="list-disc pl-5 mt-1">
                  {configStatus.missingVars?.map((variable: string) => (
                    <li key={variable}>{variable}</li>
                  ))}
                </ul>
              </div>
            )}
          </AlertDescription>
        </Alert>
      )}

      <div className="mt-4">
        <Button onClick={testAnalyticsApi} disabled={isTestingApi || (configStatus && !configStatus.isValid)}>
          {isTestingApi ? "Probando API..." : "Probar API de Analytics"}
        </Button>

        {apiResponse && (
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
            <h3 className="font-medium mb-2">Respuesta de la API:</h3>
            <pre className="text-xs overflow-auto max-h-60">{JSON.stringify(apiResponse, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  )
}
