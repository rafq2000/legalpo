import Link from "next/link"
import { Shield, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacidadPage() {
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
          <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

          <div className="prose max-w-none">
            <p>Última actualización: 25 de marzo de 2025</p>

            <h2>1. Introducción</h2>
            <p>
              En DocuScan AI, accesible desde v0-docu-scan.vercel.app, una de nuestras principales prioridades es la
              privacidad de nuestros visitantes. Esta Política de Privacidad documenta los tipos de información que
              recopilamos y registramos y cómo la utilizamos.
            </p>

            <h2>2. Información que recopilamos</h2>
            <p>
              Cuando te registras en nuestro sitio, como parte del proceso, recopilamos la información personal que nos
              proporcionas, como tu nombre y dirección de correo electrónico.
            </p>
            <p>
              Además, cuando utilizas nuestro servicio de análisis de documentos, procesamos temporalmente el contenido
              de los documentos que subes para extraer texto y realizar análisis. Este contenido no se almacena
              permanentemente en nuestros servidores y se elimina automáticamente después del procesamiento.
            </p>

            <h2>3. Cómo utilizamos tu información</h2>
            <ul>
              <li>Proporcionar, operar y mantener nuestro sitio web</li>
              <li>Mejorar, personalizar y ampliar nuestro sitio web</li>
              <li>Entender y analizar cómo utilizas nuestro sitio web</li>
              <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
              <li>Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios</li>
              <li>Enviarte correos electrónicos relacionados con actualizaciones o información sobre el servicio</li>
              <li>Prevenir fraudes</li>
            </ul>

            <h2>4. Cookies</h2>
            <p>
              DocuScan AI utiliza cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos que
              un sitio o su proveedor de servicios transfiere al disco duro de tu computadora a través de tu navegador
              web (si lo permites).
            </p>

            <h2>5. Servicios de terceros</h2>
            <p>Podemos emplear servicios de terceros como Google Analytics y Google AdSense en nuestro sitio.</p>
            <p>
              Estos terceros pueden utilizar cookies, balizas web y otras tecnologías para recopilar información sobre
              tu uso de nuestro sitio y otros sitios web, incluida tu dirección IP, navegador web, páginas visitadas,
              tiempo dedicado a las páginas, enlaces en los que se hace clic y otra información de conversión.
            </p>

            <h2>6. Derechos GDPR</h2>
            <p>
              Si eres residente del Espacio Económico Europeo (EEE), tienes ciertos derechos de protección de datos. Nos
              esforzamos por tomar medidas razonables para permitirte corregir, modificar, eliminar o limitar el uso de
              tu información personal.
            </p>

            <h2>7. Cambios a esta política de privacidad</h2>
            <p>
              Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio
              publicando la nueva Política de Privacidad en esta página.
            </p>

            <h2>8. Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos por correo electrónico a:
              privacy@docuscan-ai.com
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
