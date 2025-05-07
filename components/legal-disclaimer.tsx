"use client"

import { Button } from "@/components/ui/button"

import { useEffect, useState } from "react"
import { AlertCircle } from "lucide-react"
import { AlertDescription } from "@/components/ui/alert"

export function LegalDisclaimer() {
  const [isAccepted, setIsAccepted] = useState(false)

  useEffect(() => {
    // Verificar si el disclaimer ya fue aceptado
    const accepted = localStorage.getItem("legalpo-disclaimer-accepted") === "true"
    setIsAccepted(accepted)
  }, [])

  const handleAccept = () => {
    // Guardar en localStorage que el disclaimer fue aceptado
    localStorage.setItem("legalpo-disclaimer-accepted", "true")
    setIsAccepted(true)
  }

  if (isAccepted) return null

  return (
    <div className="fixed bottom-0 left-0 w-full bg-yellow-50 border-t border-yellow-200 p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
          <AlertDescription className="text-sm text-yellow-800">
            LegalPO es una herramienta informativa y no reemplaza la asesoría legal profesional.
          </AlertDescription>
        </div>
        <Button variant="outline" size="sm" onClick={handleAccept}>
          Aceptar
        </Button>
      </div>
    </div>
  )
}
