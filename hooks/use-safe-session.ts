"use client"

import { useSession } from "next-auth/react"

/**
 * A safe hook to use NextAuth's session during pre-rendering.
 * Avoids destructuring errors with the useSession hook.
 */
export function useSafeSession() {
  // Capture the result from the original hook
  const sessionResult = useSession()

  // If the result is undefined (during pre-rendering), return default values
  if (typeof sessionResult === "undefined") {
    return {
      data: null,
      status: "loading",
      update: async () => null,
    }
  }

  // Otherwise, return the actual result
  return sessionResult
}
