import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PagoExitoPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-20 w-20 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold mb-4">¡Pago Exitoso!</h1>

        <p className="text-lg text-muted-foreground mb-6">
          Tu inscripción ha sido confirmada. Recibirás un email con los detalles del curso y las instrucciones para
          comenzar.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-green-800">
            <strong>Próximos pasos:</strong>
          </p>
          <ul className="text-sm text-green-700 mt-2 space-y-1 text-left">
            <li>✓ Revisa tu email (incluyendo spam)</li>
            <li>✓ Te contactaremos en 24 horas</li>
            <li>✓ Coordinaremos el horario de clases</li>
          </ul>
        </div>

        <Button asChild className="w-full">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  )
}
