"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, ArrowRight, RefreshCw, CalendarDays, TrendingUp } from "lucide-react"

export default function ReajustePensionClient() {
    const [amount, setAmount] = useState<string>("")
    const [result, setResult] = useState<number | null>(null)

    // States for IPC Mode
    const [ipcRate, setIpcRate] = useState<string>("")

    // States for UTM Mode
    const [oldUtmValue, setOldUtmValue] = useState<string>("")
    const [currentUtmValue, setCurrentUtmValue] = useState<string>("64793") // Valor Feb 2025 approx

    const calculateIPC = () => {
        const numericAmount = parseFloat(amount.replace(/\./g, "").replace(",", "."))
        const numericRate = parseFloat(ipcRate.replace(",", "."))

        if (!isNaN(numericAmount) && !isNaN(numericRate)) {
            const increase = numericAmount * (numericRate / 100)
            setResult(Math.round(numericAmount + increase))
        }
    }

    const calculateUTM = () => {
        const numericAmount = parseFloat(amount.replace(/\./g, "").replace(",", "."))
        const numericOldUtm = parseFloat(oldUtmValue.replace(/\./g, "").replace(",", "."))
        const numericCurrentUtm = parseFloat(currentUtmValue.replace(/\./g, "").replace(",", "."))

        if (!isNaN(numericAmount) && !isNaN(numericOldUtm) && !isNaN(numericCurrentUtm)) {
            // Logic: Convert original pesos to UTM at that time, then convert back to current UTM

            // Calculate how many UTMs the pension represented
            const utmFactor = numericAmount / numericOldUtm

            // Calculate new value
            const newValue = utmFactor * numericCurrentUtm

            setResult(Math.round(newValue))
        }
    }

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
            maximumFractionDigits: 0,
        }).format(value)
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Intro Section */}
            <div className="text-center space-y-4 mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    Calculadora de Reajuste de Pensión
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Actualiza el monto de la pensión alimenticia según la variación del IPC o el valor de la UTM. Herramienta actualizada para 2026.
                </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
                <Card className="border-slate-200 shadow-lg bg-white overflow-hidden">
                    <CardHeader className="bg-slate-50 border-b border-slate-100 pb-6">
                        <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
                            <Calculator className="h-6 w-6 text-blue-600" />
                            Calculadora de Reajuste
                        </CardTitle>
                        <CardDescription className="text-slate-500">
                            Selecciona el método de reajuste establecido en tu sentencia o acuerdo.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-6">
                        <Tabs defaultValue="ipc" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-6">
                                <TabsTrigger value="ipc">Reajuste por IPC</TabsTrigger>
                                <TabsTrigger value="utm">Conversión UTM</TabsTrigger>
                            </TabsList>

                            <TabsContent value="ipc" className="space-y-6">
                                <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3 text-sm text-blue-800 mb-4">
                                    <TrendingUp className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                    <p>
                                        Utiliza esta opción si tu pensión está fijada en pesos y se reajusta semestral o anualmente según el IPC.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="amount-ipc">Monto Actual de la Pensión ($)</Label>
                                        <Input
                                            id="amount-ipc"
                                            placeholder="Ej: 150000"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="text-lg"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="rate">Variación del IPC (%)</Label>
                                        <div className="flex gap-4">
                                            <Input
                                                id="rate"
                                                placeholder="Ej: 5.4"
                                                value={ipcRate}
                                                onChange={(e) => setIpcRate(e.target.value)}
                                                className="text-lg"
                                            />
                                            <Button variant="outline" className="shrink-0" asChild>
                                                <a href="https://calculadoraipc.ine.cl/" target="_blank" rel="noopener noreferrer">
                                                    Ver IPC en INE ↗
                                                </a>
                                            </Button>
                                        </div>
                                        <p className="text-xs text-slate-500">
                                            Ingresa el porcentaje acumulado del período (ej. semestral o anual).
                                        </p>
                                    </div>

                                    <Button
                                        onClick={calculateIPC}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-lg h-12 mt-4"
                                        disabled={!amount || !ipcRate}
                                    >
                                        Calcular Nuevo Monto
                                    </Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="utm" className="space-y-6">
                                <div className="bg-amber-50 p-4 rounded-lg flex items-start gap-3 text-sm text-amber-800 mb-4">
                                    <RefreshCw className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                    <p>
                                        Utiliza esta opción si necesitas convertir una pensión fijada en pesos a UTM, o actualizar un valor en UTM.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="amount-utm">Monto Original Fijado ($)</Label>
                                        <Input
                                            id="amount-utm"
                                            placeholder="Ej: 200000"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="text-lg"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="old-utm">Valor UTM en la fecha de fijación</Label>
                                            <Input
                                                id="old-utm"
                                                placeholder="Ej: 50000"
                                                value={oldUtmValue}
                                                onChange={(e) => setOldUtmValue(e.target.value)}
                                            />
                                            <p className="text-xs text-slate-500">
                                                Valor de la UTM cuando se dictó sentencia.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="current-utm">Valor UTM Hoy</Label>
                                            <Input
                                                id="current-utm"
                                                value={currentUtmValue}
                                                onChange={(e) => setCurrentUtmValue(e.target.value)}
                                            />
                                            <p className="text-xs text-slate-500">
                                                Valor actual (Feb 2025 aprox: $67.000).
                                            </p>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={calculateUTM}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-lg h-12 mt-4"
                                        disabled={!amount || !oldUtmValue || !currentUtmValue}
                                    >
                                        Calcular Monto Actualizado
                                    </Button>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>

                    {result !== null && (
                        <CardFooter className="bg-slate-50 border-t border-slate-100 p-6 flex flex-col items-center animate-in fade-in duration-500">
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Nuevo Monto a Pagar</p>
                            <div className="text-4xl font-extrabold text-blue-600 mb-1">
                                {formatCurrency(result)}
                            </div>
                            <p className="text-sm text-slate-400">
                                Este cálculo es referencial.
                            </p>
                        </CardFooter>
                    )}
                </Card>
            </div>
        </div>
    )
}
