"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ShareButton } from "@/components/share-button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { InfoIcon, Calculator, Users, DollarSign, FileText, AlertTriangle, CheckCircle } from "lucide-react"

interface Alimentario {
  edad: number
  tieneDiscapacidad: boolean
  estudiaUniversidad: boolean
  gastosAlimentacion: number
  gastosHabitacion: number
  gastosVestimenta: number
  gastosSalud: number
  gastosEducacion: number
  gastosMovilizacion: number
  gastosExtras: number
  viveConAlimentante: boolean
  observaciones: string
}

interface CuidadorPersonal {
  ingresoLiquido: number
  otrosIngresos: number
  gastosVivienda: number
  gastosPersonales: number
  trabajaFueraHogar: boolean
  tiempoCompleto: boolean
}

interface ResultadoCalculo {
  montoMinimo: number
  montoMaximo: number
  montoRecomendado: number
  minimoLegal: number
  porcentajeIngreso: number
  desglose: {
    alimentacion: number
    habitacion: number
    vestimenta: number
    salud: number
    educacion: number
    movilizacion: number
    otros: number
  }
  factoresConsiderados: string[]
  advertencias: string[]
  fundamentoLegal: string[]
  capacidadPago: {
    ingresoDisponible: number
    porcentajeComprometido: number
    evaluacion: string
  }
}

export default function CalculadoraPensionesPage() {
  // Estados del Alimentante
  const [ingresoLiquido, setIngresoLiquido] = useState<number>(0)
  const [tipoTrabajo, setTipoTrabajo] = useState<string>("")
  const [otrosIngresos, setOtrosIngresos] = useState<number>(0)
  const [gastosPersonales, setGastosPersonales] = useState<number>(0)
  const [otrasObligaciones, setOtrasObligaciones] = useState<number>(0)
  const [deudas, setDeudas] = useState<number>(0)
  const [regionResidencia, setRegionResidencia] = useState<string>("")

  // Estados del Cuidador Personal
  const [cuidador, setCuidador] = useState<CuidadorPersonal>({
    ingresoLiquido: 0,
    otrosIngresos: 0,
    gastosVivienda: 0,
    gastosPersonales: 0,
    trabajaFueraHogar: false,
    tiempoCompleto: false,
  })

  // Estados de los Alimentarios
  const [numeroAlimentarios, setNumeroAlimentarios] = useState<number>(1)
  const [alimentarios, setAlimentarios] = useState<Alimentario[]>([
    {
      edad: 5,
      tieneDiscapacidad: false,
      estudiaUniversidad: false,
      gastosAlimentacion: 0,
      gastosHabitacion: 0,
      gastosVestimenta: 0,
      gastosSalud: 0,
      gastosEducacion: 0,
      gastosMovilizacion: 0,
      gastosExtras: 0,
      viveConAlimentante: false,
      observaciones: "",
    },
  ])

  const [observaciones, setObservaciones] = useState<string>("")
  const [resultado, setResultado] = useState<ResultadoCalculo | null>(null)

  // Actualizar las constantes legales según la ley real
  const INGRESO_MINIMO = 510636 // Ingreso mínimo 2024 para mayores de 18 años
  const MINIMO_LEGAL_PORCENTAJE = 0.4 // 40% del ingreso mínimo (Art. 3°)
  const MAXIMO_LEGAL_PORCENTAJE = 0.5 // 50% de ingresos líquidos (Art. 7°)

  const formatMoney = (amount: number): string => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const actualizarNumeroAlimentarios = (num: number) => {
    setNumeroAlimentarios(num)
    const nuevosAlimentarios = Array.from(
      { length: num },
      (_, i) =>
        alimentarios[i] || {
          edad: 5,
          tieneDiscapacidad: false,
          estudiaUniversidad: false,
          gastosAlimentacion: 0,
          gastosHabitacion: 0,
          gastosVestimenta: 0,
          gastosSalud: 0,
          gastosEducacion: 0,
          gastosMovilizacion: 0,
          gastosExtras: 0,
          viveConAlimentante: false,
          observaciones: "",
        },
    )
    setAlimentarios(nuevosAlimentarios)
  }

  const actualizarAlimentario = (index: number, campo: keyof Alimentario, valor: any) => {
    const nuevosAlimentarios = [...alimentarios]
    nuevosAlimentarios[index] = { ...nuevosAlimentarios[index], [campo]: valor }
    setAlimentarios(nuevosAlimentarios)
  }

  const actualizarCuidador = (campo: keyof CuidadorPersonal, valor: any) => {
    setCuidador((prev) => ({ ...prev, [campo]: valor }))
  }

  // En la función calcularPension(), reemplazar toda la lógica de cálculo con:

  const calcularPension = () => {
    if (ingresoLiquido <= 0) {
      alert("Por favor, ingrese un ingreso líquido válido para el alimentante.")
      return
    }

    const ingresoTotalAlimentante = ingresoLiquido + otrosIngresos
    const ingresoTotalCuidador = cuidador.ingresoLiquido + cuidador.otrosIngresos

    // PRINCIPIO FUNDAMENTAL: El 50% SIEMPRE debe estar disponible para pensión
    // Los gastos excesivos del alimentante NO reducen esta disponibilidad
    // Solo se descuentan otras obligaciones alimentarias legales
    const ingresoDisponibleParaPension = ingresoTotalAlimentante - otrasObligaciones

    // MÍNIMO LEGAL según Art. 3° Ley 14.908 - SIEMPRE SE APLICA
    let minimoLegal = 0
    if (numeroAlimentarios === 1) {
      minimoLegal = INGRESO_MINIMO * MINIMO_LEGAL_PORCENTAJE // 40% para 1 menor
    } else {
      // Para 2 o más menores: 30% por cada uno
      minimoLegal = INGRESO_MINIMO * 0.3 * numeroAlimentarios
    }

    // MÁXIMO LEGAL según Art. 7° Ley 14.908
    // El 50% SIEMPRE debe estar disponible, independiente de gastos personales
    const maximoLegal = ingresoDisponibleParaPension * MAXIMO_LEGAL_PORCENTAJE

    const factoresConsiderados: string[] = []
    const advertencias: string[] = []
    const fundamentoLegal: string[] = []

    // Aplicar presunción del Art. 3°
    fundamentoLegal.push("Art. 3° Ley 14.908: Presunción legal de medios del alimentante")
    fundamentoLegal.push(`Mínimo legal: ${numeroAlimentarios === 1 ? "40%" : "30% por cada menor"} del ingreso mínimo`)
    fundamentoLegal.push("Art. 7° Ley 14.908: Máximo 50% siempre disponible para pensión")

    // ADVERTENCIAS sobre gastos excesivos
    const gastosTotalesDeclarados = gastosPersonales + deudas
    const porcentajeGastosPersonales = (gastosTotalesDeclarados / ingresoTotalAlimentante) * 100

    if (porcentajeGastosPersonales > 50) {
      advertencias.push(
        `ATENCIÓN: Gastos personales (${porcentajeGastosPersonales.toFixed(1)}%) superan el 50% del ingreso. Esto NO reduce la obligación alimentaria.`,
      )
      factoresConsiderados.push("Gastos excesivos no afectan el cálculo - protección legal de alimentarios")
    }

    if (deudas > 0) {
      advertencias.push(
        `Las deudas personales (${formatMoney(deudas)}) NO reducen la obligación alimentaria según jurisprudencia.`,
      )
    }

    // Lógica de equidad: quien gana más, no puede pagar menos porcentaje que quien gana el mínimo
    if (ingresoTotalAlimentante > INGRESO_MINIMO * 2) {
      factoresConsiderados.push("Ingresos superiores al doble del mínimo - mayor capacidad contributiva")
    }

    // Cálculo base considerando capacidad económica real
    let porcentajeBase = 0.25 // Base para 1 alimentario
    if (numeroAlimentarios === 2) porcentajeBase = 0.35
    else if (numeroAlimentarios === 3) porcentajeBase = 0.45
    else if (numeroAlimentarios >= 4) porcentajeBase = 0.5

    // Factores de ajuste según circunstancias específicas
    let factorAjuste = 1

    // Análisis por alimentario
    alimentarios.forEach((alimentario, index) => {
      // Menores de 2 años (mayores necesidades)
      if (alimentario.edad < 2) {
        factorAjuste += 0.1
        factoresConsiderados.push(`Alimentario ${index + 1}: Menor de 2 años (+10%)`)
      }

      // Estudiantes universitarios (Art. 3° inc. 2°)
      if (alimentario.edad >= 18 && alimentario.edad <= 28 && alimentario.estudiaUniversidad) {
        factorAjuste += 0.08
        factoresConsiderados.push(`Alimentario ${index + 1}: Estudiante universitario hasta 28 años (+8%)`)
        fundamentoLegal.push("Art. 3° inc. 2° Ley 14.908: Estudios superiores hasta 28 años")
      }

      // Discapacidad
      if (alimentario.tieneDiscapacidad) {
        factorAjuste += 0.15
        factoresConsiderados.push(`Alimentario ${index + 1}: Con discapacidad (+15%)`)
        fundamentoLegal.push("Necesidades especiales por discapacidad")
      }

      // Convivencia con alimentante
      if (alimentario.viveConAlimentante) {
        factorAjuste -= 0.08
        factoresConsiderados.push(`Alimentario ${index + 1}: Vive con alimentante (-8%)`)
      }

      // Advertencia para mayores de 28 años
      if (alimentario.edad > 28 && !alimentario.tieneDiscapacidad) {
        advertencias.push(`Alimentario ${index + 1}: Mayor de 28 años - verificar si corresponde pensión`)
      }
    })

    // Considerar gastos reales declarados
    const gastosRealesTotal = alimentarios.reduce(
      (sum, a) =>
        sum +
        a.gastosAlimentacion +
        a.gastosHabitacion +
        a.gastosVestimenta +
        a.gastosSalud +
        a.gastosEducacion +
        a.gastosMovilizacion +
        a.gastosExtras,
      0,
    )

    if (gastosRealesTotal > minimoLegal) {
      factorAjuste += 0.05
      factoresConsiderados.push(`Gastos reales declarados superiores al mínimo legal (+5%)`)
    }

    // Análisis de capacidad económica del cuidador (Art. 6°)
    if (ingresoTotalCuidador > 0) {
      const proporcionIngresos = (ingresoTotalCuidador / ingresoTotalAlimentante) * 100
      factoresConsiderados.push(`Cuidador aporta ${proporcionIngresos.toFixed(1)}% de los ingresos familiares`)

      // Solo reducir si el cuidador tiene ingresos muy superiores
      if (ingresoTotalCuidador > ingresoTotalAlimentante * 1.2) {
        factorAjuste -= 0.05
        factoresConsiderados.push("Cuidador con ingresos superiores al alimentante (-5%)")
        fundamentoLegal.push("Art. 6° Ley 14.908: Consideración de capacidad económica de ambos padres")
      }
    } else {
      factorAjuste += 0.03
      factoresConsiderados.push("Cuidador sin ingresos propios (+3%)")
    }

    // Ajustes por región
    if (regionResidencia === "metropolitana") {
      factorAjuste += 0.06
      factoresConsiderados.push("Región Metropolitana: Mayor costo de vida (+6%)")
    } else if (["antofagasta", "tarapaca", "magallanes"].includes(regionResidencia)) {
      factorAjuste += 0.05
      factoresConsiderados.push("Región extrema: Mayor costo de vida (+5%)")
    }

    // Cálculo del monto base (resto del código de factores se mantiene igual)
    const porcentajeFinal = Math.min(porcentajeBase * factorAjuste, MAXIMO_LEGAL_PORCENTAJE)
    const montoCalculado = ingresoDisponibleParaPension * porcentajeFinal

    // Considerar gastos reales si son superiores
    const montoBasadoEnGastos = gastosRealesTotal > 0 ? gastosRealesTotal : 0
    const montoBase = Math.max(montoCalculado, montoBasadoEnGastos)

    // APLICAR LÍMITES LEGALES ESTRICTOS
    // 1. NUNCA menor al mínimo legal
    // 2. NUNCA mayor al 50% disponible
    const montoRecomendado = Math.max(minimoLegal, Math.min(montoBase, maximoLegal))

    // Verificación de equidad
    const porcentajeDelIngreso = (montoRecomendado / ingresoTotalAlimentante) * 100
    if (porcentajeDelIngreso < 40 && ingresoTotalAlimentante > INGRESO_MINIMO * 1.5) {
      advertencias.push("Con este nivel de ingresos, el porcentaje podría ser superior para mantener equidad")
    }

    // Evaluación de capacidad considerando el principio del 50%
    const porcentajeComprometido = (montoRecomendado / ingresoDisponibleParaPension) * 100
    let evaluacionCapacidad = ""
    if (porcentajeComprometido <= 30) {
      evaluacionCapacidad = "Capacidad de pago adecuada"
    } else if (porcentajeComprometido <= 40) {
      evaluacionCapacidad = "Capacidad de pago moderada"
    } else if (porcentajeComprometido <= 50) {
      evaluacionCapacidad = "En el límite legal del 50%"
    } else {
      evaluacionCapacidad = "Requiere reorganización financiera obligatoria"
      advertencias.push("El alimentante debe reorganizar sus gastos para cumplir la obligación legal")
    }

    // Verificaciones legales
    if (montoRecomendado === minimoLegal) {
      fundamentoLegal.push("Se aplica mínimo legal por presunción de medios (Art. 3°)")
      if (ingresoTotalAlimentante > INGRESO_MINIMO * 2) {
        advertencias.push("Con este nivel de ingresos, el monto podría ser superior al mínimo legal")
      }
    }

    if (montoRecomendado === maximoLegal) {
      advertencias.push("Se aplica el máximo legal del 50% de los ingresos totales (Art. 7°)")
      fundamentoLegal.push("Art. 7° Ley 14.908: Límite máximo del 50%")
    }

    // Advertencias sobre la presunción legal
    if (ingresoTotalAlimentante >= INGRESO_MINIMO) {
      fundamentoLegal.push("Presunción legal: El alimentante tiene medios para pagar al menos el mínimo")
    }

    // Mensaje sobre rebaja prudencial
    if (ingresoTotalAlimentante < INGRESO_MINIMO * 0.8) {
      advertencias.push("Solo con ingresos muy bajos puede solicitarse rebaja prudencial del mínimo (Art. 3°)")
    }

    // Desglose de gastos (igual que antes)
    let desglose
    if (gastosRealesTotal > 0 && gastosRealesTotal >= minimoLegal) {
      const factor = montoRecomendado / gastosRealesTotal
      desglose = {
        alimentacion: alimentarios.reduce((sum, a) => sum + a.gastosAlimentacion, 0) * factor,
        habitacion: alimentarios.reduce((sum, a) => sum + a.gastosHabitacion, 0) * factor,
        vestimenta: alimentarios.reduce((sum, a) => sum + a.gastosVestimenta, 0) * factor,
        salud: alimentarios.reduce((sum, a) => sum + a.gastosSalud, 0) * factor,
        educacion: alimentarios.reduce((sum, a) => sum + a.gastosEducacion, 0) * factor,
        movilizacion: alimentarios.reduce((sum, a) => sum + a.gastosMovilizacion, 0) * factor,
        otros: alimentarios.reduce((sum, a) => sum + a.gastosExtras, 0) * factor,
      }
    } else {
      desglose = {
        alimentacion: montoRecomendado * 0.35,
        habitacion: montoRecomendado * 0.25,
        vestimenta: montoRecomendado * 0.08,
        salud: montoRecomendado * 0.12,
        educacion: montoRecomendado * 0.15,
        movilizacion: montoRecomendado * 0.03,
        otros: montoRecomendado * 0.02,
      }
    }

    // Evaluación de capacidad de pago basada en ingreso disponible real
    // const porcentajeComprometido = (montoRecomendado / Math.max(ingresoDisponible, ingresoTotalAlimentante * 0.5)) * 100
    // let evaluacionCapacidad = ""
    // if (porcentajeComprometido <= 30) {
    //   evaluacionCapacidad = "Capacidad de pago adecuada"
    // } else if (porcentajeComprometido <= 40) {
    //   evaluacionCapacidad = "Capacidad de pago moderada"
    // } else if (porcentajeComprometido <= 50) {
    //   evaluacionCapacidad = "Capacidad de pago en el límite legal"
    // } else {
    //   evaluacionCapacidad = "Requiere reorganización financiera del alimentante"
    //   advertencias.push("El alimentante debe reorganizar sus finanzas para cumplir la obligación legal")
    // }

    setResultado({
      montoMinimo: minimoLegal,
      montoMaximo: maximoLegal,
      montoRecomendado,
      minimoLegal,
      porcentajeIngreso: (montoRecomendado / ingresoTotalAlimentante) * 100,
      desglose,
      factoresConsiderados,
      advertencias,
      fundamentoLegal,
      capacidadPago: {
        ingresoDisponible: ingresoDisponibleParaPension,
        porcentajeComprometido,
        evaluacion: evaluacionCapacidad,
      },
    })
  }

  const getShareableContent = () => {
    if (!resultado) return ""

    return `🎯 CALCULÉ PENSIÓN ALIMENTICIA EN LEGALPO

💰 Monto recomendado: ${formatMoney(resultado.montoRecomendado)}
📊 Equivale al ${resultado.porcentajeIngreso.toFixed(1)}% del ingreso
👨‍👩‍👧‍👦 Para ${numeroAlimentarios} alimentario${numeroAlimentarios > 1 ? "s" : ""}
⚖️ Mínimo legal: ${formatMoney(resultado.minimoLegal)}

✅ Basado en Ley 14.908 actualizada
🇨🇱 Cálculo oficial para Chile
💯 100% GRATIS en LegalPO.cl

#PensionAlimenticia #Ley14908 #Chile #LegalPO
⚠️ *Estimación referencial - El juez determinará el monto final*`
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Calculadora de Pensión Alimenticia</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Basada en la Ley 14.908 actualizada sobre Abandono de Familia y Pago de Pensiones Alimenticias
          </p>
          <div className="flex justify-center mb-6">
            <ShareButton
              title="Calculadora de Pensión Alimenticia - LegalPO"
              text="🎯 Calcula tu pensión alimenticia según la Ley 14.908 actualizada

✅ Considera TODOS los factores legales
🇨🇱 Basado en jurisprudencia chilena
💯 100% GRATIS

¡Pruébala ahora en LegalPO.cl!"
              size="default"
              variant="outline"
            />
          </div>

          {/* Información legal importante */}
          <Alert className="mb-6">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Información Legal Importante</AlertTitle>
            <AlertDescription>
              <div className="text-sm space-y-1">
                <p>
                  • <strong>Mínimo legal:</strong> 40% del ingreso mínimo remuneracional ($
                  {formatMoney(INGRESO_MINIMO * MINIMO_LEGAL_PORCENTAJE)})
                </p>
                <p>
                  • <strong>Máximo legal:</strong> 50% de los ingresos líquidos del alimentante
                </p>
                <p>• Esta calculadora considera todos los factores establecidos en la Ley 14.908</p>
              </div>
            </AlertDescription>
          </Alert>
          {/* Disclaimer Legal Prominente */}
          <Alert className="mb-6 border-amber-200 bg-amber-50">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-amber-800">Importante: Este es solo un Estimado</AlertTitle>
            <AlertDescription className="text-amber-700">
              <div className="space-y-2 text-sm">
                <p className="font-medium">
                  Esta calculadora proporciona únicamente una <strong>estimación referencial</strong> basada en los
                  parámetros de la Ley 14.908.
                </p>
                <p>
                  <strong>
                    El monto definitivo de la pensión alimenticia será determinado exclusivamente por el juez competente
                  </strong>
                  , quien considerará todos los antecedentes, pruebas y circunstancias específicas que se presenten
                  durante el proceso judicial.
                </p>
                <p>
                  Los resultados de esta calculadora <strong>no constituyen asesoría legal</strong> ni tienen valor
                  vinculante. Para casos específicos, se recomienda consultar con un abogado especialista en derecho de
                  familia.
                </p>
              </div>
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Columna 1: Información del Alimentante */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Alimentante (Quien Paga)
                </CardTitle>
                <CardDescription>Información económica de quien debe pagar la pensión</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="ingreso">Ingreso Líquido Mensual (CLP) *</Label>
                  <Input
                    type="number"
                    id="ingreso"
                    placeholder="Ej: 800000"
                    value={ingresoLiquido || ""}
                    onChange={(e) => setIngresoLiquido(Number(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Después de descuentos legales (AFP, Fonasa, impuestos)
                  </p>
                </div>

                <div>
                  <Label htmlFor="tipo-trabajo">Tipo de Trabajo</Label>
                  <Select value={tipoTrabajo} onValueChange={setTipoTrabajo}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione tipo de trabajo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dependiente">Trabajador Dependiente</SelectItem>
                      <SelectItem value="independiente">Trabajador Independiente</SelectItem>
                      <SelectItem value="empresario">Empresario</SelectItem>
                      <SelectItem value="profesional">Profesional Liberal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="otros-ingresos">Otros Ingresos Mensuales (CLP)</Label>
                  <Input
                    type="number"
                    id="otros-ingresos"
                    placeholder="Ej: 200000"
                    value={otrosIngresos || ""}
                    onChange={(e) => setOtrosIngresos(Number(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground mt-1">Arriendos, dividendos, pensiones, etc.</p>
                </div>

                <div>
                  <Label htmlFor="gastos-personales">Gastos Personales Básicos (CLP)</Label>
                  <Input
                    type="number"
                    id="gastos-personales"
                    placeholder="Ej: 300000"
                    value={gastosPersonales || ""}
                    onChange={(e) => setGastosPersonales(Number(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground mt-1">Vivienda, alimentación, transporte básico</p>
                </div>

                <div>
                  <Label htmlFor="otras-obligaciones">Otras Obligaciones Alimentarias (CLP)</Label>
                  <Input
                    type="number"
                    id="otras-obligaciones"
                    placeholder="Ej: 150000"
                    value={otrasObligaciones || ""}
                    onChange={(e) => setOtrasObligaciones(Number(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground mt-1">Pensiones a otros hijos, padres, etc.</p>
                </div>

                <div>
                  <Label htmlFor="deudas">Deudas y Compromisos Financieros (CLP)</Label>
                  <Input
                    type="number"
                    id="deudas"
                    placeholder="Ej: 100000"
                    value={deudas || ""}
                    onChange={(e) => setDeudas(Number(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground mt-1">Créditos, tarjetas, etc.</p>
                </div>

                <div>
                  <Label htmlFor="region">Región de Residencia</Label>
                  <Select value={regionResidencia} onValueChange={setRegionResidencia}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione región" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="metropolitana">Región Metropolitana</SelectItem>
                      <SelectItem value="valparaiso">Valparaíso</SelectItem>
                      <SelectItem value="biobio">Biobío</SelectItem>
                      <SelectItem value="antofagasta">Antofagasta</SelectItem>
                      <SelectItem value="tarapaca">Tarapacá</SelectItem>
                      <SelectItem value="magallanes">Magallanes</SelectItem>
                      <SelectItem value="otra">Otra Región</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Información del Cuidador Personal */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Cuidador Personal
                </CardTitle>
                <CardDescription>Quien tiene el cuidado personal de los alimentarios</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cuidador-ingreso">Ingreso Líquido Mensual (CLP)</Label>
                  <Input
                    type="number"
                    id="cuidador-ingreso"
                    placeholder="Ej: 500000"
                    value={cuidador.ingresoLiquido || ""}
                    onChange={(e) => actualizarCuidador("ingresoLiquido", Number(e.target.value))}
                  />
                </div>

                <div>
                  <Label htmlFor="cuidador-otros">Otros Ingresos (CLP)</Label>
                  <Input
                    type="number"
                    id="cuidador-otros"
                    placeholder="Ej: 100000"
                    value={cuidador.otrosIngresos || ""}
                    onChange={(e) => actualizarCuidador("otrosIngresos", Number(e.target.value))}
                  />
                </div>

                <div>
                  <Label htmlFor="cuidador-vivienda">Gastos de Vivienda (CLP)</Label>
                  <Input
                    type="number"
                    id="cuidador-vivienda"
                    placeholder="Ej: 200000"
                    value={cuidador.gastosVivienda || ""}
                    onChange={(e) => actualizarCuidador("gastosVivienda", Number(e.target.value))}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="trabaja-fuera"
                    checked={cuidador.trabajaFueraHogar}
                    onCheckedChange={(checked) => actualizarCuidador("trabajaFueraHogar", checked)}
                  />
                  <Label htmlFor="trabaja-fuera">Trabaja fuera del hogar</Label>
                </div>

                {cuidador.trabajaFueraHogar && (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="tiempo-completo"
                      checked={cuidador.tiempoCompleto}
                      onCheckedChange={(checked) => actualizarCuidador("tiempoCompleto", checked)}
                    />
                    <Label htmlFor="tiempo-completo">Trabajo de tiempo completo</Label>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Columna 2: Información de los Alimentarios */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Alimentarios (Beneficiarios)
                </CardTitle>
                <CardDescription>Información de quienes reciben la pensión</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="numero-alimentarios">Número de Alimentarios *</Label>
                  <Select
                    value={numeroAlimentarios.toString()}
                    onValueChange={(value) => actualizarNumeroAlimentarios(Number(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} alimentario{num > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {alimentarios.map((alimentario, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Alimentario {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label>Edad (años)</Label>
                          <Input
                            type="number"
                            value={alimentario.edad}
                            onChange={(e) => actualizarAlimentario(index, "edad", Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={`discapacidad-${index}`}
                              checked={alimentario.tieneDiscapacidad}
                              onCheckedChange={(checked) => actualizarAlimentario(index, "tieneDiscapacidad", checked)}
                            />
                            <Label htmlFor={`discapacidad-${index}`} className="text-sm">
                              Discapacidad
                            </Label>
                          </div>
                          {alimentario.edad >= 18 && (
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id={`universidad-${index}`}
                                checked={alimentario.estudiaUniversidad}
                                onCheckedChange={(checked) =>
                                  actualizarAlimentario(index, "estudiaUniversidad", checked)
                                }
                              />
                              <Label htmlFor={`universidad-${index}`} className="text-sm">
                                Estudia universidad
                              </Label>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Gastos Mensuales Específicos (CLP)</Label>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Label className="text-xs">Alimentación</Label>
                            <Input
                              type="number"
                              value={alimentario.gastosAlimentacion || ""}
                              onChange={(e) =>
                                actualizarAlimentario(index, "gastosAlimentacion", Number(e.target.value))
                              }
                              placeholder="0"
                              className="text-sm"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">Habitación</Label>
                            <Input
                              type="number"
                              value={alimentario.gastosHabitacion || ""}
                              onChange={(e) => actualizarAlimentario(index, "gastosHabitacion", Number(e.target.value))}
                              placeholder="0"
                              className="text-sm"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">Vestimenta</Label>
                            <Input
                              type="number"
                              value={alimentario.gastosVestimenta || ""}
                              onChange={(e) => actualizarAlimentario(index, "gastosVestimenta", Number(e.target.value))}
                              placeholder="0"
                              className="text-sm"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">Salud</Label>
                            <Input
                              type="number"
                              value={alimentario.gastosSalud || ""}
                              onChange={(e) => actualizarAlimentario(index, "gastosSalud", Number(e.target.value))}
                              placeholder="0"
                              className="text-sm"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">Educación</Label>
                            <Input
                              type="number"
                              value={alimentario.gastosEducacion || ""}
                              onChange={(e) => actualizarAlimentario(index, "gastosEducacion", Number(e.target.value))}
                              placeholder="0"
                              className="text-sm"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">Movilización</Label>
                            <Input
                              type="number"
                              value={alimentario.gastosMovilizacion || ""}
                              onChange={(e) =>
                                actualizarAlimentario(index, "gastosMovilizacion", Number(e.target.value))
                              }
                              placeholder="0"
                              className="text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <Label className="text-xs">Otros gastos</Label>
                          <Input
                            type="number"
                            value={alimentario.gastosExtras || ""}
                            onChange={(e) => actualizarAlimentario(index, "gastosExtras", Number(e.target.value))}
                            placeholder="0"
                            className="text-sm"
                          />
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={`vive-con-${index}`}
                          checked={alimentario.viveConAlimentante}
                          onCheckedChange={(checked) => actualizarAlimentario(index, "viveConAlimentante", checked)}
                        />
                        <Label htmlFor={`vive-con-${index}`} className="text-sm">
                          Vive con el alimentante
                        </Label>
                      </div>

                      <div>
                        <Label className="text-xs">Observaciones</Label>
                        <Textarea
                          value={alimentario.observaciones}
                          onChange={(e) => actualizarAlimentario(index, "observaciones", e.target.value)}
                          placeholder="Circunstancias especiales..."
                          rows={2}
                          className="text-sm"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Observaciones Generales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Circunstancias especiales, gastos extraordinarios, situaciones particulares..."
                  value={observaciones}
                  onChange={(e) => setObservaciones(e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Button onClick={calcularPension} className="w-full" size="lg">
              <Calculator className="mr-2 h-5 w-5" />
              Calcular Pensión Alimenticia
            </Button>
          </div>

          {/* Columna 3: Resultados */}
          <div className="space-y-6">
            {resultado && (
              <>
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Resultado del Cálculo
                    </CardTitle>
                    <CardDescription>Basado en la Ley 14.908 y jurisprudencia chilena</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-green-700">{formatMoney(resultado.montoRecomendado)}</div>
                      <Badge variant="secondary" className="text-sm">
                        {resultado.porcentajeIngreso.toFixed(1)}% del ingreso disponible
                      </Badge>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Mínimo legal:</span>
                        <span className="font-medium text-blue-600">{formatMoney(resultado.minimoLegal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Rango mínimo:</span>
                        <span className="font-medium">{formatMoney(resultado.montoMinimo)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Rango máximo:</span>
                        <span className="font-medium">{formatMoney(resultado.montoMaximo)}</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h4 className="font-medium">Capacidad de Pago</h4>
                      <div className="flex justify-between">
                        <span className="text-sm">Ingreso disponible:</span>
                        <span className="text-sm">{formatMoney(resultado.capacidadPago.ingresoDisponible)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">% Comprometido:</span>
                        <span className="text-sm">{resultado.capacidadPago.porcentajeComprometido.toFixed(1)}%</span>
                      </div>
                      <div className="text-sm font-medium text-center p-2 rounded bg-gray-100">
                        {resultado.capacidadPago.evaluacion}
                      </div>
                    </div>

                    <div className="text-center">
                      <ShareButton
                        title="Calculadora de Pensión Alimenticia - LegalPO"
                        text={getShareableContent()}
                        size="sm"
                        variant="default"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Desglose */}
                <Card>
                  <CardHeader>
                    <CardTitle>Desglose por Necesidades</CardTitle>
                    <CardDescription>Distribución según Art. 3° Ley 14.908</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(resultado.desglose).map(([categoria, monto]) => (
                      <div key={categoria} className="flex justify-between items-center">
                        <span className="capitalize text-sm">{categoria.replace(/([A-Z])/g, " $1").trim()}:</span>
                        <span className="font-medium">{formatMoney(monto)}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Fundamento Legal */}
                {resultado.fundamentoLegal.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Fundamento Legal
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        {resultado.fundamentoLegal.map((fundamento, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{fundamento}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Factores Considerados */}
                {resultado.factoresConsiderados.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <InfoIcon className="h-5 w-5" />
                        Factores Considerados
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        {resultado.factoresConsiderados.map((factor, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">•</span>
                            <span>{factor}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Advertencias */}
                {resultado.advertencias.length > 0 && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Advertencias Importantes</AlertTitle>
                    <AlertDescription>
                      <ul className="space-y-1 mt-2">
                        {resultado.advertencias.map((advertencia, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span>•</span>
                            <span>{advertencia}</span>
                          </li>
                        ))}
                      </ul>
                    </AlertDescription>
                  </Alert>
                )}

                {/* Información Legal */}
                {/* Reemplazar el contenido del Card con información legal al final: */}
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Marco Legal - Ley 14.908 Actualizada</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-700 space-y-2">
                    <p>
                      • <strong>Art. 3°:</strong> Presunción de medios del alimentante. Mínimo: 40% del ingreso mínimo
                      para 1 menor, 30% por cada uno si son 2 o más.
                    </p>
                    <p>
                      • <strong>Art. 6°:</strong> Debe considerar capacidad económica del alimentante y necesidades del
                      alimentario, incluyendo trabajo de cuidados.
                    </p>
                    <p>
                      • <strong>Art. 7°:</strong> Máximo legal: 50% de las rentas del alimentante, salvo razones
                      fundadas.
                    </p>
                    <p>
                      • <strong>Estudios superiores:</strong> Hasta los 28 años según Art. 3° inc. 2°.
                    </p>
                    <p className="font-medium border-t pt-2 mt-3">
                      <strong>DISCLAIMER:</strong> Esta calculadora es una herramienta de estimación basada en la Ley
                      14.908. El monto final será determinado por el tribunal competente considerando todos los
                      antecedentes del caso. Los resultados no constituyen asesoría legal ni tienen carácter vinculante.
                    </p>
                  </CardContent>
                </Card>
              </>
            )}

            {!resultado && (
              <Card className="border-dashed">
                <CardContent className="text-center py-12">
                  <Calculator className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Complete la información y haga clic en "Calcular" para ver los resultados
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    La calculadora considera todos los factores establecidos en la Ley 14.908
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
