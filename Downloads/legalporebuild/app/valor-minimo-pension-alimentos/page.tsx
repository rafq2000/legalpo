import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Info, Heart, DollarSign, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Valor Mínimo Pensión Alimentos Chile 2026 | Calcular Pensión Alimenticia",
    description:
        "Valor mínimo de pensión de alimentos Chile 2026 actualizado. 40% del ingreso mínimo = $196.000 por hijo. Calculadora gratis de pensión alimenticia. Consulta legal 24/7.",
    keywords: [
        "valor minimo pension alimentos",
        "valor minimo pension alimentos 2026",
        "pension alimenticia minima chile",
        "cuanto es la pension minima de alimentos",
        "pension alimentos chile 2026",
        "calculadora pension alimentos",
        "como calcular pension alimenticia",
        "monto minimo pension alimentos",
    ],
    openGraph: {
        title: "Valor Mínimo Pensión Alimentos Chile 2026",
        description:
            "Valor mínimo actualizado de pensión de alimentos en Chile 2026. Calculadora gratis y asesoría legal 24/7.",
        type: "website",
        locale: "es_CL",
    },
    alternates: {
        canonical: "https://legalpo.cl/valor-minimo-pension-alimentos",
    },
}

const valorMinimo2026 = {
    sueldoMinimo: 490000,
    pensionMinima: 196000, // 40% del sueldo mínimo
    porcentajeMinimo: 40,
    porcentajeMaximo: 50,
}

const factoresCalculo = [
    {
        factor: "Ingresos del alimentante",
        descripcion: "Se considera el sueldo líquido y otros ingresos comprobables",
        icono: DollarSign,
    },
    {
        factor: "Necesidades del menor",
        descripcion: "Alimentación, educación, salud, vestuario, recreación",
        icono: Heart,
    },
    {
        factor: "Número de hijos",
        descripcion: "La pensión se divide proporcionalmente entre todos los hijos",
        icono: TrendingUp,
    },
]

const faqs = [
    {
        q: "¿Cuál es el monto mínimo de pensión de alimentos en Chile 2026?",
        a: `El monto mínimo es el 40% del ingreso mínimo remuneracional, que corresponde a $${valorMinimo2026.pensionMinima.toLocaleString("es-CL")} por hijo con el sueldo mínimo de $${valorMinimo2026.sueldoMinimo.toLocaleString("es-CL")} vigente en 2026.`,
    },
    {
        q: "¿Cuánto es el máximo de pensión alimenticia que puedo pagar?",
        a: "El máximo por ley es el 50% del ingreso del alimentante cuando hay un solo hijo. Si hay más hijos, se puede llegar hasta el 50% dividido proporcionalmente.",
    },
    {
        q: "¿Qué pasa si no puedo pagar la pensión mínima?",
        a: "Si demuestras que tus ingresos no alcanzan para el mínimo legal, el tribunal puede fijar una pensión menor basada en tu capacidad económica real.",
    },
    {
        q: "¿Cómo solicitar aumento de pensión de alimentos?",
        a: "Debes presentar una demanda de aumento de pensión ante el Tribunal de Familia, acreditando el cambio de circunstancias (mayores gastos del menor o mayor capacidad del alimentante).",
    },
]

export default function ValorMinimoPensionAlimentosPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Valor Mínimo Pensión de Alimentos Chile 2026
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Información actualizada sobre el monto mínimo de pensión alimenticia en Chile. Calcula
                        cuánto corresponde según la ley vigente.
                    </p>
                </div>

                {/* Valor Actual Card */}
                <Card className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/30 mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl text-emerald-400 flex items-center gap-2">
                            <DollarSign className="h-6 w-6" />
                            Monto Mínimo Legal 2026
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="text-center p-6 bg-slate-900/50 rounded-lg">
                                <p className="text-slate-400 text-sm">Sueldo Mínimo 2026</p>
                                <p className="text-3xl font-bold text-white">
                                    ${valorMinimo2026.sueldoMinimo.toLocaleString("es-CL")}
                                </p>
                            </div>
                            <div className="text-center p-6 bg-emerald-900/30 rounded-lg border border-emerald-500/30">
                                <p className="text-emerald-400 text-sm">Pensión Mínima por Hijo (40%)</p>
                                <p className="text-4xl font-bold text-emerald-400">
                                    ${valorMinimo2026.pensionMinima.toLocaleString("es-CL")}
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
                            <p className="text-slate-300 flex items-start gap-2">
                                <Info className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                <span>
                                    Este es el <strong>mínimo legal</strong>. Si el alimentante tiene mayores
                                    ingresos, la pensión puede ser mayor (hasta el 50% de su sueldo).
                                </span>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* CTA Calculadora */}
                <Card className="bg-slate-800/50 border-slate-700 mb-8">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <Calculator className="h-12 w-12 text-blue-400" />
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-xl font-semibold text-white">
                                    Calcula tu Pensión de Alimentos
                                </h2>
                                <p className="text-slate-400">
                                    Usa nuestra calculadora gratuita para obtener un cálculo estimado basado en los
                                    ingresos reales.
                                </p>
                            </div>
                            <Link href="/calculators/pension-alimentos">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                    Ir a la Calculadora
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                {/* Factores de Cálculo */}
                <h2 className="text-2xl font-bold text-white mb-6">¿Cómo se Calcula la Pensión?</h2>
                <div className="grid md:grid-cols-3 gap-4 mb-12">
                    {factoresCalculo.map((factor, i) => (
                        <Card key={i} className="bg-slate-800/50 border-slate-700">
                            <CardContent className="p-6 text-center">
                                <factor.icono className="h-10 w-10 mx-auto mb-4 text-purple-400" />
                                <h3 className="font-semibold text-white mb-2">{factor.factor}</h3>
                                <p className="text-sm text-slate-400">{factor.descripcion}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* FAQs */}
                <h2 className="text-2xl font-bold text-white mb-6">Preguntas Frecuentes</h2>
                <div className="space-y-4 mb-12">
                    {faqs.map((faq, i) => (
                        <Card key={i} className="bg-slate-800/50 border-slate-700">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-white mb-2 flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                    {faq.q}
                                </h3>
                                <p className="text-slate-300 pl-7">{faq.a}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA Final */}
                <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30">
                    <CardContent className="p-8 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">¿Tienes Dudas sobre Pensión de Alimentos?</h2>
                        <p className="text-slate-300 mb-6">
                            Consulta gratis con nuestra IA legal especializada en derecho de familia chileno.
                            Disponible 24/7.
                        </p>
                        <Link href="/">
                            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                Consultar Gratis Ahora
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                {/* Schema.org FAQPage */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: faqs.map((faq) => ({
                                "@type": "Question",
                                name: faq.q,
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: faq.a,
                                },
                            })),
                        }),
                    }}
                />
            </div>
        </div>
    )
}
