"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface AdProps {
  slot: string
  format?: "auto" | "rectangle" | "horizontal" | "vertical"
  responsive?: boolean
  className?: string
  style?: React.CSSProperties
}

export function AdsenseAd({ slot, format = "auto", responsive = true, className = "", style = {} }: AdProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const initAd = () => {
      try {
        // Only execute on the client and if the container exists
        if (typeof window !== "undefined" && adRef.current && !isLoaded) {
          // Create the ins element for the ad
          const adElement = document.createElement("ins")
          adElement.className = "adsbygoogle"
          adElement.style.display = "block"
          adElement.style.width = "100%"
          adElement.style.height = format === "rectangle" ? "280px" : "auto"
          adElement.setAttribute("data-ad-client", "ca-pub-3753519605655251")
          adElement.setAttribute("data-ad-slot", slot)
          adElement.setAttribute("data-ad-format", format)

          if (responsive) {
            adElement.setAttribute("data-full-width-responsive", "true")
          }

          // Clear and add the element
          adRef.current.innerHTML = ""
          adRef.current.appendChild(adElement)

          // Load the ad
          try {
            ;(window.adsbygoogle = window.adsbygoogle || []).push({})
            setIsLoaded(true)
          } catch (error) {
            console.error("Error loading the ad:", error)
          }
        }
      } catch (error) {
        console.error("Error initializing the ad:", error)
      }
    }

    // Check if AdSense is loaded
    if (window.adsbygoogle) {
      initAd()
    } else {
      // If AdSense isn't loaded yet, wait for it
      const adsbygoogleInterval = setInterval(() => {
        if (window.adsbygoogle) {
          clearInterval(adsbygoogleInterval)
          initAd()
        }
      }, 300)

      // Clear interval after 10 seconds to prevent infinite checking
      setTimeout(() => clearInterval(adsbygoogleInterval), 10000)
    }

    // Cleanup on unmount
    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = ""
      }
    }
  }, [slot, format, responsive, isLoaded])

  // Determinar altura mínima basada en formato
  const getMinHeight = () => {
    switch (format) {
      case "rectangle":
        return "250px"
      case "horizontal":
        return "90px"
      case "vertical":
        return "600px"
      default:
        return "100px"
    }
  }

  return (
    <div
      ref={adRef}
      className={`ad-container ${format} ${className}`}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
        minHeight: getMinHeight(),
        background: "rgba(0,0,0,0.02)",
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "4px",
        ...style,
      }}
    >
      {!isLoaded && (
        <div className="skeleton" style={{ width: "100%", height: "100%" }}>
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">Cargando anuncio...</div>
        </div>
      )}
    </div>
  )
}
