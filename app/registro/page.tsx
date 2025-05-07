import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RegisterHero } from "@/components/register-hero"
import { CanonicalUrl } from "@/components/canonical-url"

export const metadata: Metadata = {
  title: "Crea tu cuenta gratuita en LegalPO - Accede a todas las herramientas legales",
  description:
    "Regístrate gratis en LegalPO y obtén acceso ilimitado a análisis de documentos, calculadoras legales y consultas personalizadas sobre temas jurídicos en Chile.",
  keywords: "registro legal, cuenta gratuita, herramientas legales, asesoría jurídica, Chile, consultas legales",
  alternates: {
    canonical: "https://legalpo.cl/registro",
  },
  openGraph: {
    title: "Crea tu cuenta gratuita en LegalPO - Accede a todas las herramientas legales",
    description:
      "Regístrate gratis en LegalPO y obtén acceso ilimitado a análisis de documentos, calculadoras legales y consultas personalizadas sobre temas jurídicos en Chile.",
    url: "https://legalpo.cl/registro",
    siteName: "LegalPO",
    locale: "es_CL",
    type: "website",
  },
}

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CanonicalUrl path="/registro" />
      <SiteHeader />
      <main className="flex-1">
        <RegisterHero />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              ¿Por qué crear una cuenta en LegalPO?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">Seguridad y privacidad</h3>
                <p className="text-gray-700">
                  Tus datos están protegidos y tus consultas son confidenciales. Cumplimos con todas las normativas de
                  protección de datos.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-900">Acceso ilimitado</h3>
                <p className="text-gray-700">
                  Utiliza todas nuestras herramientas sin restricciones. Analiza documentos, realiza consultas y utiliza
                  calculadoras legales cuando lo necesites.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-900">Soporte personalizado</h3>
                <p className="text-gray-700">
                  Recibe asistencia personalizada para tus dudas legales. Nuestro equipo está disponible para ayudarte
                  con tus consultas específicas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">¿Ya tienes una cuenta?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Inicia sesión para acceder a todas las herramientas y funcionalidades
            </p>
            <div className="flex justify-center">
              <a
                href="/login"
                className="inline-flex items-center px-6 py-3 border border-blue-800 text-blue-800 bg-white rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Iniciar sesión
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
