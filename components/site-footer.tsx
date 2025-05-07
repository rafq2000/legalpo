"use client"

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
            <h3 className="font-semibold text-lg mb-4">Información Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/accidentes-transito" className="text-blue-200 hover:text-white transition-colors">
                  Accidentes de tránsito
                </Link>
              </li>
              <li>
                <Link href="/pension-alimentos" className="text-blue-200 hover:text-white transition-colors">
                  Pensión de alimentos
                </Link>
              </li>
              <li>
                <Link href="/herencias" className="text-blue-200 hover:text-white transition-colors">
                  Herencias
                </Link>
              </li>
              <li>
                <Link href="/finiquito-chile" className="text-blue-200 hover:text-white transition-colors">
                  Finiquito laboral
                </Link>
              </li>
              <li>
                <Link href="/derechos-consumidor" className="text-blue-200 hover:text-white transition-colors">
                  Derechos del consumidor
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
            <p className="text-blue-200 mt-4">
              <strong>Datos personales:</strong>{" "}
              <Link href="/privacidad" className="underline hover:text-white">
                Derechos ARCO
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-sm text-blue-300">
          <p>
            LegalPO proporciona información con fines educativos y orientativos. No constituye asesoramiento legal
            profesional.
          </p>
          <p className="mt-2">
            <button
              onClick={() => {
                // @ts-ignore
                if (typeof window !== "undefined" && window.openCookieConsent) {
                  // @ts-ignore
                  window.openCookieConsent()
                }
              }}
              className="underline hover:text-white cursor-pointer"
            >
              Configurar cookies
            </button>
          </p>
        </div>
      </div>
    </footer>
  )
}
