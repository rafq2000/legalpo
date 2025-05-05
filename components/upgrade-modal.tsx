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
          <DialogTitle>Límite de acciones alcanzado</DialogTitle>
          <DialogDescription>
            Has alcanzado el límite de acciones gratuitas por día. Regístrate para obtener acceso ilimitado a todas las
            funcionalidades.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4 py-4">
          <p className="text-sm text-muted-foreground">Al registrarte podrás:</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Usar todas las calculadoras sin límites</li>
            <li>Analizar documentos legales</li>
            <li>Hacer consultas ilimitadas al asistente legal</li>
            <li>Guardar tus documentos y consultas</li>
          </ul>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <Button variant="outline" onClick={handleClose}>
            Cancelar
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleLogin}>
              Iniciar sesión
            </Button>
            <Button onClick={handleRegister}>Registrarme</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
