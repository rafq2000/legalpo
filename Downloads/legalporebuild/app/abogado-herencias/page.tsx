import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Scroll, Calculator, CheckCircle, Clock, Scale, FileText, MessageCircle, Gavel, Users, Info, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Abogado Herencias Chile 2026 | Guía Posesión Efectiva y Testamentos | LegalPO",
    description: "📜 ABOGADO HERENCIAS. Guía Definitiva de Posesión Efectiva (Registro Civil vs Tribunales). Calcula tu herencia online y descarga modelos de testamento. Asesoría experta.",
    keywords: [
        "abogado herencias chile",
        "posesion efectiva registro civil",
        "cuanto demora posesion efectiva",
        "impuesto herencia calculo",
        "redaccion testamento chile",
        "particion de herencia judicial",
        "herederos forzosos",
        "sucesion intestada pasos",
        "abogado sucesiones santiago",
        "tramite herencia online",
    ],
    openGraph: {
        title: "Abogado Herencias Chile | Todo sobre Posesión Efectiva",
        description: "¿No sabes por dónde empezar? Guía paso a paso y Calculadora de Herencia Gratuita.",
        type: "website",
    },
}

const faqs = [
    { q: "¿Cuál es la diferencia entre Posesión Efectiva en Registro Civil o Tribunales?", a: "Es simple: Si NO hay testamento, se hace online o presencial en el Registro Civil (más barato y rápido). Si SÍ hay testamento, es obligatorio hacerlo con un abogado ante los Tribunales Civiles." },
    { q: "¿Cuánto tiempo tengo para tramitar la herencia?", a: "No hay un plazo legal límite, pero se recomienda hacerlo cuanto antes. Si no pagas el impuesto a la herencia (si corresponde) dentro de los 2 años, empiezan a correr multas e intereses." },
    { q: "¿Qué pasa si uno de los herederos no quiere vender?", a: "Nadie está obligado a permanecer en indivisión. Si no hay acuerdo, cualquiera de los herederos puede solicitar un 'Juicio de Partición', donde un juez árbitro remata los bienes y reparte el dinero." },
    { q: "¿Las deudas se heredan?", a: "Sí, pero existe el 'Beneficio de Inventario'. Esto significa que solo respondes por las deudas hasta el monto de lo que heredaste. No responderás con tu propio patrimonio." },
    { q: "¿Puedo dejarle mi herencia a quien yo quiera?", a: "En Chile la libertad es restringida. El 50% debe ir obligatoriamente a cónyuge e hijos (legitimarios). El 25% (cuarta de mejoras) puedes usarlo para favorecer a uno de ellos. Solo el 25% restante (cuarta de libre disposición) es totalmente libre." },
]

export default function AbogadoHerenciasPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans">
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/40 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container max-w-6xl mx-auto px-4 relative z-10 text-center">
                    <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-1 text-sm rounded-full">
                        <Scroll className="w-4 h-4 mr-2" />
                        Expertos en Derecho Sucesorio
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
                        Herencias y Posesión Efectiva
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Resolvemos la burocracia tras la pérdida. Tramitamos tu posesión efectiva, testamentos y particiones con rapidez.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/calculators/herencia">
                            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 h-14 shadow-lg shadow-purple-900/20 w-full sm:w-auto">
                                <Calculator className="h-6 w-6 mr-2" />
                                Calcular mi Herencia GRATIS
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 h-14 w-full sm:w-auto">
                                <MessageCircle className="h-5 w-5 mr-2" />
                                Consulta con Abogado
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Skyscraper Content - Guía Posesión Efectiva */}
            <section className="py-24 bg-slate-50 text-slate-900">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
                        Guía Definitiva: ¿Cómo tramitar la Posesión Efectiva?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Sin Testamento */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col">
                            <div className="bg-blue-100 text-blue-700 w-fit px-4 py-1 rounded-full text-sm font-bold mb-6">Caso A: Más Común</div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <FileText className="h-6 w-6 text-blue-600" /> Sin Testamento
                            </h3>
                            <p className="text-slate-600 mb-6 flex-grow">
                                Es el trámite más sencillo. Se realiza cuando la persona falleció sin dejar un testamento escrito.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="bg-blue-50 p-1 rounded-full"><ChevronRight className="h-4 w-4 text-blue-600" /></div>
                                    <span className="text-sm text-slate-700">Se tramita ante el <strong>Registro Civil</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-blue-50 p-1 rounded-full"><ChevronRight className="h-4 w-4 text-blue-600" /></div>
                                    <span className="text-sm text-slate-700">Costo variable según valor de bienes (1.6 a 2.5 UTM).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-blue-50 p-1 rounded-full"><ChevronRight className="h-4 w-4 text-blue-600" /></div>
                                    <span className="text-sm text-slate-700">Demora aproximada: 2 a 4 meses.</span>
                                </li>
                            </ul>
                            <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                                Ver Requisitos Registro Civil
                            </Button>
                        </div>

                        {/* Con Testamento */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col">
                            <div className="bg-purple-100 text-purple-700 w-fit px-4 py-1 rounded-full text-sm font-bold mb-6">Caso B: Especial</div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Scroll className="h-6 w-6 text-purple-600" /> Con Testamento
                            </h3>
                            <p className="text-slate-600 mb-6 flex-grow">
                                Si el fallecido dejó testamento, el trámite cambia radicalmente y se vuelve judicial.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="bg-purple-50 p-1 rounded-full"><ChevronRight className="h-4 w-4 text-purple-600" /></div>
                                    <span className="text-sm text-slate-700">Se tramita ante <strong>Tribunales Civiles</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-purple-50 p-1 rounded-full"><ChevronRight className="h-4 w-4 text-purple-600" /></div>
                                    <span className="text-sm text-slate-700">Requiere obligatoriamente un <strong>Abogado</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-purple-50 p-1 rounded-full"><ChevronRight className="h-4 w-4 text-purple-600" /></div>
                                    <span className="text-sm text-slate-700">Es necesario pagar el impuesto a la herencia.</span>
                                </li>
                            </ul>
                            <Link href="/">
                                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                    Contactar Abogado Sucesorio
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-slate-100 rounded-xl p-8 border border-slate-200">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">¿Cuánto me toca recibir?</h3>
                                <p className="text-slate-600 mb-4">
                                    La ley chilena tiene reglas matemáticas precisas para repartir la herencia entre cónyuges, hijos y padres.
                                    No adivines, usa nuestra herramienta certificada.
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">Cálculo 100% Gratis</Badge>
                                    <Badge variant="secondary">Resultados Inmediatos</Badge>
                                    <Badge variant="secondary">Privado y Seguro</Badge>
                                </ul>
                            </div>
                            <Link href="/calculators/herencia">
                                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white h-16 w-full md:w-auto px-8 text-xl shadow-lg">
                                    <Calculator className="mr-3 h-6 w-6" /> Ir a la Calculadora
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-slate-900 border-t border-white/10">
                <div className="container max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10 text-white">Preguntas Frecuentes sobre Herencias</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="border-white/10 px-4 mb-4 bg-white/5 rounded-lg overflow-hidden">
                                <AccordionTrigger className="text-left text-white hover:text-purple-400 py-4 px-2 text-lg font-medium">
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

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LegalService", name: "LegalPO - Abogado Herencias Chile", description: "Especialistas en Posesión Efectiva, Testamentos y Partición de Herencias.", serviceType: "Derecho Sucesorio", areaServed: { "@type": "Country", name: "Chile" }, priceRange: "Honorarios según tabla colegio" }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        </div>
    )
}
