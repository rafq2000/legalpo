import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Home, Calculator, CheckCircle, Clock, Scale, FileText, MessageCircle, Shield, Gavel, AlertTriangle, Key } from "lucide-react"
import CalculadoraDesalojo from "./calculadora-desalojo"
import GeneradorCartaAviso from "./generador-carta"

export const metadata: Metadata = {
    title: "Abogado Arriendos Chile 2026 | Ley Devuélveme Mi Casa | Desalojo Rápido",
    description: "🏠 ABOGADO ARRIENDOS. Recupera tu casa en tiempo récord con la Ley Devuélveme Mi Casa (21.461). Calculadora de Desalojo GRATIS y Generador de Cartas de Aviso.",
    keywords: [
        "ley devuelveme mi casa abogados",
        "desalojo arrendatario moroso",
        "juicio precario chile",
        "termino contrato arriendo",
        "carta aviso termino contrato arriendo",
        "abogado inmobiliario chile",
        "cuanto demora juicio arriendo",
        "sacar arrendatario sin contrato",
        "demanda arriendo no pago",
        "gasto comun impago desalojo",
    ],
    openGraph: {
        title: "Abogado Arriendos Chile | Recupera tu Propiedad",
        description: "¿Arrendatario no paga? Usa nuestra Calculadora de Desalojo y recupera tu inmueble con la Ley 21.461.",
        type: "website",
    },
}

const faqs = [
    { q: "¿En qué consiste la Ley 'Devuélveme mi Casa'?", a: "Es la Ley 21.461, diseñada para acelerar los juicios de arriendo. Permite pedir el desalojo inmediato y el cobro de rentas en un procedimiento 'monitorio' (expres), que puede tardar semanas en vez de años." },
    { q: "¿Qué pasa si no tengo contrato escrito?", a: "Es más complejo pero no imposible. Se debe iniciar un 'Juicio de Precario' o probar la existencia del arriendo mediante recibos, testigos y transferencias. Sin embargo, la Ley Devuélveme mi Casa funciona mejor con contrato notarial." },
    { q: "¿Puedo cortar la luz o el agua al arrendatario?", a: "NO. Rotundamente no. Eso es un delito de 'autotutela' y te puede traer problemas penales graves, además de perjudicar tu demanda civil. Debes hacerlo por la vía legal." },
    { q: "¿Qué hago si dejaron la propiedad con daños?", a: "Debes documentar todo (fotos, videos, actas notarial de salida). Puedes demandar la indemnización de perjuicios y el cobro de la garantía." },
    { q: "¿Se pueden cobrar los Gastos Comunes en la demanda?", a: "Sí. La nueva ley permite cobrar rentas, gastos comunes y servicios básicos impagos en la misma demanda, siempre que estén acreditados." },
]

export default function AbogadoArriendosPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans">
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-orange-900/40 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container max-w-6xl mx-auto px-4 relative z-10 text-center">
                    <Badge className="mb-6 bg-orange-500/20 text-orange-300 border-orange-500/30 px-4 py-1 text-sm rounded-full">
                        <Home className="w-4 h-4 mr-2" />
                        Expertos en Ley 21.461
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
                        Recupera tu Casa Ahora
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Especialistas en <strong>Desalojo Express</strong>. Terminamos con los arrendatarios morosos usando la nueva Ley "Devuélveme mi Casa".
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                            <Clock className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                            <div className="font-bold">Rápido</div>
                            <div className="text-sm text-slate-400">Procedimiento Monitorio</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                            <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                            <div className="font-bold">Efectivo</div>
                            <div className="text-sm text-slate-400">Auxilio Fuerza Pública</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                            <Calculator className="w-8 h-8 text-green-400 mx-auto mb-2" />
                            <div className="font-bold">Cobro Total</div>
                            <div className="text-sm text-slate-400">Rentas + Gastos Comunes</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                            <Key className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                            <div className="font-bold">Restitución</div>
                            <div className="text-sm text-slate-400">Entrega del inmueble</div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 h-12 shadow-lg shadow-orange-900/20">
                                <MessageCircle className="h-5 w-5 mr-2" />
                                Consulta Abogado Arriendos
                            </Button>
                        </Link>
                        <Link href="#tools">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 h-12">
                                <Calculator className="h-5 w-5 mr-2" />
                                Herramientas Gratuitas
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section id="tools" className="py-20 bg-slate-50 text-slate-900">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-3">Utilidades Gratuitas</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Herramientas para Arrendadores</h2>
                        <p className="text-lg text-slate-600">Calcula tus tiempos y genera documentos legales básicos sin costo.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Calculator */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                                <Clock className="h-6 w-6 text-orange-600" /> ¿Cuándo recupero mi casa?
                            </h3>
                            <CalculadoraDesalojo />
                        </div>

                        {/* Letter Generator */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                                <FileText className="h-6 w-6 text-blue-600" /> Carta de Cobro / Termino
                            </h3>
                            <GeneradorCartaAviso />
                        </div>
                    </div>
                </div>
            </section>


            {/* Content: Ley Devuélveme mi Casa */}
            <section className="py-24 bg-slate-900">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-200 to-orange-500 bg-clip-text text-transparent">
                        Todo sobre la Ley "Devuélveme mi Casa"
                    </h2>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-orange-400 mb-4">¿Por qué es mejor que la ley antigua?</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Antiguamente, los juicios de arriendo podían durar años porque el arrendatario podía apelar y dilatar el proceso.
                                    La <strong>Ley 21.461</strong> introdujo el procedimiento monitorio de cobro de rentas. Si el deudor no paga en 10 días tras ser notificado,
                                    el juez ordena el desalojo inmediato.
                                </p>
                            </div>

                            <hr className="border-white/10" />

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">Requisitos para usar esta ley:</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Card className="bg-slate-800 border-slate-700">
                                        <CardContent className="p-4 flex items-start gap-4">
                                            <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                                            <div>
                                                <div className="font-bold text-white">Contrato de Arriendo</div>
                                                <div className="text-sm text-slate-400">Idealmente firmado ante notario.</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="bg-slate-800 border-slate-700">
                                        <CardContent className="p-4 flex items-start gap-4">
                                            <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                                            <div>
                                                <div className="font-bold text-white">Deuda Acreditada</div>
                                                <div className="text-sm text-slate-400">Cartolas bancarias o recibos impagos.</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="bg-slate-800 border-slate-700">
                                        <CardContent className="p-4 flex items-start gap-4">
                                            <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                                            <div>
                                                <div className="font-bold text-white">Notificación Judicial</div>
                                                <div className="text-sm text-slate-400">Realizada por receptor judicial.</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="bg-slate-800 border-slate-700">
                                        <CardContent className="p-4 flex items-start gap-4">
                                            <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                                            <div>
                                                <div className="font-bold text-white">Mora o Incumplimiento</div>
                                                <div className="text-sm text-slate-400">Falta de pago de renta o gastos comunes.</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-xl flex gap-4">
                                <AlertTriangle className="h-8 w-8 text-orange-400 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-orange-200 mb-1">¡Cuidado con el Precario!</h4>
                                    <p className="text-sm text-orange-100/80">
                                        Si hay personas viviendo en tu propiedad SIN contrato y SIN pagar arriendo, no aplica esta ley.
                                        Ahí debes iniciar un <strong>Juicio de Precario</strong>. Consúlta con nuestros abogados la diferencia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-slate-950">
                <div className="container max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">Preguntas Frecuentes sobre Arriendos</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="border-white/10 px-4 mb-4 bg-white/5 rounded-lg overflow-hidden">
                                <AccordionTrigger className="text-left text-white hover:text-orange-400 py-4 px-2 text-lg font-medium">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-300 pb-6 px-2 text-base leading-relaxed">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-orange-600 text-white text-center">
                <div className="container px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">No pierdas más meses de arriendo</h2>
                    <p className="text-xl max-w-2xl mx-auto mb-8 text-orange-100">
                        Cada día que pasa es dinero perdido. Inicia el proceso de recuperación hoy mismo.
                    </p>
                    <Link href="/">
                        <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50 font-bold text-lg px-8 h-14 shadow-xl">
                            Iniciar Demanda Ahora
                        </Button>
                    </Link>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LegalService", name: "LegalPO - Abogado Arriendos Ley Devuélveme Mi Casa", description: "Expertos en juicios de arrendamiento, desalojos y nueva ley 21.461.", serviceType: "Derecho Inmobiliario", areaServed: { "@type": "Country", name: "Chile" }, priceRange: "Honorarios variables" }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        </div>
    )
}
