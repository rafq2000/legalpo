"use client"

import { useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Briefcase, Home, Scale, Calculator, FileText } from "lucide-react"
import { useFreeActions } from "@/hooks/use-free-actions"
import { RegisterModal } from "@/components/register-modal"

// Datos de preguntas populares por categoría
const popularQuestions = {
  laboral: [
    { id: 1, question: "¿Cuánto es el finiquito por 5 años de trabajo?", url: "/dudas-laborales" },
    { id: 2, question: "¿Qué hacer si me despiden injustificadamente?", url: "/dudas-laborales" },
    { id: 3, question: "¿Cuántos días de vacaciones me corresponden por año?", url: "/dudas-laborales" },
    { id: 4, question: "¿Cómo calcular horas extras correctamente?", url: "/dudas-laborales" },
  ],
  pensiones: [
    { id: 1, question: "¿Cómo solicitar pensión de alimentos para mis hijos?", url: "/pension-alimentos" },
    { id: 2, question: "¿Qué hacer si el padre no paga la pensión?", url: "/pension-alimentos" },
    { id: 3, question: "¿Cómo modificar el monto de una pensión?", url: "/pension-alimentos" },
    { id: 4, question: "¿Cuánto debería ser la pensión de alimentos?", url: "/pension-alimentos" },
  ],
  arriendos: [
    { id: 1, question: "¿Cómo hacer un contrato de arriendo seguro?", url: "/contratos/arriendo" },
    { id: 2, question: "¿Qué hacer si el arrendatario no paga?", url: "/contratos/arriendo" },
    { id: 3, question: "¿Cuánto puede aumentar el arriendo anualmente?", url: "/contratos/arriendo" },
    { id: 4, question: "¿Cómo recuperar la garantía de arriendo?", url: "/contratos/arriendo" },
  ],
  deudas: [
    { id: 1, question: "¿Qué pasa si no puedo pagar un crédito?", url: "/deudas" },
    { id: 2, question: "¿Cómo salir del Dicom/Boletín Comercial?", url: "/deudas" },
    { id: 3, question: "¿Pueden embargar mi sueldo por deudas?", url: "/deudas" },
    { id: 4, question: "¿Cuándo prescribe una deuda en Chile?", url: "/deudas" },
  ],
}

export function PopularQuestions() {
  const [activeTab, setActiveTab] = useState("laboral")
  const { registerAction, showRegisterModal, closeRegisterModal } = useFreeActions()

  const handleQuestionClick = () => {
    // Registrar acción al hacer clic en una pregunta popular
    registerAction()
  }

  return (
    <>
      <Card className="border-blue-100">
        <CardHeader className="bg-blue-50 border-b border-blue-100">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-lg">Consultas populares</CardTitle>
          </div>
          <CardDescription>Explora las preguntas más frecuentes por categoría</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 bg-blue-50/50 rounded-none border-b">
              <TabsTrigger
                value="laboral"
                className="data-[state=active]:bg-white rounded-none border-b-2 data-[state=active]:border-blue-600"
              >
                <Briefcase className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Laboral</span>
              </TabsTrigger>
              <TabsTrigger
                value="pensiones"
                className="data-[state=active]:bg-white rounded-none border-b-2 data-[state=active]:border-blue-600"
              >
                <Scale className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Pensiones</span>
              </TabsTrigger>
              <TabsTrigger
                value="arriendos"
                className="data-[state=active]:bg-white rounded-none border-b-2 data-[state=active]:border-blue-600"
              >
                <Home className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Arriendos</span>
              </TabsTrigger>
              <TabsTrigger
                value="deudas"
                className="data-[state=active]:bg-white rounded-none border-b-2 data-[state=active]:border-blue-600"
              >
                <Calculator className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Deudas</span>
              </TabsTrigger>
            </TabsList>

            {Object.entries(popularQuestions).map(([category, questions]) => (
              <TabsContent key={category} value={category} className="p-0">
                <ul className="divide-y">
                  {questions.map((q) => (
                    <li key={q.id} className="p-3 hover:bg-gray-50">
                      <Link
                        href={q.url}
                        className="flex items-center justify-between w-full text-left"
                        onClick={handleQuestionClick}
                      >
                        <span className="flex items-start">
                          <FileText className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-blue-600" />
                          <span>{q.question}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="p-3 bg-gray-50 border-t">
                  <Link href={`/${activeTab}`}>
                    <Button variant="link" className="p-0 h-auto text-blue-600">
                      Ver todas las consultas de {activeTab}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <RegisterModal open={showRegisterModal} onClose={closeRegisterModal} />
    </>
  )
}
