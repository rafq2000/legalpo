import type { Metadata } from "next"
import { comunasChile, getComunaBySlug } from "@/lib/comunas-chile"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
    MessageCircle,
    Calculator,
    Scale,
    Clock,
    MapPin,
    CheckCircle,
    Users,
    Shield,
    Zap,
    Phone,
    FileText,
    Star,
} from "lucide-react"

interface PageProps {
    params: Promise<{ comuna: string }>
}

export async function generateStaticParams() {
    return comunasChile.map((comuna) => ({
        comuna: comuna.slug,
    }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { comuna: comunaSlug } = await params
    const comuna = getComunaBySlug(comunaSlug)

    if (!comuna) {
        return {
            title: "Comuna no encontrada | LegalPO",
        }
    }

    return {
        title: `Abogado Gratis ${comuna.nombre} | Asesoría Legal Online 24/7 | LegalPO`,
        description: `🎯 ¿Necesitas un abogado en ${comuna.nombre}? Consulta GRATIS con nuestro asesor legal IA. Finiquito, pensión alimenticia, arriendos, deudas. Atención 24/7 para ${comuna.nombre}, Región ${comuna.region}.`,
        keywords: [
            `abogado gratis ${comuna.nombre.toLowerCase()}`,
            `abogado ${comuna.nombre.toLowerCase()}`,
            `necesito abogado ${comuna.nombre.toLowerCase()}`,
            `consulta legal ${comuna.nombre.toLowerCase()}`,
            `asesor legal ${comuna.nombre.toLowerCase()}`,
            `abogado online ${comuna.nombre.toLowerCase()}`,
            `abogado gratuito ${comuna.nombre.toLowerCase()}`,
            `abogado familia ${comuna.nombre.toLowerCase()}`,
            `abogado laboral ${comuna.nombre.toLowerCase()}`,
        ],
        openGraph: {
            title: `Abogado Gratis en ${comuna.nombre} | LegalPO`,
            description: `Asesoría legal gratuita 24/7 para habitantes de ${comuna.nombre}. Consulta ahora sin costo.`,
            type: "website",
        },
    }
}

export default async function ComunaPage({ params }: PageProps) {
    const { comuna: comunaSlug } = await params
    const comuna = getComunaBySlug(comunaSlug)

    if (!comuna) {
        notFound()
    }

    const servicios = [
        { icon: FileText, titulo: "Finiquito y Despido", desc: "Calcula tu finiquito y conoce tus derechos laborales" },
        { icon: Users, titulo: "Pensión Alimenticia", desc: "Cálculo de pensión y asesoría en demandas" },
        { icon: Scale, titulo: "Problemas de Arriendo", desc: "Desalojos, contratos, ley devuélveme mi casa" },
        { icon: Shield, titulo: "Deudas y DICOM", desc: "Prescripción, embargo, ley de quiebras" },
    ]

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-slate-800/50 to-transparent border-b border-white/5">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                            <MapPin className="w-4 h-4 mr-2" />
                            {comuna.nombre}, Región {comuna.region}
                        </Badge>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                            Abogado Gratis en {comuna.nombre}
                        </h1>

                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                            ¿Necesitas un abogado en <strong>{comuna.nombre}</strong>? Consulta gratis con nuestro asesor legal
                            virtual. Atendemos a los más de {comuna.poblacion.toLocaleString("es-CL")} habitantes de tu comuna las 24
                            horas, los 7 días de la semana.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <Clock className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">24/7</div>
                                    <div className="text-sm text-slate-400">Disponible</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <Zap className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">Gratis</div>
                                    <div className="text-sm text-slate-400">Sin costo</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <MessageCircle className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">Online</div>
                                    <div className="text-sm text-slate-400">100% remoto</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <Star className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">IA</div>
                                    <div className="text-sm text-slate-400">Inteligente</div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/">
                                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                                    <MessageCircle className="h-5 w-5 mr-2" />
                                    Consultar Abogado Gratis Ahora
                                </Button>
                            </Link>
                            <Link href="/calculators/finiquito">
                                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                    <Calculator className="h-5 w-5 mr-2" />
                                    Calcular Finiquito
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Servicios */}
            <section className="py-12">
                <div className="container max-w-5xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8">Servicios Legales para {comuna.nombre}</h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {servicios.map((servicio, i) => (
                            <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-emerald-500/20 rounded-xl">
                                            <servicio.icon className="h-6 w-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">{servicio.titulo}</h3>
                                            <p className="text-sm text-slate-400">{servicio.desc}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Por qué elegir LegalPO */}
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">
                                ¿Por qué elegir LegalPO en {comuna.nombre}?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Atención inmediata sin esperas",
                                    "Sin necesidad de trasladarte",
                                    "Disponible las 24 horas",
                                    "Consultas ilimitadas gratis",
                                    "Calculadoras legales precisas",
                                    "Privacidad garantizada",
                                    "Información actualizada 2026",
                                    "Especializado en leyes chilenas",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* CTA Final */}
                    <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Tienes una consulta legal en {comuna.nombre}?</h2>
                        <p className="text-slate-300 mb-6">
                            No importa la hora ni el día. Nuestro abogado virtual está listo para ayudarte ahora mismo.
                        </p>
                        <Link href="/">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                                <MessageCircle className="h-5 w-5 mr-2" />
                                Iniciar Consulta Gratis
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Schema.org LocalBusiness */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LegalService",
                        name: `LegalPO - Abogado Gratis ${comuna.nombre}`,
                        description: `Asesoría legal gratuita online para habitantes de ${comuna.nombre}. Consultas laborales, familiares y civiles.`,
                        url: `https://legalpo.cl/abogado/${comuna.slug}`,
                        areaServed: {
                            "@type": "City",
                            name: comuna.nombre,
                            containedInPlace: {
                                "@type": "AdministrativeArea",
                                name: `Región ${comuna.region}`,
                            },
                        },
                        serviceType: ["Asesoría Legal", "Consulta Jurídica", "Abogado Online"],
                        availableLanguage: "Spanish",
                        priceRange: "Gratis",
                        openingHours: "Mo-Su 00:00-23:59",
                    }),
                }}
            />
        </div>
    )
}
