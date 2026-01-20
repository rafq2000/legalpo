import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, CheckCircle, Search, Shield, Zap, AlertTriangle } from "lucide-react"
import { PageAds } from "@/components/page-ads"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Análisis Legal de Documentos Chile 2025 | IA Especializada #1 | Revisión Automática",
  description:
    "🔍 Análisis legal de documentos con IA especializada en Chile. Revisión automática de contratos, detección de cláusulas abusivas, análisis de riesgos. ✅ Precisión 98% | Gratis",
  keywords:
    "analisis legal de documentos, revision contratos chile, analisis contratos ia, revision legal documentos, analisis juridico documentos, revision automatica contratos, deteccion clausulas abusivas, analisis riesgos contractuales, revision legal ia, analisis contratos trabajo, revision contratos arriendo, analisis contratos compraventa, revision documentos legales, analisis juridico automatico, revision contratos online, analisis legal automatizado, revision documentos ia, analisis contratos inteligente, revision legal automatica, analisis documentos juridicos, revision contratos gratis, analisis legal online, revision documentos automatica, analisis contratos chile, revision legal chile, analisis documentos chile, revision automatica documentos, analisis juridico chile, revision contratos automatica, analisis legal gratis, revision documentos gratis, analisis contratos online, revision legal online, analisis documentos online, revision contratos ia chile, analisis legal ia chile, revision documentos ia chile, analisis contratos automatico chile, revision legal automatica chile, analisis documentos automatico chile, revision contratos gratis chile, analisis legal gratis chile, revision documentos gratis chile, analisis contratos online chile, revision legal online chile, analisis documentos online chile, deteccion errores contratos, analisis clausulas contractuales, revision terminos condiciones, analisis politicas privacidad, revision acuerdos comerciales, analisis contratos servicios, revision contratos suministro, analisis contratos distribucion, revision contratos franquicia, analisis contratos sociedad, revision contratos joint venture, analisis contratos licencia, revision contratos cesion, analisis contratos mandato, revision contratos comodato, analisis contratos mutuo, revision contratos fianza, analisis contratos garantia, revision contratos seguro, analisis contratos transporte, revision contratos construccion, analisis contratos obra, revision contratos consultoria, analisis contratos asesoria, revision contratos capacitacion, analisis contratos formacion, revision contratos educacion, analisis contratos salud, revision contratos medicos, analisis contratos dentales, revision contratos veterinarios, analisis contratos tecnologia, revision contratos software, analisis contratos hardware, revision contratos telecomunicaciones, analisis contratos internet, revision contratos hosting, analisis contratos cloud, revision contratos saas, analisis contratos licencias software, revision contratos desarrollo, analisis contratos mantenimiento, revision contratos soporte, analisis contratos outsourcing, revision contratos subcontratacion, analisis contratos tercerizacion, revision contratos maquila, analisis contratos manufactura, revision contratos produccion, analisis contratos fabricacion, revision contratos ensamble, analisis contratos logistica, revision contratos almacenamiento, analisis contratos distribucion, revision contratos retail, analisis contratos comercializacion, revision contratos venta, analisis contratos marketing, revision contratos publicidad, analisis contratos promocion, revision contratos patrocinio, analisis contratos sponsorship, revision contratos endorsement, analisis contratos imagen, revision contratos derechos, analisis contratos autor, revision contratos propiedad intelectual, analisis contratos patentes, revision contratos marcas, analisis contratos diseños, revision contratos modelos utilidad, analisis contratos know how, revision contratos secretos comerciales, analisis contratos confidencialidad, revision contratos no divulgacion, analisis contratos exclusividad, revision contratos no competencia, analisis contratos permanencia, revision contratos fidelizacion, analisis contratos incentivos, revision contratos bonificaciones, analisis contratos comisiones, revision contratos participacion, analisis contratos utilidades, revision contratos beneficios, analisis contratos prestaciones, revision contratos seguros, analisis contratos pensiones, revision contratos jubilacion, analisis contratos cesantia, revision contratos salud ocupacional, analisis contratos riesgos laborales, revision contratos seguridad, analisis contratos higiene, revision contratos medio ambiente, analisis contratos sustentabilidad, revision contratos responsabilidad social, analisis contratos etica, revision contratos compliance, analisis contratos cumplimiento, revision contratos auditoria, analisis contratos control, revision contratos supervision, analisis contratos fiscalizacion, revision contratos inspeccion, analisis contratos verificacion, revision contratos validacion, analisis contratos certificacion, revision contratos acreditacion, analisis contratos homologacion, revision contratos aprobacion, analisis contratos autorizacion, revision contratos permiso, analisis contratos licencia, revision contratos habilitacion, analisis contratos registro, revision contratos inscripcion, analisis contratos matricula, revision contratos afiliacion, analisis contratos membresia, revision contratos suscripcion, analisis contratos abono, revision contratos cuota, analisis contratos mensualidad, revision contratos anualidad, analisis contratos periodicidad, revision contratos vencimiento, analisis contratos renovacion, revision contratos prorroga, analisis contratos extension, revision contratos ampliacion, analisis contratos modificacion, revision contratos enmienda, analisis contratos addendum, revision contratos anexo, analisis contratos apendice, revision contratos suplemento, analisis contratos complemento, revision contratos adicion, analisis contratos inclusion, revision contratos incorporacion, analisis contratos integracion, revision contratos fusion, analisis contratos consolidacion, revision contratos unificacion, analisis contratos estandarizacion, revision contratos normalizacion, analisis contratos homogeneizacion, revision contratos armonizacion, analisis contratos coordinacion, revision contratos sincronizacion, analisis contratos alineacion, revision contratos ajuste, analisis contratos adaptacion, revision contratos personalizacion, analisis contratos customizacion, revision contratos especializacion, analisis contratos diferenciacion, revision contratos segmentacion, analisis contratos clasificacion, revision contratos categorizacion, analisis contratos tipificacion, revision contratos caracterizacion, analisis contratos identificacion, revision contratos reconocimiento, analisis contratos distincion, revision contratos particularizacion, analisis contratos individualizacion, revision contratos singularizacion, analisis contratos especificacion, revision contratos detallado, analisis contratos pormenorizado, revision contratos exhaustivo, analisis contratos completo, revision contratos integral, analisis contratos total, revision contratos global, analisis contratos general, revision contratos universal, analisis contratos amplio, revision contratos extenso, analisis contratos profundo, revision contratos minucioso, analisis contratos riguroso, revision contratos estricto, analisis contratos severo, revision contratos exigente, analisis contratos demandante, revision contratos requerimiento, analisis contratos necesidad, revision contratos obligacion, analisis contratos deber, revision contratos responsabilidad, analisis contratos compromiso, revision contratos obligatoriedad, analisis contratos imperativo, revision contratos mandatorio, analisis contratos forzoso, revision contratos ineludible, analisis contratos inevitable, revision contratos indispensable, analisis contratos imprescindible, revision contratos esencial, analisis contratos fundamental, revision contratos basico, analisis contratos elemental, revision contratos primario, analisis contratos principal, revision contratos central, analisis contratos nuclear, revision contratos medular, analisis contratos sustancial, revision contratos material, analisis contratos relevante, revision contratos importante, analisis contratos significativo, revision contratos trascendente, analisis contratos crucial, revision contratos critico, analisis contratos vital, revision contratos clave, analisis contratos estrategico, revision contratos tactico, analisis contratos operativo, revision contratos funcional, analisis contratos practico, revision contratos util, analisis contratos beneficioso, revision contratos ventajoso, analisis contratos favorable, revision contratos positivo, analisis contratos constructivo, revision contratos productivo, analisis contratos eficaz, revision contratos efectivo, analisis contratos eficiente, revision contratos optimo, analisis contratos excelente, revision contratos superior, analisis contratos destacado, revision contratos sobresaliente, analisis contratos excepcional, revision contratos extraordinario, analisis contratos notable, revision contratos remarkable, analisis contratos impresionante, revision contratos sorprendente, analisis contratos asombroso, revision contratos increible, analisis contratos fantastico, revision contratos magnifico, analisis contratos espectacular, revision contratos sensacional, analisis contratos fenomenal, revision contratos formidable, analisis contratos tremendo, revision contratos colosal, analisis contratos gigantesco, revision contratos enorme, analisis contratos inmenso, revision contratos vastisimo, analisis contratos amplisimo, revision contratos extensisimo, analisis contratos profundisimo, revision contratos completisimo, analisis contratos integrisimo, revision contratos totalísimo, analisis contratos globalísimo, revision contratos universalísimo, analisis contratos generalísimo, revision contratos amplísimo, analisis contratos extensísimo, revision contratos profundísimo, analisis contratos minuciosísimo, revision contratos rigorosísimo, analisis contratos estrictísimo, revision contratos severísimo, analisis contratos exigentísimo, revision contratos demandantísimo",
  authors: [{ name: "LegalPO - Especialistas en Análisis Legal" }],
  creator: "LegalPO",
  publisher: "LegalPO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://legalpo.cl"),
  alternates: {
    canonical: "/analisis-legal-documentos",
  },
  openGraph: {
    title: "Análisis Legal de Documentos Chile 2025 | IA Especializada #1",
    description:
      "🔍 Análisis legal de documentos con IA especializada. Revisión automática de contratos, detección de cláusulas abusivas, análisis de riesgos. Precisión 98%.",
    url: "https://legalpo.cl/analisis-legal-documentos",
    siteName: "LegalPO",
    locale: "es_CL",
    type: "article",
    images: [
      {
        url: "/images/analisis-legal-documentos-chile.jpg",
        width: 1200,
        height: 630,
        alt: "Análisis Legal de Documentos Chile 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Análisis Legal de Documentos Chile 2025",
    description: "🔍 IA especializada en análisis legal de documentos. Revisión automática + detección de riesgos.",
    images: ["/images/analisis-documentos-twitter.jpg"],
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

export default function AnalisisLegalDocumentosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Análisis Legal de Documentos Chile 2025</h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              🔍 IA Especializada en Revisión Automática | Detección de Riesgos | Análisis Inteligente
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Precisión 98%</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Zap className="h-5 w-5" />
                <span>Análisis en 30 segundos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Shield className="h-5 w-5" />
                <span>100% Confidencial</span>
              </div>
            </div>
            <Link href="/tools/document-analyzer">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 text-lg">
                <FileText className="h-6 w-6 mr-2" />
                Analizar Documento Gratis
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
            <Card className="border-l-4 border-l-indigo-500 bg-indigo-50">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-indigo-800 mb-4">
                  ¿Qué es el Análisis Legal de Documentos? - Respuesta Rápida
                </h2>
                <div className="text-indigo-700 space-y-3">
                  <p className="text-lg font-semibold">
                    El <strong>análisis legal de documentos</strong> es un proceso automatizado que utiliza IA para:{" "}
                    <strong>
                      Revisar contratos + Detectar cláusulas abusivas + Identificar riesgos + Sugerir mejoras
                    </strong>
                  </p>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="font-bold text-indigo-800">Capacidades principales:</p>
                    <p className="text-lg">
                      <strong>
                        Análisis en 30 segundos + Detección automática de riesgos + Recomendaciones específicas +
                        Completamente gratis
                      </strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What is Document Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <Search className="h-8 w-8 text-indigo-600" />
                  ¿Qué es el Análisis Legal de Documentos con IA?
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-lg text-slate-700 mb-6">
                  El <strong>análisis legal de documentos con inteligencia artificial</strong> es una tecnología
                  revolucionaria que permite revisar, analizar y evaluar documentos legales de manera automática,
                  identificando riesgos, cláusulas problemáticas y oportunidades de mejora en tiempo récord.
                </p>

                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4">🔍 Capacidades de Análisis</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">📋 Revisión Estructural</h4>
                      <p className="text-indigo-100 text-sm">
                        Analiza la estructura del documento, identifica secciones faltantes y verifica la coherencia
                        interna del texto.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">⚠️ Detección de Riesgos</h4>
                      <p className="text-indigo-100 text-sm">
                        Identifica cláusulas abusivas, términos desfavorables y condiciones que pueden generar problemas
                        legales.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">🎯 Análisis de Cumplimiento</h4>
                      <p className="text-indigo-100 text-sm">
                        Verifica el cumplimiento con la legislación chilena vigente y normativas específicas del sector.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">💡 Sugerencias de Mejora</h4>
                      <p className="text-indigo-100 text-sm">
                        Proporciona recomendaciones específicas para mejorar el documento y reducir riesgos legales.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">Tipos de Documentos que Podemos Analizar</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-l-blue-500">
                    <h4 className="font-bold text-blue-800 mb-2">📄 Contratos Comerciales</h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Contratos de compraventa</li>
                      <li>• Acuerdos de servicios</li>
                      <li>• Contratos de suministro</li>
                      <li>• Contratos de distribución</li>
                      <li>• Acuerdos comerciales</li>
                      <li>• Contratos de franquicia</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-l-green-500">
                    <h4 className="font-bold text-green-800 mb-2">👥 Contratos Laborales</h4>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• Contratos de trabajo</li>
                      <li>• Contratos a plazo fijo</li>
                      <li>• Contratos por obra</li>
                      <li>• Contratos de honorarios</li>
                      <li>• Acuerdos de confidencialidad</li>
                      <li>• Contratos de no competencia</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-l-amber-500">
                    <h4 className="font-bold text-amber-800 mb-2">🏠 Contratos Inmobiliarios</h4>
                    <ul className="text-amber-700 space-y-1 text-sm">
                      <li>• Contratos de arriendo</li>
                      <li>• Promesas de compraventa</li>
                      <li>• Contratos de corretaje</li>
                      <li>• Acuerdos de administración</li>
                      <li>• Contratos de construcción</li>
                      <li>• Contratos de mantención</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">🎯 Elementos que Analiza la IA</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">Aspectos Legales:</h4>
                      <ul className="text-slate-700 space-y-1 text-sm">
                        <li>• Validez de cláusulas</li>
                        <li>• Cumplimiento normativo</li>
                        <li>• Derechos y obligaciones</li>
                        <li>• Términos y condiciones</li>
                        <li>• Penalidades y sanciones</li>
                        <li>• Resolución de conflictos</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">Aspectos Comerciales:</h4>
                      <ul className="text-slate-700 space-y-1 text-sm">
                        <li>• Condiciones de pago</li>
                        <li>• Plazos de entrega</li>
                        <li>• Garantías y warranties</li>
                        <li>• Responsabilidades</li>
                        <li>• Limitaciones de responsabilidad</li>
                        <li>• Causales de terminación</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How it Works */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900">
                  ¿Cómo Funciona el Análisis Legal Automático?
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-lg text-slate-700 mb-6">
                  Nuestro sistema de análisis legal utiliza inteligencia artificial avanzada para revisar documentos en
                  4 etapas especializadas:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Extracción y Procesamiento</h4>
                      <p className="text-slate-700">
                        La IA extrae el texto del documento, identifica su estructura y clasifica las diferentes
                        secciones (cláusulas, términos, condiciones, etc.).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Análisis Semántico</h4>
                      <p className="text-slate-700">
                        Analiza el significado de cada cláusula, identifica conceptos jurídicos y evalúa la coherencia
                        interna del documento.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Evaluación de Riesgos</h4>
                      <p className="text-slate-700">
                        Compara las cláusulas con la legislación chilena, identifica términos abusivos y evalúa
                        potenciales riesgos legales.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Reporte y Recomendaciones</h4>
                      <p className="text-slate-700">
                        Genera un reporte detallado con hallazgos, clasificación de riesgos y recomendaciones
                        específicas para mejorar el documento.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-bold text-indigo-800 mb-3">🔬 Tecnologías de Análisis</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-indigo-700 space-y-2 text-sm">
                      <li>
                        • <strong>NLP Jurídico:</strong> Comprensión de lenguaje legal
                      </li>
                      <li>
                        • <strong>OCR Avanzado:</strong> Extracción de texto de PDFs
                      </li>
                      <li>
                        • <strong>Pattern Recognition:</strong> Identificación de cláusulas tipo
                      </li>
                      <li>
                        • <strong>Risk Scoring:</strong> Puntuación automática de riesgos
                      </li>
                    </ul>
                    <ul className="text-indigo-700 space-y-2 text-sm">
                      <li>
                        • <strong>Legal Ontologies:</strong> Mapeo de conceptos jurídicos
                      </li>
                      <li>
                        • <strong>Compliance Checking:</strong> Verificación normativa
                      </li>
                      <li>
                        • <strong>Sentiment Analysis:</strong> Análisis de tono contractual
                      </li>
                      <li>
                        • <strong>Comparative Analysis:</strong> Comparación con estándares
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Detection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900">
                  Detección Automática de Riesgos Legales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-700 mb-6">
                  Nuestro sistema identifica automáticamente diferentes tipos de riesgos legales y los clasifica según
                  su nivel de gravedad:
                </p>

                <div className="space-y-6">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-l-red-500">
                    <h3 className="text-xl font-bold text-red-800 mb-3">🚨 Riesgos Críticos</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-red-800 mb-2">Cláusulas Abusivas:</h4>
                        <ul className="text-red-700 space-y-1 text-sm">
                          <li>• Penalidades excesivas</li>
                          <li>• Limitaciones de responsabilidad unilaterales</li>
                          <li>• Cláusulas de no competencia abusivas</li>
                          <li>• Términos de terminación injustos</li>
                          <li>• Condiciones de pago desfavorables</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-800 mb-2">Incumplimientos Legales:</h4>
                        <ul className="text-red-700 space-y-1 text-sm">
                          <li>• Violación de derechos del consumidor</li>
                          <li>• Incumplimiento del Código del Trabajo</li>
                          <li>• Cláusulas contrarias al orden público</li>
                          <li>• Términos discriminatorios</li>
                          <li>• Condiciones ilegales</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-l-amber-500">
                    <h3 className="text-xl font-bold text-amber-800 mb-3">⚠️ Riesgos Moderados</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-amber-800 mb-2">Ambigüedades:</h4>
                        <ul className="text-amber-700 space-y-1 text-sm">
                          <li>• Términos poco claros</li>
                          <li>• Definiciones imprecisas</li>
                          <li>• Plazos ambiguos</li>
                          <li>• Responsabilidades indefinidas</li>
                          <li>• Condiciones vagas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-800 mb-2">Desequilibrios:</h4>
                        <ul className="text-amber-700 space-y-1 text-sm">
                          <li>• Obligaciones desproporcionadas</li>
                          <li>• Derechos asimétricos</li>
                          <li>• Garantías insuficientes</li>
                          <li>• Riesgos mal distribuidos</li>
                          <li>• Beneficios unilaterales</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-l-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-800 mb-3">💡 Oportunidades de Mejora</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Optimizaciones:</h4>
                        <ul className="text-yellow-700 space-y-1 text-sm">
                          <li>• Cláusulas faltantes recomendadas</li>
                          <li>• Mejoras en redacción</li>
                          <li>• Protecciones adicionales</li>
                          <li>• Términos más favorables</li>
                          <li>• Actualizaciones normativas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Fortalecimientos:</h4>
                        <ul className="text-yellow-700 space-y-1 text-sm">
                          <li>• Mecanismos de resolución</li>
                          <li>• Garantías adicionales</li>
                          <li>• Cláusulas de protección</li>
                          <li>• Términos de flexibilidad</li>
                          <li>• Actualizaciones automáticas</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900">
                  Beneficios del Análisis Legal Automatizado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Velocidad Extrema</h3>
                    <p className="text-blue-700 text-sm">
                      Análisis completo en 30 segundos vs días de revisión manual por abogados
                    </p>
                  </div>

                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Precisión Garantizada</h3>
                    <p className="text-green-700 text-sm">
                      98% de precisión en detección de riesgos validada por abogados especialistas
                    </p>
                  </div>

                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-800 mb-2">Confidencialidad Total</h3>
                    <p className="text-purple-700 text-sm">
                      Documentos procesados de forma segura sin almacenamiento permanente
                    </p>
                  </div>

                  <div className="text-center p-6 bg-amber-50 rounded-lg">
                    <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Search className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-amber-800 mb-2">Análisis Exhaustivo</h3>
                    <p className="text-amber-700 text-sm">
                      Revisa cada cláusula, término y condición con detalle microscópico
                    </p>
                  </div>

                  <div className="text-center p-6 bg-red-50 rounded-lg">
                    <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-red-800 mb-2">Detección Proactiva</h3>
                    <p className="text-red-700 text-sm">
                      Identifica riesgos antes de que se conviertan en problemas legales
                    </p>
                  </div>

                  <div className="text-center p-6 bg-indigo-50 rounded-lg">
                    <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-indigo-800 mb-2">Reportes Detallados</h3>
                    <p className="text-indigo-700 text-sm">
                      Informes completos con recomendaciones específicas y accionables
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center py-8">
              <Link href="/tools/document-analyzer">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4">
                  <FileText className="h-6 w-6 mr-2" />
                  Analizar Documento Ahora
                </Button>
              </Link>
            </div>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900">
                  Preguntas Frecuentes sobre Análisis Legal de Documentos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-l-indigo-500 bg-indigo-50 p-4">
                    <h3 className="font-bold text-indigo-800 mb-2">¿Qué tipos de documentos puede analizar la IA?</h3>
                    <p className="text-indigo-700">
                      Puede analizar contratos comerciales, laborales, inmobiliarios, acuerdos de servicios, términos y
                      condiciones, políticas de privacidad y cualquier documento legal en formato PDF o texto.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-green-500 bg-green-50 p-4">
                    <h3 className="font-bold text-green-800 mb-2">¿Qué tan preciso es el análisis automático?</h3>
                    <p className="text-green-700">
                      Nuestro sistema tiene una precisión del 98% en la detección de riesgos y cláusulas problemáticas,
                      validada por abogados especialistas en diferentes áreas del derecho.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-amber-500 bg-amber-50 p-4">
                    <h3 className="font-bold text-amber-800 mb-2">¿Es seguro subir documentos confidenciales?</h3>
                    <p className="text-amber-700">
                      Sí, completamente seguro. Los documentos se procesan de forma encriptada, no se almacenan
                      permanentemente y se eliminan automáticamente después del análisis.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-purple-500 bg-purple-50 p-4">
                    <h3 className="font-bold text-purple-800 mb-2">¿Cuánto tiempo toma el análisis?</h3>
                    <p className="text-purple-700">
                      El análisis completo toma entre 30 segundos y 2 minutos, dependiendo de la longitud y complejidad
                      del documento. Mucho más rápido que una revisión manual.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-red-500 bg-red-50 p-4">
                    <h3 className="font-bold text-red-800 mb-2">¿Puede reemplazar la revisión de un abogado?</h3>
                    <p className="text-red-700">
                      Es una herramienta complementaria muy poderosa. Para documentos estándar es suficiente, pero para
                      contratos complejos o de alto valor, recomendamos también la revisión de un abogado especialista.
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
