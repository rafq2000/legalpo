"use client"

import type React from "react"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { GoogleAuthModal } from "@/components/google-auth-modal"

export function AuthProtection({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient && status === "unauthenticated") {
      setShowAuthModal(true)
    }
  }, [isClient, status])

  if (!isClient) {
    return null
  }

  return (
    <>
      {children}

      {showAuthModal && (
        <GoogleAuthModal
          isOpen={showAuthModal}
          onClose={() => {
            setShowAuthModal(false)
            router.push("/")
          }}
          message="Para acceder a esta funcionalidad, necesitas iniciar sesión primero."
        />
      )}
    </>
  )
}
