"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

interface AdUnitProps {
  slot: string
  format?: "auto" | "horizontal" | "vertical" | "rectangle"
  className?: string
  responsive?: boolean
}

export function AdUnit({ slot, format = "auto", className = "", responsive = true }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [adLoaded, setAdLoaded] = useState(false)

  useEffect(() => {
    // Solo ejecutar en el cliente y en producción
    if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
      try {
        // Inicializar el anuncio cuando el componente se monta
        const adsbygoogle = window.adsbygoogle || []
        adsbygoogle.push({})
        setAdLoaded(true)
      } catch (error) {
        console.error("Error al cargar el anuncio:", error)
      }
    }
  }, [])

  // En desarrollo, mostrar un placeholder
  if (process.env.NODE_ENV !== "production") {
    return (
      <div
        className={`flex justify-center items-center my-4 border border-gray-200 bg-gray-50 rounded ${className}`}
        style={{ height: "250px", width: "100%", maxWidth: "728px", margin: "0 auto" }}
      >
        <p className="text-gray-400 text-sm">Espacio para anuncio (slot: {slot})</p>
      </div>
    )
  }

  return (
    <div className={`flex justify-center my-4 ${className}`} ref={adRef}>
      <div className="text-xs text-gray-400 text-center mb-1">Publicidad</div>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", maxWidth: "728px", height: "auto", minHeight: "250px" }}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
      <Script id={`adsense-init-${slot}`} strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  )
}
