"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const FREE_ACTIONS_LIMIT = 2

export function useFreeActions() {
  const [freeActionsCount, setFreeActionsCount] = useState(0)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const pathname = usePathname()

  // Cargar el contador de acciones gratuitas al iniciar
  useEffect(() => {
    const storedCount = localStorage.getItem("freeActionsCount")
    if (storedCount) {
      setFreeActionsCount(Number.parseInt(storedCount, 10))
    }
  }, [])

  // Función para incrementar el contador de acciones gratuitas
  const incrementFreeActions = () => {
    const newCount = freeActionsCount + 1
    setFreeActionsCount(newCount)
    localStorage.setItem("freeActionsCount", newCount.toString())

    // Si se alcanza el límite, mostrar el modal de registro
    if (newCount > FREE_ACTIONS_LIMIT) {
      setShowRegisterModal(true)
      return false // Indicar que se ha alcanzado el límite
    }
    return true // Indicar que aún hay acciones gratuitas disponibles
  }

  // Función para cerrar el modal de registro
  const closeRegisterModal = () => {
    setShowRegisterModal(false)
  }

  // Función para resetear el contador (por ejemplo, después de registrarse)
  const resetFreeActions = () => {
    setFreeActionsCount(0)
    localStorage.setItem("freeActionsCount", "0")
    setShowRegisterModal(false)
  }

  return {
    freeActionsCount,
    showRegisterModal,
    incrementFreeActions,
    closeRegisterModal,
    resetFreeActions,
    actionsRemaining: Math.max(0, FREE_ACTIONS_LIMIT - freeActionsCount),
  }
}
