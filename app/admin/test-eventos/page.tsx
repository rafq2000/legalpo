"use client"
import TestEventRecorder from "@/components/test-event-recorder"

export default function TestEventosPage() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">Prueba de Registro de Eventos</h1>
      <p className="mb-6 text-muted-foreground">
        Esta página te permite probar el registro de eventos en Firestore para verificar que la configuración de
        Firebase Admin SDK es correcta.
      </p>
      <TestEventRecorder />
    </div>
  )
}
