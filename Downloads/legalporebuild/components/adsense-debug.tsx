"use client"

import { useEffect, useState } from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function AdsenseDebug() {
  const [status, setStatus] = useState<"loading" | "success" | "error" | "blocked">("loading")
  const [message, setMessage] = useState<string>("Verificando AdSense...")

  useEffect(() => {
    const checkAdSense = () => {
      // Verificar si estamos en el cliente
      if (typeof window === "undefined") {
        return
      }

      // Verificar si el script de AdSense está bloqueado por un bloqueador de anuncios
      const adBlockDetected = () => {
        try {
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
                setMessage("AdSense está cargado correctamente.")
              } else {
                setStatus("error")
                setMessage("AdSense no se ha cargado correctamente. Verifica la configuración.")
              }
            }
            document.body.removeChild(testAd)
          }, 100)
        } catch (e) {
          console.error("Error al detectar bloqueador de anuncios:", e)
          setStatus("error")
          setMessage("Error al verificar AdSense: " + (e instanceof Error ? e.message : String(e)))
        }
      }

      // Esperar a que la página se cargue completamente
      if (document.readyState === "complete") {
        adBlockDetected()
      } else {
        window.addEventListener("load", adBlockDetected)
        return () => window.removeEventListener("load", adBlockDetected)
      }
    }

    checkAdSense()
  }, [])

  if (status === "loading") {
    return (
      <Alert className="mb-4 bg-blue-50 border-blue-200">
        <AlertTitle className="text-blue-800">Verificando AdSense</AlertTitle>
        <AlertDescription className="text-blue-700">
          Comprobando si AdSense está cargado correctamente...
        </AlertDescription>
      </Alert>
    )
  }

  if (status === "success") {
    return (
      <Alert className="mb-4 bg-green-50 border-green-200">
        <AlertTitle className="text-green-800">AdSense está funcionando</AlertTitle>
        <AlertDescription className="text-green-700">{message}</AlertDescription>
      </Alert>
    )
  }

  if (status === "blocked") {
    return (
      <Alert className="mb-4 bg-yellow-50 border-yellow-200">
        <AlertTitle className="text-yellow-800">Bloqueador de anuncios detectado</AlertTitle>
        <AlertDescription className="text-yellow-700">{message}</AlertDescription>
      </Alert>
    )
  }

  return (
    <Alert variant="destructive" className="mb-4">
      <AlertTitle>Error de AdSense</AlertTitle>
      <AlertDescription>
        <p>{message}</p>
        <Button variant="outline" className="mt-2 bg-transparent" onClick={() => window.location.reload()}>
          Reintentar
        </Button>
      </AlertDescription>
    </Alert>
  )
}
