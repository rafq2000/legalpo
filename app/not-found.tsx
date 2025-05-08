import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Página no encontrada | LegalPO",
  description: "Lo sentimos, la página que buscas no existe o ha sido movida.",
  robots: "noindex, nofollow",
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-blue-50 p-4 rounded-full inline-block mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <circle cx="10" cy="13" r="2" />
            <path d="m20 17-2-2-2 2" />
            <path d="m14 17-2-2-2 2" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-2">Página no encontrada</h1>
        <p className="text-gray-600 mb-6">
          Lo sentimos, la página que buscas no existe o ha sido movida a otra ubicación.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Volver al inicio
          </a>
          <a
            href="/informacion-legal"
            className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded transition-colors"
          >
            Explorar información legal
          </a>
        </div>
      </div>
    </div>
  )
}
