"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export default function AIStatusPage() {
  const [status, setStatus] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastChecked, setLastChecked] = useState<Date | null>(null)

  const fetchStatus = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/test-ai-providers")
      if (!response.ok) {
        throw new Error(`Error al obtener estado: ${response.status}`)
      }
      const data = await response.json()
      setStatus(data)
      setLastChecked(new Date())
    } catch (err) {
      console.error("Error al verificar estado de IA:", err)
      setError(err.message || "Error desconocido")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStatus()
  }, [])

  const renderStatusIcon = (isAvailable: boolean) => {
    return isAvailable ? (
      <CheckCircle className="h-6 w-6 text-green-500" />
    ) : (
      <XCircle className="h-6 w-6 text-red-500" />
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Estado de Servicios de IA</h1>
        <Button onClick={fetchStatus} disabled={loading} className="flex items-center gap-2">
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          Actualizar
        </Button>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {lastChecked && (
        <p className="text-sm text-gray-500 mb-6">
          Última verificación: {lastChecked.toLocaleDateString()} {lastChecked.toLocaleTimeString()}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Estado general */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Estado General</CardTitle>
            <CardDescription>Disponibilidad de servicios de IA</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : status ? (
              <div className="flex items-center gap-4">
                {status.any_provider_available ? (
                  <Alert variant="default" className="bg-green-50 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <AlertTitle>Servicios disponibles</AlertTitle>
                    <AlertDescription>Al menos un proveedor de IA está funcionando correctamente.</AlertDescription>
                  </Alert>
                ) : (
                  <Alert variant="destructive">
                    <XCircle className="h-4 w-4" />
                    <AlertTitle>Servicios no disponibles</AlertTitle>
                    <AlertDescription>Ningún proveedor de IA está disponible en este momento.</AlertDescription>
                  </Alert>
                )}
              </div>
            ) : null}
          </CardContent>
        </Card>

        {/* Vertex AI */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {loading ? (
                <Skeleton className="h-6 w-6 rounded-full" />
              ) : status?.providers?.vertex_ai ? (
                renderStatusIcon(status.providers.vertex_ai.available)
              ) : null}
              Vertex AI (Google Cloud)
            </CardTitle>
            <CardDescription>Servicio de IA de Google Cloud</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : status?.providers?.vertex_ai ? (
              <div className="space-y-2">
                <p>
                  <strong>Estado:</strong>{" "}
                  {status.providers.vertex_ai.available ? (
                    <span className="text-green-600">Disponible</span>
                  ) : (
                    <span className="text-red-600">No disponible</span>
                  )}
                </p>
                <p>
                  <strong>Mensaje:</strong> {status.providers.vertex_ai.message}
                </p>
                {status.providers.vertex_ai.config && (
                  <div className="mt-2">
                    <p className="font-medium">Configuración:</p>
                    <ul className="list-disc pl-5 mt-1 text-sm">
                      <li>Proyecto: {status.providers.vertex_ai.config.project_id}</li>
                      <li>Región: {status.providers.vertex_ai.config.location}</li>
                      <li>Credenciales: {status.providers.vertex_ai.config.credentials}</li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-500">Información no disponible</p>
            )}
          </CardContent>
        </Card>

        {/* OpenAI */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {loading ? (
                <Skeleton className="h-6 w-6 rounded-full" />
              ) : status?.providers?.openai ? (
                renderStatusIcon(status.providers.openai.available)
              ) : null}
              OpenAI
            </CardTitle>
            <CardDescription>Servicio de respaldo</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : status?.providers?.openai ? (
              <div className="space-y-2">
                <p>
                  <strong>Estado:</strong>{" "}
                  {status.providers.openai.available ? (
                    <span className="text-green-600">Disponible</span>
                  ) : (
                    <span className="text-red-600">No disponible</span>
                  )}
                </p>
                <p>
                  <strong>Mensaje:</strong> {status.providers.openai.message}
                </p>
                {status.providers.openai.models && (
                  <div className="mt-2">
                    <p className="font-medium">Modelos disponibles:</p>
                    <ul className="list-disc pl-5 mt-1 text-sm">
                      {status.providers.openai.models.map((model: string) => (
                        <li key={model}>{model}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-500">Información no disponible</p>
            )}
          </CardContent>
        </Card>

        {/* Gemini */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {loading ? (
                <Skeleton className="h-6 w-6 rounded-full" />
              ) : status?.providers?.gemini ? (
                renderStatusIcon(status.providers.gemini.available)
              ) : null}
              Gemini
            </CardTitle>
            <CardDescription>Servicio alternativo de Google</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : status?.providers?.gemini ? (
              <div className="space-y-2">
                <p>
                  <strong>Estado:</strong>{" "}
                  {status.providers.gemini.available ? (
                    <span className="text-green-600">Disponible</span>
                  ) : (
                    <span className="text-red-600">No disponible</span>
                  )}
                </p>
                <p>
                  <strong>Mensaje:</strong> {status.providers.gemini.message}
                </p>
                {status.providers.gemini.models && (
                  <div className="mt-2">
                    <p className="font-medium">Modelos disponibles:</p>
                    <ul className="list-disc pl-5 mt-1 text-sm">
                      {status.providers.gemini.models.map((model: string) => (
                        <li key={model}>{model}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-500">Información no disponible</p>
            )}
          </CardContent>
        </Card>

        {/* Estado de autenticación */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Estado de Autenticación</CardTitle>
            <CardDescription>Configuración de credenciales</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : status?.auth_status ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Google Cloud</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Credenciales:{" "}
                      {status.auth_status.google_cloud.credentials_configured ? (
                        <span className="text-green-600">Configuradas</span>
                      ) : (
                        <span className="text-red-600">No configuradas</span>
                      )}
                    </li>
                    <li>
                      ID de proyecto:{" "}
                      {status.auth_status.google_cloud.project_id_configured ? (
                        <span className="text-green-600">Configurado</span>
                      ) : (
                        <span className="text-red-600">No configurado</span>
                      )}
                    </li>
                    <li>
                      Estado general:{" "}
                      <span
                        className={
                          status.auth_status.google_cloud.status === "Configurado"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }
                      >
                        {status.auth_status.google_cloud.status}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Otros proveedores</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      OpenAI API Key:{" "}
                      {status.auth_status.openai.api_key_configured ? (
                        <span className="text-green-600">Configurada</span>
                      ) : (
                        <span className="text-red-600">No configurada</span>
                      )}
                    </li>
                    <li>
                      Gemini API Key:{" "}
                      {status.auth_status.gemini.api_key_configured ? (
                        <span className="text-green-600">Configurada</span>
                      ) : (
                        <span className="text-red-600">No configurada</span>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Información no disponible</p>
            )}
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">
              Asegúrate de que todas las credenciales estén correctamente configuradas para el funcionamiento óptimo de
              los servicios de IA.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
