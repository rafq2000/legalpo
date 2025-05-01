"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Shield, Info, BarChart, Mail } from "lucide-react"
import { Suspense } from "react"

// Componente interno que maneja el estado
function CookieConsentBannerInner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState({
    necessary: true, // Siempre necesarias
    preferences: false,
    statistics: false,
    marketing: false,
  })

  useEffect(() => {
    // Verificar si ya existe consentimiento
    const consentCookie = localStorage.getItem("cookieConsent")

    if (!consentCookie) {
      // Mostrar banner después de 1 segundo
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)

      return () => clearTimeout(timer)
    } else {
      // Cargar preferencias guardadas
      try {
        const savedConsent = JSON.parse(consentCookie)
        setConsent(savedConsent)
      } catch (e) {
        console.error("Error al cargar preferencias de cookies:", e)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    }

    setConsent(newConsent)
    updateCookieConsent(newConsent)
    setIsVisible(false)
  }

  const handleAcceptSelected = () => {
    updateCookieConsent(consent)
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    const newConsent = {
      necessary: true, // Siempre necesarias
      preferences: false,
      statistics: false,
      marketing: false,
    }

    setConsent(newConsent)
    updateCookieConsent(newConsent)
    setIsVisible(false)
  }

  const handleConsentChange = (key: keyof typeof consent) => {
    setConsent((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const updateCookieConsent = (consentData: typeof consent) => {
    // Guardar en localStorage
    localStorage.setItem("cookieConsent", JSON.stringify(consentData))

    // Enviar al servidor si es necesario
    try {
      fetch("/api/cookie-consent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consentData),
      })
    } catch (error) {
      console.error("Error al actualizar consentimiento:", error)
    }

    // Activar o desactivar Google Analytics según consentimiento
    if (typeof window !== "undefined") {
      if (consentData.statistics) {
        // Activar Google Analytics
        window.gtag?.("consent", "update", {
          analytics_storage: "granted",
        })
      } else {
        // Desactivar Google Analytics
        window.gtag?.("consent", "update", {
          analytics_storage: "denied",
        })
      }

      // Activar o desactivar marketing
      if (consentData.marketing) {
        window.gtag?.("consent", "update", {
          ad_storage: "granted",
        })
      } else {
        window.gtag?.("consent", "update", {
          ad_storage: "denied",
        })
      }
    }
  }

  // Botón para volver a mostrar el banner
  const handleManageCookies = () => {
    setIsVisible(true)
  }

  // Añadir al objeto window para acceso global
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.openCookieConsent = handleManageCookies
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-black/20 backdrop-blur-sm">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Política de Cookies</CardTitle>
          <CardDescription>
            Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Según la Ley Nº 19.628 sobre Protección
            de la Vida Privada, solicitamos su consentimiento para el uso de cookies.
          </CardDescription>
        </CardHeader>

        {showDetails && (
          <CardContent className="grid gap-6">
            <div className="grid gap-3">
              <div className="flex items-start space-x-4">
                <Shield className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="necessary" checked disabled />
                    <Label htmlFor="necessary" className="font-medium">
                      Cookies necesarias
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Estas cookies son esenciales para el funcionamiento del sitio web y no pueden ser desactivadas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Info className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="preferences"
                      checked={consent.preferences}
                      onCheckedChange={() => handleConsentChange("preferences")}
                    />
                    <Label htmlFor="preferences" className="font-medium">
                      Cookies de preferencias
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Estas cookies permiten recordar sus preferencias y personalizar su experiencia.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <BarChart className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="statistics"
                      checked={consent.statistics}
                      onCheckedChange={() => handleConsentChange("statistics")}
                    />
                    <Label htmlFor="statistics" className="font-medium">
                      Cookies de estadísticas
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Estas cookies nos ayudan a entender cómo interactúan los visitantes con nuestro sitio web,
                    recopilando información anónima.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-purple-500 mt-0.5" />
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="marketing"
                      checked={consent.marketing}
                      onCheckedChange={() => handleConsentChange("marketing")}
                    />
                    <Label htmlFor="marketing" className="font-medium">
                      Cookies de marketing
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Estas cookies se utilizan para rastrear a los visitantes en los sitios web con el fin de mostrar
                    anuncios relevantes.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        )}

        <CardFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" onClick={() => setShowDetails(!showDetails)}>
              {showDetails ? "Ocultar detalles" : "Mostrar detalles"}
            </Button>
            <Button variant="outline" size="sm" onClick={handleRejectAll}>
              Rechazar no esenciales
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" onClick={handleAcceptSelected}>
              Aceptar seleccionadas
            </Button>
            <Button size="sm" onClick={handleAcceptAll}>
              Aceptar todas
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

// Componente exportado que envuelve el componente interno en Suspense
export default function CookieConsentBanner() {
  return (
    <Suspense fallback={null}>
      <CookieConsentBannerInner />
    </Suspense>
  )
}
