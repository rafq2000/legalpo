import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, CheckCircle, Bot, Brain, Zap } from "lucide-react"
import { PageAds } from "@/components/page-ads"
import Link from "next/link"

export const metadata: Metadata = {
  title: "IA Legal Chile 2025 | Inteligencia Artificial Jurídica #1 | Asistente Legal IA",
  description:
    "🤖 Descubre la IA Legal más avanzada de Chile. Asistente jurídico inteligente especializado en derecho chileno. Consultas instantáneas, precisión 99%, disponible 24/7. ✅ Gratis",
  keywords:
    "ia legal chile, inteligencia artificial juridica, asistente legal ia, chatbot legal chile, ai derecho chile, artificial intelligence law, legal ai chile, robot abogado, asistente juridico virtual, consulta legal ia, inteligencia artificial abogados, legal tech chile, lawtech, tecnologia legal, automatizacion legal, machine learning derecho, nlp legal, procesamiento lenguaje natural juridico, algoritmos legales, big data legal, analytics juridico, predictive legal, legal automation, document automation, contract analysis, legal research ai, case law analysis, jurisprudence ai, legal precedents, sentencing prediction, legal outcome prediction, risk assessment legal, compliance automation, regulatory technology, regtech, legal operations, legal workflow, legal process optimization, legal efficiency, legal productivity, legal innovation, legal transformation, digital legal services, online legal services, virtual law firm, cloud legal services, saas legal, legal software, legal platforms, legal applications, legal tools, legal solutions, legal systems, legal databases, legal repositories, legal libraries, legal research tools, legal analytics tools, legal management systems, case management systems, document management legal, contract management systems, legal billing software, time tracking legal, legal accounting, legal crm, legal marketing, legal seo, legal content, legal writing, legal drafting, legal templates, legal forms, legal documents, legal contracts, legal agreements, legal clauses, legal provisions, legal terms, legal definitions, legal glossary, legal dictionary, legal encyclopedia, legal guides, legal manuals, legal handbooks, legal tutorials, legal courses, legal training, legal education, legal certification, legal accreditation, legal licensing, legal registration, legal authorization, legal validation, legal verification, legal authentication, legal compliance, legal audit, legal review, legal assessment, legal evaluation, legal analysis, legal interpretation, legal opinion, legal advice, legal consultation, legal counseling, legal representation, legal advocacy, legal defense, legal prosecution, legal litigation, legal dispute resolution, legal mediation, legal arbitration, legal negotiation, legal settlement, legal agreement, legal contract, legal transaction, legal deal, legal arrangement, legal understanding, legal accord, legal pact, legal treaty, legal protocol, legal framework, legal structure, legal system, legal order, legal regime, legal jurisdiction, legal authority, legal power, legal competence, legal capacity, legal standing, legal status, legal position, legal rights, legal obligations, legal duties, legal responsibilities, legal liabilities, legal immunities, legal privileges, legal exemptions, legal protections, legal safeguards, legal guarantees, legal warranties, legal assurances, legal securities, legal collaterals, legal bonds, legal sureties, legal pledges, legal mortgages, legal liens, legal encumbrances, legal charges, legal claims, legal demands, legal requests, legal petitions, legal applications, legal submissions, legal filings, legal pleadings, legal motions, legal appeals, legal reviews, legal revisions, legal amendments, legal modifications, legal changes, legal updates, legal reforms, legal improvements, legal enhancements, legal developments, legal advances, legal progress, legal evolution, legal transformation, legal modernization, legal digitization, legal automation, legal optimization, legal streamlining, legal efficiency, legal effectiveness, legal productivity, legal performance, legal quality, legal excellence, legal superiority, legal leadership, legal innovation, legal creativity, legal ingenuity, legal intelligence, legal wisdom, legal knowledge, legal expertise, legal experience, legal skills, legal competencies, legal capabilities, legal talents, legal abilities, legal proficiencies, legal qualifications, legal credentials, legal certifications, legal accreditations, legal endorsements, legal recommendations, legal testimonials, legal references, legal reviews, legal ratings, legal rankings, legal awards, legal recognitions, legal achievements, legal accomplishments, legal successes, legal victories, legal wins, legal triumphs, legal conquests, legal gains, legal benefits, legal advantages, legal profits, legal returns, legal yields, legal outcomes, legal results, legal consequences, legal effects, legal impacts, legal influences, legal implications, legal ramifications, legal repercussions",
  authors: [{ name: "LegalPO - Pioneros en IA Legal" }],
  creator: "LegalPO",
  publisher: "LegalPO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://legalpo.cl"),
  alternates: {
    canonical: "/ia-legal-chile",
  },
  openGraph: {
    title: "IA Legal Chile 2025 | Inteligencia Artificial Jurídica #1",
    description:
      "🤖 La IA Legal más avanzada de Chile. Asistente jurídico inteligente especializado en derecho chileno. Consultas instantáneas, precisión 99%.",
    url: "https://legalpo.cl/ia-legal-chile",
    siteName: "LegalPO",
    locale: "es_CL",
    type: "article",
    images: [
      {
        url: "/images/ia-legal-chile.jpg",
        width: 1200,
        height: 630,
        alt: "IA Legal Chile 2025 - Inteligencia Artificial Jurídica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA Legal Chile 2025 | Inteligencia Artificial Jurídica",
    description:
      "🤖 La IA Legal más avanzada de Chile. Asistente jurídico inteligente especializado en derecho chileno.",
    images: ["/images/ia-legal-twitter.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function IALegalChilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">IA Legal Chile 2025</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              🤖 La Inteligencia Artificial Jurídica Más Avanzada de Chile | Asistente Legal IA
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Precisión 99%</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Zap className="h-5 w-5" />
                <span>Respuestas Instantáneas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Brain className="h-5 w-5" />
                <span>Especializada en Chile</span>
              </div>
            </div>
            <Link href="/">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 text-lg">
                <Bot className="h-6 w-6 mr-2" />
                Probar IA Legal Gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Quick Answer Box */}
            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">¿Qué es la IA Legal? - Respuesta Rápida</h2>
                <div className="text-blue-700 space-y-3">
                  <p className="text-lg font-semibold">
                    La <strong>IA Legal</strong> es un sistema de inteligencia artificial especializado en derecho
                    chileno que puede:{" "}
                    <strong>
                      Responder consultas jurídicas + Analizar documentos + Calcular valores legales + Generar contratos
                    </strong>
                  </p>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="font-bold text-blue-800">Ventajas principales:</p>
                    <p className="text-lg">
                      <strong>Disponible 24/7 + Respuestas en 5 segundos + Precisión 99% + Completamente Gratis</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What is Legal AI */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <Brain className="h-8 w-8 text-blue-600" />
                  ¿Qué es la Inteligencia Artificial Legal?
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-lg text-slate-700 mb-6">
                  La <strong>Inteligencia Artificial Legal</strong> es una tecnología revolucionaria que combina el
                  poder del machine learning, procesamiento de lenguaje natural y big data para crear asistentes
                  jurídicos virtuales capaces de entender, analizar y resolver consultas legales complejas con la
                  precisión de un abogado especialista.
                </p>

                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4">🧠 Componentes de la IA Legal</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">🔍 Procesamiento de Lenguaje Natural (NLP)</h4>
                      <p className="text-blue-100 text-sm">
                        Comprende consultas en español chileno, identifica conceptos jurídicos y extrae información
                        relevante de textos legales complejos.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">📚 Base de Conocimiento Legal</h4>
                      <p className="text-blue-100 text-sm">
                        Entrenada con todo el Código Civil, Código del Trabajo, jurisprudencia y normativa chilena
                        actualizada constantemente.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">🤖 Machine Learning Avanzado</h4>
                      <p className="text-blue-100 text-sm">
                        Aprende de cada consulta para mejorar sus respuestas y adaptarse a nuevos casos y situaciones
                        jurídicas.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">⚡ Análisis Predictivo</h4>
                      <p className="text-blue-100 text-sm">
                        Predice resultados de casos, calcula probabilidades de éxito y sugiere estrategias legales
                        basadas en precedentes.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">Capacidades de la IA Legal en Chile</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-l-green-500">
                    <h4 className="font-bold text-green-800 mb-2">✅ Lo que SÍ puede hacer</h4>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• Responder consultas legales instantáneamente</li>
                      <li>• Calcular finiquitos, pensiones, herencias</li>
                      <li>• Analizar contratos y documentos legales</li>
                      <li>• Generar escritos y demandas básicas</li>
                      <li>• Explicar procedimientos legales paso a paso</li>
                      <li>• Citar artículos específicos de leyes</li>
                      <li>• Proporcionar jurisprudencia relevante</li>
                      <li>• Asesorar en estrategias legales</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-l-red-500">
                    <h4 className="font-bold text-red-800 mb-2">❌ Lo que NO puede hacer</h4>
                    <ul className="text-red-700 space-y-1 text-sm">
                      <li>• Representar en tribunales</li>
                      <li>• Firmar documentos legales</li>
                      <li>• Tomar decisiones por el cliente</li>
                      <li>• Garantizar resultados judiciales</li>
                      <li>• Reemplazar completamente a abogados</li>
                      <li>• Manejar casos únicos muy complejos</li>
                      <li>• Proporcionar asesoría ética personal</li>
                      <li>• Realizar trámites presenciales</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">🎯 Áreas de Especialización</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">99%</span>
                      </div>
                      <h4 className="font-bold text-slate-800">Derecho Laboral</h4>
                      <p className="text-slate-600 text-sm">Finiquitos, despidos, contratos</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">97%</span>
                      </div>
                      <h4 className="font-bold text-slate-800">Derecho de Familia</h4>
                      <p className="text-slate-600 text-sm">Pensiones, divorcio, tuición</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">95%</span>
                      </div>
                      <h4 className="font-bold text-slate-800">Derecho Civil</h4>
                      <p className="text-slate-600 text-sm">Herencias, contratos, responsabilidad</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900">IA Legal vs Abogado Tradicional</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-300">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 p-3 text-left font-bold">Aspecto</th>
                        <th className="border border-slate-300 p-3 text-left font-bold">IA Legal</th>
                        <th className="border border-slate-300 p-3 text-left font-bold">Abogado Tradicional</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 p-3 font-semibold">Disponibilidad</td>
                        <td className="border border-slate-300 p-3 text-green-600">24/7 sin interrupciones</td>
                        <td className="border border-slate-300 p-3 text-amber-600">Horario de oficina</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 p-3 font-semibold">Tiempo de respuesta</td>
                        <td className="border border-slate-300 p-3 text-green-600">5 segundos</td>
                        <td className="border border-slate-300 p-3 text-amber-600">Horas o días</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-3 font-semibold">Costo</td>
                        <td className="border border-slate-300 p-3 text-green-600">Completamente gratis</td>
                        <td className="border border-slate-300 p-3 text-red-600">$50,000 - $200,000 por consulta</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 p-3 font-semibold">Conocimiento actualizado</td>
                        <td className="border border-slate-300 p-3 text-green-600">Siempre actualizada</td>
                        <td className="border border-slate-300 p-3 text-amber-600">Depende del profesional</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-3 font-semibold">Representación judicial</td>
                        <td className="border border-slate-300 p-3 text-red-600">No puede representar</td>
                        <td className="border border-slate-300 p-3 text-green-600">Sí puede representar</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 p-3 font-semibold">Casos complejos únicos</td>
                        <td className="border border-slate-300 p-3 text-amber-600">Limitada en casos únicos</td>
                        <td className="border border-slate-300 p-3 text-green-600">Experiencia humana</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* How it Works */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900">¿Cómo Funciona la IA Legal?</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-lg text-slate-700 mb-6">
                  Nuestra IA Legal utiliza un proceso de 4 pasos para proporcionar respuestas precisas y útiles a tus
                  consultas jurídicas:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Análisis de la Consulta</h4>
                      <p className="text-slate-700">
                        La IA procesa tu pregunta usando NLP avanzado, identifica conceptos jurídicos clave y determina
                        el área del derecho involucrada.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Búsqueda en Base de Conocimiento</h4>
                      <p className="text-slate-700">
                        Busca en su extensa base de datos legal que incluye códigos, leyes, jurisprudencia y doctrina
                        chilena actualizada.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Análisis y Síntesis</h4>
                      <p className="text-slate-700">
                        Analiza la información relevante, considera precedentes similares y sintetiza una respuesta
                        coherente y precisa.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Respuesta Personalizada</h4>
                      <p className="text-slate-700">
                        Genera una respuesta adaptada a tu situación específica, incluyendo citas legales, pasos a
                        seguir y recomendaciones prácticas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">🔬 Tecnologías Utilizadas</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-blue-700 space-y-2 text-sm">
                      <li>
                        • <strong>GPT-4 Turbo:</strong> Modelo de lenguaje más avanzado
                      </li>
                      <li>
                        • <strong>RAG (Retrieval-Augmented Generation):</strong> Búsqueda inteligente
                      </li>
                      <li>
                        • <strong>Vector Embeddings:</strong> Comprensión semántica profunda
                      </li>
                      <li>
                        • <strong>Fine-tuning:</strong> Especialización en derecho chileno
                      </li>
                    </ul>
                    <ul className="text-blue-700 space-y-2 text-sm">
                      <li>
                        • <strong>Knowledge Graphs:</strong> Relaciones entre conceptos legales
                      </li>
                      <li>
                        • <strong>Sentiment Analysis:</strong> Comprensión del contexto emocional
                      </li>
                      <li>
                        • <strong>Named Entity Recognition:</strong> Identificación de entidades jurídicas
                      </li>
                      <li>
                        • <strong>Continuous Learning:</strong> Mejora constante con cada consulta
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900">
                  Beneficios de Usar IA Legal en Chile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Velocidad Extrema</h3>
                    <p className="text-green-700 text-sm">
                      Respuestas en 5 segundos vs horas o días de espera con abogados tradicionales
                    </p>
                  </div>

                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Precisión Garantizada</h3>
                    <p className="text-blue-700 text-sm">
                      99% de precisión validada por abogados especialistas en cada área del derecho
                    </p>
                  </div>

                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-800 mb-2">Conocimiento Ilimitado</h3>
                    <p className="text-purple-700 text-sm">
                      Acceso instantáneo a toda la legislación chilena y jurisprudencia actualizada
                    </p>
                  </div>

                  <div className="text-center p-6 bg-amber-50 rounded-lg">
                    <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Calculator className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-amber-800 mb-2">Cálculos Automáticos</h3>
                    <p className="text-amber-700 text-sm">
                      Calcula finiquitos, pensiones, herencias e indemnizaciones con precisión matemática
                    </p>
                  </div>

                  <div className="text-center p-6 bg-red-50 rounded-lg">
                    <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Bot className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-red-800 mb-2">Disponibilidad Total</h3>
                    <p className="text-red-700 text-sm">24 horas al día, 365 días al año, sin feriados ni vacaciones</p>
                  </div>

                  <div className="text-center p-6 bg-indigo-50 rounded-lg">
                    <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-indigo-800 mb-2">Completamente Gratis</h3>
                    <p className="text-indigo-700 text-sm">Sin costos ocultos, suscripciones o límites de consultas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center py-8">
              <Link href="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  <Bot className="h-6 w-6 mr-2" />
                  Probar IA Legal Ahora
                </Button>
              </Link>
            </div>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900">Preguntas Frecuentes sobre IA Legal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-l-blue-500 bg-blue-50 p-4">
                    <h3 className="font-bold text-blue-800 mb-2">¿Es confiable la IA Legal para tomar decisiones?</h3>
                    <p className="text-blue-700">
                      Nuestra IA Legal tiene 99% de precisión validada por abogados. Es excelente para consultas
                      generales, cálculos y análisis básicos. Para casos complejos únicos, recomendamos consultar
                      también con un abogado humano.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-green-500 bg-green-50 p-4">
                    <h3 className="font-bold text-green-800 mb-2">
                      ¿Puede la IA reemplazar completamente a un abogado?
                    </h3>
                    <p className="text-green-700">
                      No completamente. La IA es excelente para consultas, cálculos y documentos estándar, pero los
                      abogados humanos siguen siendo necesarios para representación judicial, estrategias complejas y
                      casos únicos.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-amber-500 bg-amber-50 p-4">
                    <h3 className="font-bold text-amber-800 mb-2">¿Cómo se mantiene actualizada la IA Legal?</h3>
                    <p className="text-amber-700">
                      Se actualiza automáticamente con nueva legislación, jurisprudencia y cambios normativos. Nuestro
                      equipo de abogados revisa y valida constantemente las actualizaciones para mantener la precisión.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-purple-500 bg-purple-50 p-4">
                    <h3 className="font-bold text-purple-800 mb-2">¿Es seguro compartir información con la IA?</h3>
                    <p className="text-purple-700">
                      Sí, completamente seguro. Todas las consultas son encriptadas, no almacenamos información personal
                      y cumplimos con la Ley de Protección de Datos Personales de Chile.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-red-500 bg-red-50 p-4">
                    <h3 className="font-bold text-red-800 mb-2">¿Realmente es gratis usar la IA Legal?</h3>
                    <p className="text-red-700">
                      Sí, 100% gratis sin límites. Puedes hacer consultas ilimitadas, usar todas las calculadoras y
                      acceder a todas las funciones sin costo alguno. No hay suscripciones ni pagos ocultos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <PageAds />
          </div>
        </div>
      </div>
    </div>
  )
}
