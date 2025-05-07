"use client"

import { useEffect, useCallback } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { db } from "@/utils/firebaseClient"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { getAnalytics, logEvent } from "firebase/analytics"
import { useSession } from "next-auth/react"

export default function FirebaseTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { data: session } = useSession()

  // Función para registrar eventos en Firestore
  const trackFirestoreEvent = useCallback(
    async (eventName: string, eventData: Record<string, any> = {}) => {
      try {
        if (!db) {
          console.error("Firestore no está inicializado")
          return null
        }

        const eventRef = await addDoc(collection(db, "eventos"), {
          tipo: eventName,
          datos: eventData,
          userId: session?.user?.email || null,
          timestamp: serverTimestamp(),
          path: pathname,
          query: Object.fromEntries(searchParams.entries()),
        })
        console.log(`Evento "${eventName}" registrado en Firestore con ID: ${eventRef.id}`)
        return eventRef.id
      } catch (error) {
        console.error("Error al registrar evento en Firestore:", error)
        return null
      }
    },
    [pathname, searchParams, session],
  )

  // Función para registrar eventos en Analytics
  const trackAnalyticsEvent = useCallback(
    (eventName: string, eventData: Record<string, any> = {}) => {
      try {
        if (typeof window !== "undefined") {
          const analytics = getAnalytics()
          logEvent(analytics, eventName, {
            ...eventData,
            page_path: pathname,
            page_location: window.location.href,
            page_title: document.title,
          })
          console.log(`Evento "${eventName}" registrado en Analytics`)
        }
      } catch (error) {
        console.error("Error al registrar evento en Analytics:", error)
      }
    },
    [pathname],
  )

  // Registrar evento de vista de página cuando cambia la ruta
  useEffect(() => {
    const trackPageView = async () => {
      if (typeof window !== "undefined") {
        // Registrar en Firestore
        await trackFirestoreEvent("page_view", {
          page_path: pathname,
          page_location: window.location.href,
          page_title: document.title,
          referrer: document.referrer,
        })

        // Registrar en Analytics
        try {
          trackAnalyticsEvent("page_view")
        } catch (e) {
          console.error("Error al registrar page_view en Analytics:", e)
        }
      }
    }

    trackPageView()
  }, [pathname, trackFirestoreEvent, trackAnalyticsEvent])

  // Exponer funciones de rastreo globalmente
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.trackFirestoreEvent = trackFirestoreEvent
      // @ts-ignore
      window.trackAnalyticsEvent = trackAnalyticsEvent
    }

    return () => {
      if (typeof window !== "undefined") {
        // @ts-ignore
        delete window.trackFirestoreEvent
        // @ts-ignore
        delete window.trackAnalyticsEvent
      }
    }
  }, [trackFirestoreEvent, trackAnalyticsEvent])

  // Este componente no renderiza nada visible
  return null
}
