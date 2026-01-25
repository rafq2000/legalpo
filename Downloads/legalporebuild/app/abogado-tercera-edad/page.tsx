import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Users, Phone, Clock, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
    title: "Abogado Tercera Edad Chile | Derechos Adulto Mayor y Pensiones | LegalPO",
    description: "Abogado especializado en adulto mayor y tercera edad. Asesoría legal para abuelitos: interdicción, herencias, pensión de alimentos (abuelos) y maltrato. Consulta gratis.",
    keywords: [
        "abogado tercera edad",
        "abogado adulto mayor",
        "derechos adulto mayor chile",
        "abogado para abuelitos",
        "interdiccion adulto mayor",
        "pension alimentos abuelos",
        "maltrato adulto mayor denuncia",
        "abogado herencias adulto mayor"
    ],
}

export default function AbogadoTerceraEdadPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-emerald-900/10" />
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm font-medium">Atención Prioritaria y Calidez Humana</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-200 to-cyan-200 bg-clip-text text-transparent">
                        Abogado para el Adulto Mayor
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Protegemos los derechos de quienes nos cuidaron. Asesoría legal especializada para la tercera edad con paciencia, respeto y dedicación.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/consultas-legales-gratis">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white min-w-[200px]">
                                <Phone className="mr-2 h-5 w-5" />
                                Consulta Gratis
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Servicios Específicos */}
            <section className="py-16 bg-slate-900/50">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">¿En qué podemos ayudar a nuestros abuelitos?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-slate-900 border-slate-800 hover:border-emerald-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Interdicción y Cuidados</h3>
                                <p className="text-slate-400">
                                    Tramitamos la declaración de interdicción para proteger el patrimonio y bienestar de adultos mayores que ya no pueden valerse por sí mismos.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-slate-800 hover:border-emerald-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FileText className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Herencias y Testamentos</h3>
                                <p className="text-slate-400">
                                    Asesoría para ordenar sus bienes en vida, redacción de testamentos y trámites de posesión efectiva para evitar problemas familiares futuros.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-slate-800 hover:border-emerald-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Pensión de Alimentos (Abuelos)</h3>
                                <p className="text-slate-400">
                                    Defensa ante demandas de pensión de alimentos contra abuelos, y demandas de pensión para el adulto mayor (demandar a hijos).
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container max-w-4xl mx-auto py-8">
                <AdUnit slot="9876543210" format="horizontal" />
            </section>

            {/* FAQ SEO Section */}
            <section className="py-16">
                <div className="container px-4 mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold mb-8 text-white">Preguntas Frecuentes sobre Derechos del Adulto Mayor</h2>
                    <div className="space-y-6">
                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                            <h3 className="text-lg font-semibold mb-2 text-emerald-300">¿Puede un abuelo demandar a sus hijos por pensión?</h3>
                            <p className="text-slate-400">
                                Sí. La ley chilena establece que los adultos mayores en estado de necesidad pueden demandar pensión de alimentos a sus hijos y nietos si estos tienen capacidad económica.
                            </p>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                            <h3 className="text-lg font-semibold mb-2 text-emerald-300">¿Qué es la interdicción por demencia?</h3>
                            <p className="text-slate-400">
                                Es un proceso judicial donde se declara que una persona no está capacitada para administrar sus bienes (ej: Alzheimer avanzado), y se nombra un curador para que lo proteja y administre.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
