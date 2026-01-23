import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageAds } from "@/components/page-ads"
import { FileSignature, AlertTriangle, Clock, CheckCircle, HelpCircle } from "lucide-react"
import RenunciaGenerator from "./renuncia-generator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
    title: "Generador Carta de Renuncia Chile 2026 | Word y PDF Gratis",
    description: "Crea tu Carta de Renuncia Voluntaria en segundos. Formato legal válido Chile (Art. 159 Código Trabajo). Descargar PDF o Copiar. Sin registro.",
    keywords: [
        "carta de renuncia simple",
        "formato carta renuncia chile",
        "modelo carta renuncia voluntaria",
        "generador carta renuncia",
        "renuncia laboral chile",
        "aviso previo renuncia",
        "articulo 159 codigo trabajo",
        "descargar carta renuncia word",
    ],
    openGraph: {
        title: "Generador de Carta de Renuncia Chile | PDF Gratis",
        description: "Redacta tu renuncia formal en 1 minuto. Modelo legal 2026.",
        type: "website",
    },
}

export default function CartaRenunciaPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans">
            {/* Hero Tool Section */}
            <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-12 border-b border-white/5">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30 px-3 py-1">
                            <FileSignature className="w-4 h-4 mr-2" />
                            Herramienta Gratuita 2026
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                            Generador de Carta de <span className="text-indigo-400">Renuncia Voluntaria</span>
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Crea un documento formal y válido legalmente para terminar tu relación laboral.
                            Basado en el <strong>Artículo 159 N° 2</strong> del Código del Trabajo.
                        </p>
                    </div>

                    <RenunciaGenerator />

                    <p className="text-center text-xs text-slate-500 mt-6 flex justify-center items-center gap-2">
                        <CheckCircle className="h-3 w-3" /> Tus datos son privados. No guardamos información en nuestros servidores.
                    </p>
                </div>
            </section>

            <div className="container max-w-4xl mx-auto px-4 py-8">
                <PageAds />
            </div>

            {/* Content & SEO Section */}
            <section className="py-12 bg-slate-900">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <Card className="bg-white/5 border-white/10">
                            <CardContent className="p-5">
                                <Clock className="h-8 w-8 text-indigo-400 mb-3" />
                                <h3 className="font-bold text-white mb-2">¿30 días de aviso?</h3>
                                <p className="text-sm text-slate-300">La ley sugiere 30 días, pero <strong>no es obligatorio</strong>. Puedes renunciar con menos tiempo (incluso el mismo día), aunque lo ideal es mantener buenas relaciones.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white/5 border-white/10">
                            <CardContent className="p-5">
                                <FileSignature className="h-8 w-8 text-emerald-400 mb-3" />
                                <h3 className="font-bold text-white mb-2">¿Debo firmar ante notario?</h3>
                                <p className="text-sm text-slate-300">Para que sea válida ante la Inspección del Trabajo como prueba plena, lo ideal es que sea ratificada ante ministro de fe (Notario o Inspector).</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white/5 border-white/10">
                            <CardContent className="p-5">
                                <AlertTriangle className="h-8 w-8 text-amber-400 mb-3" />
                                <h3 className="font-bold text-white mb-2">¿Pierdo mi finiquito?</h3>
                                <p className="text-sm text-slate-300">¡No! Al renunciar sigues teniendo derecho a vacaciones proporcionales y días trabajados. Solo pierdes la indemnización por años de servicio.</p>
                            </CardContent>
                        </Card>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-6">Preguntas Frecuentes sobre la Renuncia</h2>
                    <Accordion type="single" collapsible className="w-full mb-12">
                        <AccordionItem value="item-1" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-indigo-400">¿Qué debe decir la carta de renuncia?</AccordionTrigger>
                            <AccordionContent className="text-slate-300">
                                Debe indicar claramente tu voluntad de renunciar, la fecha en que se hará efectiva (último día), tus datos personales y los de la empresa. Nuestro generador incluye todo esto automáticamente.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-indigo-400">¿Me pueden rechazar la renuncia?</AccordionTrigger>
                            <AccordionContent className="text-slate-300">
                                No. La renuncia es un acto unilateral. El empleador no necesita aceptarla para que sea válida. Solo debes asegurarte de entregarla o enviarla por carta certificada.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-indigo-400">¿Si renuncio tengo seguro de cesantía?</AccordionTrigger>
                            <AccordionContent className="text-slate-300">
                                Sí, puedes cobrar el Seguro de Cesantía con tu carta de renuncia ratificada, pero solo podrás retirar los fondos de tu Cuenta Individual (CIC). No accedes al Fondo Solidario.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-8 text-center">
                        <HelpCircle className="h-10 w-10 text-indigo-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">¿Te deben dinero o te acosan para que renuncies?</h3>
                        <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                            Si tu empleador no paga cotizaciones o te maltrata para que te vayas, eso podría ser un <strong>Autodespido</strong>. No renuncies sin asesorarte.
                        </p>
                        <a href="/abogado-laboral" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                            Hablar con Abogado Laboral
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
