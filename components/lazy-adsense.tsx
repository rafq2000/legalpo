"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

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

  return (
    <div ref={adRef} className={`flex justify-center my-4 ${className}`}>
      {isVisible && (
        <>
          <div className="w-full max-w-[728px]">
            <div className="text-xs text-gray-500 mb-1">Publicidad</div>
            <ins
              className="adsbygoogle"
              style={{ display: "block", width: "100%", height: "auto" }}
              data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || "ca-pub-3753519605655251"}
              data-ad-slot={slot}
              data-ad-format={format}
              data-full-width-responsive="true"
            ></ins>
          </div>
          <Script id={`adsense-init-${slot}`} strategy="afterInteractive">
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </Script>
        </>
      )}
    </div>
  )
}
