"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Share2 } from "lucide-react"

export function FeaturedQuestion() {
  const [helpful, setHelpful] = useState<boolean | null>(null)

  return (
    <Card className="shadow-md">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-xl text-blue-900">Consulta destacada</CardTitle>
        <CardDescription>Un ejemplo de cómo funciona LegalPO</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Pregunta:</h3>
            <p className="text-gray-800">
              ¿Tengo derecho a indemnización si renuncio voluntariamente a mi trabajo después de 5 años?
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Respuesta:</h3>
            <p className="text-gray-800 mb-3">
              En Chile, si renuncias voluntariamente a tu trabajo,{" "}
              <strong>no tienes derecho a indemnización por años de servicio</strong>, independientemente del tiempo que
              hayas trabajado en la empresa.
            </p>
            <p className="text-gray-800 mb-3">
              La indemnización por años de servicio (equivalente a un mes por año trabajado) solo corresponde en estos
              casos:
            </p>
            <ul className="list-disc pl-5 text-gray-800 mb-3 space-y-1">
              <li>Despido por necesidades de la empresa</li>
              <li>Despido por desahucio (en casos específicos)</li>
              <li>Acuerdo mutuo donde se pacte el pago</li>
            </ul>
            <p className="text-gray-800">
              Sin embargo, al renunciar tienes derecho a que te paguen tus vacaciones proporcionales y cualquier
              remuneración pendiente.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between bg-gray-50 border-t">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">¿Te resultó útil esta respuesta?</span>
          <Button
            variant={helpful === true ? "default" : "outline"}
            size="sm"
            onClick={() => setHelpful(true)}
            className={helpful === true ? "bg-green-600 hover:bg-green-700" : ""}
          >
            <ThumbsUp className="h-4 w-4 mr-1" />
            Sí
          </Button>
          <Button
            variant={helpful === false ? "default" : "outline"}
            size="sm"
            onClick={() => setHelpful(false)}
            className={helpful === false ? "bg-red-600 hover:bg-red-700" : ""}
          >
            <ThumbsDown className="h-4 w-4 mr-1" />
            No
          </Button>
        </div>
        <Button variant="ghost" size="sm">
          <Share2 className="h-4 w-4 mr-1" />
          Compartir
        </Button>
      </CardFooter>
    </Card>
  )
}
