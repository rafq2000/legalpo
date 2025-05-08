"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

export function AdsenseAutoAds() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Verificar si estamos en producción
    if (process.env.NODE_ENV !== "production") {
      console.log("AdSense Auto Ads no se carga en desarrollo")
      return
    }

    // Verificar si adsbygoogle ya está definido para evitar duplicados
    if (window.adsbygoogle) {
      console.log("AdSense ya está inicializado")
    }

    // Añadir meta tag para la cuenta de AdSense si no existe
    if (!document.querySelector('meta[name="google-adsense-account"]')) {
      const meta = document.createElement("meta")
      meta.name = "google-adsense-account"
      meta.content = "ca-pub-3753519605655251"
      document.head.appendChild(meta)
      console.log("Meta tag de AdSense añadido")
    }

    // Verificar si el script ya está cargado
    const isScriptLoaded = document.querySelector(
      'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]',
    )
    if (isScriptLoaded) {
      console.log("Script de AdSense ya está en el DOM")
      setIsLoaded(true)
    }
  }, [])

  // Solo renderizar en producción
  if (process.env.NODE_ENV !== "production") {
    return null
  }

  // Evitar cargar el script si ya está cargado
  if (isLoaded) {
    return null
  }

  return (
    <Script
      id="adsense-auto-ads"
      strategy="afterInteractive"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3753519605655251"
      crossOrigin="anonymous"
      onLoad={() => {
        console.log("Script de AdSense Auto Ads cargado correctamente")
        setIsLoaded(true)

        // Inicializar anuncios automáticos si es necesario
        try {
          if (window.adsbygoogle) {
            // @ts-ignore
            ;(window.adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-3753519605655251",
              enable_page_level_ads: true,
              overlays: { enabled: true },
            })
            console.log("Anuncios automáticos inicializados")
          }
        } catch (error) {
          console.error("Error al inicializar anuncios automáticos:", error)
        }
      }}
      onError={(e) => {
        console.error("Error al cargar el script de AdSense Auto Ads:", e)
      }}
    />
  )
}
