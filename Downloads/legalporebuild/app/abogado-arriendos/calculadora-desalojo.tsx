"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar as CalendarIcon, Clock, AlertTriangle } from "lucide-react"
import { format, addDays } from "date-fns"
import { es } from "date-fns/locale"

export default function CalculadoraDesalojo() {
    const [fechaMora, setFechaMora] = useState<string>("")
    const [result, setResult] = useState<{ estimacion: string; dias: number } | null>(null)

    const calcularDesalojo = () => {
        if (!fechaMora) return

        // Logic based on Ley "Devuélveme mi Casa" (21.461)
        // 1. Demand & Notification: ~10-15 days
        // 2. Opposition period: 10 days
        // 3. Sentence & Launch order: ~5-10 days
        // Total pessimistic optimistic: ~30-45 days
        // Total conservative: ~60 days (to be safe)

        // Previous law: 6-12 months (180-365 days)

        const fechaInicio = new Date(fechaMora)
        const fechaLanzamiento = addDays(fechaInicio, 60) // Conservative estimate for "new law"

        setResult({
            estimacion: format(fechaLanzamiento, "d 'de' MMMM, yyyy", { locale: es }),
            dias: 60
        })
    }

    return (
        <Card className="w-full max-w-xl mx-auto shadow-lg border-orange-200 bg-white">
            <CardHeader className="bg-orange-50/50 border-b border-orange-100">
                <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
                    <Clock className="h-6 w-6 text-orange-600" />
                    Calculadora de Desalojo
                </CardTitle>
                <CardDescription>
                    Estima cuándo recuperarías tu propiedad usando la nueva ley "Devuélveme mi Casa".
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="fecha" className="text-base">¿Desde qué fecha te deben el arriendo?</Label>
                    <Input
                        id="fecha"
                        type="date"
                        className="text-lg p-3 h-12"
                        onChange={(e) => setFechaMora(e.target.value)}
                    />
                </div>

                <Button
                    onClick={calcularDesalojo}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-lg h-12"
                    disabled={!fechaMora}
                >
                    Calcular Fecha Recuperación
                </Button>

                {result && (
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center space-y-3">
                            <p className="text-sm text-orange-800 font-medium uppercase tracking-wide">Fecha Estimada de Lanzamiento</p>
                            <p className="text-3xl md:text-4xl font-extrabold text-orange-600 capitalize">
                                {result.estimacion}
                            </p>
                            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 pt-2">
                                <Clock className="h-4 w-4" />
                                <span>Aprox. {result.dias} días desde el inicio del trámite.</span>
                            </div>
                        </div>

                        <div className="mt-4 flex gap-3 text-xs text-slate-400 bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                            <p>
                                Estimación referencial basada en plazos legales de la Ley 21.461. Los tiempos reales dependen de la carga de trabajo del tribunal y la rapidez en notificar al arrendatario.
                            </p>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
