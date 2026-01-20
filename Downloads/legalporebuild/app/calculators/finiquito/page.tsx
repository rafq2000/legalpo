"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  AlertTriangle,
  Calendar,
  DollarSign,
  Calculator,
  ChevronRight,
  HelpCircle,
  FileText,
  ArrowLeft,
  Star,
  Users,
  Shield,
  CheckCircle,
  TrendingUp,
  Award,
  BookOpen,
  Scale,
  Gavel,
  Search,
  Target,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ShareButton } from "@/components/share-button"
import { AdUnit } from "@/components/ad-unit"
import Link from "next/link"

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
  const [ingresoMinimo, setIngresoMinimo] = useState(510636) // Valor actualizado 2026
  const [valorUTM, setValorUTM] = useState(65287) // Valor UTM Marzo 2026 (SII)
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
    <div className="min-h-screen bg-slate-900 text-white">
      {/* SEO Rich Content Header - Optimizado para "calculadora de finiquito" */}
      <section className="py-16 bg-gradient-to-b from-slate-800/30 to-transparent border-b border-white/5">
        <div className="container">
          <Link href="/">
            <Button variant="ghost" className="mb-6 -ml-4 text-slate-300 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <Target className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">🥇 Calculadora de Finiquito #1 en Chile</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Calculadora de Finiquito Chile 2026
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-emerald-400">
              🚀 La Calculadora de Finiquito Más Precisa y Confiable de Chile
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              <strong className="text-white">Calculadora de finiquito Chile #1</strong> - La herramienta más precisa
              para calcular tu finiquito laboral. Calcula tu indemnización por años de servicio, vacaciones
              proporcionales, aviso previo y más según el Código del Trabajo chileno 2026.
              <strong className="text-emerald-400">
                {" "}
                Más de 100,000 trabajadores chilenos ya calcularon su finiquito con nosotros.
              </strong>
            </p>

            {/* Trust Indicators - Optimizados para SEO */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-white">100,000+</div>
                <div className="text-sm text-slate-300">Usuarios Calculadora Finiquito</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-slate-300">Calificación Finiquito</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white">15 seg</div>
                <div className="text-sm text-slate-300">Cálculo Finiquito</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-slate-300">Gratis Siempre</div>
              </div>
            </div>

            {/* Key Benefits - Optimizados para "calculadora finiquito chile" */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <CheckCircle className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Calculadora Finiquito Precisa</h3>
                <p className="text-sm text-slate-300">
                  Basada en el Código del Trabajo de Chile actualizado 2026. La calculadora de finiquito más confiable.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Resultado Finiquito Instantáneo</h3>
                <p className="text-sm text-slate-300">
                  Obtén tu cálculo de finiquito completo en menos de 15 segundos con nuestra calculadora
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <Award className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Calculadora Finiquito Confiable</h3>
                <p className="text-sm text-slate-300">
                  Desarrollada por expertos en derecho laboral chileno. La calculadora de finiquito más usada
                </p>
              </div>
            </div>

            {/* SEO Keywords prominentes */}
            <div className="bg-emerald-500/10 p-6 rounded-lg border border-emerald-500/20 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-emerald-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">
                  Calculadora de Finiquito Chile - Términos Más Buscados
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <span className="bg-white/10 px-3 py-1 rounded text-slate-300">calculadora finiquito chile</span>
                <span className="bg-white/10 px-3 py-1 rounded text-slate-300">calcular finiquito</span>
                <span className="bg-white/10 px-3 py-1 rounded text-slate-300">finiquito laboral chile</span>
                <span className="bg-white/10 px-3 py-1 rounded text-slate-300">calculadora finiquito gratis</span>
                <span className="bg-white/10 px-3 py-1 rounded text-slate-300">indemnización años servicio</span>
                <span className="bg-white/10 px-3 py-1 rounded text-slate-300">finiquito chile 2026</span>
                <span className="bg-white/10 px-3 py-1 rounded text-slate-300">como calcular finiquito</span>
                <span className="bg-white/10 px-3 py-1 rounded text-slate-300">calculadora indemnización</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <AdUnit slot="1234567890" format="horizontal" className="my-8" />

          <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-600/20 rounded-lg">
                    <Calculator className="h-6 w-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">🥇 Calculadora de Finiquito Chile #1</CardTitle>
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
                  <Button variant="ghost" size="sm" className="text-white" onClick={() => setShowHelp(!showHelp)}>
                    <HelpCircle className="h-5 w-5 mr-1" />
                    <span>Ayuda</span>
                  </Button>
                </div>
              </div>
              {showHelp && (
                <div className="mt-4 p-4 bg-white/10 rounded-lg text-sm text-slate-200">
                  <h3 className="font-medium mb-2">¿Cómo usar la calculadora de finiquito paso a paso?</h3>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Selecciona la causal de término del contrato laboral</li>
                    <li>Ingresa las fechas de inicio y término del contrato</li>
                    <li>Completa los datos de remuneraciones (sueldo base, variables, etc.)</li>
                    <li>Indica días de vacaciones tomadas y si hubo aviso previo</li>
                    <li>Haz clic en "Calcular finiquito" para obtener el resultado</li>
                  </ol>
                  <p className="mt-2 font-medium">
                    Esta <strong>calculadora de finiquito</strong> te entrega un valor referencial preciso basado en la
                    legislación laboral chilena. Para casos específicos o dudas legales, consulta con un especialista.
                  </p>
                </div>
              )}
            </CardHeader>
            <CardContent className="p-8">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-3 mb-6 bg-white/10">
                  <TabsTrigger
                    value="datos"
                    className={cn(
                      "data-[state=active]:bg-emerald-600 data-[state=active]:text-white",
                      "data-[state=inactive]:text-slate-300",
                    )}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Datos del Contrato
                  </TabsTrigger>
                  <TabsTrigger
                    value="remuneraciones"
                    className={cn(
                      "data-[state=active]:bg-emerald-600 data-[state=active]:text-white",
                      "data-[state=inactive]:text-slate-300",
                    )}
                  >
                    <DollarSign className="h-4 w-4 mr-2" />
                    Remuneraciones
                  </TabsTrigger>
                  <TabsTrigger
                    value="resultado"
                    disabled={!resultado && !isCalculating}
                    className={cn(
                      "data-[state=active]:bg-emerald-600 data-[state=active]:text-white",
                      "data-[state=inactive]:text-slate-300",
                      "data-[state=inactive]:opacity-50",
                    )}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Resultado
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="datos" className="space-y-6">
                  <div className="space-y-6">
                    <div className="bg-white/10 p-6 rounded-lg">
                      <h3 className="text-white font-medium mb-4 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-emerald-400" />
                        Información del contrato laboral para calculadora de finiquito
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="causalTermino" className="text-slate-200 mb-2 block">
                            Causa de finalización del vínculo laboral*
                          </Label>
                          <Select
                            value={formData.causalTermino}
                            onValueChange={(value) => handleInputChange("causalTermino", value)}
                          >
                            <SelectTrigger id="causalTermino" className="w-full bg-white/10 border-white/20 text-white">
                              <SelectValue placeholder="Selecciona una causal de término" />
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="fechaIngreso" className="text-slate-200 mb-2 block">
                              Fecha de ingreso al trabajo*
                            </Label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                              <Input
                                id="fechaIngreso"
                                type="date"
                                value={formData.fechaIngreso}
                                onChange={(e) => handleInputChange("fechaIngreso", e.target.value)}
                                className="bg-white/10 border-white/20 text-white pl-10 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="fechaTermino" className="text-slate-200 mb-2 block">
                              Fecha de término del contrato*
                            </Label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                              <Input
                                id="fechaTermino"
                                type="date"
                                value={formData.fechaTermino}
                                onChange={(e) => handleInputChange("fechaTermino", e.target.value)}
                                className="bg-white/10 border-white/20 text-white pl-10 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 p-6 rounded-lg">
                      <h3 className="text-white font-medium mb-4 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-emerald-400" />
                        Información adicional para el cálculo de finiquito
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="diasVacaciones" className="text-slate-200 mb-2 block">
                            Días de vacaciones tomadas en el último año*
                          </Label>
                          <Input
                            id="diasVacaciones"
                            type="number"
                            min="0"
                            max="30"
                            value={formData.diasVacaciones}
                            onChange={(e) => handleInputChange("diasVacaciones", Number.parseInt(e.target.value))}
                            className="bg-white/10 border-white/20 text-white focus:border-emerald-500/50 focus:ring-emerald-500/20"
                            placeholder="Ej: 10"
                          />
                        </div>
                        <div>
                          <Label htmlFor="avisoPrevio" className="text-slate-200 mb-2 block">
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
                                "w-full bg-white/10 border-white/20 text-white",
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

                    <Alert className="bg-amber-500/10 border-amber-500/20 text-amber-200">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Importante:</strong> Esta <strong>calculadora de finiquito</strong> no contempla días
                        progresivos de vacaciones. Considera esta variable al momento de ingresar los días de vacaciones
                        tomados para un cálculo más preciso.
                      </AlertDescription>
                    </Alert>

                    <div className="flex justify-end">
                      <Button
                        onClick={() => {
                          if (validarFormulario()) {
                            setActiveTab("remuneraciones")
                          }
                        }}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        Siguiente: Ingresar Remuneraciones
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="remuneraciones" className="space-y-6">
                  <div className="space-y-6">
                    <div className="bg-white/10 p-6 rounded-lg">
                      <h3 className="text-white font-medium mb-4 flex items-center">
                        <DollarSign className="h-5 w-5 mr-2 text-emerald-400" />
                        Remuneraciones fijas mensuales para calculadora finiquito
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="sueldoBase" className="text-slate-200 mb-2 block">
                            Sueldo base mensual*
                          </Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                            <Input
                              id="sueldoBase"
                              type="number"
                              min="0"
                              value={formData.sueldoBase}
                              onChange={(e) => handleInputChange("sueldoBase", Number.parseInt(e.target.value))}
                              className="bg-white/10 border-white/20 text-white pl-8 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                              placeholder="500000"
                            />
                          </div>
                          <p className="text-xs text-slate-400 mt-1">
                            Ingreso mínimo 2026: ${ingresoMinimo.toLocaleString("es-CL")}
                          </p>
                        </div>
                        <div>
                          <Label htmlFor="otrasRemuneracionesImponibles" className="text-slate-200 mb-2 block">
                            Otras remuneraciones fijas imponibles
                          </Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                            <Input
                              id="otrasRemuneracionesImponibles"
                              type="number"
                              min="0"
                              value={formData.otrasRemuneracionesImponibles}
                              onChange={(e) =>
                                handleInputChange("otrasRemuneracionesImponibles", Number.parseInt(e.target.value))
                              }
                              className="bg-white/10 border-white/20 text-white pl-8 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                              placeholder="0"
                            />
                          </div>
                          <p className="text-xs text-slate-400 mt-1">Ej: asignaciones, bonos fijos</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div>
                          <Label htmlFor="otrasRemuneracionesNoImponibles" className="text-slate-200 mb-2 block">
                            Otras remuneraciones fijas no imponibles
                          </Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                            <Input
                              id="otrasRemuneracionesNoImponibles"
                              type="number"
                              min="0"
                              value={formData.otrasRemuneracionesNoImponibles}
                              onChange={(e) =>
                                handleInputChange("otrasRemuneracionesNoImponibles", Number.parseInt(e.target.value))
                              }
                              className="bg-white/10 border-white/20 text-white pl-8 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                              placeholder="0"
                            />
                          </div>
                          <p className="text-xs text-slate-400 mt-1">Ej: viáticos, colación</p>
                        </div>
                        <div>
                          <Label htmlFor="gratificacionesProrrateo" className="text-slate-200 mb-2 block">
                            Las gratificaciones están incluidas en el sueldo
                          </Label>
                          <Select
                            value={formData.gratificacionesProrrateo ? "si" : "no"}
                            onValueChange={(value) => handleInputChange("gratificacionesProrrateo", value === "si")}
                          >
                            <SelectTrigger
                              id="gratificacionesProrrateo"
                              className="w-full bg-white/10 border-white/20 text-white"
                            >
                              <SelectValue placeholder="Selecciona" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="si">Sí (prorrateo mensual)</SelectItem>
                              <SelectItem value="no">No (se pagan por separado)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 p-6 rounded-lg">
                      <h3 className="text-white font-medium mb-4 flex items-center">
                        <Calculator className="h-5 w-5 mr-2 text-emerald-400" />
                        Remuneración variable (comisiones, bonos)
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <Label className="text-slate-200 mb-2 block">¿Recibe remuneración variable?*</Label>
                          <div className="flex space-x-3">
                            <Button
                              variant={formData.remuneracionVariable ? "default" : "outline"}
                              onClick={() => handleInputChange("remuneracionVariable", true)}
                              className={cn(
                                "flex-1",
                                formData.remuneracionVariable
                                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                                  : "border-white/20 text-slate-300 bg-transparent hover:bg-white/10",
                              )}
                            >
                              Sí, tengo comisiones/bonos
                            </Button>
                            <Button
                              variant={!formData.remuneracionVariable ? "default" : "outline"}
                              onClick={() => handleInputChange("remuneracionVariable", false)}
                              className={cn(
                                "flex-1",
                                !formData.remuneracionVariable
                                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                                  : "border-white/20 text-slate-300 bg-transparent hover:bg-white/10",
                              )}
                            >
                              No, solo sueldo fijo
                            </Button>
                          </div>
                        </div>

                        {formData.remuneracionVariable && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 p-4 bg-white/5 rounded-lg">
                            <div>
                              <Label htmlFor="variableMes1" className="text-slate-200 mb-2 block">
                                Último mes (más reciente)
                              </Label>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <Input
                                  id="variableMes1"
                                  type="number"
                                  min="0"
                                  value={formData.variableUltimosTresMeses[0]}
                                  onChange={(e) => handleVariableChange(0, Number.parseInt(e.target.value))}
                                  className="bg-white/10 border-white/20 text-white pl-8 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                  placeholder="0"
                                />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="variableMes2" className="text-slate-200 mb-2 block">
                                Penúltimo mes
                              </Label>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <Input
                                  id="variableMes2"
                                  type="number"
                                  min="0"
                                  value={formData.variableUltimosTresMeses[1]}
                                  onChange={(e) => handleVariableChange(1, Number.parseInt(e.target.value))}
                                  className="bg-white/10 border-white/20 text-white pl-8 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                  placeholder="0"
                                />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="variableMes3" className="text-slate-200 mb-2 block">
                                Antepenúltimo mes
                              </Label>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <Input
                                  id="variableMes3"
                                  type="number"
                                  min="0"
                                  value={formData.variableUltimosTresMeses[2]}
                                  onChange={(e) => handleVariableChange(2, Number.parseInt(e.target.value))}
                                  className="bg-white/10 border-white/20 text-white pl-8 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                  placeholder="0"
                                />
                              </div>
                            </div>
                            <div className="col-span-full">
                              <p className="text-xs text-slate-400">
                                Se calculará el promedio de los últimos 3 meses para determinar la remuneración variable
                                mensual
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={() => setActiveTab("datos")}
                        className="border-white/20 text-slate-300 bg-transparent hover:bg-white/10"
                      >
                        <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                        Anterior
                      </Button>
                      <Button
                        onClick={calcularFiniquito}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
                        disabled={isCalculating}
                      >
                        {isCalculating ? (
                          <>
                            <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                            Calculando finiquito...
                          </>
                        ) : (
                          <>
                            🚀 Calcular mi finiquito ahora
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
                      <div className="bg-white/10 p-6 rounded-lg">
                        <h3 className="text-white font-medium mb-4 flex items-center">
                          <FileText className="h-5 w-5 mr-2 text-emerald-400" />
                          Resultado del cálculo de finiquito laboral Chile
                        </h3>

                        <div className="grid gap-4">
                          <div className="bg-white/5 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium text-white">Información general del finiquito</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-slate-400">Causal de término</p>
                                <p className="font-medium text-white">{getCausalText(formData.causalTermino)}</p>
                              </div>
                              <div>
                                <p className="text-sm text-slate-400">Tiempo de servicio</p>
                                <p className="font-medium text-white">{resultado.tiempoServicio}</p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white/5 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium text-white">Detalle completo del finiquito</h4>
                            </div>
                            <div className="space-y-3">
                              <div className="flex justify-between py-1 border-b border-white/10">
                                <span className="text-slate-300">Remuneraciones pendientes</span>
                                <span className="font-medium text-white">
                                  {formatMoney(resultado.remuneracionesPendientes)}
                                </span>
                              </div>

                              {resultado.indemnizacionAvisoPrevio > 0 && (
                                <div className="flex justify-between py-1 border-b border-white/10">
                                  <span className="text-slate-300">Indemnización aviso previo</span>
                                  <span className="font-medium text-white">
                                    {formatMoney(resultado.indemnizacionAvisoPrevio)}
                                  </span>
                                </div>
                              )}

                              {resultado.indemnizacionAnosServicio > 0 && (
                                <div className="flex justify-between py-1 border-b border-white/10">
                                  <span className="text-slate-300">Indemnización por años de servicio</span>
                                  <span className="font-medium text-white">
                                    {formatMoney(resultado.indemnizacionAnosServicio)}
                                  </span>
                                </div>
                              )}

                              {resultado.vacacionesProporcionales > 0 && (
                                <div className="flex justify-between py-1 border-b border-white/10">
                                  <span className="text-slate-300">Vacaciones proporcionales</span>
                                  <span className="font-medium text-white">
                                    {formatMoney(resultado.vacacionesProporcionales)}
                                  </span>
                                </div>
                              )}

                              {resultado.feriadoProporcional > 0 && (
                                <div className="flex justify-between py-1 border-b border-white/10">
                                  <span className="text-slate-300">Feriado proporcional</span>
                                  <span className="font-medium text-white">
                                    {formatMoney(resultado.feriadoProporcional)}
                                  </span>
                                </div>
                              )}

                              {resultado.gratificacionesProporcionales > 0 && (
                                <div className="flex justify-between py-1 border-b border-white/10">
                                  <span className="text-slate-300">Gratificaciones proporcionales</span>
                                  <span className="font-medium text-white">
                                    {formatMoney(resultado.gratificacionesProporcionales)}
                                  </span>
                                </div>
                              )}

                              <div className="flex justify-between py-3 font-bold text-xl border-t border-emerald-500/30">
                                <span className="text-white">Total finiquito a pagar</span>
                                <span className="text-emerald-400 font-bold">{formatMoney(resultado.total)}</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white/5 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium text-white">Fórmulas y detalle del cálculo</h4>
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
                                className="text-slate-300 hover:text-white"
                              >
                                {expandedDetails.length ? "Ocultar todo" : "Mostrar todo"}
                              </Button>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="w-full justify-between text-left font-normal text-slate-300 hover:text-white hover:bg-white/10"
                                  onClick={() => toggleDetail("remuneraciones")}
                                >
                                  <span>Cálculo remuneraciones pendientes</span>
                                  <ChevronRight
                                    className={`h-4 w-4 transition-transform ${expandedDetails.includes("remuneraciones") ? "rotate-90" : ""}`}
                                  />
                                </Button>
                                {expandedDetails.includes("remuneraciones") && (
                                  <div className="p-3 text-sm bg-white/10 rounded mt-1 text-slate-300">
                                    <p>
                                      <strong>Fórmula:</strong> {resultado.formulas.remuneraciones}
                                    </p>
                                  </div>
                                )}
                              </div>

                              <div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="w-full justify-between text-left font-normal text-slate-300 hover:text-white hover:bg-white/10"
                                  onClick={() => toggleDetail("indemnizacionAviso")}
                                >
                                  <span>Cálculo indemnización aviso previo</span>
                                  <ChevronRight
                                    className={`h-4 w-4 transition-transform ${expandedDetails.includes("indemnizacionAviso") ? "rotate-90" : ""}`}
                                  />
                                </Button>
                                {expandedDetails.includes("indemnizacionAviso") && (
                                  <div className="p-3 text-sm bg-white/10 rounded mt-1 text-slate-300">
                                    <p>
                                      <strong>Fórmula:</strong> {resultado.formulas.indemnizacionAviso}
                                    </p>
                                  </div>
                                )}
                              </div>

                              <div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="w-full justify-between text-left font-normal text-slate-300 hover:text-white hover:bg-white/10"
                                  onClick={() => toggleDetail("indemnizacionAnos")}
                                >
                                  <span>Cálculo indemnización años de servicio</span>
                                  <ChevronRight
                                    className={`h-4 w-4 transition-transform ${expandedDetails.includes("indemnizacionAnos") ? "rotate-90" : ""}`}
                                  />
                                </Button>
                                {expandedDetails.includes("indemnizacionAnos") && (
                                  <div className="p-3 text-sm bg-white/10 rounded mt-1 text-slate-300">
                                    <p>
                                      <strong>Fórmula:</strong> {resultado.formulas.indemnizacionAnos}
                                    </p>
                                  </div>
                                )}
                              </div>

                              <div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="w-full justify-between text-left font-normal text-slate-300 hover:text-white hover:bg-white/10"
                                  onClick={() => toggleDetail("vacaciones")}
                                >
                                  <span>Cálculo vacaciones proporcionales</span>
                                  <ChevronRight
                                    className={`h-4 w-4 transition-transform ${expandedDetails.includes("vacaciones") ? "rotate-90" : ""}`}
                                  />
                                </Button>
                                {expandedDetails.includes("vacaciones") && (
                                  <div className="p-3 text-sm bg-white/10 rounded mt-1 text-slate-300">
                                    <p>
                                      <strong>Fórmula:</strong> {resultado.formulas.vacaciones}
                                    </p>
                                  </div>
                                )}
                              </div>

                              <div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="w-full justify-between text-left font-normal text-slate-300 hover:text-white hover:bg-white/10"
                                  onClick={() => toggleDetail("feriado")}
                                >
                                  <span>Cálculo feriado proporcional</span>
                                  <ChevronRight
                                    className={`h-4 w-4 transition-transform ${expandedDetails.includes("feriado") ? "rotate-90" : ""}`}
                                  />
                                </Button>
                                {expandedDetails.includes("feriado") && (
                                  <div className="p-3 text-sm bg-white/10 rounded mt-1 text-slate-300">
                                    <p>
                                      <strong>Fórmula:</strong> {resultado.formulas.feriado}
                                    </p>
                                  </div>
                                )}
                              </div>

                              <div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="w-full justify-between text-left font-normal text-slate-300 hover:text-white hover:bg-white/10"
                                  onClick={() => toggleDetail("gratificaciones")}
                                >
                                  <span>Cálculo gratificaciones proporcionales</span>
                                  <ChevronRight
                                    className={`h-4 w-4 transition-transform ${expandedDetails.includes("gratificaciones") ? "rotate-90" : ""}`}
                                  />
                                </Button>
                                {expandedDetails.includes("gratificaciones") && (
                                  <div className="p-3 text-sm bg-white/10 rounded mt-1 text-slate-300">
                                    <p>
                                      <strong>Fórmula:</strong> {resultado.formulas.gratificaciones}
                                    </p>
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
                          className="border-white/20 text-slate-300 bg-transparent hover:bg-white/10"
                        >
                          <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                          Volver a editar
                        </Button>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => {
                              window.print()
                            }}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white"
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
                        <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-center">
                          <p className="text-sm text-emerald-200 mb-3">
                            ¿Te fue útil esta <strong>calculadora de finiquito</strong>? ¡Compártela para ayudar a otros
                            trabajadores chilenos!
                          </p>
                          <ShareButton
                            title="Calculadora de Finiquito Chile - LegalPO"
                            text={getPromotionalShareContent()}
                            size="default"
                            variant="default"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </TabsContent>
                {error && (
                  <Alert className="mt-4 bg-red-500/10 border-red-500/20 text-red-200">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </Tabs>
            </CardContent>
            <CardFooter className="bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border-t border-white/10 p-4 text-center">
              <p className="text-sm text-slate-200 w-full">
                © 2026 LegalPO - <strong>Calculadora de finiquito</strong> basada en la legislación laboral chilena
                vigente
              </p>
            </CardFooter>
          </Card>

          {/* Legal Disclaimer */}
          <Card className="mt-8 bg-amber-500/5 border-amber-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-300 mb-2">Aviso Legal Importante</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Este <strong>cálculo de finiquito</strong> es solo una estimación basada en la información
                    proporcionada y las disposiciones generales del Código del Trabajo de Chile. El monto real puede
                    variar según circunstancias específicas, convenios colectivos, o interpretaciones legales
                    particulares. Para casos complejos o dudas específicas sobre tu{" "}
                    <strong>calculadora de finiquito</strong>, consulta con un abogado laboralista especializado en
                    finiquitos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Promo Sueldo Líquido */}
          <div className="mt-8 bg-gradient-to-br from-emerald-900/40 to-slate-900 border border-emerald-500/20 rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-emerald-500/20" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 rounded-full px-3 py-1 text-xs font-medium text-emerald-300">
                  <Star className="w-3 h-3" />
                  <span>Nueva Herramienta</span>
                </div>
                <h3 className="text-xl font-bold text-white">¿Buscas nuevo trabajo? Calcula tu Sueldo Real</h3>
                <p className="text-slate-300 text-sm max-w-lg">
                  Usa nuestra nueva calculadora de Sueldo Líquido 2026. Descuenta AFP (con comisiones exactas), Salud e Impuesto automáticamente.
                </p>
              </div>

              <Link href="/calculadora-sueldo-liquido">
                <Button className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20 transition-all hover:scale-105">
                  Calcular Sueldo Líquido
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Button>
              </Link>
            </div>
          </div>

          {/* SEO Content Section - Optimizado para "calculadora de finiquito" */}
          <div className="mt-12 space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Todo lo que necesitas saber sobre la calculadora de finiquito laboral en Chile
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Guía completa sobre cómo usar nuestra <strong>calculadora de finiquito</strong>, qué incluye, cuándo
                corresponde y cómo proteger tus derechos laborales con la <strong>calculadora finiquito chile</strong>{" "}
                más precisa
              </p>
            </div>

            {/* What is Finiquito Section */}
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <BookOpen className="h-6 w-6 mr-3 text-emerald-400" />
                      ¿Qué es la calculadora de finiquito laboral?
                    </h3>
                    <p className="text-slate-300 mb-4">
                      La <strong>calculadora de finiquito</strong> es una herramienta digital que te permite calcular de
                      forma precisa todos los montos que te corresponden al finalizar tu contrato de trabajo en Chile.
                      Nuestra <strong>calculadora finiquito chile</strong>
                      está basada en el Código del Trabajo chileno vigente.
                    </p>
                    <p className="text-slate-300 mb-4">
                      La <strong>calculadora de finiquito</strong> debe incluir conceptos como remuneraciones
                      pendientes, indemnizaciones, vacaciones proporcionales, gratificaciones y otros beneficios según
                      corresponda por ley chilena.
                    </p>
                    <div className="bg-emerald-500/10 p-4 rounded-lg border border-emerald-500/20">
                      <p className="text-emerald-200 text-sm">
                        <strong>Dato importante:</strong> Nuestra <strong>calculadora finiquito chile</strong> es 100%
                        gratuita y ha sido utilizada por más de 100,000 trabajadores chilenos.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg">
                    <h4 className="font-semibold text-white mb-4">Componentes de la calculadora de finiquito:</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                        Remuneraciones pendientes
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                        Indemnización por años de servicio
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                        Indemnización sustitutiva del aviso previo
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                        Vacaciones proporcionales
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                        Gratificaciones proporcionales
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                        Feriado proporcional (si corresponde)
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* When Finiquito Applies */}
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Scale className="h-6 w-6 mr-3 text-blue-400" />
                  ¿Cuándo usar la calculadora de finiquito en Chile?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">
                      Causales que generan indemnización en calculadora finiquito:
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                        <h5 className="font-medium text-green-300 mb-2">Art. 161 - Necesidades de la empresa</h5>
                        <p className="text-sm text-slate-300">
                          Genera derecho a indemnización por años de servicio y aviso previo (si no se dio). Usa nuestra{" "}
                          <strong>calculadora finiquito</strong>.
                        </p>
                      </div>
                      <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                        <h5 className="font-medium text-blue-300 mb-2">Despido injustificado</h5>
                        <p className="text-sm text-slate-300">
                          Puede generar derecho a indemnización aumentada. Calcula con nuestra{" "}
                          <strong>calculadora de finiquito</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">Causales sin indemnización en calculadora finiquito:</h4>
                    <div className="space-y-3">
                      <div className="bg-slate-500/10 p-4 rounded-lg border border-slate-500/20">
                        <h5 className="font-medium text-slate-300 mb-2">Art. 159 N°2 - Renuncia voluntaria</h5>
                        <p className="text-sm text-slate-300">
                          Solo genera derecho a remuneraciones pendientes y vacaciones. Verifica con{" "}
                          <strong>calculadora finiquito chile</strong>.
                        </p>
                      </div>
                      <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                        <h5 className="font-medium text-red-300 mb-2">Art. 160 - Causales graves</h5>
                        <p className="text-sm text-slate-300">
                          Faltas graves del trabajador, sin derecho a indemnización. Confirma con{" "}
                          <strong>calculadora de finiquito</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Calculate */}
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Calculator className="h-6 w-6 mr-3 text-emerald-400" />
                  ¿Cómo usar la calculadora de finiquito paso a paso?
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-white/10 p-6 rounded-lg">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h4 className="font-semibold text-white">Datos para calculadora finiquito</h4>
                    </div>
                    <ul className="text-sm text-slate-300 space-y-2">
                      <li>• Causal de término del contrato</li>
                      <li>• Fechas de inicio y término</li>
                      <li>• Días de vacaciones tomadas</li>
                      <li>• Aviso previo (si corresponde)</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h4 className="font-semibold text-white">Remuneraciones calculadora</h4>
                    </div>
                    <ul className="text-sm text-slate-300 space-y-2">
                      <li>• Sueldo base mensual</li>
                      <li>• Remuneraciones variables</li>
                      <li>• Otras remuneraciones fijas</li>
                      <li>• Gratificaciones incluidas</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h4 className="font-semibold text-white">Resultado calculadora finiquito</h4>
                    </div>
                    <ul className="text-sm text-slate-300 space-y-2">
                      <li>• Cálculo automático preciso</li>
                      <li>• Desglose detallado</li>
                      <li>• Fórmulas explicadas</li>
                      <li>• Total a recibir</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <p className="text-emerald-200 text-center">
                    <strong>Usa nuestra calculadora de finiquito arriba</strong> para obtener el cálculo exacto de tu
                    finiquito basado en tu situación específica y la legislación chilena vigente.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <HelpCircle className="h-6 w-6 mr-3 text-yellow-400" />
                  Preguntas frecuentes sobre calculadora de finiquito en Chile
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-emerald-400">
                      ¿Es confiable la calculadora de finiquito de LegalPO?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300">
                      Sí, nuestra <strong>calculadora de finiquito</strong> es 100% confiable y está basada en el Código
                      del Trabajo de Chile vigente. Ha sido utilizada por más de 100,000 trabajadores chilenos y tiene
                      una calificación de 4.9/5. La <strong>calculadora finiquito chile</strong>
                      es desarrollada por expertos en derecho laboral.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-emerald-400">
                      ¿La calculadora de finiquito es gratis?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300">
                      Sí, nuestra <strong>calculadora de finiquito</strong> es 100% gratuita y siempre lo será. No
                      necesitas registrarte ni pagar nada. Puedes usar la <strong>calculadora finiquito chile</strong>{" "}
                      las veces que necesites sin costo alguno.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-emerald-400">
                      ¿Qué tan precisa es la calculadora de finiquito?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300">
                      Nuestra <strong>calculadora de finiquito</strong> es extremadamente precisa ya que está basada en
                      las fórmulas exactas del Código del Trabajo chileno. La{" "}
                      <strong>calculadora finiquito chile</strong> considera todos los factores legales: indemnización
                      por años de servicio, vacaciones proporcionales, aviso previo, gratificaciones y más.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-emerald-400">
                      ¿Puedo confiar en el resultado de la calculadora de finiquito?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300">
                      El resultado de nuestra <strong>calculadora de finiquito</strong> es muy confiable para la mayoría
                      de casos estándar. Sin embargo, para situaciones complejas o casos especiales, recomendamos
                      consultar con un abogado laboralista. La <strong>calculadora finiquito chile</strong>
                      te da una excelente base para conocer tus derechos.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-emerald-400">
                      ¿La calculadora de finiquito incluye todos los conceptos?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300">
                      Sí, nuestra <strong>calculadora de finiquito</strong> incluye todos los conceptos principales:
                      remuneraciones pendientes, indemnización por años de servicio, aviso previo, vacaciones
                      proporcionales, feriado proporcional y gratificaciones. La{" "}
                      <strong>calculadora finiquito chile</strong> está actualizada con la legislación 2026.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-emerald-400">
                      ¿Cómo se compara esta calculadora de finiquito con otras?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300">
                      Nuestra <strong>calculadora de finiquito</strong> es la #1 en Chile por su precisión, facilidad de
                      uso y completitud. A diferencia de otras calculadoras básicas, nuestra{" "}
                      <strong>calculadora finiquito chile</strong> considera remuneraciones variables, diferentes
                      causales de término, y proporciona explicaciones detalladas de cada cálculo.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Legal Rights Section */}
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Gavel className="h-6 w-6 mr-3 text-red-400" />
                  Tus derechos laborales y la calculadora de finiquito
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-4">Derechos fundamentales con calculadora finiquito:</h4>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start">
                        <Shield className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          Derecho a usar <strong>calculadora de finiquito</strong> para conocer montos
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          Derecho a verificar cálculos con <strong>calculadora finiquito chile</strong>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Derecho a recibir finiquito completo y correcto</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Derecho a asesoría legal gratuita</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-4">¿Necesitas ayuda con tu calculadora de finiquito?</h4>
                    <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                      <p className="text-blue-200 mb-3">
                        Si tienes dudas sobre el resultado de la <strong>calculadora de finiquito</strong> o crees que
                        tu empleador no está pagando correctamente, puedes obtener ayuda gratuita en:
                      </p>
                      <ul className="text-sm text-slate-300 space-y-1">
                        <li>• Inspección del Trabajo</li>
                        <li>• Corporación de Asistencia Judicial</li>
                        <li>• Defensoría Laboral</li>
                        <li>• Sindicatos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border-emerald-500/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  ¿Listo para usar la calculadora de finiquito #1 de Chile?
                </h3>
                <p className="text-emerald-200 mb-6 max-w-2xl mx-auto">
                  Usa nuestra <strong>calculadora de finiquito</strong> gratuita y obtén el cálculo exacto de tu
                  finiquito en menos de 2 minutos. La <strong>calculadora finiquito chile</strong> más precisa, basada
                  en la legislación laboral chilena vigente y utilizada por más de 100,000 trabajadores.
                </p>
                <Button
                  onClick={() => setActiveTab("datos")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg"
                >
                  🚀 Usar calculadora de finiquito ahora
                  <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <AdUnit slot="1234567890" format="rectangle" />
          </div>
        </div>
      </section>
    </div>
  )
}
