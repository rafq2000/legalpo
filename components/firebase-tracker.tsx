"use client"

import { useEffect, useState } from "react"
import { initializeAnalytics } from "@/utils/firebaseClient"
import { logEvent, getAnalytics } from "firebase/analytics"

export default function FirebaseTracker() {
  const [analyticsInitialized, setAnalyticsInitialized] = useState(false)

  useEffect(() => {
    const initAnalytics = async () => {
      const analytics = await initializeAnalytics()
      if (analytics) {
        setAnalyticsInitialized(true)
        // Log a page view event
        logEvent(analytics, "page_view", {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        })
      }
    }

    initAnalytics()
  }, [])

  // Track custom event function
  const trackEvent = async (eventName: string, eventParams = {}) => {
    if (typeof window !== "undefined") {
      const analytics = getAnalytics()
      logEvent(analytics, eventName, eventParams)
      console.log(`Event tracked: ${eventName}`, eventParams)
    }
  }

  // This component doesn't render anything visible
  return null
}
