import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
    Heart, Calculator, Clock, Scale, Users, Shield,
    Baby, Home, AlertCircle, FileCheck, Phone, HeartHandshake,
    CheckCircle2, XCircle
} from "lucide-react"

export const metadata: Metadata = {
    title: "Abogado de Familia Chile 2026 | Divorcio, Pensión, Tuición | Consulta Gratis",
    description: "🏆 ABOGADO DE FAMILIA EXPERTO. Guía completa 2026: Divorcio Express, Pensión de Alimentos (Registro Deudores), Tuición y VIF. Primera consulta con IA Gratis.",
    keywords: [
        "abogado familia chile",
        "divorcio mutuo acuerdo",
        "divorcio unilateral",
        "pension alimentos 2026",
        "registro nacional deudores",
        "tuicion compartida",
        "cuidado personal",
        "medidas de proteccion VIF",
        "abogado divorcio santiago",
        "asesoria legal familia",
    ],
    openGraph: {
        title: "Abogado de Familia Chile | Expertos en Divorcio y Niñez",
        description: "Asesoría legal experta en Derecho de Familia. Resolvemos tus dudas sobre divorcio y pensión.",
        type: "website",
        url: "https://www.legalpo.cl/abogado-familia",
    },
}

const faqs = [
    { q: "¿Qué necesito para divorciarme?", a: "Principalmente acreditar el 'Cese de Convivencia'. Si es de mutuo acuerdo, necesitas 1 año de cese. Si es unilateral (uno quiere y el otro no), necesitas 3 años de cese. También existe el divorcio culposo (sin plazo) por faltas graves como infidelidad o violencia." },
    { q: "¿Cuánto es la pensión mínima en 2026?", a: "Se calcula base al sueldo mínimo. Para un hijo es el 40% del ingreso mínimo. Si tienes dos o más hijos, es el 30% por cada uno. Sin embargo, el juez siempre evaluará la capacidad económica real de las partes." },
    { q: "¿Qué pasa si no me pagan la pensión?", a: "Se activa el Registro Nacional de Deudores. Puedes solicitar: arraigo nacional (no puede salir del país), retención de devolución de impuestos, suspensión de licencia de conducir y retención de fondos bancarios." },
    { q: "¿Cómo obtengo la tuición (Cuidado Personal)?", a: "La ley prioriza el acuerdo de los padres (Cuidado Compartido). Si no hay acuerdo, el juez decide basándose en quien ha sido la figura principal de apego, el entorno, y la opinión del niño (Derecho a ser Oído)." },
    { q: "¿Qué hago ante Violencia Intrafamiliar (VIF)?", a: "Debes denunciar inmediatamente en Carabineros, PDI o Fiscalía. Puedes solicitar medidas cautelares urgentes como la salida del agresor del hogar común y prohibición de acercamiento, antes incluso de iniciar el juicio." },
    { q: "¿Cuánto cobra un abogado de familia?", a: "Varía según la complejidad. Un divorcio mutuo acuerdo es más económico ($300k-$600k). Juicios complejos de tuición o alimentos pueden costar más. En LegalPO ofrecemos facilidades y orientación inicial gratuita." },
]

export default function AbogadoFamiliaPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 to-slate-900 z-0" />
                <div className="container relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
                    <Badge className="mb-6 bg-rose-600 text-white border-none px-4 py-1 text-base">
                        Actualizado 2026
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Abogado de Familia <span className="text-rose-400">Especialista</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Protegemos lo más importante: <strong>Tu Familia y tus Hijos</strong>.
                        Asesoría experta en Divorcios, Pensiones y Tuiciones con estrategia humana y legal.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link href="/calculators/pension-alimentos">
                            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-lg py-6 px-8 w-full sm:w-auto shadow-rose-900/20 shadow-xl">
                                <Calculator className="h-6 w-6 mr-3" />
                                Calcular Pensión
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg py-6 px-8 w-full sm:w-auto">
                                <Shield className="h-6 w-6 mr-3" />
                                Hablar con Abogado IA
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <Heart className="h-8 w-8 text-rose-400 mx-auto mb-2" />
                            <div className="font-bold text-lg">Divorcio</div>
                            <div className="text-sm text-slate-400">Express y Unilateral</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <Baby className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                            <div className="font-bold text-lg">Alimentos</div>
                            <div className="text-sm text-slate-400">Registro Deudores</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <Home className="h-8 w-8 text-green-400 mx-auto mb-2" />
                            <div className="font-bold text-lg">Tuición</div>
                            <div className="text-sm text-slate-400">Cuidado Personal</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <AlertCircle className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                            <div className="font-bold text-lg">VIF</div>
                            <div className="text-sm text-slate-400">Medidas Cautelares</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive Content - Skyscraper Strategy */}
            <section className="py-16">
                <div className="container max-w-4xl mx-auto px-4 space-y-20">

                    {/* Divorcio Analysis */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-rose-100 rounded-lg">
                                <HeartHandshake className="h-8 w-8 text-rose-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">Guía Definitiva de Divorcio en Chile</h2>
                        </div>
                        <p className="text-lg text-slate-600 mb-8">
                            No todos los divorcios son iguales. Elegir el camino correcto te ahorrará meses de estrés y millones de pesos.
                        </p>

                        <Tabs defaultValue="mutuo" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-100 p-1 rounded-xl">
                                <TabsTrigger value="mutuo" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Mutuo Acuerdo</TabsTrigger>
                                <TabsTrigger value="unilateral" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Unilateral</TabsTrigger>
                                <TabsTrigger value="culposo" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Culposo</TabsTrigger>
                            </TabsList>

                            <TabsContent value="mutuo" className="space-y-4 animate-in fade-in-50">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-rose-700">Divorcio de Mutuo Acuerdo</CardTitle>
                                        <CardDescription>La opción más rápida, económica y sana emocionalmente.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2"><Clock className="h-4 w-4" /> Requisitos</h4>
                                                <ul className="text-sm space-y-2 text-green-700">
                                                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" /> 1 año de Cese de Convivencia acreditado.</li>
                                                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" /> Acuerdo completo regulatorio (hijos y bienes).</li>
                                                </ul>
                                            </div>
                                            <div className="bg-slate-50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2"><Scale className="h-4 w-4" /> Ventajas</h4>
                                                <ul className="text-sm space-y-2 text-slate-600">
                                                    <li>• Tramitación rápida (2 a 4 meses).</li>
                                                    <li>• Menor costo legal (compartido).</li>
                                                    <li>• No requiere "demandar" a tu pareja.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="unilateral" className="space-y-4 animate-in fade-in-50">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-blue-700">Divorcio Unilateral</CardTitle>
                                        <CardDescription>Cuando uno quiere divorciarse y el otro no (o no aparece).</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                                            <p className="text-amber-800 text-sm font-medium">Requisito Clave: Debes probar 3 años de cese de convivencia efectivo, sin reanudación de la vida en común.</p>
                                        </div>
                                        <p className="text-slate-600 text-sm">
                                            Es un juicio donde tú demandas a tu cónyuge. El juez verificará que el cese sea real y que estés al día con tus obligaciones de alimentos (cláusula de dureza). Si debes pensión, no te puedes divorciar.
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="culposo" className="space-y-4 animate-in fade-in-50">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-red-700">Divorcio Culposo</CardTitle>
                                        <CardDescription>Por faltas graves a las obligaciones del matrimonio.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-slate-600 text-sm">
                                            No requiere esperar plazos (ni 1 ni 3 años), pero exige probar ante el tribunal hechos graves como:
                                        </p>
                                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-700 font-medium">
                                            <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-500" /> Violencia Intrafamiliar</li>
                                            <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-500" /> Infidelidad grave</li>
                                            <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-500" /> Abandono del hogar</li>
                                            <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-500" /> Alcoholismo/Drogadicción</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Alimentos Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-100 rounded-lg">
                                    <Baby className="h-8 w-8 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">Pensión de Alimentos</h2>
                            </div>
                            <p className="text-slate-600 mb-6">
                                Garantizar el bienestar de los hijos no es un favor, es un derecho humano. La nueva ley es estricta con los deudores.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900">Monto Mínimo 2026:</span>
                                        <p className="text-sm text-slate-600">40% de un ingreso mínimo ($215.600 aprox) por un hijo.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900">Gastos Extraordinarios:</span>
                                        <p className="text-sm text-slate-600">Salud, educación, uniformes se pagan aparte (usualmente 50/50).</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900">Hasta los 28 años:</span>
                                        <p className="text-sm text-slate-600">Si el hijo/a se encuentra estudiando una profesión u oficio.</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Link href="/calculators/pension-alimentos">
                                    <Button className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">
                                        <Calculator className="h-4 w-4 mr-2" />
                                        Usar Calculadora de Alimentos
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <Card className="bg-red-50 border-red-200 shadow-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-red-800">
                                    <AlertCircle className="h-5 w-5" /> Registro Nacional de Deudores
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-sm text-red-700">
                                    Si debes 3 meses continuos o 5 discontinuos, entras al "Dicom de los Alimentos". Consecuencias:
                                </p>
                                <div className="space-y-2">
                                    {[
                                        "No puedes renovar Licencia de Conducir",
                                        "No puedes sacar Pasaporte",
                                        "Retención de devolución de impuestos",
                                        "Retención de créditos bancarios (+50 UF)",
                                        "Imposibilidad de vender vehículos o inmuebles"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-white/60 p-2 rounded text-sm text-slate-700">
                                            <BanIcon className="h-4 w-4 text-red-500" /> {item}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* VIF Section */}
                    <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                        <div className="flex items-center gap-4 mb-6">
                            <Shield className="h-10 w-10 text-amber-600" />
                            <div>
                                <h3 className="text-2xl font-bold text-amber-900">Violencia Intrafamiliar (VIF)</h3>
                                <p className="text-amber-700">No estás sola/o. La ley te protege de inmediato.</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4 text-slate-700 text-sm">
                                <p>
                                    La VIF no es solo golpes físicos. Incluye violencia <strong>psicológica</strong> (insultos, menosprecio, control), <strong>económica</strong> (negar dinero para alimentos) y <strong>sexual</strong>.
                                </p>
                                <p className="font-semibold">
                                    ¿Qué puede hacer el tribunal por ti HOY mismo?
                                </p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Decretar la salida inmediata del agresor del hogar.</li>
                                    <li>Prohibirle acercarse a ti, a tu hogar y lugar de trabajo.</li>
                                    <li>Entregar el Cuidado Personal provisorio de los niños.</li>
                                    <li>Fijar alimentos provisorios.</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-200">
                                <h4 className="font-bold text-slate-900 mb-4">Teléfonos de Emergencia</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <span className="font-medium text-slate-700">Carabineros</span>
                                        <Badge variant="outline" className="text-lg font-bold border-green-600 text-green-700">133</Badge>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <span className="font-medium text-slate-700">PDI</span>
                                        <Badge variant="outline" className="text-lg font-bold border-blue-600 text-blue-700">134</Badge>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <span className="font-medium text-slate-700">Fono Orientación (M. Mujer)</span>
                                        <Badge variant="outline" className="text-lg font-bold border-rose-600 text-rose-700">1455</Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes Abogado Familia</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`faq-${i}`} className="bg-white shadow-sm border rounded-lg mb-2 px-4">
                                    <AccordionTrigger className="text-left font-medium text-slate-800 hover:text-rose-600 py-4 text-base">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 pb-4 text-base leading-relaxed">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* CTA Bottom */}
                    <div className="text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white shadow-2xl">
                        <h2 className="text-3xl font-bold mb-4">¿Tu caso es complejo? Lo hacemos simple.</h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Deja de buscar en Google y obtén respuestas concretas sobre tu situación familiar ahora mismo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/">
                                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold">
                                    <MessageCircle className="h-5 w-5 mr-2" />
                                    Consultar con Abogado IA
                                </Button>
                            </Link>
                            <Link href="/calculators/pension-alimentos">
                                <Button size="lg" className="bg-rose-600 text-white hover:bg-rose-700 font-bold">
                                    <Calculator className="h-5 w-5 mr-2" />
                                    Calcular Pensión
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LegalService",
                    "name": "LegalPO - Abogados de Familia Expertos",
                    "url": "https://www.legalpo.cl/abogado-familia",
                    "image": "https://www.legalpo.cl/og-familia.jpg",
                    "description": "Especialistas en divorcios, pensiones de alimentos 2026 y tuición. Consulta inicial gratuita.",
                    "serviceType": "Derecho de Familia",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "CL",
                        "addressRegion": "Región Metropolitana"
                    },
                    "priceRange": "Consulta Gratis",
                    "telephone": "+56912345678"
                })
            }} />
        </div>
    )
}

function BanIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="m4.9 4.9 14.2 14.2" /></svg>
    )
}

function MessageCircle({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" /></svg>
    )
}
