"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { SiteFooter } from "@/components/site-footer"
import { TextToSpeech } from "@/components/text-to-speech"
import { ChevronLeft, ChevronRight, Printer, Download, Check, Loader2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Definir los pasos del formulario
const STEPS = [
  "Datos del empleador",
  "Datos del trabajador",
  "Tipo de contrato",
  "Cargo y funciones",
  "Jornada laboral",
  "Remuneración",
  "Beneficios adicionales",
  "Términos adicionales",
  "Vista previa",
]

export default function ContratoLaboralPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    // Datos del empleador
    nombreEmpleador: "",
    rutEmpleador: "",
    representanteLegal: "",
    rutRepresentante: "",
    direccionEmpleador: "",
    comunaEmpleador: "",
    giroEmpleador: "",

    // Datos del trabajador
    nombreTrabajador: "",
    rutTrabajador: "",
    nacionalidadTrabajador: "Chilena",
    fechaNacimiento: "",
    estadoCivilTrabajador: "",
    direccionTrabajador: "",
    comunaTrabajador: "",

    // Tipo de contrato
    tipoContrato: "indefinido",
    fechaInicio: "",
    fechaTermino: "",
    motivoContratacion: "",
    periodosPrueba: "no",

    // Cargo y funciones
    cargoTrabajador: "",
    funcionesTrabajador: "",
    lugarTrabajo: "",

    // Jornada laboral
    tipoJornada: "completa",
    horasSemanales: "45",
    distribucionJornada: "",
    horaInicio: "",
    horaTermino: "",
    colacion: "30",

    // Remuneración
    sueldoBase: "",
    periodoPago: "mensual",
    formaPago: "transferencia",
    incluyeGratificacion: "si",

    // Beneficios adicionales
    beneficiosAdicionales: "",

    // Términos adicionales
    clausulasAdicionales: "",
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
      case "indefinido":
        tipoContratoTexto = "CONTRATO DE TRABAJO INDEFINIDO"
        break
      case "plazo-fijo":
        tipoContratoTexto = "CONTRATO DE TRABAJO A PLAZO FIJO"
        break
      case "obra":
        tipoContratoTexto = "CONTRATO DE TRABAJO POR OBRA O FAENA"
        break
      default:
        tipoContratoTexto = "CONTRATO DE TRABAJO"
    }

    const contract = `
${tipoContratoTexto}

En ${formData.comunaEmpleador || "[COMUNA]"}, a ${new Date().toLocaleDateString("es-CL")}, entre ${formData.nombreEmpleador || "[NOMBRE EMPLEADOR]"}, RUT ${formData.rutEmpleador || "[RUT EMPLEADOR]"}, representada legalmente por don/doña ${formData.representanteLegal || "[REPRESENTANTE LEGAL]"}, RUT ${formData.rutRepresentante || "[RUT REPRESENTANTE]"}, ambos con domicilio en ${formData.direccionEmpleador || "[DIRECCIÓN EMPLEADOR]"}, comuna de ${formData.comunaEmpleador || "[COMUNA]"}, en adelante "el empleador", y don/doña ${formData.nombreTrabajador || "[NOMBRE TRABAJADOR]"}, RUT ${formData.rutTrabajador || "[RUT TRABAJADOR]"}, de nacionalidad ${formData.nacionalidadTrabajador || "[NACIONALIDAD]"}, estado civil ${formData.estadoCivilTrabajador || "[ESTADO CIVIL]"}, con domicilio en ${formData.direccionTrabajador || "[DIRECCIÓN TRABAJADOR]"}, comuna de ${formData.comunaTrabajador || "[COMUNA]"}, en adelante "el trabajador", se ha convenido el siguiente contrato de trabajo:

PRIMERO: ANTECEDENTES
El empleador es una empresa dedicada a ${formData.giroEmpleador || "[GIRO EMPRESA]"}.

SEGUNDO: FUNCIÓN Y LUGAR DE TRABAJO
El trabajador se obliga a desempeñar el cargo de ${formData.cargoTrabajador || "[CARGO]"}, realizando principalmente las siguientes funciones: ${formData.funcionesTrabajador || "[FUNCIONES]"}.

El trabajador prestará sus servicios en ${formData.lugarTrabajo || "[LUGAR DE TRABAJO]"}, sin perjuicio de la facultad del empleador de alterar, por causa justificada, la naturaleza de los servicios, o el sitio o recinto en que ellos deban prestarse, con la sola limitación de que se trate de labores similares y que el nuevo sitio o recinto quede dentro de la misma localidad o ciudad.

TERCERO: JORNADA DE TRABAJO
La jornada ordinaria de trabajo será de ${formData.horasSemanales || "[HORAS]"} horas semanales, distribuidas de la siguiente manera: ${formData.distribucionJornada || "[DISTRIBUCIÓN]"}.

El horario de trabajo será de ${formData.horaInicio || "[HORA INICIO]"} a ${formData.horaTermino || "[HORA TÉRMINO]"} horas, con un tiempo de colación de ${formData.colacion || "[COLACIÓN]"} minutos, entre las [HORA COLACIÓN INICIO] y [HORA COLACIÓN TÉRMINO] horas, tiempo que no se considerará trabajado para computar la jornada diaria.

CUARTO: PLAZO DEL CONTRATO
${
  formData.tipoContrato === "indefinido"
    ? `El presente contrato tendrá una duración indefinida, iniciando sus efectos el ${formData.fechaInicio || "[FECHA DE INICIO]"}.`
    : formData.tipoContrato === "plazo-fijo"
      ? `El presente contrato tendrá una duración de plazo fijo, iniciando sus efectos el ${formData.fechaInicio || "[FECHA DE INICIO]"} y finalizando el ${formData.fechaTermino || "[FECHA DE TÉRMINO]"}.`
      : `El presente contrato durará hasta el término de la obra o faena consistente en ${formData.motivoContratacion || "[DESCRIPCIÓN OBRA/FAENA]"}, iniciando sus efectos el ${formData.fechaInicio || "[FECHA DE INICIO]"}.`
}
${
  formData.periodosPrueba === "si"
    ? " Las partes acuerdan que los primeros 15 días de vigencia del contrato se considerarán como período de prueba, pudiendo ponerse término al contrato en dicho período por simple desahucio de cualquiera de las partes."
    : ""
}

QUINTO: REMUNERACIÓN
El empleador se obliga a pagar al trabajador, como remuneración por sus servicios, la suma bruta mensual de ${formData.sueldoBase || "[MONTO]"} (pesos chilenos).

La remuneración se pagará por períodos ${formData.periodoPago || "[PERÍODO]"} vencidos, el último día hábil de cada ${formData.periodoPago === "mensual" ? "mes" : formData.periodoPago === "quincenal" ? "quincena" : "semana"}, mediante ${
      formData.formaPago === "transferencia"
        ? "transferencia electrónica"
        : formData.formaPago === "cheque"
          ? "cheque nominativo"
          : "dinero en efectivo"
    }.

${
  formData.incluyeGratificacion === "si"
    ? "El empleador pagará al trabajador una gratificación anual equivalente al 25% de lo devengado en el respectivo ejercicio comercial por concepto de remuneraciones mensuales, con un límite de 4,75 Ingresos Mínimos Mensuales, conforme a lo dispuesto en el artículo 50 del Código del Trabajo."
    : "El trabajador no percibirá gratificación legal."
}

${formData.beneficiosAdicionales ? `SEXTO: BENEFICIOS ADICIONALES\n${formData.beneficiosAdicionales}` : ""}

${formData.beneficiosAdicionales ? "SÉPTIMO" : "SEXTO"}: COTIZACIONES PREVISIONALES
El empleador efectuará las retenciones legales correspondientes a las cotizaciones previsionales y de salud, y las enterará en las instituciones que correspondan de acuerdo a la legislación vigente.

${formData.beneficiosAdicionales ? "OCTAVO" : "SÉPTIMO"}: FERIADO ANUAL
El trabajador tendrá derecho a un feriado anual de 15 días hábiles con remuneración íntegra, después de un año de servicio, de acuerdo a lo establecido en el artículo 67 y siguientes del Código del Trabajo.

${formData.beneficiosAdicionales ? "NOVENO" : "OCTAVO"}: TÉRMINO DEL CONTRATO
El presente contrato podrá terminar por las causales establecidas en los artículos 159, 160 y 161 del Código del Trabajo.

${formData.clausulasAdicionales ? `${formData.beneficiosAdicionales ? "DÉCIMO" : "NOVENO"}: CLÁUSULAS ADICIONALES\n${formData.clausulasAdicionales}` : ""}

${
  formData.clausulasAdicionales
    ? formData.beneficiosAdicionales
      ? "DÉCIMO PRIMERO"
      : "DÉCIMO"
    : formData.beneficiosAdicionales
      ? "DÉCIMO"
      : "NOVENO"
}: EJEMPLARES
El presente contrato se firma en dos ejemplares, declarando el trabajador haber recibido en este acto un ejemplar de dicho contrato, que es el fiel reflejo de la relación laboral existente entre las partes.


_______________________                    _______________________
      EMPLEADOR                                 TRABAJADOR
${formData.nombreEmpleador || "[NOMBRE EMPLEADOR]"}                   ${formData.nombreTrabajador || "[NOMBRE TRABAJADOR]"}
RUT: ${formData.rutEmpleador || "[RUT]"}                 RUT: ${formData.rutTrabajador || "[RUT]"}
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
      a.download = `Contrato_Trabajo_${new Date().toISOString().split("T")[0]}.txt`
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
            <title>Contrato de Trabajo</title>
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
      case 0: // Datos del empleador
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Datos del empleador</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nombreEmpleador">Razón social / Nombre del empleador</Label>
                <Input
                  id="nombreEmpleador"
                  name="nombreEmpleador"
                  value={formData.nombreEmpleador}
                  onChange={handleInputChange}
                  placeholder="Ej: Empresa S.A."
                />
              </div>

              <div>
                <Label htmlFor="rutEmpleador">RUT empresa</Label>
                <Input
                  id="rutEmpleador"
                  name="rutEmpleador"
                  value={formData.rutEmpleador}
                  onChange={handleInputChange}
                  placeholder="Ej: 76.123.456-7"
                />
              </div>

              <div>
                <Label htmlFor="representanteLegal">Representante legal</Label>
                <Input
                  id="representanteLegal"
                  name="representanteLegal"
                  value={formData.representanteLegal}
                  onChange={handleInputChange}
                  placeholder="Nombre completo del representante"
                />
              </div>

              <div>
                <Label htmlFor="rutRepresentante">RUT representante legal</Label>
                <Input
                  id="rutRepresentante"
                  name="rutRepresentante"
                  value={formData.rutRepresentante}
                  onChange={handleInputChange}
                  placeholder="Ej: 12.345.678-9"
                />
              </div>

              <div>
                <Label htmlFor="direccionEmpleador">Dirección empresa</Label>
                <Input
                  id="direccionEmpleador"
                  name="direccionEmpleador"
                  value={formData.direccionEmpleador}
                  onChange={handleInputChange}
                  placeholder="Dirección completa"
                />
              </div>

              <div>
                <Label htmlFor="comunaEmpleador">Comuna</Label>
                <Input
                  id="comunaEmpleador"
                  name="comunaEmpleador"
                  value={formData.comunaEmpleador}
                  onChange={handleInputChange}
                  placeholder="Ej: Santiago"
                />
              </div>

              <div>
                <Label htmlFor="giroEmpleador">Giro o actividad</Label>
                <Input
                  id="giroEmpleador"
                  name="giroEmpleador"
                  value={formData.giroEmpleador}
                  onChange={handleInputChange}
                  placeholder="Ej: Desarrollo de software"
                />
              </div>
            </div>
          </div>
        )

      case 1: // Datos del trabajador
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Datos del trabajador</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nombreTrabajador">Nombre completo</Label>
                <Input
                  id="nombreTrabajador"
                  name="nombreTrabajador"
                  value={formData.nombreTrabajador}
                  onChange={handleInputChange}
                  placeholder="Nombre y apellidos"
                />
              </div>

              <div>
                <Label htmlFor="rutTrabajador">RUT</Label>
                <Input
                  id="rutTrabajador"
                  name="rutTrabajador"
                  value={formData.rutTrabajador}
                  onChange={handleInputChange}
                  placeholder="Ej: 12.345.678-9"
                />
              </div>

              <div>
                <Label htmlFor="nacionalidadTrabajador">Nacionalidad</Label>
                <Input
                  id="nacionalidadTrabajador"
                  name="nacionalidadTrabajador"
                  value={formData.nacionalidadTrabajador}
                  onChange={handleInputChange}
                  placeholder="Ej: Chilena"
                />
              </div>

              <div>
                <Label htmlFor="fechaNacimiento">Fecha de nacimiento</Label>
                <Input
                  id="fechaNacimiento"
                  name="fechaNacimiento"
                  type="date"
                  value={formData.fechaNacimiento}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Label htmlFor="estadoCivilTrabajador">Estado civil</Label>
                <Select
                  value={formData.estadoCivilTrabajador}
                  onValueChange={(value) => handleSelectChange("estadoCivilTrabajador", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el estado civil" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="soltero">Soltero/a</SelectItem>
                    <SelectItem value="casado">Casado/a</SelectItem>
                    <SelectItem value="divorciado">Divorciado/a</SelectItem>
                    <SelectItem value="viudo">Viudo/a</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="direccionTrabajador">Domicilio</Label>
                <Input
                  id="direccionTrabajador"
                  name="direccionTrabajador"
                  value={formData.direccionTrabajador}
                  onChange={handleInputChange}
                  placeholder="Dirección completa"
                />
              </div>

              <div>
                <Label htmlFor="comunaTrabajador">Comuna</Label>
                <Input
                  id="comunaTrabajador"
                  name="comunaTrabajador"
                  value={formData.comunaTrabajador}
                  onChange={handleInputChange}
                  placeholder="Ej: Santiago"
                />
              </div>
            </div>
          </div>
        )

      case 2: // Tipo de contrato
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Tipo de contrato</h2>
            <div className="space-y-4">
              <div>
                <Label>Tipo de contrato</Label>
                <RadioGroup
                  value={formData.tipoContrato}
                  onValueChange={(value) => handleSelectChange("tipoContrato", value)}
                  className="flex flex-col space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="indefinido" id="tipo-indefinido" />
                    <Label htmlFor="tipo-indefinido">Indefinido</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="plazo-fijo" id="tipo-plazo-fijo" />
                    <Label htmlFor="tipo-plazo-fijo">Plazo fijo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="obra" id="tipo-obra" />
                    <Label htmlFor="tipo-obra">Por obra o faena</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="fechaInicio">Fecha de inicio</Label>
                <Input
                  id="fechaInicio"
                  name="fechaInicio"
                  type="date"
                  value={formData.fechaInicio}
                  onChange={handleInputChange}
                />
              </div>

              {formData.tipoContrato === "plazo-fijo" && (
                <div>
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

              {formData.tipoContrato === "obra" && (
                <div>
                  <Label htmlFor="motivoContratacion">Descripción de la obra o faena</Label>
                  <Textarea
                    id="motivoContratacion"
                    name="motivoContratacion"
                    value={formData.motivoContratacion}
                    onChange={handleInputChange}
                    placeholder="Describe la obra o faena específica"
                  />
                </div>
              )}

              <div>
                <Label>¿Incluir período de prueba?</Label>
                <RadioGroup
                  value={formData.periodosPrueba}
                  onValueChange={(value) => handleSelectChange("periodosPrueba", value)}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="si" id="prueba-si" />
                    <Label htmlFor="prueba-si">Sí (15 días)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="prueba-no" />
                    <Label htmlFor="prueba-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        )

      case 3: // Cargo y funciones
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Cargo y funciones</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cargoTrabajador">Cargo o puesto</Label>
                <Input
                  id="cargoTrabajador"
                  name="cargoTrabajador"
                  value={formData.cargoTrabajador}
                  onChange={handleInputChange}
                  placeholder="Ej: Desarrollador de software"
                />
              </div>

              <div>
                <Label htmlFor="funcionesTrabajador">Funciones principales</Label>
                <Textarea
                  id="funcionesTrabajador"
                  name="funcionesTrabajador"
                  value={formData.funcionesTrabajador}
                  onChange={handleInputChange}
                  placeholder="Describe las principales funciones y responsabilidades"
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="lugarTrabajo">Lugar de trabajo</Label>
                <Input
                  id="lugarTrabajo"
                  name="lugarTrabajo"
                  value={formData.lugarTrabajo}
                  onChange={handleInputChange}
                  placeholder="Dirección donde se desempeñarán las funciones"
                />
              </div>
            </div>
          </div>
        )

      case 4: // Jornada laboral
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Jornada laboral</h2>
            <div className="space-y-4">
              <div>
                <Label>Tipo de jornada</Label>
                <RadioGroup
                  value={formData.tipoJornada}
                  onValueChange={(value) => handleSelectChange("tipoJornada", value)}
                  className="flex flex-col space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="completa" id="jornada-completa" />
                    <Label htmlFor="jornada-completa">Jornada completa</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="parcial" id="jornada-parcial" />
                    <Label htmlFor="jornada-parcial">Jornada parcial</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="excepcional" id="jornada-excepcional" />
                    <Label htmlFor="jornada-excepcional">Jornada excepcional</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="horasSemanales">Horas semanales</Label>
                <Select
                  value={formData.horasSemanales}
                  onValueChange={(value) => handleSelectChange("horasSemanales", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona las horas semanales" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="45">45 horas (máximo legal)</SelectItem>
                    <SelectItem value="44">44 horas</SelectItem>
                    <SelectItem value="40">40 horas</SelectItem>
                    <SelectItem value="30">30 horas</SelectItem>
                    <SelectItem value="20">20 horas</SelectItem>
                    <SelectItem value="10">10 horas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="distribucionJornada">Distribución de la jornada</Label>
                <Textarea
                  id="distribucionJornada"
                  name="distribucionJornada"
                  value={formData.distribucionJornada}
                  onChange={handleInputChange}
                  placeholder="Ej: Lunes a viernes de 9:00 a 18:00 horas"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="horaInicio">Hora de inicio</Label>
                  <Input
                    id="horaInicio"
                    name="horaInicio"
                    type="time"
                    value={formData.horaInicio}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label htmlFor="horaTermino">Hora de término</Label>
                  <Input
                    id="horaTermino"
                    name="horaTermino"
                    type="time"
                    value={formData.horaTermino}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="colacion">Tiempo de colación (minutos)</Label>
                <Select value={formData.colacion} onValueChange={(value) => handleSelectChange("colacion", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tiempo de colación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 minutos</SelectItem>
                    <SelectItem value="45">45 minutos</SelectItem>
                    <SelectItem value="60">60 minutos</SelectItem>
                    <SelectItem value="90">90 minutos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 5: // Remuneración
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Remuneración</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="sueldoBase">Sueldo base (CLP)</Label>
                <Input
                  id="sueldoBase"
                  name="sueldoBase"
                  type="number"
                  value={formData.sueldoBase}
                  onChange={handleInputChange}
                  placeholder="Ej: 500000"
                />
              </div>

              <div>
                <Label htmlFor="periodoPago">Período de pago</Label>
                <Select
                  value={formData.periodoPago}
                  onValueChange={(value) => handleSelectChange("periodoPago", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el período de pago" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mensual">Mensual</SelectItem>
                    <SelectItem value="quincenal">Quincenal</SelectItem>
                    <SelectItem value="semanal">Semanal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="formaPago">Forma de pago</Label>
                <Select value={formData.formaPago} onValueChange={(value) => handleSelectChange("formaPago", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona la forma de pago" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transferencia">Transferencia bancaria</SelectItem>
                    <SelectItem value="cheque">Cheque</SelectItem>
                    <SelectItem value="efectivo">Efectivo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="incluyeGratificacion">¿Incluye gratificación legal?</Label>
                <RadioGroup
                  value={formData.incluyeGratificacion}
                  onValueChange={(value) => handleSelectChange("incluyeGratificacion", value)}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="si" id="gratificacion-si" />
                    <Label htmlFor="gratificacion-si">Sí</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="gratificacion-no" />
                    <Label htmlFor="gratificacion-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        )

      case 6: // Beneficios adicionales
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Beneficios adicionales</h2>
            <div className="space-y-4">
              <Label htmlFor="beneficiosAdicionales">Beneficios adicionales (opcional)</Label>
              <Textarea
                id="beneficiosAdicionales"
                name="beneficiosAdicionales"
                value={formData.beneficiosAdicionales}
                onChange={handleInputChange}
                placeholder="Ej: Seguro complementario de salud, bonos de desempeño, etc."
                rows={5}
              />
            </div>
          </div>
        )

      case 7: // Términos adicionales
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Términos adicionales</h2>
            <div className="space-y-4">
              <Label htmlFor="clausulasAdicionales">Cláusulas adicionales (opcional)</Label>
              <Textarea
                id="clausulasAdicionales"
                name="clausulasAdicionales"
                value={formData.clausulasAdicionales}
                onChange={handleInputChange}
                placeholder="Ingresa cualquier cláusula adicional que quieras incluir en el contrato"
                className="min-h-[100px]"
              />
            </div>
          </div>
        )

      case 8: // Vista previa
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Vista previa del contrato</h2>
              <p className="text-muted-foreground">Revisa el contrato generado y descárgalo cuando estés conforme</p>
            </div>

            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Contrato de Trabajo</h3>
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
            <h1 className="text-3xl font-bold mb-2">Contrato de Trabajo</h1>
            <p className="text-muted-foreground">
              Completa el formulario paso a paso para generar un contrato de trabajo personalizado
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
