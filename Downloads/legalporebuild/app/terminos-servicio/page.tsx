import { ArrowLeft, FileText, AlertTriangle, Scale, Shield, Clock, Users, Gavel, Eye, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TerminosServicio() {
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
              <FileText className="h-6 w-6 text-amber-400" />
              <h1 className="text-xl font-bold">Términos de Servicio</h1>
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
                <Scale className="h-5 w-5 text-blue-400" />
                Términos y Condiciones de Uso
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>
                Bienvenido a LegalPO. Estos Términos de Servicio ("Términos") rigen el uso de nuestra plataforma legal
                inteligente y todos los servicios relacionados. Al acceder o utilizar LegalPO, aceptas estar sujeto a
                estos términos.
              </p>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-red-300 text-sm">
                  <strong>IMPORTANTE:</strong> LegalPO proporciona información educativa y no constituye asesoría legal
                  profesional. Para casos específicos, siempre consulta con un abogado calificado.
                </p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                <p className="text-amber-300 text-sm">
                  <strong>Última actualización:</strong> Enero 2025
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Definiciones */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-400" />
                Definiciones
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <ul className="space-y-3">
                <li>
                  <strong className="text-white">"LegalPO" o "Plataforma":</strong> Se refiere al sitio web, aplicación
                  y todos los servicios proporcionados por nuestra empresa.
                </li>
                <li>
                  <strong className="text-white">"Usuario":</strong> Cualquier persona que accede o utiliza la
                  plataforma.
                </li>
                <li>
                  <strong className="text-white">"Servicios":</strong> Incluye el chat legal, calculadoras, herramientas
                  de análisis y cualquier funcionalidad disponible.
                </li>
                <li>
                  <strong className="text-white">"Contenido":</strong> Toda información, texto, datos, software,
                  gráficos y otros materiales disponibles en la plataforma.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Naturaleza del Servicio */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
                Naturaleza del Servicio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-amber-300 mb-2">AVISO LEGAL FUNDAMENTAL</h3>
                <ul className="space-y-2 text-sm">
                  <li>• LegalPO NO es un despacho de abogados</li>
                  <li>• NO proporcionamos asesoría legal profesional</li>
                  <li>• La información es únicamente educativa e informativa</li>
                  <li>• NO se crea relación abogado-cliente</li>
                  <li>• Los cálculos son estimativos y pueden variar</li>
                </ul>
              </div>
              <p>
                Nuestra plataforma utiliza inteligencia artificial para proporcionar información legal general basada en
                la normativa chilena vigente. Esta información debe ser verificada con un profesional del derecho para
                casos específicos.
              </p>
            </CardContent>
          </Card>

          {/* Uso Aceptable */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-400" />
                Uso Aceptable
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <div>
                <h3 className="font-semibold text-white mb-2">Está permitido:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Realizar consultas legales generales</li>
                  <li>Utilizar calculadoras para estimaciones</li>
                  <li>Compartir información no confidencial</li>
                  <li>Acceder desde cualquier dispositivo</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Está prohibido:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Usar la plataforma para actividades ilegales</li>
                  <li>Intentar vulnerar la seguridad del sistema</li>
                  <li>Compartir información falsa o engañosa</li>
                  <li>Realizar ingeniería inversa del software</li>
                  <li>Sobrecargar los servidores con solicitudes automatizadas</li>
                  <li>Violar derechos de propiedad intelectual</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitaciones de Responsabilidad */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-400" />
                Limitaciones de Responsabilidad
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-red-300 mb-2">EXENCIÓN DE RESPONSABILIDAD</h3>
                <p className="text-sm text-red-200">
                  LegalPO no se hace responsable por decisiones tomadas basándose en la información proporcionada por la
                  plataforma. El usuario asume toda responsabilidad por el uso de la información.
                </p>
              </div>
              <ul className="space-y-2">
                <li>
                  <strong>Exactitud:</strong> No garantizamos la exactitud absoluta de la información, aunque nos
                  esforzamos por mantenerla actualizada.
                </li>
                <li>
                  <strong>Disponibilidad:</strong> El servicio puede experimentar interrupciones por mantenimiento o
                  causas técnicas.
                </li>
                <li>
                  <strong>Resultados:</strong> Los cálculos son estimativos y pueden diferir de resultados reales.
                </li>
                <li>
                  <strong>Terceros:</strong> No somos responsables por servicios o contenido de terceros enlazados.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Propiedad Intelectual */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-400" />
                Propiedad Intelectual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <ul className="space-y-3">
                <li>
                  <strong className="text-white">Contenido de LegalPO:</strong> Todos los textos, diseños, logos,
                  software y metodologías son propiedad de LegalPO o sus licenciantes.
                </li>
                <li>
                  <strong className="text-white">Contenido del Usuario:</strong> Mantienes los derechos sobre el
                  contenido que proporcionas, pero nos otorgas licencia para procesarlo y mejorarlo.
                </li>
                <li>
                  <strong className="text-white">Uso Permitido:</strong> Puedes usar la información para fines
                  personales y no comerciales.
                </li>
                <li>
                  <strong className="text-white">Restricciones:</strong> No puedes reproducir, distribuir o crear obras
                  derivadas sin autorización.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Privacidad y Datos */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                Privacidad y Protección de Datos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>
                El tratamiento de tus datos personales se rige por nuestra{" "}
                <Link href="/politicas-privacidad" className="text-amber-400 hover:underline">
                  Política de Privacidad
                </Link>
                , que cumple con la Ley N° 19.628 de Chile.
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Recopilación:</strong> Solo recopilamos datos necesarios para proporcionar el servicio.
                </li>
                <li>
                  <strong>Uso:</strong> Utilizamos la información para mejorar la plataforma y proporcionar respuestas
                  relevantes.
                </li>
                <li>
                  <strong>Seguridad:</strong> Implementamos medidas técnicas y organizativas para proteger tus datos.
                </li>
                <li>
                  <strong>Derechos:</strong> Puedes acceder, rectificar o eliminar tus datos contactándonos.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Modificaciones */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-yellow-400" />
                Modificaciones de los Términos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán
                en vigor inmediatamente después de su publicación en la plataforma.
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Notificación:</strong> Te notificaremos sobre cambios significativos a través de la
                  plataforma.
                </li>
                <li>
                  <strong>Aceptación:</strong> El uso continuado de la plataforma constituye aceptación de los nuevos
                  términos.
                </li>
                <li>
                  <strong>Desacuerdo:</strong> Si no estás de acuerdo con las modificaciones, debes dejar de usar la
                  plataforma.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Terminación */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gavel className="h-5 w-5 text-red-400" />
                Terminación del Servicio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <ul className="space-y-3">
                <li>
                  <strong className="text-white">Por tu parte:</strong> Puedes dejar de usar la plataforma en cualquier
                  momento.
                </li>
                <li>
                  <strong className="text-white">Por nuestra parte:</strong> Podemos suspender o terminar el acceso por
                  violación de estos términos.
                </li>
                <li>
                  <strong className="text-white">Efectos:</strong> Al terminar, cesarán todos los derechos y
                  obligaciones, excepto aquellos que por su naturaleza deban sobrevivir.
                </li>
                <li>
                  <strong className="text-white">Datos:</strong> Podemos conservar cierta información según nuestra
                  Política de Privacidad y obligaciones legales.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Ley Aplicable */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-purple-400" />
                Ley Aplicable y Jurisdicción
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <ul className="space-y-2">
                <li>
                  <strong className="text-white">Ley aplicable:</strong> Estos términos se rigen por las leyes de la
                  República de Chile.
                </li>
                <li>
                  <strong className="text-white">Jurisdicción:</strong> Los tribunales de Santiago, Chile, tendrán
                  jurisdicción exclusiva para resolver disputas.
                </li>
                <li>
                  <strong className="text-white">Idioma:</strong> En caso de conflicto entre versiones en diferentes
                  idiomas, prevalecerá la versión en español.
                </li>
                <li>
                  <strong className="text-white">Mediación:</strong> Antes de iniciar acciones legales, las partes
                  intentarán resolver disputas mediante mediación.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                Contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>Si tienes preguntas sobre estos Términos de Servicio o necesitas aclaraciones, puedes contactarnos:</p>
              <div className="bg-slate-700/50 rounded-lg p-4 space-y-2">
                <p>
                  <strong>Email:</strong> legal@legalpo.cl
                </p>
                <p>
                  <strong>Teléfono:</strong> +56 9 1234 5678
                </p>
                <p>
                  <strong>Dirección:</strong> Santiago, Chile
                </p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <p className="text-green-300 text-sm">
                  <strong>Tiempo de respuesta:</strong> Nos comprometemos a responder dentro de 48 horas hábiles.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
