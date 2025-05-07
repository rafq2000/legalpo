"use client"

import { useState, useEffect } from "react"
import { Volume2, VolumeX, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface TextToSpeechProps {
  text: string
  label?: string
}

export function TextToSpeech({ text, label = "Leer texto" }: TextToSpeechProps) {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isSupported, setIsSupported] = useState(true)

  useEffect(() => {
    // Verificar si el navegador soporta la API de síntesis de voz
    if (typeof window !== "undefined") {
      setIsSupported("speechSynthesis" in window)
    }
  }, [])

  useEffect(() => {
    // Detener la lectura cuando el componente se desmonte
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const speak = () => {
    if (!isSupported) return

    if (isSpeaking && !isPaused) {
      // Si ya está hablando, pausar
      window.speechSynthesis.pause()
      setIsPaused(true)
      return
    }

    if (isPaused) {
      // Si está pausado, reanudar
      window.speechSynthesis.resume()
      setIsPaused(false)
      return
    }

    // Detener cualquier síntesis de voz anterior
    window.speechSynthesis.cancel()

    // Crear un nuevo objeto de síntesis de voz
    const utterance = new SpeechSynthesisUtterance(text)

    // Configurar el idioma a español
    utterance.lang = "es-ES"

    // Configurar la velocidad (0.1 a 10, 1 es normal)
    utterance.rate = 1.0

    // Configurar el tono (0 a 2, 1 es normal)
    utterance.pitch = 1.0

    // Evento cuando termina de hablar
    utterance.onend = () => {
      setIsSpeaking(false)
      setIsPaused(false)
    }

    // Evento en caso de error
    utterance.onerror = () => {
      setIsSpeaking(false)
      setIsPaused(false)
    }

    // Iniciar la síntesis de voz
    window.speechSynthesis.speak(utterance)
    setIsSpeaking(true)
    setIsPaused(false)
  }

  const stop = () => {
    if (!isSupported) return

    window.speechSynthesis.cancel()
    setIsSpeaking(false)
    setIsPaused(false)
  }

  if (!isSupported) {
    return null
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {isSpeaking ? (
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={isPaused ? speak : stop}
              aria-label={isPaused ? "Reanudar lectura" : "Detener lectura"}
            >
              {isPaused ? <Pause className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={speak}
              aria-label="Leer texto en voz alta"
            >
              <Volume2 className="h-4 w-4" />
            </Button>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>{isSpeaking ? (isPaused ? "Reanudar lectura" : "Detener lectura") : label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
