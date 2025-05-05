"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useActionGate } from "@/hooks/use-action-gate"
import Link from "next/link"

export function UpgradeModal() {
  const { showUpgradeModal, setShowUpgradeModal } = useActionGate()

  return (
    <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Límite de acciones diarias alcanzado</DialogTitle>
          <DialogDescription>
            Has alcanzado el límite de 3 acciones gratuitas por día. Regístrate para acceder a funcionalidades
            ilimitadas.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <Button variant="outline" onClick={() => setShowUpgradeModal(false)}>
            Cerrar
          </Button>
          <Link href="/register" passHref>
            <Button onClick={() => setShowUpgradeModal(false)}>Registrarme ahora</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
