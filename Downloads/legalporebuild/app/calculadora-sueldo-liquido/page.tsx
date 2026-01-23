"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import {
    Calculator,
    DollarSign,
    PieChart,
    HelpCircle,
    ArrowLeft,
    Briefcase,
    Building,
    Heart,
    Shield,
    CheckCircle,
    AlertTriangle,
    Info,
    RefreshCw,
    Share2,
    Printer
} from "lucide-react"
import { ShareButton } from "@/components/share-button"
import WhatsAppButton from "@/components/whatsapp-button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// Tipos
interface SalaryState {
    sueldoBruto: number
    afp: string
    saludType: "fonasa" | "isapre"
    saludIsapreAmount: number // en UF, por defecto
    saludIsapreUnit: "uf" | "clp"
    contratoType: "indefinido" | "plazo_fijo"
    otrosDescuentos: number
    asignacionesNoImponibles: number // colación y movilización
}

interface CalculationResult {
    sueldoBruto: number
    sueldoImponible: number
    descuentoAFP: number
    descuentoSalud: number
    descuentoCesantia: number
    baseTributable: number
    impuestoUnico: number
    totalDescuentosLegales: number
    sueldoLiquido: number
    brutoFinal: number // Bruto + No Imponibles
}

// Datos Maestros (Feb 2026 proyecciones / 2025 reales)
const VALOR_UF = 38500 // Proyección 2026
const TOPE_IMPONIBLE_UF = 84.3 // Tope Imponible 2025/2026
const TOPE_SEGURO_CESANTIA_UF = 126.6
const SUELDO_MINIMO = 510636 // Estimación 2026

const TRAYECTOS_IMPUESTO = [
    { desde: 0, hasta: 13.5, factor: 0, rebaja: 0 },
    { desde: 13.5, hasta: 30, factor: 0.04, rebaja: 13.5 * 0.04 },
    { desde: 30, hasta: 50, factor: 0.08, rebaja: (13.5 * 0.04) + (16.5 * 0.04) }, // Simplificado, mejor usar formula estándar
]

// Tabla Impuesto Único Mensual (UTM) - Estándar SII
// Factor y Cantidad a Rebajar (en UTM)
const TABLA_IMPUESTO = [
    { limiteInferior: 0, limiteSuperior: 13.5, factor: 0, rebaja: 0 },
    { limiteInferior: 13.5, limiteSuperior: 30, factor: 0.04, rebaja: 0.54 },
    { limiteInferior: 30, limiteSuperior: 50, factor: 0.08, rebaja: 1.74 },
    { limiteInferior: 50, limiteSuperior: 70, factor: 0.135, rebaja: 4.49 },
    { limiteInferior: 70, limiteSuperior: 90, factor: 0.23, rebaja: 11.14 },
    { limiteInferior: 90, limiteSuperior: 120, factor: 0.304, rebaja: 17.80 },
    { limiteInferior: 120, limiteSuperior: 310, factor: 0.35, rebaja: 23.32 },
    { limiteInferior: 310, limiteSuperior: 999999, factor: 0.40, rebaja: 38.82 },
]

const VALOR_UTM = 67000 // Proyección 2026

const TASAS_AFP = {
    capital: 11.44,
    cuprum: 11.44,
    habitat: 11.27,
    modelo: 10.58,
    planvital: 11.16,
    provida: 11.45,
    uno: 10.49,
    jubilado: 0 // No paga el 10%, o solo cotiza salud
}

const NOMBRES_AFP = {
    capital: "Capital",
    cuprum: "Cuprum",
    habitat: "Habitat",
    modelo: "Modelo",
    planvital: "PlanVital",
    provida: "Provida",
    uno: "Uno",
    jubilado: "Jubilado / No Cotiza"
}

export default function CalculadoraSueldoLiquido() {
    const [state, setState] = useState<SalaryState>({
        sueldoBruto: 800000,
        afp: "modelo",
        saludType: "fonasa",
        saludIsapreAmount: 2.5,
        saludIsapreUnit: "uf",
        contratoType: "indefinido",
        otrosDescuentos: 0,
        asignacionesNoImponibles: 0
    })

    const [result, setResult] = useState<CalculationResult | null>(null)
    const [showHelp, setShowHelp] = useState(false)

    // Función de cálculo principal
    const calculate = () => {
        const { sueldoBruto, afp, saludType, saludIsapreAmount, saludIsapreUnit, contratoType, otrosDescuentos, asignacionesNoImponibles } = state

        // 1. Topes Imponibles
        const topeImponiblePesos = TOPE_IMPONIBLE_UF * VALOR_UF
        const topeSeguroCesantiaPesos = TOPE_SEGURO_CESANTIA_UF * VALOR_UF

        const sueldoImponible = Math.min(sueldoBruto, topeImponiblePesos)
        const baseSeguroCesantia = Math.min(sueldoBruto, topeSeguroCesantiaPesos)

        // 2. AFP (Solo empleado: 10% + Comisión)
        let tasaAfp = TASAS_AFP[afp as keyof typeof TASAS_AFP] || 0
        // Si es jubilado no paga el 10% obligatorio, pero asumiendo selección estándar. 
        // Para simplificar, usamos la tasa completa del empleado.
        const descuentoAFP = Math.round(sueldoImponible * (tasaAfp / 100))

        // 3. Salud (7% Legal o Isapre)
        let descuentoSalud = 0
        const sietePorciento = Math.round(sueldoImponible * 0.07)

        if (saludType === "fonasa") {
            descuentoSalud = sietePorciento
        } else {
            // Isapre
            let pactadoPesos = 0
            if (saludIsapreUnit === "uf") {
                pactadoPesos = Math.round(saludIsapreAmount * VALOR_UF)
            } else {
                pactadoPesos = saludIsapreAmount
            }
            // La ley dice que debe descontarse al menos el 7% legal
            descuentoSalud = Math.max(sietePorciento, pactadoPesos)
        }

        // 4. Seguro de Cesantía (Empleado)
        // Indefinido: 0.6% a cargo del trabajador. Plazo Fijo: 0% (todo empleador).
        let descuentoCesantia = 0
        if (contratoType === "indefinido") {
            descuentoCesantia = Math.round(baseSeguroCesantia * 0.006)
        }

        // 5. Impuesto Único
        // Base Tributable = Imponible - (AFP + Salud + Cesantía)
        // OJO: Salud para efectos tributarios tiene tope de 7% de tope imponible (o pactado si es menor al 7% legal real, pero lo normal es tope 7%)
        // La rebaja tributaria por salud es MÁXIMO el 7% del Imponible (o el 7% del Tope Imponible si el sueldo es mayor). El excedente no rebaja impuesto.
        const topeRebajaSalud = Math.round(sueldoImponible * 0.07) // No se puede descontar más del 7% para la base tributable

        // Es común simplificar restando todo el descuento de salud si es Fonasa, pero si es Isapre con plan alto, solo se resta el 7%.
        const saludParaTributable = Math.min(descuentoSalud, topeRebajaSalud)

        const baseTributable = Math.max(0, sueldoImponible - descuentoAFP - saludParaTributable - descuentoCesantia)

        // Calcular Impuesto según tabla UTM
        const baseEnUTM = baseTributable / VALOR_UTM
        let impuestoUnico = 0

        const tramo = TABLA_IMPUESTO.find(t => baseEnUTM > t.limiteInferior && baseEnUTM <= t.limiteSuperior)
        if (tramo) {
            impuestoUnico = Math.round((baseTributable * tramo.factor) - (tramo.rebaja * VALOR_UTM))
        }

        if (impuestoUnico < 0) impuestoUnico = 0

        // 6. Totales
        const totalDescuentosLegales = descuentoAFP + descuentoSalud + descuentoCesantia + impuestoUnico
        const sueldoLiquido = sueldoBruto - totalDescuentosLegales - otrosDescuentos + asignacionesNoImponibles

        setResult({
            sueldoBruto,
            sueldoImponible,
            descuentoAFP,
            descuentoSalud,
            descuentoCesantia,
            baseTributable,
            impuestoUnico,
            totalDescuentosLegales,
            sueldoLiquido,
            brutoFinal: sueldoBruto + asignacionesNoImponibles
        })
    }

    // Calcular al cargar y al cambiar inputs
    useEffect(() => {
        calculate()
    }, [state])

    const formatMoney = (val: number) => "$" + val.toLocaleString("es-CL")

    const getShareText = () => {
        if (!result) return ""
        return `💰 Calculé mi Sueldo Líquido Real en LegalPO\n\n💵 Bruto: ${formatMoney(result.sueldoBruto)}\n💎 Líquido: ${formatMoney(result.sueldoLiquido)}\n\nCalcula el tuyo exacto aquí: https://legalpo.cl/calculadora-sueldo-liquido`
    }

    return (
        <div className="min-h-screen bg-slate-900 text-white print:bg-white print:text-black">
            {/* Schema.org - SoftwareApp + FAQ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "SoftwareApplication",
                                "name": "Calculadora de Sueldo Líquido Chile 2026",
                                "applicationCategory": "FinanceApplication",
                                "operatingSystem": "Any",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "0",
                                    "priceCurrency": "CLP"
                                },
                                "description": "Calcula tu sueldo líquido exacto en Chile con nuestra calculadora gratuita. Incluye descuentos de AFP, Salud, Cesantía e Impuesto Único actualizado a 2026.",
                                "author": {
                                    "@type": "Organization",
                                    "name": "LegalPO"
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "¿Por qué mi sueldo líquido es más bajo de lo esperado?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "El sueldo líquido es siempre menor al bruto porque se deben descontar obligatoriamente la AFP (aprox 11-12%), Salud (7% o pactado Isapre), Seguro de Cesantía (0.6% si es indefinido) y el Impuesto Único si ganas sobre $900.000 aprox."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "¿Cómo afecta el tipo de contrato en mi sueldo?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Si tienes contrato indefinido, te descuentan 0.6% para el Seguro de Cesantía. Si es a plazo fijo, ese costo lo asume completamente tu empleador, por lo que tu líquido aumenta levemente."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "¿Qué es el tope imponible y cómo me afecta?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "El tope imponible (84.3 UF para 2025/2026) es el monto máximo sobre el cual te pueden calcular descuentos de AFP y Salud. Si ganas más que eso, tus descuentos se congelan en ese tope, aumentando proporcionalmente tu sueldo líquido."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "¿Cuándo debo pagar Impuesto Único?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Pagas Impuesto Único solo si tu base tributable (sueldo menos AFP, Salud y Cesantía) supera las 13.5 UTM mensuales (aprox. $900.000). Es un impuesto progresivo: mientras más ganas, mayor es el porcentaje del tramo."
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />

            {/* Header SEO */}
            <section className="py-12 bg-gradient-to-b from-slate-800/50 to-transparent border-b border-white/5 print:hidden">
                <div className="container max-w-5xl mx-auto px-4">
                    <Link href="/">
                        <Button variant="ghost" className="mb-6 -ml-4 text-slate-300 hover:text-white">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Volver al inicio
                        </Button>
                    </Link>

                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                            <Calculator className="h-4 w-4 text-emerald-400" />
                            <span className="text-sm font-medium text-emerald-300">Actualizada 2026 (Valores UTM/UF)</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                            Calculadora de Sueldo Líquido Chile
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Calcula exactamente cuánto recibirás "al bolsillo". Considera descuentos de AFP, Salud (Fonasa/Isapre), Seguro de Cesantía e Impuesto Único.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-start">

                        {/* INPUTS - Columna Izquierda */}
                        <div className="lg:col-span-7 space-y-6 print:hidden">
                            <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <Briefcase className="h-5 w-5 text-emerald-400" />
                                        Datos Laborales
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">

                                    {/* Sueldo Bruto */}
                                    <div>
                                        <Label htmlFor="bruto" className="text-sm text-slate-300 mb-2 block">Sueldo Base Bruto Mensual</Label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                                            <Input
                                                id="bruto"
                                                type="number"
                                                value={state.sueldoBruto}
                                                onChange={(e) => setState({ ...state, sueldoBruto: Number(e.target.value) })}
                                                className="pl-10 h-12 text-lg bg-black/20 border-white/10"
                                            />
                                        </div>
                                    </div>

                                    {/* Asignaciones No Imponibles */}
                                    <div>
                                        <Label htmlFor="noimponible" className="text-sm text-slate-300 mb-2 block">
                                            Asignaciones No Imponibles
                                            <span className="ml-2 text-xs text-slate-500">(Colación, Movilización - Se suman directo al líquido)</span>
                                        </Label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                                            <Input
                                                id="noimponible"
                                                type="number"
                                                value={state.asignacionesNoImponibles}
                                                onChange={(e) => setState({ ...state, asignacionesNoImponibles: Number(e.target.value) })}
                                                className="pl-10 bg-black/20 border-white/10"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* AFP */}
                                        <div>
                                            <Label className="text-sm text-slate-300 mb-2 block">AFP</Label>
                                            <Select value={state.afp} onValueChange={(v) => setState({ ...state, afp: v })}>
                                                <SelectTrigger className="bg-black/20 border-white/10">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Object.entries(TASAS_AFP).map(([key, value]) => (
                                                        <SelectItem key={key} value={key}>
                                                            {NOMBRES_AFP[key as keyof typeof NOMBRES_AFP]} ({value}%)
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* Contrato */}
                                        <div>
                                            <Label className="text-sm text-slate-300 mb-2 block">Tipo Contrato</Label>
                                            <Select
                                                value={state.contratoType}
                                                onValueChange={(v: any) => setState({ ...state, contratoType: v })}
                                            >
                                                <SelectTrigger className="bg-black/20 border-white/10">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="indefinido">Indefinido (0.6%)</SelectItem>
                                                    <SelectItem value="plazo_fijo">Plazo Fijo (0%)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    {/* Salud */}
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-4">
                                        <Label className="text-sm text-white font-medium flex items-center gap-2">
                                            <Heart className="h-4 w-4 text-rose-400" /> Previsión de Salud
                                        </Label>

                                        <div className="flex bg-slate-900/50 p-1 rounded-lg">
                                            <button
                                                onClick={() => setState({ ...state, saludType: "fonasa" })}
                                                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${state.saludType === 'fonasa' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                                            >
                                                Fonasa (7%)
                                            </button>
                                            <button
                                                onClick={() => setState({ ...state, saludType: "isapre" })}
                                                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${state.saludType === 'isapre' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                                            >
                                                Isapre (Plan)
                                            </button>
                                        </div>

                                        {state.saludType === "isapre" && (
                                            <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
                                                <div>
                                                    <Label className="text-xs text-slate-400 mb-1.5 block">Valor Plan</Label>
                                                    <Input
                                                        type="number"
                                                        value={state.saludIsapreAmount}
                                                        onChange={(e) => setState({ ...state, saludIsapreAmount: Number(e.target.value) })}
                                                        className="bg-black/20 border-white/10"
                                                    />
                                                </div>
                                                <div>
                                                    <Label className="text-xs text-slate-400 mb-1.5 block">Unidad</Label>
                                                    <Select
                                                        value={state.saludIsapreUnit}
                                                        onValueChange={(v: any) => setState({ ...state, saludIsapreUnit: v })}
                                                    >
                                                        <SelectTrigger className="bg-black/20 border-white/10">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="uf">UF (aprox ${VALOR_UF})</SelectItem>
                                                            <SelectItem value="clp">Pesos (CLP)</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Otros Descuentos */}
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => setShowHelp(!showHelp)}
                                            className="text-xs text-emerald-400 hover:text-emerald-300 underline mb-2"
                                        >
                                            + Agregar otros descuentos (créditos, anticipos)
                                        </button>

                                        {showHelp && (
                                            <div className="animate-in fade-in slide-in-from-top-2">
                                                <Label className="text-sm text-slate-300 mb-2 block">Otros Descuentos (No Legales)</Label>
                                                <Input
                                                    type="number"
                                                    value={state.otrosDescuentos}
                                                    onChange={(e) => setState({ ...state, otrosDescuentos: Number(e.target.value) })}
                                                    className="bg-black/20 border-white/10"
                                                    placeholder="Ej: Anticipo, Préstamo"
                                                />
                                            </div>
                                        )}
                                    </div>

                                </CardContent>
                            </Card>
                        </div>

                        {/* RESULTS UI - Columna Derecha (Sticky) */}
                        <div className="lg:col-span-5 relative print:w-full print:absolute print:top-0 print:left-0">
                            <div className="sticky top-24 print:static">
                                <Card className="bg-gradient-to-b from-emerald-900/20 to-slate-900 border-emerald-500/30 overflow-hidden shadow-2xl relative print:bg-white print:border-black print:text-black print:shadow-none">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-300" />

                                    <CardContent className="p-6 md:p-8 space-y-6">
                                        <div className="text-center">
                                            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Sueldo Líquido Estimado</p>
                                            <div className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-2">
                                                {result ? formatMoney(result.sueldoLiquido) : "$0"}
                                            </div>
                                            {result?.brutoFinal !== undefined && result.brutoFinal !== result.sueldoImponible && (
                                                <div className="inline-block bg-white/5 rounded-lg px-3 py-1 text-xs text-slate-300">
                                                    Total Haberes: {formatMoney(result.brutoFinal)}
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-3 bg-white/5 rounded-xl p-4 border border-white/5">
                                            <Row label="Sueldo Imponible" value={result?.sueldoImponible} strong />

                                            <div className="h-px bg-white/10 my-2" />

                                            <Row label={`AFP (${NOMBRES_AFP[state.afp as keyof typeof TASAS_AFP]})`} value={result?.descuentoAFP} isNegative />
                                            <Row label="Salud (Fonasa/Isapre)" value={result?.descuentoSalud} isNegative />
                                            <Row label="Seguro Cesantía" value={result?.descuentoCesantia} isNegative />

                                            {result?.impuestoUnico && result.impuestoUnico > 0 ? (
                                                <Row label="Impuesto Único" value={result?.impuestoUnico} isNegative highlight />
                                            ) : null}

                                            {state.otrosDescuentos > 0 && (
                                                <Row label="Otros Descuentos" value={state.otrosDescuentos} isNegative />
                                            )}

                                            {state.asignacionesNoImponibles > 0 && (
                                                <>
                                                    <div className="h-px bg-white/10 my-2" />
                                                    <Row label="+ No Imponibles" value={state.asignacionesNoImponibles} className="text-emerald-400" />
                                                </>
                                            )}
                                        </div>

                                        <div className="flex gap-3 print:hidden">
                                            {result && (
                                                <ShareButton
                                                    title="Mi Sueldo Líquido"
                                                    text={getShareText()}
                                                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white"
                                                />
                                            )}
                                            <Button
                                                onClick={() => window.print()}
                                                variant="outline"
                                                className="flex-1 border-white/10 hover:bg-white/5 hover:text-white text-slate-300"
                                            >
                                                <Printer className="h-4 w-4 mr-2" />
                                                Imprimir
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-slate-400">
                                    <p className="flex items-start gap-2">
                                        <Info className="h-4 w-4 shrink-0 mt-0.5" />
                                        <span>Los cálculos consideran valores actualizados de UF (${VALOR_UF}) y UTM (${VALOR_UTM}) estimados para 2026.</span>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* SEO Content & FAQ */}
            <section className="py-16 bg-slate-900 border-t border-white/5 print:hidden">
                <div className="container max-w-4xl px-4">
                    <div className="prose prose-invert mb-12">
                        <h2>¿Cómo calcular el sueldo líquido en Chile?</h2>
                        <p>
                            Para pasar de <strong>sueldo bruto a líquido</strong> se deben restar los descuentos legales obligatorios en Chile.
                            Nuestra calculadora automática realiza este proceso considerando:
                        </p>
                        <ul>
                            <li><strong>AFP:</strong> 10% obligatorio + comisión de la administradora (entre 0.49% y 1.45%).</li>
                            <li><strong>Salud:</strong> 7% obligatorio para Fonasa, o el precio de tu plan Isapre (con un mínimo del 7%).</li>
                            <li><strong>Impuesto Único:</strong> Tributo progresivo que se aplica a sueldos más altos (sobre 13.5 UTM mensuales).</li>
                            <li><strong>Seguro de Cesantía:</strong> 0.6% si tienes contrato indefinido (a costo del trabajador).</li>
                        </ul>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <HelpCircle className="h-6 w-6 text-emerald-400" />
                            Preguntas Frecuentes sobre tu Sueldo
                        </h3>

                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="item-1" className="border-white/10 bg-white/5 rounded-lg px-4 border-b-0">
                                <AccordionTrigger className="text-slate-200 hover:text-white hover:no-underline">
                                    ¿Por qué mi sueldo líquido es más bajo de lo esperado?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-400">
                                    El sueldo líquido es siempre menor al bruto porque se deben descontar obligatoriamente la AFP (aprox 11-12%), Salud (7% o pactado Isapre), Seguro de Cesantía (0.6% si es indefinido) y el Impuesto Único si ganas sobre $900.000 aprox.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border-white/10 bg-white/5 rounded-lg px-4 border-b-0">
                                <AccordionTrigger className="text-slate-200 hover:text-white hover:no-underline">
                                    ¿Cómo afecta el tipo de contrato (Indefinido vs Fijo)?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-400">
                                    Si tienes contrato <strong>indefinido</strong>, te descuentan 0.6% de tu sueldo para el Seguro de Cesantía. Si es a <strong>plazo fijo</strong>, ese costo lo asume completamente tu empleador, por lo que tu líquido aumenta levemente al no tener ese descuento.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border-white/10 bg-white/5 rounded-lg px-4 border-b-0">
                                <AccordionTrigger className="text-slate-200 hover:text-white hover:no-underline">
                                    ¿Qué es el tope imponible y cómo me afecta?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-400">
                                    El tope imponible (84.3 UF para 2025/2026) es el monto máximo sobre el cual te pueden calcular descuentos de AFP y Salud. Si ganas más que eso (aprox $3.2 millones), tus descuentos se "congelan" en ese tope, haciendo que el porcentaje real de descuento sea menor mientras más ganas.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border-white/10 bg-white/5 rounded-lg px-4 border-b-0">
                                <AccordionTrigger className="text-slate-200 hover:text-white hover:no-underline">
                                    ¿Cuándo debo pagar Impuesto Único?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-400">
                                    Pagas Impuesto Único solo si tu base tributable (sueldo menos AFP, Salud y Cesantía) supera las 13.5 UTM mensuales (aprox. $900.000 líquidos). Es un impuesto progresivo: mientras más ganas, mayor es el porcentaje del tramo, empezando desde un 4% hasta un 40%.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>
            <div className="print:hidden">
                <WhatsAppButton phoneNumber="+56931772346" message="Hola, necesito ayuda con el cálculo de mi sueldo líquido" />
            </div>
        </div>
    )
}

function Row({ label, value, isNegative, strong, highlight, className }: any) {
    if (value === undefined) return null
    return (
        <div className={`flex justify-between items-center ${strong ? 'font-semibold text-white print:text-black' : 'text-slate-300 print:text-black'} ${className}`}>
            <span>{label}</span>
            <span className={`${isNegative ? 'text-rose-400 print:text-black' : ''} ${highlight ? 'text-amber-400 font-medium print:text-black' : ''}`}>
                {isNegative && "-"}${value.toLocaleString("es-CL")}
            </span>
        </div>
    )
}

