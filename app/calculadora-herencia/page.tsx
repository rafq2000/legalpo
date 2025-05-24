"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { formatCurrency } from "@/lib/utils"
import { ShareButton } from "@/components/share-button"

export default function CalculadoraHerencia() {
  const [bienes, setBienes] = useState<number | null>(null)
  const [deudas, setDeudas] = useState<number | null>(null)
  const [conyuge, setConyuge] = useState<boolean>(false)
  const [hijos, setHijos] = useState<boolean>(false)
  const [resultado, setResultado] = useState<{
    herenciaUsuario: number
    porcentajeHerencia: number
  } | null>(null)

  const calcularHerencia = () => {
    if (bienes === null || deudas === null) {
      alert("Por favor, complete todos los campos.")
      return
    }

    const herenciaTotal = bienes - deudas

    if (herenciaTotal <= 0) {
      setResultado({ herenciaUsuario: 0, porcentajeHerencia: 0 })
      return
    }

    let herenciaUsuario = herenciaTotal
    let porcentajeHerencia = 100

    if (conyuge && hijos) {
      herenciaUsuario = herenciaTotal / 2
      porcentajeHerencia = 50
    } else if (conyuge) {
      herenciaUsuario = herenciaTotal / 2
      porcentajeHerencia = 50
    } else if (hijos) {
      herenciaUsuario = herenciaTotal / 2
      porcentajeHerencia = 50
    }

    setResultado({ herenciaUsuario, porcentajeHerencia })
  }

  const imprimirResultados = () => {
    window.print()
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="w-[500px] mx-auto">
        <CardHeader>
          <CardTitle>Calculadora de Herencia</CardTitle>
          <CardDescription>Ingrese los datos para calcular su parte de la herencia.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="bienes">Valor total de los bienes ($)</Label>
            <Input
              type="number"
              id="bienes"
              placeholder="Ej: 100000"
              onChange={(e) => setBienes(Number(e.target.value))}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="deudas">Valor total de las deudas ($)</Label>
            <Input
              type="number"
              id="deudas"
              placeholder="Ej: 20000"
              onChange={(e) => setDeudas(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Input type="checkbox" id="conyuge" checked={conyuge} onCheckedChange={() => setConyuge(!conyuge)} />
            <Label htmlFor="conyuge">¿Hay cónyuge?</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Input type="checkbox" id="hijos" checked={hijos} onCheckedChange={() => setHijos(!hijos)} />
            <Label htmlFor="hijos">¿Hay hijos?</Label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={calcularHerencia}>Calcular</Button>
          {resultado && (
            <Button variant="secondary" onClick={imprimirResultados}>
              Imprimir resultados
            </Button>
          )}
          {resultado && (
            <ShareButton
              title="Cálculo de Herencia - LegalPO"
              text={`Calculé mi herencia en LegalPO:

Mi herencia estimada: ${formatCurrency(resultado.herenciaUsuario)}
Porcentaje: ${resultado.porcentajeHerencia.toFixed(2)}%

¡Calcula tu herencia gratis en LegalPO!`}
              size="default"
              variant="outline"
              className="ml-2"
            />
          )}
        </CardFooter>
        {resultado && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-sm text-blue-800 mb-3">
              ¿Te fue útil esta calculadora? ¡Compártela para ayudar a otros!
            </p>
            <ShareButton
              title="Calculadora de Herencia - LegalPO"
              text={`Calculé mi herencia en LegalPO y mi parte estimada es ${formatCurrency(resultado.herenciaUsuario)}. 

¡Es gratis y fácil de usar! Calcula la tuya en LegalPO.`}
              size="default"
              variant="default"
            />
          </div>
        )}
      </Card>
      {resultado && (
        <div className="mt-6 w-[500px] mx-auto">
          <Separator className="my-4" />
          <h2 className="text-xl font-semibold mb-4">Resultados:</h2>
          <p>Su parte de la herencia estimada es: {formatCurrency(resultado.herenciaUsuario)}</p>
          <p>Porcentaje de la herencia: {resultado.porcentajeHerencia.toFixed(2)}%</p>
        </div>
      )}
    </div>
  )
}
