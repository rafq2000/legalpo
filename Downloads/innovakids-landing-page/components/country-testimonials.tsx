"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import type { CountryConfig } from "@/lib/countries-config"

interface CountryTestimonialsProps {
  country: CountryConfig
}

export function CountryTestimonials({ country }: CountryTestimonialsProps) {
  // Testimonios localizados por país
  const testimonialsByCountry: Record<
    string,
    Array<{
      name: string
      city: string
      image: string
      text: string
      childAge: number
    }>
  > = {
    es: [
      {
        name: "Carmen García",
        city: "Madrid",
        image: "/testimonial-woman-1.jpg",
        text: "Mi hijo de 11 años está encantado. La metodología es seria pero divertida. En España hay pocas opciones así de buenas para niños.",
        childAge: 11,
      },
      {
        name: "Pablo Martínez",
        city: "Barcelona",
        image: "/testimonial-man-1.jpg",
        text: "Buscaba formación de calidad en IA para mi hija y encontré Innovakids. Los grupos pequeños hacen toda la diferencia.",
        childAge: 9,
      },
    ],
    mx: [
      {
        name: "Guadalupe Hernández",
        city: "CDMX",
        image: "/testimonial-woman-1.jpg",
        text: "Mi hijo pasó de solo usar el celular para juegos a crear sus propios proyectos con IA. El cambio ha sido increíble.",
        childAge: 10,
      },
      {
        name: "Roberto Sánchez",
        city: "Monterrey",
        image: "/testimonial-man-1.jpg",
        text: "La mejor inversión para el futuro de mis hijos. Ahora entienden la tecnología desde adentro.",
        childAge: 12,
      },
    ],
    co: [
      {
        name: "Catalina Rodríguez",
        city: "Bogotá",
        image: "/testimonial-woman-1.jpg",
        text: "Mi hija ahora quiere ser emprendedora de tecnología. El curso le abrió un mundo de posibilidades.",
        childAge: 11,
      },
      {
        name: "Andrés Gómez",
        city: "Medellín",
        image: "/testimonial-man-1.jpg",
        text: "Excelente programa. Mi hijo aprendió más en 5 semanas que en todo el año escolar sobre tecnología.",
        childAge: 13,
      },
    ],
    ar: [
      {
        name: "María Fernández",
        city: "Buenos Aires",
        image: "/testimonial-woman-1.jpg",
        text: "Mi chico de 10 años está fascinado. Pasó de consumir contenido a crear sus propios proyectos.",
        childAge: 10,
      },
      {
        name: "Diego López",
        city: "Córdoba",
        image: "/testimonial-man-1.jpg",
        text: "La creatividad de mi hija explotó después del curso. Ahora piensa diferente y resuelve problemas de otra manera.",
        childAge: 11,
      },
    ],
    cl: [
      {
        name: "Francisca Muñoz",
        city: "Santiago",
        image: "/testimonial-woman-1.jpg",
        text: "Mi hijo ahora entiende que la IA es una herramienta, no magia. Esa mentalidad vale oro para su futuro.",
        childAge: 12,
      },
      {
        name: "Sebastián Vargas",
        city: "Valparaíso",
        image: "/testimonial-man-1.jpg",
        text: "La mejor inversión educativa que he hecho. Mi hija tiene ventaja sobre sus compañeros.",
        childAge: 9,
      },
    ],
    pe: [
      {
        name: "Patricia Quispe",
        city: "Lima",
        image: "/testimonial-woman-1.jpg",
        text: "Educación de clase mundial accesible desde Perú. Mi hijo está aprendiendo lo mismo que niños en Silicon Valley.",
        childAge: 11,
      },
      {
        name: "Carlos Mendoza",
        city: "Arequipa",
        image: "/testimonial-man-1.jpg",
        text: "El programa transformó a mi hijo. Ahora tiene confianza y habilidades que le servirán toda la vida.",
        childAge: 10,
      },
    ],
  }

  const testimonials = testimonialsByCountry[country.code] || testimonialsByCountry.mx

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Lo Que Dicen las Familias de {country.name}</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Padres {country.demonym} que ya transformaron el futuro de sus {country.childTerm}
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.city}, {country.name} | Hijo de {testimonial.childAge} años
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
