import Link from "next/link"
import { Shield } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6" />
              <span className="font-bold text-xl">LegalPO</span>
            </div>
            <p className="text-blue-200 mb-4">
              Herramientas legales con inteligencia artificial para simplificar tus consultas jurídicas en Chile.
            </p>
            <p className="text-sm text-blue-300">
              © {new Date().getFullYear()} LegalPO. Todos los derechos reservados.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Herramientas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/analyze" className="text-blue-200 hover:text-white transition-colors">
                  Análisis de documentos
                </Link>
              </li>
              <li>
                <Link href="/calculadora-finiquito" className="text-blue-200 hover:text-white transition-colors">
                  Calculadora de finiquito
                </Link>
              </li>
              <li>
                <Link href="/calculadora-pensiones" className="text-blue-200 hover:text-white transition-colors">
                  Calculadora de pensiones
                </Link>
              </li>
              <li>
                <Link href="/dudas-laborales" className="text-blue-200 hover:text-white transition-colors">
                  Consultas laborales
                </Link>
              </li>
              <li>
                <Link href="/ask" className="text-blue-200 hover:text-white transition-colors">
                  Consultas sobre deudas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Información</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quienes-somos" className="text-blue-200 hover:text-white transition-colors">
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="text-blue-200 hover:text-white transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="/caracteristicas" className="text-blue-200 hover:text-white transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-blue-200 hover:text-white transition-colors">
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-blue-200 hover:text-white transition-colors">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <p className="text-blue-200 mb-2">¿Tienes alguna pregunta o sugerencia?</p>
            <p className="text-blue-200 mb-4">Contáctanos a través de WhatsApp o correo electrónico.</p>
            <p className="text-blue-200">
              <strong>Email:</strong> contacto@legalpo.cl
            </p>
            <p className="text-blue-200">
              <strong>WhatsApp:</strong> +56 9 6145 8118
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-sm text-blue-300">
          <p>
            LegalPO proporciona información con fines educativos y orientativos. No constituye asesoramiento legal
            profesional.
          </p>
        </div>
      </div>
    </footer>
  )
}
