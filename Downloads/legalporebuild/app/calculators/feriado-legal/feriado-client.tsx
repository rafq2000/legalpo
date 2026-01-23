"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Palmtree, Calendar, DollarSign } from "lucide-react"
import { differenceInCalendarDays, parseISO } from "date-fns"

export default function FeriadoLegalClient() {
    const [startDate, setStartDate] = useState<string>("")
    const [endDate, setEndDate] = useState<string>("")
    const [salary, setSalary] = useState<string>("")
    const [result, setResult] = useState<{ days: number; amount: number } | null>(null)

    const calculateHoliday = () => {
        if (!startDate || !endDate || !salary) return

        const start = parseISO(startDate)
        const end = parseISO(endDate)
        const numericSalary = parseFloat(salary.replace(/\./g, "").replace(",", "."))

        // 1. Calculate tenure in days
        const totalDaysWorked = differenceInCalendarDays(end, start) + 1 // Include last day

        if (totalDaysWorked <= 0) return

        // 2. Calculate holiday days earned
        // Rule: 15 working days per year of service.
        // Factor: 1.25 days per month, or approx 0.041095 days per calendar day (15/365)
        // Actually, accurate calc is: (TotalDays * 15) / 365
        const earnedDays = (totalDaysWorked * 15) / 365

        // 3. Calculate value of each day
        // The value of a holiday day is: Monthly Fixed Salary / 30
        const dailyValue = numericSalary / 30

        // 4. In "indemnizacion por feriado legal", we pay the "earned days" including weekends (feriado integro concept sometimes confuses)
        // Simplified standard calculation: Days Earned (Business Days) * (Daily Salary + Weekend Proportion if applicable)
        // Standard simplified formula for indemnization:
        // (Days Owed * 1.42 (approx weekend factor) * Daily Value) <-- This is a common heuristic but often inaccurate.
        // Let's stick to the "Dirección del Trabajo" simplified logic for proportional:
        // Value = (Earned Days) * Daily Value
        // BUT NOTE: Earned days are "hábiles". The payment must cover the period as if taken.
        // For a quick estimator, we will use the clean mathematical proportion:
        // Payment = (Days Worked / Year) * Annual Vacation Value (which is 0.5 * Monthly Salary in some views, but better:
        // (TotalDaysWorked / 365) * (Salary) * (Factors are complex)

        // Let's use the standard "Factor de Feriado":
        // Days to pay = (Days Worked * 15) / 365. This gives business days.
        // To get money, we multiply Business Days * Daily Salary.
        // Wait, usually you get paid for the weekends surrounding those business days too (Feriado Proporcional + Inhábiles).
        // A common factor used by accountants is adding the weekends.
        // Factor considering Saturdays/Sundays: Days * 1.4 (Approx).

        // Let's stick to the most robust simple formula:
        // Monto = (Días Hábiles Proporcionales) * (Sueldo / 30)
        // Let's add the "Inhabil" factor (weekend days). If you take 10 days vacation, you get paid for 14 days (2 weeks).
        // So we multiply business days by 1.4 (7/5).

        const businessDaysOwed = (totalDaysWorked * 15) / 365
        const totalDaysToPay = businessDaysOwed * 1.4 // Estimating weekends inclusion

        const totalAmount = totalDaysToPay * dailyValue

        setResult({
            days: businessDaysOwed,
            amount: Math.round(totalAmount)
        })
    }

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
            maximumFractionDigits: 0,
        }).format(value)
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    Calculadora de Feriado Legal
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Calcula el pago de tus vacaciones proporcionales si renuncias o te despiden.
                </p>
            </div>

            <Card className="border-slate-200 shadow-lg bg-white">
                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-6">
                    <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
                        <Palmtree className="h-6 w-6 text-green-600" />
                        Cálculo de Vacaciones
                    </CardTitle>
                    <CardDescription>
                        Ingresa las fechas de tu contrato y tu sueldo base.
                    </CardDescription>
                </CardHeader>

                <CardContent className="pt-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>Fecha de Inicio Contrato (o último aniversario)</Label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                                <Input
                                    type="date"
                                    className="pl-10"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>
                            <p className="text-xs text-slate-500">
                                Si llevas más de un año y ya tomaste vacaciones, pon la fecha de tu último año cumplido.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label>Fecha de Término</Label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                                <Input
                                    type="date"
                                    className="pl-10"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Sueldo Base Mensual Líquido ($)</Label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                            <Input
                                placeholder="Ej: 800000"
                                className="pl-10 text-lg"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                            />
                        </div>
                    </div>

                    <Button
                        onClick={calculateHoliday}
                        className="w-full bg-green-600 hover:bg-green-700 text-lg h-12"
                        disabled={!startDate || !endDate || !salary}
                    >
                        Calcular Vacaciones Proporcionales
                    </Button>
                </CardContent>

                {result && (
                    <CardFooter className="bg-green-50 border-t border-green-100 p-6 flex flex-col items-center animate-in slide-in-from-bottom-2">
                        <div className="w-full grid grid-cols-2 gap-4 text-center">
                            <div>
                                <p className="text-sm font-medium text-green-700 uppercase mb-1">Días Hábiles Proporcionales</p>
                                <div className="text-3xl font-bold text-green-900">
                                    {result.days.toFixed(2)} días
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-green-700 uppercase mb-1">Monto Estimado a Pagar</p>
                                <div className="text-3xl font-bold text-green-900">
                                    {formatCurrency(result.amount)}
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-xs text-green-600 text-center max-w-lg">
                            * Cálculo estimado incluyendo días inhábiles (factor 1.4). El monto final puede variar según la base de cálculo detallada de tu liquidación.
                        </p>
                    </CardFooter>
                )}
            </Card>
        </div>
    )
}
