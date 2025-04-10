import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
  return (
    <div className="flex items-center mb-4">
      <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800">
        <ArrowLeft className="h-4 w-4 mr-1" />
        <span>Volver al inicio</span>
      </Link>
    </div>
  )
}
