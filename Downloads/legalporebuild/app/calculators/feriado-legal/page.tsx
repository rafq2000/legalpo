import type { Metadata } from "next"
import FeriadoLegalClient from "./feriado-client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Calendar, Briefcase } from "lucide-react"

export const metadata: Metadata = {
    title: "Calculadora Feriado Legal Proporcional Chile 2026 | Vacaciones Finiquito",
    description:
        "Calcula cuánto te deben pagar por vacaciones pendientes (feriado legal proporcional) al renunciar o ser despedido. Herramienta precisa y gratuita.",
    keywords: [
        "calculadora feriado legal",
        "calculo vacaciones proporcionales",
        "calculadora finiquito vacaciones",
        "pago vacaciones renuncia chile",
        "feriado proporcional codigo trabajo",
    ],
    openGraph: {
        title: "Calculadora Pago de Vacaciones (Feriado Legal) Chile",
        description: "Calcula el monto exacto de tus vacaciones pendientes en el finiquito.",
        type: "website",
        url: "https://www.legalpo.cl/calculators/feriado-legal",
    },
}

export default function FeriadoLegalPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Calculadora de Feriado Legal Proporcional",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "CLP",
        },
        description: "Herramienta para calcular el pago de vacaciones proporcionales en finiquitos chilenos.",
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "¿Qué es el feriado proporcional?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el dinero que te debe pagar el empleador por los días de vacaciones que ganaste pero no alcanzaste a tomar antes de dejar el trabajo.",
                },
            },
            {
                "@type": "Question",
                name: "¿Cómo se calculan los días de vacaciones?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Por cada año trabajado tienes derecho a 15 días hábiles. Si trabajaste menos de un año (o una fracción), se calcula proporcionalmente dividiendo los días trabajados por el año.",
                },
            },
        ],
    }

    return (
        <div className="min-h-screen bg-green-50/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <main className="container mx-auto px-4 py-12 max-w-6xl">
                <FeriadoLegalClient />

                <section className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Briefcase className="h-6 w-6 text-green-700" />
                                Guía sobre el Pago de Vacaciones en Finiquito
                            </h2>
                            <div className="prose prose-slate max-w-none text-slate-700">
                                <p>
                                    Cuando terminas una relación laboral, ya sea por renuncia, despido o mutuo acuerdo, tienes derecho a recibir dinero por los días de vacaciones (feriado legal) que acumulaste y no usaste. Esto se llama <strong>Feriado Legal Proporcional</strong>.
                                </p>
                                <div className="my-4 p-4 bg-white border border-green-200 rounded-lg">
                                    <h3 className="font-semibold text-green-800 mb-2">La Regla de los 15 Días</h3>
                                    <p className="text-sm">
                                        En Chile, todo trabajador con más de un año de servicio tiene derecho a 15 días hábiles de vacaciones remuneradas (con goce de sueldo íntegro).
                                    </p>
                                </div>
                                <p>
                                    Si te despiden antes de cumplir el año, o si te sobra un "saldo" de días, ese tiempo se te debe pagar en dinero en tu finiquito.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <HelpCircle className="h-6 w-6 text-green-700" />
                                Preguntas Frecuentes
                            </h2>
                            <Accordion type="single" collapsible className="w-full bg-white rounded-lg shadow-sm border px-4">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-medium">
                                        ¿Se pagan los sábados y domingos?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Sí, indirectamente. La indemnización por feriado legal debe incluir la remuneración íntegra, lo que significa que cubre también los días inhábiles (sábados, domingos y festivos) que habrían caído dentro de tu periodo de vacaciones. Por eso el monto suele ser mayor que solo multiplicar tus días hábiles por el sueldo diario.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-medium">
                                        ¿Qué pasa si tengo más de 10 años de antigüedad?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Podrías tener derecho a días adicionales de "Feriado Progresivo". Debes sumar un día extra por cada 3 años trabajados por sobre los primeros 10 años (siempre que los últimos 3 sean con el actual empleador).
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <aside>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-green-600" />
                                ¿Sabías que?
                            </h3>
                            <p className="text-sm text-slate-600 mb-4">
                                El feriado legal no se puede compensar en dinero <strong>mientras dure el contrato</strong>. Es obligación tomarse los días. Solo se paga en dinero cuando el contrato termina.
                            </p>
                        </div>
                    </aside>
                </section>
            </main>
        </div>
    )
}
