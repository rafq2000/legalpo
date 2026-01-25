import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Volume2, Building, Banknote, Phone, Megaphone, Hotel } from "lucide-react"
import Link from "next/link"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
    title: "Abogado Ruidos Molestos y Copropiedad Chile | Problemas Vecinos",
    description: "Abogado experto en Ley de Copropiedad y conflictos vecinales. Ruidos molestos, gastos comunes abusivos, uso de espacios comunes y morosidad. Asesoría comités.",
    keywords: [
        "abogado ruidos molestos",
        "ley copropiedad chile",
        "gastos comunes abusivos",
        "demanda juzgado policia local copropiedad",
        "vecinos ruidosos legal",
        "abogado condominios chile",
        "impugnar asamblea condominio",
        "multas copropiedad apelacion"
    ],
}

export default function RuidosMolestosPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-yellow-900/10" />
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 mb-6">
                        <Building className="w-4 h-4" />
                        <span className="text-sm font-medium">Paz en tu Hogar</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
                        Problemas de Copropiedad y Vecinos
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        ¿Ruidos molestos insoportables? ¿Gastos comunes poco claros? Hacemos valer la Ley de Copropiedad Inmobiliaria para que recuperes tu tranquilidad.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/consultas-legales-gratis">
                            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white min-w-[200px]">
                                <Phone className="mr-2 h-5 w-5" />
                                Consulta Vecinal Gratis
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-900/50">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">Conflictos en Condominios</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-slate-900 border-slate-800 hover:border-yellow-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Volume2 className="w-6 h-6 text-yellow-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Ruidos Molestos</h3>
                                <p className="text-slate-400">
                                    Acciones ante el Juzgado de Policía Local (JPL) contra vecinos ruidosos que violan el reglamento y la ordenanza municipal.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-slate-800 hover:border-yellow-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Banknote className="w-6 h-6 text-yellow-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Gastos Comunes</h3>
                                <p className="text-slate-400">
                                    Auditoría y defensa ante cobros abusivos, intereses usureros o falta de transparencia en la administración.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-slate-800 hover:border-yellow-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Hotel className="w-6 h-6 text-yellow-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Administración</h3>
                                <p className="text-slate-400">
                                    Asesoría legal a Comités de Administración, redacción de reglamentos y gestión de morosidad (cobranza judicial).
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container max-w-4xl mx-auto py-8">
                <AdUnit slot="1122334455" format="horizontal" />
            </section>

            <section className="py-16">
                <div className="container px-4 mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold mb-8 text-white">Preguntas Frecuentes sobre Copropiedad</h2>
                    <div className="space-y-6">
                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                            <h3 className="text-lg font-semibold mb-2 text-yellow-300">¿Qué puedo hacer si mi vecino hace fiestas todos los días?</h3>
                            <p className="text-slate-400">
                                Primero, notificar a conserjería y administración. Si persiste, se debe denunciar ante Carabineros en el momento (flagrancia) y luego presentar querella infraccional en el Juzgado de Policía Local.
                            </p>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                            <h3 className="text-lg font-semibold mb-2 text-yellow-300">¿Me pueden cortar la luz por gastos comunes impagos?</h3>
                            <p className="text-slate-400">
                                Según la nueva Ley de Copropiedad, el administrador puede cortar el suministro eléctrico si existen 3 o más meses de deuda, previo aviso documentado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
