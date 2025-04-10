import Link from "next/link"
import { Shield, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TerminosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold">DocuScan AI</span>
            </Link>
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Términos de Servicio</h1>

          <div className="prose max-w-none">
            <p>Última actualización: 25 de marzo de 2025</p>

            <h2>1. Introducción</h2>
            <p>
              Estos Términos de Servicio ("Términos") rigen tu acceso y uso de DocuScan AI (el "Servicio"), accesible
              desde v0-docu-scan.vercel.app. Al acceder o utilizar el Servicio, aceptas estar sujeto a estos Términos.
              Si no estás de acuerdo con alguna parte de los términos, no podrás acceder al Servicio.
            </p>

            <h2>2. Cuentas</h2>
            <p>
              Cuando creas una cuenta con nosotros, debes proporcionarnos información precisa, completa y actualizada en
              todo momento. El incumplimiento de esta obligación constituye un incumplimiento de los Términos, lo que
              puede resultar en la terminación inmediata de tu cuenta en nuestro Servicio.
            </p>
            <p>
              Eres responsable de salvaguardar la contraseña que utilizas para acceder al Servicio y de cualquier
              actividad o acción bajo tu contraseña.
            </p>

            <h2>3. Uso del Servicio</h2>
            <p>
              Nuestro servicio permite a los usuarios extraer texto de documentos escaneados y obtener análisis legal
              básico. Al utilizar nuestro servicio, aceptas:
            </p>
            <ul>
              <li>No utilizar el Servicio para fines ilegales o no autorizados</li>
              <li>No intentar dañar, deshabilitar o sobrecargar los servidores o redes conectadas al Servicio</li>
              <li>No intentar acceder a áreas del Servicio a las que no estás autorizado a acceder</li>
              <li>No utilizar el Servicio para distribuir material ilegal, ofensivo o dañino</li>
            </ul>

            <h2>4. Propiedad Intelectual</h2>
            <p>
              El Servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad
              exclusiva de DocuScan AI y sus licenciantes. El Servicio está protegido por derechos de autor, marcas
              registradas y otras leyes.
            </p>

            <h2>5. Limitación de Responsabilidad</h2>
            <p>
              En ningún caso DocuScan AI, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán
              responsables por cualquier daño indirecto, incidental, especial, consecuente o punitivo, incluyendo sin
              limitación, pérdida de beneficios, datos, uso, buena voluntad, u otras pérdidas intangibles, resultantes
              de:
            </p>
            <ul>
              <li>Tu acceso o uso o incapacidad para acceder o usar el Servicio</li>
              <li>Cualquier conducta o contenido de terceros en el Servicio</li>
              <li>Cualquier contenido obtenido del Servicio</li>
              <li>Acceso no autorizado, uso o alteración de tus transmisiones o contenido</li>
            </ul>

            <h2>6. Descargo de Responsabilidad</h2>
            <p>
              El análisis legal proporcionado por DocuScan AI es solo para fines informativos y no constituye
              asesoramiento legal. Siempre debes consultar con un profesional legal calificado para obtener
              asesoramiento específico para tu situación.
            </p>

            <h2>7. Cambios</h2>
            <p>
              Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en
              cualquier momento. Si una revisión es material, intentaremos proporcionar un aviso de al menos 30 días
              antes de que los nuevos términos entren en vigor.
            </p>

            <h2>8. Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre estos Términos, puedes contactarnos por correo electrónico a:
              terms@docuscan-ai.com
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 DocuScan AI. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/terminos" className="underline underline-offset-4">
              Términos
            </Link>
            <Link href="/privacidad" className="underline underline-offset-4">
              Privacidad
            </Link>
            <Link href="#" className="underline underline-offset-4">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
