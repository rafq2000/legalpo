"use client"

import { useEffect, useState } from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function AdsenseDiagnostics() {
  const [status, setStatus] = useState<"checking" | "success" | "error" | "blocked">("checking")
  const [message, setMessage] = useState<string>("Verificando AdSense...")
  const [details, setDetails] = useState<string[]>([])

  useEffect(() => {
    const checkAdSense = () => {
      try {
        // Verificar si estamos en el cliente
        if (typeof window === "undefined") {
          return
        }

        // Añadir detalles de diagnóstico
        const diagnosticDetails: string[] = []

        // Verificar si el meta tag está presente
        const metaTag = document.querySelector('meta[name="google-adsense-account"]')
        if (metaTag) {
          diagnosticDetails.push("✅ Meta tag de AdSense encontrado")
        } else {
          diagnosticDetails.push("❌ Meta tag de AdSense no encontrado")
        }

        // Verificar si el script de AdSense está cargado
        const adsenseScript = document.querySelector(
          'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]',
        )
        if (adsenseScript) {
          diagnosticDetails.push("✅ Script de AdSense encontrado")
        } else {
          diagnosticDetails.push("❌ Script de AdSense no encontrado")
        }

        // Verificar si adsbygoogle está definido
        if (window.adsbygoogle) {
          diagnosticDetails.push("✅ Variable adsbygoogle definida")
        } else {
          diagnosticDetails.push("❌ Variable adsbygoogle no definida")
        }

        setDetails(diagnosticDetails)

        // Verificar si hay un bloqueador de anuncios
        const testAd = document.createElement("div")
        testAd.innerHTML = "&nbsp;"
        testAd.className = "adsbox"
        document.body.appendChild(testAd)

        setTimeout(() => {
          if (testAd.offsetHeight === 0) {
            setStatus("blocked")
            setMessage("Se ha detectado un bloqueador de anuncios. Desactívalo para ver los anuncios.")
          } else {
            // Verificar si adsbygoogle está definido
            if (window.adsbygoogle) {
              setStatus("success")
              setMessage("AdSense está configurado correctamente.")
            } else {
              setStatus("error")
              setMessage("AdSense no se ha cargado correctamente. Verifica la configuración.")
            }
          }
          document.body.removeChild(testAd)
        }, 100)
      } catch (e) {
        console.error("Error al verificar AdSense:", e)
        setStatus("error")
        setMessage("Error al verificar AdSense: " + (e instanceof Error ? e.message : String(e)))
      }
    }

    // Esperar a que la página se cargue completamente
    if (document.readyState === "complete") {
      checkAdSense()
    } else {
      window.addEventListener("load", checkAdSense)
      return () => window.removeEventListener("load", checkAdSense)
    }
  }, [])

  if (status === "checking") {
    return (
      <Alert className="mb-4 bg-blue-50 border-blue-200">
        <AlertTitle className="text-blue-800">Verificando AdSense</AlertTitle>
        <AlertDescription className="text-blue-700">
          <p>Comprobando si AdSense está configurado correctamente...</p>
          <ul className="mt-2 space-y-1 text-sm">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </AlertDescription>
      </Alert>
    )
  }

  if (status === "success") {
    return (
      <Alert className="mb-4 bg-green-50 border-green-200">
        <AlertTitle className="text-green-800">AdSense está funcionando</AlertTitle>
        <AlertDescription className="text-green-700">
          <p>{message}</p>
          <ul className="mt-2 space-y-1 text-sm">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm">Los anuncios automáticos aparecerán en tu sitio según el algoritmo de AdSense.</p>
        </AlertDescription>
      </Alert>
    )
  }

  if (status === "blocked") {
    return (
      <Alert className="mb-4 bg-yellow-50 border-yellow-200">
        <AlertTitle className="text-yellow-800">Bloqueador de anuncios detectado</AlertTitle>
        <AlertDescription className="text-yellow-700">
          <p>{message}</p>
          <ul className="mt-2 space-y-1 text-sm">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Alert variant="destructive" className="mb-4">
      <AlertTitle>Error de AdSense</AlertTitle>
      <AlertDescription>
        <p>{message}</p>
        <ul className="mt-2 space-y-1 text-sm">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <Button variant="outline" className="mt-2 bg-transparent" onClick={() => window.location.reload()}>
          Reintentar
        </Button>
      </AlertDescription>
    </Alert>
  )
}
