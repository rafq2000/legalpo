"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react"

type EventTrackerProps = {}

export function EventTracker({}: EventTrackerProps = {}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { data: session } = useSession()

  useEffect(() => {
    // Function to track the event
    const trackEvent = async () => {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")
      const userId = session?.user?.email || "anonymous"

      try {
        // Send event data to your analytics endpoint (e.g., Firebase, Supabase, etc.)
        // This is a placeholder - replace with your actual tracking logic
        console.log("Tracking event:", {
          page: url,
          userId: userId,
          timestamp: new Date().toISOString(),
        })

        // Example using fetch API (replace with your actual endpoint)
        await fetch("/api/track-event", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tipo: "page_view", // Example event type
            userId: userId,
            datos: {
              page: url,
            },
          }),
        })
      } catch (error) {
        console.error("Error tracking event:", error)
      }
    }

    // Track the event on route change
    trackEvent()
  }, [pathname, searchParams, session])

  return null // This component doesn't render anything visible
}

export default EventTracker
