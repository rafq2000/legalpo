"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"

const MAX_FREE_ACTIONS = 2

export function useFreeActions() {
  const { data: session } = useSession()
  const [actionsUsed, setActionsUsed] = useState(0)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  // Cargar el contador de acciones al iniciar
  useEffect(() => {
    if (session) {
      // Si el usuario está autenticado, no necesitamos contar acciones
      setActionsUsed(0)
      return
    }

    try {
      const storedCount = localStorage.getItem("legalpo_free_actions")
      if (storedCount) {
        setActionsUsed(Number.parseInt(storedCount, 10))
      }
    } catch (error) {
      console.error("Error al cargar contador de acciones:", error)
    }
  }, [session])

  // Función para registrar una acción
  const registerAction = () => {
    // Si el usuario está autenticado, permitir acción sin restricciones
    if (session) return true

    // Si ya excedió el límite, mostrar modal
    if (actionsUsed >= MAX_FREE_ACTIONS) {
      setShowRegisterModal(true)
      return false
    }

    // Incrementar contador
    const newCount = actionsUsed + 1
    setActionsUsed(newCount)

    try {
      localStorage.setItem("legalpo_free_actions", newCount.toString())
    } catch (error) {
      console.error("Error al guardar contador de acciones:", error)
    }

    // Si esta acción alcanza el límite, mostrar advertencia
    if (newCount === MAX_FREE_ACTIONS) {
      // Mostrar toast o advertencia de última acción gratuita
      console.log("Esta es tu última acción gratuita")
    }

    return true
  }

  // Función para cerrar el modal
  const closeRegisterModal = () => {
    setShowRegisterModal(false)
  }

  return {
    actionsUsed,
    registerAction,
    showRegisterModal,
    closeRegisterModal,
    remainingActions: Math.max(0, MAX_FREE_ACTIONS - actionsUsed),
  }
}
