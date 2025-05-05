"use client"

import { useEffect, useRef } from "react"

interface AdUnitProps {
  slot: string
  format: "horizontal" | "rectangle" | "vertical"
  position: "header" | "footer" | "sidebar" | "content"
  className?: string
}

export function AdUnit({ slot, format, position, className = "" }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && adRef.current && adRef.current.innerHTML === "") {
        // Create the ad element
        const adElement = document.createElement("ins")
        adElement.className = "adsbygoogle"
        adElement.style.display = "block"
        adElement.style.width = "100%"
        adElement.style.height = format === "rectangle" ? "280px" : "auto"
        adElement.setAttribute("data-ad-client", "ca-pub-3753519605655251")
        adElement.setAttribute("data-ad-slot", slot)

        // Set format-specific attributes
        if (format === "horizontal") {
          adElement.setAttribute("data-ad-format", "auto")
          adElement.setAttribute("data-full-width-responsive", "true")
        }

        // Clear and append the element
        if (adRef.current.firstChild) {
          adRef.current.innerHTML = ""
        }
        adRef.current.appendChild(adElement)

        // Push the ad
        try {
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (error) {
          console.error("Error loading ad:", error)
        }
      }
    } catch (error) {
      console.error("Error initializing ad:", error)
    }
  }, [slot, format])

  return (
    <div className={`ad-container ${position}-ad my-4 ${className}`}>
      <div className="text-xs text-gray-500 mb-1">Publicidad</div>
      <div
        ref={adRef}
        className="w-full overflow-hidden"
        style={{
          minHeight: format === "rectangle" ? "250px" : "100px",
          background: "rgba(0,0,0,0.02)",
        }}
      />
    </div>
  )
}
