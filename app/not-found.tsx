"use client"

import { Suspense } from "react"

// Componente que NO usa useSearchParams
function NotFoundContent() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Página no encontrada</h1>
      <p className="text-gray-600 mt-4">Lo sentimos, la página que buscas no existe.</p>
      <a
        href="/"
        className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Volver al inicio
      </a>
    </div>
  )
}

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div className="text-center p-6">Cargando...</div>}>
      <NotFoundContent />
    </Suspense>
  )
}
