"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

// Importar el componente StatsDashboard dinámicamente
const StatsDashboard = dynamic(() => import("@/components/stats-dashboard"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4">Cargando dashboard...</p>
      </div>
    </div>
  ),
})

export default function ClientDashboardWrapper() {
  const [isClient, setIsClient] = useState(false)
  const [isFirebaseReady, setIsFirebaseReady] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsClient(true)

    // Verificar que Firebase esté disponible
    const checkFirebase = async () => {
      try {
        // Importar dinámicamente para evitar errores de SSR
        const { verificarConexionFirestore } = await import("@/utils/firestore-service")
        const isAvailable = await verificarConexionFirestore()

        if (isAvailable) {
          setIsFirebaseReady(true)
        } else {
          setError("No se pudo conectar con Firebase. Por favor, intenta de nuevo más tarde.")
        }
      } catch (err) {
        console.error("Error al verificar Firebase:", err)
        setError("Error al inicializar Firebase. Por favor, recarga la página.")
      }
    }

    if (isClient) {
      checkFirebase()
    }
  }, [isClient])

  if (!isClient) {
    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-[200px] w-full" />
          <div className="grid grid-cols-3 gap-4">
            <Skeleton className="h-[100px]" />
            <Skeleton className="h-[100px]" />
            <Skeleton className="h-[100px]" />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-red-50 border border-red-200 rounded-md p-4 my-4">
          <h2 className="text-red-800 text-lg font-medium mb-2">Error</h2>
          <p className="text-red-700">{error}</p>
          <button
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  if (!isFirebaseReady) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4">Conectando con Firebase...</p>
        </div>
      </div>
    )
  }

  return <StatsDashboard />
}
