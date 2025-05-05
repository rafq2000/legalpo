"use client"

import { useState } from "react"
import { useActionGate } from "./use-action-gate"

export function useAction() {
  const { triggerAction, actionsRemaining, loading } = useActionGate()
  const [isProcessing, setIsProcessing] = useState(false)

  const executeAction = async (actionType: string, callback: () => void, metadata?: Record<string, any>) => {
    setIsProcessing(true)
    try {
      await triggerAction(actionType, callback, metadata)
    } finally {
      setIsProcessing(false)
    }
  }

  return {
    triggerAction: executeAction,
    actionsRemaining,
    loading: loading || isProcessing,
    hasAvailableActions: actionsRemaining > 0 || actionsRemaining === Number.POSITIVE_INFINITY,
  }
}
