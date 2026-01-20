import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Home, Calculator, CheckCircle, Clock, Scale, FileText, MessageCircle, Shield, Gavel, Users, Key, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
    title: "Abogado Arriendos Chile 2026 | Ley Devuélveme Mi Casa | Desalojo | LegalPO",
    description: "🏠 ABOGADO ARRIENDOS en Chile. Especialistas en Ley Devuélveme Mi Casa, desalojos, contratos de arriendo, derechos arrendatario. Asesoría gratis 24/7.",
    keywords: [
        "abogado arriendos chile",
        "ley devuelveme mi casa",
        "desalojo arrendatario",
        "contrato arriendo chile",
        "demanda arriendo",
        "derechos arrendatario chile",
        "derechos arrendador",
        "incumplimiento arriendo",
        "termino contrato arriendo",
        "abogado propiedades chile",
    ],
    openGraph: {
        title: "Abogado Arriendos Chile | Ley Devuélveme Mi Casa | LegalPO",
        description: "Especialistas en arriendos, desalojos y contratos. Asesoría 24/7.",
        type: "website",
    },
}

const faqs = [
    { q: "¿Qué es la Ley Devuélveme Mi Casa?", a: "Es la Ley 21.461 que agiliza el proceso de desalojo. Si el arrendatario no paga 2 meses de renta, el arrendador puede solicitar lanzamiento en un proceso más rápido (semanas vs meses)." },
    { q: "¿Cuánto demora un desalojo en Chile?", a: "Con la Ley Devuélveme Mi Casa: 4-8 semanas. Con el procedimiento antiguo: 6-12 meses o más. Es clave tener contrato escrito y en regla." },
    { q: "¿Puedo echar a un arrendatario si no paga?", a: "Sí. Con 2 meses de mora puedes iniciar el proceso de desalojo. Si tienes contrato por escritura pública o firmado ante notario, el proceso es más rápido." },
    { q: "¿Qué derechos tiene el arrendatario?", a: "A recibir el inmueble en buen estado, a que se le devuelva la garantía si cumple, a reparaciones estructurales, y a no ser desalojado sin orden judicial." },
    { q: "¿Cuánto es la garantía de arriendo?", a: "Habitualmente 1-2 meses de renta. La ley no fija un máximo, pero es lo habitual en el mercado chileno." },
]

const servicios = [
    { icon: Key, titulo: "Desalojos", desc: "Proceso de desalojo con Ley Devuélveme Mi Casa" },
    { icon: FileText, titulo: "Contratos", desc: "Redacción y revisión de contratos de arriendo" },
    { icon: Shield, titulo: "Defensa Arrendatarios", desc: "Protección de derechos del inquilino" },
    { icon: Gavel, titulo: "Demandas", desc: "Cobro de rentas impagas y daños al inmueble" },
]

export default function AbogadoArriendosPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <section className="py-16 bg-gradient-to-b from-slate-800/50 to-transparent border-b border-white/5">
                <div className="container max-w-5xl mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
                        <Home className="w-4 h-4 mr-2" />Especialista en Arriendos
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                        Abogado Arriendos Chile 2026
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Ley Devuélveme Mi Casa, desalojos, contratos de arriendo, conflictos entre arrendador y arrendatario. Consulta gratis con nuestro asesor IA 24/7.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Gavel className="h-6 w-6 text-orange-400 mx-auto mb-2" /><div className="text-xl font-bold">Ley 21.461</div><div className="text-sm text-slate-400">Devuélveme Mi Casa</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><Clock className="h-6 w-6 text-green-400 mx-auto mb-2" /><div className="text-xl font-bold">4-8 sem</div><div className="text-sm text-slate-400">Desalojo rápido</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><AlertTriangle className="h-6 w-6 text-red-400 mx-auto mb-2" /><div className="text-xl font-bold">2 meses</div><div className="text-sm text-slate-400">Mora para desalojo</div></CardContent></Card>
                        <Card className="bg-white/5 border-white/10"><CardContent className="p-4 text-center"><MessageCircle className="h-6 w-6 text-blue-400 mx-auto mb-2" /><div className="text-xl font-bold">24/7</div><div className="text-sm text-slate-400">Asesoría gratis</div></CardContent></Card>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/"><Button size="lg" className="bg-orange-600 hover:bg-orange-700"><MessageCircle className="h-5 w-5 mr-2" />Consultar Abogado IA</Button></Link>
                        <Link href="/tools/contract-generator"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><FileText className="h-5 w-5 mr-2" />Generar Contrato</Button></Link>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8">Servicios de Derecho de Arriendos</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {servicios.map((s, i) => (
                            <Card key={i} className="bg-white/5 border-white/10"><CardContent className="p-6 flex items-start gap-4"><div className="p-3 bg-orange-500/20 rounded-xl"><s.icon className="h-6 w-6 text-orange-400" /></div><div><h3 className="font-semibold text-white mb-1">{s.titulo}</h3><p className="text-sm text-slate-400">{s.desc}</p></div></CardContent></Card>
                        ))}
                    </div>
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader><CardTitle className="text-xl text-white">Preguntas Frecuentes - Arriendos</CardTitle></CardHeader>
                        <CardContent className="p-0">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`faq-${i}`} className="border-white/10 px-6">
                                        <AccordionTrigger className="text-left text-white hover:text-orange-400 py-4">{faq.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-300 pb-4">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                    <div className="bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Problemas con tu arriendo?</h2>
                        <p className="text-slate-300 mb-6">Consulta gratis sobre desalojos, contratos o conflictos de arriendo.</p>
                        <Link href="/"><Button size="lg" className="bg-orange-600 hover:bg-orange-700"><MessageCircle className="h-5 w-5 mr-2" />Consultar Ahora</Button></Link>
                    </div>
                </div>
            </section>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LegalService", name: "LegalPO - Abogado Arriendos Chile", description: "Especialistas en arriendos: desalojos, contratos, Ley Devuélveme Mi Casa.", serviceType: "Derecho de Arriendos", areaServed: { "@type": "Country", name: "Chile" }, priceRange: "Gratis" }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        </div>
    )
}
