"use client"

import { useEffect, useRef, useState } from "react"

export function LazyAdsense({ slot, format = "auto" }: { slot: string; format?: string }) {
  const adRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!adRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
  }, [])

  useEffect(() => {
    if (isVisible && adRef.current) {
      // Código para cargar el anuncio (similar al componente AdsenseAd)
      const adElement = document.createElement("ins")
      adElement.className = "adsbygoogle"
      adElement.style.display = "block"
      adElement.setAttribute("data-ad-client", "ca-pub-3753519605655251")
      adElement.setAttribute("data-ad-slot", slot)
      adElement.setAttribute("data-ad-format", format)
      adElement.setAttribute("data-full-width-responsive", "true")

      adRef.current.appendChild(adElement)

      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.error("Error al cargar el anuncio:", error)
      }
    }
  }, [isVisible, slot, format])

  return <div ref={adRef} className="min-h-[250px] w-full" />
}
