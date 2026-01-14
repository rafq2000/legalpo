"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createMercadoPagoCheckout } from "@/app/actions/mercadopago"
import { Loader2 } from "lucide-react"

export function MercadoPagoCheckout() {
  const [loading, setLoading] = useState(false)
  const [studentName, setStudentName] = useState("")
  const [parentEmail, setParentEmail] = useState("")
  const [error, setError] = useState("")

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const result = await createMercadoPagoCheckout(studentName, parentEmail)

      if (result.success && result.checkoutUrl) {
        // Redirect to Mercado Pago checkout
        window.location.href = result.checkoutUrl
      } else {
        setError(result.error || "Error al procesar el pago")
      }
    } catch (err) {
      setError("Error al conectar con Mercado Pago")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleCheckout} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="studentName">Nombre del Estudiante</Label>
          <Input
            id="studentName"
            type="text"
            placeholder="Nombre completo del niño/a"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="parentEmail">Email del Padre/Madre</Label>
          <Input
            id="parentEmail"
            type="email"
            placeholder="tu@email.com"
            value={parentEmail}
            onChange={(e) => setParentEmail(e.target.value)}
            required
            className="mt-2"
          />
        </div>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>}

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#009EE3] hover:bg-[#0082C3] text-white font-semibold py-6 text-lg"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Procesando...
          </>
        ) : (
          "Pagar con Mercado Pago"
        )}
      </Button>

      <p className="text-sm text-center text-muted-foreground">
        Serás redirigido a Mercado Pago para completar el pago de forma segura
      </p>
    </form>
  )
}
