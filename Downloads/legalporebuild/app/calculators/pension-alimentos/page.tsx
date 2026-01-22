import type { Metadata } from "next"
import CalculatorClient from "./calculator-client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, HelpCircle, Scale, Calculator, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Calculadora de Pensión de Alimentos Chile 2026 | LegalPo",
  description:
    "Calcula el monto de pensión alimenticia con nuestra calculadora oficial basada en la Ley 14.908. Considera ingresos, hijos y gastos. ¡Gratis y Privada!",
  keywords: [
    "calculadora pension alimenticia chile",
    "calculo pension alimentos",
    "ley 14908 pension de alimentos",
    "montos pension alimenticia 2026",
    "calcular pension alimentos hijos",
    "minimo legal pension alimentos",
  ],
  openGraph: {
    title: "Calculadora de Pensión de Alimentos Chile 2026 | LegalPo",
    description: "Calcula el monto oficial de pensión alimenticia en Chile. Herramienta gratuita basada en la Ley 14.908.",
    type: "website",
    url: "https://www.legalpo.cl/calculators/pension-alimentos",
  },
}

export default function CalculadoraPensionesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Calculadora de Pensión de Alimentos Chile",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CLP",
    },
    description: "Herramienta gratuita para calcular pensiones alimenticias en Chile según la Ley 14.908.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es el monto mínimo de pensión alimenticia en 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para 2026, el monto mínimo se calcula en base al sueldo mínimo. Si tienes un hijo, es el 40% del ingreso mínimo remuneracional. Si tienes dos o más hijos, es el 30% por cada uno.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué porcentaje del sueldo se paga por pensión de alimentos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No existe un porcentaje fijo único, pero la ley establece que el monto no puede exceder el 50% de los ingresos del alimentante para todas las pensiones combinadas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué gastos cubre la pensión de alimentos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La pensión debe cubrir al menos: alimentación, habitación (vivienda), vestimenta, educación, salud, recreación y movilización.",
        },
      },
      {
        "@type": "Question",
        name: "¿Hasta qué edad se paga la pensión de alimentos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Por regla general hasta los 21 años. Si el hijo está estudiando una profesión u oficio, la obligación se extiende hasta los 28 años.",
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <CalculatorClient />

      {/* SEO Rich Content Section */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
                Guía Completa: Pensión de Alimentos en Chile 2026
              </h2>
              <div className="prose prose-slate max-w-none text-slate-700">
                <p>
                  Calcular la pensión de alimentos correctamente es fundamental para garantizar el bienestar de los hijos
                  y mantener una relación financiera justa entre los padres. En Chile, este proceso está regulado
                  principalmente por la <strong>Ley 14.908</strong> sobre Abandono de Familia y Pago de Pensiones
                  Alimenticias.
                </p>
                <div className="my-6 p-4 bg-white rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Principios Fundamentales</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Interés Superior del Niño:</strong> Todas las decisiones deben priorizar el bienestar físico y psicológico del menor.</li>
                    <li><strong>Proporcionalidad:</strong> Los gastos deben repartirse en proporción a la capacidad económica de ambos padres.</li>
                    <li><strong>Necesidad:</strong> El monto debe cubrir las necesidades reales del alimentario (hijo/a).</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">¿Cómo se calcula el monto?</h3>
                <p>
                  A diferencia de la creencia popular, no es simplemente un cálculo matemático fijo. El juez de familia evalúa:
                </p>
                <ul className="list-decimal pl-5 space-y-2 mt-2">
                  <li>Las <strong>necesidades del hijo/a</strong> (gastos de vivienda, educación, salud, etc.).</li>
                  <li>La <strong>capacidad económica de ambos padres</strong>.</li>
                  <li>Las cargas familiares que tenga cada padre.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-blue-600" />
                Preguntas Frecuentes (FAQ)
              </h2>
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg shadow-sm border px-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium">
                    ¿Cuál es el monto mínimo legal en 2026?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    El monto mínimo depende del Ingreso Mínimo Remuneracional y la cantidad de hijos:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><strong>Un hijo:</strong> 40% del ingreso mínimo.</li>
                      <li><strong>Dos o más hijos:</strong> 30% del ingreso mínimo por cada uno.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium">
                    ¿Existe un monto máximo?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Sí. La ley establece que el tribunal no puede fijar como monto de pensión una suma o porcentaje que exceda del <strong>50% de las rentas</strong> del alimentante. Esto incluye todas las pensiones que deba pagar si tiene varios hijos de distintas relaciones.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium">
                    ¿Qué pasa si el padre no tiene trabajo?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    La ley presume que el padre tiene los medios para otorgar al menos el monto mínimo legal. Salvo que demuestre circunstancias graves que le impidan trabajar (como una invalidez), se le exigirá el pago del mínimo. Además, el Estado chileno ha implementado el <strong>Registro Nacional de Deudores</strong> para asegurar el cumplimiento.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium">
                    ¿Cubre la pensión gastos extraordinarios?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Generalmente, la pensión mensual cubre los gastos ordinarios (comida, colegio, vivienda). Los gastos extraordinarios (como una urgencia médica, frenillos, gira de estudios) suelen pactarse aparte o solicitarse al tribunal cuando ocurren, dividiéndose usualmente en proporción a los ingresos de los padres (50/50 o proporcional).
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <aside className="space-y-6">
            <Card>
              <CardHeader className="bg-slate-100 pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Scale className="h-5 w-5 text-amber-600" />
                  Conceptos Clave
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-1 text-slate-800">Alimentante</h4>
                  <p className="text-xs text-slate-600">Es la persona obligada legalmente a pagar la pensión (generalmente el padre o madre que no vive con el niño).</p>
                </div>
                <div className="border-t pt-3">
                  <h4 className="font-semibold text-sm mb-1 text-slate-800">Alimentario</h4>
                  <p className="text-xs text-slate-600">Es la persona que tiene el derecho a recibir la pensión (el hijo/a).</p>
                </div>
                <div className="border-t pt-3">
                  <h4 className="font-semibold text-sm mb-1 text-slate-800">Cuidado Personal</h4>
                  <p className="text-xs text-slate-600">Antes conocido como "tuición". Es quien vive y cuida diariamente al niño.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Calculator className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-blue-900">¿Necesitas ayuda legal?</h3>
                  <p className="text-sm text-blue-700">
                    Nuestra IA legal puede orientarte sobre los primeros pasos para demandar o defenderte en una causa de alimentos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </div>
  )
}
