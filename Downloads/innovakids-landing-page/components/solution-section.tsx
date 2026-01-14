import { Clock } from "lucide-react"
import Image from "next/image"

export function SolutionSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            La escuela les enseña a usar el pasado.
            <br />
            Nosotros les enseñamos a <span className="text-[#4DD0E1]">crear el futuro.</span>
          </h2>

          <div className="border-l-4 border-[#4DD0E1] pl-4 sm:pl-6 md:pl-8 mt-8 sm:mt-10 md:mt-12">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 italic leading-relaxed">
              "En 2030, el 85% de los trabajos que existirán aún no han sido inventados. ¿Las habilidades que tu hijo
              está aprendiendo hoy serán relevantes mañana?"
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 mt-12 sm:mt-16 md:mt-20">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            No es un curso más.
            <br />
            Es una <span className="text-[#4DD0E1]">mentoría personalizada</span> para líderes del mañana.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="bg-[#1a2942] rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6">
              <Image
                src="/small-group-learning.jpg"
                alt="Grupos pequeños de aprendizaje personalizada"
                width={400}
                height={300}
                quality={75}
                loading="lazy"
                className="w-full h-40 sm:h-48 object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
              Atención Real, No Masas
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Grupos de Máximo 5 Alumnos. Tu hijo recibe la atención que se merece, haciendo preguntas y avanzando a su
              propio ritmo. Olvídate de las clases masivas donde nadie te escucha.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#1a2942] rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6">
              <Image
                src="/child-creating-project.jpg"
                alt="Niño creando proyectos innovadores con inteligencia artificial"
                width={400}
                height={300}
                quality={75}
                loading="lazy"
                className="w-full h-40 sm:h-48 object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
              Aprende Creando, No Memorizando
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Nuestra metodología es 100% práctica. Tu hijo construirá un portafolio de proyectos reales (desde crear
              arte con IA hasta componer música) que podrá mostrar con orgullo.
            </p>
          </div>

          <div className="text-center sm:col-span-2 md:col-span-1">
            <div className="bg-[#1a2942] rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6">
              <Image
                src="/latino-tech-instructor.jpg"
                alt="Instructor de tecnología latino inspirador enseñando IA"
                width={400}
                height={300}
                quality={75}
                loading="lazy"
                className="w-full h-40 sm:h-48 object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
              Instructores que Inspiran
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Nuestros tutores son profesionales de la tecnología y pedagogos apasionados. No solo enseñan, si no que
              inspiran y sirven de modelos a seguir.
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1a2942] to-[#0a1628] border-2 border-[#4DD0E1] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#4DD0E1]" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Horarios que se Adaptan a Ti</h3>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
              Sabemos que cada familia tiene su propia rutina. Por eso ofrecemos{" "}
              <span className="font-bold text-white">múltiples horarios disponibles</span> para que tu hijo pueda
              aprender sin interrumpir sus actividades escolares, deportivas o familiares.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#4DD0E1] font-semibold">
              Nos adaptamos al horario de tu hijo, no al revés.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
