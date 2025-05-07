"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { ArrowLeft, FileText, ChevronRight, ChevronLeft, Printer, Download, Check, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { SiteFooter } from "@/components/site-footer"
import { TextToSpeech } from "@/components/text-to-speech"

// Definir los pasos del formulario
const STEPS = [
  "Tipo de contrato",
  "Datos de la parte A",
  "Datos de la parte B",
  "Objeto del contrato",
  "Condiciones",
  "Términos adicionales",
  "Vista previa",
]

export default function ContratoGeneralPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    // Tipo de contrato
    tipoContrato: "servicios",

    // Datos de la parte A
    nombreParteA: "",
    rutParteA: "",
    representanteParteA: "",
    rutRepresentanteA: "",
    domicilioParteA: "",
    comunaParteA: "",
    ciudadParteA: "",

    // Datos de la parte B
    nombreParteB: "",
    rutParteB: "",
    representanteParteB: "",
    rutRepresentanteB: "",
    domicilioParteB: "",
    comunaParteB: "",
    ciudadParteB: "",

    // Objeto del contrato
    objetoContrato: "",

    // Condiciones
    fechaInicio: "",
    fechaTermino: "",
    montoContrato: "",
    formaPago: "unico",
    detallePago: "",

    // Términos adicionales
    obligacionesParteA: "",
    obligacionesParteB: "",
    confidencialidad: false,
    exclusividad: false,
    propiedadIntelectual: false,
    resolucionConflictos: "mediacion",
    terminosAdicionales: "",
  })

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [contractText, setContractText] = useState("")

  // Verificar autenticación
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`)
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
        <p className="text-center">Verificando sesión...</p>
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
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
    let tipoContratoTexto = ""
    switch (formData.tipoContrato) {
      case "servicios":
        tipoContratoTexto = "CONTRATO DE PRESTACIÓN DE SERVICIOS"
        break
      case "compraventa":
        tipoContratoTexto = "CONTRATO DE COMPRAVENTA"
        break
      case "confidencialidad":
        tipoContratoTexto = "ACUERDO DE CONFIDENCIALIDAD"
        break
      case "colaboracion":
        tipoContratoTexto = "ACUERDO DE COLABORACIÓN"
        break
      default:
        tipoContratoTexto = "CONTRATO GENERAL"
    }

    const contract = `
${tipoContratoTexto}

En ${formData.ciudadParteA}, a ${new Date().toLocaleDateString("es-CL")}, entre:

PARTE A: ${formData.nombreParteA}, RUT ${formData.rutParteA}, ${formData.representanteParteA ? `representada legalmente por don(ña) ${formData.representanteParteA}, RUT ${formData.rutRepresentanteA},` : ""} con domicilio en ${formData.domicilioParteA}, comuna de ${formData.comunaParteA}, ciudad de ${formData.ciudadParteA}, en adelante "LA PARTE A"; y

PARTE B: ${formData.nombreParteB}, RUT ${formData.rutParteB}, ${formData.representanteParteB ? `representada legalmente por don(ña) ${formData.representanteParteB}, RUT ${formData.rutRepresentanteB},` : ""} con domicilio en ${formData.domicilioParteB}, comuna de ${formData.comunaParteB}, ciudad de ${formData.ciudadParteB}, en adelante "LA PARTE B".

Se ha convenido el siguiente contrato:

PRIMERO: OBJETO DEL CONTRATO
${formData.objetoContrato}

SEGUNDO: VIGENCIA
El presente contrato tendrá vigencia desde el ${formData.fechaInicio}${formData.fechaTermino ? ` hasta el ${formData.fechaTermino}` : ", por tiempo indefinido"}.

TERCERO: PRECIO Y FORMA DE PAGO
${formData.montoContrato ? `El precio acordado por las partes es de $${formData.montoContrato} (${convertirNumeroALetras(Number.parseInt(formData.montoContrato))} pesos).` : "Las partes acuerdan que este contrato no implica contraprestación económica."}
${formData.detallePago ? `La forma de pago será: ${formData.detallePago}` : ""}

CUARTO: OBLIGACIONES DE LAS PARTES
Obligaciones de la Parte A:
${formData.obligacionesParteA || "No se establecen obligaciones específicas adicionales."}

Obligaciones de la Parte B:
${formData.obligacionesParteB || "No se establecen obligaciones específicas adicionales."}

${
  formData.confidencialidad
    ? `
QUINTO: CONFIDENCIALIDAD
Las partes se obligan a mantener estricta confidencialidad respecto de toda la información que reciban o lleguen a conocer con ocasión del presente contrato, sea que la información se encuentre en medios escritos, digitales o en cualquier otro soporte. Esta obligación se mantendrá vigente incluso después de terminado el contrato por un plazo de 2 años.
`
    : ""
}

${
  formData.exclusividad
    ? `
SEXTO: EXCLUSIVIDAD
Durante la vigencia del presente contrato, las partes se comprometen a no celebrar contratos similares con terceros que puedan afectar el cumplimiento de las obligaciones establecidas en este instrumento.
`
    : ""
}

${
  formData.propiedadIntelectual
    ? `
SÉPTIMO: PROPIEDAD INTELECTUAL
Todos los derechos de propiedad intelectual que se generen como resultado de la ejecución del presente contrato pertenecerán exclusivamente a la Parte A, quien podrá utilizarlos, modificarlos, reproducirlos y distribuirlos sin limitación alguna.
`
    : ""
}

${
  formData.resolucionConflictos === "mediacion"
    ? `
OCTAVO: RESOLUCIÓN DE CONFLICTOS
Cualquier dificultad o controversia que se produzca entre las partes respecto de la aplicación, interpretación, duración, validez o ejecución de este contrato será sometida a mediación, conforme al Reglamento Procesal de Mediación del Centro de Arbitraje y Mediación de Santiago, vigente al momento de solicitarla.
`
    : formData.resolucionConflictos === "arbitraje"
      ? `
OCTAVO: RESOLUCIÓN DE CONFLICTOS
Cualquier dificultad o controversia que se produzca entre las partes respecto de la aplicación, interpretación, duración, validez o ejecución de este contrato será sometida a arbitraje, conforme al Reglamento Procesal de Arbitraje del Centro de Arbitraje y Mediación de Santiago, vigente al momento de solicitarlo.
`
      : `
OCTAVO: RESOLUCIÓN DE CONFLICTOS
Para todos los efectos legales derivados del presente contrato, las partes fijan su domicilio en la ciudad de ${formData.ciudadParteA} y se someten a la jurisdicción de sus Tribunales Ordinarios de Justicia.
`
}

${
  formData.terminosAdicionales
    ? `
NOVENO: TÉRMINOS ADICIONALES
${formData.terminosAdicionales}
`
    : ""
}

DÉCIMO: EJEMPLARES
El presente contrato se firma en dos ejemplares del mismo tenor y fecha, quedando uno en poder de cada parte.


_______________________                    _______________________
   PARTE A                                   PARTE B
${formData.nombreParteA}                   ${formData.nombreParteB}
RUT: ${formData.rutParteA}                 RUT: ${formData.rutParteB}
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
      a.download = `Contrato_${formData.tipoContrato}_${new Date().toISOString().split("T")[0]}.txt`
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
        <title>Contrato General</title>
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
      case 0: // Tipo de contrato
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Tipo de contrato</h2>
              <p className="text-muted-foreground">Selecciona el tipo de contrato que deseas generar</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Tipo de contrato</Label>
                <RadioGroup
                  value={formData.tipoContrato}
                  onValueChange={(value) => handleSelectChange("tipoContrato", value)}
                  className="flex flex-col space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="servicios" id="servicios" />
                    <Label htmlFor="servicios">Contrato de prestación de servicios</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compraventa" id="compraventa" />
                    <Label htmlFor="compraventa">Contrato de compraventa</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="confidencialidad" id="confidencialidad" />
                    <Label htmlFor="confidencialidad">Acuerdo de confidencialidad</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="colaboracion" id="colaboracion" />
                    <Label htmlFor="colaboracion">Acuerdo de colaboración</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="otro" id="otro" />
                    <Label htmlFor="otro">Otro tipo de contrato</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fechaInicio">Fecha de inicio del contrato</Label>
                <Input
                  id="fechaInicio"
                  name="fechaInicio"
                  type="date"
                  value={formData.fechaInicio}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fechaTermino">Fecha de término (opcional)</Label>
                <Input
                  id="fechaTermino"
                  name="fechaTermino"
                  type="date"
                  value={formData.fechaTermino}
                  onChange={handleInputChange}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Deja en blanco si el contrato es por tiempo indefinido
                </p>
              </div>
            </div>
          </div>
        )

      case 1: // Datos de la parte A
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Datos de la parte A</h2>
              <p className="text-muted-foreground">Ingresa los datos de la primera parte del contrato</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombreParteA">Nombre o razón social</Label>
                <Input
                  id="nombreParteA"
                  name="nombreParteA"
                  value={formData.nombreParteA}
                  onChange={handleInputChange}
                  placeholder="Ej: Empresa S.A. o Juan Pérez"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rutParteA">RUT</Label>
                <Input
                  id="rutParteA"
                  name="rutParteA"
                  value={formData.rutParteA}
                  onChange={handleInputChange}
                  placeholder="Ej: 76.123.456-7 o 12.345.678-9"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="representanteParteA">Nombre del representante legal (opcional)</Label>
                <Input
                  id="representanteParteA"
                  name="representanteParteA"
                  value={formData.representanteParteA}
                  onChange={handleInputChange}
                  placeholder="Ej: María López Soto"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rutRepresentanteA">RUT del representante legal (opcional)</Label>
                <Input
                  id="rutRepresentanteA"
                  name="rutRepresentanteA"
                  value={formData.rutRepresentanteA}
                  onChange={handleInputChange}
                  placeholder="Ej: 12.345.678-9"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="domicilioParteA">Domicilio</Label>
                <Input
                  id="domicilioParteA"
                  name="domicilioParteA"
                  value={formData.domicilioParteA}
                  onChange={handleInputChange}
                  placeholder="Ej: Av. Principal 123, Oficina 456"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comunaParteA">Comuna</Label>
                <Input
                  id="comunaParteA"
                  name="comunaParteA"
                  value={formData.comunaParteA}
                  onChange={handleInputChange}
                  placeholder="Ej: Las Condes"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ciudadParteA">Ciudad</Label>
                <Input
                  id="ciudadParteA"
                  name="ciudadParteA"
                  value={formData.ciudadParteA}
                  onChange={handleInputChange}
                  placeholder="Ej: Santiago"
                />
              </div>
            </div>
          </div>
        )

      case 2: // Datos de la parte B
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Datos de la parte B</h2>
              <p className="text-muted-foreground">Ingresa los datos de la segunda parte del contrato</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombreParteB">Nombre o razón social</Label>
                <Input
                  id="nombreParteB"
                  name="nombreParteB"
                  value={formData.nombreParteB}
                  onChange={handleInputChange}
                  placeholder="Ej: Empresa S.A. o Juan Pérez"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rutParteB">RUT</Label>
                <Input
                  id="rutParteB"
                  name="rutParteB"
                  value={formData.rutParteB}
                  onChange={handleInputChange}
                  placeholder="Ej: 76.123.456-7 o 12.345.678-9"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="representanteParteB">Nombre del representante legal (opcional)</Label>
                <Input
                  id="representanteParteB"
                  name="representanteParteB"
                  value={formData.representanteParteB}
                  onChange={handleInputChange}
                  placeholder="Ej: María López Soto"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rutRepresentanteB">RUT del representante legal (opcional)</Label>
                <Input
                  id="rutRepresentanteB"
                  name="rutRepresentanteB"
                  value={formData.rutRepresentanteB}
                  onChange={handleInputChange}
                  placeholder="Ej: 12.345.678-9"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="domicilioParteB">Domicilio</Label>
                <Input
                  id="domicilioParteB"
                  name="domicilioParteB"
                  value={formData.domicilioParteB}
                  onChange={handleInputChange}
                  placeholder="Ej: Av. Principal 123, Oficina 456"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comunaParteB">Comuna</Label>
                <Input
                  id="comunaParteB"
                  name="comunaParteB"
                  value={formData.comunaParteB}
                  onChange={handleInputChange}
                  placeholder="Ej: Las Condes"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ciudadParteB">Ciudad</Label>
                <Input
                  id="ciudadParteB"
                  name="ciudadParteB"
                  value={formData.ciudadParteB}
                  onChange={handleInputChange}
                  placeholder="Ej: Santiago"
                />
              </div>
            </div>
          </div>
        )

      case 3: // Objeto del contrato
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Objeto del contrato</h2>
              <p className="text-muted-foreground">Define el propósito y alcance del contrato</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="objetoContrato">Objeto del contrato</Label>
                <Textarea
                  id="objetoContrato"
                  name="objetoContrato"
                  value={formData.objetoContrato}
                  onChange={handleInputChange}
                  placeholder="Describe el propósito, alcance y objeto del contrato"
                  className="min-h-[200px]"
                />
              </div>
            </div>
          </div>
        )

      case 4: // Condiciones
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Condiciones económicas</h2>
              <p className="text-muted-foreground">Define el precio y forma de pago del contrato</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="montoContrato">Monto del contrato ($)</Label>
                <Input
                  id="montoContrato"
                  name="montoContrato"
                  value={formData.montoContrato}
                  onChange={handleInputChange}
                  placeholder="Ej: 1000000"
                  type="number"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Deja en blanco si el contrato no tiene contraprestación económica
                </p>
              </div>

              <div className="space-y-2">
                <Label>Forma de pago</Label>
                <RadioGroup
                  value={formData.formaPago}
                  onValueChange={(value) => handleSelectChange("formaPago", value)}
                  className="flex flex-col space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="unico" id="unico" />
                    <Label htmlFor="unico">Pago único</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="parcialidades" id="parcialidades" />
                    <Label htmlFor="parcialidades">Pago en parcialidades</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mensual" id="mensual" />
                    <Label htmlFor="mensual">Pago mensual</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="detallePago">Detalle de la forma de pago</Label>
                <Textarea
                  id="detallePago"
                  name="detallePago"
                  value={formData.detallePago}
                  onChange={handleInputChange}
                  placeholder="Ej: El pago se realizará mediante transferencia bancaria a la cuenta corriente N° 12345678 del Banco Estado, a nombre de [Nombre], RUT [RUT], dentro de los primeros 5 días de cada mes."
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </div>
        )

      case 5: // Términos adicionales
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Términos adicionales</h2>
              <p className="text-muted-foreground">Define obligaciones y términos específicos del contrato</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="obligacionesParteA">Obligaciones de la parte A</Label>
                <Textarea
                  id="obligacionesParteA"
                  name="obligacionesParteA"
                  value={formData.obligacionesParteA}
                  onChange={handleInputChange}
                  placeholder="Describe las obligaciones específicas de la parte A"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="obligacionesParteB">Obligaciones de la parte B</Label>
                <Textarea
                  id="obligacionesParteB"
                  name="obligacionesParteB"
                  value={formData.obligacionesParteB}
                  onChange={handleInputChange}
                  placeholder="Describe las obligaciones específicas de la parte B"
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="confidencialidad"
                  checked={formData.confidencialidad}
                  onCheckedChange={(checked) => handleCheckboxChange("confidencialidad", checked as boolean)}
                />
                <Label htmlFor="confidencialidad">Incluir cláusula de confidencialidad</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="exclusividad"
                  checked={formData.exclusividad}
                  onCheckedChange={(checked) => handleCheckboxChange("exclusividad", checked as boolean)}
                />
                <Label htmlFor="exclusividad">Incluir cláusula de exclusividad</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="propiedadIntelectual"
                  checked={formData.propiedadIntelectual}
                  onCheckedChange={(checked) => handleCheckboxChange("propiedadIntelectual", checked as boolean)}
                />
                <Label htmlFor="propiedadIntelectual">Incluir cláusula de propiedad intelectual</Label>
              </div>

              <div className="space-y-2">
                <Label>Resolución de conflictos</Label>
                <RadioGroup
                  value={formData.resolucionConflictos}
                  onValueChange={(value) => handleSelectChange("resolucionConflictos", value)}
                  className="flex flex-col space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mediacion" id="mediacion" />
                    <Label htmlFor="mediacion">Mediación</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="arbitraje" id="arbitraje" />
                    <Label htmlFor="arbitraje">Arbitraje</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tribunales" id="tribunales" />
                    <Label htmlFor="tribunales">Tribunales ordinarios de justicia</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="terminosAdicionales">Términos adicionales (opcional)</Label>
                <Textarea
                  id="terminosAdicionales"
                  name="terminosAdicionales"
                  value={formData.terminosAdicionales}
                  onChange={handleInputChange}
                  placeholder="Ingresa cualquier término adicional que quieras incluir en el contrato"
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </div>
        )

      case 6: // Vista previa
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Vista previa del contrato</h2>
              <p className="text-muted-foreground">Revisa el contrato generado y descárgalo cuando estés conforme</p>
            </div>

            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Contrato General</h3>
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
            <Link href="/contratos" className="mr-6 flex items-center space-x-2">
              <FileText className="h-6 w-6 text-primary" />
              <span className="font-bold">Generador de Contratos</span>
            </Link>
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <Link href="/contratos">
                <ArrowLeft className="h-4 w-4" />
                Volver a contratos
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Contrato General</h1>
            <p className="text-muted-foreground">
              Completa el formulario paso a paso para generar un contrato personalizado
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
            <CardFooter className="flex justify-between border-t p-6">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Anterior
              </Button>

              {currentStep < STEPS.length - 2 ? (
                <Button onClick={nextStep}>
                  Siguiente
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : currentStep === STEPS.length - 2 ? (
                <Button onClick={generateContract}>
                  Generar contrato
                  <Check className="ml-2 h-4 w-4" />
                </Button>
              ) : null}
            </CardFooter>
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

// Función auxiliar para convertir números a letras (versión simplificada)
function convertirNumeroALetras(numero: number): string {
  const unidades = ["", "un", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"]
  const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"]
  const centenas = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ]

  if (numero === 0) return "cero"
  if (numero < 10) return unidades[numero]
  if (numero < 100) {
    const unidad = numero % 10
    const decena = Math.floor(numero / 10)
    return unidad === 0 ? decenas[decena] : `${decenas[decena]} y ${unidades[unidad]}`
  }
  if (numero < 1000) {
    const centena = Math.floor(numero / 100)
    const resto = numero % 100
    return resto === 0 ? centenas[centena] : `${centenas[centena]} ${convertirNumeroALetras(resto)}`
  }
  if (numero < 1000000) {
    const miles = Math.floor(numero / 1000)
    const resto = numero % 1000
    return resto === 0
      ? `${miles === 1 ? "mil" : `${convertirNumeroALetras(miles)} mil`}`
      : `${miles === 1 ? "mil" : `${convertirNumeroALetras(miles)} mil`} ${convertirNumeroALetras(resto)}`
  }

  return "n\u00famero fuera de rango"
}
