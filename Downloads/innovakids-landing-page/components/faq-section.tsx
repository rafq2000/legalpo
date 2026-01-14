"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

const faqs = [
  {
    question: "¿Cuándo inicia el programa?",
    answer:
      "Sábado 11 de Enero, 2026 (en 4 días). Duración: 5 semanas (10 clases de 2 por semana). Termina: Mediados de Febrero 2026.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "$200 USD (precio de lanzamiento 2026). Este es un precio especial para los primeros 5 cupos del año. Incluye TODO: 10 clases, certificación, materiales, acceso de por vida, garantía. Facilidades: Pago en cuotas, anticipo de $50 USD, opciones flexibles.",
  },
  {
    question: "¿Cuántos cupos hay disponibles?",
    answer:
      "Solo 2 cupos de 20 en total. Trabajamos con grupos ultra pequeños de máximo 5 niños por clase para garantizar atención personalizada. Los cupos se asignan por orden de agendamiento de la evaluación.",
  },
  {
    question: "¿Si no alcanzo cupo, puedo esperar al siguiente grupo?",
    answer:
      "Si los 20 cupos se llenan, abriremos lista de espera para futuros grupos. En la evaluación te informaremos disponibilidad exacta y próximas fechas. Recomendación: Si tu hijo puede empezar el 17 de Enero, asegura el cupo HOY.",
  },
  {
    question: "¿Los horarios son flexibles?",
    answer:
      "Sí, 100% flexibles. Rango disponible: Lunes a Sábado, 10:00 AM - 10:00 PM (hora Chile). En la evaluación coordinamos contigo el horario que mejor funcione para tu familia. Horarios según tu país: 🇲🇽 México: 8:00 AM - 8:00 PM, 🇨🇴 Colombia/Perú: 8:00 AM - 8:00 PM, 🇦🇷 Argentina: 12:00 PM - 12:00 AM, 🇨🇱 Chile: 10:00 AM - 10:00 PM.",
  },
  {
    question: "¿Qué pasa si mi hijo no puede asistir a alguna clase?",
    answer:
      "Sin problema. Todas las clases quedan grabadas con acceso ilimitado. Tu hijo puede ver la grabación cuando quiera y hacer preguntas al profesor por el grupo privado.",
  },
  {
    question: "¿Hay garantía?",
    answer:
      "Sí, garantía total de 10 días. Si después de las primeras 2 clases no estás 100% satisfecho, te devolvemos tu dinero completo. Sin preguntas. Sin trámites complicados. Sin letra chica.",
  },
  {
    question: "¿Mi hijo no sabe nada de programación, ¿puede tomar el curso?",
    answer:
      "¡Exacto! No necesita saber nada previo. El programa está diseñado para niños de 8-14 años sin experiencia técnica. De hecho, los mejores resultados los tienen niños que empiezan desde cero.",
  },
  {
    question: "¿Mi hijo necesita conocimientos previos?",
    answer:
      "No, solo curiosidad. El programa está diseñado para principiantes totales. Comenzamos desde cero con conceptos básicos y avanzamos gradualmente. Lo único que necesita tu hijo es ganas de aprender y crear.",
  },
  {
    question: "¿Qué pasa si falta a una clase?",
    answer:
      "Todas las clases se graban y tu hijo tiene acceso de por vida. Puede ver y revisar las lecciones cuantas veces quiera, a su propio ritmo. Nunca se perderá contenido importante.",
  },
  {
    question: "¿Qué equipo necesita?",
    answer:
      "Solo un computador o tablet con internet. Todas las herramientas que usamos son gratuitas y basadas en la web. No necesitas comprar software adicional ni hardware especial.",
  },
  {
    question: "¿Cómo funcionan los grupos de 5 alumnos?",
    answer:
      "Cada grupo tiene máximo 5 estudiantes para garantizar atención personalizada. Los grupos se forman por edad y nivel, y tienen sesiones en vivo con el instructor donde pueden hacer preguntas, compartir proyectos y aprender juntos.",
  },
  {
    question: "¿Cuánto tiempo dura el programa?",
    answer:
      "El programa principal es de 5 semanas (10 clases) con clases 2 veces por semana. Sin embargo, el acceso al contenido, comunidad y actualizaciones es de por vida. Tu hijo puede revisar el material cuando quiera.",
  },
  {
    question: "¿Qué incluye exactamente el programa?",
    answer:
      "Todo: las 5 semanas de clases en vivo (10 clases), acceso de por vida a grabaciones, comunidad privada, certificado, kit de prompts, sesión de presentación de proyectos, y todas las actualizaciones futuras. La inversión se discute en tu evaluación personalizada según las necesidades de tu hijo.",
  },
  {
    question: "¿Por qué solo 5 cupos por ciclo?",
    answer:
      "Tenemos 20 cupos totales divididos en grupos de máximo 5 niños por clase para garantizar atención personalizada de altísima calidad. Cada familia pasa por una evaluación para asegurar que el programa sea el adecuado para su hijo. Priorizamos resultados sobre cantidad.",
  },
  {
    question: "¿Qué pasa si no funciona para mi hijo?",
    answer:
      "Garantía 100% sin riesgo. Si después de la primera clase sientes que no es lo que esperabas, te devolvemos el 100% de tu inversión. Sin preguntas, sin complicaciones. Asumimos todo el riesgo.",
  },
  {
    question: "¿Cuál es la edad mínima y máxima?",
    answer:
      "El programa está diseñado para niños de 8 a 14 años. Esta edad es ideal porque tienen la madurez cognitiva para entender conceptos de IA y la creatividad para aplicarlos en proyectos innovadores.",
  },
  {
    question: "¿Qué requisitos técnicos necesito?",
    answer:
      "Solo necesitas un computador o tablet con conexión a internet estable. Todas las herramientas que usamos son gratuitas y funcionan en el navegador web. No necesitas instalar software especial ni tener un equipo de alta gama.",
  },
  {
    question: "¿Los pagos son seguros?",
    answer:
      "Absolutamente. Todos los pagos se procesan a través de PayPal y Mercado Pago, plataformas líderes en seguridad de pagos en línea. Usamos encriptación SSL de nivel bancario y nunca almacenamos información de tarjetas. Tus datos están 100% protegidos.",
  },
  {
    question: "¿Puedo pagar en cuotas?",
    answer:
      "Sí, si eliges pagar con Mercado Pago, puedes dividir el pago en cuotas según las opciones disponibles en tu país. PayPal también ofrece opciones de financiamiento en algunos países.",
  },
  {
    question: "¿Mi hijo recibirá un certificado al finalizar?",
    answer:
      "Sí, al completar el programa tu hijo recibirá un certificado digital oficial de Innovakids que valida sus conocimientos en IA y herramientas digitales. Este certificado puede agregarse a su portafolio académico y es reconocido por instituciones educativas.",
  },
  {
    question: "¿Hay tareas o trabajo fuera de las clases en vivo?",
    answer:
      "Sí, pero son proyectos divertidos y creativos, no tareas tradicionales. Cada semana tu hijo tendrá un proyecto práctico para aplicar lo aprendido. Estimamos 1-2 horas por semana de trabajo independiente, pero muchos niños dedican más tiempo porque les encanta crear.",
  },
  {
    question: "¿Puedo ver el progreso de mi hijo durante el programa?",
    answer:
      "Absolutamente. Tendrás acceso a un dashboard donde podrás ver los proyectos completados, asistencia a clases, y el progreso general. Además, recibirás un reporte semanal por email con los logros y áreas de mejora de tu hijo.",
  },
  {
    question: "¿Qué pasa después de las 5 semanas del programa?",
    answer:
      "Tu hijo mantiene acceso de por vida a todo el contenido, grabaciones y actualizaciones. Además, puede unirse a nuestra comunidad privada donde compartimos nuevos recursos, proyectos avanzados y oportunidades de seguir aprendiendo. Muchas familias continúan con nuestros programas avanzados.",
  },
]

export function FAQSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="faq" className="bg-background py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="mx-auto mb-8 sm:mb-12 md:mb-16 max-w-3xl text-center">
          <h2 className="mb-3 sm:mb-4 text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mt-4">
            Resolvemos todas tus dudas sobre el programa, pagos y garantías
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="overflow-hidden rounded-lg sm:rounded-xl border-2 border-white/10 bg-[#0f2744] px-3 sm:px-4 md:px-6 shadow-sm transition-all hover:shadow-md hover:border-[#4DD0E1]/50 data-[state=open]:border-[#4DD0E1] data-[state=open]:shadow-lg data-[state=open]:shadow-[#4DD0E1]/20"
              >
                <AccordionTrigger className="py-4 sm:py-5 md:py-6 text-left hover:no-underline">
                  <h3 className="pr-3 sm:pr-4 text-sm sm:text-base md:text-lg font-bold text-white">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-4 sm:pb-5 md:pb-6">
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 sm:mt-10 md:mt-12 rounded-xl sm:rounded-2xl border-2 border-[#4DD0E1] bg-[#0f2744] p-4 sm:p-6 md:p-8 text-center shadow-lg shadow-[#4DD0E1]/20">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#4DD0E1]" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Garantía 100% Sin Riesgo</h3>
            </div>
            <p className="mb-4 sm:mb-5 md:mb-6 text-gray-300 text-sm sm:text-base md:text-lg">
              Prueba el programa sin compromiso. Si no te convence después de la primera clase, te devolvemos tu dinero
              completo.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("sesion-estrategica")}
              className="group h-12 sm:h-13 md:h-14 bg-[#4DD0E1] px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg font-bold text-[#0a1628] shadow-xl transition-all hover:scale-105 hover:bg-[#4DD0E1]/90 w-full sm:w-auto"
            >
              Agendar Evaluación Gratuita
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
