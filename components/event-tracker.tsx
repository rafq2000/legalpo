"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { trackEvent } from "@/lib/analytics"

export function EventTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const logPageView = () => {
      const url = pathname + (searchParams ? "?" + searchParams.toString() : "")
      trackEvent("page_view", { page_path: url })
    }

    logPageView()
  }, [pathname, searchParams])

  return null
}

export default EventTracker
