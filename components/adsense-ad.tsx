"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface AdProps {
  slot: string
  format?: "auto" | "rectangle" | "horizontal" | "vertical"
  responsive?: boolean
  className?: string
  style?: React.CSSProperties
}

export function AdsenseAd({ slot, format = "auto", responsive = true, className = "", style = {} }: AdProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      // Solo ejecutar en el cliente y si el contenedor existe
      if (typeof window !== "undefined" && adRef.current && adRef.current.innerHTML === "") {
        // Crear el elemento ins para el anuncio
        const adElement = document.createElement("ins")
        adElement.className = "adsbygoogle"
        adElement.style.display = "block"
        adElement.style.width = "100%"
        adElement.style.height = "auto"
        adElement.setAttribute("data-ad-client", "ca-pub-3753519605655251")
        adElement.setAttribute("data-ad-slot", slot)
        adElement.setAttribute("data-ad-format", format)

        if (responsive) {
          adElement.setAttribute("data-full-width-responsive", "true")
        }

        // Limpiar y añadir el elemento
        adRef.current.appendChild(adElement)

        // Cargar el anuncio
        try {
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (error) {
          console.error("Error al cargar el anuncio:", error)
        }
      }
    } catch (error) {
      console.error("Error al inicializar el anuncio:", error)
    }

    // Limpieza al desmontar
    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = ""
      }
    }
  }, [slot, format, responsive])

  return (
    <div
      ref={adRef}
      className={`adsense-container ${className}`}
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
        ...style,
      }}
    />
  )
}
