"use client"

import type React from "react"

import { useState, useEffect } from "react"
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
import { useActionGate } from "@/contexts/action-gate-context"
import { ActionGateModal } from "@/components/action-gate-modal"
import { useSession } from "next-auth/react"

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

export default function ContratoArriendoPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Paso 1: Tipo de propiedad
    tipoPropiedad: "casa",
    direccionPropiedad: "",
    comunaPropiedad: "",
    regionPropiedad: "",

    // Paso 2: Datos del arrendador
    nombreArrendador: "",
    rutArrendador: "",
    nacionalidadArrendador: "Chilena",
    estadoCivilArrendador: "",
    profesionArrendador: "",
    domicilioArrendador: "",
    comunaArrendador: "",

    // Paso 3: Datos del arrendatario
    nombreArrendatario: "",
    rutArrendatario: "",
    nacionalidadArrendatario: "Chilena",
    estadoCivilArrendatario: "",
    profesionArrendatario: "",
    domicilioArrendatario: "",
    comunaArrendatario: "",

    // Paso 4: Detalles del arriendo
    duracionContrato: "12",
    fechaInicio: "",
    montoArriendo: "",
    formaPago: "transferencia",
    fechaPago: "1",

    // Paso 5: Garantía
    montoGarantia: "",

    // Paso 6: Servicios y gastos
    incluyeGastoComun: "no",
    montoGastoComun: "",
    serviciosIncluidos: "",

    // Paso 7: Términos adicionales
    permiteMascotas: "no",
    permiteModificaciones: "no",
    clausulasAdicionales: "",
  })

  const [showPreview, setShowPreview] = useState(false)
  const [actionChecked, setActionChecked] = useState(false)

  const { data: session } = useSession()
  const { incrementAction } = useActionGate()

  // Verificar si el usuario está autenticado o si aún tiene acciones disponibles
  useEffect(() => {
    // Solo verificamos una vez al cargar la página
    if (!actionChecked && !session) {
      setActionChecked(true)
      // No incrementamos la acción aquí, solo al generar el contrato
    }
  }, [session, actionChecked])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    if (step < 7) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    } else {
      // Si el usuario no está autenticado, verificamos si puede realizar esta acción
      if (!session) {
        const canProceed = incrementAction()
        if (!canProceed) {
          return // El modal se mostrará automáticamente
        }
      }

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
    element.download = "contrato_arriendo.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paso 1: Información de la propiedad</h2>
            <div className="space-y-4">
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
                    <SelectItem value="bodega">Bodega</SelectItem>
                    <SelectItem value="terreno">Terreno</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="direccionPropiedad">Dirección completa</Label>
                <Input
                  id="direccionPropiedad"
                  name="direccionPropiedad"
                  value={formData.direccionPropiedad}
                  onChange={handleChange}
                  placeholder="Ej: Calle Los Olmos 123, depto 501"
                />
              </div>

              <div>
                <Label htmlFor="comunaPropiedad">Comuna</Label>
                <Input
                  id="comunaPropiedad"
                  name="comunaPropiedad"
                  value={formData.comunaPropiedad}
                  onChange={handleChange}
                  placeholder="Ej: Santiago"
                />
              </div>

              <div>
                <Label htmlFor="regionPropiedad">Región</Label>
                <Input
                  id="regionPropiedad"
                  name="regionPropiedad"
                  value={formData.regionPropiedad}
                  onChange={handleChange}
                  placeholder="Ej: Metropolitana"
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paso 2: Datos del arrendador (propietario)</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="nombreArrendador">Nombre completo</Label>
                <Input
                  id="nombreArrendador"
                  name="nombreArrendador"
                  value={formData.nombreArrendador}
                  onChange={handleChange}
                  placeholder="Nombre y apellidos"
                />
              </div>

              <div>
                <Label htmlFor="rutArrendador">RUT</Label>
                <Input
                  id="rutArrendador"
                  name="rutArrendador"
                  value={formData.rutArrendador}
                  onChange={handleChange}
                  placeholder="Ej: 12.345.678-9"
                />
              </div>

              <div>
                <Label htmlFor="nacionalidadArrendador">Nacionalidad</Label>
                <Input
                  id="nacionalidadArrendador"
                  name="nacionalidadArrendador"
                  value={formData.nacionalidadArrendador}
                  onChange={handleChange}
                  placeholder="Ej: Chilena"
                />
              </div>

              <div>
                <Label htmlFor="estadoCivilArrendador">Estado civil</Label>
                <Select
                  value={formData.estadoCivilArrendador}
                  onValueChange={(value) => handleSelectChange("estadoCivilArrendador", value)}
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
                <Label htmlFor="profesionArrendador">Profesión u oficio</Label>
                <Input
                  id="profesionArrendador"
                  name="profesionArrendador"
                  value={formData.profesionArrendador}
                  onChange={handleChange}
                  placeholder="Ej: Ingeniero"
                />
              </div>

              <div>
                <Label htmlFor="domicilioArrendador">Domicilio</Label>
                <Input
                  id="domicilioArrendador"
                  name="domicilioArrendador"
                  value={formData.domicilioArrendador}
                  onChange={handleChange}
                  placeholder="Dirección completa"
                />
              </div>

              <div>
                <Label htmlFor="comunaArrendador">Comuna</Label>
                <Input
                  id="comunaArrendador"
                  name="comunaArrendador"
                  value={formData.comunaArrendador}
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
            <h2 className="text-xl font-semibold">Paso 3: Datos del arrendatario (inquilino)</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="nombreArrendatario">Nombre completo</Label>
                <Input
                  id="nombreArrendatario"
                  name="nombreArrendatario"
                  value={formData.nombreArrendatario}
                  onChange={handleChange}
                  placeholder="Nombre y apellidos"
                />
              </div>

              <div>
                <Label htmlFor="rutArrendatario">RUT</Label>
                <Input
                  id="rutArrendatario"
                  name="rutArrendatario"
                  value={formData.rutArrendatario}
                  onChange={handleChange}
                  placeholder="Ej: 12.345.678-9"
                />
              </div>

              <div>
                <Label htmlFor="nacionalidadArrendatario">Nacionalidad</Label>
                <Input
                  id="nacionalidadArrendatario"
                  name="nacionalidadArrendatario"
                  value={formData.nacionalidadArrendatario}
                  onChange={handleChange}
                  placeholder="Ej: Chilena"
                />
              </div>

              <div>
                <Label htmlFor="estadoCivilArrendatario">Estado civil</Label>
                <Select
                  value={formData.estadoCivilArrendatario}
                  onValueChange={(value) => handleSelectChange("estadoCivilArrendatario", value)}
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
                <Label htmlFor="profesionArrendatario">Profesión u oficio</Label>
                <Input
                  id="profesionArrendatario"
                  name="profesionArrendatario"
                  value={formData.profesionArrendatario}
                  onChange={handleChange}
                  placeholder="Ej: Ingeniero"
                />
              </div>

              <div>
                <Label htmlFor="domicilioArrendatario">Domicilio</Label>
                <Input
                  id="domicilioArrendatario"
                  name="domicilioArrendatario"
                  value={formData.domicilioArrendatario}
                  onChange={handleChange}
                  placeholder="Dirección completa"
                />
              </div>

              <div>
                <Label htmlFor="comunaArrendatario">Comuna</Label>
                <Input
                  id="comunaArrendatario"
                  name="comunaArrendatario"
                  value={formData.comunaArrendatario}
                  onChange={handleChange}
                  placeholder="Ej: Santiago"
                />
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paso 4: Detalles del arriendo</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="duracionContrato">Duración del contrato (meses)</Label>
                <Select
                  value={formData.duracionContrato}
                  onValueChange={(value) => handleSelectChange("duracionContrato", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona la duración" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 mes</SelectItem>
                    <SelectItem value="3">3 meses</SelectItem>
                    <SelectItem value="6">6 meses</SelectItem>
                    <SelectItem value="12">12 meses</SelectItem>
                    <SelectItem value="24">24 meses</SelectItem>
                    <SelectItem value="36">36 meses</SelectItem>
                    <SelectItem value="indefinido">Indefinido</SelectItem>
                  </SelectContent>
                </Select>
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

              <div>
                <Label htmlFor="montoArriendo">Monto del arriendo (CLP)</Label>
                <Input
                  id="montoArriendo"
                  name="montoArriendo"
                  type="number"
                  value={formData.montoArriendo}
                  onChange={handleChange}
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
                    <SelectItem value="efectivo">Efectivo</SelectItem>
                    <SelectItem value="transferencia">Transferencia bancaria</SelectItem>
                    <SelectItem value="cheque">Cheque</SelectItem>
                    <SelectItem value="deposito">Depósito</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="fechaPago">Día de pago mensual</Label>
                <Select value={formData.fechaPago} onValueChange={(value) => handleSelectChange("fechaPago", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el día de pago" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 de cada mes</SelectItem>
                    <SelectItem value="5">5 de cada mes</SelectItem>
                    <SelectItem value="10">10 de cada mes</SelectItem>
                    <SelectItem value="15">15 de cada mes</SelectItem>
                    <SelectItem value="20">20 de cada mes</SelectItem>
                    <SelectItem value="ultimo">Último día del mes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paso 5: Garantía</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="montoGarantia">Monto de la garantía (CLP)</Label>
                <Input
                  id="montoGarantia"
                  name="montoGarantia"
                  type="number"
                  value={formData.montoGarantia}
                  onChange={handleChange}
                  placeholder="Ej: 350000"
                />
                <p className="text-sm text-muted-foreground mt-1">Generalmente equivale a un mes de arriendo</p>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paso 6: Servicios y gastos</h2>
            <div className="space-y-4">
              <div>
                <Label>¿Incluye gastos comunes?</Label>
                <RadioGroup
                  value={formData.incluyeGastoComun}
                  onValueChange={(value) => handleSelectChange("incluyeGastoComun", value)}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="si" id="gasto-comun-si" />
                    <Label htmlFor="gasto-comun-si">Sí</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="gasto-comun-no" />
                    <Label htmlFor="gasto-comun-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.incluyeGastoComun === "si" && (
                <div>
                  <Label htmlFor="montoGastoComun">Monto aproximado de gastos comunes (CLP)</Label>
                  <Input
                    id="montoGastoComun"
                    name="montoGastoComun"
                    type="number"
                    value={formData.montoGastoComun}
                    onChange={handleChange}
                    placeholder="Ej: 50000"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="serviciosIncluidos">Servicios incluidos (opcional)</Label>
                <Textarea
                  id="serviciosIncluidos"
                  name="serviciosIncluidos"
                  value={formData.serviciosIncluidos}
                  onChange={handleChange}
                  placeholder="Ej: Agua, luz, internet, etc."
                />
              </div>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paso 7: Términos adicionales</h2>
            <div className="space-y-4">
              <div>
                <Label>¿Se permiten mascotas?</Label>
                <RadioGroup
                  value={formData.permiteMascotas}
                  onValueChange={(value) => handleSelectChange("permiteMascotas", value)}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="si" id="mascotas-si" />
                    <Label htmlFor="mascotas-si">Sí</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="mascotas-no" />
                    <Label htmlFor="mascotas-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>¿Se permiten modificaciones a la propiedad?</Label>
                <RadioGroup
                  value={formData.permiteModificaciones}
                  onValueChange={(value) => handleSelectChange("permiteModificaciones", value)}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="si" id="modificaciones-si" />
                    <Label htmlFor="modificaciones-si">Sí</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="modificaciones-no" />
                    <Label htmlFor="modificaciones-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

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
    // Formatear la fecha de inicio
    const fechaInicio = formData.fechaInicio
      ? new Date(formData.fechaInicio).toLocaleDateString("es-CL")
      : "[FECHA DE INICIO]"

    // Calcular fecha de término si no es indefinido
    let fechaTermino = "[FECHA DE TÉRMINO]"
    if (formData.fechaInicio && formData.duracionContrato !== "indefinido") {
      const fecha = new Date(formData.fechaInicio)
      fecha.setMonth(fecha.getMonth() + Number.parseInt(formData.duracionContrato))
      fechaTermino = fecha.toLocaleDateString("es-CL")
    }

    // Convertir montos a palabras
    const montoArriendoPalabras = formData.montoArriendo
      ? numeroALetras(Number.parseInt(formData.montoArriendo))
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
          {formData.regionPropiedad || "[REGIÓN]"}.
        </p>

        <h2 className="text-lg font-semibold">SEGUNDO: OBJETO DEL CONTRATO</h2>
        <p>
          Por el presente instrumento, el ARRENDADOR da en arrendamiento al ARRENDATARIO, quien acepta para sí, el
          inmueble individualizado en la cláusula primera, con todo lo edificado y plantado en él.
        </p>

        <h2 className="text-lg font-semibold">TERCERO: PLAZO</h2>
        <p>
          El presente contrato tendrá una duración de{" "}
          {formData.duracionContrato === "indefinido" ? "plazo indefinido" : `${formData.duracionContrato} meses`}, a
          contar del {fechaInicio}
          {formData.duracionContrato !== "indefinido" ? ` y hasta el ${fechaTermino}` : ""}.
          {formData.duracionContrato !== "indefinido"
            ? " Al vencimiento del plazo de vigencia del contrato, éste se prorrogará automática y sucesivamente por períodos iguales, a menos que alguna de las partes manifieste a la otra su intención de no renovarlo, mediante carta certificada dirigida al domicilio de la otra parte con, a lo menos, 30 días de anticipación al vencimiento del plazo original o de cualquiera de sus prórrogas."
            : " Cualquiera de las partes podrá poner término al presente contrato dando aviso a la otra mediante carta certificada dirigida al domicilio registrado en este contrato, con a lo menos 30 días de anticipación."}
        </p>

        <h2 className="text-lg font-semibold">CUARTO: RENTA DE ARRENDAMIENTO</h2>
        <p>
          La renta mensual de arrendamiento será la suma de ${formData.montoArriendo || "[MONTO]"} (pesos chilenos), que
          se pagará por mes {formData.fechaPago === "ultimo" ? "vencido" : "anticipado"}, dentro de los primeros{" "}
          {formData.fechaPago === "ultimo" ? "5 días del mes siguiente" : `${formData.fechaPago} días de cada mes`},
          mediante{" "}
          {formData.formaPago === "efectivo"
            ? "pago en efectivo"
            : formData.formaPago === "transferencia"
              ? "transferencia electrónica"
              : formData.formaPago === "cheque"
                ? "cheque"
                : formData.formaPago === "deposito"
                  ? "depósito bancario"
                  : "[FORMA DE PAGO]"}
          .
        </p>

        <h2 className="text-lg font-semibold">QUINTO: GARANTÍA</h2>
        <p>
          A la firma del presente contrato, el ARRENDATARIO entrega al ARRENDADOR la suma de $
          {formData.montoGarantia || "[MONTO GARANTÍA]"}
          (pesos chilenos), equivalente a{" "}
          {formData.montoGarantia && formData.montoArriendo
            ? (Number.parseInt(formData.montoGarantia) / Number.parseInt(formData.montoArriendo)).toFixed(1)
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
          {formData.incluyeGastoComun === "si"
            ? ` Los gastos comunes, que ascienden aproximadamente a $${formData.montoGastoComun || "[MONTO]"} mensuales, serán de cargo del ARRENDADOR.`
            : " Los gastos comunes serán de cargo del ARRENDATARIO, quien deberá pagarlos directamente a la administración del edificio o condominio."}
          {formData.serviciosIncluidos
            ? ` El ARRENDADOR incluye en el precio del arriendo los siguientes servicios: ${formData.serviciosIncluidos}.`
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

        {formData.clausulasAdicionales && (
          <>
            <h2 className="text-lg font-semibold">DÉCIMO PRIMERO: CLÁUSULAS ADICIONALES</h2>
            <p>{formData.clausulasAdicionales}</p>
          </>
        )}

        <h2 className="text-lg font-semibold">
          {formData.clausulasAdicionales ? "DÉCIMO SEGUNDO" : "DÉCIMO PRIMERO"}: DOMICILIO
        </h2>
        <p>
          Para todos los efectos legales derivados del presente contrato, las partes fijan su domicilio en la comuna de
          {formData.comunaPropiedad || "[COMUNA]"} y se someten a la jurisdicción de sus Tribunales de Justicia.
        </p>

        <h2 className="text-lg font-semibold">
          {formData.clausulasAdicionales ? "DÉCIMO TERCERO" : "DÉCIMO SEGUNDO"}: EJEMPLARES
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

          {!showPreview ? (
            <Card>
              <CardContent className="pt-6">
                {/* Indicador de progreso */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((stepNumber) => (
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
                      style={{ width: `${((step - 1) / 6) * 100}%` }}
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
                    {step < 7 ? (
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
      <ActionGateModal />
    </div>
  )
}
