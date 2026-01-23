import type { Metadata } from "next"
import EmbargoClient from "./embargo-client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, HeartHandshake, ShieldCheck, CircleHelp } from "lucide-react"

export const metadata: Metadata = {
    title: "Calculadora Embargo de Sueldo Chile | Cuánto me pueden quitar",
    description:
        "Calcula el límite legal de embargo de tu sueldo en Chile (Art. 57). Herramienta gratuita para saber cuánto dinero te pueden retener por deudas.",
    keywords: [
        "calculadora embargo sueldo chile",
        "limite embargo sueldo",
        "cuanto me pueden embargar",
        "embargo 56 uf",
        "calculo retencion judicial sueldo",
    ],
    openGraph: {
        title: "Calculadora de Embargo Sueldo Chile",
        description: "¿Tienes dudas? Calcula cuánto de tu sueldo es inembargable por ley.",
        type: "website",
        url: "https://www.legalpo.cl/calculators/embargo-sueldo",
    },
}

export default function EmbargoPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Calculadora de Embargo de Sueldo",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "CLP",
        },
        description: "Herramienta para calcular los montos inembargables del sueldo según el Código del Trabajo chileno.",
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "¿Cuánto es lo máximo que me pueden embargar?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Por regla general (deudas de comercio), las remuneraciones son inembargables hasta 56 UF. Todo lo que exceda ese monto puede ser embargado.",
                },
            },
            {
                "@type": "Question",
                name: "¿Me pueden embargar el sueldo mínimo?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. El sueldo mínimo y cualquier monto bajo las 56 UF está protegido por ley contra embargos de deudas comerciales.",
                },
            },
            {
                "@type": "Question",
                name: "¿Qué pasa con la pensión de alimentos?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es la excepción. Por pensión de alimentos se puede embargar hasta el 50% de las rentas, sin aplicar el límite de las 56 UF de protección.",
                },
            },
        ],
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <main className="container mx-auto px-4 py-12 max-w-6xl">
                <EmbargoClient />

                <section className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <ShieldCheck className="h-6 w-6 text-red-600" />
                                ¿Cómo funciona el Embargo de Sueldo en Chile?
                            </h2>
                            <div className="prose prose-slate max-w-none text-slate-700">
                                <p>
                                    El miedo al embargo es común, pero la ley chilena protege el sustento del trabajador. El <strong>Artículo 57 del Código del Trabajo</strong> establece límites claros para evitar que un trabajador quede sin ingresos para vivir.
                                </p>

                                <h3 className="text-xl font-semibold mt-6 mb-3">La Regla de las 56 UF</h3>
                                <p>
                                    Para deudas comunes (créditos de consumo, retail, tarjetas), el sueldo es <strong>inembargable</strong> hasta un monto de 56 Unidades de Fomento (aprox. $2.100.000).
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-2">
                                    <li><strong>Si ganas menos de 56 UF:</strong> No te pueden tocar ni un peso.</li>
                                    <li><strong>Si ganas más de 56 UF:</strong> Solo te pueden quitar lo que sobrepase ese monto.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <CircleHelp className="h-6 w-6 text-red-600" />
                                Preguntas Frecuentes
                            </h2>
                            <Accordion type="single" collapsible className="w-full bg-white rounded-lg shadow-sm border px-4">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-medium">
                                        ¿Me tienen que avisar antes de embargar?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Sí. Debe existir un juicio ejecutivo y una orden judicial notificada a tu empleador. Tu jefe no puede retener tu sueldo "porque lo llamó el banco", debe haber una orden de un tribunal.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-medium">
                                        ¿Qué hago si me embargaron más de lo legal?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Debes contactar a un abogado urgentemente para presentar una "Tercería" o un incidente de nulidad procesal por error en el cálculo. El tribunal corregirá el monto si se prueba el error.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <aside className="space-y-6">
                        <Card className="bg-blue-50 border-blue-200">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="p-3 bg-blue-100 rounded-full">
                                        <HeartHandshake className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-blue-900">¿Deudas de Alimentos?</h3>
                                    <p className="text-sm text-blue-700">
                                        Recuerda: Si la deuda es por pensión alimenticia, estas reglas NO aplican. El juez puede ordenar retener hasta el 50% de tu sueldo.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="bg-slate-100 pb-3">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Scale className="h-5 w-5 text-slate-600" />
                                    Marco Legal
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4 text-sm text-slate-600">
                                <p>
                                    <strong>Art. 57 Código del Trabajo:</strong> "Las remuneraciones de los trabajadores... serán inembargables en lo que no exceda de cincuenta y seis unidades de fomento."
                                </p>
                            </CardContent>
                        </Card>
                    </aside>
                </section>
            </main>
        </div>
    )
}
