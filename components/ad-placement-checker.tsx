"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertTriangle, X, Check } from "lucide-react"

interface PlacementIssue {
  id: string
  title: string
  description: string
  recommendation: string
  severity: "high" | "medium" | "low"
  status: "ok" | "warning" | "error" | "unknown"
}

export function AdPlacementChecker() {
  const [placementIssues, setPlacementIssues] = useState<PlacementIssue[]>([
    {
      id: "popup-placement",
      title: "Anuncios en ventanas emergentes",
      description: "Verificar que no haya anuncios colocados en ventanas emergentes o subyacentes",
      recommendation: "Elimina cualquier anuncio colocado en ventanas emergentes o subyacentes",
      severity: "high",
      status: "unknown",
    },
    {
      id: "email-placement",
      title: "Anuncios en correos electrónicos",
      description: "Verificar que no haya anuncios colocados en correos electrónicos",
      recommendation: "No coloques anuncios de AdSense en correos electrónicos",
      severity: "high",
      status: "unknown",
    },
    {
      id: "software-placement",
      title: "Anuncios en software",
      description: "Verificar que no haya anuncios colocados en software o aplicaciones",
      recommendation: "No coloques anuncios de AdSense en software o aplicaciones sin usar las APIs adecuadas",
      severity: "high",
      status: "unknown",
    },
    {
      id: "misleading-placement",
      title: "Implementación engañosa",
      description:
        "Verificar que los anuncios no estén colocados de manera que puedan confundirse con menús o navegación",
      recommendation: "Asegúrate de que los anuncios estén claramente diferenciados del contenido y la navegación",
      severity: "high",
      status: "unknown",
    },
    {
      id: "ad-density",
      title: "Densidad de anuncios",
      description: "Verificar que no haya demasiados anuncios en una sola página",
      recommendation: "Mantén una densidad de anuncios razonable para no afectar la experiencia del usuario",
      severity: "medium",
      status: "unknown",
    },
    {
      id: "ad-balance",
      title: "Balance de contenido y anuncios",
      description: "Verificar que haya un balance adecuado entre contenido y anuncios",
      recommendation: "Asegúrate de que tu sitio tenga más contenido que anuncios",
      severity: "medium",
      status: "unknown",
    },
    {
      id: "ad-visibility",
      title: "Visibilidad de anuncios",
      description: "Verificar que los anuncios sean visibles sin necesidad de desplazamiento excesivo",
      recommendation: "Coloca los anuncios en lugares visibles sin necesidad de desplazamiento excesivo",
      severity: "low",
      status: "unknown",
    },
    {
      id: "ad-labeling",
      title: "Etiquetado de anuncios",
      description: "Verificar que los anuncios estén claramente etiquetados como publicidad cuando sea necesario",
      recommendation: "Etiqueta claramente los anuncios como 'Publicidad' o 'Anuncio' cuando sea necesario",
      severity: "medium",
      status: "unknown",
    },
  ])

  const [isChecking, setIsChecking] = useState(false)
  const [checkComplete, setCheckComplete] = useState(false)

  const startCheck = () => {
    setIsChecking(true)

    // Simulación de verificación
    setTimeout(() => {
      // En un caso real, aquí se realizaría una verificación de la implementación de anuncios
      // Para esta demo, simplemente asignamos estados aleatorios
      const updatedIssues = placementIssues.map((issue) => {
        const random = Math.random()
        let status: "ok" | "warning" | "error" | "unknown"

        if (random < 0.6) {
          status = "ok"
        } else if (random < 0.8) {
          status = "warning"
        } else {
          status = "error"
        }

        return {
          ...issue,
          status,
        }
      })

      setPlacementIssues(updatedIssues)
      setIsChecking(false)
      setCheckComplete(true)
    }, 3000)
  }

  const resetCheck = () => {
    setCheckComplete(false)
    setPlacementIssues(placementIssues.map((issue) => ({ ...issue, status: "unknown" })))
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ok":
        return <Check className="h-5 w-5 text-green-600" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-amber-600" />
      case "error":
        return <X className="h-5 w-5 text-red-600" />
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case "ok":
        return "bg-green-50 border-green-200"
      case "warning":
        return "bg-amber-50 border-amber-200"
      case "error":
        return "bg-red-50 border-red-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "ok":
        return "Correcto"
      case "warning":
        return "Advertencia"
      case "error":
        return "Error"
      default:
        return "No verificado"
    }
  }

  const hasErrors = placementIssues.some((issue) => issue.status === "error")
  const hasWarnings = placementIssues.some((issue) => issue.status === "warning")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-blue-600" />
          Verificador de Implementación de Anuncios
        </CardTitle>
        <CardDescription>
          Verifica que la implementación de tus anuncios cumpla con las políticas de AdSense
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="checker">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="checker">Verificador</TabsTrigger>
            <TabsTrigger value="guidelines">Directrices</TabsTrigger>
          </TabsList>

          <TabsContent value="checker">
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
                <p className="text-sm text-blue-700">
                  La colocación incorrecta de anuncios es una de las principales causas de problemas con AdSense. Esta
                  herramienta te ayudará a verificar que tus anuncios estén implementados correctamente.
                </p>
              </div>

              {!checkComplete ? (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">
                    Haz clic en el botón para verificar la implementación de tus anuncios.
                  </p>
                  <Button onClick={startCheck} disabled={isChecking}>
                    {isChecking ? "Verificando..." : "Iniciar verificación"}
                  </Button>
                  {isChecking && (
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                        <div className="bg-blue-600 h-2.5 rounded-full animate-pulse" style={{ width: "100%" }}></div>
                      </div>
                      <p className="text-sm text-gray-500">Analizando implementación de anuncios...</p>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {hasErrors ? (
                    <Alert className="mb-4 bg-red-50 border-red-200">
                      <X className="h-4 w-4 text-red-600" />
                      <AlertTitle className="text-red-800">Se han detectado problemas críticos</AlertTitle>
                      <AlertDescription className="text-red-700">
                        Se han encontrado problemas críticos en la implementación de tus anuncios que podrían violar las
                        políticas de AdSense. Corrige estos problemas lo antes posible.
                      </AlertDescription>
                    </Alert>
                  ) : hasWarnings ? (
                    <Alert className="mb-4 bg-amber-50 border-amber-200">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      <AlertTitle className="text-amber-800">Se han detectado advertencias</AlertTitle>
                      <AlertDescription className="text-amber-700">
                        Se han encontrado algunas advertencias en la implementación de tus anuncios. Revisa las
                        recomendaciones para mejorar tu implementación.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <Alert className="mb-4 bg-green-50 border-green-200">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertTitle className="text-green-800">Implementación correcta</AlertTitle>
                      <AlertDescription className="text-green-700">
                        No se han detectado problemas en la implementación de tus anuncios. ¡Sigue así!
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Resultados de la verificación</h3>
                    {placementIssues.map((issue) => (
                      <div key={issue.id} className={`p-3 rounded-md border ${getStatusClass(issue.status)}`}>
                        <div className="flex items-start">
                          <div className="mt-0.5 mr-3 flex-shrink-0">{getStatusIcon(issue.status)}</div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium">{issue.title}</h4>
                              <span
                                className={`text-xs px-2 py-1 rounded-full ${
                                  issue.status === "ok"
                                    ? "bg-green-100 text-green-800"
                                    : issue.status === "warning"
                                      ? "bg-amber-100 text-amber-800"
                                      : issue.status === "error"
                                        ? "bg-red-100 text-red-800"
                                        : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {getStatusText(issue.status)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{issue.description}</p>
                            {issue.status !== "ok" && (
                              <p className="text-sm font-medium mt-2 text-blue-700">
                                Recomendación: {issue.recommendation}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button onClick={resetCheck}>Reiniciar verificación</Button>
                  </div>
                </>
              )}
            </div>
          </TabsContent>

          <TabsContent value="guidelines">
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
                <h3 className="font-medium text-blue-800 mb-2">Directrices para la implementación de anuncios</h3>
                <p className="text-sm text-blue-700">
                  Sigue estas directrices para asegurarte de que la implementación de tus anuncios cumpla con las
                  políticas de AdSense.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium text-red-700">No coloques anuncios en lugares inapropiados</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    No coloques anuncios en ventanas emergentes, correos electrónicos o software. Estos emplazamientos
                    están prohibidos por las políticas de AdSense.
                  </p>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium text-red-700">No uses implementaciones engañosas</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    No coloques anuncios de manera que puedan confundirse con menús, barras de navegación o enlaces de
                    descargas. Los anuncios deben estar claramente diferenciados del contenido.
                  </p>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium text-amber-700">Mantén una densidad de anuncios razonable</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    No sobrecargues tu sitio con demasiados anuncios. Mantén un balance adecuado entre contenido y
                    anuncios para no afectar la experiencia del usuario.
                  </p>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium text-amber-700">Etiqueta los anuncios cuando sea necesario</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    En algunos casos, es necesario etiquetar los anuncios como "Publicidad" o "Anuncio" para cumplir con
                    las regulaciones locales y las políticas de AdSense.
                  </p>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium text-green-700">Usa anuncios automáticos</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Considera usar anuncios automáticos para que Google coloque los anuncios en los lugares óptimos de
                    tu sitio, maximizando los ingresos y cumpliendo con las políticas.
                  </p>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium text-green-700">Prueba diferentes formatos y ubicaciones</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Experimenta con diferentes formatos y ubicaciones de anuncios para encontrar la combinación que
                    mejor funcione para tu sitio, siempre respetando las políticas de AdSense.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
