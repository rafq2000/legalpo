"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import { logActionEvent } from "@/lib/logActionEvent"
import { getAnonymousIdentifier } from "@/lib/getAnonymousIdentifier"
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore"
import { app } from "@/lib/firebase"

const MAX_DAILY_ACTIONS = 3
const db = getFirestore(app)

export function useActionGate() {
  const { data: session } = useSession()
  const [actionsUsed, setActionsUsed] = useState(0)
  const [loading, setLoading] = useState(true)
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const pathname = usePathname()

  // Obtener el identificador del usuario (email si está autenticado, o un ID anónimo)
  const getUserIdentifier = async (): Promise<string> => {
    if (session?.user?.email) {
      return session.user.email
    }
    return await getAnonymousIdentifier()
  }

  // Obtener las acciones del usuario para hoy
  const getUserActionsToday = async (): Promise<number> => {
    try {
      const identifier = await getUserIdentifier()

      // Obtener el inicio del día actual
      const startOfDay = new Date()
      startOfDay.setHours(0, 0, 0, 0)

      // Consultar acciones del usuario para hoy
      const q = query(
        collection(db, "actionLogs"),
        where("identifier", "==", identifier),
        where("createdAt", ">=", startOfDay.toISOString()),
      )

      const snapshot = await getDocs(q)
      return snapshot.size
    } catch (error) {
      console.error("Error al obtener acciones del usuario:", error)
      return 0
    }
  }

  // Cargar acciones del día al iniciar o cambiar de usuario
  useEffect(() => {
    async function loadTodayActions() {
      setLoading(true)
      try {
        const count = await getUserActionsToday()
        setActionsUsed(count)
      } catch (error) {
        console.error("Error al cargar acciones del día:", error)
      } finally {
        setLoading(false)
      }
    }

    loadTodayActions()
  }, [session])

  // Verificar si el usuario puede usar una acción
  const canUseAction = async (): Promise<boolean> => {
    // Si el usuario está autenticado, siempre puede usar acciones
    if (session?.user) {
      return true
    }

    // Si no está autenticado, verificar el límite diario
    try {
      const count = await getUserActionsToday()
      setActionsUsed(count)
      return count < MAX_DAILY_ACTIONS
    } catch (error) {
      console.error("Error al verificar acciones disponibles:", error)
      return false
    }
  }

  // Registrar una acción
  const logAction = async (actionType: string, metadata?: Record<string, any>): Promise<void> => {
    try {
      const identifier = await getUserIdentifier()

      await logActionEvent({
        identifier,
        action: actionType,
        route: pathname,
        isAuthenticated: !!session?.user,
        metadata,
      })

      // Actualizar el contador local
      setActionsUsed((prev) => prev + 1)
    } catch (error) {
      console.error("Error al registrar acción:", error)
    }
  }

  // Ejecutar una acción verificando primero si está permitida
  const triggerAction = async (
    actionType: string,
    callback: () => void,
    metadata?: Record<string, any>,
  ): Promise<void> => {
    const allowed = await canUseAction()

    if (allowed) {
      // Si está permitido, ejecutar la acción y registrarla
      await logAction(actionType, metadata)
      callback()
    } else {
      // Si no está permitido, mostrar el modal de upgrade
      setShowUpgradeModal(true)
    }
  }

  // Resetear el contador de acciones (útil después de un registro exitoso)
  const resetActions = () => {
    setActionsUsed(0)
  }

  return {
    canUseAction,
    logAction,
    triggerAction,
    actionsUsed,
    actionsRemaining: session?.user ? Number.POSITIVE_INFINITY : Math.max(0, MAX_DAILY_ACTIONS - actionsUsed),
    loading,
    showUpgradeModal,
    setShowUpgradeModal,
    resetActions,
  }
}
