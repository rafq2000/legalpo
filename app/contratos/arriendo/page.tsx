"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { ChevronRight, ChevronLeft, Printer, Download, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TextToSpeech } from "@/components/text-to-speech"

// Función para convertir números a palabras en español
function numeroALetras(numero: number): string {
  const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"]
  const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"]
  const especiales = [
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
  ]

  if (numero === 0) return "cero"
  if (numero < 10) return unidades[numero]
  if (numero < 20) return especiales[numero - 10]
  if (numero < 100) {
    const unidad = numero % 10
    const decena = Math.floor(numero / 10)
    return unidad === 0 ? decenas[decena] : `${decenas[decena]} y ${unidades[unidad]}`
  }

  // Para números mayores, se podría expandir la función
  return numero.toString()
}

// Definir los pasos del formulario
const STEPS = [
  "Tipo de arriendo",
  "Datos del arrendador",
  "Datos del arrendatario",
  "Propiedad",
  "Condiciones",
  "Términos adicionales",
  "Vista previa",
]

export default function ContratoArriendoPage() {
  const [sessionData, setSessionData] = useState(null)
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    // Tipo de arriendo
    tipoArriendo: "habitacional",

    // Datos del arrendador
    nombreArrendador: "",
    rutArrendador: "",
    representanteArrendador: "",
    rutRepresentanteArrendador: "",
    domicilioArrendador: "",
    comunaArrendador: "",
    ciudadArrendador: "",

    // Datos del arrendatario
    nombreArrendatario: "",
    rutArrendatario: "",
    representanteArrendatario: "",
    rutRepresentanteArrendatario: "",
    domicilioArrendatario: "",
    comunaArrendatario: "",
    ciudadArrendatario: "",

    // Propiedad
    direccionPropiedad: "",
    comunaPropiedad: "",
    ciudadPropiedad: "",
    tipoPropiedad: "casa",
    descripcionPropiedad: "",
    rolPropiedad: "",
    amobladoPropiedad: false,
    inventarioPropiedad: "",

    // Condiciones
    fechaInicio: "",
    plazoContrato: "indefinido",
    fechaTermino: "",
    renovacionAutomatica: true,
    rentaMensual: "",
    formaPago: "transferencia",
    detallePago: "",
    garantia: "",
    montoGarantia: "",

    // Términos adicionales
    gastosComunesIncluidos: false,
    serviciosBasicosIncluidos: false,
    permiteSubarriendo: false,
    permiteMascotas: false,
    prohibiciones: "",
    terminosAdicionales: "",
  })

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [contractText, setContractText] = useState("")
  const [isClient, setIsClient] = useState(false)

  const session = useSession()

  useEffect(() => {
    if (session.status === "authenticated") {
      setSessionData(session.data)
    }
  }, [session.status, session.data])

  // Verificar si estamos en el cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Verificar autenticación
  useEffect(() => {
    if (isClient && session.status !== "loading") {
      if (session.status === "unauthenticated") {
        router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`)
      }
    }
  }, [session?.status, router, isClient])

  // Si no estamos en el cliente o la sesión está cargando, mostrar un estado de carga
  if (!isClient || (isClient && session?.status === "loading")) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
        <p className="text-center">Verificando sesión...</p>
      </div>
    )
  }

  // Si no hay sesión, no renderizar nada
  if (!sessionData && isClient) {
    return null
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name, checked) => {
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
    const tipoArriendoTexto = formData.tipoArriendo === "habitacional" ? "HABITACIONAL" : "COMERCIAL"

    const contract = `
CONTRATO DE ARRENDAMIENTO ${tipoArriendoTexto}

En ${formData.ciudadArrendador}, a ${new Date().toLocaleDateString("es-CL")}, entre:

ARRENDADOR: ${formData.nombreArrendador}, RUT ${formData.rutArrendador}, ${
      formData.representanteArrendador
        ? `representada legalmente por don(ña) ${formData.representanteArrendador}, RUT ${formData.rutRepresentanteArrendador},`
        : ""
    } con domicilio en ${formData.domicilioArrendador}, comuna de ${formData.comunaArrendador}, ciudad de ${
      formData.ciudadArrendador
    }, en adelante "EL ARRENDADOR"; y

ARRENDATARIO: ${formData.nombreArrendatario}, RUT ${formData.rutArrendatario}, ${
      formData.representanteArrendatario
        ? `representada legalmente por don(ña) ${formData.representanteArrendatario}, RUT ${formData.rutRepresentanteArrendatario},`
        : ""
    } con domicilio en ${formData.domicilioArrendatario}, comuna de ${formData.comunaArrendatario}, ciudad de ${
      formData.ciudadArrendatario
    }, en adelante "EL ARRENDATARIO".

Se ha convenido el siguiente contrato de arrendamiento:

PRIMERO: OBJETO DEL CONTRATO
El Arrendador da en arrendamiento al Arrendatario, quien acepta para sí, la propiedad ubicada en ${
      formData.direccionPropiedad
    }, comuna de ${formData.comunaPropiedad}, ciudad de ${formData.ciudadPropiedad}, consistente en ${
      formData.tipoPropiedad === "casa"
        ? "una casa habitación"
        : formData.tipoPropiedad === "departamento"
          ? "un departamento"
          : formData.tipoPropiedad === "oficina"
            ? "una oficina"
            : formData.tipoPropiedad === "local"
              ? "un local comercial"
              : "una propiedad"
    }${formData.rolPropiedad ? `, Rol de Avalúo N° ${formData.rolPropiedad}` : ""}.

${formData.descripcionPropiedad ? `Descripción de la propiedad: ${formData.descripcionPropiedad}` : ""}

${
  formData.amobladoPropiedad
    ? `La propiedad se entrega amoblada, según inventario que se adjunta y forma parte integrante de este contrato: ${formData.inventarioPropiedad}`
    : "La propiedad se entrega sin amoblar."
}

SEGUNDO: VIGENCIA
El presente contrato tendrá vigencia desde el ${formData.fechaInicio}${
      formData.plazoContrato === "indefinido"
        ? ", por tiempo indefinido"
        : formData.plazoContrato === "fijo" && formData.fechaTermino
          ? ` hasta el ${formData.fechaTermino}`
          : ""
    }.

${
  formData.renovacionAutomatica && formData.plazoContrato === "fijo"
    ? "El contrato se renovará automáticamente por períodos iguales y sucesivos de un año cada uno, a menos que alguna de las partes manifieste a la otra su intención de no renovarlo, mediante carta certificada dirigida al domicilio de la otra parte con, a lo menos, 30 días de anticipación al vencimiento del período que estuviere en curso."
    : ""
}

TERCERO: RENTA DE ARRENDAMIENTO
La renta mensual de arrendamiento será la suma de $${formData.rentaMensual} (${numeroALetras(
      Number.parseInt(formData.rentaMensual) || 0,
    )} pesos), que el Arrendatario pagará por mes anticipado, dentro de los primeros ${
      formData.tipoArriendo === "habitacional" ? "5" : "10"
    } días de cada mes.

La forma de pago será mediante ${
      formData.formaPago === "transferencia"
        ? "transferencia bancaria"
        : formData.formaPago === "efectivo"
          ? "efectivo"
          : formData.formaPago === "cheque"
            ? "cheque"
            : "el medio acordado por las partes"
    }${formData.detallePago ? `, ${formData.detallePago}` : ""}.

${
  formData.garantia
    ? `CUARTO: GARANTÍA
Como garantía de la conservación de la propiedad y del pago de los perjuicios que se causen a ella, de las cuentas por servicios, reparaciones o cualquier otra obligación derivada de este contrato, el Arrendatario entrega en este acto al Arrendador la suma de $${formData.montoGarantia} (${numeroALetras(
        Number.parseInt(formData.montoGarantia) || 0,
      )} pesos), mediante ${formData.garantia}.

Esta garantía será devuelta al Arrendatario al término del contrato, una vez que éste haya cumplido con todas sus obligaciones y restituido la propiedad en el mismo estado en que la recibió, habida consideración del desgaste producido por el tiempo y uso legítimo.`
    : ""
}

${formData.garantia ? "QUINTO: OBLIGACIONES DEL ARRENDATARIO" : "CUARTO: OBLIGACIONES DEL ARRENDATARIO"}
El Arrendatario se obliga a:
1. Mantener la propiedad arrendada en perfecto estado de conservación y aseo.
2. Pagar oportunamente la renta de arrendamiento.
${
  !formData.gastosComunesIncluidos && formData.tipoPropiedad === "departamento"
    ? "3. Pagar los gastos comunes del inmueble."
    : ""
}
${
  !formData.serviciosBasicosIncluidos
    ? `${
        !formData.gastosComunesIncluidos && formData.tipoPropiedad === "departamento" ? "4" : "3"
      }. Pagar los consumos de agua, electricidad, gas y otros servicios con que cuente la propiedad.`
    : ""
}
${
  formData.tipoArriendo === "comercial"
    ? `${
        !formData.gastosComunesIncluidos && formData.tipoPropiedad === "departamento"
          ? !formData.serviciosBasicosIncluidos
            ? "5"
            : "4"
          : !formData.serviciosBasicosIncluidos
            ? "4"
            : "3"
      }. Obtener y mantener vigentes todas las patentes, permisos y autorizaciones que requiera para el desarrollo de su actividad comercial.`
    : ""
}

${
  formData.prohibiciones
    ? `${formData.garantia ? "SEXTO: PROHIBICIONES" : "QUINTO: PROHIBICIONES"}
${formData.prohibiciones}`
    : ""
}

${
  !formData.permiteSubarriendo
    ? `${
        formData.garantia ? (formData.prohibiciones ? "SÉPTIMO" : "SEXTO") : formData.prohibiciones ? "SEXTO" : "QUINTO"
      }: PROHIBICIÓN DE SUBARRENDAR
El Arrendatario no podrá subarrendar o ceder a cualquier título el presente contrato, sin autorización previa y por escrito del Arrendador.`
    : ""
}

${
  !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
    ? `${
        formData.garantia
          ? formData.prohibiciones
            ? !formData.permiteSubarriendo
              ? "OCTAVO"
              : "SÉPTIMO"
            : !formData.permiteSubarriendo
              ? "SÉPTIMO"
              : "SEXTO"
          : formData.prohibiciones
            ? !formData.permiteSubarriendo
              ? "SÉPTIMO"
              : "SEXTO"
            : !formData.permiteSubarriendo
              ? "SEXTO"
              : "QUINTO"
      }: PROHIBICIÓN DE MASCOTAS
El Arrendatario no podrá tener mascotas de ningún tipo en la propiedad arrendada.`
    : ""
}

${
  formData.terminosAdicionales
    ? `${
        formData.garantia
          ? formData.prohibiciones
            ? !formData.permiteSubarriendo
              ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
                ? "NOVENO"
                : "OCTAVO"
              : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
                ? "OCTAVO"
                : "SÉPTIMO"
            : !formData.permiteSubarriendo
              ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
                ? "OCTAVO"
                : "SÉPTIMO"
              : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
                ? "SÉPTIMO"
                : "SEXTO"
          : formData.prohibiciones
            ? !formData.permiteSubarriendo
              ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
                ? "OCTAVO"
                : "SÉPTIMO"
              : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
                ? "SÉPTIMO"
                : "SEXTO"
            : !formData.permiteSubarriendo
              ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
                ? "SÉPTIMO"
                : "SEXTO"
              : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
                ? "SEXTO"
                : "QUINTO"
      }: TÉRMINOS ADICIONALES
${formData.terminosAdicionales}`
    : ""
}

${
  formData.garantia
    ? formData.prohibiciones
      ? !formData.permiteSubarriendo
        ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "DÉCIMO"
            : "NOVENO"
          : formData.terminosAdicionales
            ? "NOVENO"
            : "OCTAVO"
        : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "NOVENO"
            : "OCTAVO"
          : formData.terminosAdicionales
            ? "OCTAVO"
            : "SÉPTIMO"
      : !formData.permiteSubarriendo
        ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "NOVENO"
            : "OCTAVO"
          : formData.terminosAdicionales
            ? "OCTAVO"
            : "SÉPTIMO"
        : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "OCTAVO"
            : "SÉPTIMO"
          : formData.terminosAdicionales
            ? "SÉPTIMO"
            : "SEXTO"
    : formData.prohibiciones
      ? !formData.permiteSubarriendo
        ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "DÉCIMO"
            : "NOVENO"
          : formData.terminosAdicionales
            ? "NOVENO"
            : "OCTAVO"
        : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "NOVENO"
            : "OCTAVO"
          : formData.terminosAdicionales
            ? "OCTAVO"
            : "SÉPTIMO"
      : !formData.permiteSubarriendo
        ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "OCTAVO"
            : "SÉPTIMO"
          : formData.terminosAdicionales
            ? "SÉPTIMO"
            : "SEXTO"
        : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "SÉPTIMO"
            : "SEXTO"
          : formData.terminosAdicionales
            ? "SEXTO"
            : "QUINTO"
}: TÉRMINO DEL CONTRATO
El presente contrato terminará:
1. Por mutuo acuerdo de las partes.
2. Por expiración del plazo fijado, en caso de contratos de plazo fijo sin renovación automática.
3. Por incumplimiento de cualquiera de las obligaciones establecidas en este contrato.
4. Por las causales establecidas en la ley.

${
  formData.garantia
    ? formData.prohibiciones
      ? !formData.permiteSubarriendo
        ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "UNDÉCIMO"
            : "DÉCIMO"
          : formData.terminosAdicionales
            ? "DÉCIMO"
            : "NOVENO"
        : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "DÉCIMO"
            : "NOVENO"
          : formData.terminosAdicionales
            ? "NOVENO"
            : "OCTAVO"
      : !formData.permiteSubarriendo
        ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "DÉCIMO"
            : "NOVENO"
          : formData.terminosAdicionales
            ? "NOVENO"
            : "OCTAVO"
        : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "OCTAVO"
            : "SÉPTIMO"
          : formData.terminosAdicionales
            ? "SÉPTIMO"
            : "SEXTO"
    : formData.prohibiciones
      ? !formData.permiteSubarriendo
        ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "UNDÉCIMO"
            : "DÉCIMO"
          : formData.terminosAdicionales
            ? "DÉCIMO"
            : "NOVENO"
        : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "NOVENO"
            : "OCTAVO"
          : formData.terminosAdicionales
            ? "OCTAVO"
            : "SÉPTIMO"
      : !formData.permiteSubarriendo
        ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "NOVENO"
            : "OCTAVO"
          : formData.terminosAdicionales
            ? "OCTAVO"
            : "SÉPTIMO"
        : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "SÉPTIMO"
            : "SEXTO"
          : formData.terminosAdicionales
            ? "SEXTO"
            : "QUINTO"
}: DOMICILIO Y JURISDICCIÓN
Para todos los efectos legales derivados del presente contrato, las partes fijan su domicilio en la ciudad de ${
      formData.ciudadArrendador
    } y se someten a la jurisdicción de sus Tribunales Ordinarios de Justicia.

${
  formData.garantia
    ? formData.prohibiciones
      ? !formData.permiteSubarriendo
        ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "DUODÉCIMO"
            : "UNDÉCIMO"
          : formData.terminosAdicionales
            ? "UNDÉCIMO"
            : "DÉCIMO"
        : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "UNDÉCIMO"
            : "DÉCIMO"
          : formData.terminosAdicionales
            ? "DÉCIMO"
            : "NOVENO"
      : !formData.permiteSubarriendo
        ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "UNDÉCIMO"
            : "DÉCIMO"
          : formData.terminosAdicionales
            ? "DÉCIMO"
            : "NOVENO"
        : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "DÉCIMO"
            : "NOVENO"
          : formData.terminosAdicionales
            ? "NOVENO"
            : "OCTAVO"
    : formData.prohibiciones
      ? !formData.permiteSubarriendo
        ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "UNDÉCIMO"
            : "DÉCIMO"
          : formData.terminosAdicionales
            ? "DÉCIMO"
            : "NOVENO"
        : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "DÉCIMO"
            : "NOVENO"
          : formData.terminosAdicionales
            ? "NOVENO"
            : "OCTAVO"
      : !formData.permiteSubarriendo
        ? !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "NOVENO"
            : "OCTAVO"
          : formData.terminosAdicionales
            ? "OCTAVO"
            : "SÉPTIMO"
        : !formData.permiteMascotas && formData.tipoArriendo === "habitacional"
          ? formData.terminosAdicionales
            ? "OCTAVO"
            : "SÉPTIMO"
          : formData.terminosAdicionales
            ? "SÉPTIMO"
            : "SEXTO"
}: EJEMPLARES
El presente contrato se firma en dos ejemplares del mismo tenor y fecha, quedando uno en poder de cada parte.


_______________________                    _______________________
     ARRENDADOR                                ARRENDATARIO
${formData.nombreArrendador}                   ${formData.nombreArrendatario}
RUT: ${formData.rutArrendador}                 RUT: ${formData.rutArrendatario}
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
      a.download = `Contrato_Arriendo_${formData.tipoArriendo}_${new Date().toISOString().split("T")[0]}.txt`
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
            <title>Contrato de Arriendo</title>
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
      case 0: // Tipo de arriendo
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Tipo de arriendo</h2>
              <p className="text-muted-foreground">Selecciona el tipo de contrato de arriendo que deseas generar</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Tipo de arriendo</Label>
                <RadioGroup
                  value={formData.tipoArriendo}
                  onValueChange={(value) => handleSelectChange("tipoArriendo", value)}
                  className="flex flex-col space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="habitacional" id="habitacional" />
                    <Label htmlFor="habitacional">Arriendo habitacional</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comercial" id="comercial" />
                    <Label htmlFor="comercial">Arriendo comercial</Label>
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

              <div>
                <Label>Plazo del contrato</Label>
                <RadioGroup
                  value={formData.plazoContrato}
                  onValueChange={(value) => handleSelectChange("plazoContrato", value)}
                  className="flex flex-col space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="indefinido" id="indefinido" />
                    <Label htmlFor="indefinido">Indefinido</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fijo" id="fijo" />
                    <Label htmlFor="fijo">Plazo fijo</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.plazoContrato === "fijo" && (
                <div className="space-y-2">
                  <Label htmlFor="fechaTermino">Fecha de término</Label>
                  <Input
                    id="fechaTermino"
                    name="fechaTermino"
                    type="date"
                    value={formData.fechaTermino}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              {formData.plazoContrato === "fijo" && (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="renovacionAutomatica"
                    checked={formData.renovacionAutomatica}
                    onCheckedChange={(checked) => handleCheckboxChange("renovacionAutomatica", checked)}
                  />
                  <Label htmlFor="renovacionAutomatica">Renovación automática</Label>
                </div>
              )}
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Datos del arrendador</h2>
              <p className="text-muted-foreground">Ingresa la información del arrendador (propietario) del inmueble</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombreArrendador">Nombre completo</Label>
                  <Input
                    id="nombreArrendador"
                    name="nombreArrendador"
                    value={formData.nombreArrendador}
                    onChange={handleInputChange}
                    placeholder="Nombre y apellidos"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rutArrendador">RUT</Label>
                  <Input
                    id="rutArrendador"
                    name="rutArrendador"
                    value={formData.rutArrendador}
                    onChange={handleInputChange}
                    placeholder="Ej: 12.345.678-9"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="representanteArrendador">Representante legal (opcional)</Label>
                  <Input
                    id="representanteArrendador"
                    name="representanteArrendador"
                    value={formData.representanteArrendador}
                    onChange={handleInputChange}
                    placeholder="Nombre del representante"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rutRepresentanteArrendador">RUT del representante (opcional)</Label>
                  <Input
                    id="rutRepresentanteArrendador"
                    name="rutRepresentanteArrendador"
                    value={formData.rutRepresentanteArrendador}
                    onChange={handleInputChange}
                    placeholder="Ej: 12.345.678-9"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="domicilioArrendador">Domicilio</Label>
                  <Input
                    id="domicilioArrendador"
                    name="domicilioArrendador"
                    value={formData.domicilioArrendador}
                    onChange={handleInputChange}
                    placeholder="Dirección completa"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comunaArrendador">Comuna</Label>
                  <Input
                    id="comunaArrendador"
                    name="comunaArrendador"
                    value={formData.comunaArrendador}
                    onChange={handleInputChange}
                    placeholder="Ej: Santiago"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ciudadArrendador">Ciudad</Label>
                <Input
                  id="ciudadArrendador"
                  name="ciudadArrendador"
                  value={formData.ciudadArrendador}
                  onChange={handleInputChange}
                  placeholder="Ej: Santiago"
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Datos del arrendatario</h2>
              <p className="text-muted-foreground">Ingresa la información del arrendatario (inquilino) del inmueble</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombreArrendatario">Nombre completo</Label>
                  <Input
                    id="nombreArrendatario"
                    name="nombreArrendatario"
                    value={formData.nombreArrendatario}
                    onChange={handleInputChange}
                    placeholder="Nombre y apellidos"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rutArrendatario">RUT</Label>
                  <Input
                    id="rutArrendatario"
                    name="rutArrendatario"
                    value={formData.rutArrendatario}
                    onChange={handleInputChange}
                    placeholder="Ej: 12.345.678-9"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="representanteArrendatario">Representante legal (opcional)</Label>
                  <Input
                    id="representanteArrendatario"
                    name="representanteArrendatario"
                    value={formData.representanteArrendatario}
                    onChange={handleInputChange}
                    placeholder="Nombre del representante"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rutRepresentanteArrendatario">RUT del representante (opcional)</Label>
                  <Input
                    id="rutRepresentanteArrendatario"
                    name="rutRepresentanteArrendatario"
                    value={formData.rutRepresentanteArrendatario}
                    onChange={handleInputChange}
                    placeholder="Ej: 12.345.678-9"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="domicilioArrendatario">Domicilio</Label>
                  <Input
                    id="domicilioArrendatario"
                    name="domicilioArrendatario"
                    value={formData.domicilioArrendatario}
                    onChange={handleInputChange}
                    placeholder="Dirección completa"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comunaArrendatario">Comuna</Label>
                  <Input
                    id="comunaArrendatario"
                    name="comunaArrendatario"
                    value={formData.comunaArrendatario}
                    onChange={handleInputChange}
                    placeholder="Ej: Santiago"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ciudadArrendatario">Ciudad</Label>
                <Input
                  id="ciudadArrendatario"
                  name="ciudadArrendatario"
                  value={formData.ciudadArrendatario}
                  onChange={handleInputChange}
                  placeholder="Ej: Santiago"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Información de la propiedad</h2>
              <p className="text-muted-foreground">
                Ingresa la información detallada de la propiedad que se va a arrendar
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="direccionPropiedad">Dirección completa</Label>
                  <Input
                    id="direccionPropiedad"
                    name="direccionPropiedad"
                    value={formData.direccionPropiedad}
                    onChange={handleInputChange}
                    placeholder="Ej: Calle Los Olmos 123, depto 501"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comunaPropiedad">Comuna</Label>
                  <Input
                    id="comunaPropiedad"
                    name="comunaPropiedad"
                    value={formData.comunaPropiedad}
                    onChange={handleInputChange}
                    placeholder="Ej: Santiago"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ciudadPropiedad">Ciudad</Label>
                <Input
                  id="ciudadPropiedad"
                  name="ciudadPropiedad"
                  value={formData.ciudadPropiedad}
                  onChange={handleInputChange}
                  placeholder="Ej: Santiago"
                />
              </div>

              <div>
                <Label htmlFor="tipoPropiedad">Tipo de propiedad</Label>
                <Select
                  value={formData.tipoPropiedad}
                  onValueChange={(value) => handleSelectChange("tipoPropiedad", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tipo de propiedad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="departamento">Departamento</SelectItem>
                    <SelectItem value="oficina">Oficina</SelectItem>
                    <SelectItem value="local">Local comercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="descripcionPropiedad">Descripción de la propiedad (opcional)</Label>
                <Textarea
                  id="descripcionPropiedad"
                  name="descripcionPropiedad"
                  value={formData.descripcionPropiedad}
                  onChange={handleInputChange}
                  placeholder="Ej: Casa de dos pisos, con jardín y piscina"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rolPropiedad">Rol de avalúo (opcional)</Label>
                <Input
                  id="rolPropiedad"
                  name="rolPropiedad"
                  value={formData.rolPropiedad}
                  onChange={handleInputChange}
                  placeholder="Ej: 1234-567"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="amobladoPropiedad"
                  checked={formData.amobladoPropiedad}
                  onCheckedChange={(checked) => handleCheckboxChange("amobladoPropiedad", checked)}
                />
                <Label htmlFor="amobladoPropiedad">¿La propiedad se arrienda amoblada?</Label>
              </div>

              {formData.amobladoPropiedad && (
                <div className="space-y-2">
                  <Label htmlFor="inventarioPropiedad">Inventario de la propiedad (opcional)</Label>
                  <Textarea
                    id="inventarioPropiedad"
                    name="inventarioPropiedad"
                    value={formData.inventarioPropiedad}
                    onChange={handleInputChange}
                    placeholder="Ej: Lista detallada de los muebles y enseres incluidos en el arriendo"
                  />
                </div>
              )}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Condiciones del arriendo</h2>
              <p className="text-muted-foreground">
                Define las condiciones económicas y de pago del contrato de arriendo
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="rentaMensual">Renta mensual (CLP)</Label>
                <Input
                  id="rentaMensual"
                  name="rentaMensual"
                  type="number"
                  value={formData.rentaMensual}
                  onChange={handleInputChange}
                  placeholder="Ej: 350000"
                />
              </div>

              <div>
                <Label htmlFor="formaPago">Forma de pago</Label>
                <Select value={formData.formaPago} onValueChange={(value) => handleSelectChange("formaPago", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona la forma de pago" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transferencia">Transferencia bancaria</SelectItem>
                    <SelectItem value="efectivo">Efectivo</SelectItem>
                    <SelectItem value="cheque">Cheque</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="detallePago">Detalle del pago (opcional)</Label>
                <Input
                  id="detallePago"
                  name="detallePago"
                  value={formData.detallePago}
                  onChange={handleInputChange}
                  placeholder="Ej: Datos de la cuenta bancaria para transferencia"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="garantia"
                  checked={formData.garantia}
                  onCheckedChange={(checked) => handleCheckboxChange("garantia", checked)}
                />
                <Label htmlFor="garantia">¿Se exige garantía?</Label>
              </div>

              {formData.garantia && (
                <div className="space-y-2">
                  <Label htmlFor="montoGarantia">Monto de la garantía (CLP)</Label>
                  <Input
                    id="montoGarantia"
                    name="montoGarantia"
                    type="number"
                    value={formData.montoGarantia}
                    onChange={handleInputChange}
                    placeholder="Ej: 350000"
                  />
                </div>
              )}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Términos adicionales</h2>
              <p className="text-muted-foreground">
                Define los términos adicionales y restricciones del contrato de arriendo
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="gastosComunesIncluidos"
                  checked={formData.gastosComunesIncluidos}
                  onCheckedChange={(checked) => handleCheckboxChange("gastosComunesIncluidos", checked)}
                />
                <Label htmlFor="gastosComunesIncluidos">¿Gastos comunes incluidos en la renta?</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="serviciosBasicosIncluidos"
                  checked={formData.serviciosBasicosIncluidos}
                  onCheckedChange={(checked) => handleCheckboxChange("serviciosBasicosIncluidos", checked)}
                />
                <Label htmlFor="serviciosBasicosIncluidos">¿Servicios básicos incluidos en la renta?</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="permiteSubarriendo"
                  checked={formData.permiteSubarriendo}
                  onCheckedChange={(checked) => handleCheckboxChange("permiteSubarriendo", checked)}
                />
                <Label htmlFor="permiteSubarriendo">¿Se permite subarriendo?</Label>
              </div>

              {formData.tipoArriendo === "habitacional" && (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="permiteMascotas"
                    checked={formData.permiteMascotas}
                    onCheckedChange={(checked) => handleCheckboxChange("permiteMascotas", checked)}
                  />
                  <Label htmlFor="permiteMascotas">¿Se permiten mascotas?</Label>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="prohibiciones">Prohibiciones (opcional)</Label>
                <Textarea
                  id="prohibiciones"
                  name="prohibiciones"
                  value={formData.prohibiciones}
                  onChange={handleInputChange}
                  placeholder="Ej: No se permite fumar, no se permite hacer fiestas"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="terminosAdicionales">Términos adicionales (opcional)</Label>
                <Textarea
                  id="terminosAdicionales"
                  name="terminosAdicionales"
                  value={formData.terminosAdicionales}
                  onChange={handleInputChange}
                  placeholder="Ej: Cláusulas adicionales sobre el uso de la propiedad"
                />
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Vista previa del contrato</h2>
              <p className="text-muted-foreground">Revisa el contrato generado y descárgalo en formato PDF</p>
            </div>

            <div className="space-y-4">
              <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md font-mono text-sm">{contractText}</pre>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  // Función auxiliar para convertir números a letras (versión simplificada)
  function convertirNumeroALetras(numero) {
    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"]
    const decenas = [
      "",
      "diez",
      "veinte",
      "treinta",
      "cuarenta",
      "cincuenta",
      "sesenta",
      "setenta",
      "ochenta",
      "noventa",
    ]
    const especiales = [
      "diez",
      "once",
      "doce",
      "trece",
      "catorce",
      "quince",
      "dieciséis",
      "diecisiete",
      "dieciocho",
      "diecinueve",
    ]

    if (numero === 0) return "cero"
    if (numero < 10) return unidades[numero]
    if (numero < 20) return especiales[numero - 10]
    if (numero < 100) {
      const unidad = numero % 10
      const decena = Math.floor(numero / 10)
      return unidad === 0 ? decenas[decena] : `${decenas[decena]} y ${unidades[unidad]}`
    }

    return numero.toString()
  }

  const renderContrato = () => {
    // Formatear la fecha de inicio
    const fechaInicio = formData.fechaInicio
      ? new Date(formData.fechaInicio).toLocaleDateString("es-CL")
      : "[FECHA DE INICIO]"

    // Calcular fecha de término si no es indefinido
    let fechaTermino = "[FECHA DE TÉRMINO]"
    if (formData.fechaInicio && formData.plazoContrato !== "indefinido") {
      const fecha = new Date(formData.fechaInicio)
      fecha.setMonth(fecha.getMonth() + Number.parseInt(formData.plazoContrato))
      fechaTermino = fecha.toLocaleDateString("es-CL")
    }

    // Convertir montos a palabras
    const montoArriendoPalabras = formData.rentaMensual
      ? numeroALetras(Number.parseInt(formData.rentaMensual))
      : "[MONTO EN PALABRAS]"
    const montoGarantiaPalabras = formData.montoGarantia
      ? numeroALetras(Number.parseInt(formData.montoGarantia))
      : "[MONTO GARANTÍA EN PALABRAS]"

    return (
      <div id="contrato-preview" className="space-y-6 text-sm leading-relaxed">
        <h1 className="text-2xl font-bold text-center">CONTRATO DE ARRENDAMIENTO</h1>

        <p>
          En {formData.comunaPropiedad || "[COMUNA]"}, a {fechaInicio}, entre{" "}
          {formData.nombreArrendador || "[NOMBRE ARRENDADOR]"},{formData.nacionalidadArrendador || "[NACIONALIDAD]"},{" "}
          {formData.estadoCivilArrendador || "[ESTADO CIVIL]"},{formData.profesionArrendador || "[PROFESIÓN]"}, cédula
          de identidad número {formData.rutArrendador || "[RUT]"}, con domicilio en{" "}
          {formData.domicilioArrendador || "[DOMICILIO]"}, comuna de {formData.comunaArrendador || "[COMUNA]"}, en
          adelante el "ARRENDADOR"; y {formData.nombreArrendatario || "[NOMBRE ARRENDATARIO]"},
          {formData.nacionalidadArrendatario || "[NACIONALIDAD]"},{" "}
          {formData.estadoCivilArrendatario || "[ESTADO CIVIL]"},{formData.profesionArrendatario || "[PROFESIÓN]"},
          cédula de identidad número {formData.rutArrendatario || "[RUT]"}, con domicilio en{" "}
          {formData.domicilioArrendatario || "[DOMICILIO]"}, comuna de {formData.comunaArrendatario || "[COMUNA]"}, en
          adelante el "ARRENDATARIO", se ha convenido el siguiente contrato de arrendamiento:
        </p>

        <h2 className="text-lg font-semibold">PRIMERO: INDIVIDUALIZACIÓN DEL INMUEBLE</h2>
        <p>
          El ARRENDADOR es dueño de un{formData.tipoPropiedad === "casa" ? "a" : ""}{" "}
          {formData.tipoPropiedad || "[TIPO PROPIEDAD]"} ubicad{formData.tipoPropiedad === "casa" ? "a" : "o"} en
          {formData.direccionPropiedad || "[DIRECCIÓN]"}, comuna de {formData.comunaPropiedad || "[COMUNA]"}, región{" "}
          {formData.ciudadPropiedad || "[REGIÓN]"}.
        </p>

        <h2 className="text-lg font-semibold">SEGUNDO: OBJETO DEL CONTRATO</h2>
        <p>
          Por el presente instrumento, el ARRENDADOR da en arrendamiento al ARRENDATARIO, quien acepta para sí, el
          inmueble individualizado en la cláusula primera, con todo lo edificado y plantado en él.
        </p>

        <h2 className="text-lg font-semibold">TERCERO: PLAZO</h2>
        <p>
          El presente contrato tendrá una duración de{" "}
          {formData.plazoContrato === "indefinido" ? "plazo indefinido" : `${formData.plazoContrato} meses`}, a contar
          del {fechaInicio}
          {formData.plazoContrato !== "indefinido" ? ` y hasta el ${fechaTermino}` : ""}.
          {formData.plazoContrato !== "indefinido"
            ? " Al vencimiento del plazo de vigencia del contrato, éste se prorrogará automática y sucesivamente por períodos iguales, a menos que alguna de las partes manifieste a la otra su intención de no renovarlo, mediante carta certificada dirigida al domicilio de la otra parte con, a lo menos, 30 días de anticipación al vencimiento del plazo original o de cualquiera de sus prórrogas."
            : " Cualquiera de las partes podrá poner término al presente contrato dando aviso a la otra mediante carta certificada dirigida al domicilio registrado en este contrato, con a lo menos 30 días de anticipación."}
        </p>

        <h2 className="text-lg font-semibold">CUARTO: RENTA DE ARRENDAMIENTO</h2>
        <p>
          La renta mensual de arrendamiento será la suma de ${formData.rentaMensual || "[MONTO]"} (pesos chilenos), que
          se pagará por mes {formData.fechaPago === "ultimo" ? "vencido" : "anticipado"}, dentro de los primeros{" "}
          {formData.fechaPago === "ultimo" ? "5 días del mes siguiente" : `${formData.fechaPago} días de cada mes`},
          mediante{" "}
          {formData.formaPago === "efectivo"
            ? "pago en efectivo"
            : formData.formaPago === "transferencia"
              ? "transferencia electrónica"
              : formData.formaPago === "cheque"
                ? "cheque"
                : "[FORMA DE PAGO]"}
          .
        </p>

        <h2 className="text-lg font-semibold">QUINTO: GARANTÍA</h2>
        <p>
          A la firma del presente contrato, el ARRENDATARIO entrega al ARRENDADOR la suma de $
          {formData.montoGarantia || "[MONTO GARANTÍA]"}
          (pesos chilenos), equivalente a{" "}
          {formData.montoGarantia && formData.rentaMensual
            ? (Number.parseInt(formData.montoGarantia) / Number.parseInt(formData.rentaMensual)).toFixed(1)
            : "[EQUIVALENCIA]"}{" "}
          mes(es) de renta, a título de garantía para responder al fiel cumplimiento de las obligaciones del contrato,
          conservación del inmueble, pago de perjuicios y deterioros que se causen en el inmueble, sus servicios e
          instalaciones, y en general, para responder al fiel y oportuno cumplimiento de todas las obligaciones que
          impone este contrato al ARRENDATARIO.
        </p>
        <p>
          Esta garantía será devuelta al ARRENDATARIO dentro de los 15 días siguientes a la restitución del inmueble,
          siempre y cuando éste se encuentre en buen estado de conservación y no existan deudas pendientes de servicios,
          contribuciones u otros gastos que sean de cargo del ARRENDATARIO.
        </p>

        <h2 className="text-lg font-semibold">SEXTO: SERVICIOS Y GASTOS COMUNES</h2>
        <p>
          Serán de cargo del ARRENDATARIO los pagos de servicios de agua, electricidad, gas, teléfono, internet y otros
          servicios con que cuente el inmueble, así como los gastos de reparación que provengan del uso normal del
          inmueble.
          {formData.gastosComunesIncluidos === "si"
            ? ` Los gastos comunes, que ascienden aproximadamente a $${formData.montoGastoComun || "[MONTO]"} mensuales, serán de cargo del ARRENDADOR.`
            : " Los gastos comunes serán de cargo del ARRENDATARIO, quien deberá pagarlos directamente a la administración del edificio o condominio."}
          {formData.serviciosBasicosIncluidos
            ? ` El ARRENDADOR incluye en el precio del arriendo los siguientes servicios: ${formData.serviciosBasicosIncluidos}.`
            : ""}
        </p>

        <h2 className="text-lg font-semibold">SÉPTIMO: ESTADO DEL INMUEBLE</h2>
        <p>
          El ARRENDATARIO declara recibir el inmueble en buen estado de conservación y funcionamiento, con todos sus
          artefactos, llaves, accesorios y especies en perfecto estado, obligándose a mantenerlo y restituirlo en el
          mismo estado, habida consideración del desgaste producido por el uso legítimo.
        </p>

        <h2 className="text-lg font-semibold">OCTAVO: PROHIBICIONES</h2>
        <p>Queda prohibido al ARRENDATARIO:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Subarrendar o ceder a cualquier título el presente contrato, sin autorización escrita del ARRENDADOR.</li>
          <li>Causar molestias a los vecinos.</li>
          <li>Destinar el inmueble a un objeto diferente al señalado en este contrato.</li>
          <li>Introducir materiales explosivos, inflamables o de mal olor en la propiedad.</li>
          {formData.permiteMascotas === "no" && <li>Mantener mascotas de cualquier especie en el inmueble.</li>}
          {formData.permiteModificaciones === "no" && (
            <li>Efectuar mejoras o modificaciones al inmueble sin autorización escrita del ARRENDADOR.</li>
          )}
        </ol>

        <h2 className="text-lg font-semibold">NOVENO: REPARACIONES</h2>
        <p>
          Serán de cargo del ARRENDADOR las reparaciones necesarias que provengan de fuerza mayor o caso fortuito o de
          la mala calidad de la construcción del inmueble o de los materiales empleados en ella. El ARRENDATARIO se
          obliga a dar aviso inmediato al ARRENDADOR de cualquier desperfecto que experimente el inmueble.
        </p>

        <h2 className="text-lg font-semibold">DÉCIMO: MEJORAS</h2>
        <p>
          El ARRENDATARIO no podrá hacer modificaciones ni mejoras de ninguna especie en el inmueble sin autorización
          previa y por escrito del ARRENDADOR. Todas las mejoras que se efectúen con autorización quedarán en beneficio
          del inmueble, sin derecho a indemnización ni reembolso alguno, a menos que se estipule lo contrario por
          escrito.
        </p>

        {formData.terminosAdicionales && (
          <>
            <h2 className="text-lg font-semibold">DÉCIMO PRIMERO: CLÁUSULAS ADICIONALES</h2>
            <p>{formData.terminosAdicionales}</p>
          </>
        )}

        <h2 className="text-lg font-semibold">
          {formData.terminosAdicionales ? "DÉCIMO SEGUNDO" : "DÉCIMO PRIMERO"}: DOMICILIO
        </h2>
        <p>
          Para todos los efectos legales derivados del presente contrato, las partes fijan su domicilio en la comuna de
          {formData.comunaPropiedad || "[COMUNA]"} y se someten a la jurisdicción de sus Tribunales de Justicia.
        </p>

        <h2 className="text-lg font-semibold">
          {formData.terminosAdicionales ? "DÉCIMO TERCERO" : "DÉCIMO SEGUNDO"}: EJEMPLARES
        </h2>
        <p>
          El presente contrato se firma en dos ejemplares del mismo tenor y fecha, quedando uno en poder de cada parte.
        </p>

        <div className="pt-10 grid grid-cols-2 gap-10">
          <div className="text-center">
            <p className="border-t border-black pt-2">ARRENDADOR</p>
            <p>{formData.nombreArrendador || "[NOMBRE ARRENDADOR]"}</p>
            <p>RUT: {formData.rutArrendador || "[RUT]"}</p>
          </div>
          <div className="text-center">
            <p className="border-t border-black pt-2">ARRENDATARIO</p>
            <p>{formData.nombreArrendatario || "[NOMBRE ARRENDATARIO]"}</p>
            <p>RUT: {formData.rutArrendatario || "[RUT]"}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center">
            <Button variant="outline" size="sm" asChild className="mr-2">
              <Link href="/contratos">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Volver
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Generador de Contrato de Arriendo</h1>
          </div>

          {sessionData && (
            <>
              {currentStep < STEPS.length - 1 ? (
                <Card>
                  <CardContent className="pt-6">
                    {/* Indicador de progreso */}
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        {STEPS.slice(0, -1).map((stepName, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentStep(index)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                              currentStep === index
                                ? "bg-primary text-primary-foreground"
                                : currentStep > index
                                  ? "bg-primary/20 text-primary"
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${(currentStep / (STEPS.length - 2)) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {renderStep()}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Anterior
                    </Button>
                    {currentStep === STEPS.length - 2 ? (
                      <Button onClick={generateContract}>
                        Generar contrato
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    ) : (
                      <Button onClick={nextStep}>
                        Siguiente
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ) : (
                <div>
                  <div className="bg-muted p-4 rounded-lg mb-6 flex flex-wrap gap-2 items-center justify-between">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold mr-4">Vista previa del contrato</h2>
                      <TextToSpeech text={contractText} buttonLabel="Escuchar contrato" />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={prevStep}>
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Editar
                      </Button>
                      <Button variant="outline" onClick={handlePrint}>
                        <Printer className="h-4 w-4 mr-1" />
                        Imprimir
                      </Button>
                      <Button onClick={handleDownloadPDF} disabled={isGeneratingPDF}>
                        {isGeneratingPDF ? (
                          <>
                            Generando...
                            <Loader2 className="h-4 w-4 ml-2 animate-spin" />
                          </>
                        ) : (
                          <>
                            Descargar
                            <Download className="h-4 w-4 ml-1" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white p-8 border rounded-lg shadow-sm">
                    <pre className="whitespace-pre-wrap font-mono text-sm">{contractText}</pre>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
