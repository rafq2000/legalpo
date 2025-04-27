import { trackEvent } from "@/lib/analytics"

type FeedbackType = "quick" | "detailed" | null
type QuickRating = "positive" | "negative" | null
type DetailedRating = 1 | 2 | 3 | 4 | 5 | null
type ServiceType = "document-analysis" | "contract-generator" | "calculator" | "chat" | "general"

interface FeedbackData {
  type: FeedbackType
  quickRating: QuickRating
  detailedRating: DetailedRating
  comment: string
  serviceUsed: ServiceType
  userId: string | null
  userType: "anonymous" | "registered"
  path: string
}

/**
 * Submits user feedback to the API
 */
export async function submitFeedback(data: FeedbackData): Promise<void> {
  try {
    // Track the feedback event in analytics
    trackEvent("feedback_submitted", {
      feedbackType: data.type,
      quickRating: data.quickRating,
      detailedRating: data.detailedRating,
      serviceUsed: data.serviceUsed,
      userType: data.userType,
      hasComment: data.comment ? true : false,
      path: data.path,
    })

    // Send feedback to the API
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error submitting feedback:", error)
    throw error
  }
}

/**
 * Checks if the user should be shown a feedback prompt
 * based on their usage patterns
 */
export function shouldShowFeedbackPrompt(userId: string | null): boolean {
  // If no user ID, show feedback after 2 minutes on site
  if (!userId) return true

  // Check local storage for last feedback time
  const lastFeedback = localStorage.getItem(`feedback_last_shown_${userId}`)

  if (!lastFeedback) return true

  // Don't show feedback if it was shown in the last 7 days
  const lastFeedbackDate = new Date(lastFeedback)
  const now = new Date()
  const daysSinceLastFeedback = Math.floor((now.getTime() - lastFeedbackDate.getTime()) / (1000 * 60 * 60 * 24))

  return daysSinceLastFeedback >= 7
}

/**
 * Records that feedback was shown to a user
 */
export function recordFeedbackShown(userId: string | null): void {
  if (!userId) return

  localStorage.setItem(`feedback_last_shown_${userId}`, new Date().toISOString())
}
