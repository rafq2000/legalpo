"use client"

import { Button } from "@/components/ui/button"
import { Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function RegisterHero() {
  return (
    <section className="py-16 bg-blue-800 text-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Crea tu cuenta gratuita y accede a todas las herramientas</h1>
          <p className="text-xl mb-8">Regístrate para acceder a todas las funcionalidades de LegalPO.</p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
              <span className="text-lg">Acceso a todas las herramientas de la plataforma</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
              <span className="text-lg">Consultas ilimitadas sobre temas legales</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
              <span className="text-lg">Soporte personalizado</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-white text-blue-800 hover:bg-blue-50 flex items-center justify-center">
              <Link href="/auth/google">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continuar con Google
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-blue-700">
              <Link href="/register">Registrarse con email</Link>
            </Button>
          </div>
        </div>

        <div className="hidden md:block">
          <Card className="bg-blue-700/50 border-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 mr-3 text-blue-300" />
                <h3 className="text-2xl font-bold">LegalPO</h3>
                <span className="ml-auto text-sm bg-green-600/70 px-3 py-1 rounded-full">Cuenta Gratuita</span>
              </div>

              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-blue-600/50 p-2 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Análisis de documentos</h4>
                    <p className="text-blue-200">Acceso ilimitado</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600/50 p-2 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Calculadoras legales</h4>
                    <p className="text-blue-200">Todas las herramientas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600/50 p-2 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Consultas personalizadas</h4>
                    <p className="text-blue-200">Respuestas claras y precisas</p>
                  </div>
                </div>
              </div>

              <p className="text-center mt-8 text-blue-200">Todas las herramientas en un solo lugar</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
