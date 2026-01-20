import Link from "next/link"
import { Scale, Mail, Phone, MapPin, ExternalLink, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold text-white">LegalPO</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Plataforma legal inteligente que proporciona información jurídica actualizada basada en la normativa
              chilena vigente 2026.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm group">
              <MapPin className="h-4 w-4 text-emerald-500/50 group-hover:text-emerald-400 transition-colors" />
              <span>Santiago, Chile</span>
            </div>
          </div>

          {/* Herramientas */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Herramientas</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/calculators/finiquito"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Calculadora de Finiquito
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/herencia"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Calculadora de Herencia
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/pension-alimentos"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Pensión de Alimentos
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/document-analyzer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Análisis de Documentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos Legales */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Recursos Oficiales</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.dt.gob.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-1"
                >
                  Dirección del Trabajo
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tgr.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-1"
                >
                  Tesorería General
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.bcn.cl/leychile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-1"
                >
                  Ley Chile
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.spensiones.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-1"
                >
                  Superintendencia de Pensiones
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/politicas-privacidad"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Políticas de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-servicio"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Términos de Servicio
                </Link>
              </li>
            </ul>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>legal@legalpo.cl</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/56931772346" className="hover:text-emerald-400 transition-colors">+56 9 3177 2346</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-slate-500 text-sm">© 2026 LegalPO. Todos los derechos reservados.</p>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span>Hecho en Chile con amor</span>
                <Heart className="h-4 w-4 text-red-500/70 fill-current" />
              </div>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg px-4 py-2 hover:bg-amber-500/10 transition-colors">
              <p className="text-amber-400/80 text-xs font-medium">
                ⚠️ AVISO: Esta plataforma proporciona información educativa. No constituye asesoría legal profesional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
