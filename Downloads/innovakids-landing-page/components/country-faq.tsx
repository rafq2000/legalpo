"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { CountryConfig } from "@/lib/countries-config"

interface CountryFAQProps {
  country: CountryConfig
}

export function CountryFAQ({ country }: CountryFAQProps) {
  const faqs = [
    {
      question: `¿El curso está disponible para ${country.childTerm} de ${country.name}?`,
      answer: `Sí, nuestro curso de IA está 100% disponible para ${country.childTerm} ${country.demonym}. Las clases son online en vivo, con horarios adaptados a la zona horaria de ${country.name}. Tenemos estudiantes de ${country.mainCity}, ${country.otherCities.join(", ")} y otras ciudades.`,
    },
    {
      question: `¿Puedo pagar en ${country.currency}?`,
      answer: `Sí, aceptamos pagos en ${country.currency}. Los métodos de pago disponibles para ${country.name} son: ${country.paymentMethods.join(", ")}. El precio es de ${country.currencySymbol}${country.priceLocal.toLocaleString()} ${country.currency}.`,
    },
    {
      question: `¿A qué hora son las clases para ${country.name}?`,
      answer: `Las clases se programan en horarios convenientes para familias de ${country.name}. Típicamente ofrecemos sesiones por la tarde (después del colegio) y los sábados por la mañana. Durante la evaluación gratuita coordinamos el horario ideal para tu familia.`,
    },
    {
      question: `¿Qué necesita mi hijo/a para tomar el curso desde ${country.name}?`,
      answer: `Solo necesita un computador o tablet con conexión a internet estable. Todas las herramientas que usamos son gratuitas y basadas en la web. No necesitas comprar software adicional ni equipos especiales.`,
    },
    {
      question: `¿Por qué grupos de solo 5 ${country.childTerm}?`,
      answer: `Los grupos reducidos garantizan atención personalizada. Cada ${country.childTerm.slice(0, -1)} recibe feedback individual, puede hacer preguntas sin pena y avanza a su ritmo. Es como tener un tutor privado pero con la dinámica social de un grupo pequeño.`,
    },
    {
      question: "¿Qué pasa si mi hijo falta a una clase?",
      answer:
        "Todas las clases se graban y tu hijo tiene acceso de por vida a las grabaciones. Además, puede asistir a una sesión de refuerzo sin costo adicional para ponerse al día con sus compañeros.",
    },
    {
      question: "¿Qué certificación recibe al terminar?",
      answer: `Al completar el programa, tu hijo/a recibe un certificado oficial de Innovakids que acredita sus competencias en inteligencia artificial. Este certificado incluye los proyectos realizados y las habilidades adquiridas.`,
    },
    {
      question: "¿Tienen garantía de satisfacción?",
      answer:
        "Sí, ofrecemos garantía de 10 días. Si después de la primera semana sientes que el curso no es lo que esperabas, te devolvemos el 100% de tu inversión sin preguntas.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Preguntas Frecuentes - {country.name}</h2>
        <p className="text-center text-muted-foreground mb-12">
          Todo lo que necesitas saber sobre nuestros cursos de IA para {country.childTerm} {country.demonym}
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium py-4">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
