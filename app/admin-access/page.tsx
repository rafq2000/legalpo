"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function AdminAccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const key = searchParams.get("key")

  useEffect(() => {
    async function setAdminCookie() {
      try {
        if (!key) {
          router.push("/admin/login")
          return
        }

        const response = await fetch("/api/admin/set-cookie", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ key }),
        })

        if (response.ok) {
          router.push("/admin")
        } else {
          router.push("/admin/login?error=invalid")
        }
      } catch (error) {
        console.error("Error:", error)
        router.push("/admin/login?error=server")
      }
    }

    setAdminCookie()
  }, [key, router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent mx-auto"></div>
        <p>Verificando credenciales...</p>
      </div>
    </div>
  )
}
