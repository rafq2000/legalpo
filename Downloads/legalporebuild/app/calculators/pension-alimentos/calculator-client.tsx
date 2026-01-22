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
import {
    InfoIcon,
    Calculator,
    Users,
    DollarSign,
    FileText,
    AlertTriangle,
    CheckCircle,
    Heart,
    Lightbulb,
    Scale,
} from "lucide-react"

interface Alimentario {
    edad: number
    tieneDiscapacidad: boolean
    estudiaUniversidad: boolean
    gastosTotal: number
    viveConAlimentante: boolean
    observaciones: string
}

interface CuidadorPersonal {
    ingresoLiquido: number
    otrosIngresos: number
    gastosPersonales: number
    trabajaFueraHogar: boolean
    tiempoCompleto: boolean
}

interface ResultadoCalculo {
    rangoMinimo: number
    rangoMaximo: number
    montoRecomendado: number
    minimoLegal: number
    maximoLegal: number
    porcentajeIngreso: number
    porcentajeProporcional: number
    montoBasadoEnGastos: number
    montoBasadoEnProporcionalidad: number
    factoresConsiderados: string[]
    advertencias: string[]
    fundamentoLegal: string[]
    capacidadPago: {
        ingresoDisponible: number
        porcentajeComprometido: number
        evaluacion: string
    }
}

export default function CalculatorClient() {
    // Estados del Alimentante
    const [ingresoLiquido, setIngresoLiquido] = useState<number>(0)
    const [tipoTrabajo, setTipoTrabajo] = useState<string>("")
    const [otrosIngresos, setOtrosIngresos] = useState<number>(0)
    const [gastosPersonales, setGastosPersonales] = useState<number>(0)
    const [otrasObligaciones, setOtrasObligaciones] = useState<number>(0)
    const [deudas, setDeudas] = useState<number>(0)
    const [regionResidencia, setRegionResidencia] = useState<string>("")
    const [relacionAlimentante, setRelacionAlimentante] = useState<string>("")

    // Estados del Cuidador Personal
    const [cuidador, setCuidador] = useState<CuidadorPersonal>({
        ingresoLiquido: 0,
        otrosIngresos: 0,
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
            gastosTotal: 0,
            viveConAlimentante: false,
            observaciones: "",
        },
    ])

    const [observaciones, setObservaciones] = useState<string>("")
    const [resultado, setResultado] = useState<ResultadoCalculo | null>(null)

    // Constantes legales
    const INGRESO_MINIMO = 539000
    const MINIMO_LEGAL_PORCENTAJE = 0.4
    const MAXIMO_LEGAL_PORCENTAJE = 0.5

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
                    gastosTotal: 0,
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

    const calcularPension = () => {
        if (ingresoLiquido <= 0) {
            alert("Por favor, ingrese un ingreso líquido válido para el alimentante.")
            return
        }

        if (!relacionAlimentante) {
            alert("Por favor, seleccione la relación del alimentante con los beneficiarios.")
            return
        }

        const ingresoTotalAlimentante = ingresoLiquido + otrosIngresos
        const ingresoTotalCuidador = cuidador.ingresoLiquido + cuidador.otrosIngresos
        const ingresoFamiliarTotal = ingresoTotalAlimentante + ingresoTotalCuidador

        // El 50% SIEMPRE debe estar disponible para pensión
        const ingresoDisponibleParaPension = ingresoTotalAlimentante - otrasObligaciones

        const factoresConsiderados: string[] = []
        const advertencias: string[] = []
        const fundamentoLegal: string[] = []

        // DIFERENCIACIÓN POR TIPO DE ALIMENTANTE
        let minimoLegal = 0
        const esPadre = relacionAlimentante === "padre" || relacionAlimentante === "madre"

        if (esPadre) {
            if (numeroAlimentarios === 1) {
                minimoLegal = INGRESO_MINIMO * MINIMO_LEGAL_PORCENTAJE
            } else {
                minimoLegal = INGRESO_MINIMO * 0.3 * numeroAlimentarios
            }
            fundamentoLegal.push("Art. 3° Ley 14.908: Presunción legal de medios del padre/madre")
            fundamentoLegal.push(
                `Mínimo legal: ${numeroAlimentarios === 1 ? "40%" : "30% por cada menor"} del ingreso mínimo`,
            )
        } else {
            minimoLegal = 0
            fundamentoLegal.push("Obligación alimentaria subsidiaria - No rige mínimo legal del Art. 3°")
            factoresConsiderados.push("Alimentante subsidiario: cálculo basado en proporcionalidad")
        }

        // MÁXIMO LEGAL - 50% para TODAS las pensiones alimenticias
        const maximoLegalTotal = ingresoDisponibleParaPension * MAXIMO_LEGAL_PORCENTAJE
        const maximoLegalDisponible = maximoLegalTotal - otrasObligaciones

        // VALIDACIÓN DE PROPORCIONALIDAD DE GASTOS
        const alimentariosConDiscapacidad = alimentarios.filter((a) => a.tieneDiscapacidad).length
        const alimentariosSinDiscapacidad = numeroAlimentarios - alimentariosConDiscapacidad

        if (numeroAlimentarios > 1 && alimentariosSinDiscapacidad > 1) {
            // Verificar que los gastos sean proporcionales entre alimentarios sin discapacidad
            const gastosAlimentariosSinDiscapacidad = alimentarios
                .filter((a) => !a.tieneDiscapacidad)
                .map((a) => a.gastosTotal)

            const gastoPromedio =
                gastosAlimentariosSinDiscapacidad.reduce((sum, gasto) => sum + gasto, 0) / alimentariosSinDiscapacidad
            const variacionMaxima = gastoPromedio * 0.3 // 30% de variación permitida

            const hayDesproporcion = gastosAlimentariosSinDiscapacidad.some(
                (gasto) => Math.abs(gasto - gastoPromedio) > variacionMaxima,
            )

            if (hayDesproporcion) {
                advertencias.push(
                    "Los gastos entre alimentarios sin discapacidad deben ser proporcionales. Revise la distribución.",
                )
                fundamentoLegal.push(
                    "Principio de proporcionalidad: gastos similares para alimentarios en condiciones similares",
                )
            }
        }

        // CÁLCULO 1: BASADO EN GASTOS REALES Y PROPORCIONALIDAD
        const gastosRealesTotal = alimentarios.reduce((sum, a) => sum + a.gastosTotal, 0)
        let montoBasadoEnGastos = 0
        let montoBasadoEnProporcionalidad = 0

        if (gastosRealesTotal > 0) {
            if (ingresoTotalCuidador > 0) {
                // HAY DOS INGRESOS: Calcular proporcionalidad real
                const proporcionAlimentante = ingresoTotalAlimentante / ingresoFamiliarTotal
                montoBasadoEnGastos = gastosRealesTotal * proporcionAlimentante

                factoresConsiderados.push(
                    `Proporcionalidad: Alimentante ${(proporcionAlimentante * 100).toFixed(1)}% de ingresos familiares`,
                )
                factoresConsiderados.push(
                    `Gastos totales: ${formatMoney(gastosRealesTotal)} × ${(proporcionAlimentante * 100).toFixed(1)}% = ${formatMoney(montoBasadoEnGastos)}`,
                )
                fundamentoLegal.push("Art. 6° Ley 14.908: Proporcionalidad según capacidad económica de ambos padres")
            } else {
                // SOLO UN INGRESO: El alimentante debe cubrir todos los gastos
                montoBasadoEnGastos = gastosRealesTotal
                factoresConsiderados.push("Cuidador sin ingresos: alimentante debe cubrir gastos completos")
            }
        }

        // CÁLCULO 2: BASADO EN PORCENTAJE DE INGRESOS (método tradicional)
        let porcentajeBase = 0.25
        if (numeroAlimentarios === 2) porcentajeBase = 0.35
        else if (numeroAlimentarios === 3) porcentajeBase = 0.45
        else if (numeroAlimentarios >= 4) porcentajeBase = 0.5

        // Ajustar por tipo de alimentante
        if (!esPadre) {
            porcentajeBase *= 0.6 // Abuelos pagan menos porcentaje
            factoresConsiderados.push("Obligación subsidiaria: porcentaje reducido")
        }

        // Factores de ajuste
        let factorAjuste = 1

        alimentarios.forEach((alimentario, index) => {
            if (alimentario.edad < 2) {
                factorAjuste += 0.1
                factoresConsiderados.push(`Alimentario ${index + 1}: Menor de 2 años (+10%)`)
            }

            if (alimentario.edad >= 18 && alimentario.edad <= 28 && alimentario.estudiaUniversidad) {
                factorAjuste += 0.08
                factoresConsiderados.push(`Alimentario ${index + 1}: Estudiante universitario (+8%)`)
                fundamentoLegal.push("Art. 3° inc. 2° Ley 14.908: Estudios superiores hasta 28 años")
            }

            if (alimentario.tieneDiscapacidad) {
                factorAjuste += 0.15
                factoresConsiderados.push(`Alimentario ${index + 1}: Con discapacidad (+15%)`)
            }

            if (alimentario.viveConAlimentante) {
                factorAjuste -= 0.08
                factoresConsiderados.push(`Alimentario ${index + 1}: Vive con alimentante (-8%)`)
            }

            if (alimentario.edad > 28 && !alimentario.tieneDiscapacidad) {
                advertencias.push(`Alimentario ${index + 1}: Mayor de 28 años - verificar si corresponde pensión`)
            }
        })

        // Ajustes por región
        if (regionResidencia === "metropolitana") {
            factorAjuste += 0.06
            factoresConsiderados.push("Región Metropolitana: Mayor costo de vida (+6%)")
        } else if (["antofagasta", "tarapaca", "magallanes"].includes(regionResidencia)) {
            factorAjuste += 0.05
            factoresConsiderados.push("Región extrema: Mayor costo de vida (+5%)")
        }

        const porcentajeFinal = Math.min(porcentajeBase * factorAjuste, MAXIMO_LEGAL_PORCENTAJE)
        montoBasadoEnProporcionalidad = ingresoDisponibleParaPension * porcentajeFinal

        // DECISIÓN FINAL: Usar el mayor entre gastos reales proporcionales y cálculo porcentual
        const montoCalculado = Math.max(montoBasadoEnGastos, montoBasadoEnProporcionalidad)

        // APLICAR LÍMITES LEGALES
        let montoRecomendado
        if (esPadre) {
            montoRecomendado = Math.max(minimoLegal, Math.min(montoCalculado, maximoLegalDisponible))
        } else {
            montoRecomendado = Math.min(montoCalculado, maximoLegalDisponible)
        }

        // CALCULAR RANGO DE PENSIÓN (más realista)
        const variabilidad = 0.15 // ±15% de variabilidad
        let rangoMinimo = montoRecomendado * (1 - variabilidad)
        let rangoMaximo = montoRecomendado * (1 + variabilidad)

        // Ajustar rango según límites legales
        const maximoLegal = maximoLegalTotal // Declare maximoLegal here
        if (esPadre) {
            rangoMinimo = Math.max(rangoMinimo, minimoLegal)
        }
        rangoMaximo = Math.min(rangoMaximo, maximoLegal)

        // ADVERTENCIAS sobre gastos excesivos
        const gastosTotalesDeclarados = gastosPersonales + deudas
        const porcentajeGastosPersonales = (gastosTotalesDeclarados / ingresoTotalAlimentante) * 100

        if (porcentajeGastosPersonales > 50) {
            advertencias.push(
                `ATENCIÓN: Gastos personales (${porcentajeGastosPersonales.toFixed(1)}%) superan el 50%. Esto NO reduce la obligación alimentaria.`,
            )
        }

        if (deudas > 0) {
            advertencias.push(`Las deudas personales NO reducen la obligación alimentaria según jurisprudencia.`)
        }

        // Si hay gastos reales y son muy superiores al cálculo, advertir
        if (gastosRealesTotal > montoRecomendado * 1.5) {
            advertencias.push(
                `Los gastos declarados (${formatMoney(gastosRealesTotal)}) son muy superiores al cálculo legal. Considere revisar.`,
            )
        }

        // Evaluación de capacidad
        const porcentajeComprometido = (montoRecomendado / ingresoDisponibleParaPension) * 100

        // Verificar si excede el 50% total de pensiones
        const porcentajeTotalPensiones = ((montoRecomendado + otrasObligaciones) / ingresoTotalAlimentante) * 100
        if (porcentajeTotalPensiones > 50) {
            advertencias.push(
                `El total de pensiones alimenticias (${porcentajeTotalPensiones.toFixed(1)}%) excede el máximo legal del 50%.`,
            )
            fundamentoLegal.push("Art. 7° Ley 14.908: Máximo 50% para TODAS las pensiones alimenticias")
        }

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

        setResultado({
            rangoMinimo,
            rangoMaximo,
            montoRecomendado,
            minimoLegal: esPadre ? minimoLegal : 0,
            maximoLegal: maximoLegalDisponible,
            porcentajeIngreso: (montoRecomendado / ingresoTotalAlimentante) * 100,
            porcentajeProporcional: ingresoTotalCuidador > 0 ? (ingresoTotalAlimentante / ingresoFamiliarTotal) * 100 : 100,
            montoBasadoEnGastos,
            montoBasadoEnProporcionalidad,
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

💰 Rango estimado: ${formatMoney(resultado.rangoMinimo)} - ${formatMoney(resultado.rangoMaximo)}
📊 Equivale al ${resultado.porcentajeIngreso.toFixed(1)}% del ingreso
👨‍👩‍👧‍👦 Para ${numeroAlimentarios} alimentario${numeroAlimentarios > 1 ? "s" : ""}
⚖️ ${resultado.minimoLegal > 0 ? `Mínimo legal: ${formatMoney(resultado.minimoLegal)}` : "Obligación subsidiaria"}

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
                        <AlertTitle>Principio de Proporcionalidad</AlertTitle>
                        <AlertDescription>
                            <div className="text-sm space-y-1">
                                <p>
                                    • <strong>Proporcionalidad real:</strong> Cada alimentante paga según su proporción de ingresos
                                    familiares
                                </p>
                                <p>
                                    • <strong>Ejemplo:</strong> Si uno gana $1M y otro $800K, y los gastos son $600K, el primero paga
                                    $333K y el segundo $267K
                                </p>
                                <p>
                                    • <strong>Padres:</strong> Mínimo legal 40% del ingreso mínimo ($
                                    {formatMoney(INGRESO_MINIMO * MINIMO_LEGAL_PORCENTAJE)})
                                </p>
                                <p>
                                    • <strong>Abuelos:</strong> Obligación subsidiaria, sin mínimo legal
                                </p>
                            </div>
                        </AlertDescription>
                    </Alert>

                    {/* Consejo sobre acuerdos extrajudiciales */}
                    <Alert className="mb-6 border-green-200 bg-green-50">
                        <Heart className="h-4 w-4 text-green-600" />
                        <AlertTitle className="text-green-800">💡 Consejo: Considera un Acuerdo Extrajudicial</AlertTitle>
                        <AlertDescription className="text-green-700">
                            <div className="space-y-2 text-sm">
                                <p className="font-medium">
                                    Los procedimientos judiciales tienen un alto costo emocional, económico y temporal para toda la
                                    familia.
                                </p>
                                <p>
                                    <strong>Beneficios de llegar a acuerdos:</strong>
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>Menor desgaste emocional para los niños</li>
                                    <li>Ahorro significativo en costos legales</li>
                                    <li>Resolución más rápida</li>
                                    <li>Mayor flexibilidad en las condiciones</li>
                                    <li>Preservación de la relación familiar</li>
                                </ul>
                                <p className="font-medium text-green-800 border-t pt-2">
                                    💡 <strong>¡Sé creativo!</strong> Los acuerdos pueden incluir soluciones innovadoras que beneficien a
                                    todos.
                                </p>
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

                    <Alert className="mb-6">
                        <InfoIcon className="h-4 w-4" />
                        <AlertTitle>Marco Legal</AlertTitle>
                        <AlertDescription>
                            <div className="text-sm space-y-1">
                                <p>
                                    • <strong>Proporcionalidad real:</strong> Cada alimentante paga según su proporción de ingresos
                                    familiares
                                </p>
                                <p>
                                    • <strong>Ejemplo:</strong> Si uno gana $1M y otro $800K, y los gastos son $600K, el primero paga
                                    $333K y el segundo $267K
                                </p>
                                <p>
                                    • <strong>Padres:</strong> Mínimo legal 40% del ingreso mínimo ($
                                    {formatMoney(INGRESO_MINIMO * MINIMO_LEGAL_PORCENTAJE)})
                                </p>
                                <p>
                                    • <strong>Abuelos:</strong> Obligación subsidiaria, sin mínimo legal
                                </p>
                                <p>
                                    • <strong>Art. 7° Ley 14.908:</strong> Máximo legal: 50% de las rentas para TODAS las pensiones
                                    alimenticias combinadas.
                                </p>
                                <p>
                                    • <strong>Proporcionalidad:</strong> Los gastos deben ser similares entre alimentarios, salvo
                                    discapacidad que justifique gastos especiales.
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
                                    <Label htmlFor="relacion-alimentante">Relación con los Alimentarios *</Label>
                                    <Select value={relacionAlimentante} onValueChange={setRelacionAlimentante}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione relación" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="padre">Padre</SelectItem>
                                            <SelectItem value="madre">Madre</SelectItem>
                                            <SelectItem value="abuelo-paterno">Abuelo Paterno</SelectItem>
                                            <SelectItem value="abuela-paterna">Abuela Paterna</SelectItem>
                                            <SelectItem value="abuelo-materno">Abuelo Materno</SelectItem>
                                            <SelectItem value="abuela-materna">Abuela Materna</SelectItem>
                                            <SelectItem value="hermano">Hermano/a</SelectItem>
                                            <SelectItem value="otro">Otro Pariente</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {relacionAlimentante === "padre" || relacionAlimentante === "madre"
                                            ? "Obligación principal - Rige mínimo legal"
                                            : "Obligación subsidiaria - No rige mínimo legal"}
                                    </p>
                                </div>

                                <div>
                                    <Label htmlFor="ingreso">Ingreso Líquido Mensual (CLP) *</Label>
                                    <Input
                                        type="number"
                                        id="ingreso"
                                        placeholder="Ej: 1000000"
                                        value={ingresoLiquido || ""}
                                        onChange={(e) => setIngresoLiquido(Number(e.target.value))}
                                    />
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Después de descuentos legales (AFP, Fonasa, impuestos)
                                    </p>
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
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Créditos, tarjetas, etc. (NO reducen la obligación)
                                    </p>
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
                                <CardDescription>Quien tiene el cuidado personal (para calcular proporcionalidad)</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Label htmlFor="cuidador-ingreso">Ingreso Líquido Mensual (CLP)</Label>
                                    <Input
                                        type="number"
                                        id="cuidador-ingreso"
                                        placeholder="Ej: 800000"
                                        value={cuidador.ingresoLiquido || ""}
                                        onChange={(e) => actualizarCuidador("ingresoLiquido", Number(e.target.value))}
                                    />
                                    <p className="text-sm text-muted-foreground mt-1">Si tiene ingresos, se calcula proporcionalidad</p>
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

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="trabaja-fuera"
                                        checked={cuidador.trabajaFueraHogar}
                                        onCheckedChange={(checked: boolean) => actualizarCuidador("trabajaFueraHogar", checked)}
                                    />
                                    <Label htmlFor="trabaja-fuera">Trabaja fuera del hogar</Label>
                                </div>
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
                                                            onCheckedChange={(checked: boolean) => actualizarAlimentario(index, "tieneDiscapacidad", checked)}
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
                                                                onCheckedChange={(checked: boolean) =>
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

                                            <div>
                                                <Label>Gastos Totales Mensuales (CLP)</Label>
                                                <Input
                                                    type="number"
                                                    value={alimentario.gastosTotal || ""}
                                                    onChange={(e) => actualizarAlimentario(index, "gastosTotal", Number(e.target.value))}
                                                    placeholder="Ej: 600000"
                                                />
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    Incluye alimentación, habitación, vestimenta, salud, educación, etc.
                                                </p>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={`vive-con-${index}`}
                                                    checked={alimentario.viveConAlimentante}
                                                    onCheckedChange={(checked: boolean) => actualizarAlimentario(index, "viveConAlimentante", checked)}
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
                            Calcular Rango de Pensión
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
                                            Rango Estimado de Pensión
                                        </CardTitle>
                                        <CardDescription>Basado en la Ley 14.908 y proporcionalidad real</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="text-center space-y-2">
                                            <div className="text-2xl font-bold text-green-700">
                                                {formatMoney(resultado.rangoMinimo)} - {formatMoney(resultado.rangoMaximo)}
                                            </div>
                                            <Badge variant="secondary" className="text-sm">
                                                Rango estimado (±15% variabilidad)
                                            </Badge>
                                            <div className="text-lg font-semibold text-green-600">
                                                Valor central: {formatMoney(resultado.montoRecomendado)}
                                            </div>
                                            <Badge variant="outline" className="text-sm">
                                                {resultado.porcentajeIngreso.toFixed(1)}% del ingreso total
                                            </Badge>
                                            {resultado.porcentajeProporcional < 100 && (
                                                <Badge variant="outline" className="text-sm">
                                                    {resultado.porcentajeProporcional.toFixed(1)}% de responsabilidad familiar
                                                </Badge>
                                            )}
                                        </div>

                                        <Separator />

                                        <div className="space-y-2">
                                            {resultado.minimoLegal > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-muted-foreground">Mínimo legal:</span>
                                                    <span className="font-medium text-blue-600">{formatMoney(resultado.minimoLegal)}</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between">
                                                <span className="text-sm text-muted-foreground">Máximo disponible:</span>
                                                <span className="font-medium">{formatMoney(resultado.maximoLegal)}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-sm text-muted-foreground">Otras pensiones:</span>
                                                <span className="font-medium text-red-600">{formatMoney(otrasObligaciones)}</span>
                                            </div>
                                            {resultado.montoBasadoEnGastos > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-muted-foreground">Por gastos reales:</span>
                                                    <span className="font-medium text-orange-600">
                                                        {formatMoney(resultado.montoBasadoEnGastos)}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="flex justify-between">
                                                <span className="text-sm text-muted-foreground">Por % ingresos:</span>
                                                <span className="font-medium text-purple-600">
                                                    {formatMoney(resultado.montoBasadoEnProporcionalidad)}
                                                </span>
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

                                {/* Acuerdos Creativos */}
                                <Card className="border-blue-200 bg-blue-50">
                                    <CardHeader>
                                        <CardTitle className="text-blue-800 flex items-center gap-2">
                                            <Lightbulb className="h-5 w-5" />
                                            Ideas para Acuerdos Creativos
                                        </CardTitle>
                                        <CardDescription>Alternativas flexibles que pueden beneficiar a toda la familia</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm text-blue-700 space-y-3">
                                        <div>
                                            <p className="font-medium mb-2">💡 Modalidades de Pago Flexibles:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-2">
                                                <li>
                                                    <strong>Pagos escalonados:</strong> Aumentar gradualmente según mejore la situación económica
                                                </li>
                                                <li>
                                                    <strong>Pagos estacionales:</strong> Montos variables según temporadas de mayor/menor ingreso
                                                </li>
                                                <li>
                                                    <strong>Indexación automática:</strong> Ajustes anuales según IPC o aumento de ingresos
                                                </li>
                                                <li>
                                                    <strong>Bonos por logros:</strong> Pagos adicionales por metas académicas o deportivas
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="font-medium mb-2">🏠 Pagos en Especie (deben ser valorados):</p>
                                            <ul className="list-disc list-inside space-y-1 ml-2">
                                                <li>
                                                    <strong>Arriendo de vivienda:</strong> Pago directo del arriendo donde vive el menor
                                                </li>
                                                <li>
                                                    <strong>Colegio y universidad:</strong> Pago directo de matrículas y mensualidades
                                                </li>
                                                <li>
                                                    <strong>Seguros de salud:</strong> Isapre o seguros complementarios
                                                </li>
                                                <li>
                                                    <strong>Actividades extracurriculares:</strong> Deportes, música, idiomas
                                                </li>
                                                <li>
                                                    <strong>Vacaciones familiares:</strong> Viajes educativos o recreativos
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="font-medium mb-2">📈 Acuerdos Adaptativos:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-2">
                                                <li>
                                                    <strong>Cláusulas de revisión:</strong> Evaluación anual de la situación económica
                                                </li>
                                                <li>
                                                    <strong>Fondo de emergencias:</strong> Reserva para gastos médicos o educativos
                                                    extraordinarios
                                                </li>
                                                <li>
                                                    <strong>Participación en ganancias:</strong> Porcentaje de bonos o utilidades empresariales
                                                </li>
                                                <li>
                                                    <strong>Inversiones conjuntas:</strong> Fondos para educación superior o vivienda futura
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="border-t pt-3 mt-3">
                                            <p className="font-medium text-blue-800">
                                                🤝 <strong>Recuerda:</strong> Un buen acuerdo es aquel donde ambas partes sienten que ganaron
                                                algo valioso para el bienestar de los hijos.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Fundamento Legal */}
                                {resultado.fundamentoLegal.length > 0 && (
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <Scale className="h-5 w-5" />
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
                                                Cálculo Detallado
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

                                {/* Información sobre Mediación */}
                                <Card className="border-purple-200 bg-purple-50">
                                    <CardHeader>
                                        <CardTitle className="text-purple-800">🕊️ Mediación Familiar</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-purple-700 space-y-2">
                                        <p>
                                            • <strong>Costo promedio juicio:</strong> $1.500.000 - $5.000.000 (honorarios + costas)
                                        </p>
                                        <p>
                                            • <strong>Tiempo promedio:</strong> 12-24 meses vs. 2-4 meses en mediación
                                        </p>
                                        <p>
                                            • <strong>Tasa de cumplimiento:</strong> 85% en acuerdos mediados vs. 60% en sentencias
                                        </p>
                                        <p>
                                            • <strong>Mediación gratuita:</strong> Disponible en Centros de Mediación Familiar del Estado
                                        </p>
                                        <p className="font-medium border-t pt-2 mt-3">
                                            💜 <strong>El bienestar emocional de los niños es invaluable.</strong> Considera siempre el
                                            diálogo antes que el conflicto.
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
                                        Complete la información y haga clic en "Calcular" para ver el rango estimado
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        La calculadora aplica proporcionalidad real según ingresos familiares
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
