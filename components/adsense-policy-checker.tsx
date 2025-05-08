"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Shield, AlertTriangle, CheckCircle, Info } from "lucide-react"

interface PolicyItem {
  id: string
  title: string
  description: string
  recommendation: string
  checked: boolean
  category: "critical" | "important" | "recommended"
}

export function AdsensePolicyChecker() {
  const [policyItems, setPolicyItems] = useState<PolicyItem[]>([
    {
      id: "invalid-clicks",
      title: "Impresiones y clics no válidos",
      description: "Verificar que no haya clics automáticos o artificiales en los anuncios",
      recommendation:
        "Asegúrate de que nadie en tu organización haga clic en los anuncios. No uses herramientas automatizadas para generar impresiones o clics.",
      checked: false,
      category: "critical",
    },
    {
      id: "encourage-clicks",
      title: "No animar a los usuarios a ver o hacer clic en anuncios",
      description: "Verificar que no se anime a los usuarios a hacer clic en anuncios ni a verlos",
      recommendation:
        "No pidas a terceros que vean o hagan clic en tus anuncios, ni uses métodos engañosos para obtener clics o visualizaciones.",
      checked: false,
      category: "critical",
    },
    {
      id: "traffic-sources",
      title: "Fuentes de tráfico válidas",
      description: "Verificar que el tráfico provenga de fuentes legítimas",
      recommendation:
        "No compres tráfico, no uses programas de pago por clic ni envíes correos no deseados para generar tráfico.",
      checked: false,
      category: "critical",
    },
    {
      id: "ad-behavior",
      title: "Comportamiento de los anuncios",
      description: "Verificar que no se hayan hecho cambios al código de AdSense que afecten su rendimiento",
      recommendation:
        "No modifiques el código de AdSense de manera que aumente artificialmente el rendimiento o perjudique a los anunciantes.",
      checked: false,
      category: "important",
    },
    {
      id: "ad-placement",
      title: "Colocación de anuncios",
      description: "Verificar que los anuncios no estén colocados en lugares inapropiados",
      recommendation:
        "No coloques anuncios en ventanas emergentes, correos o software. Mantén una distancia adecuada entre anuncios.",
      checked: false,
      category: "important",
    },
    {
      id: "site-behavior",
      title: "Comportamiento del sitio",
      description: "Verificar que el sitio no altere las preferencias de los usuarios o redirija a sitios no deseados",
      recommendation:
        "Asegúrate de que tu sitio no tenga redirecciones no deseadas, malware o ventanas emergentes que interfieran con la navegación.",
      checked: false,
      category: "important",
    },
    {
      id: "misleading-navigation",
      title: "Navegación engañosa",
      description: "Verificar que los anuncios no se confundan con menús o enlaces de navegación",
      recommendation:
        "Asegúrate de que los anuncios estén claramente diferenciados del contenido y la navegación del sitio. No uses implementaciones engañosas.",
      checked: false,
      category: "important",
    },
    {
      id: "webview-compliance",
      title: "Requisitos técnicos para WebView",
      description: "Verificar el cumplimiento de requisitos técnicos para marcos de visualización web",
      recommendation:
        "Si usas WebView en aplicaciones móviles, asegúrate de utilizar la API de WebView para anuncios o marcos de visualización admitidos.",
      checked: false,
      category: "recommended",
    },
    {
      id: "sensitive-events",
      title: "Acontecimientos sensibles",
      description: "Verificar que no se monetice contenido relacionado con acontecimientos sensibles",
      recommendation:
        "Ten en cuenta que Google puede limitar los anuncios en contenido relacionado con acontecimientos sensibles o inesperados.",
      checked: false,
      category: "recommended",
    },
    {
      id: "content-quality",
      title: "Calidad del contenido",
      description: "Verificar que el contenido sea original, de calidad y cumpla con las políticas de contenido",
      recommendation:
        "Asegúrate de que tu contenido sea original, útil y no viole las políticas de contenido de AdSense.",
      checked: false,
      category: "important",
    },
  ])

  const [showRecommendations, setShowRecommendations] = useState(false)

  const toggleItem = (id: string) => {
    setPolicyItems(policyItems.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }

  const allChecked = policyItems.every((item) => item.checked)
  const criticalChecked = policyItems.filter((item) => item.category === "critical").every((item) => item.checked)
  const progress = Math.round((policyItems.filter((item) => item.checked).length / policyItems.length) * 100)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          Verificación de Políticas de AdSense
        </CardTitle>
        <CardDescription>
          Revisa cada punto para asegurar que tu sitio cumpla con las políticas de AdSense y resolver la limitación del
          servicio de anuncios
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-4">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-amber-800">Limitación del servicio de anuncios</h3>
                <p className="text-sm text-amber-700 mt-1">
                  Google limita temporalmente el número de anuncios mientras evalúa la calidad del tráfico. Esta
                  limitación suele durar 30 días, pero puede extenderse. Es importante verificar el cumplimiento de
                  todas las políticas de AdSense.
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-semibold text-red-700 mb-2">Políticas críticas</h3>
          {policyItems
            .filter((item) => item.category === "critical")
            .map((item) => (
              <div key={item.id} className="flex items-start space-x-3 p-3 rounded-md bg-red-50 border border-red-100">
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
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}

          <h3 className="font-semibold text-amber-700 mb-2">Políticas importantes</h3>
          {policyItems
            .filter((item) => item.category === "important")
            .map((item) => (
              <div
                key={item.id}
                className="flex items-start space-x-3 p-3 rounded-md bg-amber-50 border border-amber-100"
              >
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
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}

          <h3 className="font-semibold text-blue-700 mb-2">Políticas recomendadas</h3>
          {policyItems
            .filter((item) => item.category === "recommended")
            .map((item) => (
              <div
                key={item.id}
                className="flex items-start space-x-3 p-3 rounded-md bg-blue-50 border border-blue-100"
              >
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
                  <p className="text-sm text-gray-600">{item.description}</p>
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
              Has verificado todos los puntos de cumplimiento de políticas. Esto ayudará a resolver la limitación del
              servicio de anuncios.
            </AlertDescription>
          </Alert>
        ) : criticalChecked ? (
          <Alert className="mt-6 bg-blue-50 border-blue-200">
            <CheckCircle className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-800">¡Buen progreso!</AlertTitle>
            <AlertDescription className="text-blue-700">
              Has verificado todas las políticas críticas. Continúa con el resto para asegurar el cumplimiento completo.
            </AlertDescription>
          </Alert>
        ) : (
          <Alert className="mt-6 bg-yellow-50 border-yellow-200">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <AlertTitle className="text-yellow-800">Verificación en progreso</AlertTitle>
            <AlertDescription className="text-yellow-700">
              Asegúrate de verificar primero las políticas críticas para resolver la limitación del servicio de
              anuncios.
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
              <div
                key={`rec-${item.id}`}
                className={`p-4 rounded-md ${
                  item.category === "critical"
                    ? "bg-red-50 text-red-800"
                    : item.category === "important"
                      ? "bg-amber-50 text-amber-800"
                      : "bg-blue-50 text-blue-800"
                }`}
              >
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm mt-1 opacity-90">{item.recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  )
}
