import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldAlert, Lock, Fingerprint, Phone, Eraser, UserX } from "lucide-react"
import Link from "next/link"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
    title: "Eliminar Funas y Defensa Ciberacoso Chile | Abogado Digital",
    description: "Abogado especialista en eliminar funas de redes sociales, defensa ante ciberacoso y protección de la honra. Borramos contenido difamatorio. Recurso de protección.",
    keywords: [
        "abogado funas chile",
        "eliminar funas redes sociales",
        "abogado ciberacoso chile",
        "denuncia por injurias y calumnias",
        "borrar antecedentes google",
        "recurso proteccion funa",
        "defensa honor digital",
        "abogado delitos informaticos"
    ],
}

export default function CiberacosoPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-purple-900/10" />
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
                        <ShieldAlert className="w-4 h-4" />
                        <span className="text-sm font-medium">Limpiamos tu Imagen Digital</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
                        Defensa ante Funas y Ciberacoso
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        ¿Te están funando injustamente? Protegemos tu honra y tu futuro laboral. Eliminamos contenido difamatorio y perseguimos a los responsables.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/consultas-legales-gratis">
                            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white min-w-[200px]">
                                <Phone className="mr-2 h-5 w-5" />
                                Detener Funa Ahora
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-900/50">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">Recupera tu Tranquilidad</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-slate-900 border-slate-800 hover:border-purple-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Eraser className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Eliminación de Contenido</h3>
                                <p className="text-slate-400">
                                    Gestionamos la baja de publicaciones en Facebook, Instagram, TikTok y Google que dañen tu imagen mediante órdenes judiciales.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-slate-800 hover:border-purple-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <UserX className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Recurso de Protección</h3>
                                <p className="text-slate-400">
                                    Acción constitucional rápida para obligar al agresor a detener el acoso y borrar el material difamatorio inmediatamente.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-slate-800 hover:border-purple-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Fingerprint className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Querella por Injurias</h3>
                                <p className="text-slate-400">
                                    Perseguimos la responsabilidad penal de quienes inventan hechos falsos (calumnias) o te insultan gravemente (injurias).
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container max-w-4xl mx-auto py-8">
                <AdUnit slot="9988776655" format="horizontal" />
            </section>

            <section className="py-16">
                <div className="container px-4 mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold mb-8 text-white">Preguntas Frecuentes sobre Funas</h2>
                    <div className="space-y-6">
                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                            <h3 className="text-lg font-semibold mb-2 text-purple-300">¿Es delito funar en redes sociales?</h3>
                            <p className="text-slate-400">
                                Sí, puede constituir delitos de injurias y calumnias, además de vulnerar el derecho constitucional a la honra. Los tribunales chilenos acogen constantemente recursos a favor de los afectados.
                            </p>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                            <h3 className="text-lg font-semibold mb-2 text-purple-300">¿Pueden borrar fotos mías subidas sin permiso?</h3>
                            <p className="text-slate-400">
                                Sí. El uso de tu imagen sin consentimiento es ilegal. Podemos solicitar a las plataformas y a la justicia la eliminación inmediata del contenido.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
