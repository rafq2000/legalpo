import Link from "next/link"
import { CheckCircle, Sparkles, Calendar, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Gracias por tu Inscripción | Innovakids",
  description: "Tu lugar está reservado. Prepárate para una experiencia increíble.",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Success Message */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">¡Felicitaciones! 🎉</h1>

          <p className="text-xl text-slate-300 mb-8">
            Tu lugar en Innovakids está confirmado. Recibirás un email con todos los detalles en los próximos minutos.
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Próximos Pasos:</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-slate-300">Revisa tu email (y spam) para acceder al curso</p>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-slate-300">Agenda tu primera clase en el calendario que te enviamos</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-slate-300">Prepara a tu hijo para una experiencia increíble</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
