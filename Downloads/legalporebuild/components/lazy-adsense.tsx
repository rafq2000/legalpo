"use client"

import { useEffect, useRef, useState } from "react"

interface LazyAdsenseProps {
  slot: string
  format?: "auto" | "horizontal" | "vertical" | "rectangle"
  className?: string
}

export function LazyAdsense({ slot, format = "auto", className = "" }: LazyAdsenseProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!adRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoaded) {
          setIsVisible(true)
          setIsLoaded(true)
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
        // Create the ad element
        const adElement = document.createElement("ins")
        adElement.className = "adsbygoogle"
        adElement.style.display = "block"
        adElement.style.width = "100%"
        adElement.style.height = "auto"
        adElement.setAttribute("data-ad-client", "ca-pub-3753519605655251")
        adElement.setAttribute("data-ad-slot", slot)
        adElement.setAttribute("data-ad-format", format)
        adElement.setAttribute("data-full-width-responsive", "true")

        // Clear and append the element
        const adContainer = adRef.current.querySelector(".ad-container")
        if (adContainer) {
          adContainer.innerHTML = ""
          adContainer.appendChild(adElement)

          // Push the ad
          try {
            ;(window.adsbygoogle = window.adsbygoogle || []).push({})
          } catch (error) {
            console.error("Error loading lazy ad:", error)
          }
        }
      } catch (error) {
        console.error("Error initializing lazy ad:", error)
      }
    }
  }, [isVisible, slot, format])

  return (
    <div ref={adRef} className={`flex justify-center my-4 ${className}`}>
      {isVisible && (
        <div className="w-full max-w-[728px]">
          <div className="ad-container" style={{ minHeight: "90px", background: "rgba(0,0,0,0.02)" }}></div>
        </div>
      )}
    </div>
  )
}
