"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { logActionEvent } from "@/lib/logActionEvent"
import type React from "react"

type ActionGateContextType = {
  actionsLeft: number
  useAction: () => boolean
  resetActions: () => void
  showModal: boolean
  setShowModal: (value: boolean) => void
}

const MAX_ACTIONS = 2
const ActionGateContext = createContext<ActionGateContextType | undefined>(undefined)

export function ActionGateProvider({ children }: { children: React.ReactNode }) {
  const [actionsLeft, setActionsLeft] = useState(MAX_ACTIONS)
  const [showModal, setShowModal] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    try {
      const stored = localStorage.getItem("legalpo-actions-left")
      if (stored) {
        setActionsLeft(Number.parseInt(stored, 10))
      }
    } catch (error) {
      console.error("Error al cargar acciones del localStorage:", error)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("legalpo-actions-left", actionsLeft.toString())
    } catch (error) {
      console.error("Error al guardar acciones en localStorage:", error)
    }
  }, [actionsLeft])

  const useAction = () => {
    if (actionsLeft <= 0) {
      setShowModal(true)
      return false
    }

    const newCount = actionsLeft - 1
    setActionsLeft(newCount)

    // Registrar la acción en Firestore (asíncrono, no esperamos)
    logActionEvent({
      tipo: "uso_sin_registro",
      ruta: pathname,
      accionesRestantes: newCount,
      timestamp: new Date().toISOString(),
    }).catch((error) => {
      console.error("Error al registrar acción:", error)
    })

    return true
  }

  const resetActions = () => {
    setActionsLeft(MAX_ACTIONS)
    setShowModal(false)
    try {
      localStorage.setItem("legalpo-actions-left", MAX_ACTIONS.toString())
    } catch (error) {
      console.error("Error al resetear acciones en localStorage:", error)
    }
  }

  return (
    <ActionGateContext.Provider
      value={{
        actionsLeft,
        useAction,
        resetActions,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </ActionGateContext.Provider>
  )
}

export function useActionGate() {
  const context = useContext(ActionGateContext)
  if (context === undefined) {
    throw new Error("useActionGate debe usarse dentro de un ActionGateProvider")
  }
  return context
}
