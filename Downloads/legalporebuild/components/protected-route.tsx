"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, AlertTriangle } from "lucide-react"

interface ProtectedRouteProps {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [hasAccepted, setHasAccepted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar si ya aceptó los términos en esta sesión
    const accepted = sessionStorage.getItem("legal-terms-accepted")
    if (accepted === "true") {
      setHasAccepted(true)
    }
    setIsLoading(false)
  }, [])

  const handleAccept = () => {
    sessionStorage.setItem("legal-terms-accepted", "true")
    setHasAccepted(true)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-amber-500/30 border-t-amber-500"></div>
      </div>
    )
  }

  if (!hasAccepted) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full bg-white/5 border-white/10 backdrop-blur-xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-amber-500/20 rounded-full w-fit">
              <Shield className="h-8 w-8 text-amber-400" />
            </div>
            <CardTitle className="text-2xl text-white">Aviso Legal Importante</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-300 mb-1">Información Educativa</h3>
                  <p className="text-sm">
                    Esta calculadora proporciona estimaciones basadas en la legislación laboral chilena vigente. Los
                    resultados son referenciales y pueden variar según circunstancias específicas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-300 mb-1">No Constituye Asesoría Legal</h3>
                  <p className="text-sm">
                    Los cálculos no reemplazan la consulta con un abogado especialista. Para casos complejos o
                    situaciones particulares, recomendamos buscar asesoría legal profesional.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-300 mb-1">Privacidad Garantizada</h3>
                  <p className="text-sm">
                    Tus datos no se almacenan en nuestros servidores. Toda la información ingresada permanece en tu
                    dispositivo y se elimina al cerrar la sesión.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
              <p className="text-amber-300 text-sm font-medium text-center">
                Al continuar, confirmas que entiendes que esta herramienta es solo informativa y no constituye asesoría
                legal profesional.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="flex-1 border-white/20 text-slate-300 hover:bg-white/10"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleAccept}
                className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
              >
                Entiendo y Acepto
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}
