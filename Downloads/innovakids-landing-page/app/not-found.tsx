import Link from "next/link"
import { Home, Search, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 text-[150px] md:text-[200px] font-black text-cyan-400/10 blur-2xl leading-none select-none">
            404
          </div>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Página no encontrada</h2>

        <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida. Pero no te preocupes, te ayudamos a encontrar lo
          que necesitas.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link href="/">
            <Button
              variant="outline"
              className="w-full h-auto py-4 border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all group bg-transparent"
            >
              <Home className="h-5 w-5 mr-3 text-cyan-400" />
              <div className="text-left">
                <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Ir al Inicio</div>
                <div className="text-xs text-gray-500">Página principal</div>
              </div>
            </Button>
          </Link>

          <Link href="/#programa">
            <Button
              variant="outline"
              className="w-full h-auto py-4 border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all group bg-transparent"
            >
              <Search className="h-5 w-5 mr-3 text-cyan-400" />
              <div className="text-left">
                <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  Ver el Programa
                </div>
                <div className="text-xs text-gray-500">Cursos de IA para niños</div>
              </div>
            </Button>
          </Link>
        </div>

        {/* Country Pages */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Busca tu país</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { code: "mx", name: "México" },
              { code: "co", name: "Colombia" },
              { code: "ar", name: "Argentina" },
              { code: "pe", name: "Perú" },
              { code: "cl", name: "Chile" },
              { code: "es", name: "España" },
              { code: "us", name: "USA" },
              { code: "ec", name: "Ecuador" },
            ].map((country) => (
              <Link
                key={country.code}
                href={`/${country.code}`}
                className="px-3 py-1.5 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium transition-colors"
              >
                {country.name}
              </Link>
            ))}
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-gray-400">¿Necesitas ayuda?</span>
          <a
            href="https://wa.me/56964754219?text=Hola%20InnovaKids%2C%20necesito%20ayuda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              Escríbenos por WhatsApp
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </a>
        </div>

        {/* SEO Content */}
        <div className="mt-12 text-xs text-gray-600">
          <p>
            InnovaKids - Cursos de Inteligencia Artificial para Niños y Adolescentes | El curso #1 en Latinoamérica y
            España
          </p>
        </div>
      </div>
    </div>
  )
}
