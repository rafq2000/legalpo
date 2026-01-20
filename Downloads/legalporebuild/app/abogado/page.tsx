import type { Metadata } from "next"
import { comunasChile } from "@/lib/comunas-chile"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MapPin, Users, ArrowRight, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Abogado Gratis en Tu Comuna | 100+ Comunas de Chile | LegalPO",
    description:
        "🎯 Encuentra asesoría legal gratuita en tu comuna. Cubrimos las 100 comunas más pobladas de Chile con atención 24/7. Consulta ahora sin costo.",
    keywords: [
        "abogado gratis chile",
        "abogado por comuna",
        "necesito abogado",
        "abogado cerca de mi",
        "asesor legal comunas chile",
        "abogado online chile",
    ],
}

export default function AbogadoComunasPage() {
    // Agrupar por región
    const comunasPorRegion = comunasChile.reduce(
        (acc, comuna) => {
            if (!acc[comuna.region]) {
                acc[comuna.region] = []
            }
            acc[comuna.region].push(comuna)
            return acc
        },
        {} as Record<string, typeof comunasChile>,
    )

    const regiones = Object.keys(comunasPorRegion).sort()

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero */}
            <section className="py-16 bg-gradient-to-b from-slate-800/50 to-transparent border-b border-white/5">
                <div className="container max-w-5xl mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                        <MapPin className="w-4 h-4 mr-2" />
                        100+ Comunas de Chile
                    </Badge>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                        Abogado Gratis en Tu Comuna
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Asesoría legal gratuita disponible 24/7 para las comunas más pobladas de Chile. Encuentra tu comuna y
                        comienza tu consulta ahora.
                    </p>

                    <Link href="/">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                            <MessageCircle className="h-5 w-5 mr-2" />
                            Consultar Ahora (Todas las Comunas)
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Lista de Comunas */}
            <section className="py-12">
                <div className="container max-w-6xl mx-auto px-4">
                    {regiones.map((region) => (
                        <div key={region} className="mb-12">
                            <h2 className="text-xl font-bold text-emerald-400 mb-4 flex items-center">
                                <MapPin className="h-5 w-5 mr-2" />
                                Región {region}
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {comunasPorRegion[region]
                                    .sort((a, b) => b.poblacion - a.poblacion)
                                    .map((comuna) => (
                                        <Link key={comuna.slug} href={`/abogado/${comuna.slug}`}>
                                            <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all cursor-pointer h-full">
                                                <CardContent className="p-4">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <h3 className="font-medium text-white text-sm">{comuna.nombre}</h3>
                                                            <p className="text-xs text-slate-400 flex items-center mt-1">
                                                                <Users className="h-3 w-3 mr-1" />
                                                                {comuna.poblacion.toLocaleString("es-CL")}
                                                            </p>
                                                        </div>
                                                        <ArrowRight className="h-4 w-4 text-slate-500" />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-12 bg-gradient-to-r from-emerald-600/10 to-teal-600/10">
                <div className="container max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">¿No encuentras tu comuna?</h2>
                    <p className="text-slate-300 mb-6">
                        No te preocupes, nuestro servicio es 100% online y atiende a todo Chile sin importar tu ubicación.
                    </p>
                    <Link href="/">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                            <MessageCircle className="h-5 w-5 mr-2" />
                            Iniciar Consulta Gratis
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
