import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Heart, Calculator, CheckCircle, Clock, Scale, FileText, MessageCircle, Shield, Gavel, Users, Baby, Home } from "lucide-react"

export const metadata: Metadata = {
    title: "Abogado de Familia Chile 2026 | Divorcio, Pensión, Tuición | Consulta Gratis | LegalPO",
    description: "👨‍👩‍👧 ABOGADO DE FAMILIA en Chile. Especialistas en divorcio, pensión alimenticia, tuición, régimen de visitas, violencia intrafamiliar. Calculadora gratis + Asesoría 24/7.",
    keywords: [
        "abogado familia chile",
        "abogado derecho familia",
        "divorcio chile",
        "pension alimentos",
        "tuicion hijos chile",
        "regimen visitas",
        "violencia intrafamiliar",
        "custodia compartida chile",
        "compensacion economica divorcio",
        "abogado divorcio chile",
    ],
    openGraph: {
        title: "Abogado de Familia Chile | Divorcio y Pensión | LegalPO",
        description: "Especialistas en derecho de familia. Calculadora de pensión gratis y asesoría 24/7.",
        type: "website",
    },
}

const faqs = [
    { q: "¿Cuánto cuesta un divorcio en Chile?", a: "Un divorcio de común acuerdo puede costar entre $300.000 y $800.000. Un divorcio unilateral es más costoso, entre $800.000 y $2.000.000. En LegalPO la consulta inicial es gratis." },
    { q: "¿Cuánto demora un divorcio en Chile?", a: "Divorcio de común acuerdo: 2-4 meses. Divorcio unilateral por cese de convivencia: requiere 1-3 años de separación previa, luego 4-8 meses de trámite judicial." },
    { q: "¿Cuál es la pensión mínima de alimentos?", a: "Con el sueldo mínimo de $539.000 (2026), la pensión mínima es $215.600 para un hijo (40%) o $161.700 por hijo si hay dos o más (30% cada uno)." },
    { q: "¿Hasta qué edad se paga pensión de alimentos?", a: "Hasta los 21 años, o hasta los 28 si el hijo estudia una profesión u oficio. Puede ser indefinida si tiene discapacidad que le impida mantenerse." },
    { q: "¿Qué es la tuición o cuidado personal?", a: "Es el derecho que tiene uno de los padres de tener al hijo viviendo con él y tomar las decisiones del día a día sobre su crianza, educación y salud." },
]

const servicios = [
    { icon: Heart, titulo: "Divorcio", desc: "Divorcio de común acuerdo o unilateral, compensación económica" },
    { icon: Baby, titulo: "Pensión Alimenticia", desc: "Demandas, aumento, reducción y cobro de pensiones" },
    { icon: Users, titulo: "Tuición e Hijos", desc: "Cuidado personal, régimen de visitas, relación directa" },
    { icon: Shield, titulo: "Violencia Intrafamiliar", desc: "Medidas de protección y causas VIF" },
]

export default function AbogadoFamiliaPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <section className="py-16 bg-gradient-to-b from-slate-800/50 to-transparent border-b border-white/5">
                <div className="container max-w-5xl mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-rose-500/20 text-rose-300 border-rose-500/30">
                        <Heart className="w-4 h-4 mr-2" />Especialista en Derecho de Familia
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                        Abogado de Familia Chile 2026
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Divorcio, pensión alimenticia, tuición de hijos, violencia intrafamiliar. Consulta gratis con nuestra IA y calcula la pensión con nuestra calculadora.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Calculator className="h-6 w-6 text-rose-400 mx-auto mb-2" /><div className="text-xl font-bold">$215.600</div><div className="text-sm text-slate-400">Pensión mín.</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Clock className="h-6 w-6 text-green-400 mx-auto mb-2" /><div className="text-xl font-bold">24/7</div><div className="text-sm text-slate-400">Disponible</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Scale className="h-6 w-6 text-yellow-400 mx-auto mb-2" /><div className="text-xl font-bold">50%</div><div className="text-sm text-slate-400">Tope pensión</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Users className="h-6 w-6 text-blue-400 mx-auto mb-2" /><div className="text-xl font-bold">21-28</div><div className="text-sm text-slate-400">Edad límite</div></CardContent></Card>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/calculators/pension-alimentos"><Button size="lg" className="bg-rose-600 hover:bg-rose-700"><Calculator className="h-5 w-5 mr-2" />Calcular Pensión</Button></Link>
                        <Link href="/"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><MessageCircle className="h-5 w-5 mr-2" />Consultar Abogado IA</Button></Link>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8">Servicios de Derecho de Familia</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {servicios.map((s, i) => (
                            <Card key={i} className="bg-white/5 border-white/10"><CardContent className="p-6 flex items-start gap-4"><div className="p-3 bg-rose-500/20 rounded-xl"><s.icon className="h-6 w-6 text-rose-400" /></div><div><h3 className="font-semibold text-white mb-1">{s.titulo}</h3><p className="text-sm text-slate-400">{s.desc}</p></div></CardContent></Card>
                        ))}
                    </div>
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader><CardTitle className="text-xl text-white">Preguntas Frecuentes - Derecho de Familia</CardTitle></CardHeader>
                        <CardContent className="p-0">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`faq-${i}`} className="border-white/10 px-6">
                                        <AccordionTrigger className="text-left text-white hover:text-rose-400 py-4">{faq.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-300 pb-4">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                    <div className="bg-gradient-to-r from-rose-600/20 to-pink-600/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Necesitas orientación familiar?</h2>
                        <p className="text-slate-300 mb-6">Calcula la pensión de alimentos o consulta con nuestro abogado IA.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/calculators/pension-alimentos"><Button size="lg" className="bg-rose-600 hover:bg-rose-700"><Calculator className="h-5 w-5 mr-2" />Calcular Pensión</Button></Link>
                            <Link href="/pension-alimentos-2026"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">Ver Guía Pensión 2026</Button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LegalService", name: "LegalPO - Abogado de Familia Chile", description: "Especialistas en derecho de familia: divorcio, pensión, tuición.", serviceType: "Derecho de Familia", areaServed: { "@type": "Country", name: "Chile" }, priceRange: "Gratis" }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        </div>
    )
}
