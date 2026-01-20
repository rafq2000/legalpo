import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Briefcase, Calculator, CheckCircle, Clock, Scale, FileText, MessageCircle, Shield, Gavel, Users, AlertTriangle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
    title: "Abogado Laboral Chile 2026 | Despido, Finiquito, Demandas | Consulta Gratis | LegalPO",
    description: "👔 ABOGADO LABORAL en Chile. Especialistas en despido injustificado, finiquito, demandas laborales, accidentes de trabajo. Calculadora gratis + Asesoría IA 24/7.",
    keywords: [
        "abogado laboral chile",
        "abogado derecho laboral",
        "despido injustificado",
        "demanda laboral chile",
        "finiquito abogado",
        "indemnizacion laboral",
        "derechos trabajador chile",
        "abogado accidentes laborales",
        "juicio laboral chile",
        "acoso laboral chile",
    ],
    openGraph: {
        title: "Abogado Laboral Chile | Despido y Finiquito | LegalPO",
        description: "Especialistas en derecho laboral. Calculadora de finiquito gratis y asesoría 24/7.",
        type: "website",
    },
}

const faqs = [
    { q: "¿Cuánto cobra un abogado laboral en Chile?", a: "Los honorarios varían entre 10-20% de lo recuperado en juicio. En LegalPO, la consulta inicial es 100% gratis con nuestra IA, y nuestra calculadora de finiquito es gratuita." },
    { q: "¿Cuánto tiempo tengo para demandar por despido?", a: "Tienes 60 días hábiles desde la fecha de despido para presentar demanda ante el Juzgado del Trabajo. Este plazo es fatal y no se puede extender." },
    { q: "¿Qué puedo reclamar en una demanda laboral?", a: "Puedes reclamar: finiquito no pagado, indemnización por años de servicio, recargo por despido injustificado (30-80%), vacaciones proporcionales, y cotizaciones impagas." },
    { q: "¿Necesito abogado para ir a juicio laboral?", a: "Para causas menores a 10 ingresos mínimos (~$5.390.000) puedes ir sin abogado. Para montos mayores, necesitas patrocinio. La Corporación de Asistencia Judicial ofrece abogados gratuitos." },
    { q: "¿Qué es el despido indirecto o autodespido?", a: "Es cuando el trabajador termina el contrato por incumplimientos graves del empleador (no pago de cotizaciones, acoso, etc.). Tiene derecho a indemnización con recargo." },
]

const servicios = [
    { icon: FileText, titulo: "Finiquito y Despido", desc: "Cálculo exacto de tu finiquito y asesoría en despidos" },
    { icon: Gavel, titulo: "Demandas Laborales", desc: "Representación en juicios por despido injustificado" },
    { icon: Shield, titulo: "Acoso Laboral", desc: "Defensa ante situaciones de hostigamiento en el trabajo" },
    { icon: AlertTriangle, titulo: "Accidentes Laborales", desc: "Indemnizaciones por accidentes y enfermedades profesionales" },
]

export default function AbogadoLaboralPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <section className="py-16 bg-gradient-to-b from-slate-800/50 to-transparent border-b border-white/5">
                <div className="container max-w-5xl mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
                        <Briefcase className="w-4 h-4 mr-2" />Especialista en Derecho Laboral
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                        Abogado Laboral Chile 2026
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        ¿Problemas en el trabajo? Despido injustificado, finiquito no pagado, acoso laboral. Consulta gratis con nuestro asesor IA y usa nuestra calculadora de finiquito.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Calculator className="h-6 w-6 text-blue-400 mx-auto mb-2" /><div className="text-xl font-bold">Gratis</div><div className="text-sm text-slate-400">Calculadora</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Clock className="h-6 w-6 text-green-400 mx-auto mb-2" /><div className="text-xl font-bold">24/7</div><div className="text-sm text-slate-400">Disponible</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Scale className="h-6 w-6 text-yellow-400 mx-auto mb-2" /><div className="text-xl font-bold">60 días</div><div className="text-sm text-slate-400">Plazo demanda</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><DollarSign className="h-6 w-6 text-emerald-400 mx-auto mb-2" /><div className="text-xl font-bold">+80%</div><div className="text-sm text-slate-400">Recargo máx.</div></CardContent></Card>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/calculators/finiquito"><Button size="lg" className="bg-blue-600 hover:bg-blue-700"><Calculator className="h-5 w-5 mr-2" />Calcular Mi Finiquito</Button></Link>
                        <Link href="/"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><MessageCircle className="h-5 w-5 mr-2" />Consultar Abogado IA</Button></Link>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8">Servicios de Derecho Laboral</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {servicios.map((s, i) => (
                            <Card key={i} className="bg-white/5 border-white/10"><CardContent className="p-6 flex items-start gap-4"><div className="p-3 bg-blue-500/20 rounded-xl"><s.icon className="h-6 w-6 text-blue-400" /></div><div><h3 className="font-semibold text-white mb-1">{s.titulo}</h3><p className="text-sm text-slate-400">{s.desc}</p></div></CardContent></Card>
                        ))}
                    </div>
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader><CardTitle className="text-xl text-white">Preguntas Frecuentes - Derecho Laboral</CardTitle></CardHeader>
                        <CardContent className="p-0">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`faq-${i}`} className="border-white/10 px-6">
                                        <AccordionTrigger className="text-left text-white hover:text-blue-400 py-4">{faq.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-300 pb-4">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                    <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Tienes un problema laboral?</h2>
                        <p className="text-slate-300 mb-6">Calcula tu finiquito gratis o consulta con nuestro abogado IA ahora.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/calculators/finiquito"><Button size="lg" className="bg-blue-600 hover:bg-blue-700"><Calculator className="h-5 w-5 mr-2" />Calcular Finiquito</Button></Link>
                            <Link href="/despido-injustificado"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">Ver Guía Despido</Button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LegalService", name: "LegalPO - Abogado Laboral Chile", description: "Especialistas en derecho laboral: despido, finiquito, demandas laborales.", serviceType: "Derecho Laboral", areaServed: { "@type": "Country", name: "Chile" }, priceRange: "Gratis" }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        </div>
    )
}
