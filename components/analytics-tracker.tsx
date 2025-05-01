"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react"

export default function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const session = useSession()
  const previousPathRef = useRef<string | null>(null)
  const pageStartTimeRef = useRef<number | null>(null)
  const sessionStartedRef = useRef<boolean>(false)
  const sessionIdRef = useRef<string | null>(null)

  // Función para obtener la fuente de tráfico
  const getTrafficSource = () => {
    if (typeof window === "undefined") return "Directo"

    // Verificar UTM parameters
    const utmSource = searchParams?.get("utm_source")
    if (utmSource) return utmSource

    // Verificar referrer
    const referrer = document.referrer
    if (!referrer) return "Directo"

    // Extraer dominio del referrer
    try {
      const domain = new URL(referrer).hostname

      // Mapear dominios conocidos a fuentes
      if (domain.includes("google")) return "Google"
      if (domain.includes("facebook") || domain.includes("fb.com")) return "Facebook"
      if (domain.includes("twitter") || domain.includes("t.co")) return "Twitter"
      if (domain.includes("instagram")) return "Instagram"
      if (domain.includes("linkedin")) return "LinkedIn"
      if (domain.includes("bing")) return "Bing"
      if (domain.includes("yahoo")) return "Yahoo"

      // Si no es un dominio conocido, devolver el dominio
      return domain
    } catch (e) {
      return "Directo"
    }
  }

  // Iniciar sesión al cargar la página
  useEffect(() => {
    if (sessionStartedRef.current) return

    const startSession = async () => {
      try {
        // Obtener la fuente de tráfico
        const source = getTrafficSource()
        console.log("📊 Iniciando sesión con fuente:", source)

        const response = await fetch("/api/start-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ source }),
        })

        if (response.ok) {
          const data = await response.json()
          sessionIdRef.current = data.sessionId
          sessionStartedRef.current = true
          console.log("✅ Sesión iniciada correctamente")
        }
      } catch (error) {
        console.error("❌ Error al iniciar sesión:", error)
      }
    }

    startSession()

    // Finalizar sesión al cerrar la página
    const handleBeforeUnload = () => {
      if (previousPathRef.current && pageStartTimeRef.current) {
        const timeSpent = Date.now() - pageStartTimeRef.current

        // Usar sendBeacon para enviar datos antes de que la página se cierre
        navigator.sendBeacon(
          "/api/track-page-view/duration",
          JSON.stringify({
            path: previousPathRef.current,
            timeOnPage: Math.floor(timeSpent / 1000),
          }),
        )
      }

      // Finalizar sesión
      navigator.sendBeacon(
        "/api/end-session",
        JSON.stringify({
          sessionId: sessionIdRef.current,
        }),
      )
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [searchParams])

  // Rastrear cambios de página
  useEffect(() => {
    if (!pathname) return

    // Si es la misma página, no hacer nada
    if (pathname === previousPathRef.current) return

    // Si hay una página anterior, registrar el tiempo en página
    if (previousPathRef.current && pageStartTimeRef.current) {
      const timeOnPage = Math.floor((Date.now() - pageStartTimeRef.current) / 1000)

      // Registrar tiempo en página anterior
      fetch("/api/track-page-view/duration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: previousPathRef.current,
          timeOnPage,
          sessionId: sessionIdRef.current,
        }),
      }).catch((error) => {
        console.error("❌ Error al registrar duración de página:", error)
      })
    }

    // Registrar nueva vista de página
    const pageTitle = document.title
    const referrer = previousPathRef.current || document.referrer

    fetch("/api/track-page-view", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: pathname,
        title: pageTitle,
        referrer,
        sessionId: sessionIdRef.current,
      }),
    }).catch((error) => {
      console.error("❌ Error al registrar vista de página:", error)
    })

    // Actualizar referencias para la nueva página
    previousPathRef.current = pathname
    pageStartTimeRef.current = Date.now()
  }, [pathname])

  return null
}
