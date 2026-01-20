import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { CreditCard, Calculator, CheckCircle, Clock, Scale, FileText, MessageCircle, Shield, Gavel, XCircle, AlertTriangle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
    title: "Abogado Deudas Chile 2026 | DICOM, Prescripción, Embargo | Consulta Gratis | LegalPO",
    description: "💳 ABOGADO DEUDAS en Chile. Especialistas en DICOM, prescripción de deudas, embargo, Ley de Quiebras personales, renegociación. Asesoría gratis 24/7.",
    keywords: [
        "abogado deudas chile",
        "salir de dicom",
        "prescripcion deudas chile",
        "embargo bienes chile",
        "ley quiebras personal",
        "renegociar deudas",
        "cobranza judicial",
        "abogado dicom chile",
        "bienes inembargables",
        "deudas prescritas chile",
    ],
    openGraph: {
        title: "Abogado Deudas Chile | DICOM y Prescripción | LegalPO",
        description: "Especialistas en deudas, DICOM, prescripción y embargos. Asesoría 24/7.",
        type: "website",
    },
}

const faqs = [
    { q: "¿Cuándo prescriben las deudas en Chile?", a: "La mayoría de deudas (bancarias, tarjetas, créditos) prescriben en 5 años. Cheques y pagarés en 1 año. Deudas tributarias en 3 años. El plazo se cuenta desde que la deuda se hizo exigible." },
    { q: "¿Cuándo me sacan de DICOM?", a: "Automáticamente después de 5 años sin pagar. Si pagas, el acreedor debe solicitar tu eliminación en máximo 7 días hábiles tras recibir el pago." },
    { q: "¿Qué bienes no pueden embargarme?", a: "Son inembargables: el lecho del deudor, ropa necesaria, herramientas de trabajo (hasta 2 UTM), alimentos para un mes, el sueldo mínimo completo, y el 50% del sueldo sobre el mínimo." },
    { q: "¿Qué es la Ley de Quiebras personales?", a: "La Ley 20.720 permite a personas naturales renegociar o liquidar deudas ordenadamente. Durante el proceso estás protegido de embargos y cobranzas." },
    { q: "¿Me pueden embargar el sueldo?", a: "Solo por orden judicial y con límites: máximo 50% del sueldo que exceda el mínimo. El sueldo mínimo ($539.000) está 100% protegido." },
]

const servicios = [
    { icon: XCircle, titulo: "Salir de DICOM", desc: "Asesoría para eliminar registros de morosidad" },
    { icon: Clock, titulo: "Prescripción de Deudas", desc: "Análisis y defensa por deudas prescritas" },
    { icon: Shield, titulo: "Defensa ante Embargos", desc: "Protección de bienes inembargables" },
    { icon: Scale, titulo: "Ley de Quiebras", desc: "Procedimiento concursal para personas naturales" },
]

export default function AbogadoDeudasPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <section className="py-16 bg-gradient-to-b from-slate-800/50 to-transparent border-b border-white/5">
                <div className="container max-w-5xl mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30">
                        <CreditCard className="w-4 h-4 mr-2" />Especialista en Deudas
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                        Abogado Deudas Chile 2026
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        DICOM, prescripción de deudas, embargos, Ley de Quiebras. Conoce tus derechos y opciones legales para manejar tus deudas. Consulta gratis 24/7.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Clock className="h-6 w-6 text-green-400 mx-auto mb-2" /><div className="text-xl font-bold">5 años</div><div className="text-sm text-slate-400">Prescripción</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Shield className="h-6 w-6 text-blue-400 mx-auto mb-2" /><div className="text-xl font-bold">50%</div><div className="text-sm text-slate-400">Máx. embargo</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><DollarSign className="h-6 w-6 text-emerald-400 mx-auto mb-2" /><div className="text-xl font-bold">$539k</div><div className="text-sm text-slate-400">Protegido</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><MessageCircle className="h-6 w-6 text-purple-400 mx-auto mb-2" /><div className="text-xl font-bold">24/7</div><div className="text-sm text-slate-400">Asesoría</div></CardContent></Card>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/"><Button size="lg" className="bg-amber-600 hover:bg-amber-700"><MessageCircle className="h-5 w-5 mr-2" />Consultar Abogado IA</Button></Link>
                        <Link href="/dicom-chile"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><FileText className="h-5 w-5 mr-2" />Guía Salir de DICOM</Button></Link>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8">Servicios de Derecho de Deudas</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {servicios.map((s, i) => (
                            <Card key={i} className="bg-white/5 border-white/10"><CardContent className="p-6 flex items-start gap-4"><div className="p-3 bg-amber-500/20 rounded-xl"><s.icon className="h-6 w-6 text-amber-400" /></div><div><h3 className="font-semibold text-white mb-1">{s.titulo}</h3><p className="text-sm text-slate-400">{s.desc}</p></div></CardContent></Card>
                        ))}
                    </div>
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader><CardTitle className="text-xl text-white">Preguntas Frecuentes - Deudas</CardTitle></CardHeader>
                        <CardContent className="p-0">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`faq-${i}`} className="border-white/10 px-6">
                                        <AccordionTrigger className="text-left text-white hover:text-amber-400 py-4">{faq.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-300 pb-4">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                    <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Tienes problemas de deudas?</h2>
                        <p className="text-slate-300 mb-6">Consulta sobre DICOM, prescripción, embargos y tus opciones legales.</p>
                        <Link href="/"><Button size="lg" className="bg-amber-600 hover:bg-amber-700"><MessageCircle className="h-5 w-5 mr-2" />Consultar Ahora</Button></Link>
                    </div>
                </div>
            </section>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LegalService", name: "LegalPO - Abogado Deudas Chile", description: "Especialistas en deudas: DICOM, prescripción, embargos, Ley de Quiebras.", serviceType: "Derecho de Deudas", areaServed: { "@type": "Country", name: "Chile" }, priceRange: "Gratis" }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        </div>
    )
}
