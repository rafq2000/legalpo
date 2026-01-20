import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import {
    Calculator,
    Heart,
    CheckCircle,
    AlertTriangle,
    Clock,
    Scale,
    FileText,
    ArrowRight,
    Star,
    Users,
    Zap,
    MessageCircle,
    DollarSign,
    Calendar,
    Shield,
    Gavel,
    Info,
} from "lucide-react"

export const metadata: Metadata = {
    title: "Pensión de Alimentos Chile 2026 | Monto Mínimo $215.600 | Calculadora Gratis | LegalPO",
    description:
        "📊 PENSIÓN DE ALIMENTOS 2026 en Chile. Monto mínimo actualizado: $215.600 (1 hijo) y $161.700 (2+ hijos). Calculadora gratis, cómo demandar, Ley de Pago Efectivo. Asesoría legal gratuita 24/7.",
    keywords: [
        "pension alimentos 2026",
        "pension alimenticia chile 2026",
        "pension minima alimentos 2026",
        "cuanto es la pension de alimentos",
        "como calcular pension alimenticia",
        "calculadora pension alimentos",
        "demanda pension alimentos chile",
        "ley pago efectivo pensiones",
        "pension alimenticia minima chile",
        "hasta que edad se paga pension",
    ],
    openGraph: {
        title: "Pensión de Alimentos Chile 2026 | Monto Mínimo Actualizado | LegalPO",
        description:
            "Todo sobre pensión de alimentos en Chile 2026. Montos mínimos actualizados, calculadora gratis y asesoría legal.",
        type: "article",
    },
}

const faqs = [
    {
        q: "¿Cuál es la pensión mínima de alimentos en Chile 2026?",
        a: "Con el sueldo mínimo de $539.000 (enero 2026), la pensión mínima es: $215.600 para un hijo (40% del mínimo) y $161.700 por cada hijo cuando hay dos o más (30% del mínimo por cada uno).",
    },
    {
        q: "¿Hasta qué edad se paga pensión de alimentos en Chile?",
        a: "Hasta los 21 años, o hasta los 28 años si el hijo está estudiando una profesión u oficio. Puede extenderse indefinidamente si el hijo tiene una discapacidad que le impida mantenerse por sí mismo.",
    },
    {
        q: "¿Qué pasa si el padre no paga la pensión de alimentos?",
        a: "Con la Ley de Pago Efectivo (21.389), el deudor enfrenta: retención del 50% del sueldo, arraigo nacional, suspensión de licencia de conducir, embargo de bienes, y hasta arresto nocturno o prisión de 15 días.",
    },
    {
        q: "¿Cómo se calcula la pensión de alimentos?",
        a: "Se consideran las necesidades del hijo (educación, salud, vivienda, alimentación, recreación) y la capacidad económica del alimentante. Generalmente oscila entre el 20% y 50% de los ingresos, sin exceder el 50%.",
    },
    {
        q: "¿Cuánto demora una demanda de pensión de alimentos?",
        a: "La primera audiencia se cita en aproximadamente 15-30 días. Se puede solicitar alimentos provisorios mientras dura el juicio, que pueden tardar 3-6 meses en resolverse definitivamente.",
    },
    {
        q: "¿Puedo pedir aumento de la pensión de alimentos?",
        a: "Sí, si cambian las circunstancias: el alimentante mejora sus ingresos, el hijo tiene nuevas necesidades (ej: universidad), o por inflación. Se solicita formalmente en el Tribunal de Familia.",
    },
]

export default function PensionAlimentos2026() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-slate-800/30 to-transparent border-b border-white/5">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-rose-500/20 text-rose-300 border-rose-500/30">
                            <Calendar className="w-4 h-4 mr-2" />
                            Actualizado Enero 2026
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                            Pensión de Alimentos Chile 2026
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                            Todo lo que necesitas saber sobre la pensión alimenticia en Chile. Montos mínimos actualizados, cómo
                            calcularla, cómo demandar y qué hacer si no pagan.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <DollarSign className="h-6 w-6 text-green-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">$215.600</div>
                                    <div className="text-sm text-slate-400">Mínimo 1 hijo</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <Users className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">$161.700</div>
                                    <div className="text-sm text-slate-400">Por hijo (2+)</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <Scale className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">50%</div>
                                    <div className="text-sm text-slate-400">Tope máximo</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <Clock className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">21-28</div>
                                    <div className="text-sm text-slate-400">Años límite</div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/calculators/pension-alimentos">
                                <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                                    <Calculator className="h-5 w-5 mr-2" />
                                    Calcular Pensión Gratis
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                    <MessageCircle className="h-5 w-5 mr-2" />
                                    Consultar Abogado IA
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="container max-w-4xl mx-auto px-4">
                    {/* Montos 2026 */}
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader className="border-b border-white/10">
                            <CardTitle className="text-xl text-white flex items-center">
                                <DollarSign className="h-5 w-5 mr-2 text-green-400" />
                                Montos Pensión de Alimentos 2026
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <Alert className="bg-blue-500/10 border-blue-500/20 text-blue-200 mb-6">
                                <Info className="h-4 w-4" />
                                <AlertDescription>
                                    <strong>Base de cálculo:</strong> Sueldo mínimo Chile enero 2026 = <strong>$539.000</strong>
                                </AlertDescription>
                            </Alert>

                            <div className="overflow-x-auto">
                                <table className="w-full text-sm mb-6">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left py-3 px-4 text-rose-400">Situación</th>
                                            <th className="text-left py-3 px-4 text-rose-400">Porcentaje</th>
                                            <th className="text-left py-3 px-4 text-rose-400">Monto Mínimo 2026</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-300">
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4">1 hijo</td>
                                            <td className="py-3 px-4">40% del mínimo</td>
                                            <td className="py-3 px-4 font-bold text-white">$215.600</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4">2 hijos</td>
                                            <td className="py-3 px-4">30% por cada uno</td>
                                            <td className="py-3 px-4 font-bold text-white">$323.400 total</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4">3 hijos</td>
                                            <td className="py-3 px-4">30% por cada uno</td>
                                            <td className="py-3 px-4 font-bold text-white">$485.100 total</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4 text-yellow-400">Tope máximo</td>
                                            <td className="py-3 px-4">50% de ingresos</td>
                                            <td className="py-3 px-4 text-yellow-400">Según sueldo alimentante</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-sm text-slate-400">
                                Estos son los montos <strong>mínimos legales</strong>. El tribunal puede fijar montos superiores según
                                las necesidades del menor y la capacidad económica del alimentante.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Ley de Pago Efectivo */}
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader className="border-b border-white/10">
                            <CardTitle className="text-xl text-white flex items-center">
                                <Gavel className="h-5 w-5 mr-2 text-amber-400" />
                                Ley de Pago Efectivo (Ley 21.389)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-slate-300 mb-6">
                                La nueva ley establece sanciones más estrictas para quienes no pagan la pensión de alimentos:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { icon: DollarSign, title: "Retención de sueldo", desc: "Hasta 50% del sueldo retenido directamente" },
                                    { icon: Shield, title: "Arraigo nacional", desc: "Prohibición de salir del país" },
                                    { icon: FileText, title: "Suspensión licencia", desc: "Licencia de conducir suspendida" },
                                    { icon: Scale, title: "Embargo de bienes", desc: "Vehículos, propiedades, cuentas bancarias" },
                                    { icon: AlertTriangle, title: "Arresto nocturno", desc: "De 22:00 a 06:00 hrs" },
                                    { icon: Gavel, title: "Prisión", desc: "Hasta 15 días de reclusión" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start bg-white/5 p-4 rounded-lg">
                                        <item.icon className="h-5 w-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white">{item.title}</h4>
                                            <p className="text-sm text-slate-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Cómo demandar */}
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader className="border-b border-white/10">
                            <CardTitle className="text-xl text-white flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-blue-400" />
                                Cómo Demandar Pensión de Alimentos
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                {[
                                    {
                                        step: 1,
                                        title: "Reúne los documentos",
                                        desc: "Certificado de nacimiento del hijo, tu cédula, comprobantes de gastos (educación, salud, arriendo).",
                                    },
                                    {
                                        step: 2,
                                        title: "Busca patrocinio legal",
                                        desc: "Puedes conseguir abogado gratis en la Corporación de Asistencia Judicial (CAJ) o contratar uno particular.",
                                    },
                                    {
                                        step: 3,
                                        title: "Presenta la demanda",
                                        desc: "Se presenta en el Tribunal de Familia de tu comuna. Puedes solicitar alimentos provisorios mientras dura el juicio.",
                                    },
                                    {
                                        step: 4,
                                        title: "Audiencia preparatoria",
                                        desc: "Se cita a ambas partes (15-30 días). Se intenta llegar a un acuerdo o se programa juicio.",
                                    },
                                    {
                                        step: 5,
                                        title: "Sentencia",
                                        desc: "El juez fija el monto considerando necesidades del menor y capacidad económica del demandado.",
                                    },
                                ].map((item) => (
                                    <div key={item.step} className="flex items-start">
                                        <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                                            {item.step}
                                        </span>
                                        <div>
                                            <h4 className="font-semibold text-white">{item.title}</h4>
                                            <p className="text-sm text-slate-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* FAQs */}
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader className="border-b border-white/10">
                            <CardTitle className="text-xl text-white">Preguntas Frecuentes sobre Pensión de Alimentos</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`faq-${index}`} className="border-white/10 px-6">
                                        <AccordionTrigger className="text-left text-white hover:text-rose-400 py-4">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-slate-300 pb-4">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-rose-600/20 to-purple-600/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu caso?</h2>
                        <p className="text-slate-300 mb-6">
                            Consulta gratis con nuestro abogado virtual IA o calcula exactamente cuánto te corresponde.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/calculators/pension-alimentos">
                                <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                                    <Calculator className="h-5 w-5 mr-2" />
                                    Calcular Pensión de Alimentos
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                    <MessageCircle className="h-5 w-5 mr-2" />
                                    Consultar Abogado IA Gratis
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Schema.org */}
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

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: "Pensión de Alimentos Chile 2026 - Guía Completa",
                        description:
                            "Todo sobre pensión alimenticia en Chile 2026. Montos mínimos actualizados, calculadora y asesoría legal.",
                        author: {
                            "@type": "Organization",
                            name: "LegalPO",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "LegalPO",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://legalpo.cl/images/legalpo-logo.png",
                            },
                        },
                        datePublished: "2026-01-18",
                        dateModified: "2026-01-18",
                    }),
                }}
            />
        </div>
    )
}
