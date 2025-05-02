"use client"

import { useEffect, useRef } from "react"

interface AdUnitProps {
  slot: string
  format?: "auto" | "horizontal" | "rectangle" | "vertical"
  responsive?: boolean
  className?: string
}

export function AdUnit({ slot, format = "auto", responsive = true, className = "" }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const isClient = typeof window !== "undefined"
  const isProduction = process.env.NODE_ENV === "production"

  useEffect(() => {
    // Solo ejecutar en el cliente y en producción
    if (isClient && isProduction && adRef.current) {
      try {
        // @ts-ignore
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.error("Error al cargar el anuncio:", error)
      }
    }
  }, [isClient, isProduction])

  // Determinar las clases de formato
  const formatClasses = {
    auto: "w-full",
    horizontal: "w-full h-[90px] sm:h-[100px] md:h-[120px]",
    rectangle: "w-full max-w-[336px] h-[280px]",
    vertical: "w-[160px] h-[600px]",
  }

  // En desarrollo, mostrar un placeholder
  if (!isProduction) {
    return (
      <div
        className={`bg-gray-100 border border-gray-300 text-gray-500 text-center ${formatClasses[format]} ${className}`}
      >
        <div className="p-2 text-xs">Anuncio ({format})</div>
        <div className="flex items-center justify-center h-full">
          <p className="text-sm">Espacio publicitario</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className={`ad-container ${className}`}>
        <div className="text-xs text-gray-500 text-center mb-1">Publicidad</div>
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || "ca-pub-3735519605655251"}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </div>
    </>
  )
}
