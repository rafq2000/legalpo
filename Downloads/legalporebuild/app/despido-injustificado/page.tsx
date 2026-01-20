import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import {
    Briefcase,
    Calculator,
    CheckCircle,
    AlertTriangle,
    Clock,
    Scale,
    FileText,
    ArrowRight,
    MessageCircle,
    Shield,
    DollarSign,
    Gavel,
    Info,
    XCircle,
} from "lucide-react"

export const metadata: Metadata = {
    title: "Despido Injustificado Chile 2026 | Indemnización Aumentada | Cómo Demandar | LegalPO",
    description:
        "⚖️ DESPIDO INJUSTIFICADO en Chile 2026. Indemnización aumentada hasta 80%, cómo demandar, plazos, carta de despido. Calculadora de finiquito gratis. Asesoría legal 24/7.",
    keywords: [
        "despido injustificado chile",
        "indemnizacion despido injustificado",
        "demanda laboral chile",
        "carta de despido chile",
        "derechos trabajador chile 2026",
        "despido sin causa",
        "indemnizacion años servicio",
        "codigo del trabajo chile",
        "finiquito despido injustificado",
        "como demandar por despido",
    ],
    openGraph: {
        title: "Despido Injustificado Chile 2026 | Indemnización Aumentada | LegalPO",
        description:
            "Todo sobre despido injustificado en Chile. Indemnización aumentada, cómo demandar y calculadora gratis.",
        type: "article",
    },
}

const faqs = [
    {
        q: "¿Qué es un despido injustificado?",
        a: "Es cuando el empleador despide al trabajador invocando una causal que no corresponde o no puede probar. Por ejemplo, alegar abandono de trabajo cuando el trabajador sí asistió, o alegar incumplimiento grave sin evidencia.",
    },
    {
        q: "¿Cuánto aumenta la indemnización por despido injustificado?",
        a: "Si el tribunal declara el despido injustificado, la indemnización por años de servicio se incrementa: 30% si se invocó necesidades de la empresa indebidamente, 50% si fue Art. 160 sin causal, y hasta 80% en casos de despido indirecto o tutela laboral.",
    },
    {
        q: "¿Cuánto tiempo tengo para demandar por despido injustificado?",
        a: "Tienes 60 días hábiles desde la fecha de despido para interponer la demanda ante el Juzgado del Trabajo. Este plazo es fatal (no se puede extender), así que actúa rápidamente.",
    },
    {
        q: "¿Qué debe contener la carta de despido?",
        a: "Debe indicar: la causal legal invocada (Art. 159, 160 o 161), los hechos que fundamentan el despido, la fecha de término, y debe entregarse personalmente o por carta certificada dentro de 3 días hábiles.",
    },
    {
        q: "¿Puedo demandar aunque haya firmado el finiquito?",
        a: "Sí, si firmaste 'bajo reserva de derechos'. Si firmaste sin esa reserva, el finiquito ratificado ante ministro de fe tiene 'poder liberatorio' y limita tus opciones, pero aún puedes demandar por conceptos no incluidos o fraude.",
    },
    {
        q: "¿Necesito abogado para demandar por despido?",
        a: "En Chile puedes comparecer sin abogado en causas de hasta 10 ingresos mínimos (~$5.390.000). Para montos mayores necesitas patrocinio de abogado. La Corporación de Asistencia Judicial (CAJ) ofrece abogados gratuitos si calificas.",
    },
]

export default function DespidoInjustificado() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-slate-800/30 to-transparent border-b border-white/5">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-red-500/20 text-red-300 border-red-500/30">
                            <Gavel className="w-4 h-4 mr-2" />
                            Derecho Laboral 2026
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                            Despido Injustificado Chile 2026
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                            ¿Te despidieron sin razón válida? Conoce tus derechos, cuánto puede aumentar tu indemnización y cómo
                            demandar para obtener lo que te corresponde.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <DollarSign className="h-6 w-6 text-green-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">+80%</div>
                                    <div className="text-sm text-slate-400">Aumento máximo</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <Clock className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">60 días</div>
                                    <div className="text-sm text-slate-400">Plazo demanda</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <Scale className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">11</div>
                                    <div className="text-sm text-slate-400">Meses tope</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <Shield className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">90 UF</div>
                                    <div className="text-sm text-slate-400">Tope sueldo</div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/calculators/finiquito">
                                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                                    <Calculator className="h-5 w-5 mr-2" />
                                    Calcular Mi Finiquito
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
                    {/* Recargos por despido injustificado */}
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader className="border-b border-white/10">
                            <CardTitle className="text-xl text-white flex items-center">
                                <DollarSign className="h-5 w-5 mr-2 text-green-400" />
                                Recargos por Despido Injustificado
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-slate-300 mb-6">
                                Si el tribunal declara tu despido como injustificado, improcedente o indebido, la indemnización por
                                años de servicio se aumenta:
                            </p>

                            <div className="overflow-x-auto mb-6">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left py-3 px-4 text-green-400">Situación</th>
                                            <th className="text-left py-3 px-4 text-green-400">Recargo</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-300">
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4">Art. 161 (necesidades empresa) sin justificación</td>
                                            <td className="py-3 px-4 font-bold text-yellow-400">+30%</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4">Art. 160 (causales imputables) sin probar</td>
                                            <td className="py-3 px-4 font-bold text-orange-400">+50%</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4">Art. 160 N°1, 5 o 6 (conductas graves) sin probar</td>
                                            <td className="py-3 px-4 font-bold text-red-400">+80%</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4">Despido indirecto (autodespido) acogido</td>
                                            <td className="py-3 px-4 font-bold text-red-400">+50% a +80%</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4">Tutela laboral (derechos fundamentales)</td>
                                            <td className="py-3 px-4 font-bold text-red-400">+80% + daño moral</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Alert className="bg-green-500/10 border-green-500/20 text-green-200">
                                <Info className="h-4 w-4" />
                                <AlertDescription>
                                    <strong>Ejemplo:</strong> Si te corresponden $5.000.000 de indemnización y el despido se declara
                                    injustificado con recargo del 50%, recibirías <strong>$7.500.000</strong>.
                                </AlertDescription>
                            </Alert>
                        </CardContent>
                    </Card>

                    {/* Causales Art. 160 */}
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader className="border-b border-white/10">
                            <CardTitle className="text-xl text-white flex items-center">
                                <XCircle className="h-5 w-5 mr-2 text-red-400" />
                                Causales Art. 160 (Sin Indemnización)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-slate-300 mb-4">
                                Estas causales permiten despido sin indemnización, pero el empleador <strong>debe probarlas</strong>:
                            </p>

                            <div className="space-y-3">
                                {[
                                    { n: "1", title: "Falta de probidad", desc: "Conductas deshonestas como robo o fraude" },
                                    { n: "2", title: "Conductas de acoso", desc: "Acoso sexual o laboral comprobado" },
                                    { n: "3", title: "Vías de hecho", desc: "Agresiones físicas en el trabajo" },
                                    { n: "4", title: "Injurias", desc: "Insultos graves al empleador o compañeros" },
                                    { n: "5", title: "Conducta inmoral", desc: "Conductas que afecten la actividad de la empresa" },
                                    { n: "6", title: "Negociaciones incompatibles", desc: "Competencia desleal o conflicto de intereses" },
                                    { n: "7", title: "Ausencias injustificadas", desc: "2 días seguidos, 2 lunes en el mes, o 3 días totales" },
                                    { n: "8", title: "Abandono del trabajo", desc: "Irse sin autorización causando perjuicio" },
                                    { n: "9", title: "Actos que afecten seguridad", desc: "Poner en riesgo la empresa o trabajadores" },
                                    { n: "10", title: "Incumplimiento grave", desc: "Incumplir obligaciones del contrato" },
                                ].map((item) => (
                                    <div key={item.n} className="flex items-start bg-white/5 p-3 rounded-lg">
                                        <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold">
                                            {item.n}
                                        </span>
                                        <div>
                                            <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                                            <p className="text-xs text-slate-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Alert className="bg-amber-500/10 border-amber-500/20 text-amber-200 mt-6">
                                <AlertTriangle className="h-4 w-4" />
                                <AlertDescription>
                                    Si el empleador no puede <strong>probar</strong> estas causales en juicio, el despido se declara
                                    injustificado y deberá pagar indemnización con recargo del 50% o 80%.
                                </AlertDescription>
                            </Alert>
                        </CardContent>
                    </Card>

                    {/* Cómo demandar */}
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader className="border-b border-white/10">
                            <CardTitle className="text-xl text-white flex items-center">
                                <Gavel className="h-5 w-5 mr-2 text-blue-400" />
                                Cómo Demandar por Despido Injustificado
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                {[
                                    {
                                        step: 1,
                                        title: "Reúne evidencia",
                                        desc: "Carta de despido, contrato, liquidaciones, correos, testigos, fotos de reloj control.",
                                    },
                                    {
                                        step: 2,
                                        title: "Calcula tu finiquito",
                                        desc: "Usa nuestra calculadora para saber cuánto te corresponde y verificar si te pagaron bien.",
                                    },
                                    {
                                        step: 3,
                                        title: "Presenta reclamo en Inspección (opcional)",
                                        desc: "Puedes intentar conciliación en la Inspección del Trabajo antes de demandar.",
                                    },
                                    {
                                        step: 4,
                                        title: "Interpone demanda laboral",
                                        desc: "Ante el Juzgado del Trabajo de tu comuna, dentro de 60 días hábiles desde el despido.",
                                    },
                                    {
                                        step: 5,
                                        title: "Audiencia preparatoria",
                                        desc: "Se intenta conciliación. Si no hay acuerdo, se programa audiencia de juicio.",
                                    },
                                    {
                                        step: 6,
                                        title: "Sentencia",
                                        desc: "El juez determina si el despido fue justificado y fija las indemnizaciones.",
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
                            <CardTitle className="text-xl text-white">Preguntas Frecuentes sobre Despido</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`faq-${index}`} className="border-white/10 px-6">
                                        <AccordionTrigger className="text-left text-white hover:text-red-400 py-4">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-slate-300 pb-4">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Crees que tu despido fue injustificado?</h2>
                        <p className="text-slate-300 mb-6">
                            Calcula tu finiquito y consulta gratis con nuestro abogado IA para conocer tus opciones.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/calculators/finiquito">
                                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                                    <Calculator className="h-5 w-5 mr-2" />
                                    Calcular Mi Finiquito
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
        </div>
    )
}
