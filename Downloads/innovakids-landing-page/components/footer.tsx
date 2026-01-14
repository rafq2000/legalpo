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

            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Brand Column */}
              <div className="text-center md:text-left">
                <div className="mb-6 inline-flex items-center gap-2 text-2xl font-bold font-premium">
                  <Sparkles className="h-6 w-6 text-[#0a1628]" />
                  <span className="text-[#0a1628]">Innovakids</span>
                </div>
                <p className="mb-6 text-lg text-[#0a1628]/80">
                  Preparando a la próxima generación de innovadores digitales en toda Latinoamérica
                </p>
                <Button
                  size="lg"
                  className="h-14 bg-[#0a1628] px-8 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#0a1628]/90 rounded-full group"
                >
                  Comienza Hoy Mismo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

              {/* Contact Column */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-6 text-[#0a1628] font-premium">Contacto</h3>

                <a
                  href="https://maps.google.com/?q=Diagonal+Oriente+1620+Providencia+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#0a1628]/80 hover:text-[#0a1628] transition-colors group"
                >
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p>Diagonal Oriente 1620, Providencia, Chile</p>
                </a>

                <a
                  href="tel:+56964754219"
                  className="flex items-center gap-3 text-[#0a1628]/80 hover:text-[#0a1628] transition-colors group"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+56 9 6475 4219</span>
                </a>

                <a
                  href="mailto:innovakidslatam@gmail.com"
                  className="flex items-center gap-3 text-[#0a1628]/80 hover:text-[#0a1628] transition-colors group"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>innovakidslatam@gmail.com</span>
                </a>

                <div className="flex items-start gap-3 text-[#0a1628]/80">
                  <Clock className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Lun-Sáb: 08:00-20:00</p>
                </div>
              </div>

              {/* Countries Served */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#0a1628] font-premium">Servimos en</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { flag: "🇨🇱", name: "Chile" },
                    { flag: "🇲🇽", name: "México" },
                    { flag: "🇨🇴", name: "Colombia" },
                    { flag: "🇦🇷", name: "Argentina" },
                    { flag: "🇵🇪", name: "Perú" },
                    { flag: "🇪🇨", name: "Ecuador" },
                    { flag: "🇺🇾", name: "Uruguay" },
                    { flag: "🇨🇷", name: "Costa Rica" },
                    { flag: "🇵🇦", name: "Panamá" },
                    { flag: "🇪🇸", name: "España" },
                  ].map((country, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0a1628]/10 text-[#0a1628] text-sm hover:bg-[#0a1628]/20 transition-colors cursor-default"
                    >
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#0a1628]/20 pt-8">
              <p className="text-sm text-[#0a1628]/60 text-center mb-4">
                © 2026 Innovakids. Todos los derechos reservados.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="/terminos" className="text-[#0a1628]/80 transition-colors hover:text-[#0a1628] hover:underline">
                  Términos y Condiciones
                </a>
                <a href="/privacidad" className="text-[#0a1628]/80 transition-colors hover:text-[#0a1628] hover:underline">
                  Política de Privacidad
                </a>
                <a href="/#contacto" className="text-[#0a1628]/80 transition-colors hover:text-[#0a1628] hover:underline">
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
