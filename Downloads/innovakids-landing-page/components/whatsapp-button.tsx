"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    // Show tooltip after 30 seconds if user hasn't interacted
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true)
      }
    }, 30000)

    return () => clearTimeout(timer)
  }, [hasInteracted])

  const handleClick = () => {
    setHasInteracted(true)
    setShowTooltip(false)
    window.open(
      "https://wa.me/56964754219?text=Hola%2C%20quiero%20información%20sobre%20el%20curso%20de%20IA%20para%20niños",
      "_blank"
    )
  }

  const dismissTooltip = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowTooltip(false)
    setHasInteracted(true)
  }

  return (
    <div className="fixed bottom-6 right-6 z-[99999] flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-[280px]"
          >
            <button
              onClick={dismissTooltip}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-gray-800 font-medium text-sm mb-2">
              ¿Tienes dudas sobre el programa? 🤔
            </p>
            <p className="text-gray-600 text-xs">
              Escríbenos y te respondemos en menos de 5 minutos
            </p>
            <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-3 h-3 bg-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button with Pulse Ring */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group w-16 h-16 rounded-full shadow-2xl flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        }}
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulsing rings */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" />
        <span
          className="absolute inset-[-4px] rounded-full border-2 border-[#25D366] opacity-50"
          style={{ animation: "pulsing-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
        />
        <span
          className="absolute inset-[-8px] rounded-full border border-[#25D366] opacity-25"
          style={{ animation: "pulsing-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.5s" }}
        />

        {/* Icon */}
        <MessageCircle className="w-8 h-8 text-white relative z-10" />

        {/* Online indicator */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </span>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>

      {/* Online status text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="bg-gray-900/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2"
      >
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        En línea ahora
      </motion.div>
    </div>
  )
}

export default WhatsAppButton
