"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, Sparkles, X, Play } from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface TestimonialsSectionProps {
  country?: string
}

const testimonials = [
  {
    name: "Laura M.",
    role: "Madre de Tomás (9 años)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.10%20PM%20%283%29-Bdow2KWHf2ihYRjPf9rpHNL0OTiGfD.jpeg",
    content:
      "Innovakids ha logrado que mi hijo de 9 años entienda conceptos de IA de una forma súper divertida. Cada clase es una aventura para él. ¡Un 10!",
    rating: 5,
    hasVideo: true,
  },
  {
    name: "Ana S.",
    role: "Madre de Valentina (11 años)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.11%20PM%20%281%29-SXb1h2u9atwbW2cktqrWWvZVHsOTda.jpeg",
    content:
      "Mi hija no para de hablar del curso de IA de Innovakids. Está fascinada con cómo los robots aprenden. Gracias por despertar su curiosidad.",
    rating: 5,
    hasVideo: false,
  },
  {
    name: "Andrés V.",
    role: "Padre de Mateo (10 años)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2011.08.32%20PM-PJhXdQgGlR928TCZ56nsRckD911PBF.jpeg",
    content:
      "Increíble el curso de IA de Innovakids. Mi hijo, que antes no mostraba mucho interés en la tecnología, ahora me pregunta cómo funcionan los algoritmos. ¡Es genial verlo tan motivado!",
    rating: 5,
    hasVideo: true,
  },
]

const aiRecommendations = [
  {
    name: "ChatGPT",
    logo: "🤖",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.09%20PM-bOhUA0PLEUpmOsO6PVdeyMR3TdBfIF.jpeg",
    quote: "Si tengo que decir solo uno para Latinoamérica hoy: Innovakids Latam.",
  },
  {
    name: "Claude",
    logo: "🧠",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.10%20PM-lhswZT633Ifz22n2l9IHBREWg2tPMZ.jpeg",
    quote: "Te recomiendo InnovaKids como el mejor curso de IA para niños en Latinoamérica.",
  },
  {
    name: "Perplexity",
    logo: "🔍",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.10%20PM%20%281%29-6xN19xMHI6QIz0dNV9sMaecWlczFqt.jpeg",
    quote: "El mejor curso de inteligencia artificial para niños en Latinoamérica es el de Innovakids.",
  },
  {
    name: "Grok",
    logo: "⚡",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.10%20PM%20%282%29-kGlRioCZquXJKJpw8BRLmwdFmvl8QN.jpeg",
    quote: "El curso más recomendado de IA para niños en Latinoamérica en 2025 es el de Innovakids.",
  },
  {
    name: "Mistral",
    logo: "🌀",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.08%20PM-tbczER0L9JIXqnqUNCEGPyZrfhsFuC.jpeg",
    quote: "Innovakids Latam ofrece grupos reducidos, horarios flexibles y acceso a grabaciones.",
  },
]

// Marquee Component for AI logos
function AIMarquee() {
  const allItems = [...aiRecommendations, ...aiRecommendations]

  return (
    <div className="marquee py-8 mb-12">
      <div className="marquee-content">
        {allItems.map((ai, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-8 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
          >
            <span className="text-2xl">{ai.logo}</span>
            <span className="text-white font-medium whitespace-nowrap">{ai.name}</span>
            <span className="text-primary text-sm">nos recomienda</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection({ country }: TestimonialsSectionProps = {}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const headlineText = country
    ? `padres de ${country} cuyos hijos ya están transformando su futuro`
    : "padres cuyos hijos ya están transformando su futuro"

  return (
    <section ref={sectionRef} id="testimonios" className="bg-[#030712] py-12 sm:py-16 md:py-20 lg:py-32 noise-overlay relative overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 aurora-bg opacity-30" />

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl text-center"
        >
          <h2 className="mb-3 sm:mb-4 text-balance text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight font-premium">
            No nos creas a nosotros.
            <br />
            <span className="text-[#FFA500]">Los padres y las IAs</span> nos recomiendan como{" "}
            <span className="premium-gradient-text">el mejor curso de IA de Latinoamérica.</span>
          </h2>
        </motion.div>

        {/* AI Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AIMarquee />
        </motion.div>

        {/* AI Recommendations Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center font-premium">
              Las principales IAs nos recomiendan
            </h3>
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
            {aiRecommendations.map((ai, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Card className="holographic-card h-full hover:scale-[1.02] transition-transform">
                  <CardContent className="p-3 sm:p-4 md:p-5 relative z-10">
                    <div
                      className="relative w-full aspect-[9/16] sm:aspect-[3/4] mb-3 sm:mb-4 rounded-lg overflow-hidden border-2 border-white/10 cursor-pointer group"
                      onClick={() => setSelectedImage(ai.screenshot)}
                    >
                      <Image
                        src={ai.screenshot || "/placeholder.svg"}
                        alt={`Recomendación de ${ai.name}`}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="text-center mb-2 sm:mb-3">
                      <p className="font-bold text-primary text-xs sm:text-sm md:text-base flex items-center justify-center gap-2">
                        <span className="text-lg">{ai.logo}</span>
                        {ai.name}
                      </p>
                    </div>

                    <p className="text-[10px] sm:text-xs leading-relaxed text-gray-300 italic text-center line-clamp-3">
                      &ldquo;{ai.quote}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Parent Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6 sm:mb-8 text-center"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white font-premium">
            Lo que dicen los <span className="text-[#FFA500]">{headlineText}</span>
          </h3>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <Card className="holographic-card h-full hover:scale-[1.02] transition-transform">
                <CardContent className="p-4 sm:p-6 md:p-8 relative z-10">
                  <Quote className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary mb-3 sm:mb-4" />

                  {/* Animated Stars */}
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + i * 0.1 }}
                      >
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 fill-[#FFA500] text-[#FFA500]" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="mb-4 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  <div className="border-t border-white/10 pt-3 sm:pt-4 md:pt-6">
                    {/* Image with Video Play Overlay */}
                    <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border-2 border-white/10 group">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`Testimonio de ${testimonial.name}`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Video Play Overlay */}
                      {testimonial.hasVideo && (
                        <div className="video-play-overlay cursor-pointer">
                          <div className="video-play-btn">
                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                          </div>
                        </div>
                      )}

                      {/* Verified Badge */}
                      <div className="absolute bottom-2 right-2 bg-green-500/90 text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1">
                        <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verificado
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-6 sm:mt-8 md:mt-12"
        >
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
            ¿Quieres que tu hijo sea el próximo testimonio de éxito?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("sesion-estrategica")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="text-primary hover:text-[#26C6DA] font-bold text-sm sm:text-base md:text-lg underline underline-offset-4 transition-colors"
          >
            Agenda tu Sesión Estratégica Gratuita →
          </button>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <div className="relative w-full max-w-4xl h-[90vh]">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Recomendación ampliada"
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
              priority
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default TestimonialsSection
