"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Shield, AlertTriangle, CheckCircle } from "lucide-react"

interface TrafficSource {
  id: string
  name: string
  description: string
  risk: "high" | "medium" | "low"
  detected: boolean
}

export function InvalidTrafficChecker() {
  const [trafficSources, setTrafficSources] = useState<TrafficSource[]>([
    {
      id: "paid-clicks",
      name: "Programas de pago por clic",
      description: "Servicios que pagan a usuarios por hacer clic en anuncios o visitar sitios web",
      risk: "high",
      detected: false,
    },
    {
      id: "traffic-exchanges",
      name: "Intercambios de tráfico",
      description: "Sistemas donde los usuarios visitan sitios web a cambio de que otros visiten los suyos",
      risk: "high",
      detected: false,
    },
    {
      id: "auto-refreshers",
      name: "Actualizadores automáticos",
      description: "Software que actualiza páginas automáticamente para generar impresiones",
      risk: "high",
      detected: false,
    },
    {
      id: "click-bots",
      name: "Bots de clics",
      description: "Software automatizado que simula clics de usuarios reales",
      risk: "high",
      detected: false,
    },
    {
      id: "incentivized-traffic",
      name: "Tráfico incentivado",
      description: "Ofrecer incentivos a usuarios para que visiten tu sitio o hagan clic en anuncios",
      risk: "high",
      detected: false,
    },
    {
      id: "low-quality-directory",
      name: "Directorios de baja calidad",
      description: "Sitios web que enlazan a múltiples sitios sin valor añadido",
      risk: "medium",
      detected: false,
    },
    {
      id: "suspicious-referrals",
      name: "Referencias sospechosas",
      description: "Tráfico proveniente de sitios web con contenido dudoso o de baja calidad",
      risk: "medium",
      detected: false,
    },
    {
      id: "unusual-traffic-patterns",
      name: "Patrones de tráfico inusuales",
      description: "Picos repentinos de tráfico o comportamientos anómalos de los usuarios",
      risk: "medium",
      detected: false,
    },
    {
      id: "self-clicks",
      name: "Clics propios",
      description: "Clics en anuncios realizados por el propietario del sitio o personas relacionadas",
      risk: "high",
      detected: false,
    },
    {
      id: "proxy-vpn",
      name: "Uso excesivo de proxies/VPN",
      description: "Alto porcentaje de tráfico proveniente de servicios de proxy o VPN",
      risk: "medium",
      detected: false,
    },
  ])

  const [isScanning, setIsScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)

  const startScan = () => {
    setIsScanning(true)

    // Simulación de escaneo
    setTimeout(() => {
      // En un caso real, aquí se realizaría un análisis de los datos de Analytics
      // Para esta demo, simplemente marcamos algunos elementos aleatorios como detectados
      const updatedSources = trafficSources.map((source) => ({
        ...source,
        detected: Math.random() < 0.2, // 20% de probabilidad de ser detectado
      }))

      setTrafficSources(updatedSources)
      setIsScanning(false)
      setScanComplete(true)
    }, 3000)
  }

  const highRiskDetected = trafficSources.some((source) => source.risk === "high" && source.detected)
  const mediumRiskDetected = trafficSources.some((source) => source.risk === "medium" && source.detected)
  const detectedCount = trafficSources.filter((source) => source.detected).length

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          Verificador de Tráfico No Válido
        </CardTitle>
        <CardDescription>
          Analiza tus fuentes de tráfico para detectar posibles problemas que puedan afectar a tu cuenta de AdSense
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
            <p className="text-sm text-blue-700">
              El tráfico no válido es una de las principales causas de limitación del servicio de anuncios. Esta
              herramienta te ayudará a identificar posibles fuentes de tráfico no válido en tu sitio.
            </p>
          </div>

          {!scanComplete ? (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">
                Haz clic en el botón para analizar tus fuentes de tráfico y detectar posibles problemas.
              </p>
              <Button onClick={startScan} disabled={isScanning}>
                {isScanning ? "Analizando..." : "Iniciar análisis"}
              </Button>
              {isScanning && (
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div className="bg-blue-600 h-2.5 rounded-full animate-pulse" style={{ width: "100%" }}></div>
                  </div>
                  <p className="text-sm text-gray-500">Analizando fuentes de tráfico...</p>
                </div>
              )}
            </div>
          ) : (
            <>
              {detectedCount > 0 ? (
                <Alert
                  className={`mb-4 ${highRiskDetected ? "bg-red-50 border-red-200" : "bg-yellow-50 border-yellow-200"}`}
                >
                  <AlertTriangle className={`h-4 w-4 ${highRiskDetected ? "text-red-600" : "text-yellow-600"}`} />
                  <AlertTitle className={highRiskDetected ? "text-red-800" : "text-yellow-800"}>
                    {highRiskDetected
                      ? "Se han detectado fuentes de tráfico de alto riesgo"
                      : "Se han detectado posibles problemas de tráfico"}
                  </AlertTitle>
                  <AlertDescription className={highRiskDetected ? "text-red-700" : "text-yellow-700"}>
                    Se han encontrado {detectedCount} posibles fuentes de tráfico no válido. Revisa los detalles a
                    continuación.
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert className="mb-4 bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">No se han detectado problemas</AlertTitle>
                  <AlertDescription className="text-green-700">
                    No se han encontrado fuentes de tráfico no válido en tu sitio. Sigue manteniendo buenas prácticas.
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-4">
                <h3 className="font-semibold text-red-700 mb-2">Fuentes de alto riesgo</h3>
                {trafficSources
                  .filter((source) => source.risk === "high")
                  .map((source) => (
                    <div
                      key={source.id}
                      className={`p-3 rounded-md ${source.detected ? "bg-red-50 border border-red-200" : "bg-gray-50 border border-gray-200"}`}
                    >
                      <div className="flex items-start">
                        {source.detected ? (
                          <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                        ) : (
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        )}
                        <div>
                          <h4 className={`font-medium ${source.detected ? "text-red-800" : "text-gray-800"}`}>
                            {source.name}
                          </h4>
                          <p className={`text-sm ${source.detected ? "text-red-700" : "text-gray-600"}`}>
                            {source.description}
                          </p>
                          {source.detected && (
                            <p className="text-sm font-medium text-red-700 mt-1">
                              Acción recomendada: Eliminar inmediatamente esta fuente de tráfico
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                <h3 className="font-semibold text-amber-700 mb-2 mt-6">Fuentes de riesgo medio</h3>
                {trafficSources
                  .filter((source) => source.risk === "medium")
                  .map((source) => (
                    <div
                      key={source.id}
                      className={`p-3 rounded-md ${source.detected ? "bg-amber-50 border border-amber-200" : "bg-gray-50 border border-gray-200"}`}
                    >
                      <div className="flex items-start">
                        {source.detected ? (
                          <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                        ) : (
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        )}
                        <div>
                          <h4 className={`font-medium ${source.detected ? "text-amber-800" : "text-gray-800"}`}>
                            {source.name}
                          </h4>
                          <p className={`text-sm ${source.detected ? "text-amber-700" : "text-gray-600"}`}>
                            {source.description}
                          </p>
                          {source.detected && (
                            <p className="text-sm font-medium text-amber-700 mt-1">
                              Acción recomendada: Investigar y reducir esta fuente de tráfico
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-6 text-center">
                <Button
                  onClick={() => {
                    setScanComplete(false)
                    setTrafficSources(trafficSources.map((source) => ({ ...source, detected: false })))
                  }}
                >
                  Reiniciar análisis
                </Button>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
