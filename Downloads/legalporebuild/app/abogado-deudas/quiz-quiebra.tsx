"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, TrendingUp, HelpCircle } from "lucide-react"

export default function QuizQuiebra() {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState<Record<number, string>>({})
    const [showResult, setShowResult] = useState(false)

    const questions = [
        {
            id: 1,
            question: "¿Tienes dos o más deudas vencidas?",
            options: [
                { value: "si", label: "Sí, tengo 2 o más deudas vencidas" },
                { value: "no", label: "No, solo tengo una o ninguna vencida" },
            ],
        },
        {
            id: 2,
            question: "¿Hace cuánto tiempo dejaste de pagar estas deudas?",
            options: [
                { value: "90", label: "Más de 90 días (3 meses)" },
                { value: "menos", label: "Menos de 90 días" },
            ],
        },
        {
            id: 3,
            question: "¿El monto total de tus deudas suma más de 80 UF (Aprox. $3.000.000)?",
            options: [
                { value: "si", label: "Sí, debo más de 80 UF" },
                { value: "no", label: "No, debo menos de esa cantidad" },
            ],
        },
        {
            id: 4,
            question: "¿Te han notificado de alguna demanda judicial?",
            options: [
                { value: "si", label: "Sí, ya recibí una demanda" },
                { value: "no", label: "No, aún no me demandan" },
            ],
        },
    ]

    const handleAnswer = (value: string) => {
        setAnswers({ ...answers, [step]: value })
        if (step < questions.length - 1) {
            setStep(step + 1)
        } else {
            setShowResult(true)
        }
    }

    const getResult = () => {
        // Basic Logic for "Liquidación Voluntaria" (Quiebra)
        // Needs: >1 debt, >80 UF total, >90 days overdue, no juicio pendiente (ideally)
        // If juicio pendiente -> Tercería or Defense might be better, but can still do Quiebra

        const deudaVencida = answers[0] === "si"
        const tiempoMora = answers[1] === "90"
        const montoDeuda = answers[2] === "si"

        if (deudaVencida && tiempoMora && montoDeuda) {
            return {
                status: "eligible",
                title: "¡Eres Candidato para la Ley de Quiebras!",
                message: "Cumples con los requisitos principales para acogerte a la Ley 20.720 de Insolvencia y Reemprendimiento. Podrías eliminar todas tus deudas.",
                action: "Consultar Gratis",
                color: "text-green-600",
                bg: "bg-green-50",
                icon: CheckCircle2
            }
        } else {
            return {
                status: "review",
                title: "Podrías necesitar otra estrategia",
                message: "Quizás no cumples todos los requisitos automáticos para la quiebra, pero podríamos evaluar una Renegociación o Defensa de Embargo.",
                action: "Evaluación Gratuita",
                color: "text-amber-600",
                bg: "bg-amber-50",
                icon: AlertCircle
            }
        }
    }

    const resultData = showResult ? getResult() : null

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-xl border-amber-200">
            <CardHeader className="bg-amber-50/50 border-b border-amber-100">
                <CardTitle className="text-2xl flex items-center gap-2 text-amber-900">
                    <TrendingUp className="h-6 w-6 text-amber-600" />
                    ¿Califico para la Ley de Quiebras?
                </CardTitle>
                <CardDescription>
                    Responde 4 preguntas simples para saber si puedes borrar tus deudas legalmente.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                {!showResult ? (
                    <div className="space-y-6">
                        <div className="flex justify-between text-sm text-slate-400 mb-4">
                            <span>Pregunta {step + 1} de {questions.length}</span>
                            <span className="font-medium text-amber-600">{Math.round(((step + 1) / questions.length) * 100)}%</span>
                        </div>

                        <h3 className="text-xl font-medium text-slate-800 mb-4">
                            {questions[step].question}
                        </h3>

                        <RadioGroup onValueChange={handleAnswer} className="space-y-3">
                            {questions[step].options.map((option) => (
                                <div key={option.value} className="flex items-center space-x-2 border p-4 rounded-lg hover:bg-amber-50 cursor-pointer transition-colors">
                                    <RadioGroupItem value={option.value} id={option.value} />
                                    <Label htmlFor={option.value} className="flex-grow cursor-pointer text-lg">{option.label}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                ) : (
                    <div className={`text-center space-y-6 animate-in fade-in zoom-in duration-500`}>
                        <div className={`${resultData?.bg} p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center`}>
                            {resultData?.icon && <resultData.icon className={`h-12 w-12 ${resultData.color}`} />}
                        </div>

                        <div>
                            <h3 className={`text-2xl font-bold mb-2 ${resultData?.color}`}>
                                {resultData?.title}
                            </h3>
                            <p className="text-slate-600 text-lg">
                                {resultData?.message}
                            </p>
                        </div>

                        <div className="pt-4">
                            <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white text-lg h-14">
                                {resultData?.action} via WhatsApp
                            </Button>
                            <p className="text-xs text-slate-400 mt-2">
                                Evaluación preliminar no vinculante. Consulta con un abogado.
                            </p>
                        </div>

                        <Button variant="ghost" onClick={() => { setShowResult(false); setStep(0); }} className="text-slate-400">
                            Volver a empezar
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
