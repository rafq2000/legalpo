import type React from "react"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  const isAdmin = session?.user?.email === process.env.ADMIN_EMAIL

  if (!isAdmin) {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Panel de Administración</h1>
          <div className="flex space-x-4 mt-4">
            <a href="/admin/analytics" className="text-blue-600 hover:underline">
              Analítica
            </a>
            <a href="/admin/feedback" className="text-blue-600 hover:underline">
              Feedback
            </a>
            <a href="/admin/sugerencias" className="text-blue-600 hover:underline">
              Sugerencias
            </a>
            <a href="/admin/cache" className="text-blue-600 hover:underline">
              Caché
            </a>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
