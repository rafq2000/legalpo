"use client"

import { useActionGate } from "@/hooks/use-action-gate"
import { useSession } from "next-auth/react"

export function ActionsCounter() {
  const { actionsRemaining, loading } = useActionGate()
  const { data: session } = useSession()

  // No mostrar nada si el usuario está autenticado o si está cargando
  if (loading || session?.user || actionsRemaining === Number.POSITIVE_INFINITY) {
    return null
  }

  return (
    <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
      {actionsRemaining > 0 ? (
        <span>Te quedan {actionsRemaining} acciones gratuitas</span>
      ) : (
        <span>Has alcanzado el límite de acciones gratuitas</span>
      )}
    </div>
  )
}
