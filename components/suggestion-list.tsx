"use client"

const suggestions = [
  "¿Cómo puedo saber si me están cobrando intereses abusivos?",
  "¿Qué hacer si no puedo pagar mis deudas?",
  "¿Cómo puedo salir de Dicom?",
  "¿Qué es la Ley de Quiebras?",
  "¿Qué bienes no me pueden embargar?",
  "¿Cómo negociar con las casas de cobranza?",
  "¿Qué es la prescripción de una deuda?",
  "¿Cómo puedo repactar mis deudas?",
  "¿Qué es el mínimo vital y cómo me protege?",
  "¿Qué hacer si me están acosando por deudas?",
]

export default function SuggestionList() {
  return (
    <div className="flex flex-wrap gap-2">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium hover:bg-blue-200 transition-colors"
        >
          {suggestion}
        </button>
      ))}
    </div>
  )
}
