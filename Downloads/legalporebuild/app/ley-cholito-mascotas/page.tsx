import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cat, Dog, Heart, Phone, Home, Gavel } from "lucide-react"
import Link from "next/link"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
    title: "Abogado Ley Cholito y Mascotas Chile | Custodia y Maltrato",
    description: "Abogado especialista en Derecho Animal y Ley Cholito. Custodia compartida de mascotas, denuncias por maltrato animal y mordeduras. Defendemos a tu familia multiespecie.",
    keywords: [
        "abogado mascotas chile",
        "ley cholito custodia",
        "quien se queda con el perro divorcio",
        "denuncia maltrato animal",
        "mordedura perro demanda",
        "abogado derecho animal",
        "tenencia responsable mascotas",
        "custodia compartida gatos"
    ],
}

export default function LeyCholitoPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-orange-900/10" />
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-6">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm font-medium">Familia Multiespecie</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent">
                        Abogado Derecho Animal y Mascotas
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Ellos también son familia. Asesoría legal en custodia de mascotas tras separaciones, Ley Cholito y defensa ante ataques o negligencias veterinarias.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/consultas-legales-gratis">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white min-w-[200px]">
                                <Phone className="mr-2 h-5 w-5" />
                                Consulta por tu Mascota
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-900/50">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">Protección Legal para tus Animales</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-slate-900 border-slate-800 hover:border-orange-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Home className="w-6 h-6 text-orange-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Custodia en Divorcios</h3>
                                <p className="text-slate-400">
                                    ¿Te separaste y no te dejan ver a tu perro/gato? Tramitamos regímenes de visitas y custodia compartida bajo el principio de afecto.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-slate-800 hover:border-orange-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Dog className="w-6 h-6 text-orange-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Ley Cholito</h3>
                                <p className="text-slate-400">
                                    Asesoría en cumplimiento de la ley de tenencia responsable. Defensa ante multas injustas y conflictos vecinales por mascotas.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-slate-800 hover:border-orange-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Gavel className="w-6 h-6 text-orange-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Daños y Mordeduras</h3>
                                <p className="text-slate-400">
                                    Defensa y demandas civiles si tu mascota fue atacada por otra, o si tu perro mordió a alguien y necesitas defensa legal.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container max-w-4xl mx-auto py-8">
                <AdUnit slot="4455667788" format="horizontal" />
            </section>

            <section className="py-16">
                <div className="container px-4 mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold mb-8 text-white">Preguntas Frecuentes sobre Mascotas</h2>
                    <div className="space-y-6">
                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                            <h3 className="text-lg font-semibold mb-2 text-orange-300">¿Quién se queda con el perro si me separo?</h3>
                            <p className="text-slate-400">
                                Legalmente son "bienes muebles", pero los jueces modernos consideran el bienestar del animal (seres sintientes). Se puede lograr acuerdos de tuición compartida mediante mediación o juicio.
                            </p>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                            <h3 className="text-lg font-semibold mb-2 text-orange-300">¿Qué pasa si un perro ataca al mío?</h3>
                            <p className="text-slate-400">
                                El dueño del perro agresor es responsable civilmente (debe pagar veterinario y daños) y penalmente si hubo negligencia bajo la Ley Cholito.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
