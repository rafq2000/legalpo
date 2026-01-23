import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { PageAds } from "@/components/page-ads"
import { Building2, GraduationCap, Bot, Clock, AlertTriangle, CheckCircle, XCircle, Search, MapPin, Scale, Zap } from "lucide-react"

export const metadata: Metadata = {
    title: "Consultas Legales Gratis Chile 2026 | Guía de Asistencia Jurídica",
    description: "🏛️ ¿Buscas abogado gratis? Guía completa sobre la Corporación de Asistencia Judicial (CAJ), Clínicas Jurídicas y Abogados Virtuales Gratis. Dónde ir y requisitos.",
    keywords: [
        "consultas legales gratis",
        "abogado gratis estado",
        "corporacion asistencia judicial",
        "clinica juridica gratuita",
        "asesoria legal gratuita",
        "abogado de oficio chile",
        "defensoria penal publica",
        "abogado de familia gratis",
        "abogado laboral gratuito",
    ],
    openGraph: {
        title: "Guía de Asistencia Jurídica Gratuita en Chile",
        description: "Compara opciones: CAJ vs Clínicas vs IA. Encuentra la ayuda legal que necesitas sin costo.",
        type: "article",
    },
}

export default function ConsultasLegalesGratisPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
                    <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-1 text-sm rounded-full">
                        Actualizado 2026
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Consultas Legales Gratis:<br />
                        <span className="text-emerald-400">Tu Guía Definitiva en Chile</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        ¿Necesitas un abogado y no tienes dinero? No te preocupes. En Chile existen 3 formas principales de acceder a la justicia gratuitamente. Aquí te explicamos cuáles son y cuál te conviene más.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
                        <Card className="bg-white/10 border-white/20 backdrop-blur text-white">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Building2 className="text-blue-400 h-8 w-8" />
                                    <h3 className="font-bold text-lg">Opción 1: CAJ</h3>
                                </div>
                                <p className="text-sm text-slate-300">Corporación de Asistencia Judicial. Para juicios formales y representación en tribunales.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white/10 border-white/20 backdrop-blur text-white">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <GraduationCap className="text-amber-400 h-8 w-8" />
                                    <h3 className="font-bold text-lg">Opción 2: Clínicas</h3>
                                </div>
                                <p className="text-sm text-slate-300">Consultorios de Universidades. Estudiantes supervisados toman casos seleccionados.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-emerald-900/40 border-emerald-500/40 backdrop-blur text-white shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Bot className="text-emerald-400 h-8 w-8" />
                                    <h3 className="font-bold text-lg text-emerald-300">Opción 3: IA LegalPO</h3>
                                </div>
                                <p className="text-sm text-emerald-100/80">Consultas inmediatas, 24/7 y sin requisitos socioeconómicos. El primer paso ideal.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 container max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">Comparativa: ¿Dónde pedir ayuda?</h2>
                <div className="overflow-x-auto shadow-xl rounded-2xl border border-slate-200">
                    <table className="w-full text-left border-collapse bg-white">
                        <thead>
                            <tr className="bg-slate-100 text-slate-700">
                                <th className="p-5 font-bold border-b">Característica</th>
                                <th className="p-5 font-bold border-b text-blue-700">CAJ (Estado)</th>
                                <th className="p-5 font-bold border-b text-amber-700">Clínicas Jurídicas</th>
                                <th className="p-5 font-bold border-b text-emerald-700 bg-emerald-50">LegalPO (IA)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-4 font-semibold text-slate-600">Requisito Económico</td>
                                <td className="p-4"><Badge variant="destructive">Estricto</Badge> (Ficha Social)</td>
                                <td className="p-4"><Badge variant="secondary">Variable</Badge></td>
                                <td className="p-4 bg-emerald-50/50"><Badge className="bg-emerald-600">Ninguno (Universal)</Badge></td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-semibold text-slate-600">Tiempo de Espera</td>
                                <td className="p-4 text-red-600 flex items-center gap-2"><Clock className="h-4 w-4" /> Meses</td>
                                <td className="p-4 text-amber-600">Semanas</td>
                                <td className="p-4 bg-emerald-50/50 text-emerald-700 font-bold flex items-center gap-2"><Zap className="h-4 w-4" /> Inmediato (Segundos)</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-semibold text-slate-600">Representación Juicio</td>
                                <td className="p-4"><CheckCircle className="h-5 w-5 text-green-500" /> Sí</td>
                                <td className="p-4"><CheckCircle className="h-5 w-5 text-green-500" /> Sí (Casos simples)</td>
                                <td className="p-4 bg-emerald-50/50"><XCircle className="h-5 w-5 text-slate-400" /> No (Solo Orientación)</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-semibold text-slate-600">Disponibilidad</td>
                                <td className="p-4">Horario Oficina</td>
                                <td className="p-4">Semestre Académico</td>
                                <td className="p-4 bg-emerald-50/50 font-bold">24/7 Todo el año</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-semibold text-slate-600">Costo</td>
                                <td className="p-4 font-bold text-green-600">Gratis</td>
                                <td className="p-4 font-bold text-green-600">Gratis (o aporte bajo)</td>
                                <td className="p-4 bg-emerald-50/50 font-bold text-green-600">100% Gratis</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                    <h3 className="font-bold text-blue-900 text-lg mb-2 flex items-center gap-2"><Search className="h-5 w-5" /> Nuestro Consejo:</h3>
                    <p className="text-blue-800">
                        <strong>Usa LegalPO primero.</strong> Aclara tus dudas, entiende tus derechos y calcula montos (finiquito, pensión) en segundos.
                        Si el caso es complejo y requiere juicio, LegalPO te orientará para que llegues a la CAJ con la información clara, ahorrando tiempo.
                    </p>
                    <div className="mt-4">
                        <Link href="/">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                <Bot className="mr-2 h-5 w-5" /> Hacer Consulta Previa a la IA
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container max-w-5xl mx-auto px-4 mb-8">
                <PageAds />
            </div>

            {/* Deep Dive Content */}
            <section className="py-12 bg-white">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="prose prose-lg max-w-none text-slate-700">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Building2 className="h-8 w-8 text-blue-600" />
                            1. Corporaciones de Asistencia Judicial (CAJ)
                        </h2>
                        <p>
                            Las CAJ son organismos públicos encargados de brindar asistencia jurídica y judicial gratuita a personas de escasos recursos.
                            Tienen oficinas (consultorios) en casi todas las comunas de Chile.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                            <Card className="border-slate-200">
                                <CardHeader><CardTitle className="text-base text-slate-700">Requisitos</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0" /> Calificar socioeconómicamente (Ficha Protección Social).</li>
                                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0" /> El caso debe ser viable (tener mérito).</li>
                                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0" /> Residir en la comuna del consultorio.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="border-slate-200">
                                <CardHeader><CardTitle className="text-base text-slate-700">Tipos de Casos</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li className="flex gap-2"><Scale className="h-4 w-4 text-blue-500 shrink-0" /> Familia (Divorcios, Pensiones).</li>
                                        <li className="flex gap-2"><Scale className="h-4 w-4 text-blue-500 shrink-0" /> Civil (Arriendos, Herencias simples).</li>
                                        <li className="flex gap-2"><Scale className="h-4 w-4 text-blue-500 shrink-0" /> Laboral (Despidos).</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        <h3 className="font-bold text-xl mt-8 mb-4">Ubicaciones Principales:</h3>
                        <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                            <li className="bg-slate-50 p-3 rounded border flex items-center gap-3">
                                <MapPin className="text-red-500" /> <a href="https://www.cajta.cl/" target="_blank" rel="nofollow" className="text-blue-600 font-medium hover:underline">Zona Norte (CAJTA)</a>
                            </li>
                            <li className="bg-slate-50 p-3 rounded border flex items-center gap-3">
                                <MapPin className="text-red-500" /> <a href="https://www.cajval.cl/" target="_blank" rel="nofollow" className="text-blue-600 font-medium hover:underline">Valparaíso (CAJVAL)</a>
                            </li>
                            <li className="bg-slate-50 p-3 rounded border flex items-center gap-3">
                                <MapPin className="text-red-500" /> <a href="https://www.cajmetro.cl/" target="_blank" rel="nofollow" className="text-blue-600 font-medium hover:underline">Metropolitana (CAJMETRO)</a>
                            </li>
                            <li className="bg-slate-50 p-3 rounded border flex items-center gap-3">
                                <MapPin className="text-red-500" /> <a href="https://www.cajbiobio.cl/" target="_blank" rel="nofollow" className="text-blue-600 font-medium hover:underline">Biobío (CAJBIOBIO)</a>
                            </li>
                        </ul>

                        <hr className="my-12 border-slate-200" />

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <GraduationCap className="h-8 w-8 text-amber-500" />
                            2. Clínicas Jurídicas Universitarias
                        </h2>
                        <p>
                            Son centros de práctica donde estudiantes de derecho de últimos años, supervisados por profesores abogados,
                            asumen la representación de casos reales.
                        </p>
                        <p>
                            <strong>Lo bueno:</strong> Atención dedicada y muchas veces más rápida que la CAJ.<br />
                            <strong>Lo malo:</strong> Tienen cupos limitados y suelen cerrar durante vacaciones universitarias (Enero/Febrero).
                        </p>
                        <p className="font-medium text-slate-800 mt-4">Principales Clínicas (Santiago):</p>
                        <ul className="list-disc pl-5">
                            <li>Clínica Jurídica Universidad de Chile (Pio Nono).</li>
                            <li>Clínica Jurídica Universidad Católica (Centro de la Familia).</li>
                            <li>Clínica Jurídica Universidad Diego Portales (Barrio Universitario).</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Necesitas una respuesta AHORA?</h2>
                    <p className="text-xl max-w-2xl mx-auto mb-8 text-slate-300">
                        No esperes meses por una hora. Nuestro <strong>Abogado Virtual</strong> está disponible en este momento para resolver tus dudas.
                    </p>
                    <Link href="/">
                        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-8 h-14 shadow-[0_0_30px_rgba(16,185,129,0.4)] animate-pulse">
                            <Bot className="h-6 w-6 mr-2" />
                            Consultar Gratis Online
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
