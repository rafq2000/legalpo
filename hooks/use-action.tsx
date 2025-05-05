"use client"

import { useState } from "react"
import { useActionGate } from "./use-action-gate"

export function useAction() {
  const { canUseAction, logAction, setShowUpgradeModal } = useActionGate()
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null)

  const checkPermission = async (): Promise<boolean> => {
    const allowed = await canUseAction()
    setIsAllowed(allowed)
    return allowed
  }

  const triggerAction = async (
    actionType: string,
    action: () => void,
    metadata?: Record<string, any>,
  ): Promise<void> => {
    const allowed = await checkPermission()

    if (!allowed) {
      setShowUpgradeModal(true)
      return
    }

    // Ejecutar la acción
    action()

    // Registrar la acción
    await logAction(actionType, metadata)
  }

  return {
    triggerAction,
    isAllowed,
    checkPermission,
  }
}
