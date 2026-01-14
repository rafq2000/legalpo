import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog - Innovakids | Educación en IA para Niños",
  description:
    "Descubre artículos sobre inteligencia artificial para niños, consejos para padres, y las últimas tendencias en educación tecnológica.",
}

const blogPosts = [
  {
    slug: "curso-storytelling-digital-ninos",
    title: "Maestros del Storytelling Digital: Crea Cuentos Ilustrados con IA",
    excerpt:
      "Descubre cómo los niños pueden crear historias transmedia increíbles usando inteligencia artificial. Desde cuentos ilustrados hasta narrativas interactivas.",
    image: "/children-creating-digital-stories-with-ai-illustra.jpg",
    date: "2025-01-20",
    category: "Próximos Cursos",
    readTime: "5 min",
  },
  {
    slug: "curso-videojuegos-ia-ninos",
    title: "Arquitectos de Mundos: Crea Videojuegos con Machine Learning",
    excerpt:
      "Tu hijo puede crear sus propios videojuegos entrenando modelos de Machine Learning en Scratch. Aprende cómo funciona este revolucionario curso.",
    image: "/children-creating-video-games-with-machine-learnin.jpg",
    date: "2025-01-18",
    category: "Próximos Cursos",
    readTime: "6 min",
  },
  {
    slug: "curso-emprendimiento-ia-ninos",
    title: "Generación Exponencial: Tu Hijo Puede Crear Su Primera Marca Digital",
    excerpt:
      "Descubre cómo los niños pueden convertirse en mini emprendedores creando marcas digitales con herramientas de IA. El futuro del emprendimiento infantil.",
    image: "/children-entrepreneurs-creating-digital-brand-with.jpg",
    date: "2025-01-16",
    category: "Próximos Cursos",
    readTime: "5 min",
  },
  {
    slug: "curso-estudio-ia-tutor-personalizado",
    title: "El Cerebro Aumentado: Convierte la IA en el Tutor Personal de tu Hijo",
    excerpt:
      "Técnicas de estudio revolucionarias con IA. Aprende cómo tu hijo puede usar la inteligencia artificial como tutor personalizado para mejorar su rendimiento escolar.",
    image: "/child-studying-with-ai-tutor-personalized-learning.jpg",
    date: "2025-01-14",
    category: "Próximos Cursos",
    readTime: "7 min",
  },
  {
    slug: "como-ensenar-ia-ninos",
    title: "Cómo Enseñar Inteligencia Artificial a Niños de 8-14 Años",
    excerpt:
      "Descubre las mejores estrategias y herramientas para introducir a tus hijos en el fascinante mundo de la IA de manera divertida y educativa.",
    image: "/kids-learning-ai-on-computer.jpg",
    date: "2025-01-15",
    category: "Educación",
    readTime: "5 min",
  },
  {
    slug: "beneficios-ia-educacion-infantil",
    title: "5 Beneficios de la IA en la Educación Infantil",
    excerpt:
      "La inteligencia artificial está transformando la educación. Conoce cómo puede beneficiar el desarrollo cognitivo y creativo de tu hijo.",
    image: "/children-using-ai-educational-tools.jpg",
    date: "2025-01-10",
    category: "Tecnología",
    readTime: "4 min",
  },
  {
    slug: "chatgpt-para-ninos-guia-padres",
    title: "ChatGPT para Niños: Guía Completa para Padres",
    excerpt:
      "Todo lo que necesitas saber sobre el uso seguro y educativo de ChatGPT con tus hijos. Consejos prácticos y ejemplos reales.",
    image: "/parent-and-child-using-chatgpt-safely.jpg",
    date: "2025-01-05",
    category: "Guías",
    readTime: "7 min",
  },
  {
    slug: "proyectos-ia-ninos-principiantes",
    title: "10 Proyectos de IA para Niños Principiantes",
    excerpt:
      "Ideas de proyectos prácticos y divertidos que tus hijos pueden crear usando herramientas de IA, sin necesidad de programación avanzada.",
    image: "/kids-creating-ai-projects.jpg",
    date: "2024-12-28",
    category: "Proyectos",
    readTime: "6 min",
  },
  {
    slug: "futuro-trabajo-ia-preparar-hijos",
    title: "El Futuro del Trabajo con IA: Cómo Preparar a tus Hijos",
    excerpt:
      "Las profesiones del futuro requerirán conocimientos de IA. Descubre cómo puedes preparar a tus hijos desde ahora para tener éxito.",
    image: "/future-careers-with-ai-technology.jpg",
    date: "2024-12-20",
    category: "Futuro",
    readTime: "5 min",
  },
  {
    slug: "herramientas-ia-educativas-ninos",
    title: "Las Mejores Herramientas de IA Educativas para Niños en 2025",
    excerpt:
      "Una selección curada de las herramientas de inteligencia artificial más efectivas y seguras para el aprendizaje infantil.",
    image: "/educational-ai-tools-for-children.jpg",
    date: "2024-12-15",
    category: "Recursos",
    readTime: "8 min",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Blog de Innovakids
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 text-pretty">
              Artículos, guías y recursos sobre inteligencia artificial para niños y educación tecnológica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-[#1a2942] rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[#4DD0E1]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
                      post.category === "Próximos Cursos"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "bg-[#4DD0E1] text-[#0a1628]"
                    }`}
                  >
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span>
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>{post.readTime} lectura</span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#4DD0E1] transition-colors text-balance">
                    {post.title}
                  </h2>

                  <p className="text-gray-300 text-pretty">{post.excerpt}</p>

                  <div className="mt-4 text-[#4DD0E1] font-semibold group-hover:underline">Leer más →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
