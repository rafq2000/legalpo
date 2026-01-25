import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileWarning, AlertTriangle, ShieldCheck, Phone, CheckCircle, FileText } from "lucide-react"
import Link from "next/link"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
    title: "Apelación Licencias Médicas Rechazadas COMPIN SUSESO | Abogado Salud",
    description: "Abogado experto en reclamos por licencias médicas rechazadas o reducidas. Apelación COMPIN, SUSESO y Recurso de Protección Isapres. Recupera tu sueldo.",
    keywords: [
        "reclamo licencia medica rechazada",
        "apelacion compin",
        "abogado suseso",
        "reclamo isapre licencia",
        "licencia rechazada reposo injustificado",
        "recurso proteccion licencia medica",
        "abogado derecho salud chile",
        "compin reclamos online"
    ],
}

export default function ReclamosLicenciasPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-rose-900/10" />
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-6">
                        <FileWarning className="w-4 h-4" />
                        <span className="text-sm font-medium">¿Licencia Rechazada? ¡Apelamos por ti!</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-200 to-orange-200 bg-clip-text text-transparent">
                        Reclamo y Pagos de Licencias Médicas
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Si la COMPIN o tu Isapre rechazaron tu licencia médica injustamente, tienes derecho a reclamar. Recuperamos tus pagos de incapacidad laboral.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/consultas-legales-gratis">
                            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white min-w-[200px]">
                                <Phone className="mr-2 h-5 w-5" />
                                Evaluar mi Caso Gratis
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Servicios Específicos */}
            <section className="py-16 bg-slate-900/50">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">¿Dónde te rechazaron?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-slate-900 border-slate-800 hover:border-rose-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertTriangle className="w-6 h-6 text-rose-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Rechazo ISAPRE / COMPIN</h3>
                                <p className="text-slate-400">
                                    Realizamos la reposición ante la Isapre o la apelación directa ante la COMPIN cuando alegan "Reposo Injustificado".
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-slate-800 hover:border-rose-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck className="w-6 h-6 text-rose-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Apelación SUSESO</h3>
                                <p className="text-slate-400">
                                    Si la COMPIN mantiene el rechazo, elevamos el caso a la Superintendencia de Seguridad Social (SUSESO) última instancia administrativa.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-slate-800 hover:border-rose-500/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FileText className="w-6 h-6 text-rose-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Recurso de Protección</h3>
                                <p className="text-slate-400">
                                    Vía judicial rápida (Corte de Apelaciones) cuando el rechazo es ilegal o arbitrario y vulnera tus derechos constitucionales.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container max-w-4xl mx-auto py-8">
                <AdUnit slot="1239874560" format="horizontal" />
            </section>

            {/* FAQ SEO Section */}
            <section className="py-16">
                <div className="container px-4 mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold mb-8 text-white">Dudas sobre Licencias Rechazadas</h2>
                    <div className="space-y-6">
                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                            <h3 className="text-lg font-semibold mb-2 text-rose-300">¿Cuánto plazo tengo para apelar una licencia rechazada?</h3>
                            <p className="text-slate-400">
                                Para la COMPIN tienes 15 días hábiles desde que recibes la carta de rechazo. No dejes pasar el tiempo, contáctanos de inmediato.
                            </p>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                            <h3 className="text-lg font-semibold mb-2 text-rose-300">¿Qué documentos necesito para reclamar?</h3>
                            <p className="text-slate-400">
                                Fundamentalmente: Informe médico detallado (que explique el diagnóstico y por qué necesitas reposo), copia de la licencia, resolución de rechazo y exámenes que respalden tu enfermedad.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
