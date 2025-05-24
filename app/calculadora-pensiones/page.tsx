"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ShareButton } from "@/components/share-button"

export default function CalculadoraPensionesPage() {
  const [ingresoNeto, setIngresoNeto] = useState<number | null>(null)
  const [numeroHijos, setNumeroHijos] = useState<number | null>(null)
  const [resultado, setResultado] = useState<{
    montoMinimo: number
    montoMaximo: number
    porcentajeIngreso: number
  } | null>(null)

  const calcularPension = () => {
    if (ingresoNeto === null || numeroHijos === null) {
      alert("Por favor, complete todos los campos.")
      return
    }

    let porcentaje: number

    switch (numeroHijos) {
      case 1:
        porcentaje = 0.25
        break
      case 2:
        porcentaje = 0.35
        break
      case 3:
        porcentaje = 0.45
        break
      case 4:
        porcentaje = 0.5
        break
      case 5:
        porcentaje = 0.55
        break
      default:
        porcentaje = 0.6
        break
    }

    const montoMinimo = ingresoNeto * porcentaje * 0.8
    const montoMaximo = ingresoNeto * porcentaje

    setResultado({
      montoMinimo: montoMinimo,
      montoMaximo: montoMaximo,
      porcentajeIngreso: porcentaje * 100,
    })
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Calculadora de Pensión Alimenticia</CardTitle>
          <CardDescription>
            Calcula un estimado del monto de pensión alimenticia según los ingresos del padre/madre y el número de
            hijos.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="ingreso">Ingreso Neto Mensual (CLP)</Label>
            <Input
              type="number"
              id="ingreso"
              placeholder="Ej: 1000000"
              onChange={(e) => setIngresoNeto(e.target.value ? Number.parseFloat(e.target.value) : null)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="hijos">Número de Hijos</Label>
            <Input
              type="number"
              id="hijos"
              placeholder="Ej: 2"
              onChange={(e) => setNumeroHijos(e.target.value ? Number.parseFloat(e.target.value) : null)}
            />
          </div>
          <Button onClick={calcularPension}>Calcular Pensión</Button>

          {resultado && (
            <>
              <Alert variant="destructive">
                <AlertTitle>Importante:</AlertTitle>
                <AlertDescription>
                  Este cálculo es un estimado. El monto final puede variar según diversos factores legales y la decisión
                  del juez.
                </AlertDescription>
              </Alert>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg text-center">
                <p className="text-sm text-blue-800 mb-3">
                  ¿Te fue útil esta calculadora? ¡Compártela para ayudar a otros padres!
                </p>
                <ShareButton
                  title="Calculadora de Pensión Alimenticia - LegalPO"
                  text={`Calculé la pensión alimenticia en LegalPO:

Rango estimado: $${resultado.montoMinimo.toLocaleString()} - $${resultado.montoMaximo.toLocaleString()}
Equivale al ${resultado.porcentajeIngreso}% del ingreso

¡Calcula la tuya gratis en LegalPO!`}
                  size="default"
                  variant="default"
                />
              </div>

              <p className="text-lg font-semibold mt-4">Resultado Estimado:</p>
              <p>
                Rango: ${resultado.montoMinimo.toLocaleString()} - ${resultado.montoMaximo.toLocaleString()}
              </p>
              <p>Equivale al {resultado.porcentajeIngreso}% del ingreso.</p>
            </>
          )}
          {resultado && (
            <div className="mt-6 text-center">
              <ShareButton
                title="Calculadora de Pensión Alimenticia - LegalPO"
                text={`Usé la calculadora de pensión alimenticia de LegalPO y obtuve un rango de $${resultado.montoMinimo.toLocaleString()} - $${resultado.montoMaximo.toLocaleString()}.

¡Es gratis y muy útil! Pruébala en LegalPO.`}
                size="sm"
                variant="outline"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
