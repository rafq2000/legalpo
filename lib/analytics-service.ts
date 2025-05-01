// lib/analytics-service.ts

import { trackEvent } from "@/lib/analytics"

export type EventType = "page_view" | "document_analyzed" | "chat_message" | "feedback_submitted" | "whatsapp_query"

interface TrackEventOptions {
  userId?: string | null
  anonymousId?: string | null
  eventType: string
  pagePath?: string
  componentId?: string
  sessionId?: string
  metadata?: Record<string, any>
  clientTimestamp?: number
}

interface TrackPageViewOptions {
  pagePath: string
  pageTitle?: string
  referrer?: string
  userId?: string | null
}

interface TrackDocumentAnalysisOptions {
  userId?: string | null
  documentType: string
  documentName: string
  documentSize: number
  processingTime: number
  success: boolean
  errorMessage?: string
}

interface TrackLawyerQueryOptions {
  userId?: string | null
  sessionId?: string
  queryText: string
  documentId?: string
  responseTime: number
  wasHelpful?: boolean
}

class AnalyticsService {
  public isInitialized = true // Assuming it's always initialized
  public hasTrackingConsent: (() => boolean) | undefined // Placeholder

  constructor() {
    // Implementación real requeriría lógica para verificar el consentimiento
    this.hasTrackingConsent = () => true // Por defecto, asumimos que hay consentimiento
  }

  async trackEvent(options: TrackEventOptions): Promise<boolean> {
    try {
      trackEvent(options.eventType, options)
      return true
    } catch (error) {
      console.error("Error tracking event:", error)
      return false
    }
  }

  async trackPageView(options: TrackPageViewOptions): Promise<void> {
    try {
      // Implementar lógica de registro de vista de página
      console.log(`[Analytics] Page view: ${options.pagePath}`, options)
    } catch (error) {
      console.error("Error tracking page view:", error)
    }
  }

  async trackDocumentAnalysis(options: TrackDocumentAnalysisOptions): Promise<boolean> {
    try {
      // Implementar lógica de registro de análisis de documento
      console.log(`[Analytics] Document analyzed: ${options.documentType}`, options)
      return true
    } catch (error) {
      console.error("Error tracking document analysis:", error)
      return false
    }
  }

  async trackLawyerQuery(options: TrackLawyerQueryOptions): Promise<boolean> {
    try {
      // Implementar lógica de registro de consulta a abogado
      console.log(`[Analytics] Lawyer query: ${options.queryText}`, options)
      return true
    } catch (error) {
      console.error("Error tracking lawyer query:", error)
      return false
    }
  }

  async updateConsent(consent: any): Promise<void> {
    console.log("Consent actualizado:", consent)
  }
}

// Exportar una instancia singleton
export const analyticsService = new AnalyticsService()
