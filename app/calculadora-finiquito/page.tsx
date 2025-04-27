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
    if (!validarFormulario()) {
      alert("Por favor completa todos los campos obligatorios.")
      return
    }

    setIsCalculating(true)

    // Simulamos un pequeño retraso para mostrar la animación
    setTimeout(() => {
      const datos = obtenerDatosFormulario()
      const resultadoCalculado = calcular(datos)
      setResultado(resultadoCalculado)
      setIsCalculating(false)
      setActiveTab("resultado")
    }, 1200)
  }

  // Validación del formulario
  const validarFormulario = () => {
    const { causalTermino, fechaIngreso, fechaTermino, sueldoBase } = formData
    return causalTermino && fechaIngreso && fechaTermino && sueldoBase > 0
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
  const formatMoney = (amount: number) => {
    return `$${Math.round(amount).toLocaleString("es-CL")}`
  }

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

  return (
    <div className="container py-8 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-blue-900">Calculadora de Finiquito</h1>
        <p className="text-muted-foreground">
          Calcula de forma simple y rápida el finiquito que corresponde según la ley laboral chilena.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto shadow-lg border-blue-100">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Calculator className="h-8 w-8 text-blue-700" />
              <CardTitle className="text-xl text-blue-900">Simulador de Finiquito</CardTitle>
            </div>
            <Button variant="ghost" size="sm" className="text-blue-700" onClick={() => setShowHelp(!showHelp)}>
              <HelpCircle className="h-5 w-5 mr-1" />
              <span>Ayuda</span>
            </Button>
          </div>
          {showHelp && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm text-blue-800">
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
            <TabsList className="grid grid-cols-3 mb-6 bg-blue-50">
              <TabsTrigger
                value="datos"
                className={cn(
                  "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                  "data-[state=inactive]:text-blue-800",
                )}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Datos Personales
              </TabsTrigger>
              <TabsTrigger
                value="remuneraciones"
                className={cn(
                  "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                  "data-[state=inactive]:text-blue-800",
                )}
              >
                <DollarSign className="h-4 w-4 mr-2" />
                Remuneraciones
              </TabsTrigger>
              <TabsTrigger
                value="resultado"
                disabled={!resultado && !isCalculating}
                className={cn(
                  "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                  "data-[state=inactive]:text-blue-800",
                  "data-[state=inactive]:opacity-50",
                )}
              >
                <FileText className="h-4 w-4 mr-2" />
                Resultado
              </TabsTrigger>
            </TabsList>

            <TabsContent value="datos" className="space-y-6">
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-blue-800 font-medium mb-2 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-700" />
                    Información del contrato
                  </h3>
                  <div>
                    <Label htmlFor="causalTermino" className="text-blue-900 mb-1 block">
                      Causa de finalización del vínculo laboral*
                    </Label>
                    <Select
                      value={formData.causalTermino}
                      onValueChange={(value) => handleInputChange("causalTermino", value)}
                    >
                      <SelectTrigger id="causalTermino" className="w-full border-blue-200 focus:border-blue-400">
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
                      <Label htmlFor="fechaIngreso" className="text-blue-900 mb-1 block">
                        Fecha de ingreso*
                      </Label>
                      <Input
                        id="fechaIngreso"
                        type="date"
                        value={formData.fechaIngreso}
                        onChange={(e) => handleInputChange("fechaIngreso", e.target.value)}
                        className="border-blue-200 focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="fechaTermino" className="text-blue-900 mb-1 block">
                        Fecha fin de contrato*
                      </Label>
                      <Input
                        id="fechaTermino"
                        type="date"
                        value={formData.fechaTermino}
                        onChange={(e) => handleInputChange("fechaTermino", e.target.value)}
                        className="border-blue-200 focus:border-blue-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-blue-800 font-medium mb-2 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-blue-700" />
                    Información adicional
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="diasVacaciones" className="text-blue-900 mb-1 block">
                        Días de vacaciones tomadas*
                      </Label>
                      <Input
                        id="diasVacaciones"
                        type="number"
                        min="0"
                        value={formData.diasVacaciones}
                        onChange={(e) => handleInputChange("diasVacaciones", Number.parseInt(e.target.value))}
                        className="border-blue-200 focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="avisoPrevio" className="text-blue-900 mb-1 block">
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
                            "w-full border-blue-200 focus:border-blue-400",
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
                    onClick={() => setActiveTab("remuneraciones")}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Siguiente
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="remuneraciones" className="space-y-6">
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-blue-800 font-medium mb-2 flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-blue-700" />
                    Remuneraciones fijas
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="sueldoBase" className="text-blue-900 mb-1 block">
                        Sueldo base*
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <Input
                          id="sueldoBase"
                          type="number"
                          min="0"
                          value={formData.sueldoBase}
                          onChange={(e) => handleInputChange("sueldoBase", Number.parseInt(e.target.value))}
                          className="border-blue-200 focus:border-blue-400 pl-8"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="otrasRemuneracionesImponibles" className="text-blue-900 mb-1 block">
                        Otras remuneraciones fijas imponibles
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <Input
                          id="otrasRemuneracionesImponibles"
                          type="number"
                          min="0"
                          value={formData.otrasRemuneracionesImponibles}
                          onChange={(e) =>
                            handleInputChange("otrasRemuneracionesImponibles", Number.parseInt(e.target.value))
                          }
                          className="border-blue-200 focus:border-blue-400 pl-8"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <Label htmlFor="otrasRemuneracionesNoImponibles" className="text-blue-900 mb-1 block">
                        Otras remuneraciones fijas no imponibles
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <Input
                          id="otrasRemuneracionesNoImponibles"
                          type="number"
                          min="0"
                          value={formData.otrasRemuneracionesNoImponibles}
                          onChange={(e) =>
                            handleInputChange("otrasRemuneracionesNoImponibles", Number.parseInt(e.target.value))
                          }
                          className="border-blue-200 focus:border-blue-400 pl-8"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="gratificacionesProrrateo" className="text-blue-900 mb-1 block">
                        Las gratificaciones están incluidas en el sueldo
                      </Label>
                      <Select
                        value={formData.gratificacionesProrrateo ? "si" : "no"}
                        onValueChange={(value) => handleInputChange("gratificacionesProrrateo", value === "si")}
                      >
                        <SelectTrigger
                          id="gratificacionesProrrateo"
                          className="w-full border-blue-200 focus:border-blue-400"
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

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-blue-800 font-medium mb-2 flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-blue-700" />
                    Remuneración variable
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-blue-900 mb-2 block">¿Recibe remuneración variable?*</Label>
                      <div className="flex space-x-3">
                        <Button
                          variant={formData.remuneracionVariable ? "default" : "outline"}
                          onClick={() => handleInputChange("remuneracionVariable", true)}
                          className={cn(
                            "flex-1",
                            formData.remuneracionVariable
                              ? "bg-blue-600 hover:bg-blue-700 text-white"
                              : "border-blue-200 text-blue-800",
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
                              ? "bg-blue-600 hover:bg-blue-700 text-white"
                              : "border-blue-200 text-blue-800",
                          )}
                        >
                          No
                        </Button>
                      </div>
                    </div>

                    {formData.remuneracionVariable && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 p-3 bg-white rounded-lg">
                        <div>
                          <Label htmlFor="variableMes1" className="text-blue-900 mb-1 block">
                            Último mes
                          </Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                            <Input
                              id="variableMes1"
                              type="number"
                              min="0"
                              value={formData.variableUltimosTresMeses[0]}
                              onChange={(e) => handleVariableChange(0, Number.parseInt(e.target.value))}
                              className="border-blue-200 focus:border-blue-400 pl-8"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="variableMes2" className="text-blue-900 mb-1 block">
                            Penúltimo mes
                          </Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                            <Input
                              id="variableMes2"
                              type="number"
                              min="0"
                              value={formData.variableUltimosTresMeses[1]}
                              onChange={(e) => handleVariableChange(1, Number.parseInt(e.target.value))}
                              className="border-blue-200 focus:border-blue-400 pl-8"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="variableMes3" className="text-blue-900 mb-1 block">
                            Antepenúltimo mes
                          </Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                            <Input
                              id="variableMes3"
                              type="number"
                              min="0"
                              value={formData.variableUltimosTresMeses[2]}
                              onChange={(e) => handleVariableChange(2, Number.parseInt(e.target.value))}
                              className="border-blue-200 focus:border-blue-400 pl-8"
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
                    className="border-blue-200 text-blue-800"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                    Anterior
                  </Button>
                  <Button
                    onClick={calcularFiniquito}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
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
          </Tabs>
        </CardContent>
        <CardFooter className="bg-gradient-to-r from-blue-50 to-blue-100 border-t border-blue-100 p-4 text-center">
          <p className="text-sm text-blue-700 w-full">
            © 2025 LegalPO - Calculadora basada en la legislación laboral chilena vigente
          </p>
        </CardFooter>
      </Card>

      <div className="mt-8 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Preguntas frecuentes</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-2">¿Qué es un finiquito?</h3>
            <p className="text-gray-700">
              El finiquito es un documento que formaliza el término de la relación laboral entre empleador y trabajador.
              En él se detallan los montos que el empleador debe pagar al trabajador al finalizar el contrato.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-2">¿Es obligatorio firmar el finiquito?</h3>
            <p className="text-gray-700">
              No es obligatorio firmar el finiquito si no estás de acuerdo con su contenido. Sin embargo, es
              recomendable revisar detalladamente los montos y conceptos antes de tomar una decisión.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-2">¿Dónde puedo validar mi finiquito?</h3>
            <p className="text-gray-700">
              Los finiquitos pueden ser firmados ante un notario, un inspector del trabajo o un funcionario del
              sindicato. Estas opciones le dan validez legal al documento.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
