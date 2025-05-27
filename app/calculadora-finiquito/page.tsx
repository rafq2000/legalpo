"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, Calendar, DollarSign, Calculator, ChevronRight, HelpCircle, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { ShareButton } from "@/components/share-button"

// Añadir la importación del componente AdUnit al inicio del archivo
import { AdUnit } from "@/components/ad-unit"

// Función para formatear dinero
const formatMoney = (amount: number) => {
  return `$${Math.round(amount).toLocaleString("es-CL")}`
}

// Tipos
interface FiniquitoFormData {
  causalTermino: string
  fechaIngreso: string
  fechaTermino: string
  diasVacaciones: number
  avisoPrevio: boolean
  sueldoBase: number
  otrasRemuneracionesImponibles: number
  otrasRemuneracionesNoImponibles: number
  gratificacionesProrrateo: boolean
  remuneracionVariable: boolean
  variableUltimosTresMeses: number[]
}

interface FiniquitoResultado {
  tiempoServicio: string
  sueldoMensual: number
  remuneracionesPendientes: number
  indemnizacionAvisoPrevio: number
  indemnizacionAnosServicio: number
  vacacionesProporcionales: number
  feriadoProporcional: number
  gratificacionesProporcionales: number
  total: number
  formulas: {
    remuneraciones: string
    indemnizacionAviso: string
    indemnizacionAnos: string
    vacaciones: string
    feriado: string
    gratificaciones: string
  }
}

// Componente principal
export default function CalculadoraFiniquito() {
  // Estados
  const [activeTab, setActiveTab] = useState("datos")
  const [formData, setFormData] = useState<FiniquitoFormData>({
    causalTermino: "",
    fechaIngreso: "",
    fechaTermino: "",
    diasVacaciones: 0,
    avisoPrevio: false,
    sueldoBase: 500000,
    otrasRemuneracionesImponibles: 0,
    otrasRemuneracionesNoImponibles: 0,
    gratificacionesProrrateo: true,
    remuneracionVariable: false,
    variableUltimosTresMeses: [0, 0, 0],
  })
  const [resultado, setResultado] = useState<FiniquitoResultado | null>(null)
  const [ingresoMinimo, setIngresoMinimo] = useState(510636) // Valor actualizado 2025
  const [valorUTM, setValorUTM] = useState(65287) // Valor UTM Marzo 2025 (SII)
  const [expandedDetails, setExpandedDetails] = useState<string[]>([])
  const [isCalculating, setIsCalculating] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Opciones de causales
  const causalesOptions = [
    { value: "art159-2", label: "Art. 159 número 2: Renuncia" },
    { value: "art159-4", label: "Art. 159 número 4: Vencimiento del plazo" },
    { value: "art159-5", label: "Art. 159 número 5: Conclusión del trabajo o servicio" },
    { value: "art161", label: "Art. 161 inciso 1: Necesidades de la empresa" },
    { value: "art160", label: "Art. 160: Causales imputables al trabajador" },
    { value: "art159-1", label: "Art. 159 número 1: Mutuo acuerdo" },
  ]

  // Manejadores de eventos
  const handleInputChange = (field: keyof FiniquitoFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleVariableChange = (index: number, value: number) => {
    const newVariables = [...formData.variableUltimosTresMeses]
    newVariables[index] = value
    setFormData((prev) => ({ ...prev, variableUltimosTresMeses: newVariables }))
  }

  const toggleDetail = (id: string) => {
    setExpandedDetails((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  // Función para calcular el finiquito
  const calcularFiniquito = () => {
    setError(null) // Limpiar errores previos

    if (!validarFormulario()) {
      return
    }

    setIsCalculating(true)

    // Simulamos un pequeño retraso para mostrar la animación
    setTimeout(() => {
      try {
        const datos = obtenerDatosFormulario()
        const resultadoCalculado = calcular(datos)
        setResultado(resultadoCalculado)
        setIsCalculating(false)
        setActiveTab("resultado")
      } catch (error) {
        console.error("Error al calcular finiquito:", error)
        setError("Ocurrió un error al calcular el finiquito. Por favor verifica los datos ingresados.")
        setIsCalculating(false)
      }
    }, 1200)
  }

  // Validación del formulario
  const validarFormulario = () => {
    // Validación de la primera pestaña (datos)
    if (activeTab === "datos") {
      const { causalTermino, fechaIngreso, fechaTermino } = formData
      if (!causalTermino) {
        alert("Por favor selecciona una causal de término.")
        return false
      }
      if (!fechaIngreso) {
        alert("Por favor ingresa la fecha de ingreso.")
        return false
      }
      if (!fechaTermino) {
        alert("Por favor ingresa la fecha de término.")
        return false
      }

      // Validar que la fecha de término sea posterior a la fecha de ingreso
      if (new Date(fechaTermino) <= new Date(fechaIngreso)) {
        alert("La fecha de término debe ser posterior a la fecha de ingreso.")
        return false
      }

      return true
    }

    // Validación de la segunda pestaña (remuneraciones)
    if (activeTab === "remuneraciones") {
      const { sueldoBase } = formData
      if (!sueldoBase || sueldoBase <= 0) {
        alert("Por favor ingresa un sueldo base válido.")
        return false
      }

      // Si tiene remuneración variable, validar que haya ingresado al menos un valor
      if (formData.remuneracionVariable) {
        const hasVariableValue = formData.variableUltimosTresMeses.some((value) => value > 0)
        if (!hasVariableValue) {
          alert("Has seleccionado remuneración variable. Por favor ingresa al menos un valor.")
          return false
        }
      }

      return true
    }

    return true
  }

  // Obtener datos del formulario
  const obtenerDatosFormulario = () => {
    const fechaIngreso = new Date(formData.fechaIngreso)
    const fechaTermino = new Date(formData.fechaTermino)

    // Calcular años de servicio
    const anosServicio = calcularAnosServicio(fechaIngreso, fechaTermino)

    // Remuneraciones
    const sueldoBase = formData.sueldoBase
    const otrasRemuneracionesImponibles = formData.otrasRemuneracionesImponibles

    // Remuneración variable
    let remuneracionVariableTotal = 0
    if (formData.remuneracionVariable) {
      remuneracionVariableTotal = formData.variableUltimosTresMeses.reduce((a, b) => a + b, 0) / 3
    }

    // Calcular sueldo mensual total
    const sueldoMensual = sueldoBase + otrasRemuneracionesImponibles + remuneracionVariableTotal

    // Calcular días trabajados sin pagar (último mes)
    const diasTrabajadosSinPagar = fechaTermino.getDate()

    return {
      causalTermino: formData.causalTermino,
      fechaIngreso,
      fechaTermino,
      anosServicio,
      sueldoBase,
      otrasRemuneracionesImponibles,
      otrasRemuneracionesNoImponibles: formData.otrasRemuneracionesNoImponibles,
      remuneracionVariableTotal,
      sueldoMensual,
      diasVacacionesTomadas: formData.diasVacaciones,
      avisoPrevio: formData.avisoPrevio,
      gratificacionesProrrateo: formData.gratificacionesProrrateo,
      diasTrabajadosSinPagar,
    }
  }

  // Funciones de cálculo
  const calcular = (datos: any): FiniquitoResultado => {
    // Inicializar resultado
    const resultado: FiniquitoResultado = {
      tiempoServicio: formatTiempoServicio(datos.anosServicio),
      sueldoMensual: datos.sueldoMensual,
      remuneracionesPendientes: 0,
      indemnizacionAvisoPrevio: 0,
      indemnizacionAnosServicio: 0,
      vacacionesProporcionales: 0,
      feriadoProporcional: 0,
      gratificacionesProporcionales: 0,
      total: 0,
      formulas: {
        remuneraciones: "",
        indemnizacionAviso: "",
        indemnizacionAnos: "",
        vacaciones: "",
        feriado: "",
        gratificaciones: "",
      },
    }

    // Calcular remuneraciones pendientes
    resultado.remuneracionesPendientes = calcularRemuneracionesPendientes(datos)
    resultado.formulas.remuneraciones = `Sueldo diario (${formatMoney(datos.sueldoMensual / 30)}) × Días trabajados sin pagar (${datos.diasTrabajadosSinPagar}) = ${formatMoney(resultado.remuneracionesPendientes)}`

    // Calcular indemnización por aviso previo
    if (datos.causalTermino === "art161" && !datos.avisoPrevio) {
      resultado.indemnizacionAvisoPrevio = datos.sueldoMensual
      resultado.formulas.indemnizacionAviso = `Equivalente a un mes de sueldo: ${formatMoney(datos.sueldoMensual)}`
    } else {
      resultado.formulas.indemnizacionAviso = "No aplica"
    }

    // Calcular indemnización por años de servicio
    if (datos.causalTermino === "art161") {
      const anosComputables = calcularAnosComputables(datos.anosServicio)
      resultado.indemnizacionAnosServicio = datos.sueldoMensual * anosComputables

      // Aplicar tope de 11 meses (excepto contratos anteriores a agosto 1981)
      const fechaReformaLaboral = new Date(1981, 7, 14)
      if (datos.fechaIngreso > fechaReformaLaboral && anosComputables > 11) {
        resultado.indemnizacionAnosServicio = datos.sueldoMensual * 11
      }

      resultado.formulas.indemnizacionAnos = `${formatMoney(datos.sueldoMensual)} × ${anosComputables} años = ${formatMoney(resultado.indemnizacionAnosServicio)}`
    } else {
      resultado.formulas.indemnizacionAnos = "No aplica"
    }

    // Calcular vacaciones proporcionales
    resultado.vacacionesProporcionales = calcularVacacionesProporcionales(datos)
    const diasVacacionesProporcionales = calcularDiasVacacionesProporcionales(datos)
    resultado.formulas.vacaciones = `${diasVacacionesProporcionales.toFixed(1)} días × Sueldo diario (${formatMoney(datos.sueldoMensual / 30)}) = ${formatMoney(resultado.vacacionesProporcionales)}`

    // Calcular feriado proporcional
    if (datos.anosServicio < 1) {
      resultado.feriadoProporcional = calcularFeriadoProporcional(datos)
      const mesesUltimoAno = Math.round(datos.anosServicio * 12)
      resultado.formulas.feriado = `1.25 × ${mesesUltimoAno} meses × ${formatMoney(datos.sueldoMensual / 30)} = ${formatMoney(resultado.feriadoProporcional)}`
    } else {
      resultado.formulas.feriado = "No aplica"
    }

    // Calcular proporcional de gratificaciones
    if (!datos.gratificacionesProrrateo) {
      resultado.gratificacionesProporcionales = calcularGratificacionesProporcionales(datos)
      const mesesDesdeUltimaGratificacion = calcularMesesDesdeUltimaGratificacion(datos.fechaTermino)
      resultado.formulas.gratificaciones = `(${formatMoney(datos.sueldoMensual)} / 12) × ${mesesDesdeUltimaGratificacion} meses = ${formatMoney(resultado.gratificacionesProporcionales)}`
    } else {
      resultado.formulas.gratificaciones = "No aplica (ya incluidas en el sueldo)"
    }

    // Calcular total
    resultado.total =
      resultado.remuneracionesPendientes +
      resultado.indemnizacionAvisoPrevio +
      resultado.indemnizacionAnosServicio +
      resultado.vacacionesProporcionales +
      resultado.feriadoProporcional +
      resultado.gratificacionesProporcionales

    return resultado
  }

  // Funciones auxiliares de cálculo
  const calcularRemuneracionesPendientes = (datos: any) => {
    const sueldoDiario = datos.sueldoMensual / 30
    return Math.round(sueldoDiario * datos.diasTrabajadosSinPagar)
  }

  const calcularAnosServicio = (fechaInicio: Date, fechaTermino: Date) => {
    const milisegundosPorAno = 365.25 * 24 * 60 * 60 * 1000
    return (fechaTermino.getTime() - fechaInicio.getTime()) / milisegundosPorAno
  }

  const calcularAnosComputables = (anosServicio: number) => {
    const anosEnteros = Math.floor(anosServicio)
    const fraccionAno = anosServicio - anosEnteros

    // Si la fracción es mayor a 0.5 (6 meses), se cuenta como un año completo
    if (fraccionAno > 0.5) {
      return anosEnteros + 1
    }

    return anosEnteros
  }

  const calcularDiasVacacionesProporcionales = (datos: any) => {
    // Por defecto en Chile son 15 días hábiles al año (que equivalen aproximadamente a 21 días corridos)
    const diasVacacionesAnuales = 15

    // Calculamos los días trabajados en el último año
    const unAno = 365 * 24 * 60 * 60 * 1000 // Un año en milisegundos
    let fechaUltimoAno = new Date(datos.fechaTermino.getTime() - unAno)

    if (fechaUltimoAno < datos.fechaIngreso) {
      fechaUltimoAno = new Date(datos.fechaIngreso)
    }

    const diasTrabajadosUltimoAno = Math.round(
      (datos.fechaTermino.getTime() - fechaUltimoAno.getTime()) / (24 * 60 * 60 * 1000),
    )

    // Regla de tres: si en 365 días corresponden X días, en diasTrabajadosUltimoAno corresponden...
    const diasProporcionales = (diasVacacionesAnuales * diasTrabajadosUltimoAno) / 365

    // Restar días ya tomados
    return Math.max(0, diasProporcionales - datos.diasVacacionesTomadas)
  }

  const calcularVacacionesProporcionales = (datos: any) => {
    const diasProporcionales = calcularDiasVacacionesProporcionales(datos)
    const valorDiario = datos.sueldoMensual / 30

    return Math.round(valorDiario * diasProporcionales)
  }

  const calcularFeriadoProporcional = (datos: any) => {
    // El factor 1.25 representa los días de feriado mensuales (15 días / 12 meses)
    const factorFeriado = 1.25
    const mesesUltimoAno = Math.round(datos.anosServicio * 12)
    const valorDiario = datos.sueldoMensual / 30

    return Math.round(factorFeriado * mesesUltimoAno * valorDiario)
  }

  const calcularMesesDesdeUltimaGratificacion = (fechaTermino: Date) => {
    // Por defecto, asumimos que las gratificaciones se pagan en julio y diciembre
    const mesTermino = fechaTermino.getMonth()

    // Si terminó entre enero y junio, contamos desde diciembre
    if (mesTermino >= 0 && mesTermino <= 5) {
      return mesTermino + 1 // +1 porque los meses son 0-indexados
    }

    // Si terminó entre julio y noviembre, contamos desde julio
    if (mesTermino >= 6 && mesTermino <= 10) {
      return mesTermino - 6 + 1
    }

    // Si terminó en diciembre (mes 11), la gratificación está completa
    return 0
  }

  const calcularGratificacionesProporcionales = (datos: any) => {
    const mesesDesdeUltimaGratificacion = calcularMesesDesdeUltimaGratificacion(datos.fechaTermino)

    // Asumimos gratificación legal (25% de lo devengado en el periodo con tope de 4.75 IMM)
    // Para simplificar, tomamos 1/12 del sueldo mensual por cada mes
    return Math.round((datos.sueldoMensual / 12) * mesesDesdeUltimaGratificacion)
  }

  // Funciones de formato
  const formatTiempoServicio = (anos: number) => {
    const anosEnteros = Math.floor(anos)
    const meses = Math.round((anos - anosEnteros) * 12)

    return `${anosEnteros} años, ${meses} meses`
  }

  const getCausalText = (causal: string) => {
    const causales: Record<string, string> = {
      "art159-1": "Mutuo acuerdo",
      "art159-2": "Renuncia",
      "art159-4": "Vencimiento del plazo",
      "art159-5": "Conclusión del trabajo",
      art161: "Necesidades de la empresa",
      art160: "Causales imputables",
    }

    return causales[causal] || causal
  }

  const getShareableContent = () => {
    if (!resultado) return ""

    return `🎯 ¡CALCULÉ MI FINIQUITO EN LEGALPO! 

💼 Causal: ${getCausalText(formData.causalTermino)}
⏰ Tiempo de servicio: ${resultado.tiempoServicio}
💰 Total a recibir: ${formatMoney(resultado.total)}

✅ ¡100% GRATIS y basado en la ley chilena!
🚀 Calcula el tuyo en segundos: LegalPO.cl

#Finiquito #DerechosLaborales #Chile #LegalPO #Trabajadores`
  }

  const getPromotionalShareContent = () => {
    if (!resultado) return ""

    return `🔥 ¡INCREÍBLE! Calculé mi finiquito en LegalPO y me corresponden ${formatMoney(resultado.total)}

🎯 La calculadora es:
✅ 100% GRATUITA
✅ Basada en la ley chilena
✅ Súper fácil de usar
✅ Resultado en segundos

🚀 ¡No dejes que te estafen! Conoce tus derechos laborales.

Calcula el tuyo GRATIS en LegalPO.cl

#Finiquito #DerechosLaborales #Chile #Trabajadores #LegalPO`
  }

  return (
    <div className="container py-8 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-foreground">Calculadora de Finiquito</h1>
        <p className="text-muted-foreground">
          Calcula de forma simple y rápida el finiquito que corresponde según la ley laboral chilena.
        </p>
      </div>

      <AdUnit slot="1234567890" format="horizontal" className="my-8" />

      <Card className="max-w-4xl mx-auto shadow-lg border-border">
        <CardHeader className="bg-gradient-to-r from-background to-muted border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Calculator className="h-8 w-8 text-foreground" />
              <CardTitle className="text-xl text-foreground">Simulador de Finiquito</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              {resultado && (
                <ShareButton
                  title="Cálculo de Finiquito - LegalPO"
                  text={getShareableContent()}
                  size="sm"
                  variant="outline"
                />
              )}
              <Button variant="ghost" size="sm" className="text-foreground" onClick={() => setShowHelp(!showHelp)}>
                <HelpCircle className="h-5 w-5 mr-1" />
                <span>Ayuda</span>
              </Button>
            </div>
          </div>
          {showHelp && (
            <div className="mt-4 p-4 bg-muted rounded-lg text-sm text-foreground">
              <h3 className="font-medium mb-2">¿Cómo usar esta calculadora?</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Selecciona la causal de término del contrato</li>
                <li>Ingresa las fechas de inicio y término del contrato</li>
                <li>Completa los datos de remuneraciones</li>
                <li>Haz clic en "Calcular finiquito"</li>
              </ol>
              <p className="mt-2">
                Esta calculadora te entrega un valor referencial. Para casos específicos, consulta con un especialista.
              </p>
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6 bg-muted">
              <TabsTrigger
                value="datos"
                className={cn(
                  "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  "data-[state=inactive]:text-foreground",
                )}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Datos Personales
              </TabsTrigger>
              <TabsTrigger
                value="remuneraciones"
                className={cn(
                  "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  "data-[state=inactive]:text-foreground",
                )}
              >
                <DollarSign className="h-4 w-4 mr-2" />
                Remuneraciones
              </TabsTrigger>
              <TabsTrigger
                value="resultado"
                disabled={!resultado && !isCalculating}
                className={cn(
                  "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  "data-[state=inactive]:text-foreground",
                  "data-[state=inactive]:opacity-50",
                )}
              >
                <FileText className="h-4 w-4 mr-2" />
                Resultado
              </TabsTrigger>
            </TabsList>

            <TabsContent value="datos" className="space-y-6">
              <div className="space-y-6">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-foreground font-medium mb-2 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-foreground" />
                    Información del contrato
                  </h3>
                  <div>
                    <Label htmlFor="causalTermino" className="text-foreground mb-1 block">
                      Causa de finalización del vínculo laboral*
                    </Label>
                    <Select
                      value={formData.causalTermino}
                      onValueChange={(value) => handleInputChange("causalTermino", value)}
                    >
                      <SelectTrigger id="causalTermino" className="w-full border-border focus:border-gray-400">
                        <SelectValue placeholder="Selecciona una causal" />
                      </SelectTrigger>
                      <SelectContent>
                        {causalesOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <Label htmlFor="fechaIngreso" className="text-foreground mb-1 block">
                        Fecha de ingreso*
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="fechaIngreso"
                          type="date"
                          value={formData.fechaIngreso}
                          onChange={(e) => handleInputChange("fechaIngreso", e.target.value)}
                          className="border-border focus:border-gray-400 pl-10"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Formato: DD/MM/AAAA</p>
                    </div>
                    <div>
                      <Label htmlFor="fechaTermino" className="text-foreground mb-1 block">
                        Fecha fin de contrato*
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="fechaTermino"
                          type="date"
                          value={formData.fechaTermino}
                          onChange={(e) => handleInputChange("fechaTermino", e.target.value)}
                          className="border-border focus:border-gray-400 pl-10"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Formato: DD/MM/AAAA</p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-foreground font-medium mb-2 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-foreground" />
                    Información adicional
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="diasVacaciones" className="text-foreground mb-1 block">
                        Días de vacaciones tomadas*
                      </Label>
                      <Input
                        id="diasVacaciones"
                        type="number"
                        min="0"
                        value={formData.diasVacaciones}
                        onChange={(e) => handleInputChange("diasVacaciones", Number.parseInt(e.target.value))}
                        className="border-border focus:border-gray-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="avisoPrevio" className="text-foreground mb-1 block">
                        ¿Se dio aviso previo de 30 días?
                      </Label>
                      <Select
                        value={formData.avisoPrevio ? "si" : "no"}
                        onValueChange={(value) => handleInputChange("avisoPrevio", value === "si")}
                        disabled={formData.causalTermino !== "art161"}
                      >
                        <SelectTrigger
                          id="avisoPrevio"
                          className={cn(
                            "w-full border-border focus:border-gray-400",
                            formData.causalTermino !== "art161" && "opacity-60",
                          )}
                        >
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="si">Sí</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Alert variant="warning" className="bg-amber-50 border-amber-200 text-amber-800">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    La presente calculadora no contempla días progresivos de vacaciones. Considera esta variable al
                    momento de ingresar los días de vacaciones tomados.
                  </AlertDescription>
                </Alert>

                <div className="flex justify-end">
                  <Button
                    onClick={() => {
                      if (validarFormulario()) {
                        setActiveTab("remuneraciones")
                      }
                    }}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Siguiente
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="remuneraciones" className="space-y-6">
              <div className="space-y-6">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-foreground font-medium mb-2 flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-foreground" />
                    Remuneraciones fijas
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="sueldoBase" className="text-foreground mb-1 block">
                        Sueldo base*
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="sueldoBase"
                          type="number"
                          min="0"
                          value={formData.sueldoBase}
                          onChange={(e) => handleInputChange("sueldoBase", Number.parseInt(e.target.value))}
                          className="border-border focus:border-gray-400 pl-8"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="otrasRemuneracionesImponibles" className="text-foreground mb-1 block">
                        Otras remuneraciones fijas imponibles
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="otrasRemuneracionesImponibles"
                          type="number"
                          min="0"
                          value={formData.otrasRemuneracionesImponibles}
                          onChange={(e) =>
                            handleInputChange("otrasRemuneracionesImponibles", Number.parseInt(e.target.value))
                          }
                          className="border-border focus:border-gray-400 pl-8"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <Label htmlFor="otrasRemuneracionesNoImponibles" className="text-foreground mb-1 block">
                        Otras remuneraciones fijas no imponibles
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="otrasRemuneracionesNoImponibles"
                          type="number"
                          min="0"
                          value={formData.otrasRemuneracionesNoImponibles}
                          onChange={(e) =>
                            handleInputChange("otrasRemuneracionesNoImponibles", Number.parseInt(e.target.value))
                          }
                          className="border-border focus:border-gray-400 pl-8"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="gratificacionesProrrateo" className="text-foreground mb-1 block">
                        Las gratificaciones están incluidas en el sueldo
                      </Label>
                      <Select
                        value={formData.gratificacionesProrrateo ? "si" : "no"}
                        onValueChange={(value) => handleInputChange("gratificacionesProrrateo", value === "si")}
                      >
                        <SelectTrigger
                          id="gratificacionesProrrateo"
                          className="w-full border-border focus:border-gray-400"
                        >
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="si">Sí</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-foreground font-medium mb-2 flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-foreground" />
                    Remuneración variable
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-foreground mb-2 block">¿Recibe remuneración variable?*</Label>
                      <div className="flex space-x-3">
                        <Button
                          variant={formData.remuneracionVariable ? "default" : "outline"}
                          onClick={() => handleInputChange("remuneracionVariable", true)}
                          className={cn(
                            "flex-1",
                            formData.remuneracionVariable
                              ? "bg-primary hover:bg-primary/90 text-white"
                              : "border-border text-foreground",
                          )}
                        >
                          Sí
                        </Button>
                        <Button
                          variant={!formData.remuneracionVariable ? "default" : "outline"}
                          onClick={() => handleInputChange("remuneracionVariable", false)}
                          className={cn(
                            "flex-1",
                            !formData.remuneracionVariable
                              ? "bg-primary hover:bg-primary/90 text-white"
                              : "border-border text-foreground",
                          )}
                        >
                          No
                        </Button>
                      </div>
                    </div>

                    {formData.remuneracionVariable && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 p-3 bg-background rounded-lg">
                        <div>
                          <Label htmlFor="variableMes1" className="text-foreground mb-1 block">
                            Último mes
                          </Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                            <Input
                              id="variableMes1"
                              type="number"
                              min="0"
                              value={formData.variableUltimosTresMeses[0]}
                              onChange={(e) => handleVariableChange(0, Number.parseInt(e.target.value))}
                              className="border-border focus:border-gray-400 pl-8"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="variableMes2" className="text-foreground mb-1 block">
                            Penúltimo mes
                          </Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                            <Input
                              id="variableMes2"
                              type="number"
                              min="0"
                              value={formData.variableUltimosTresMeses[1]}
                              onChange={(e) => handleVariableChange(1, Number.parseInt(e.target.value))}
                              className="border-border focus:border-gray-400 pl-8"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="variableMes3" className="text-foreground mb-1 block">
                            Antepenúltimo mes
                          </Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                            <Input
                              id="variableMes3"
                              type="number"
                              min="0"
                              value={formData.variableUltimosTresMeses[2]}
                              onChange={(e) => handleVariableChange(2, Number.parseInt(e.target.value))}
                              className="border-border focus:border-gray-400 pl-8"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("datos")}
                    className="border-border text-foreground"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                    Anterior
                  </Button>
                  <Button
                    onClick={calcularFiniquito}
                    className="bg-primary hover:bg-primary/90 text-white"
                    disabled={isCalculating}
                  >
                    {isCalculating ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                        Calculando...
                      </>
                    ) : (
                      <>
                        Calcular finiquito
                        <Calculator className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resultado" className="space-y-6">
              {resultado && (
                <div className="space-y-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="text-foreground font-medium mb-4 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-foreground" />
                      Resultado del cálculo de finiquito
                    </h3>

                    <div className="grid gap-4">
                      <div className="bg-background p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-foreground">Información general</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Causal de término</p>
                            <p className="font-medium">{getCausalText(formData.causalTermino)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Tiempo de servicio</p>
                            <p className="font-medium">{resultado.tiempoServicio}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-background p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-foreground">Detalle del finiquito</h4>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between py-1 border-border/50">
                            <span>Remuneraciones pendientes</span>
                            <span className="font-medium">{formatMoney(resultado.remuneracionesPendientes)}</span>
                          </div>

                          {resultado.indemnizacionAvisoPrevio > 0 && (
                            <div className="flex justify-between py-1 border-border/50">
                              <span>Indemnización aviso previo</span>
                              <span className="font-medium">{formatMoney(resultado.indemnizacionAvisoPrevio)}</span>
                            </div>
                          )}

                          {resultado.indemnizacionAnosServicio > 0 && (
                            <div className="flex justify-between py-1 border-border/50">
                              <span>Indemnización años de servicio</span>
                              <span className="font-medium">{formatMoney(resultado.indemnizacionAnosServicio)}</span>
                            </div>
                          )}

                          {resultado.vacacionesProporcionales > 0 && (
                            <div className="flex justify-between py-1 border-border/50">
                              <span>Vacaciones proporcionales</span>
                              <span className="font-medium">{formatMoney(resultado.vacacionesProporcionales)}</span>
                            </div>
                          )}

                          {resultado.feriadoProporcional > 0 && (
                            <div className="flex justify-between py-1 border-border/50">
                              <span>Feriado proporcional</span>
                              <span className="font-medium">{formatMoney(resultado.feriadoProporcional)}</span>
                            </div>
                          )}

                          {resultado.gratificacionesProporcionales > 0 && (
                            <div className="flex justify-between py-1 border-border/50">
                              <span>Gratificaciones proporcionales</span>
                              <span className="font-medium">
                                {formatMoney(resultado.gratificacionesProporcionales)}
                              </span>
                            </div>
                          )}

                          <div className="flex justify-between py-2 font-bold text-lg">
                            <span>Total a pagar</span>
                            <span className="text-primary font-bold">{formatMoney(resultado.total)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-background p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-foreground">Detalle del cálculo</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setExpandedDetails(
                                expandedDetails.length
                                  ? []
                                  : [
                                      "remuneraciones",
                                      "indemnizacionAviso",
                                      "indemnizacionAnos",
                                      "vacaciones",
                                      "feriado",
                                      "gratificaciones",
                                    ],
                              )
                            }
                          >
                            {expandedDetails.length ? "Ocultar todo" : "Mostrar todo"}
                          </Button>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-between text-left font-normal"
                              onClick={() => toggleDetail("remuneraciones")}
                            >
                              <span>Remuneraciones pendientes</span>
                              <ChevronRight
                                className={`h-4 w-4 transition-transform ${expandedDetails.includes("remuneraciones") ? "rotate-90" : ""}`}
                              />
                            </Button>
                            {expandedDetails.includes("remuneraciones") && (
                              <div className="p-3 text-sm bg-muted rounded mt-1">
                                <p>{resultado.formulas.remuneraciones}</p>
                              </div>
                            )}
                          </div>

                          <div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-between text-left font-normal"
                              onClick={() => toggleDetail("indemnizacionAviso")}
                            >
                              <span>Indemnización aviso previo</span>
                              <ChevronRight
                                className={`h-4 w-4 transition-transform ${expandedDetails.includes("indemnizacionAviso") ? "rotate-90" : ""}`}
                              />
                            </Button>
                            {expandedDetails.includes("indemnizacionAviso") && (
                              <div className="p-3 text-sm bg-muted rounded mt-1">
                                <p>{resultado.formulas.indemnizacionAviso}</p>
                              </div>
                            )}
                          </div>

                          <div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-between text-left font-normal"
                              onClick={() => toggleDetail("indemnizacionAnos")}
                            >
                              <span>Indemnización años de servicio</span>
                              <ChevronRight
                                className={`h-4 w-4 transition-transform ${expandedDetails.includes("indemnizacionAnos") ? "rotate-90" : ""}`}
                              />
                            </Button>
                            {expandedDetails.includes("indemnizacionAnos") && (
                              <div className="p-3 text-sm bg-muted rounded mt-1">
                                <p>{resultado.formulas.indemnizacionAnos}</p>
                              </div>
                            )}
                          </div>

                          <div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-between text-left font-normal"
                              onClick={() => toggleDetail("vacaciones")}
                            >
                              <span>Vacaciones proporcionales</span>
                              <ChevronRight
                                className={`h-4 w-4 transition-transform ${expandedDetails.includes("vacaciones") ? "rotate-90" : ""}`}
                              />
                            </Button>
                            {expandedDetails.includes("vacaciones") && (
                              <div className="p-3 text-sm bg-muted rounded mt-1">
                                <p>{resultado.formulas.vacaciones}</p>
                              </div>
                            )}
                          </div>

                          <div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-between text-left font-normal"
                              onClick={() => toggleDetail("feriado")}
                            >
                              <span>Feriado proporcional</span>
                              <ChevronRight
                                className={`h-4 w-4 transition-transform ${expandedDetails.includes("feriado") ? "rotate-90" : ""}`}
                              />
                            </Button>
                            {expandedDetails.includes("feriado") && (
                              <div className="p-3 text-sm bg-muted rounded mt-1">
                                <p>{resultado.formulas.feriado}</p>
                              </div>
                            )}
                          </div>

                          <div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-between text-left font-normal"
                              onClick={() => toggleDetail("gratificaciones")}
                            >
                              <span>Gratificaciones proporcionales</span>
                              <ChevronRight
                                className={`h-4 w-4 transition-transform ${expandedDetails.includes("gratificaciones") ? "rotate-90" : ""}`}
                              />
                            </Button>
                            {expandedDetails.includes("gratificaciones") && (
                              <div className="p-3 text-sm bg-muted rounded mt-1">
                                <p>{resultado.formulas.gratificaciones}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setActiveTab("remuneraciones")}
                      className="border-border text-foreground"
                    >
                      <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                      Volver a editar
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => {
                          window.print()
                        }}
                        className="bg-primary hover:bg-primary/90 text-white"
                      >
                        Imprimir resultado
                        <FileText className="ml-2 h-4 w-4" />
                      </Button>
                      <ShareButton
                        title="Cálculo de Finiquito - LegalPO"
                        text={getShareableContent()}
                        size="default"
                        variant="outline"
                      />
                    </div>
                  </div>

                  {resultado && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
                      <p className="text-sm text-blue-800 mb-3">
                        ¿Te fue útil esta calculadora? ¡Compártela para ayudar a otros trabajadores!
                      </p>
                      <ShareButton
                        title="Calculadora de Finiquito - LegalPO"
                        text={`Calculé mi finiquito laboral en LegalPO y obtuve un resultado de ${formatMoney(resultado.total)}. 

¡Es gratis y muy fácil de usar! Calcula el tuyo en LegalPO.`}
                        size="default"
                        variant="default"
                      />
                    </div>
                  )}
                </div>
              )}
            </TabsContent>
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </Tabs>
        </CardContent>
        <CardFooter className="bg-gradient-to-r from-background to-muted border-t border-border p-4 text-center">
          <p className="text-sm text-foreground w-full">
            © 2025 LegalPO - Calculadora basada en la legislación laboral chilena vigente
          </p>
        </CardFooter>
      </Card>

      <div className="mt-8 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-foreground mb-4">Preguntas frecuentes</h2>
        <div className="space-y-4">
          <div className="bg-background p-4 rounded-lg shadow-sm border-border">
            <h3 className="font-medium text-foreground mb-2">¿Qué es un finiquito?</h3>
            <p className="text-foreground">
              El finiquito es un documento que formaliza el término de la relación laboral entre empleador y trabajador.
              En él se detallan los montos que el empleador debe pagar al trabajador al finalizar el contrato.
            </p>
          </div>
          <div className="bg-background p-4 rounded-lg shadow-sm border-border">
            <h3 className="font-medium text-foreground mb-2">¿Es obligatorio firmar el finiquito?</h3>
            <p className="text-foreground">
              No es obligatorio firmar el finiquito si no estás de acuerdo con su contenido. Sin embargo, es
              recomendable revisar detalladamente los montos y conceptos antes de tomar una decisión.
            </p>
          </div>
          <div className="bg-background p-4 rounded-lg shadow-sm border-border">
            <h3 className="font-medium text-foreground mb-2">¿Dónde puedo validar mi finiquito?</h3>
            <p className="text-foreground">
              Los finiquitos pueden ser firmados ante un notario, un inspector del trabajo o un funcionario del
              sindicato. Estas opciones le dan validez legal al documento.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <AdUnit slot="1234567890" format="rectangle" />
      </div>
    </div>
  )
}
