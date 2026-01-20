import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import {
    CreditCard,
    CheckCircle,
    AlertTriangle,
    Clock,
    Scale,
    FileText,
    ArrowRight,
    MessageCircle,
    Shield,
    XCircle,
    Calendar,
    Info,
    Zap,
} from "lucide-react"

export const metadata: Metadata = {
    title: "Cómo Salir de DICOM Chile 2026 | Prescripción de Deudas | Guía Completa | LegalPO",
    description:
        "🔓 GUÍA COMPLETA para salir de DICOM en Chile 2026. Prescripción de deudas (5 años), qué bienes no pueden embargarte, Ley de Quiebras personales, renegociación. Asesoría legal gratis 24/7.",
    keywords: [
        "salir de dicom",
        "como salir de dicom",
        "prescripcion deudas chile",
        "dicom chile",
        "cuando me sacan de dicom",
        "ley quiebras personal chile",
        "embargo bienes chile",
        "renegociar deudas chile",
        "que bienes no pueden embargar",
        "deudas chile",
    ],
    openGraph: {
        title: "Cómo Salir de DICOM Chile 2026 | Guía Completa | LegalPO",
        description: "Todo sobre DICOM, prescripción de deudas y cómo proteger tus bienes en Chile 2026.",
        type: "article",
    },
}

const faqs = [
    {
        q: "¿Después de cuánto tiempo prescribe una deuda en Chile?",
        a: "Las deudas comunes prescriben en 5 años desde que se hicieron exigibles. Las deudas tributarias prescriben en 3 años (normal) o 6 años (evasión). Las deudas por cheques y pagarés prescriben en 1 año. La prescripción se interrumpe si interponen demanda judicial.",
    },
    {
        q: "¿Cuándo me sacan de DICOM?",
        a: "Automáticamente después de 5 años desde que la deuda se hizo exigible, aunque no la hayas pagado. Si pagas la deuda, debes solicitar que te eliminen, lo cual debe ocurrir en máximo 7 días hábiles después de tu solicitud.",
    },
    {
        q: "¿Me pueden embargar el sueldo por deudas?",
        a: "Solo por orden judicial y con límites estrictos: máximo 50% del sueldo que exceda el mínimo. Ejemplo: si ganas $800,000 y el mínimo es $539,000, pueden embargar máximo $130,500 (50% de $261,000).",
    },
    {
        q: "¿Qué bienes no me pueden embargar en Chile?",
        a: "Son inembargables: el lecho del deudor y familia, ropa necesaria, herramientas de trabajo (hasta 2 UTM), libros de profesión, alimentos para un mes, objetos de culto religioso, pensiones alimenticias, y el 50% del sueldo hasta el mínimo.",
    },
    {
        q: "¿Qué es la Ley de Quiebras personales?",
        a: "Es la Ley 20.720 que permite a personas naturales renegociar o liquidar deudas ordenadamente. Puedes proponer un plan de pago a acreedores (renegociación) o liquidar tus bienes para pagar (liquidación). Hay protección contra embargos durante el proceso.",
    },
    {
        q: "¿Puedo renegociar mis deudas sin ir a juicio?",
        a: "Sí, tienes varias opciones: negociar directamente con el acreedor, acudir a la Superintendencia de Insolvencia para un procedimiento concursal, usar servicios de renegociación de SERNAC, o pedir créditos de consolidación de deudas.",
    },
]

export default function DicomChile() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-slate-800/30 to-transparent border-b border-white/5">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30">
                            <CreditCard className="w-4 h-4 mr-2" />
                            Guía Actualizada 2026
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                            Cómo Salir de DICOM en Chile
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                            Guía completa sobre deudas, DICOM, prescripción y cómo proteger tus bienes. Conoce tus derechos y
                            opciones legales para salir de esta situación.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <Clock className="h-6 w-6 text-green-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">5 años</div>
                                    <div className="text-sm text-slate-400">Prescripción deudas</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <Shield className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">50%</div>
                                    <div className="text-sm text-slate-400">Máx. embargo sueldo</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <Calendar className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">7 días</div>
                                    <div className="text-sm text-slate-400">Eliminación DICOM</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4 text-center">
                                    <Zap className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">Gratis</div>
                                    <div className="text-sm text-slate-400">Asesoría IA 24/7</div>
                                </CardContent>
                            </Card>
                        </div>

                        <Link href="/">
                            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                                <MessageCircle className="h-5 w-5 mr-2" />
                                Consultar Abogado IA Gratis
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="container max-w-4xl mx-auto px-4">
                    {/* Prescripción de Deudas */}
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader className="border-b border-white/10">
                            <CardTitle className="text-xl text-white flex items-center">
                                <Clock className="h-5 w-5 mr-2 text-green-400" />
                                Prescripción de Deudas en Chile
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-slate-300 mb-6">
                                La prescripción extingue la obligación de pagar después de cierto tiempo sin que el acreedor haya
                                ejercido acciones legales:
                            </p>

                            <div className="overflow-x-auto mb-6">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left py-3 px-4 text-green-400">Tipo de Deuda</th>
                                            <th className="text-left py-3 px-4 text-green-400">Plazo Prescripción</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-300">
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4">Deudas bancarias, créditos, tarjetas</td>
                                            <td className="py-3 px-4 font-bold text-white">5 años</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4">Deudas tributarias (normal)</td>
                                            <td className="py-3 px-4 font-bold text-white">3 años</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4">Deudas tributarias (evasión)</td>
                                            <td className="py-3 px-4 font-bold text-white">6 años</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4">Cheques protestados</td>
                                            <td className="py-3 px-4 font-bold text-white">1 año</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4">Pagarés</td>
                                            <td className="py-3 px-4 font-bold text-white">1 año</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4">Letras de cambio</td>
                                            <td className="py-3 px-4 font-bold text-white">1 año</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Alert className="bg-amber-500/10 border-amber-500/20 text-amber-200">
                                <AlertTriangle className="h-4 w-4" />
                                <AlertDescription>
                                    <strong>Importante:</strong> La prescripción se <strong>interrumpe</strong> si el acreedor interpone
                                    demanda judicial o si reconoces la deuda por escrito. El plazo vuelve a comenzar desde cero.
                                </AlertDescription>
                            </Alert>
                        </CardContent>
                    </Card>

                    {/* Bienes Inembargables */}
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader className="border-b border-white/10">
                            <CardTitle className="text-xl text-white flex items-center">
                                <Shield className="h-5 w-5 mr-2 text-blue-400" />
                                Bienes que NO Pueden Embargarte
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-slate-300 mb-6">
                                La ley protege ciertos bienes que son considerados esenciales para la vida digna:
                            </p>

                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    "Lecho del deudor y su familia",
                                    "Ropa necesaria para el deudor y familia",
                                    "Herramientas de trabajo (hasta 2 UTM)",
                                    "Libros relativos a la profesión",
                                    "Alimentos para un mes",
                                    "Objetos de culto religioso",
                                    "Pensiones alimenticias recibidas",
                                    "Subsidios estatales",
                                    "Sueldo mínimo (protegido 100%)",
                                    "50% del sueldo sobre el mínimo",
                                    "Bienes de bien familiar",
                                    "Uniformes militares o policiales",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center bg-blue-500/10 p-3 rounded-lg">
                                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                                        <span className="text-sm text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Cómo salir de DICOM */}
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader className="border-b border-white/10">
                            <CardTitle className="text-xl text-white flex items-center">
                                <XCircle className="h-5 w-5 mr-2 text-red-400" />
                                Cómo Salir de DICOM
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                                    <h4 className="font-semibold text-green-400 mb-2 flex items-center">
                                        <CheckCircle className="h-4 w-4 mr-2" />
                                        Opción 1: Pagar la deuda
                                    </h4>
                                    <p className="text-sm text-slate-300">
                                        Al pagar, solicita un certificado de pago y exige la eliminación del registro. Por ley, deben
                                        eliminarte en máximo 7 días hábiles.
                                    </p>
                                </div>

                                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                                    <h4 className="font-semibold text-blue-400 mb-2 flex items-center">
                                        <Clock className="h-4 w-4 mr-2" />
                                        Opción 2: Esperar prescripción
                                    </h4>
                                    <p className="text-sm text-slate-300">
                                        Después de 5 años desde que la deuda se hizo exigible, te eliminan automáticamente de DICOM aunque
                                        no hayas pagado.
                                    </p>
                                </div>

                                <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/20">
                                    <h4 className="font-semibold text-purple-400 mb-2 flex items-center">
                                        <Scale className="h-4 w-4 mr-2" />
                                        Opción 3: Ley de Quiebras personales
                                    </h4>
                                    <p className="text-sm text-slate-300">
                                        Acude a la Superintendencia de Insolvencia para renegociar o liquidar ordenadamente. Durante el
                                        proceso estás protegido de embargos.
                                    </p>
                                </div>

                                <div className="bg-amber-500/10 p-4 rounded-lg border border-amber-500/20">
                                    <h4 className="font-semibold text-amber-400 mb-2 flex items-center">
                                        <FileText className="h-4 w-4 mr-2" />
                                        Opción 4: Negociar repactación
                                    </h4>
                                    <p className="text-sm text-slate-300">
                                        Negocia directamente con el acreedor un plan de pago o condonación parcial. Muchas instituciones
                                        prefieren recibir algo a nada.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* FAQs */}
                    <Card className="bg-white/5 border-white/10 mb-8">
                        <CardHeader className="border-b border-white/10">
                            <CardTitle className="text-xl text-white">Preguntas Frecuentes sobre Deudas y DICOM</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`faq-${index}`} className="border-white/10 px-6">
                                        <AccordionTrigger className="text-left text-white hover:text-amber-400 py-4">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-slate-300 pb-4">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Tienes dudas sobre tu situación?</h2>
                        <p className="text-slate-300 mb-6">
                            Consulta gratis con nuestro abogado virtual IA. Te orientamos sobre tus opciones legales 24/7.
                        </p>
                        <Link href="/">
                            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                                <MessageCircle className="h-5 w-5 mr-2" />
                                Consultar Abogado IA Gratis
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Schema.org */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((faq) => ({
                            "@type": "Question",
                            name: faq.q,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.a,
                            },
                        })),
                    }),
                }}
            />
        </div>
    )
}
