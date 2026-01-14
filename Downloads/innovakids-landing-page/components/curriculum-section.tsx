"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2 } from "lucide-react"

const curriculum = [
  {
    title: "Clase 1 — Exploradores de la IA",
    description: "Qué es la IA, dónde la vemos y cómo cambia nuestras vidas.",
    activities: ["Conversación guiada con IA", "Juego '¿IA o humano?'"],
  },
  {
    title: "Clase 2 — El Prompt Perfecto",
    description:
      "Cómo pedir bien para que la IA te entienda. Aprende la estructura: Contexto + Rol + Objetivo + Formato + Ejemplo.",
    activities: ["Crear tu prompt maestro personal", "Tarjeta del Prompt Perfecto"],
  },
  {
    title: "Clase 3 — Voces y Personajes que Hablan",
    description: "IA que habla, entonación, emoción. Crean personaje con voz.",
    activities: ["Mensaje de presentación animado"],
  },
  {
    title: "Clase 4 — Música con IA",
    description: "Ritmo + estilo + letra. Herramientas: Suno / Udio.",
    activities: ["Crear canción corta (30-45s)"],
  },
  {
    title: "Clase 5 — Cómics e Historias Visuales con IA",
    description: "Storytelling, secuencias e imágenes coherentes.",
    activities: ["Cómic de 1 página"],
  },
  {
    title: "Clase 6 — Videos con IA + Creación del Avatar Digital",
    description: "Crean avatar digital o personaje estilo cartoon. Le dan voz y movimiento.",
    activities: ["Video personaje-presentación (10-20 segundos)"],
  },
  {
    title: "Clase 7 — Vibe Coding: Programación de Apps, Web y Juegos",
    description:
      "Aprende a programar aplicaciones móviles, páginas web y videojuegos usando IA como tu copiloto de código. Crea tus propios proyectos sin necesidad de ser experto en programación.",
    activities: [
      "Crear un mini juego interactivo con IA",
      "Diseñar y programar tu página web personalizada",
      "Desarrollar una aplicación móvil básica guiada por IA",
    ],
  },
  {
    title: "Clase 8 — Estudio con IA: Tu Tutor Personalizado",
    description:
      "Convierte la IA en tu tutor personal. Aprende técnicas de estudio inteligentes, genera resúmenes automáticos, crea flashcards y prepara tus pruebas de forma más eficiente.",
    activities: [
      "Configurar tu asistente de estudio con IA",
      "Generar resúmenes automáticos y flashcards",
      "Crear un plan de estudio personalizado e inteligente",
    ],
  },
  {
    title: "Clase 9 — Ética con IA: Sesgos, Fake News y Riesgos Digitales",
    description:
      "Aprende a detectar noticias falsas, deepfakes y sesgos algorítmicos. Desarrolla pensamiento crítico para un uso seguro, ético y responsable de la IA. Conoce los riesgos digitales y cómo protegerte.",
    activities: [
      "Juego detector: ¿Real o Fake?",
      "Identificar sesgos en respuestas de IA",
      "Crear tu código personal de ética digital",
    ],
  },
  {
    title: "Clase 10 — Proyecto Final: Mi Creación con IA",
    description:
      "Cada estudiante elige su proyecto final: Video, Cómic, Canción, App o Presentación. Se presenta al grupo y se celebra la graduación con certificado.",
    activities: ["Desarrollo y presentación de proyecto final", "Ceremonia de graduación y entrega de certificados"],
  },
]

export function CurriculumSection() {
  return (
    <section id="temario" className="bg-background py-20 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold text-white md:text-5xl">Temario del Curso</h2>
          <p className="text-pretty text-lg leading-relaxed text-gray-300">
            10 clases estructuradas que llevan a los niños desde los conceptos básicos hasta proyectos avanzados
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {curriculum.map((lesson, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="overflow-hidden rounded-xl border-2 border-white/10 bg-[#0f2744] shadow-lg px-6 transition-all data-[state=open]:border-[#4DD0E1] data-[state=open]:shadow-xl data-[state=open]:shadow-[#4DD0E1]/20"
              >
                <AccordionTrigger className="py-6 text-left hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4DD0E1] text-base font-bold text-[#0a1628] shadow-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white pr-4">{lesson.title}</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-16">
                  <p className="mb-4 leading-relaxed text-gray-300 text-base">{lesson.description}</p>
                  <div className="space-y-2">
                    {lesson.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#4DD0E1] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-gray-200">{activity}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
