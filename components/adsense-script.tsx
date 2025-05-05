"use client"

import Script from "next/script"
import { useEffect } from "react"

export function AdsenseScript() {
  useEffect(() => {
    // Inicializar AdSense cuando el componente se monte
    try {
      if (window.adsbygoogle) {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error("Error al inicializar AdSense:", error)
    }
  }, [])

  return (
    <>
      <Script id="google-adsense-init" strategy="afterInteractive">
        {`
          window.onload = function() {
            try {
              (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
              console.error('AdSense error:', e);
            }
          }
        `}
      </Script>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3753519605655251"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  )
}
