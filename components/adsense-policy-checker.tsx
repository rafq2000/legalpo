"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Shield, AlertTriangle, CheckCircle } from "lucide-react"

interface PolicyItem {
  id: string
  title: string
  description: string
  recommendation: string
  checked: boolean
}

export function AdsensePolicyChecker() {
  const [policyItems, setPolicyItems] = useState<PolicyItem[]>([
    {
      id: "invalid-clicks",
      title: "Impresiones y clics no válidos",
      description: "Verificar que no haya clics automáticos o artificiales en los anuncios",
      recommendation:
        "Asegúrate de que nadie en tu organización haga clic en los anuncios. No uses herramientas automatizadas.",
      checked: false,
    },
    {
      id: "ad-placement",
      title: "Colocación de anuncios",
      description: "Verificar que los anuncios no estén colocados en lugares inapropiados",
      recommendation:
        "No coloques anuncios en ventanas emergentes, correos o software. Mantén una distancia adecuada entre anuncios.",
      checked: false,
    },
    {
      id: "site-behavior",
      title: "Comportamiento del sitio",
      description: "Verificar que el sitio no altere las preferencias de los usuarios o redirija a sitios no deseados",
      recommendation: "Asegúrate de que tu sitio no tenga redirecciones no deseadas, malware o ventanas emergentes.",
      checked: false,
    },
    {
      id: "misleading-navigation",
      title: "Navegación engañosa",
      description: "Verificar que los anuncios no se confundan con menús o enlaces de navegación",
      recommendation:
        "Asegúrate de que los anuncios estén claramente diferenciados del contenido y la navegación del sitio.",
      checked: false,
    },
    {
      id: "content-quality",
      title: "Calidad del contenido",
      description: "Verificar que el contenido sea original, de calidad y cumpla con las políticas de contenido",
      recommendation:
        "Asegúrate de que tu contenido sea original, útil y no viole las políticas de contenido de AdSense.",
      checked: false,
    },
    {
      id: "technical-implementation",
      title: "Implementación técnica",
      description: "Verificar que la implementación técnica de AdSense sea correcta",
      recommendation: "Usa el código de AdSense sin modificaciones y asegúrate de que se cargue correctamente.",
      checked: false,
    },
    {
      id: "traffic-sources",
      title: "Fuentes de tráfico",
      description: "Verificar que el tráfico provenga de fuentes legítimas",
      recommendation: "No compres tráfico, no uses programas de pago por clic ni envíes correos no deseados.",
      checked: false,
    },
    {
      id: "ad-behavior",
      title: "Comportamiento de los anuncios",
      description: "Verificar que no se hayan hecho cambios al código de AdSense que afecten su rendimiento",
      recommendation: "No modifiques el código de AdSense de manera que aumente artificialmente el rendimiento.",
      checked: false,
    },
  ])

  const [showRecommendations, setShowRecommendations] = useState(false)

  const toggleItem = (id: string) => {
    setPolicyItems(policyItems.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }

  const allChecked = policyItems.every((item) => item.checked)
  const progress = Math.round((policyItems.filter((item) => item.checked).length / policyItems.length) * 100)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          Verificación de Políticas de AdSense
        </CardTitle>
        <CardDescription>
          Revisa cada punto para asegurar que tu sitio cumpla con las políticas de AdSense
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {policyItems.map((item) => (
            <div key={item.id} className="flex items-start space-x-3 p-3 rounded-md bg-gray-50">
              <Checkbox
                id={item.id}
                checked={item.checked}
                onCheckedChange={() => toggleItem(item.id)}
                className="mt-1"
              />
              <div className="space-y-1">
                <label
                  htmlFor={item.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.title}
                </label>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}

          <div className="mt-6">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Progreso</span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${
                  progress < 50 ? "bg-red-500" : progress < 100 ? "bg-yellow-500" : "bg-green-500"
                }`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {allChecked ? (
          <Alert className="mt-6 bg-green-50 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">¡Excelente!</AlertTitle>
            <AlertDescription className="text-green-700">
              Has verificado todos los puntos de cumplimiento de políticas. Esto ayudará a que tu cuenta de AdSense sea
              evaluada positivamente.
            </AlertDescription>
          </Alert>
        ) : (
          <Alert className="mt-6 bg-yellow-50 border-yellow-200">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <AlertTitle className="text-yellow-800">Verificación en progreso</AlertTitle>
            <AlertDescription className="text-yellow-700">
              Continúa verificando cada punto para asegurar el cumplimiento de las políticas de AdSense.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setShowRecommendations(!showRecommendations)}>
          {showRecommendations ? "Ocultar recomendaciones" : "Ver recomendaciones"}
        </Button>
        <Button disabled={!allChecked}>Guardar verificación</Button>
      </CardFooter>

      {showRecommendations && (
        <div className="px-6 pb-6">
          <h3 className="text-lg font-semibold mb-4">Recomendaciones detalladas</h3>
          <div className="space-y-4">
            {policyItems.map((item) => (
              <div key={`rec-${item.id}`} className="p-4 rounded-md bg-blue-50">
                <h4 className="font-medium text-blue-800">{item.title}</h4>
                <p className="text-sm text-blue-700 mt-1">{item.recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  )
}
