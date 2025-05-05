"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { logActionEvent } from "@/lib/logActionEvent"
import { getUserActionsToday } from "@/lib/getUserActionsToday"
import { useSession } from "next-auth/react"

const MAX_DAILY_ACTIONS = 3

export function useActionGate() {
  const { data: session } = useSession()
  const [actionsToday, setActionsToday] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const pathname = usePathname()

  const uid = session?.user?.email || null

  // Cargar acciones del día al iniciar o cambiar de usuario
  useEffect(() => {
    async function loadTodayActions() {
      if (!uid) {
        setActionsToday(0)
        setLoading(false)
        return
      }

      setLoading(true)
      try {
        const actions = await getUserActionsToday(uid)
        setActionsToday(actions.length)
      } catch (error) {
        console.error("Error al cargar acciones del día:", error)
      } finally {
        setLoading(false)
      }
    }

    loadTodayActions()
  }, [uid])

  const canUseAction = async (): Promise<boolean> => {
    if (!uid) return false

    // Si ya tenemos el conteo cargado, usamos ese valor
    if (!loading) {
      return actionsToday < MAX_DAILY_ACTIONS
    }

    // Si no, consultamos directamente
    try {
      const actions = await getUserActionsToday(uid)
      const canUse = actions.length < MAX_DAILY_ACTIONS
      setActionsToday(actions.length)
      return canUse
    } catch (error) {
      console.error("Error al verificar acciones disponibles:", error)
      return false
    }
  }

  const logAction = async (actionType: string, metadata?: Record<string, any>): Promise<void> => {
    if (!uid) return

    try {
      await logActionEvent({
        uid,
        action: actionType,
        route: pathname,
        metadata,
      })

      // Actualizar el contador local
      setActionsToday((prev) => prev + 1)
    } catch (error) {
      console.error("Error al registrar acción:", error)
    }
  }

  return {
    canUseAction,
    logAction,
    actionsToday,
    actionsRemaining: Math.max(0, MAX_DAILY_ACTIONS - actionsToday),
    loading,
    showUpgradeModal,
    setShowUpgradeModal,
  }
}
