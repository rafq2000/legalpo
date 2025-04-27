import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-3xl font-bold">Panel de Administración</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/admin/analytics"
          className="flex flex-col items-center rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="mb-4 rounded-full bg-blue-100 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600"
            >
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold">Analíticas</h2>
          <p className="text-center text-gray-600">Estadísticas de uso y rendimiento</p>
        </Link>

        <Link
          href="/admin/users"
          className="flex flex-col items-center rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="mb-4 rounded-full bg-green-100 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-600"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold">Usuarios</h2>
          <p className="text-center text-gray-600">Gestión de usuarios registrados</p>
        </Link>

        <Link
          href="/admin/ai-status"
          className="flex flex-col items-center rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="mb-4 rounded-full bg-purple-100 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-600"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold">Estado de IA</h2>
          <p className="text-center text-gray-600">Monitoreo de servicios de IA</p>
        </Link>

        <Link
          href="/admin/feedback"
          className="flex flex-col items-center rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="mb-4 rounded-full bg-yellow-100 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-600"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold">Feedback</h2>
          <p className="text-center text-gray-600">Comentarios y valoraciones de usuarios</p>
        </Link>

        <Link
          href="/admin/documents"
          className="flex flex-col items-center rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="mb-4 rounded-full bg-red-100 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-600"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold">Documentos</h2>
          <p className="text-center text-gray-600">Gestión de documentos analizados</p>
        </Link>

        <Link
          href="/admin/config"
          className="flex flex-col items-center rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="mb-4 rounded-full bg-gray-100 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold">Configuración</h2>
          <p className="text-center text-gray-600">Ajustes del sistema</p>
        </Link>
      </div>

      <div className="mt-8 rounded-lg bg-blue-50 p-4">
        <h3 className="mb-2 font-semibold text-blue-800">Información del sistema</h3>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-md bg-white p-3 shadow-sm">
            <p className="text-sm text-gray-500">Versión</p>
            <p className="font-medium">1.0.0</p>
          </div>
          <div className="rounded-md bg-white p-3 shadow-sm">
            <p className="text-sm text-gray-500">Último despliegue</p>
            <p className="font-medium">{new Date().toLocaleDateString()}</p>
          </div>
          <div className="rounded-md bg-white p-3 shadow-sm">
            <p className="text-sm text-gray-500">Entorno</p>
            <p className="font-medium">Producción</p>
          </div>
          <div className="rounded-md bg-white p-3 shadow-sm">
            <p className="text-sm text-gray-500">Estado</p>
            <p className="font-medium text-green-600">Activo</p>
          </div>
        </div>
      </div>
    </div>
  )
}
