import { ArrowLeft, Shield, Eye, Database, Cookie, Mail, Clock, FileText, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PoliticasPrivacidad() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-amber-400" />
              <h1 className="text-xl font-bold">Políticas de Privacidad</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Introducción */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-400" />
                Introducción
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>
                En LegalPO, valoramos y respetamos tu privacidad. Esta Política de Privacidad describe cómo recopilamos,
                usamos, almacenamos y protegemos tu información personal cuando utilizas nuestra plataforma legal
                inteligente.
              </p>
              <p>
                Esta política cumple con la Ley N° 19.628 sobre Protección de la Vida Privada de Chile y las mejores
                prácticas internacionales de protección de datos.
              </p>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                <p className="text-amber-300 text-sm">
                  <strong>Última actualización:</strong> Enero 2025
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Información que Recopilamos */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-green-400" />
                Información que Recopilamos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <div>
                <h3 className="font-semibold text-white mb-2">Información Proporcionada Voluntariamente:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Consultas legales realizadas en el chat</li>
                  <li>Datos ingresados en calculadoras legales</li>
                  <li>Información de contacto (si decides proporcionarla)</li>
                  <li>Documentos subidos para análisis (si utilizas esta función)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Información Recopilada Automáticamente:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Dirección IP y ubicación aproximada</li>
                  <li>Tipo de navegador y dispositivo</li>
                  <li>Páginas visitadas y tiempo de permanencia</li>
                  <li>Fecha y hora de acceso</li>
                  <li>Cookies y tecnologías similares</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Uso de la Información */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-400" />
                Uso de la Información
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>Utilizamos tu información para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Proporcionar servicios legales:</strong> Responder consultas y generar cálculos legales
                  precisos
                </li>
                <li>
                  <strong>Mejorar la plataforma:</strong> Analizar patrones de uso para optimizar nuestros servicios
                </li>
                <li>
                  <strong>Personalizar experiencia:</strong> Adaptar contenido relevante según tus consultas
                </li>
                <li>
                  <strong>Seguridad:</strong> Detectar y prevenir actividades fraudulentas o maliciosas
                </li>
                <li>
                  <strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales y regulatorias
                </li>
                <li>
                  <strong>Comunicación:</strong> Enviarte actualizaciones importantes sobre el servicio (solo si lo
                  autorizas)
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-orange-400" />
                Cookies y Tecnologías Similares
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>Utilizamos cookies para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico de la plataforma
                </li>
                <li>
                  <strong>Cookies de rendimiento:</strong> Nos ayudan a entender cómo interactúas con nuestro sitio
                </li>
                <li>
                  <strong>Cookies de funcionalidad:</strong> Recuerdan tus preferencias y configuraciones
                </li>
                <li>
                  <strong>Cookies publicitarias:</strong> Para mostrar anuncios relevantes (Google AdSense)
                </li>
              </ul>
              <p className="text-sm">
                Puedes gestionar las cookies desde la configuración de tu navegador. Ten en cuenta que deshabilitar
                ciertas cookies puede afectar la funcionalidad del sitio.
              </p>
            </CardContent>
          </Card>

          {/* Compartir Información */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-red-400" />
                Compartir Información con Terceros
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>
                <strong>No vendemos ni alquilamos tu información personal.</strong> Podemos compartir información
                limitada en las siguientes circunstancias:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Proveedores de servicios:</strong> OpenAI (para procesamiento de consultas), Google (AdSense,
                  Analytics)
                </li>
                <li>
                  <strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o autoridades competentes
                </li>
                <li>
                  <strong>Protección de derechos:</strong> Para proteger nuestros derechos legales o los de terceros
                </li>
                <li>
                  <strong>Emergencias:</strong> Para proteger la seguridad de usuarios o del público
                </li>
              </ul>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-blue-300 text-sm">
                  Todos nuestros proveedores están sujetos a estrictos acuerdos de confidencialidad y protección de
                  datos.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Retención de Datos */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-yellow-400" />
                Retención de Datos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Consultas del chat:</strong> Se almacenan por 12 meses para mejorar el servicio, luego se
                  anonimizan
                </li>
                <li>
                  <strong>Datos de calculadoras:</strong> Se procesan en tiempo real y no se almacenan permanentemente
                </li>
                <li>
                  <strong>Logs del sistema:</strong> Se conservan por 6 meses para seguridad y diagnóstico
                </li>
                <li>
                  <strong>Cookies:</strong> Según la configuración específica de cada tipo (desde sesión hasta 2 años)
                </li>
                <li>
                  <strong>Documentos subidos:</strong> Se eliminan automáticamente después de 24 horas del análisis
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seguridad */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                Seguridad de la Información
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>Implementamos múltiples medidas de seguridad:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Cifrado:</strong> Todas las comunicaciones utilizan HTTPS/TLS
                </li>
                <li>
                  <strong>Acceso restringido:</strong> Solo personal autorizado puede acceder a datos sensibles
                </li>
                <li>
                  <strong>Monitoreo:</strong> Supervisión continua de actividades sospechosas
                </li>
                <li>
                  <strong>Actualizaciones:</strong> Mantenimiento regular de sistemas de seguridad
                </li>
                <li>
                  <strong>Anonimización:</strong> Los datos se anonimizan cuando es posible
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Derechos del Usuario */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
                Tus Derechos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>Según la Ley 19.628 de Chile, tienes derecho a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Acceso:</strong> Solicitar información sobre qué datos personales tenemos sobre ti
                </li>
                <li>
                  <strong>Rectificación:</strong> Corregir datos inexactos o incompletos
                </li>
                <li>
                  <strong>Eliminación:</strong> Solicitar la eliminación de tus datos personales
                </li>
                <li>
                  <strong>Oposición:</strong> Oponerte al procesamiento de tus datos para ciertos fines
                </li>
                <li>
                  <strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado
                </li>
              </ul>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <p className="text-green-300 text-sm">
                  Para ejercer estos derechos, contáctanos en: <strong>privacidad@legalpo.cl</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                Contacto y Consultas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>
                Si tienes preguntas sobre esta Política de Privacidad o sobre el tratamiento de tus datos personales,
                puedes contactarnos:
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4 space-y-2">
                <p>
                  <strong>Email:</strong> privacidad@legalpo.cl
                </p>
                <p>
                  <strong>Teléfono:</strong> +56 9 1234 5678
                </p>
                <p>
                  <strong>Dirección:</strong> Santiago, Chile
                </p>
              </div>
              <p className="text-sm">
                Nos comprometemos a responder a tus consultas dentro de 30 días hábiles, conforme a la legislación
                chilena.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
