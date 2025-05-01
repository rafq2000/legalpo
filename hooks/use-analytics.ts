"use client"

import { useCallback, useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { analyticsService, type EventType } from "@/lib/analytics-service"

export function useAnalytics() {
  const session = useSession()
  const [isInitialized, setIsInitialized] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    setIsInitialized(analyticsService.isInitialized || false)
    setHasConsent(analyticsService.hasTrackingConsent?.() || false)
  }, [])

  const trackEvent = useCallback(
    (eventType: EventType, metadata?: Record<string, any>, componentId?: string) => {
      return analyticsService.trackEvent({
        eventType,
        userId: session?.data?.user?.id,
        metadata,
        componentId,
      })
    },
    [session?.data?.user?.id],
  )

  const trackPageView = useCallback(
    (pagePath: string, pageTitle?: string, referrer?: string) => {
      return analyticsService.trackPageView({
        pagePath,
        pageTitle,
        referrer,
        userId: session?.data?.user?.id,
      })
    },
    [session?.data?.user?.id],
  )

  const trackDocumentAnalysis = useCallback(
    (options: {
      documentType: string
      documentName: string
      documentSize: number
      processingTime: number
      success: boolean
      errorMessage?: string
    }) => {
      return analyticsService.trackDocumentAnalysis({
        ...options,
        userId: session?.data?.user?.id,
      })
    },
    [session?.data?.user?.id],
  )

  const trackLawyerQuery = useCallback(
    (options: {
      queryText: string
      documentId?: string
      responseTime: number
      wasHelpful?: boolean
    }) => {
      return analyticsService.trackLawyerQuery({
        ...options,
        userId: session?.data?.user?.id,
      })
    },
    [session?.data?.user?.id],
  )

  const updateCookieConsent = useCallback((consent: any) => {
    analyticsService.updateConsent(consent)
    setHasConsent(analyticsService.hasTrackingConsent?.() || false)
  }, [])

  return {
    isInitialized,
    hasConsent,
    trackEvent,
    trackPageView,
    trackDocumentAnalysis,
    trackLawyerQuery,
    updateCookieConsent,
    isAdmin: session?.data?.user?.email === process.env.ADMIN_EMAIL,
  }
}
