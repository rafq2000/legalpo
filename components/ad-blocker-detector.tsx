"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function AdBlockerDetector({ children }: { children: React.ReactNode }) {
  const [adBlockDetected, setAdBlockDetected] = useState(false)

  useEffect(() => {
    const detectAdBlocker = async () => {
      try {
        // Intenta cargar un script ficticio de anuncios
        const testAd = document.createElement("div")
        testAd.innerHTML = "&nbsp;"
        testAd.className = "adsbox"
        document.body.appendChild(testAd)

        // Espera un momento para que los bloqueadores actúen
        await new Promise((resolve) => setTimeout(resolve, 100))

        // Comprueba si el div ha sido ocultado
        const isBlocked = testAd.offsetHeight === 0
        setAdBlockDetected(isBlocked)

        // Limpia el elemento de prueba
        document.body.removeChild(testAd)
      } catch (e) {
        console.error("Error al detectar bloqueador de anuncios:", e)
      }
    }

    detectAdBlocker()
  }, [])

  return (
    <>
      {adBlockDetected && (
        <div className="p-4 my-4 text-sm text-center text-amber-800 bg-amber-100 rounded-lg">
          Hemos detectado que estás usando un bloqueador de anuncios. Considera desactivarlo para apoyar nuestro
          contenido gratuito.
        </div>
      )}
      {children}
    </>
  )
}
