"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Loader2 } from "lucide-react"
import { db } from "@/utils/firebaseClient"
import { doc, getDoc } from "firebase/firestore"

interface AdminGuardProps {
  children: React.ReactNode
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (status === "loading") return

      if (!session) {
        router.push("/login?callbackUrl=/estadisticas")
        return
      }

      try {
        // Verificar si el email está en la lista de administradores
        const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL
        if (adminEmail && adminEmail.split(",").includes(session.user?.email || "")) {
          setIsAdmin(true)
          return
        }

        // Verificar en Firestore si el usuario es administrador
        if (session.user?.email) {
          const userRef = doc(db, "users", session.user.email)
          const userSnap = await getDoc(userRef)

          if (userSnap.exists() && userSnap.data().role === "admin") {
            setIsAdmin(true)
            return
          }
        }

        // Si no es admin, redirigir
        setIsAdmin(false)
        router.push("/")
      } catch (error) {
        console.error("Error al verificar estado de administrador:", error)
        setIsAdmin(false)
        router.push("/")
      }
    }

    checkAdminStatus()
  }, [session, status, router])

  if (isAdmin === null) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Verificando permisos...</span>
      </div>
    )
  }

  if (isAdmin === false) {
    return null
  }

  return <>{children}</>
}
