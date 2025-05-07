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
    const initAd = () => {
      try {
        // Only execute on the client and if the container exists
        if (typeof window !== "undefined" && adRef.current && adRef.current.innerHTML === "") {
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
        minHeight: format === "rectangle" ? "250px" : "100px",
        background: "rgba(0,0,0,0.02)",
        ...style,
      }}
    />
  )
}
