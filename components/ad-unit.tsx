"use client"

import { useEffect, useRef, useState } from "react"

interface AdUnitProps {
  slot: string
  format?: "auto" | "rectangle" | "horizontal" | "vertical"
  responsive?: boolean
  className?: string
}

export function AdUnit({ slot, format = "auto", responsive = true, className = "" }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [adError, setAdError] = useState(false)

  useEffect(() => {
    // Solo ejecutar en el cliente y solo si el sitio está en producción
    if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
      try {
        // Crear un observador de intersección para cargar los anuncios solo cuando son visibles
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting && !isLoaded) {
              setIsVisible(true)

              // Establecer un timeout para detectar si el anuncio no se carga
              const timeout = setTimeout(() => {
                if (adRef.current && adRef.current.clientHeight <= 10) {
                  setAdError(true)
                }
              }, 3000)

              // Cargar el anuncio
              try {
                ;(window.adsbygoogle = window.adsbygoogle || []).push({})
                setIsLoaded(true)
              } catch (error) {
                console.error("Error al cargar el anuncio:", error)
                setAdError(true)
              }

              return () => clearTimeout(timeout)
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
  }, [isLoaded])

  // Si hay un error o estamos en desarrollo, mostrar un placeholder
  if (adError || process.env.NODE_ENV !== "production") {
    return (
      <div className={`ad-container ad-placeholder ${className}`}>
        <div className="text-xs text-gray-500 text-center">Espacio publicitario</div>
      </div>
    )
  }

  return (
    <div className={`ad-container relative ${className}`}>
      <div className="text-xs text-gray-500 text-center mb-1">Anuncio</div>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3753519605655251"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  )
}
