import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Scroll, Calculator, CheckCircle, Clock, Scale, FileText, MessageCircle, Shield, Gavel, Users, Landmark } from "lucide-react"

export const metadata: Metadata = {
    title: "Abogado Herencias Chile 2026 | Posesión Efectiva, Testamentos | Consulta Gratis | LegalPO",
    description: "📜 ABOGADO HERENCIAS en Chile. Especialistas en posesión efectiva, testamentos, partición de herencia, herederos legales. Calculadora gratis + Asesoría 24/7.",
    keywords: [
        "abogado herencias chile",
        "posesion efectiva chile",
        "testamento chile",
        "particion herencia",
        "herederos legales chile",
        "impuesto herencia chile",
        "sucesion intestada",
        "abogado sucesiones",
        "juicio particion",
        "herencia sin testamento",
    ],
    openGraph: {
        title: "Abogado Herencias Chile | Posesión Efectiva | LegalPO",
        description: "Especialistas en herencias, testamentos y posesión efectiva. Calculadora y asesoría gratis.",
        type: "website",
    },
}

const faqs = [
    { q: "¿Qué es la posesión efectiva?", a: "Es el trámite legal que reconoce a los herederos como dueños de los bienes del fallecido. Se hace en el Registro Civil (sin testamento) o en tribunales (con testamento)." },
    { q: "¿Cuánto demora la posesión efectiva?", a: "Sin testamento en el Registro Civil: 2-4 semanas. Con testamento en tribunales: 2-6 meses. Es más rápido si hay acuerdo entre herederos." },
    { q: "¿Quiénes son los herederos legales?", a: "En orden: 1) Hijos y cónyuge, 2) Padres/ascendientes y cónyuge, 3) Hermanos, 4) Otros colaterales, 5) Fisco. El cónyuge siempre hereda." },
    { q: "¿Se paga impuesto por herencia?", a: "Sí, existe el Impuesto a las Herencias. Se paga por el monto que exceda las exenciones (aprox. 50-100 UTA según parentesco). Tasas del 1% al 25%." },
    { q: "¿Qué pasa si hay conflicto entre herederos?", a: "Se debe hacer un juicio de partición ante tribunales. Un partidor (generalmente abogado) divide los bienes. Puede tomar 1-3 años." },
]

const servicios = [
    { icon: FileText, titulo: "Posesión Efectiva", desc: "Trámite completo en Registro Civil o Tribunales" },
    { icon: Scroll, titulo: "Testamentos", desc: "Redacción, interpretación y ejecución de testamentos" },
    { icon: Scale, titulo: "Partición de Herencia", desc: "División judicial o extrajudicial de bienes" },
    { icon: Landmark, titulo: "Impuesto Herencias", desc: "Cálculo y planificación tributaria sucesoria" },
]

export default function AbogadoHerenciasPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <section className="py-16 bg-gradient-to-b from-slate-800/50 to-transparent border-b border-white/5">
                <div className="container max-w-5xl mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
                        <Scroll className="w-4 h-4 mr-2" />Especialista en Herencias
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                        Abogado Herencias Chile 2026
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Posesión efectiva, testamentos, partición de herencia, herederos legales. Calcula tu herencia y consulta gratis con nuestra IA 24/7.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Calculator className="h-6 w-6 text-purple-400 mx-auto mb-2" /><div className="text-xl font-bold">Gratis</div><div className="text-sm text-slate-400">Calculadora</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Clock className="h-6 w-6 text-green-400 mx-auto mb-2" /><div className="text-xl font-bold">2-4 sem</div><div className="text-sm text-slate-400">Posesión RC</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Users className="h-6 w-6 text-blue-400 mx-auto mb-2" /><div className="text-xl font-bold">50%</div><div className="text-sm text-slate-400">Cónyuge mín.</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><MessageCircle className="h-6 w-6 text-emerald-400 mx-auto mb-2" /><div className="text-xl font-bold">24/7</div><div className="text-sm text-slate-400">Asesoría</div></CardContent></Card>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/calculators/herencia"><Button size="lg" className="bg-purple-600 hover:bg-purple-700"><Calculator className="h-5 w-5 mr-2" />Calcular Herencia</Button></Link>
                        <Link href="/"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><MessageCircle className="h-5 w-5 mr-2" />Consultar Abogado IA</Button></Link>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8">Servicios de Derecho Sucesorio</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {servicios.map((s, i) => (
                            <Card key={i} className="bg-white/5 border-white/10"><CardContent className="p-6 flex items-start gap-4"><div className="p-3 bg-purple-500/20 rounded-xl"><s.icon className="h-6 w-6 text-purple-400" /></div><div><h3 className="font-semibold text-white mb-1">{s.titulo}</h3><p className="text-sm text-slate-400">{s.desc}</p></div></CardContent></Card>
                        ))}
                    </div>
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader><CardTitle className="text-xl text-white">Preguntas Frecuentes - Herencias</CardTitle></CardHeader>
                        <CardContent className="p-0">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`faq-${i}`} className="border-white/10 px-6">
                                        <AccordionTrigger className="text-left text-white hover:text-purple-400 py-4">{faq.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-300 pb-4">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                    <div className="bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Necesitas orientación sobre herencias?</h2>
                        <p className="text-slate-300 mb-6">Calcula la herencia o consulta sobre posesión efectiva y testamentos.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/calculators/herencia"><Button size="lg" className="bg-purple-600 hover:bg-purple-700"><Calculator className="h-5 w-5 mr-2" />Calcular Herencia</Button></Link>
                            <Link href="/"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">Consultar Ahora</Button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LegalService", name: "LegalPO - Abogado Herencias Chile", description: "Especialistas en herencias: posesión efectiva, testamentos, partición.", serviceType: "Derecho Sucesorio", areaServed: { "@type": "Country", name: "Chile" }, priceRange: "Gratis" }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        </div>
    )
}
