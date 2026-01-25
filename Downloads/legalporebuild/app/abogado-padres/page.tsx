import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Shield, Gavel, Phone, Scale, HeartHandshake } from "lucide-react"
import Link from "next/link"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
    title: "Abogado de Familia para Hombres y Papás Chile | Derechos del Padre",
    description: "Abogado especializado en derechos del padre en Chile. Tuición compartida, rebaja de pensión, régimen de visitas y divorcio para hombres. Asesoría justa.",
    keywords: [
        "abogado para papas",
        "derechos del padre chile",
        "tuicion compartida chile",
        "rebaja pension alimentos",
        "abogado de familia hombres",
        "divorcio hombres chile",
        "regimen de visitas papa",
        "cuidado personal padres"
    ],
}

export default function AbogadoPadresPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10" />
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
                        <Scale className="w-4 h-4" />
                        <span className="text-sm font-medium">Igualdad ante la Ley</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                        Abogado de Familia para Papás
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Defendemos tu derecho a ser un padre presente. Especialistas en Tuición Compartida, Visitas y Pensión Justa. Porque ser papá también es un derecho.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/consultas-legales-gratis">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white min-w-[200px]">
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
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">Tus Derechos como Padre</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-slate-900 border-slate-800 hover:border-blue-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Tuición Compartida / Cuidado Personal</h3>
                                <p className="text-slate-400">
                                    Luchamos para que tus hijos vivan contigo o tengan un régimen de cuidado compartido (corresponsabilidad parental).
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-slate-800 hover:border-blue-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <HeartHandshake className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Régimen de Visitas (Relación Directa)</h3>
                                <p className="text-slate-400">
                                    Garantizamos que puedas ver a tus hijos regularmente. Si te impiden verlos, demandamos el cumplimiento inmediato.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-slate-800 hover:border-blue-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Gavel className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Rebaja de Pensión</h3>
                                <p className="text-slate-400">
                                    Si tu situación económica cambió o tienes más hijos, solicitamos la rebaja de la pensión de alimentos al monto justo.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container max-w-4xl mx-auto py-8">
                <AdUnit slot="5432109876" format="horizontal" />
            </section>

            {/* FAQ SEO Section */}
            <section className="py-16">
                <div className="container px-4 mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold mb-8 text-white">Preguntas Frecuentes de Papás</h2>
                    <div className="space-y-6">
                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                            <h3 className="text-lg font-semibold mb-2 text-blue-300">¿Puede el padre tener la tuición de los hijos?</h3>
                            <p className="text-slate-400">
                                Absolutamente. La ley chilena actual no prefiere a la madre sobre el padre. Si puedes demostrar que eres idóneo y es lo mejor para el niño, puedes obtener el cuidado personal.
                            </p>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                            <h3 className="text-lg font-semibold mb-2 text-blue-300">¿Qué hago si la madre no me deja ver a mi hijo?</h3>
                            <p className="text-slate-400">
                                Debes solicitar mediación inmediata y luego demandar "Relación Directa y Regular". Si ya tienes sentencia y la incumple, puedes pedir apremios (multas, arresto) y compensación de días.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
