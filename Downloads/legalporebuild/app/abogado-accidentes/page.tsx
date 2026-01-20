import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Car, Calculator, CheckCircle, Clock, Scale, FileText, MessageCircle, Shield, Gavel, AlertTriangle, DollarSign, Heart } from "lucide-react"

export const metadata: Metadata = {
    title: "Abogado Accidentes Chile 2026 | Indemnización, Tránsito | Consulta Gratis | LegalPO",
    description: "🚗 ABOGADO ACCIDENTES en Chile. Especialistas en accidentes de tránsito, indemnizaciones, atropellos, choques. Asesoría gratis 24/7.",
    keywords: [
        "abogado accidentes transito chile",
        "indemnizacion accidente",
        "demanda por accidente",
        "atropello chile",
        "abogado choques",
        "seguro accidente",
        "lesiones accidente transito",
        "daño moral accidente",
        "abogado indemnizacion chile",
        "accidente de trabajo abogado",
    ],
    openGraph: {
        title: "Abogado Accidentes Chile | Indemnización Tránsito | LegalPO",
        description: "Especialistas en accidentes e indemnizaciones. Asesoría 24/7.",
        type: "website",
    },
}

const faqs = [
    { q: "¿Cuánto puedo recibir de indemnización por accidente?", a: "Depende del daño: lesiones leves $500k-$5M, lesiones graves $5M-$50M, incapacidad permanente $50M-$200M, muerte de familiar $30M-$150M. Incluye daño emergente, lucro cesante y daño moral." },
    { q: "¿Cuánto tiempo tengo para demandar por accidente?", a: "4 años desde la fecha del accidente para demandas civiles (indemnización). 6 meses para querellarse penalmente. Es importante actuar rápido para conservar pruebas." },
    { q: "¿Qué necesito para demandar por accidente?", a: "Parte policial, constancia de Carabineros, informes médicos, boletas de gastos, testigos, fotos del accidente, licencia y documentos del vehículo." },
    { q: "¿El seguro cubre todo el daño?", a: "El SOAP cubre hasta $300 UF (~$11M) solo para lesiones personales. El seguro automotriz puede cubrir daños materiales. Para montos mayores, hay que demandar al responsable." },
    { q: "¿Qué es el daño moral?", a: "Es la indemnización por sufrimiento psicológico, dolor, angustia, pérdida de calidad de vida. El juez lo determina según la gravedad del caso." },
]

const servicios = [
    { icon: Car, titulo: "Accidentes de Tránsito", desc: "Choques, atropellos, volcamientos en la vía pública" },
    { icon: DollarSign, titulo: "Indemnizaciones", desc: "Daño emergente, lucro cesante y daño moral" },
    { icon: Shield, titulo: "Seguros", desc: "Cobro de SOAP y seguros automotrices" },
    { icon: Heart, titulo: "Accidentes Laborales", desc: "Lesiones y enfermedades profesionales" },
]

export default function AbogadoAccidentesPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <section className="py-16 bg-gradient-to-b from-slate-800/50 to-transparent border-b border-white/5">
                <div className="container max-w-5xl mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-red-500/20 text-red-300 border-red-500/30">
                        <Car className="w-4 h-4 mr-2" />Especialista en Accidentes
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                        Abogado Accidentes Chile 2026
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Accidentes de tránsito, atropellos, indemnizaciones, daño moral. Consulta gratis con nuestro asesor IA 24/7 y conoce tus derechos.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><DollarSign className="h-6 w-6 text-green-400 mx-auto mb-2" /><div className="text-xl font-bold">$50M+</div><div className="text-sm text-slate-400">Indemniz. graves</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Clock className="h-6 w-6 text-yellow-400 mx-auto mb-2" /><div className="text-xl font-bold">4 años</div><div className="text-sm text-slate-400">Plazo demanda</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Shield className="h-6 w-6 text-blue-400 mx-auto mb-2" /><div className="text-xl font-bold">300 UF</div><div className="text-sm text-slate-400">SOAP máximo</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><MessageCircle className="h-6 w-6 text-purple-400 mx-auto mb-2" /><div className="text-xl font-bold">24/7</div><div className="text-sm text-slate-400">Asesoría</div></CardContent></Card>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/"><Button size="lg" className="bg-red-600 hover:bg-red-700"><MessageCircle className="h-5 w-5 mr-2" />Consultar Abogado IA</Button></Link>
                        <Link href="/accidentes-transito"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><FileText className="h-5 w-5 mr-2" />Ver Guía Accidentes</Button></Link>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8">Servicios de Accidentes</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {servicios.map((s, i) => (
                            <Card key={i} className="bg-white/5 border-white/10"><CardContent className="p-6 flex items-start gap-4"><div className="p-3 bg-red-500/20 rounded-xl"><s.icon className="h-6 w-6 text-red-400" /></div><div><h3 className="font-semibold text-white mb-1">{s.titulo}</h3><p className="text-sm text-slate-400">{s.desc}</p></div></CardContent></Card>
                        ))}
                    </div>
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader><CardTitle className="text-xl text-white">Preguntas Frecuentes - Accidentes</CardTitle></CardHeader>
                        <CardContent className="p-0">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`faq-${i}`} className="border-white/10 px-6">
                                        <AccordionTrigger className="text-left text-white hover:text-red-400 py-4">{faq.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-300 pb-4">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                    <div className="bg-gradient-to-r from-red-600/20 to-rose-600/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Sufriste un accidente?</h2>
                        <p className="text-slate-300 mb-6">Consulta gratis sobre tus derechos a indemnización y cómo proceder.</p>
                        <Link href="/"><Button size="lg" className="bg-red-600 hover:bg-red-700"><MessageCircle className="h-5 w-5 mr-2" />Consultar Ahora</Button></Link>
                    </div>
                </div>
            </section>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LegalService", name: "LegalPO - Abogado Accidentes Chile", description: "Especialistas en accidentes: tránsito, indemnizaciones, lesiones.", serviceType: "Derecho de Accidentes", areaServed: { "@type": "Country", name: "Chile" }, priceRange: "Gratis" }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        </div>
    )
}
