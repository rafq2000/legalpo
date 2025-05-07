"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, Printer, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
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

export default function ContratoTrabajoPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Paso 1: Datos del empleador
    nombreEmpleador: "",
    rutEmpleador: "",
    representanteLegal: "",
    rutRepresentante: "",
    direccionEmpleador: "",
    comunaEmpleador: "",
    giroEmpleador: "",

    // Paso 2: Datos del trabajador
    nombreTrabajador: "",
    rutTrabajador: "",
    nacionalidadTrabajador: "Chilena",
    fechaNacimiento: "",
    estadoCivilTrabajador: "",
    direccionTrabajador: "",
    comunaTrabajador: "",

    // Paso 3: Tipo de contrato
    tipoContrato: "indefinido",
    fechaInicio: "",
    fechaTermino: "",
    motivoContratacion: "",
    periodosPrueba: "no",

    // Paso 4: Cargo y funciones
    cargoTrabajador: "",
    funcionesTrabajador: "",
    lugarTrabajo: "",

    // Paso 5: Jornada laboral
    tipoJornada: "completa",
    horasSemanales: "45",
    distribucionJornada: "",
    horaInicio: "",
    horaTermino: "",
    colacion: "30",

    // Paso 6: Remuneración
    sueldoBase: "",
    periodoPago: "mensual",
    formaPago: "transferencia",
    incluyeGratificacion: "si",

    // Paso 7: Beneficios adicionales
    beneficiosAdicionales: "",

    // Paso 8: Términos adicionales
    clausulasAdicionales: "",
  })

  const [showPreview, setShowPreview] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    if (step < 8) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    } else {
      setShowPreview(true)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([document.getElementById("contrato-preview")?.innerText || ""], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "contrato_trabajo.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paso 1: Datos del empleador</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="nombreEmpleador">Razón social / Nombre del empleador</Label>
                <Input
                  id="nombreEmpleador"
                  name="nombreEmpleador"
                  value={formData.nombreEmpleador}
                  onChange={handleChange}
                  placeholder="Ej: Empresa S.A."
                />
              </div>

              <div>
                <Label htmlFor="rutEmpleador">RUT empresa</Label>
                <Input
                  id="rutEmpleador"
                  name="rutEmpleador"
                  value={formData.rutEmpleador}
                  onChange={handleChange}
                  placeholder="Ej: 76.123.456-7"
                />
              </div>

              <div>
                <Label htmlFor="representanteLegal">Representante legal</Label>
                <Input
                  id="representanteLegal"
                  name="representanteLegal"
                  value={formData.representanteLegal}
                  onChange={handleChange}
                  placeholder="Nombre completo del representante"
                />
              </div>

              <div>
                <Label htmlFor="rutRepresentante">RUT representante legal</Label>
                <Input
                  id="rutRepresentante"
                  name="rutRepresentante"
                  value={formData.rutRepresentante}
                  onChange={handleChange}
                  placeholder="Ej: 12.345.678-9"
                />
              </div>

              <div>
                <Label htmlFor="direccionEmpleador">Dirección empresa</Label>
                <Input
                  id="direccionEmpleador"
                  name="direccionEmpleador"
                  value={formData.direccionEmpleador}
                  onChange={handleChange}
                  placeholder="Dirección completa"
                />
              </div>

              <div>
                <Label htmlFor="comunaEmpleador">Comuna</Label>
                <Input
                  id="comunaEmpleador"
                  name="comunaEmpleador"
                  value={formData.comunaEmpleador}
                  onChange={handleChange}
                  placeholder="Ej: Santiago"
                />
              </div>

              <div>
                <Label htmlFor="giroEmpleador">Giro o actividad</Label>
                <Input
                  id="giroEmpleador"
                  name="giroEmpleador"
                  value={formData.giroEmpleador}
                  onChange={handleChange}
                  placeholder="Ej: Desarrollo de software"
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paso 2: Datos del trabajador</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="nombreTrabajador">Nombre completo</Label>
                <Input
                  id="nombreTrabajador"
                  name="nombreTrabajador"
                  value={formData.nombreTrabajador}
                  onChange={handleChange}
                  placeholder="Nombre y apellidos"
                />
              </div>

              <div>
                <Label htmlFor="rutTrabajador">RUT</Label>
                <Input
                  id="rutTrabajador"
                  name="rutTrabajador"
                  value={formData.rutTrabajador}
                  onChange={handleChange}
                  placeholder="Ej: 12.345.678-9"
                />
              </div>

              <div>
                <Label htmlFor="nacionalidadTrabajador">Nacionalidad</Label>
                <Input
                  id="nacionalidadTrabajador"
                  name="nacionalidadTrabajador"
                  value={formData.nacionalidadTrabajador}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  placeholder="Dirección completa"
                />
              </div>

              <div>
                <Label htmlFor="comunaTrabajador">Comuna</Label>
                <Input
                  id="comunaTrabajador"
                  name="comunaTrabajador"
                  value={formData.comunaTrabajador}
                  onChange={handleChange}
                  placeholder="Ej: Santiago"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paso 3: Tipo de contrato</h2>
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
                  onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paso 4: Cargo y funciones</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cargoTrabajador">Cargo o puesto</Label>
                <Input
                  id="cargoTrabajador"
                  name="cargoTrabajador"
                  value={formData.cargoTrabajador}
                  onChange={handleChange}
                  placeholder="Ej: Desarrollador de software"
                />
              </div>

              <div>
                <Label htmlFor="funcionesTrabajador">Funciones principales</Label>
                <Textarea
                  id="funcionesTrabajador"
                  name="funcionesTrabajador"
                  value={formData.funcionesTrabajador}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  placeholder="Dirección donde se desempeñarán las funciones"
                />
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paso 5: Jornada laboral</h2>
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
                  onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="horaTermino">Hora de término</Label>
                  <Input
                    id="horaTermino"
                    name="horaTermino"
                    type="time"
                    value={formData.horaTermino}
                    onChange={handleChange}
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

      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paso 6: Remuneración</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="sueldoBase">Sueldo base (CLP)</Label>
                <Input
                  id="sueldoBase"
                  name="sueldoBase"
                  type="number"
                  value={formData.sueldoBase}
                  onChange={handleChange}
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
                <Label>¿Incluye gratificación legal?</Label>
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

      case 7:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paso 7: Beneficios adicionales</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="beneficiosAdicionales">Beneficios adicionales (opcional)</Label>
                <Textarea
                  id="beneficiosAdicionales"
                  name="beneficiosAdicionales"
                  value={formData.beneficiosAdicionales}
                  onChange={handleChange}
                  placeholder="Ej: Seguro complementario de salud, bonos de desempeño, etc."
                  rows={5}
                />
              </div>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paso 8: Términos adicionales</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="clausulasAdicionales">Cláusulas adicionales (opcional)</Label>
                <Textarea
                  id="clausulasAdicionales"
                  name="clausulasAdicionales"
                  value={formData.clausulasAdicionales}
                  onChange={handleChange}
                  placeholder="Ingresa cualquier cláusula adicional que quieras incluir en el contrato"
                  rows={5}
                />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const renderContrato = () => {
    // Formatear fechas
    const fechaInicio = formData.fechaInicio
      ? new Date(formData.fechaInicio).toLocaleDateString("es-CL")
      : "[FECHA DE INICIO]"
    const fechaTermino = formData.fechaTermino
      ? new Date(formData.fechaTermino).toLocaleDateString("es-CL")
      : "[FECHA DE TÉRMINO]"
    const fechaActual = new Date().toLocaleDateString("es-CL")

    // Convertir montos a palabras
    const sueldoBasePalabras = formData.sueldoBase
      ? numeroALetras(Number.parseInt(formData.sueldoBase))
      : "[MONTO EN PALABRAS]"

    return (
      <div id="contrato-preview" className="space-y-6 text-sm leading-relaxed">
        <h1 className="text-2xl font-bold text-center">CONTRATO DE TRABAJO</h1>

        <p>
          En {formData.comunaEmpleador || "[COMUNA]"}, a {fechaActual}, entre{" "}
          {formData.nombreEmpleador || "[NOMBRE EMPLEADOR]"}, RUT {formData.rutEmpleador || "[RUT EMPLEADOR]"},
          representada legalmente por don/doña {formData.representanteLegal || "[REPRESENTANTE LEGAL]"}, RUT{" "}
          {formData.rutRepresentante || "[RUT REPRESENTANTE]"}, ambos con domicilio en{" "}
          {formData.direccionEmpleador || "[DIRECCIÓN EMPLEADOR]"}, comuna de {formData.comunaEmpleador || "[COMUNA]"},
          en adelante "el empleador", y don/doña {formData.nombreTrabajador || "[NOMBRE TRABAJADOR]"}, RUT{" "}
          {formData.rutTrabajador || "[RUT TRABAJADOR]"}, de nacionalidad{" "}
          {formData.nacionalidadTrabajador || "[NACIONALIDAD]"}, estado civil{" "}
          {formData.estadoCivilTrabajador || "[ESTADO CIVIL]"}, con domicilio en{" "}
          {formData.direccionTrabajador || "[DIRECCIÓN TRABAJADOR]"}, comuna de{" "}
          {formData.comunaTrabajador || "[COMUNA]"}, en adelante "el trabajador", se ha convenido el siguiente contrato
          de trabajo:
        </p>

        <h2 className="text-lg font-semibold">PRIMERO: ANTECEDENTES</h2>
        <p>El empleador es una empresa dedicada a {formData.giroEmpleador || "[GIRO EMPRESA]"}.</p>

        <h2 className="text-lg font-semibold">SEGUNDO: FUNCIÓN Y LUGAR DE TRABAJO</h2>
        <p>
          El trabajador se obliga a desempeñar el cargo de {formData.cargoTrabajador || "[CARGO]"}, realizando
          principalmente las siguientes funciones: {formData.funcionesTrabajador || "[FUNCIONES]"}.
        </p>
        <p>
          El trabajador prestará sus servicios en {formData.lugarTrabajo || "[LUGAR DE TRABAJO]"}, sin perjuicio de la
          facultad del empleador de alterar, por causa justificada, la naturaleza de los servicios, o el sitio o recinto
          en que ellos deban prestarse, con la sola limitación de que se trate de labores similares y que el nuevo sitio
          o recinto quede dentro de la misma localidad o ciudad.
        </p>

        <h2 className="text-lg font-semibold">TERCERO: JORNADA DE TRABAJO</h2>
        <p>
          La jornada ordinaria de trabajo será de {formData.horasSemanales || "[HORAS]"} horas semanales, distribuidas
          de la siguiente manera: {formData.distribucionJornada || "[DISTRIBUCIÓN]"}.
        </p>
        <p>
          El horario de trabajo será de {formData.horaInicio || "[HORA INICIO]"} a{" "}
          {formData.horaTermino || "[HORA TÉRMINO]"} horas, con un tiempo de colación de{" "}
          {formData.colacion || "[COLACIÓN]"} minutos, entre las [HORA COLACIÓN INICIO] y [HORA COLACIÓN TÉRMINO] horas,
          tiempo que no se considerará trabajado para computar la jornada diaria.
        </p>

        <h2 className="text-lg font-semibold">CUARTO: PLAZO DEL CONTRATO</h2>
        <p>
          {formData.tipoContrato === "indefinido"
            ? `El presente contrato tendrá una duración indefinida, iniciando sus efectos el ${fechaInicio}.`
            : formData.tipoContrato === "plazo-fijo"
              ? `El presente contrato tendrá una duración de plazo fijo, iniciando sus efectos el ${fechaInicio} y finalizando el ${fechaTermino}.`
              : `El presente contrato durará hasta el término de la obra o faena consistente en ${formData.motivoContratacion || "[DESCRIPCIÓN OBRA/FAENA]"}, iniciando sus efectos el ${fechaInicio}.`}
          {formData.periodosPrueba === "si"
            ? " Las partes acuerdan que los primeros 15 días de vigencia del contrato se considerarán como período de prueba, pudiendo ponerse término al contrato en dicho período por simple desahucio de cualquiera de las partes."
            : ""}
        </p>

        <h2 className="text-lg font-semibold">QUINTO: REMUNERACIÓN</h2>
        <p>
          El empleador se obliga a pagar al trabajador, como remuneración por sus servicios, la suma bruta mensual de $
          {formData.sueldoBase || "[MONTO]"}
          (pesos chilenos).
        </p>
        <p>
          La remuneración se pagará por períodos {formData.periodoPago || "[PERÍODO]"} vencidos, el último día hábil de
          cada{" "}
          {formData.periodoPago === "mensual" ? "mes" : formData.periodoPago === "quincenal" ? "quincena" : "semana"},
          mediante{" "}
          {formData.formaPago === "transferencia"
            ? "transferencia electrónica"
            : formData.formaPago === "cheque"
              ? "cheque nominativo"
              : "dinero en efectivo"}
          .
        </p>
        <p>
          {formData.incluyeGratificacion === "si"
            ? "El empleador pagará al trabajador una gratificación anual equivalente al 25% de lo devengado en el respectivo ejercicio comercial por concepto de remuneraciones mensuales, con un límite de 4,75 Ingresos Mínimos Mensuales, conforme a lo dispuesto en el artículo 50 del Código del Trabajo."
            : "El trabajador no percibirá gratificación legal."}
        </p>

        {formData.beneficiosAdicionales && (
          <>
            <h2 className="text-lg font-semibold">SEXTO: BENEFICIOS ADICIONALES</h2>
            <p>{formData.beneficiosAdicionales}</p>
          </>
        )}

        <h2 className="text-lg font-semibold">
          {formData.beneficiosAdicionales ? "SÉPTIMO" : "SEXTO"}: COTIZACIONES PREVISIONALES
        </h2>
        <p>
          El empleador efectuará las retenciones legales correspondientes a las cotizaciones previsionales y de salud, y
          las enterará en las instituciones que correspondan de acuerdo a la legislación vigente.
        </p>

        <h2 className="text-lg font-semibold">
          {formData.beneficiosAdicionales ? "OCTAVO" : "SÉPTIMO"}: FERIADO ANUAL
        </h2>
        <p>
          El trabajador tendrá derecho a un feriado anual de 15 días hábiles con remuneración íntegra, después de un año
          de servicio, de acuerdo a lo establecido en el artículo 67 y siguientes del Código del Trabajo.
        </p>

        <h2 className="text-lg font-semibold">
          {formData.beneficiosAdicionales ? "NOVENO" : "OCTAVO"}: TÉRMINO DEL CONTRATO
        </h2>
        <p>
          El presente contrato podrá terminar por las causales establecidas en los artículos 159, 160 y 161 del Código
          del Trabajo.
        </p>

        {formData.clausulasAdicionales && (
          <>
            <h2 className="text-lg font-semibold">
              {formData.beneficiosAdicionales ? "DÉCIMO" : "NOVENO"}: CLÁUSULAS ADICIONALES
            </h2>
            <p>{formData.clausulasAdicionales}</p>
          </>
        )}

        <h2 className="text-lg font-semibold">
          {formData.clausulasAdicionales
            ? formData.beneficiosAdicionales
              ? "DÉCIMO PRIMERO"
              : "DÉCIMO"
            : formData.beneficiosAdicionales
              ? "DÉCIMO"
              : "NOVENO"}
          : EJEMPLARES
        </h2>
        <p>
          El presente contrato se firma en dos ejemplares, declarando el trabajador haber recibido en este acto un
          ejemplar de dicho contrato, que es el fiel reflejo de la relación laboral existente entre las partes.
        </p>

        <div className="pt-10 grid grid-cols-2 gap-10">
          <div className="text-center">
            <p className="border-t border-black pt-2">EMPLEADOR</p>
            <p>{formData.nombreEmpleador || "[NOMBRE EMPLEADOR]"}</p>
            <p>RUT: {formData.rutEmpleador || "[RUT]"}</p>
          </div>
          <div className="text-center">
            <p className="border-t border-black pt-2">TRABAJADOR</p>
            <p>{formData.nombreTrabajador || "[NOMBRE TRABAJADOR]"}</p>
            <p>RUT: {formData.rutTrabajador || "[RUT]"}</p>
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
            <h1 className="text-2xl font-bold">Generador de Contrato de Trabajo</h1>
          </div>

          {!showPreview ? (
            <Card>
              <CardContent className="pt-6">
                {/* Indicador de progreso */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((stepNumber) => (
                      <button
                        key={stepNumber}
                        onClick={() => setStep(stepNumber)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          step === stepNumber
                            ? "bg-primary text-primary-foreground"
                            : step > stepNumber
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {stepNumber}
                      </button>
                    ))}
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${((step - 1) / 7) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {renderStep()}

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={prevStep} disabled={step === 1}>
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Anterior
                  </Button>
                  <Button onClick={nextStep}>
                    {step < 8 ? (
                      <>
                        Siguiente
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </>
                    ) : (
                      "Generar contrato"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div>
              <div className="bg-muted p-4 rounded-lg mb-6 flex flex-wrap gap-2 items-center justify-between">
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold mr-4">Vista previa del contrato</h2>
                  <TextToSpeech
                    text={document.getElementById("contrato-preview")?.innerText || ""}
                    buttonLabel="Escuchar contrato"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setShowPreview(false)}>
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Editar
                  </Button>
                  <Button variant="outline" onClick={handlePrint}>
                    <Printer className="h-4 w-4 mr-1" />
                    Imprimir
                  </Button>
                  <Button onClick={handleDownload}>
                    <Download className="h-4 w-4 mr-1" />
                    Descargar
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 border rounded-lg shadow-sm">{renderContrato()}</div>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
