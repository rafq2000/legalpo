import { AlertTriangle } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <div className="border-l-4 border-[#4DD0E1] pl-4 sm:pl-6 md:pl-8 mb-8 sm:mb-12 md:mb-16">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 italic leading-relaxed">
              "En 2030, el 85% de los trabajos que existirán aún no han sido inventados. ¿Las habilidades que tu hijo
              está aprendiendo hoy serán relevantes mañana?"
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-[#1a2942] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-[#2a3952]">
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#4DD0E1] flex-shrink-0 mt-1" />
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">El Riesgo de la Pasividad</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Ver videos y jugar no es suficiente. El futuro pertenece a quienes construyen y crean con herramientas
              como la IA.
            </p>
          </div>

          <div className="bg-[#1a2942] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-[#2a3952]">
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#4DD0E1] flex-shrink-0 mt-1" />
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">La Brecha de Habilidades</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              El pensamiento crítico, la resolución de problemas y la creatividad asistida por IA son las nuevas
              competencias básicas. ¿Tu hijo las está desarrollando?
            </p>
          </div>

          <div className="bg-[#1a2942] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-[#2a3952] sm:col-span-2 md:col-span-1">
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#4DD0E1] flex-shrink-0 mt-1" />
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">La Oportunidad que se Escapa</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Cada mes que pasa, miles de niños en el mundo empiezan a dominar estas herramientas. No dejes que el tuyo
              se quede atrás.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
