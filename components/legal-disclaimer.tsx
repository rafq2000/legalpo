import { AlertTriangle } from "lucide-react"

export function LegalDisclaimer() {
  return (
    <div className="bg-amber-50 border-t border-amber-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0" />
          <p className="text-sm text-amber-800">
            <strong>Aviso importante:</strong> Legal Po proporciona información general y no reemplaza la asesoría de un
            abogado. Para casos específicos, contacta a un profesional legal.
          </p>
        </div>
      </div>
    </div>
  )
}
