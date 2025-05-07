"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PreguntasChat } from "@/components/preguntas-chat"

export function DeudasConsultas() {
  const [pregunta, setPregunta] = useState("")

  const preguntasPopulares = [
    "¿Cuándo prescribe una deuda bancaria en Chile?",
    "¿Pueden embargar mi sueldo por deudas?",
    "¿Cómo salir del DICOM?",
    "¿Qué es la Ley 20.720 de Reorganización y Liquidación?",
    "¿Qué hacer ante una cobranza extrajudicial?",
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Consulta sobre deudas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Input
                placeholder="Escribe tu pregunta sobre deudas..."
                value={pregunta}
                onChange={(e) => setPregunta(e.target.value)}
                className="mb-2"
              />
            </div>
            <PreguntasChat tema="deudas" preguntaInicial={pregunta} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preguntas frecuentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {preguntasPopulares.map((pregunta, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-left h-auto py-2"
                onClick={() => setPregunta(pregunta)}
              >
                {pregunta}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
