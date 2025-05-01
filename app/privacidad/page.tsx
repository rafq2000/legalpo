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
              <span className="font-bold">LegalPO</span>
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
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Política de Privacidad</h1>

          <div className="prose max-w-none mt-6">
            <p>Última actualización: 30 de abril de 2025</p>

            <h2>1. Introducción</h2>
            <p>
              En LegalPO, accesible desde legalpo.cl, una de nuestras principales prioridades es la privacidad de
              nuestros visitantes. Esta Política de Privacidad documenta los tipos de información que recopilamos y
              registramos y cómo la utilizamos, en cumplimiento con la Ley Nº 19.628 sobre Protección de la Vida Privada
              de Chile.
            </p>

            <h2>2. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales recogidos a través de este sitio web es LegalPO,
              con domicilio en Santiago, Chile. Para cualquier consulta relacionada con el tratamiento de sus datos
              personales, puede contactarnos a través del correo electrónico: contacto@legalpo.cl.
            </p>

            <h2>3. Información que recopilamos</h2>
            <p>
              Cuando te registras en nuestro sitio, como parte del proceso, recopilamos la información personal que nos
              proporcionas, como tu nombre y dirección de correo electrónico.
            </p>
            <p>
              Además, cuando utilizas nuestro servicio de análisis de documentos, procesamos temporalmente el contenido
              de los documentos que subes para extraer texto y realizar análisis. Este contenido no se almacena
              permanentemente en nuestros servidores y se elimina automáticamente después del procesamiento.
            </p>
            <p>
              También recopilamos información sobre tu navegación, como la dirección IP, el navegador que utilizas, las
              páginas que visitas y el tiempo que pasas en ellas, a través de cookies y tecnologías similares.
            </p>

            <h2>4. Finalidad del tratamiento</h2>
            <p>Tratamos tus datos personales con las siguientes finalidades:</p>
            <ul>
              <li>Proporcionar, operar y mantener nuestro sitio web y servicios</li>
              <li>Mejorar, personalizar y ampliar nuestro sitio web</li>
              <li>Entender y analizar cómo utilizas nuestro sitio web</li>
              <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
              <li>Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios</li>
              <li>Enviarte correos electrónicos relacionados con actualizaciones o información sobre el servicio</li>
              <li>Prevenir fraudes</li>
            </ul>

            <h2>5. Base legal para el tratamiento</h2>
            <p>
              La base legal para el tratamiento de tus datos personales es tu consentimiento, que nos otorgas al
              registrarte en nuestro sitio web, utilizar nuestros servicios o aceptar nuestra política de cookies.
            </p>
            <p>
              En algunos casos, el tratamiento de tus datos personales puede basarse en nuestro interés legítimo en
              mantener y mejorar nuestro sitio web y servicios, o en el cumplimiento de obligaciones legales.
            </p>

            <h2>6. Cookies y tecnologías similares</h2>
            <p>
              LegalPO utiliza cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos que un
              sitio o su proveedor de servicios transfiere al disco duro de tu computadora a través de tu navegador web
              (si lo permites).
            </p>
            <p>Utilizamos diferentes tipos de cookies:</p>
            <ul>
              <li>
                <strong>Cookies necesarias:</strong> Son esenciales para el funcionamiento del sitio web.
              </li>
              <li>
                <strong>Cookies de preferencias:</strong> Permiten recordar tus preferencias y personalizar tu
                experiencia.
              </li>
              <li>
                <strong>Cookies de estadísticas:</strong> Nos ayudan a entender cómo interactúan los visitantes con
                nuestro sitio web.
              </li>
              <li>
                <strong>Cookies de marketing:</strong> Se utilizan para mostrarte anuncios relevantes.
              </li>
            </ul>
            <p>
              Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se envía una
              cookie. Sin embargo, si rechazas las cookies, es posible que algunas partes de nuestro sitio web no
              funcionen correctamente.
            </p>

            <h2>7. Servicios de terceros</h2>
            <p>
              Utilizamos servicios de terceros para mejorar nuestro sitio web y servicios. Estos servicios pueden
              recopilar información sobre tu navegación y uso de nuestro sitio web.
            </p>
            <p>Los principales servicios de terceros que utilizamos son:</p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> Para analizar el tráfico y el comportamiento de los usuarios en
                nuestro sitio web.
              </li>
              <li>
                <strong>Google AdSense:</strong> Para mostrar anuncios relevantes.
              </li>
              <li>
                <strong>Supabase:</strong> Para almacenar y gestionar los datos de los usuarios.
              </li>
              <li>
                <strong>OpenAI:</strong> Para procesar y analizar documentos y consultas legales.
              </li>
            </ul>
            <p>
              Estos terceros pueden utilizar cookies, balizas web y otras tecnologías para recopilar información sobre
              tu uso de nuestro sitio y otros sitios web, incluida tu dirección IP, navegador web, páginas visitadas,
              tiempo dedicado a las páginas, enlaces en los que se hace clic y otra información de conversión.
            </p>

            <h2>8. Transferencias internacionales de datos</h2>
            <p>
              Algunos de nuestros proveedores de servicios están ubicados fuera de Chile, lo que implica una
              transferencia internacional de tus datos personales. En estos casos, nos aseguramos de que existan
              garantías adecuadas para proteger tus datos personales, como cláusulas contractuales tipo o decisiones de
              adecuación.
            </p>

            <h2>9. Conservación de datos</h2>
            <p>
              Conservamos tus datos personales durante el tiempo necesario para cumplir con las finalidades para las que
              fueron recogidos, a menos que la ley exija o permita un período de conservación más largo.
            </p>
            <p>
              En el caso de los documentos que subes para su análisis, estos se eliminan automáticamente después del
              procesamiento, a menos que nos solicites expresamente su conservación.
            </p>

            <h2>10. Tus derechos (Derechos ARCO)</h2>
            <p>
              De acuerdo con la Ley Nº 19.628 sobre Protección de la Vida Privada, tienes los siguientes derechos en
              relación con tus datos personales:
            </p>
            <ul>
              <li>
                <strong>Derecho de acceso:</strong> Tienes derecho a solicitar información sobre los datos personales
                que tenemos sobre ti.
              </li>
              <li>
                <strong>Derecho de rectificación:</strong> Tienes derecho a solicitar la corrección de datos personales
                inexactos o incompletos.
              </li>
              <li>
                <strong>Derecho de cancelación:</strong> Tienes derecho a solicitar la eliminación de tus datos
                personales.
              </li>
              <li>
                <strong>Derecho de oposición:</strong> Tienes derecho a oponerte al tratamiento de tus datos personales.
              </li>
            </ul>
            <p>
              Para ejercer estos derechos, puedes contactarnos a través del correo electrónico privacy@legalpo.cl o
              utilizar el formulario disponible en nuestro sitio web. También puedes utilizar nuestro endpoint
              /api/datos-personales para consultar, rectificar o eliminar tus datos personales.
            </p>

            <h2>11. Seguridad de los datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger tus datos personales
              contra el acceso no autorizado, la pérdida o la destrucción accidental. Estas medidas incluyen el cifrado
              de datos, el control de acceso y la formación del personal.
            </p>

            <h2>12. Cambios a esta política de privacidad</h2>
            <p>
              Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio
              publicando la nueva Política de Privacidad en esta página y, si los cambios son significativos, te
              enviaremos una notificación por correo electrónico.
            </p>

            <h2>13. Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre esta Política de Privacidad o sobre el tratamiento de tus datos
              personales, puedes contactarnos por correo electrónico a: contacto@legalpo.cl o por correo postal a:
              LegalPO, Santiago, Chile.
            </p>
            <p>
              También puedes presentar una reclamación ante la autoridad de control competente si consideras que el
              tratamiento de tus datos personales infringe la normativa aplicable.
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 LegalPO. Todos los derechos reservados.
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
