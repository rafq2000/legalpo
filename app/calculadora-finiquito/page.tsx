"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { formatMoney } from "@/lib/utils"
import { ShareButton } from "@/components/share-button"

const causalesTermino = [
  { value: "necesidades_empresa", label: "Necesidades de la empresa" },
  { value: "renuncia_voluntaria", label: "Renuncia voluntaria" },
  { value: "mutuo_acuerdo", label: "Mutuo acuerdo" },
  { value: "despido_injustificado", label: "Despido injustificado" },
  { value: "vencimiento_plazo", label: "Vencimiento del plazo del contrato" },
  { value: "cumplimiento_obra", label: "Cumplimiento de la obra o faena" },
]

function getCausalText(value: string) {
  const causal = causalesTermino.find((c) => c.value === value)
  return causal ? causal.label : ""
}

export default function CalculadoraFiniquito() {
  const [formData, setFormData] = useState({
    sueldoBase: "",
    promedioComisiones: "",
    gratificacionMensual: "",
    indemnizacionVacaciones: "",
    aniosServicio: "",
    causalTermino: "",
  })

  const [resultado, setResultado] = useState<{
    total: number
    indemnizacionSustitutiva: number
    indemnizacionVacaciones: number
    tiempoServicio: number
  } | null>(null)

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const sueldoBase = Number.parseFloat(formData.sueldoBase || "0")
    const promedioComisiones = Number.parseFloat(formData.promedioComisiones || "0")
    const gratificacionMensual = Number.parseFloat(formData.gratificacionMensual || "0")
    const indemnizacionVacaciones = Number.parseFloat(formData.indemnizacionVacaciones || "0")
    const aniosServicio = Number.parseFloat(formData.aniosServicio || "0")
    const causalTermino = formData.causalTermino

    let indemnizacionSustitutiva = 0

    if (causalTermino === "necesidades_empresa" || causalTermino === "despido_injustificado") {
      indemnizacionSustitutiva = sueldoBase + promedioComisiones + gratificacionMensual
    }

    const total = indemnizacionSustitutiva + indemnizacionVacaciones

    setResultado({
      total: total,
      indemnizacionSustitutiva: indemnizacionSustitutiva,
      indemnizacionVacaciones: indemnizacionVacaciones,
      tiempoServicio: aniosServicio,
    })
  }

  return (
    <Card className="w-[100%]">
      <CardHeader>
        <CardTitle>Calculadora de Finiquito Laboral</CardTitle>
        <CardDescription>Calcula tu finiquito de forma rápida y sencilla.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="sueldoBase">Sueldo Base</Label>
          <Input type="number" id="sueldoBase" name="sueldoBase" value={formData.sueldoBase} onChange={handleChange} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="promedioComisiones">Promedio Comisiones (últimos 3 meses)</Label>
          <Input
            type="number"
            id="promedioComisiones"
            name="promedioComisiones"
            value={formData.promedioComisiones}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="gratificacionMensual">Gratificación Mensual</Label>
          <Input
            type="number"
            id="gratificacionMensual"
            name="gratificacionMensual"
            value={formData.gratificacionMensual}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="indemnizacionVacaciones">Indemnización por Vacaciones</Label>
          <Input
            type="number"
            id="indemnizacionVacaciones"
            name="indemnizacionVacaciones"
            value={formData.indemnizacionVacaciones}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="aniosServicio">Años de Servicio</Label>
          <Input
            type="number"
            id="aniosServicio"
            name="aniosServicio"
            value={formData.aniosServicio}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="causalTermino">Causal de Término de Contrato</Label>
          <Select onValueChange={(value) => setFormData({ ...formData, causalTermino: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una causal" />
            </SelectTrigger>
            <SelectContent>
              {causalesTermino.map((causal) => (
                <SelectItem key={causal.value} value={causal.value}>
                  {causal.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleSubmit}>Calcular Finiquito</Button>

        {resultado && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Resultado:</h3>
            <p>Total a Pagar: {formatMoney(resultado.total)}</p>
            <p>Indemnización Sustitutiva: {formatMoney(resultado.indemnizacionSustitutiva)}</p>
            <p>Indemnización por Vacaciones: {formatMoney(resultado.indemnizacionVacaciones)}</p>
            <p>Tiempo de Servicio: {resultado.tiempoServicio} años</p>
            <Button variant="outline" onClick={() => window.print()}>
              Imprimir resultado
            </Button>
            <ShareButton
              title="Cálculo de Finiquito - LegalPO"
              text={`Calculé mi finiquito en LegalPO:

Causal: ${getCausalText(formData.causalTermino)}
Tiempo de servicio: ${resultado.tiempoServicio}
Total a pagar: ${formatMoney(resultado.total)}

¡Calcula tu finiquito gratis en LegalPO!`}
              size="default"
              variant="outline"
              className="ml-2"
            />
          </div>
        )}
        {resultado && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-sm text-blue-800 mb-3">
              ¿Te fue útil esta calculadora? ¡Compártela para ayudar a otros trabajadores!
            </p>
            <ShareButton
              title="Calculadora de Finiquito - LegalPO"
              text={`Calculé mi finiquito laboral en LegalPO y obtuve un resultado de ${formatMoney(resultado.total)}. 

¡Es gratis y muy fácil de usar! Calcula el tuyo en LegalPO.`}
              size="default"
              variant="default"
            />
          </div>
        )}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}
