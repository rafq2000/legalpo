"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

export function AdsenseAutoAds() {
  const [shouldLoadAds, setShouldLoadAds] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Verificar si estamos en producción
    if (process.env.NODE_ENV !== "production") {
      console.log("AdSense Auto Ads no se carga en desarrollo")
      return
    }

    // Verificar si adsbygoogle ya está definido
    if (window.adsbygoogle) {
      console.log("AdSense ya está inicializado")
    }

    // Estrategia de carga diferida: Esperar interacción o scroll
    const handleInteraction = () => {
      setShouldLoadAds(true)
      // Remover event listeners una vez disparados
      window.removeEventListener("scroll", handleInteraction)
      window.removeEventListener("mousemove", handleInteraction)
      window.removeEventListener("touchstart", handleInteraction)
      window.removeEventListener("keydown", handleInteraction)
    }

    // Retraso inicial para no bloquear LCP
    const timer = setTimeout(() => {
      // Si no ha habido interacción en 3.5 segundos, cargar de todos modos
      // para no perder impresiones, pero asegurando que LCP ya ocurrió.
      setShouldLoadAds(true)
    }, 3500)

    window.addEventListener("scroll", handleInteraction, { passive: true })
    window.addEventListener("mousemove", handleInteraction, { passive: true })
    window.addEventListener("touchstart", handleInteraction, { passive: true })
    window.addEventListener("keydown", handleInteraction, { passive: true })

    // Añadir meta tag para la cuenta de AdSense inmediatamente
    if (!document.querySelector('meta[name="google-adsense-account"]')) {
      const meta = document.createElement("meta")
      meta.name = "google-adsense-account"
      meta.content = "ca-pub-3753519605655251"
      document.head.appendChild(meta)
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleInteraction)
      window.removeEventListener("mousemove", handleInteraction)
      window.removeEventListener("touchstart", handleInteraction)
      window.removeEventListener("keydown", handleInteraction)
    }
  }, [])

  // Solo renderizar en producción y cuando se deba cargar
  if (process.env.NODE_ENV !== "production" || !shouldLoadAds) {
    return null
  }

  // Evitar cargar el script si ya está cargado por otro medio
  if (isLoaded) {
    return null
  }

  return (
    <Script
      id="adsense-auto-ads"
      strategy="lazyOnload"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3753519605655251"
      crossOrigin="anonymous"
      onLoad={() => {
        console.log("Script de AdSense Auto Ads cargado correctamente")
        setIsLoaded(true)

        // Inicializar anuncios automáticos
        try {
          if (window.adsbygoogle) {
            // @ts-ignore
            ; (window.adsbygoogle = window.adsbygoogle || []).push({
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
