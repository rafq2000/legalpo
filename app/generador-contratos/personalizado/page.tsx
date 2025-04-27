"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft, Printer, Download, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SiteFooter } from "@/components/site-footer"
import { TextToSpeech } from "@/components/text-to-speech"

// Definir los pasos del formulario
const STEPS = [
  "Información general",
  "Partes involucradas",
  "Cláusulas principales",
  "Cláusulas adicionales",
  "Vista previa",
]

export default function ContratoPersonalizadoPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    // Información general
    tituloContrato: "",
    fechaContrato: "",
    lugarContrato: "",

    // Partes involucradas
    nombreParte1: "",
    rutParte1: "",
    domicilioParte1: "",
    nombreParte2: "",
    rutParte2: "",
    domicilioParte2: "",

    // Cláusulas principales
    objetoContrato: "",
    duracionContrato: "",
    obligacionesParte1: "",
    obligacionesParte2: "",

    // Cláusulas adicionales
    clausulasAdicionales: "",
    terminacionContrato: "",
    leyAplicable: "chilena",
    resolucionConflictos: "",
  })

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [contractText, setContractText] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const generateContract = () => {
    // Generar el texto del contrato basado en los datos del formulario
    const fechaActual = formData.fechaContrato || new Date().toLocaleDateString("es-CL")

    const contract = `
${formData.tituloContrato || "CONTRATO"}

En ${formData.lugarContrato || "[LUGAR]"}, a ${fechaActual}, entre:

${formData.nombreParte1 || "[NOMBRE PARTE 1]"}, RUT ${formData.rutParte1 || "[RUT]"}, con domicilio en ${formData.domicilioParte1 || "[DOMICILIO]"}, en adelante "PRIMERA PARTE"; y

${formData.nombreParte2 || "[NOMBRE PARTE 2]"}, RUT ${formData.rutParte2 || "[RUT]"}, con domicilio en ${formData.domicilioParte2 || "[DOMICILIO]"}, en adelante "SEGUNDA PARTE".

Se ha convenido el siguiente contrato:

PRIMERO: OBJETO DEL CONTRATO
${formData.objetoContrato || "[OBJETO DEL CONTRATO]"}

SEGUNDO: DURACIÓN
${formData.duracionContrato || "[DURACIÓN DEL CONTRATO]"}

TERCERO: OBLIGACIONES DE LA PRIMERA PARTE
${formData.obligacionesParte1 || "[OBLIGACIONES DE LA PRIMERA PARTE]"}

CUARTO: OBLIGACIONES DE LA SEGUNDA PARTE
${formData.obligacionesParte2 || "[OBLIGACIONES DE LA SEGUNDA PARTE]"}

${
  formData.clausulasAdicionales
    ? `
QUINTO: CLÁUSULAS ADICIONALES
${formData.clausulasAdicionales}
`
    : ""
}

${
  formData.terminacionContrato
    ? `
${formData.clausulasAdicionales ? "SEXTO" : "QUINTO"}: TERMINACIÓN DEL CONTRATO
${formData.terminacionContrato}
`
    : ""
}

${
  formData.resolucionConflictos
    ? `
${formData.clausulasAdicionales && formData.terminacionContrato ? "SÉPTIMO" : formData.clausulasAdicionales || formData.terminacionContrato ? "SEXTO" : "QUINTO"}: RESOLUCIÓN DE CONFLICTOS
${formData.resolucionConflictos}
`
    : ""
}

${
  formData.clausulasAdicionales || formData.terminacionContrato || formData.resolucionConflictos
    ? formData.clausulasAdicionales && formData.terminacionContrato && formData.resolucionConflictos
      ? "OCTAVO"
      : (formData.clausulasAdicionales && formData.terminacionContrato) ||
          (formData.clausulasAdicionales && formData.resolucionConflictos) ||
          (formData.terminacionContrato && formData.resolucionConflictos)
        ? "SÉPTIMO"
        : "SEXTO"
    : "QUINTO"
}: LEY APLICABLE
El presente contrato se rige por la legislación ${formData.leyAplicable || "chilena"}.

${
  formData.clausulasAdicionales || formData.terminacionContrato || formData.resolucionConflictos
    ? formData.clausulasAdicionales && formData.terminacionContrato && formData.resolucionConflictos
      ? "NOVENO"
      : (formData.clausulasAdicionales && formData.terminacionContrato) ||
          (formData.clausulasAdicionales && formData.resolucionConflictos) ||
          (formData.terminacionContrato && formData.resolucionConflictos)
        ? "OCTAVO"
        : "SÉPTIMO"
    : "SEXTO"
}: EJEMPLARES
El presente contrato se firma en dos ejemplares del mismo tenor y fecha, quedando uno en poder de cada parte.


_______________________                    _______________________
    PRIMERA PARTE                             SEGUNDA PARTE
${formData.nombreParte1 || "[NOMBRE]"}                   ${formData.nombreParte2 || "[NOMBRE]"}
RUT: ${formData.rutParte1 || "[RUT]"}                 RUT: ${formData.rutParte2 || "[RUT]"}
`

    setContractText(contract)
    nextStep()
  }

  const handleDownloadPDF = () => {
    setIsGeneratingPDF(true)

    // Simulación de generación de PDF
    setTimeout(() => {
      // En una implementación real, aquí se generaría el PDF
      const blob = new Blob([contractText], { type: "text/plain" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `Contrato_Personalizado_${new Date().toISOString().split("T")[0]}.txt`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      setIsGeneratingPDF(false)
    }, 2000)
  }

  const handlePrint = () => {
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Contrato Personalizado</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
              h1 { text-align: center; }
              pre { white-space: pre-wrap; font-family: inherit; }
            </style>
          </head>
          <body>
            <pre>${contractText}</pre>
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    }
  }

  // Renderizar el paso actual del formulario
  const renderStep = () => {
    switch (currentStep) {
      case 0: // Información general
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Información general del contrato</h2>
              <p className="text-muted-foreground">Ingresa la información básica del contrato</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tituloContrato">Título del contrato</Label>
                <Input
                  id="tituloContrato"
                  name="tituloContrato"
                  value={formData.tituloContrato}
                  onChange={handleInputChange}
                  placeholder="Ej: CONTRATO DE COMPRAVENTA"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fechaContrato">Fecha del contrato</Label>
                <Input
                  id="fechaContrato"
                  name="fechaContrato"
                  type="date"
                  value={formData.fechaContrato}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lugarContrato">Lugar del contrato</Label>
                <Input
                  id="lugarContrato"
                  name="lugarContrato"
                  value={formData.lugarContrato}
                  onChange={handleInputChange}
                  placeholder="Ej: Santiago"
                />
              </div>
            </div>
          </div>
        )

      case 1: // Partes involucradas
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Partes involucradas</h2>
              <p className="text-muted-foreground">Ingresa los datos de las partes que firmarán el contrato</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Primera parte</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombreParte1">Nombre o razón social</Label>
                    <Input
                      id="nombreParte1"
                      name="nombreParte1"
                      value={formData.nombreParte1}
                      onChange={handleInputChange}
                      placeholder="Ej: Empresa S.A. o Juan Pérez"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rutParte1">RUT</Label>
                    <Input
                      id="rutParte1"
                      name="rutParte1"
                      value={formData.rutParte1}
                      onChange={handleInputChange}
                      placeholder="Ej: 76.123.456-7 o 12.345.678-9"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="domicilioParte1">Domicilio</Label>
                    <Input
                      id="domicilioParte1"
                      name="domicilioParte1"
                      value={formData.domicilioParte1}
                      onChange={handleInputChange}
                      placeholder="Ej: Av. Principal 123, Oficina 456, Santiago"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Segunda parte</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombreParte2">Nombre o razón social</Label>
                    <Input
                      id="nombreParte2"
                      name="nombreParte2"
                      value={formData.nombreParte2}
                      onChange={handleInputChange}
                      placeholder="Ej: Empresa S.A. o Juan Pérez"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rutParte2">RUT</Label>
                    <Input
                      id="rutParte2"
                      name="rutParte2"
                      value={formData.rutParte2}
                      onChange={handleInputChange}
                      placeholder="Ej: 76.123.456-7 o 12.345.678-9"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="domicilioParte2">Domicilio</Label>
                    <Input
                      id="domicilioParte2"
                      name="domicilioParte2"
                      value={formData.domicilioParte2}
                      onChange={handleInputChange}
                      placeholder="Ej: Av. Principal 123, Oficina 456, Santiago"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 2: // Cláusulas principales
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Cláusulas principales</h2>
              <p className="text-muted-foreground">Define las cláusulas principales del contrato</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="objetoContrato">Objeto del contrato</Label>
                <Textarea
                  id="objetoContrato"
                  name="objetoContrato"
                  value={formData.objetoContrato}
                  onChange={handleInputChange}
                  placeholder="Describe el propósito y alcance del contrato"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duracionContrato">Duración del contrato</Label>
                <Textarea
                  id="duracionContrato"
                  name="duracionContrato"
                  value={formData.duracionContrato}
                  onChange={handleInputChange}
                  placeholder="Ej: El presente contrato tendrá una duración de 12 meses a contar de la fecha de su firma"
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="obligacionesParte1">Obligaciones de la primera parte</Label>
                <Textarea
                  id="obligacionesParte1"
                  name="obligacionesParte1"
                  value={formData.obligacionesParte1}
                  onChange={handleInputChange}
                  placeholder="Describe las obligaciones de la primera parte"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="obligacionesParte2">Obligaciones de la segunda parte</Label>
                <Textarea
                  id="obligacionesParte2"
                  name="obligacionesParte2"
                  value={formData.obligacionesParte2}
                  onChange={handleInputChange}
                  placeholder="Describe las obligaciones de la segunda parte"
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </div>
        )

      case 3: // Cláusulas adicionales
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Cláusulas adicionales</h2>
              <p className="text-muted-foreground">Agrega cláusulas adicionales al contrato (opcional)</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="clausulasAdicionales">Cláusulas adicionales</Label>
                <Textarea
                  id="clausulasAdicionales"
                  name="clausulasAdicionales"
                  value={formData.clausulasAdicionales}
                  onChange={handleInputChange}
                  placeholder="Ej: Cláusulas de confidencialidad, exclusividad, propiedad intelectual, etc."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="terminacionContrato">Terminación del contrato</Label>
                <Textarea
                  id="terminacionContrato"
                  name="terminacionContrato"
                  value={formData.terminacionContrato}
                  onChange={handleInputChange}
                  placeholder="Ej: Causales de término anticipado, procedimiento de término, etc."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="resolucionConflictos">Resolución de conflictos</Label>
                <Textarea
                  id="resolucionConflictos"
                  name="resolucionConflictos"
                  value={formData.resolucionConflictos}
                  onChange={handleInputChange}
                  placeholder="Ej: Cualquier dificultad o controversia que se produzca entre las partes será resuelta por un árbitro arbitrador..."
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </div>
        )

      case 4: // Vista previa
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Vista previa del contrato</h2>
              <p className="text-muted-foreground">Revisa el contrato generado y descárgalo cuando estés conforme</p>
            </div>

            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{formData.tituloContrato || "Contrato Personalizado"}</h3>
              <TextToSpeech text={contractText} label="Leer contrato" />
            </div>

            <div className="border rounded-lg p-4 bg-muted/30 overflow-auto max-h-[500px]">
              <pre className="whitespace-pre-wrap font-sans text-sm">{contractText}</pre>
            </div>

            <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
              <Button variant="outline" onClick={prevStep}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Volver y editar
              </Button>

              <Button variant="outline" onClick={handlePrint}>
                <Printer className="mr-2 h-4 w-4" />
                Imprimir
              </Button>

              <Button onClick={handleDownloadPDF} disabled={isGeneratingPDF}>
                {isGeneratingPDF ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generando...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Descargar contrato
                  </>
                )}
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/generador-contratos" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Generador de Contratos</span>
            </Link>
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <Link href="/generador-contratos">
                <ChevronLeft className="h-4 w-4" />
                Volver a contratos
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Contrato Personalizado</h1>
            <p className="text-muted-foreground">
              Crea un contrato personalizado adaptado a tus necesidades específicas
            </p>
          </div>

          {/* Indicador de progreso */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {STEPS.map((step, index) => (
                <div
                  key={index}
                  className={`text-xs sm:text-sm font-medium ${
                    index <= currentStep ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              {STEPS.map((step, index) => (
                <div
                  key={index}
                  className={`text-xs hidden sm:block ${
                    index <= currentStep ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="text-center mt-2 sm:hidden">
              <span className="text-primary font-medium">
                {STEPS[currentStep]} ({currentStep + 1}/{STEPS.length})
              </span>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">{renderStep()}</CardContent>
            <CardFooter className="flex justify-between border-t p-6" />
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
