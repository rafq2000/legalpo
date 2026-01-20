"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

type AdFormat = "auto" | "horizontal" | "vertical" | "rectangle"
type AdPosition = "content" | "sidebar" | "header" | "footer"

interface AdUnitProps {
  slot: string
  format?: AdFormat
  position?: AdPosition
  className?: string
  responsive?: boolean
  style?: React.CSSProperties
}

export function AdUnit({
  slot,
  format = "auto",
  position = "content",
  className = "",
  responsive = true,
  style = {},
}: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [adError, setAdError] = useState<string | null>(null)

  // Determinar el estilo y clase basado en la posición
  const getPositionStyles = () => {
    switch (position) {
      case "sidebar":
        return {
          className: "my-4 mx-auto max-w-[300px]",
          minHeight: format === "rectangle" ? "250px" : "100px",
        }
      case "header":
        return {
          className: "my-4 mx-auto max-w-[728px]",
          minHeight: "90px",
        }
      case "footer":
        return {
          className: "my-4 mx-auto max-w-[728px]",
          minHeight: "90px",
        }
      default:
        return {
          className: "my-4 mx-auto max-w-[728px]",
          minHeight: format === "rectangle" ? "250px" : "90px",
        }
    }
  }

  const positionStyles = getPositionStyles()

  useEffect(() => {
    if (!adRef.current) return

    // Usar IntersectionObserver para cargar el anuncio solo cuando sea visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoaded) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(adRef.current)

    return () => {
      observer.disconnect()
    }
  }, [isLoaded])

  useEffect(() => {
    if (isVisible && adRef.current) {
      try {
        // Verificar si estamos en producción
        if (process.env.NODE_ENV !== "production") {
          console.log("AdSense no se carga en desarrollo")
          return
        }

        // Verificar si adsbygoogle está definido
        if (!window.adsbygoogle) {
          setAdError("AdSense no está inicializado correctamente")
          return
        }

        // Crear el elemento de anuncio
        const adElement = document.createElement("ins")
        adElement.className = "adsbygoogle"
        adElement.style.display = "block"
        adElement.style.width = "100%"
        adElement.style.height = format === "rectangle" ? "250px" : "auto"
        adElement.setAttribute("data-ad-client", "ca-pub-3753519605655251")
        adElement.setAttribute("data-ad-slot", slot)
        adElement.setAttribute("data-ad-format", format)

        if (responsive) {
          adElement.setAttribute("data-full-width-responsive", "true")
        }

        // Limpiar y añadir el elemento
        if (adRef.current) {
          const adContainer = adRef.current.querySelector(".ad-container")
          if (adContainer) {
            adContainer.innerHTML = ""
            adContainer.appendChild(adElement)

            // Cargar el anuncio
            try {
              ;(window.adsbygoogle = window.adsbygoogle || []).push({})
              setIsLoaded(true)
            } catch (error) {
              console.error("Error al cargar el anuncio:", error)
              setAdError("Error al cargar el anuncio")
            }
          }
        }
      } catch (error) {
        console.error("Error al inicializar el anuncio:", error)
        setAdError("Error al inicializar el anuncio")
      }
    }
  }, [isVisible, slot, format, responsive])

  return (
    <div
      ref={adRef}
      className={`ad-unit ${positionStyles.className} ${className}`}
      data-ad-position={position}
      data-ad-format={format}
      style={style}
    >
      <div
        className="ad-container"
        style={{
          minHeight: positionStyles.minHeight,
          background: "rgba(0,0,0,0.02)",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {adError && <div className="text-xs text-gray-400">{adError}</div>}
      </div>
    </div>
  )
}
