import { Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PagoPendientePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <Clock className="h-20 w-20 text-yellow-500" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Pago Pendiente</h1>

        <p className="text-lg text-muted-foreground mb-6">
          Tu pago está siendo procesado. Te notificaremos por email cuando se confirme.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-yellow-800">
            <strong>Información importante:</strong>
          </p>
          <ul className="text-sm text-yellow-700 mt-2 space-y-1 text-left">
            <li>• El proceso puede tomar hasta 48 horas</li>
            <li>• Recibirás un email de confirmación</li>
            <li>• No es necesario realizar otro pago</li>
            <li>• Puedes contactarnos si tienes dudas</li>
          </ul>
        </div>

        <Button asChild className="w-full">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  )
}
