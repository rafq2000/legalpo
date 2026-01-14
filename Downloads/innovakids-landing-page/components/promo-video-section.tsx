"use client"

import { useState } from "react"
import { Play, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PromoVideoSection() {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleVideoClick = () => {
    const video = document.getElementById("promo-video") as HTMLVideoElement
    if (video) {
      if (video.paused) {
        video.play()
        setIsPlaying(true)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    }
  }

  const toggleMute = () => {
    const video = document.getElementById("promo-video") as HTMLVideoElement
    if (video) {
      video.muted = !video.muted
      setIsMuted(video.muted)
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background via-cyan-950/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent px-4">
              Descubre Innovakids en Acción
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Mira cómo transformamos el aprendizaje de IA en una experiencia divertida y educativa
            </p>
          </div>

          {/* Video Container */}
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12">
            {/* Phone Mockup with Video */}
            <div className="flex-1 flex justify-center w-full">
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-6 bg-gray-900 rounded-b-2xl sm:rounded-b-3xl z-10" />

                  {/* Screen */}
                  <div className="relative bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/16] w-[240px] xs:w-[280px] sm:w-[320px] md:w-[360px]">
                    {/* Video */}
                    <video
                      id="promo-video"
                      className="w-full h-full object-cover"
                      loop
                      muted={isMuted}
                      playsInline
                      autoPlay
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    >
                      <source
                        src="https://8n2c8ieovwfncuyi.public.blob.vercel-storage.com/VIDEO%20PROMOCIONAL.mp4"
                        type="video/mp4"
                      />
                      Tu navegador no soporta el video.
                    </video>

                    {/* Play/Pause Overlay */}
                    {!isPlaying && (
                      <div
                        className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group"
                        onClick={handleVideoClick}
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-500/90 flex items-center justify-center group-hover:bg-cyan-400 transition-all group-hover:scale-110">
                          <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="white" />
                        </div>
                      </div>
                    )}

                    {/* Mute/Unmute Button */}
                    <button
                      onClick={toggleMute}
                      className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/80 transition-colors z-20"
                      aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                  </div>

                  {/* Phone buttons */}
                  <div className="absolute right-0 top-28 sm:top-32 w-1 h-10 sm:h-12 bg-gray-700 rounded-l" />
                  <div className="absolute right-0 top-40 sm:top-48 w-1 h-12 sm:h-16 bg-gray-700 rounded-l" />
                  <div className="absolute left-0 top-36 sm:top-40 w-1 h-6 sm:h-8 bg-gray-700 rounded-r" />
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
              </div>
            </div>

            {/* CTA Content */}
            <div className="flex-1 text-center lg:text-left px-4 sm:px-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">¡Próximo Curso por Comenzar!</h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                No dejes que tu hijo se quede atrás en la era de la Inteligencia Artificial. Nuestros cupos son
                limitados y se llenan rápidamente.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <p className="text-left text-sm sm:text-base">
                    <strong className="text-cyan-400">Grupos reducidos:</strong> Máximo 5 alumnos por clase
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <p className="text-left text-sm sm:text-base">
                    <strong className="text-cyan-400">Atención personalizada:</strong> Cada niño avanza a su ritmo
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <p className="text-left text-sm sm:text-base">
                    <strong className="text-cyan-400">Resultados garantizados:</strong> Proyectos reales desde la
                    primera clase
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all w-full sm:w-auto"
                  onClick={() => {
                    document.getElementById("sesion-estrategica")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Agendar Sesión de Diagnóstico Gratuita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
