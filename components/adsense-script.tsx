"use client"

import { useEffect } from "react"
import Script from "next/script"

export function AdsenseScript() {
  useEffect(() => {
    try {
      // Inicializar AdSense cuando el script esté cargado
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      }
    } catch (error) {
      console.error("Error al inicializar AdSense:", error)
    }
  }, [])

  return (
    <>
      <Script
        id="google-adsense-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.onload = function() {
              (adsbygoogle = window.adsbygoogle || []).push({});
            }
          `,
        }}
      />
      <Script
        id="google-adsense"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3753519605655251"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  )
}
