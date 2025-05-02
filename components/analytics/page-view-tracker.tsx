"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { trackPageView } from "@/utils/firebase-service"

export default function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Registrar vista de página cuando cambia la ruta
    if (pathname) {
      const url = searchParams?.toString() ? `${pathname}?${searchParams.toString()}` : pathname

      const referrer = document.referrer
      const title = document.title

      trackPageView(url, referrer, title).catch((error) => {
        console.error("Error al registrar vista de página:", error)
      })
    }
  }, [pathname, searchParams])

  return null // Este componente no renderiza nada visible
}
