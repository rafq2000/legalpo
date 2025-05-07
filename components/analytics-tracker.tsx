"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { trackPageView } from "@/utils/firebase-service"

export function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lastPathRef = useRef<string>("")

  useEffect(() => {
    // Evitar registros duplicados en desarrollo
    if (process.env.NODE_ENV === "development") {
      console.log("🔍 Analytics Tracker: Modo desarrollo, registro limitado")
    }

    const handleRouteChange = async () => {
      const path = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

      // Evitar registrar la misma ruta múltiples veces
      if (path === lastPathRef.current) return
      lastPathRef.current = path

      try {
        const title = document.title
        const referrer = document.referrer

        console.log(`📊 Registrando vista de página: ${path}`)
        await trackPageView(path, title, referrer)
      } catch (error) {
        console.error("Error al registrar vista de página:", error)
      }
    }

    // Registrar la vista de página inicial
    handleRouteChange()

    // No necesitamos un listener para cambios de ruta ya que usePathname y useSearchParams
    // se actualizarán automáticamente y este efecto se ejecutará de nuevo
  }, [pathname, searchParams])

  return null
}

export default AnalyticsTracker
