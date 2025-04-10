import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsappContactButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="https://wa.me/56961458118"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        aria-label="Contactar abogado por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </Link>
      <span className="absolute -top-10 right-0 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm whitespace-nowrap font-medium">
        Contacta un abogado
      </span>
    </div>
  )
}
