"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, Printer, Download, Check, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { SiteFooter } from "@/components/site-footer"
import { TextToSpeech } from "@/components/text-to-speech"

// Definir los pasos del formulario
const STEPS = [
  "Datos del contratante",
  "Datos del prestador",
  "Descripción del servicio",
  "Honorarios",
  "Plazos y condiciones",
  "Términos adicionales",
  "Vista previa",
]

export default function ContratoServiciosPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    // Datos del contratante
    nombreContratante: "",
    rutContratante: "",
    representanteContratante: "",
    rutRepresentanteContratante: "",
    domicilioContratante: "",
    comunaContratante: "",
    ciudadContratante: "",

    // Datos del prestador
    nombrePrestador: "",
    rutPrestador: "",
    profesionPrestador: "",
    domicilioPrestador: "",
    comunaPrestador: "",
    ciudadPrestador: "",

    // Descripción del servicio
    descripcionServicio: "",
    lugarPrestacion: "",

    // Honorarios
    montoHonorarios: "",
    formaPago: "transferencia",
    detallePago: "",
    incluyeImpuestos: "si",

    // Plazos y condiciones
    fechaInicio: "",
    fechaTermino: "",
    plazoEntrega: "",
    entregables: "",

    // Términos adicionales
    confidencialidad: true,
    propiedadIntelectual: true,
    exclusividad: false,
    subcontratacion: false,
    terminosAdicionales: "",
  })

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [contractText, setContractText] = useState("")

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
    const fechaActual = new Date().toLocaleDateString("es-CL")

    const contract = `
CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES

En ${formData.ciudadContratante || "[CIUDAD]"}, a ${fechaActual}, entre:

CONTRATANTE: ${formData.nombreContratante || "[NOMBRE CONTRATANTE]"}, RUT ${formData.rutContratante || "[RUT]"}, ${formData.representanteContratante ? `representada legalmente por don(ña) ${formData.representanteContratante}, RUT ${formData.rutRepresentanteContratante},` : ""} con domicilio en ${formData.domicilioContratante || "[DOMICILIO]"}, comuna de ${formData.comunaContratante || "[COMUNA]"}, ciudad de ${formData.ciudadContratante || "[CIUDAD]"}, en adelante "EL CONTRATANTE"; y

PRESTADOR DE SERVICIOS: ${formData.nombrePrestador || "[NOMBRE PRESTADOR]"}, RUT ${formData.rutPrestador || "[RUT]"}, de profesión ${formData.profesionPrestador || "[PROFESIÓN]"}, con domicilio en ${formData.domicilioPrestador || "[DOMICILIO]"}, comuna de ${formData.comunaPrestador || "[COMUNA]"}, ciudad de ${formData.ciudadPrestador || "[CIUDAD]"}, en adelante "EL PRESTADOR".

Se ha convenido el siguiente contrato de prestación de servicios profesionales:

PRIMERO: OBJETO DEL CONTRATO
El Prestador se obliga a prestar al Contratante los siguientes servicios profesionales:
${formData.descripcionServicio || "[DESCRIPCIÓN DEL SERVICIO]"}

SEGUNDO: LUGAR DE PRESTACIÓN DE SERVICIOS
Los servicios serán prestados en ${formData.lugarPrestacion || "[LUGAR DE PRESTACIÓN]"}, sin perjuicio de que el Prestador pueda desarrollar parte de sus funciones en otros lugares si la naturaleza de los servicios así lo requiere.

TERCERO: PLAZO
${formData.fechaInicio && formData.fechaTermino ? `El presente contrato tendrá vigencia desde el ${formData.fechaInicio} hasta el ${formData.fechaTermino}.` : formData.fechaInicio ? `El presente contrato tendrá vigencia desde el ${formData.fechaInicio}, por un plazo indefinido hasta la conclusión de los servicios contratados.` : "El presente contrato tendrá vigencia desde la fecha de su firma, por un plazo indefinido hasta la conclusión de los servicios contratados."}
${formData.plazoEntrega ? `El plazo de entrega de los servicios será: ${formData.plazoEntrega}.` : ""}

CUARTO: HONORARIOS Y FORMA DE PAGO
El Contratante pagará al Prestador por los servicios la suma de $${formData.montoHonorarios || "[MONTO]"} (pesos chilenos).
La forma de pago será mediante ${formData.formaPago === "transferencia" ? "transferencia bancaria" : formData.formaPago === "cheque" ? "cheque nominativo" : formData.formaPago === "efectivo" ? "dinero en efectivo" : "[FORMA DE PAGO]"}.
${formData.detallePago ? `Detalle del pago: ${formData.detallePago}` : ""}
${formData.incluyeImpuestos === "si" ? "El monto señalado incluye impuestos." : "El monto señalado no incluye impuestos, los cuales serán de cargo del Prestador."}

QUINTO: ENTREGABLES
${formData.entregables ? `El Prestador deberá entregar los siguientes productos o resultados: ${formData.entregables}` : "El Prestador deberá entregar los productos o resultados que se deriven de los servicios contratados en la forma y plazos acordados."}

${
  formData.confidencialidad
    ? `
SEXTO: CONFIDENCIALIDAD
El Prestador se obliga a mantener estricta confidencialidad respecto de toda la información que reciba o llegue a conocer con ocasión del presente contrato, sea que la información se encuentre en medios escritos, digitales o en cualquier otro soporte. Esta obligación se mantendrá vigente incluso después de terminado el contrato por un plazo de 2 años.
`
    : ""
}

${
  formData.propiedadIntelectual
    ? `
SÉPTIMO: PROPIEDAD INTELECTUAL
Todos los derechos de propiedad intelectual que se generen como resultado de la ejecución del presente contrato pertenecerán exclusivamente al Contratante, quien podrá utilizarlos, modificarlos, reproducirlos y distribuirlos sin limitación alguna.
`
    : ""
}

${
  formData.exclusividad
    ? `
OCTAVO: EXCLUSIVIDAD
Durante la vigencia del presente contrato, el Prestador se compromete a no prestar servicios similares a terceros que puedan ser considerados competencia directa del Contratante.
`
    : ""
}

${
  formData.subcontratacion
    ? `
NOVENO: SUBCONTRATACIÓN
El Prestador podrá subcontratar parcialmente los servicios objeto de este contrato, previa autorización escrita del Contratante. En todo caso, el Prestador será el único responsable ante el Contratante por la ejecución de los servicios.
`
    : ""
}

${
  formData.terminosAdicionales
    ? `
DÉCIMO: TÉRMINOS ADICIONALES
${formData.terminosAdicionales}
`
    : ""
}

DÉCIMO${formData.terminosAdicionales ? " PRIMERO" : ""}: EJEMPLARES
El presente contrato se firma en dos ejemplares del mismo tenor y fecha, quedando uno en poder de cada parte.


_______________________                    _______________________
    CONTRATANTE                               PRESTADOR
${formData.nombreContratante || "[NOMBRE]"}                   ${formData.nombrePrestador || "[NOMBRE]"}
RUT: ${formData.rutContratante || "[RUT]"}                 RUT: ${formData.rutPrestador || "[RUT]"}
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
      a.download = `Contrato_Servicios_${new Date().toISOString().split("T")[0]}.txt`
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
            <title>Contrato de Servicios</title>
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
      case 0: // Datos del contratante
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Datos del contratante</h2>
              <p className="text-muted-foreground">Ingresa los datos de quien contrata los servicios</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombreContratante">Nombre o razón social</Label>
                <Input
                  id="nombreContratante"
                  name="nombreContratante"
                  value={formData.nombreContratante}
                  onChange={handleInputChange}
                  placeholder="Ej: Empresa S.A. o Juan Pérez"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rutContratante">RUT</Label>
                <Input
                  id="rutContratante"
                  name="rutContratante"
                  value={formData.rutContratante}
                  onChange={handleInputChange}
                  placeholder="Ej: 76.123.456-7 o 12.345.678-9"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="representanteContratante">Nombre del representante legal (opcional)</Label>
                <Input
                  id="representanteContratante"
                  name="representanteContratante"
                  value={formData.representanteContratante}
                  onChange={handleInputChange}
                  placeholder="Ej: María López Soto"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rutRepresentanteContratante">RUT del representante legal (opcional)</Label>
                <Input
                  id="rutRepresentanteContratante"
                  name="rutRepresentanteContratante"
                  value={formData.rutRepresentanteContratante}
                  onChange={handleInputChange}
                  placeholder="Ej: 12.345.678-9"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="domicilioContratante">Domicilio</Label>
                <Input
                  id="domicilioContratante"
                  name="domicilioContratante"
                  value={formData.domicilioContratante}
                  onChange={handleInputChange}
                  placeholder="Ej: Av. Principal 123, Oficina 456"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comunaContratante">Comuna</Label>
                <Input
                  id="comunaContratante"
                  name="comunaContratante"
                  value={formData.comunaContratante}
                  onChange={handleInputChange}
                  placeholder="Ej: Las Condes"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ciudadContratante">Ciudad</Label>
                <Input
                  id="ciudadContratante"
                  name="ciudadContratante"
                  value={formData.ciudadContratante}
                  onChange={handleInputChange}
                  placeholder="Ej: Santiago"
                />
              </div>
            </div>
          </div>
        )

      case 1: // Datos del prestador
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Datos del prestador de servicios</h2>
              <p className="text-muted-foreground">Ingresa los datos de quien prestará los servicios</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombrePrestador">Nombre completo</Label>
                <Input
                  id="nombrePrestador"
                  name="nombrePrestador"
                  value={formData.nombrePrestador}
                  onChange={handleInputChange}
                  placeholder="Ej: Juan Pérez González"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rutPrestador">RUT</Label>
                <Input
                  id="rutPrestador"
                  name="rutPrestador"
                  value={formData.rutPrestador}
                  onChange={handleInputChange}
                  placeholder="Ej: 12.345.678-9"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profesionPrestador">Profesión u oficio</Label>
                <Input
                  id="profesionPrestador"
                  name="profesionPrestador"
                  value={formData.profesionPrestador}
                  onChange={handleInputChange}
                  placeholder="Ej: Diseñador Gráfico"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="domicilioPrestador">Domicilio</Label>
                <Input
                  id="domicilioPrestador"
                  name="domicilioPrestador"
                  value={formData.domicilioPrestador}
                  onChange={handleInputChange}
                  placeholder="Ej: Calle Los Olmos 123, depto 501"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comunaPrestador">Comuna</Label>
                <Input
                  id="comunaPrestador"
                  name="comunaPrestador"
                  value={formData.comunaPrestador}
                  onChange={handleInputChange}
                  placeholder="Ej: Providencia"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ciudadPrestador">Ciudad</Label>
                <Input
                  id="ciudadPrestador"
                  name="ciudadPrestador"
                  value={formData.ciudadPrestador}
                  onChange={handleInputChange}
                  placeholder="Ej: Santiago"
                />
              </div>
            </div>
          </div>
        )

      case 2: // Descripción del servicio
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Descripción del servicio</h2>
              <p className="text-muted-foreground">Detalla los servicios que se prestarán</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="descripcionServicio">Descripción detallada del servicio</Label>
                <Textarea
                  id="descripcionServicio"
                  name="descripcionServicio"
                  value={formData.descripcionServicio}
                  onChange={handleInputChange}
                  placeholder="Describe en detalle los servicios que se prestarán"
                  className="min-h-[150px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lugarPrestacion">Lugar de prestación del servicio</Label>
                <Input
                  id="lugarPrestacion"
                  name="lugarPrestacion"
                  value={formData.lugarPrestacion}
                  onChange={handleInputChange}
                  placeholder="Ej: Oficinas del contratante, remoto, etc."
                />
              </div>
            </div>
          </div>
        )

      case 3: // Honorarios
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Honorarios</h2>
              <p className="text-muted-foreground">Define los honorarios y forma de pago</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="montoHonorarios">Monto de honorarios (CLP)</Label>
                <Input
                  id="montoHonorarios"
                  name="montoHonorarios"
                  type="number"
                  value={formData.montoHonorarios}
                  onChange={handleInputChange}
                  placeholder="Ej: 500000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="formaPago">Forma de pago</Label>
                <Select value={formData.formaPago} onValueChange={(value) => handleSelectChange("formaPago", value)}>
                  <SelectTrigger id="formaPago">
                    <SelectValue placeholder="Selecciona la forma de pago" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transferencia">Transferencia bancaria</SelectItem>
                    <SelectItem value="cheque">Cheque</SelectItem>
                    <SelectItem value="efectivo">Efectivo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="detallePago">Detalle del pago (opcional)</Label>
                <Textarea
                  id="detallePago"
                  name="detallePago"
                  value={formData.detallePago}
                  onChange={handleInputChange}
                  placeholder="Ej: Pago en 3 cuotas mensuales de igual valor, los días 5 de cada mes"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="incluyeImpuestos">¿El monto incluye impuestos?</Label>
                <Select
                  value={formData.incluyeImpuestos}
                  onValueChange={(value) => handleSelectChange("incluyeImpuestos", value)}
                >
                  <SelectTrigger id="incluyeImpuestos">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="si">Sí, incluye impuestos</SelectItem>
                    <SelectItem value="no">No, no incluye impuestos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 4: // Plazos y condiciones
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Plazos y condiciones</h2>
              <p className="text-muted-foreground">Define los plazos y entregables del servicio</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fechaInicio">Fecha de inicio</Label>
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
                <p className="text-xs text-muted-foreground">
                  Deja en blanco si el contrato es por tiempo indefinido o hasta la conclusión del servicio
                </p>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="plazoEntrega">Plazo de entrega (opcional)</Label>
                <Input
                  id="plazoEntrega"
                  name="plazoEntrega"
                  value={formData.plazoEntrega}
                  onChange={handleInputChange}
                  placeholder="Ej: 30 días desde la firma del contrato"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="entregables">Entregables (opcional)</Label>
                <Textarea
                  id="entregables"
                  name="entregables"
                  value={formData.entregables}
                  onChange={handleInputChange}
                  placeholder="Ej: Informe final, diseños, código fuente, etc."
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
              <p className="text-muted-foreground">Selecciona las cláusulas adicionales que deseas incluir</p>
            </div>

            <div className="space-y-4">
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
                  id="propiedadIntelectual"
                  checked={formData.propiedadIntelectual}
                  onCheckedChange={(checked) => handleCheckboxChange("propiedadIntelectual", checked as boolean)}
                />
                <Label htmlFor="propiedadIntelectual">Incluir cláusula de propiedad intelectual</Label>
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
                  id="subcontratacion"
                  checked={formData.subcontratacion}
                  onCheckedChange={(checked) => handleCheckboxChange("subcontratacion", checked as boolean)}
                />
                <Label htmlFor="subcontratacion">Permitir subcontratación</Label>
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
              <h3 className="text-lg font-medium">Contrato de Servicios Profesionales</h3>
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
            <h1 className="text-3xl font-bold mb-2">Contrato de Servicios Profesionales</h1>
            <p className="text-muted-foreground">
              Completa el formulario paso a paso para generar un contrato de servicios personalizado
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
