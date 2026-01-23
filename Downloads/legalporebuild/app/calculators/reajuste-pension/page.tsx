import type { Metadata } from "next"
import ReajustePensionClient from "./reajuste-client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, HelpCircle, Scale, TrendingUp, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Calculadora Reajuste Pensión Alimentos Chile 2026 | IPC y UTM",
    description:
        "Calcula fácilmente el reajuste de la pensión de alimentos por IPC anual o semestral, o convierte el monto a UTM. Herramienta gratuita y actualizada 2026.",
    keywords: [
        "calculadora reajuste pension alimentos",
        "reajuste ipc pension alimentos",
        "calcular alza pension",
        "conversion pension pesos a utm",
        "variacion ipc chile pension",
        "calcular pension alimentos 2026",
    ],
    openGraph: {
        title: "Calculadora Reajuste Pensión Alimentos Chile 2026",
        description: "Herramienta para calcular el aumento de la pensión de alimentos según IPC o UTM.",
        type: "website",
        url: "https://www.legalpo.cl/calculators/reajuste-pension",
    },
}

export default function ReajustePensionPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Calculadora de Reajuste de Pensión de Alimentos",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "CLP",
        },
        description: "Herramienta para calcular el reajuste de pensiones alimenticias según IPC o UTM en Chile.",
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "¿Cuándo se debe reajustar la pensión de alimentos?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depende de lo que diga la sentencia o acuerdo. Generalmente es cada 6 o 12 meses si está en pesos (según IPC), o mensualmente de forma automática si está fijada en UTM.",
                },
            },
            {
                "@type": "Question",
                name: "¿Cómo se calcula el reajuste por IPC?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se toma el monto actual de la pensión y se le suma el porcentaje de variación del IPC acumulado en el período (semestral o anual). La calculadora del INE entrega este porcentaje.",
                },
            },
            {
                "@type": "Question",
                name: "¿Es obligatorio pasar la pensión a UTM?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Desde la entrada en vigencia de la Ley de Responsabilidad Parental (Nov 2021), los tribunales deben fijar las pensiones en UTM para asegurar su reajustabilidad automática. Si tu pensión es antigua y está en pesos, puedes solicitar al tribunal la conversión.",
                },
            },
        ],
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <main className="container mx-auto px-4 py-12 max-w-6xl">
                <ReajustePensionClient />

                {/* SEO Rich Content Section */}
                <section className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <BookOpen className="h-6 w-6 text-blue-600" />
                                Guía de Reajuste de Pensiones 2026
                            </h2>
                            <div className="prose prose-slate max-w-none text-slate-700">
                                <p>
                                    Mantener el valor adquisitivo de la pensión de alimentos es un derecho del niño, niña o adolescente.
                                    En Chile, debido a la inflación, $100.000 de hace un año no compran lo mismo hoy. Por eso existe
                                    el mecanismo de <strong>reajuste</strong>.
                                </p>

                                <div className="my-6 p-4 bg-white rounded-lg border shadow-sm border-l-4 border-l-blue-500">
                                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                                        <TrendingUp className="h-5 w-5 text-blue-600" />
                                        ¿En Pesos o en UTM?
                                    </h3>
                                    <p className="mb-2">
                                        <strong>En Pesos:</strong> Requiere cálculo manual. Se reajusta típicamente cada 6 o 12 meses según el IPC (Índice de Precios al Consumidor).
                                    </p>
                                    <p>
                                        <strong>En UTM:</strong> Es el sistema moderno. Se reajusta <em>automáticamente</em> mes a mes. Si la UTM sube, la pensión sube.
                                    </p>
                                </div>

                                <h3 className="text-xl font-semibold mt-6 mb-3">Paso a Paso para el Reajuste</h3>
                                <ol className="list-decimal pl-5 space-y-2 mt-2">
                                    <li>Revisa tu sentencia, mediación o escritura pública.</li>
                                    <li>Identifica la cláusula de reajuste (¿Semestral? ¿Anual? ¿Cada Enero y Julio?).</li>
                                    <li>Busca la variación del IPC en la página del INE para ese período.</li>
                                    <li>Aplica el porcentaje al monto actual (Suma: Monto Actual + % Variación).</li>
                                    <li>Informa al alimentante del nuevo monto (idealmente por escrito).</li>
                                </ol>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <HelpCircle className="h-6 w-6 text-blue-600" />
                                Preguntas Frecuentes sobre Reajuste
                            </h2>
                            <Accordion type="single" collapsible className="w-full bg-white rounded-lg shadow-sm border px-4">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-medium">
                                        ¿Qué pasa si el alimentante se niega a pagar el reajuste?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Se genera una deuda de alimentos. Puedes solicitar al tribunal una "Liquidación de Deuda", donde el tribunal calculará oficialmente cuánto se debe, incluyendo los reajustes no pagados.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-medium">
                                        ¿Cómo convierto mi pensión a UTM?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Debes solicitarlo al Tribunal de Familia mediante un trámite simple. Actualmente, la ley favorece esta conversión para proteger el monto contra la inflación sin necesidad de cálculos manuales constantes.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-medium">
                                        ¿El IPC puede ser negativo?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Técnicamente el IPC puede bajar, pero legalmente la pensión de alimentos <strong>no puede disminuir</strong> su valor nominal por reajuste negativo, ya que está establecida en beneficio del menor. Solo se aplica cuando la variación es positiva.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <aside className="space-y-6">
                        <Card className="bg-amber-50 border-amber-200">
                            <CardContent className="pt-6">
                                <div className="flex gap-3">
                                    <AlertCircle className="h-6 w-6 text-amber-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-amber-900 mb-1">Dato Importante</h4>
                                        <p className="text-sm text-amber-800">
                                            Desde noviembre de 2021, todas las nuevas pensiones (y las que soliciten conversión) se fijan en <strong>UTM</strong> para garantizar su reajuste automático.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="bg-slate-100 pb-3">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Scale className="h-5 w-5 text-slate-600" />
                                    Glosario
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4 space-y-4">
                                <div>
                                    <h4 className="font-semibold text-sm mb-1 text-slate-800">IPC (Índice de Precios al Consumidor)</h4>
                                    <p className="text-xs text-slate-600">Es el indicador que mide la inflación en Chile. Refleja cuánto han subido los precios de la canasta básica.</p>
                                </div>
                                <div className="border-t pt-3">
                                    <h4 className="font-semibold text-sm mb-1 text-slate-800">UTM (Unidad Tributaria Mensual)</h4>
                                    <p className="text-xs text-slate-600">Unidad económica que se usa para multas y pagos legales. Se actualiza mensualmente por el IPC.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </aside>
                </section>
            </main>
        </div>
    )
}
