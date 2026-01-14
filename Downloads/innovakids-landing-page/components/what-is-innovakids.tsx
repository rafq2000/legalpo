import { Sparkles, Users, Trophy, Clock } from "lucide-react"
import Image from "next/image"

export function WhatIsInnovakids() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            ¿Qué es <span className="text-[#4DD0E1]">Innovakids</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
            Somos el programa líder en educación de Inteligencia Artificial para niños de 8 a 14 años en Latinoamérica.
            Transformamos a los niños de usuarios pasivos de tecnología en{" "}
            <span className="text-white font-semibold">creadores del futuro</span>.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#1a2942] rounded-xl p-6 sm:p-8 border border-[#2a3952]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#4DD0E1]/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-[#4DD0E1]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Metodología Práctica</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  100% hands-on. Los niños aprenden creando proyectos reales desde la primera clase, no memorizando
                  teoría.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a2942] rounded-xl p-6 sm:p-8 border border-[#2a3952]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#4DD0E1]/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#4DD0E1]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Grupos Pequeños</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Máximo 5 alumnos por grupo. Atención personalizada donde cada niño recibe el apoyo que necesita.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a2942] rounded-xl p-6 sm:p-8 border border-[#2a3952]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#4DD0E1]/10 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-[#4DD0E1]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Resultados Comprobados</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Más de 500 niños graduados que ahora usan IA para destacar en sus estudios y proyectos personales.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a2942] rounded-xl p-6 sm:p-8 border border-[#2a3952]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#4DD0E1]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#4DD0E1]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Horarios Flexibles</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Múltiples horarios disponibles que se adaptan a la rutina escolar y actividades de tu hijo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1a2942] to-[#0a1628] border-2 border-[#4DD0E1] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">El Programa Acelerador de IA</h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                  5 semanas intensivas donde tu hijo dominará las herramientas de IA más importantes del mercado y
                  creará un portafolio de proyectos impresionantes.
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4DD0E1] mt-1">✓</span>
                    <span>10 clases prácticas (2 por semana)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4DD0E1] mt-1">✓</span>
                    <span>Certificado de finalización</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4DD0E1] mt-1">✓</span>
                    <span>Acceso a comunidad exclusiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4DD0E1] mt-1">✓</span>
                    <span>Soporte continuo de instructores</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 sm:h-80 md:h-full min-h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/child-creating-project.jpg"
                  alt="Niño aprendiendo inteligencia artificial con Innovakids"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
