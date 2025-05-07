"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

export function AdsenseScript() {
  const [isProduction, setIsProduction] = useState(false)

  useEffect(() => {
    setIsProduction(process.env.NODE_ENV === "production")
  }, [])

  if (!isProduction) {
    return null
  }

  return (
    <>
      <Script
        id="adsense-script"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3753519605655251"
        crossOrigin="anonymous"
        onError={(e) => {
          console.error("Error loading AdSense script:", e)
        }}
        onLoad={() => {
          console.log("AdSense script loaded successfully")
        }}
      />
    </>
  )
}
