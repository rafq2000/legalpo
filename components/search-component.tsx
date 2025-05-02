"use client"

// Este componente no usa useSearchParams() para evitar problemas de compilación
export default function SearchComponent() {
  return (
    <div className="mb-6 w-full max-w-md">
      <form action="/" method="GET" className="flex">
        <input
          type="text"
          name="q"
          placeholder="Buscar..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700">
          Buscar
        </button>
      </form>
    </div>
  )
}
