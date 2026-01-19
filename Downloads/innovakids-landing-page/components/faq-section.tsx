"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

import { faqs } from "@/lib/faq-data"

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
