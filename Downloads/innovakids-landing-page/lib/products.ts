export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
}

// Catálogo de productos - Fuente única de verdad
export const PRODUCTS: Product[] = [
  {
    id: "curso-ia-ninos",
    name: "Curso de Inteligencia Artificial para Niños",
    description:
      "10 clases en vivo de 90 minutos cada una durante 5 semanas. Grupos de máximo 5 alumnos. Incluye certificado y proyectos reales.",
    priceInCents: 30000, // $300 USD
  },
]
