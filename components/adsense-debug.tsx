"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

export function AdsenseDebug() {
  const [status, setStatus] = useState<"loading" | "success" | "error" | "blocked">("loading")
  const [message, setMessage] = useState("Verificando la integración de AdSense...")

  useEffect(() => {
    // Check if AdSense script is loaded
    const checkAdSense = () => {
      try {
        if (window.adsbygoogle) {
          setStatus("success")
          setMessage("El script de AdSense se ha cargado correctamente.")
        } else {
          // Check if AdBlock might be the issue
          fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
            method: "HEAD",
            mode: "no-cors",
          })
            .then(() => {
              setStatus("error")
              setMessage("El script de AdSense está disponible pero no se ha inicializado correctamente.")
            })
            .catch(() => {
              setStatus("blocked")
              setMessage(
                "El script de AdSense parece estar bloqueado. Esto podría ser debido a un bloqueador de anuncios.",
              )
            })
        }
      } catch (error) {
        setStatus("error")
        setMessage(`Error al verificar AdSense: ${error instanceof Error ? error.message : String(error)}`)
      }
    }

    // Wait a bit to check if AdSense loads
    const timer = setTimeout(checkAdSense, 2000)
    return () => clearTimeout(timer)
  }, [])

  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <Card className="max-w-md mx-auto my-8">
      <CardHeader>
        <CardTitle>Diagnóstico de AdSense</CardTitle>
        <CardDescription>Verificación del estado de integración de Google AdSense</CardDescription>
      </CardHeader>
      <CardContent>
        <Alert variant={status === "success" ? "default" : status === "loading" ? "default" : "destructive"}>
          {status === "success" && <CheckCircle className="h-4 w-4" />}
          {status === "error" && <XCircle className="h-4 w-4" />}
          {status === "blocked" && <AlertCircle className="h-4 w-4" />}
          {status === "loading" && (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          )}
          <AlertTitle>
            {status === "success" && "AdSense está funcionando"}
            {status === "error" && "Error en AdSense"}
            {status === "blocked" && "AdSense bloqueado"}
            {status === "loading" && "Verificando AdSense"}
          </AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>

        <div className="mt-4">
          <Button onClick={reloadPage} className="w-full">
            Recargar página
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
