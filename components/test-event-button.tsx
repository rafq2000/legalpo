"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { registrarEventoPrueba } from "@/utils/firestore-service"
import { toast } from "@/components/ui/use-toast"

export function TestEventButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const eventId = await registrarEventoPrueba()

      if (eventId) {
        toast({
          title: "Evento registrado correctamente",
          description: `ID del evento: ${eventId}`,
          variant: "default",
        })
      } else {
        toast({
          title: "Error al registrar evento",
          description: "No se pudo registrar el evento de prueba. Verifica la conexión a Firebase.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error al registrar evento de prueba:", error)
      toast({
        title: "Error al registrar evento",
        description: "Ocurrió un error al intentar registrar el evento de prueba",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handleClick} disabled={isLoading} variant="outline" className="flex items-center gap-2">
      {isLoading ? (
        <>
          <span className="animate-spin">⏳</span>
          <span>Registrando...</span>
        </>
      ) : (
        <>
          <span>🔥</span>
          <span>Registrar evento de prueba</span>
        </>
      )}
    </Button>
  )
}
