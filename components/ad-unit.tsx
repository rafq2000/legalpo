"use client"

import { useEffect, useRef, useState } from "react"
import { useCookieConsent } from "@/hooks/use-cookie-consent"

interface AdUnitProps {
  slot: string
  format?: "auto" | "rectangle" | "horizontal" | "vertical"
  responsive?: boolean
  className?: string
  position?: "sidebar" | "in-content" | "footer" | "header"
}

export function AdUnit({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  position = "in-content",
}: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [adError, setAdError] = useState(false)
  const { getConsent } = useCookieConsent()

  // Verificar si el usuario ha dado consentimiento para anuncios
  const hasAdConsent = getConsent("advertising")

  useEffect(() => {
    // Solo ejecutar en el cliente, solo si hay consentimiento y solo si el sitio está en producción
    if (typeof window !== "undefined" && hasAdConsent) {
      try {
        // Crear un observador de intersección para cargar los anuncios solo cuando son visibles
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting && !isLoaded) {
              setIsVisible(true)

              // Cargar el anuncio
              try {
                ;(window.adsbygoogle = window.adsbygoogle || []).push({})
                setIsLoaded(true)
              } catch (error) {
                console.error("Error al cargar el anuncio:", error)
                setAdError(true)
              }
            }
          },
          { threshold: 0.1 },
        )

        if (adRef.current) {
          observer.observe(adRef.current)
        }

        return () => {
          if (adRef.current) {
            observer.unobserve(adRef.current)
          }
        }
      } catch (error) {
        console.error("Error al configurar el observador:", error)
        setAdError(true)
      }
    }
  }, [isLoaded, hasAdConsent])

  // Estilos específicos según la posición
  const getPositionStyles = () => {
    switch (position) {
      case "sidebar":
        return "my-4 min-h-[250px]"
      case "in-content":
        return "my-6 min-h-[280px]"
      case "footer":
        return "mt-8 mb-4 min-h-[90px]"
      case "header":
        return "mb-6 mt-2 min-h-[90px]"
      default:
        return "my-4 min-h-[250px]"
    }
  }

  // Si no hay consentimiento, no mostrar nada
  if (!hasAdConsent) {
    return null
  }

  // Si hay un error o estamos en desarrollo, mostrar un placeholder
  if (adError || process.env.NODE_ENV !== "production") {
    return (
      <div className={`ad-container ad-placeholder ${getPositionStyles()} ${className}`}>
        <div className="text-xs text-gray-500 text-center p-2 border border-gray-200 rounded bg-gray-50 h-full flex items-center justify-center">
          Espacio publicitario
        </div>
      </div>
    )
  }

  return (
    <div className={`ad-container ${getPositionStyles()} ${className}`}>
      <div className="text-[10px] text-gray-400 text-center mb-1">Publicidad</div>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100%" }}
        data-ad-client="ca-pub-3753519605655251"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  )
}
