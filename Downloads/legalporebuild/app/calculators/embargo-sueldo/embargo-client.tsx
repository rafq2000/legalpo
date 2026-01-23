"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ShieldAlert, Ban, Info } from "lucide-react"

export default function EmbargoClient() {
    const [salary, setSalary] = useState<string>("")
    const [result, setResult] = useState<{ embargable: number; safe: number } | null>(null)

    // Feb 2025 approx values
    const UF_VALUE = 38000 // Aprox value
    const MIN_WAGE = 539000 // 2026 value roughly

    const calculateEmbargo = () => {
        const numericSalary = parseFloat(salary.replace(/\./g, "").replace(",", "."))
        if (isNaN(numericSalary)) return

        // Logic based on Art 57 Codigo del Trabajo
        // 1. Up to 56 UF is unseizable (inembargable)
        const limit56UF = 56 * UF_VALUE

        let embargableAmount = 0

        if (numericSalary <= limit56UF) {
            embargableAmount = 0
        } else {
            // Exceso sobre 56 UF
            const excess = numericSalary - limit56UF
            // Regla: Lo que exceda de 56 UF es embargable.
            // Wait, Art 57 says: "Las remuneraciones... serán inembargables hasta 56 UF."
            // "Sobre la misma, serán embargables."
            // But typically there are brackets.
            // Actually Art 57 says: "Son inembargables las remuneraciones... hasta 56 UF."
            // "Lo que exceda de esta cantidad será embargable." 
            // EXCEPT for food pension (pension alimentos) which can go up to 50%.
            // For normal debts (banks, retail), only the excess of 56 UF.
            embargableAmount = excess
        }

        setResult({
            embargable: Math.max(0, embargableAmount),
            safe: numericSalary - Math.max(0, embargableAmount)
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
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4 mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    Calculadora de Embargo de Sueldo
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Descubre qué parte de tu sueldo está protegida por ley y cuánto te pueden retener por deudas comerciales.
                </p>
            </div>

            <Card className="border-red-100 shadow-lg bg-white">
                <CardHeader className="bg-red-50/50 border-b border-red-100 pb-6">
                    <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
                        <Ban className="h-6 w-6 text-red-600" />
                        Simulador de Embargo
                    </CardTitle>
                    <CardDescription>
                        Ingresa tu sueldo líquido mensual para ver el límite legal.
                    </CardDescription>
                </CardHeader>

                <CardContent className="pt-6 space-y-6">
                    <div className="space-y-2">
                        <Label>Sueldo Líquido Mensual ($)</Label>
                        <Input
                            placeholder="Ej: 2500000"
                            className="text-lg"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                        />
                        <p className="text-xs text-slate-500">
                            Art. 57: Son inembargables hasta 56 UF (Aprox {formatCurrency(56 * UF_VALUE)}).
                        </p>
                    </div>

                    <Button
                        onClick={calculateEmbargo}
                        className="w-full bg-red-600 hover:bg-red-700 text-lg h-12"
                        disabled={!salary}
                    >
                        Calcular Monto Embargable
                    </Button>
                </CardContent>

                {result && (
                    <CardFooter className="bg-slate-50 border-t border-slate-100 p-6 flex flex-col gap-6 animate-in zoom-in-95 duration-300">
                        <div className="grid md:grid-cols-2 w-full gap-4">
                            <div className="bg-green-100 p-4 rounded-xl border border-green-200 text-center">
                                <p className="text-sm font-bold text-green-800 uppercase">Monto Protegido (Intocable)</p>
                                <p className="text-3xl font-extrabold text-green-700">{formatCurrency(result.safe)}</p>
                            </div>
                            <div className="bg-red-100 p-4 rounded-xl border border-red-200 text-center">
                                <p className="text-sm font-bold text-red-800 uppercase">Máximo Embargable</p>
                                <p className="text-3xl font-extrabold text-red-700">{formatCurrency(result.embargable)}</p>
                            </div>
                        </div>

                        {result.embargable === 0 && (
                            <div className="flex items-center gap-2 text-green-700 font-medium bg-green-50 px-4 py-2 rounded-full">
                                <ShieldAlert className="h-5 w-5" />
                                Tu sueldo está 100% protegido. No excede las 56 UF.
                            </div>
                        )}
                    </CardFooter>
                )}
            </Card>

            <div className="bg-blue-50 p-4 rounded-lg flex gap-3 text-sm text-blue-800 border-l-4 border-blue-500">
                <Info className="h-5 w-5 shrink-0 mt-0.5" />
                <p>
                    <strong>Ojo:</strong> Este cálculo aplica para deudas comerciales (bancos, retail). Las deudas por <strong>Pensión de Alimentos</strong> tienen reglas distintas y pueden embargar hasta el 50% de tu sueldo, sin importar el monto.
                </p>
            </div>
        </div>
    )
}
