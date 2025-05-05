"use client"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useActionGate } from "@/hooks/use-action-gate"
import { CheckCircle } from "lucide-react"

export function UpgradeModal() {
  const { showUpgradeModal, setShowUpgradeModal } = useActionGate()
  const router = useRouter()

  // Cerrar el modal
  const handleClose = () => {
    setShowUpgradeModal(false)
  }

  // Ir a la página de registro
  const handleRegister = () => {
    setShowUpgradeModal(false)
    router.push("/register")
  }

  // Ir a la página de login
  const handleLogin = () => {
    setShowUpgradeModal(false)
    router.push("/login")
  }

  return (
    <Dialog open={showUpgradeModal} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Has alcanzado el límite de acciones gratuitas</DialogTitle>
          <DialogDescription>
            Para seguir disfrutando de todas las funcionalidades de LegalPO sin restricciones, regístrate gratis.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4 py-4">
          <p className="text-sm font-medium">Al registrarte obtendrás:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Acceso ilimitado a todas las calculadoras</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Análisis de documentos legales sin restricciones</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Consultas ilimitadas al asistente legal</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Historial de consultas y documentos guardados</span>
            </li>
          </ul>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <Button variant="outline" onClick={handleClose}>
            Quizás más tarde
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleLogin}>
              Iniciar sesión
            </Button>
            <Button onClick={handleRegister}>Registrarme ahora</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
