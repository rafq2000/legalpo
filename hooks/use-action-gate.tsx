"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { trackAction, getLocalActions } from "@/utils/action-tracker"
import { collection, query, where, getDocs, orderBy } from "firebase/firestore"
import { db } from "@/lib/firebase/client"

// Número máximo de acciones gratuitas
const MAX_FREE_ACTIONS = 2

export const useActionGate = () => {
  const { data: session } = useSession()
  const [actionsUsed, setActionsUsed] = useState(0)
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  // Obtener un identificador anónimo para usuarios no registrados
  const getAnonymousId = () => {
    if (typeof window === "undefined") return null

    let anonId = localStorage.getItem("legalpo_anon_id")

    if (!anonId) {
      anonId = `anon-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`
      localStorage.setItem("legalpo_anon_id", anonId)
    }

    return anonId
  }

  // Obtener acciones del usuario de hoy
  const getUserActionsToday = async () => {
    try {
      const identifier = session?.user?.email || getAnonymousId()
      if (!identifier) return 0

      // Obtener fecha de inicio del día
      const startOfDay = new Date()
      startOfDay.setHours(0, 0, 0, 0)

      // Intentar obtener acciones de Firestore
      try {
        const q = query(
          collection(db, "userActions"),
          where("identifier", "==", identifier),
          where("timestamp", ">=", startOfDay.toISOString()),
          orderBy("timestamp", "desc"),
        )

        const snapshot = await getDocs(q)
        return snapshot.size
      } catch (error) {
        console.error("Error al obtener acciones de Firestore:", error)

        // Fallback: usar localStorage
        const localActions = getLocalActions()
        return localActions.filter((action) => {
          const actionDate = new Date(action.timestamp)
          return action.identifier === identifier && actionDate >= startOfDay
        }).length
      }
    } catch (error) {
      console.error("Error al obtener acciones del usuario:", error)
      return 0
    }
  }

  // Verificar si el usuario puede realizar una acción
  const canUseAction = async () => {
    // Usuario autenticado siempre puede hacer acciones
    if (session) return true

    try {
      // Obtener número de acciones usadas hoy
      const count = await getUserActionsToday()
      setActionsUsed(count)

      // Permitir hasta MAX_FREE_ACTIONS acciones gratuitas
      return count < MAX_FREE_ACTIONS
    } catch (error) {
      console.error("Error al verificar acciones:", error)
      return true // En caso de error, permitir la acción
    }
  }

  // Registrar una acción
  const logAction = async () => {
    try {
      const identifier = session?.user?.email || getAnonymousId()

      await trackAction("free_action", {
        identifier,
        isAuthenticated: !!session,
        timestamp: new Date().toISOString(),
      })

      setActionsUsed((prev) => prev + 1)
    } catch (error) {
      console.error("Error al registrar acción:", error)
    }
  }

  // Ejecutar una acción verificando primero si está permitida
  const triggerAction = async (action: () => void | Promise<any>) => {
    if (loading) return false

    try {
      const canUse = await canUseAction()

      if (canUse) {
        // Registrar la acción primero
        await logAction()

        // Verificar si esta fue la última acción gratuita
        const updatedCount = session ? 0 : actionsUsed + 1
        setActionsUsed(updatedCount)

        // Ejecutar la acción solicitada
        const result = await action()

        // Si no hay usuario y se alcanzó el límite, mostrar modal DESPUÉS
        // de completar la acción (esto permite que vean la respuesta primero)
        if (!session && updatedCount >= MAX_FREE_ACTIONS) {
          setTimeout(() => {
            setShowModal(true)
          }, 1500) // Pequeño retraso para que vean el resultado primero
        }

        return result
      } else {
        // Mostrar modal de registro si ya excedió el límite
        setShowModal(true)
        return false
      }
    } catch (error) {
      console.error("Error al ejecutar acción:", error)
      return false
    }
  }

  // Verificar acciones al cargar
  useEffect(() => {
    const checkActions = async () => {
      setLoading(true)
      try {
        if (!session) {
          const count = await getUserActionsToday()
          setActionsUsed(count)
        }
      } catch (error) {
        console.error("Error al verificar acciones:", error)
      } finally {
        setLoading(false)
      }
    }

    checkActions()
  }, [session])

  return {
    triggerAction,
    canUseAction,
    actionsUsed,
    actionsRemaining: session ? Number.POSITIVE_INFINITY : Math.max(0, MAX_FREE_ACTIONS - actionsUsed),
    loading,
    showModal,
    setShowModal,
  }
}
