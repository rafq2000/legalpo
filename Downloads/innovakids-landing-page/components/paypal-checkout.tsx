"use client"

import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PayPalCheckoutProps {
  paymentOption: "first" | "second" | "full" | "deposit" | "final" | "minimal"
  amount: number
}

declare global {
  interface Window {
    paypal?: any
    fbq?: any
  }
}

export default function PayPalCheckout({ paymentOption, amount }: PayPalCheckoutProps) {
  const [error, setError] = useState("")
  const [studentName, setStudentName] = useState("")
  const [parentEmail, setParentEmail] = useState("")
  const paypalRef = useRef<HTMLDivElement>(null)
  const [sdkLoaded, setSdkLoaded] = useState(false)

  useEffect(() => {
    if (sdkLoaded) return

    const script = document.createElement("script")
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`
    script.async = true
    script.onload = () => setSdkLoaded(true)
    script.onerror = () => setError("Error al cargar PayPal")
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  useEffect(() => {
    if (!sdkLoaded || !window.paypal || !paypalRef.current) return
    if (!studentName || !parentEmail) return

    // Clear previous buttons
    paypalRef.current.innerHTML = ""

    window.paypal
      .Buttons({
        createOrder: async () => {
          try {
            const res = await fetch("/api/paypal/create-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ amount: amount.toFixed(2) }),
            })
            const order = await res.json()
            if (order.id) return order.id
            throw new Error(order.error || "Error al crear orden")
          } catch (err: any) {
            setError(err.message)
            throw err
          }
        },
        onApprove: async (data: any) => {
          try {
            const res = await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderID: data.orderID }),
            })
            const result = await res.json()

            if (result.status === "COMPLETED") {
              if (typeof window !== "undefined" && window.fbq) {
                window.fbq("track", "Purchase", {
                  value: amount,
                  currency: "USD",
                  content_name: `Innovakids - ${paymentOption}`,
                })
              }

              window.location.href = `/gracias?orderId=${data.orderID}&method=paypal&amount=${amount}`
            } else {
              setError("Pago no completado. Intenta de nuevo.")
            }
          } catch (err: any) {
            setError("Error al procesar el pago")
          }
        },
        onError: (err: any) => {
          setError("Error en PayPal. Revisa tu conexión.")
          console.error("[v0] PayPal error:", err)
        },
      })
      .render(paypalRef.current)
  }, [sdkLoaded, studentName, parentEmail, amount, paymentOption])

  return (
    <div className="space-y-6">
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

      {studentName && parentEmail && <div ref={paypalRef} className="mt-4 min-h-[150px]"></div>}

      {(!studentName || !parentEmail) && (
        <div className="text-center text-sm text-muted-foreground p-4 bg-muted/50 rounded">
          Completa los campos para ver las opciones de pago
        </div>
      )}
    </div>
  )
}
