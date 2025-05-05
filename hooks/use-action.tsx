"use client"

import { useState } from "react"
import { useActionGate } from "@/hooks/use-action-gate"

export function useAction() {
  const { triggerAction, actionsRemaining } = useActionGate()
  const [isExecuting, setIsExecuting] = useState(false)

  const executeAction = async (actionType: string, callback: () => void, metadata?: Record<string, any>) => {
    setIsExecuting(true)
    try {
      await triggerAction(actionType, callback, metadata)
    } finally {
      setIsExecuting(false)
    }
  }

  return {
    triggerAction: executeAction,
    actionsRemaining,
    isExecuting,
  }
}
