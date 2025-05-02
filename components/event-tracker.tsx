"use client"

import { useEffect, useCallback } from "react"
import { useSession } from "next-auth/react"

export default function EventTracker() {
  const { data: session } = useSession()

  // Función para registrar eventos
  const trackEvent = useCallback(async (tipo: string, datos: Record<string, any> = {}) => {
    try {
      const response = await fetch("/api/eventos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tipo, datos }),
      })

      if (!response.ok) {
        throw new Error(`Error al registrar evento: ${response.statusText}`)
      }

      const result = await response.json()
      return result
    } catch (error) {
      console.error("Error al rastrear evento:", error)
      return null
    }
  }, [])

  // Registrar evento de visita al cargar la página
  useEffect(() => {
    const registerPageView = async () => {
      if (typeof window !== "undefined") {
        await trackEvent("visita", {
          path: window.location.pathname,
          referrer: document.referrer,
          title: document.title,
        })
      }
    }

    registerPageView()
  }, [trackEvent])

  // Registrar evento de inicio de sesión cuando cambia la sesión
  useEffect(() => {
    if (session?.user) {
      trackEvent("sesion_iniciada", {
        email: session.user.email,
        name: session.user.name,
      })
    }
  }, [session, trackEvent])

  // Exponer la función trackEvent globalmente para uso en otros componentes
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.trackEvent = trackEvent
    }

    return () => {
      if (typeof window !== "undefined") {
        // @ts-ignore
        delete window.trackEvent
      }
    }
  }, [trackEvent])

  // Este componente no renderiza nada visible
  return null
}
