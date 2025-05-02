"use client"

import Link from "next/link"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="es">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Ha ocurrido un error</h1>
          <p className="text-lg mb-6">Lo sentimos, algo salió mal.</p>

          <div className="flex space-x-4">
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Intentar de nuevo
            </button>

            <Link href="/" className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">
              Volver al inicio
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
