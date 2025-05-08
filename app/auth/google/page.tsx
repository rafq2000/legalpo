import { redirect } from "next/navigation"
import { Suspense } from "react"

export const metadata = {
  title: "Autenticación con Google | LegalPO",
  description: "Inicia sesión con tu cuenta de Google",
  robots: "noindex, nofollow",
}

function GoogleAuthRedirect() {
  redirect("/api/auth/signin/google")
  return null
}

export default function GoogleAuthPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-center">Redirigiendo a Google...</p>
        </div>
      }
    >
      <GoogleAuthRedirect />
    </Suspense>
  )
}
