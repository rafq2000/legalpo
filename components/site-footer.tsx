"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Shield, Mail, Phone, MessageSquare, FileText, Calculator, HelpCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"

export function SiteFooter() {
  const [question, setQuestion] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim() || !email.trim()) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulamos el envío (en producción, esto se conectaría a una API real)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      })
      setQuestion("")
      setEmail("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <h3 className="font-semibold text-lg mb-4 border-b border-blue-800 pb-2">Herramientas</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-blue-300" />
                <Link href="/analyze" className="text-blue-200 hover:text-white transition-colors">
                  Análisis de documentos
                </Link>
              </li>
              <li className="flex items-center">
                <Calculator className="h-4 w-4 mr-2 text-blue-300" />
                <Link href="/calculadora-finiquito" className="text-blue-200 hover:text-white transition-colors">
                  Calculadora de finiquito
                </Link>
              </li>
              <li className="flex items-center">
                <Calculator className="h-4 w-4 mr-2 text-blue-300" />
                <Link href="/calculadora-pensiones" className="text-blue-200 hover:text-white transition-colors">
                  Calculadora de pensiones
                </Link>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2 text-blue-300" />
                <Link href="/dudas-laborales" className="text-blue-200 hover:text-white transition-colors">
                  Consultas laborales
                </Link>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2 text-blue-300" />
                <Link href="/ask" className="text-blue-200 hover:text-white transition-colors">
                  Consultas sobre deudas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 border-b border-blue-800 pb-2">Información Legal</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Link
                  href="/accidentes-transito"
                  className="text-blue-200 hover:text-white transition-colors group flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                  Accidentes de tránsito
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/pension-alimentos"
                  className="text-blue-200 hover:text-white transition-colors group flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                  Pensión de alimentos
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/herencias"
                  className="text-blue-200 hover:text-white transition-colors group flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                  Herencias
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/finiquito-chile"
                  className="text-blue-200 hover:text-white transition-colors group flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                  Finiquito laboral
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/derechos-consumidor"
                  className="text-blue-200 hover:text-white transition-colors group flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                  Derechos del consumidor
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/consulta-deudas"
                  className="text-blue-200 hover:text-white transition-colors group flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                  Consulta de deudas
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/consulta-familia"
                  className="text-blue-200 hover:text-white transition-colors group flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                  Derecho de familia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 border-b border-blue-800 pb-2">Contacto</h3>
            <Card className="bg-blue-800 border-blue-700 shadow-lg">
              <CardContent className="p-4">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <h4 className="font-medium text-white mb-2 flex items-center">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Preguntas y sugerencias
                  </h4>
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="bg-blue-700 border-blue-600 text-white placeholder:text-blue-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder="Escribe tu pregunta o sugerencia"
                    className="bg-blue-700 border-blue-600 text-white placeholder:text-blue-300 min-h-[80px]"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-4 space-y-2">
              <p className="flex items-center text-blue-200">
                <Mail className="h-4 w-4 mr-2" />
                <strong>Email:</strong>{" "}
                <a href="mailto:contacto@legalpo.cl" className="ml-1 hover:text-white">
                  contacto@legalpo.cl
                </a>
              </p>
              <p className="flex items-center text-blue-200">
                <Phone className="h-4 w-4 mr-2" />
                <strong>WhatsApp:</strong>{" "}
                <a href="https://wa.me/56961458118" className="ml-1 hover:text-white">
                  +56 9 6145 8118
                </a>
              </p>
            </div>

            <div className="mt-4 space-y-2">
              <Link href="/terminos" className="text-blue-200 hover:text-white transition-colors block">
                Términos y condiciones
              </Link>
              <Link href="/privacidad" className="text-blue-200 hover:text-white transition-colors block">
                Política de privacidad
              </Link>
              <Link href="/acerca" className="text-blue-200 hover:text-white transition-colors block">
                Acerca de nosotros
              </Link>
            </div>
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
