"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PopularQuestions() {
  const [activeTab, setActiveTab] = useState("laboral")

  const questions = {
    laboral: [
      "¿Cuántos días de vacaciones me corresponden por ley?",
      "¿Qué debo hacer si no me pagan las horas extras?",
      "¿Pueden despedirme estando con licencia médica?",
      "¿Cuánto es el plazo para reclamar por un despido injustificado?",
    ],
    pensiones: [
      "¿Cómo se calcula la pensión de alimentos en Chile?",
      "¿Puedo modificar el monto de la pensión de alimentos?",
      "¿Qué pasa si el padre no paga la pensión de alimentos?",
      "¿Hasta qué edad se debe pagar pensión de alimentos?",
    ],
    arriendos: [
      "¿Puede el dueño subir el arriendo cuando quiera?",
      "¿Qué hacer si el arrendador no devuelve la garantía?",
      "¿Es legal que me cobren por la renovación del contrato?",
      "¿Quién debe pagar las reparaciones en una propiedad arrendada?",
    ],
    deudas: [
      "¿Cuándo prescribe una deuda en Chile?",
      "¿Pueden embargar mi sueldo por deudas?",
      "¿Qué es el Registro de Deudores de Pensiones?",
      "¿Cómo salir de DICOM o del Boletín Comercial?",
    ],
  }

  return (
    <Card className="shadow-sm">
      <Tabs defaultValue="laboral" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 bg-blue-50">
          <TabsTrigger value="laboral">Laboral</TabsTrigger>
          <TabsTrigger value="pensiones">Pensiones</TabsTrigger>
          <TabsTrigger value="arriendos">Arriendos</TabsTrigger>
          <TabsTrigger value="deudas">Deudas</TabsTrigger>
        </TabsList>
        {Object.entries(questions).map(([category, questionList]) => (
          <TabsContent key={category} value={category}>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {questionList.map((question, index) => (
                  <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <Link
                      href={`/ask?q=${encodeURIComponent(question)}`}
                      className="flex items-center justify-between text-gray-800 hover:text-blue-700 transition-colors"
                    >
                      <span>{question}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <Button asChild variant="outline">
                  <Link href={`/${category === "laboral" ? "dudas-laborales" : "ask"}`}>
                    Ver más consultas sobre {category}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  )
}
