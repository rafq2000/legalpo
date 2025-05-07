"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export function AdsensePageChecker() {
  const [status, setStatus] = useState<"checking" | "loaded" | "not-loaded">("checking")
  const pathname = usePathname()

  useEffect(() => {
    // Solo ejecutar en producción
    if (process.env.NODE_ENV !== "production") {
      return
    }

    // Reiniciar estado cuando cambia la ruta
    setStatus("checking")

    // Verificar si AdSense está cargado
    const checkAdsense = () => {
      if (typeof window === "undefined") return

      // Verificar si el script de AdSense está en el DOM
      const isScriptInDOM = !!document.querySelector(
        'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]',
      )

      // Verificar si adsbygoogle está definido
      const isAdsByGoogleDefined = typeof window.adsbygoogle !== "undefined"

      if (isScriptInDOM && isAdsByGoogleDefined) {
        setStatus("loaded")
        console.log(`✅ AdSense cargado correctamente en: ${pathname}`)
      } else {
        setStatus("not-loaded")
        console.warn(`⚠️ AdSense no está cargado en: ${pathname}`)

        // Intentar cargar AdSense si no está presente
        if (!isScriptInDOM) {
          const script = document.createElement("script")
          script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3753519605655251"
          script.async = true
          script.crossOrigin = "anonymous"
          document.head.appendChild(script)
          console.log("🔄 Intentando cargar AdSense manualmente")
        }
      }
    }

    // Verificar después de que la página se haya cargado completamente
    if (document.readyState === "complete") {
      checkAdsense()
    } else {
      window.addEventListener("load", checkAdsense)
      return () => window.removeEventListener("load", checkAdsense)
    }

    // Verificar nuevamente después de 2 segundos (por si acaso)
    const timer = setTimeout(checkAdsense, 2000)
    return () => clearTimeout(timer)
  }, [pathname])

  // Solo mostrar en desarrollo o para administradores
  if (process.env.NODE_ENV !== "development" && !pathname.startsWith("/admin")) {
    return null
  }

  if (status === "checking") {
    return (
      <Alert className="fixed bottom-4 right-4 w-80 bg-blue-50 border-blue-200 z-50">
        <AlertTitle>Verificando AdSense</AlertTitle>
        <AlertDescription>Comprobando carga de AdSense en esta página...</AlertDescription>
      </Alert>
    )
  }

  if (status === "not-loaded") {
    return (
      <Alert className="fixed bottom-4 right-4 w-80 bg-red-50 border-red-200 z-50" variant="destructive">
        <AlertTitle>AdSense no cargado</AlertTitle>
        <AlertDescription>
          AdSense no se ha cargado correctamente en esta página. Esto puede afectar la monetización.
        </AlertDescription>
      </Alert>
    )
  }

  if (status === "loaded") {
    return (
      <Alert className="fixed bottom-4 right-4 w-80 bg-green-50 border-green-200 z-50">
        <AlertTitle>AdSense cargado</AlertTitle>
        <AlertDescription>AdSense se ha cargado correctamente en esta página.</AlertDescription>
      </Alert>
    )
  }

  return null
}
