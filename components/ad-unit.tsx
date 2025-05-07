"use client"

import { useEffect, useRef, useState } from "react"

interface AdUnitProps {
  slot: string
  format?: "auto" | "horizontal" | "vertical" | "rectangle"
  className?: string
  responsive?: boolean
  position?: string
}

export function AdUnit({
  slot,
  format = "auto",
  className = "",
  responsive = true,
  position = "content",
}: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [adLoaded, setAdLoaded] = useState(false)
  const [adError, setAdError] = useState(false)
  const [adInitialized, setAdInitialized] = useState(false)

  useEffect(() => {
    // Solo ejecutar en el cliente y en producción
    if (typeof window !== "undefined") {
      // Verificar si el script de AdSense ya está cargado
      const isAdSenseLoaded = () => {
        return typeof window.adsbygoogle !== "undefined"
      }

      // Función para inicializar el anuncio
      const initAd = () => {
        if (!adRef.current || adInitialized) return

        try {
          // Limpiar cualquier contenido previo
          if (adRef.current.firstChild) {
            adRef.current.innerHTML = ""
          }

          // Crear el elemento ins para el anuncio
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

          // Añadir el elemento al DOM
          adRef.current.appendChild(adElement)

          // Intentar cargar el anuncio
          try {
            ;(window.adsbygoogle = window.adsbygoogle || []).push({})
            console.log("AdSense push ejecutado para slot:", slot)
            setAdInitialized(true)

            // Verificar si el anuncio se cargó después de un tiempo
            setTimeout(() => {
              if (adRef.current) {
                const adIns = adRef.current.querySelector(".adsbygoogle")
                if (adIns && adIns.innerHTML.trim() !== "") {
                  setAdLoaded(true)
                  setAdError(false)
                } else {
                  console.warn("El anuncio parece estar vacío después de la carga:", slot)
                  setAdError(true)
                }
              }
            }, 2000)
          } catch (error) {
            console.error("Error al cargar el anuncio:", error)
            setAdError(true)
          }
        } catch (error) {
          console.error("Error al inicializar el anuncio:", error)
          setAdError(true)
        }
      }

      // Si AdSense ya está cargado, inicializar el anuncio
      if (isAdSenseLoaded()) {
        initAd()
      } else {
        // Si AdSense no está cargado, esperar a que se cargue
        const adsbygoogleInterval = setInterval(() => {
          if (isAdSenseLoaded()) {
            clearInterval(adsbygoogleInterval)
            initAd()
          }
        }, 300)

        // Limpiar intervalo después de 10 segundos para evitar bucle infinito
        setTimeout(() => {
          clearInterval(adsbygoogleInterval)
          if (!isAdSenseLoaded()) {
            console.warn("AdSense no se cargó después de 10 segundos")
            setAdError(true)
          }
        }, 10000)
      }
    }

    return () => {
      // Limpiar al desmontar
      if (adRef.current) {
        adRef.current.innerHTML = ""
      }
    }
  }, [slot, format, responsive, adInitialized])

  return (
    <div className={`ad-container ${position}-ad my-4 ${className}`}>
      <div className="text-xs text-gray-500 mb-1">Publicidad</div>
      <div
        ref={adRef}
        className="w-full overflow-hidden rounded-md"
        style={{
          minHeight: format === "rectangle" ? "250px" : "90px",
          background: adError ? "rgba(0,0,0,0.02)" : "transparent",
          border: adError ? "1px dashed #ddd" : "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {adError && <div className="text-sm text-gray-400">Espacio publicitario</div>}
      </div>
    </div>
  )
}
