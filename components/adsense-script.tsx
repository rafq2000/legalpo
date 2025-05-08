"use client"
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
      {/* Este componente ya no se usa, ahora usamos AdsenseAutoAds */}
      {/* Se mantiene por compatibilidad pero no hace nada */}
    </>
  )
}
