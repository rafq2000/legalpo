"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useActionGate } from "@/contexts/action-gate-context"

export function ActionGateModal() {
  const { showModal, setShowModal } = useActionGate()
  const router = useRouter()

  const handleRegister = () => {
    setShowModal(false)
    router.push("/register")
  }

  const handleLogin = () => {
    setShowModal(false)
    router.push("/login")
  }

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Acceso limitado</DialogTitle>
          <DialogDescription>
            Has alcanzado el límite de acciones gratuitas. Regístrate para continuar utilizando todas las
            funcionalidades de LegalPO sin restricciones.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground mb-4">Al registrarte podrás:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Usar todas nuestras herramientas sin límites</li>
            <li>Guardar tus documentos y consultas</li>
            <li>Acceder a funcionalidades exclusivas</li>
          </ul>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={() => setShowModal(false)} className="sm:w-auto w-full">
            Cancelar
          </Button>
          <Button onClick={handleLogin} variant="secondary" className="sm:w-auto w-full">
            Iniciar sesión
          </Button>
          <Button onClick={handleRegister} className="sm:w-auto w-full">
            Registrarse
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
