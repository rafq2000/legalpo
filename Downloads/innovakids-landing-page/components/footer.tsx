import { Button } from "@/components/ui/button"
import { Sparkles, MapPin, Phone, Instagram, Mail, Clock, ArrowRight, Shield, Award } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Transition from dark to cyan */}
      <div className="h-32 bg-gradient-to-b from-[#030712] to-[#0a1628]" />

      {/* Main Footer */}
      <div className="bg-gradient-to-b from-[#0a1628] to-[#4DD0E1] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Trust Badges Row */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 pb-8 border-b border-white/10">
              {[
                { icon: Shield, text: "Pago 100% Seguro" },
                { icon: Award, text: "Certificación Incluida" },
                { icon: Sparkles, text: "Garantía 10 Días" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <badge.icon className="w-4 h-4 text-[#4DD0E1]" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Brand Column */}
              <div className="text-center md:text-left md:col-span-1">
                <div className="mb-6 inline-flex items-center gap-2 text-2xl font-bold font-premium">
                  <Sparkles className="h-6 w-6 text-[#0a1628]" />
                  <span className="text-[#0a1628]">Innovakids</span>
                </div>
                <p className="mb-6 text-sm text-[#0a1628]/80">
                  Preparando a la próxima generación de innovadores digitales en toda Latinoamérica
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#0a1628] text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#0a1628]/90 rounded-full group cursor-pointer"
                >
                  <a href="/#sesion-estrategica">
                    Comienza Hoy
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                {/* Social Links */}
                <div className="mt-6 flex justify-center md:justify-start gap-4">
                  <a
                    href="https://instagram.com/innovakidslatam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0a1628]/10 flex items-center justify-center hover:bg-[#0a1628]/20 transition-colors group"
                  >
                    <Instagram className="w-5 h-5 text-[#0a1628] group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Explora Column (SEO Magnet) */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold mb-4 text-[#0a1628] font-premium">Explora</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/cursos-online-para-ninos" className="text-[#0a1628]/80 hover:text-[#0a1628] hover:underline transition-colors text-sm flex items-center gap-2">
                      <ArrowRight className="w-3 h-3" /> Cursos Online para Niños
                    </a>
                  </li>
                  <li>
                    <a href="/#metodologia" className="text-[#0a1628]/80 hover:text-[#0a1628] hover:underline transition-colors text-sm flex items-center gap-2">
                      <ArrowRight className="w-3 h-3" /> Metodología
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-[#0a1628]/80 hover:text-[#0a1628] hover:underline transition-colors text-sm flex items-center gap-2">
                      <ArrowRight className="w-3 h-3" /> Blog Educativo
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold mb-4 text-[#0a1628] font-premium">Contacto</h3>

                <a
                  href="https://maps.google.com/?q=Diagonal+Oriente+1620+Providencia+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#0a1628]/80 hover:text-[#0a1628] transition-colors group text-sm"
                >
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p>Diagonal Oriente 1620, Providencia, Chile</p>
                </a>

                <a
                  href="tel:+56964754219"
                  className="flex items-center gap-3 text-[#0a1628]/80 hover:text-[#0a1628] transition-colors group text-sm"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+56 9 6475 4219</span>
                </a>

                <a
                  href="mailto:innovakidslatam@gmail.com"
                  className="flex items-center gap-3 text-[#0a1628]/80 hover:text-[#0a1628] transition-colors group text-sm"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>innovakidslatam@gmail.com</span>
                </a>
              </div>

              {/* Countries Served - Now with Links */}
              <div className="md:col-span-1">
                <h3 className="text-lg font-bold mb-4 text-[#0a1628] font-premium">InnovaKids en tu País</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { flag: "🇨🇱", name: "Chile", slug: "/cl" },
                    { flag: "🇲🇽", name: "México", slug: "/mx" },
                    { flag: "🇨🇴", name: "Colombia", slug: "/co" },
                    { flag: "🇦🇷", name: "Argentina", slug: "/ar" },
                    { flag: "🇵🇪", name: "Perú", slug: "/pe" },
                    { flag: "🇪🇸", name: "España", slug: "/es" },
                    { flag: "🇺🇸", name: "USA", slug: "/us" },
                    { flag: "🇪🇨", name: "Ecuador", slug: "/ec" },
                    { flag: "🇺🇾", name: "Uruguay", slug: "/uy" },
                    { flag: "🇨🇷", name: "Costa Rica", slug: "/cr" },
                  ].map((country, i) => (
                    <a
                      key={i}
                      href={country.slug}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0a1628]/10 text-[#0a1628] text-xs font-medium hover:bg-[#0a1628] hover:text-[#4DD0E1] transition-all transform hover:-translate-y-1"
                    >
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                    </a>
                  ))}
                  <a href="/gq" className="hidden">Guinea Ecuatorial</a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#0a1628]/20 pt-8">
              <p className="text-xs text-[#0a1628]/60 text-center mb-4">
                © 2026 Innovakids. Todos los derechos reservados. <span className="opacity-50 ml-1">v2.1 Global Edition</span>
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-xs text-[#0a1628]/80">
                <a href="/terminos" className="hover:text-[#0a1628] hover:underline">
                  Términos y Condiciones
                </a>
                <a href="/privacidad" className="hover:text-[#0a1628] hover:underline">
                  Política de Privacidad
                </a>
                <a href="/#contacto" className="hover:text-[#0a1628] hover:underline">
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
