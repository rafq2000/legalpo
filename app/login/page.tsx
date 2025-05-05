"use client"

import { Label } from "@/components/ui/label"

import type React from "react"
import { useState, useEffect } from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Mail, Lock, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useActionGate } from "@/contexts/action-gate-context"

export default function LoginPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get("callbackUrl") || "/"
  const { resetActions } = useActionGate()

  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (status === "authenticated") {
      router.push(callbackUrl)
    }
  }, [status, router, callbackUrl])

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      setError("")
      // Set the disclaimer as accepted when signing in with Google
      localStorage.setItem("legalpo-disclaimer-accepted", "true")
      await signIn("google", { callbackUrl })
    } catch (error) {
      setError("Ocurrió un error al iniciar sesión con Google. Por favor, intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  // Modificar la función handleSubmit para asegurar que se guarde el nombre del usuario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Por favor, completa todos los campos")
      return
    }

    try {
      setIsLoading(true)
      setError("")
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      })

      if (result?.error) {
        setError("Credenciales incorrectas. Por favor, intenta de nuevo.")
      } else {
        // Redirigir al usuario después de iniciar sesión exitosamente
        resetActions()
        router.push(callbackUrl)
      }
    } catch (error) {
      setError("Ocurrió un error al iniciar sesión. Por favor, intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  // Resetear el contador cuando el usuario inicia sesión exitosamente
  const handleSuccessfulLogin = () => {
    resetActions()
    // Resto de la lógica de login...
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <SiteHeader />
      <main className="flex-1 container py-10">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Shield className="mx-auto h-10 w-10 text-primary" />
            <h1 className="text-2xl font-semibold tracking-tight">Bienvenido de nuevo</h1>
            <p className="text-sm text-muted-foreground">Ingresa tus credenciales para acceder a tu cuenta</p>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid gap-6">
            {/* Primero el botón de Google */}
            <Button
              variant="outline"
              type="button"
              disabled={isLoading}
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Iniciar sesión con Google
            </Button>

            {/* Luego el disclaimer */}
            <div className="bg-amber-50 p-3 border border-amber-200 rounded-md text-sm">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-amber-600 mt-0.5 h-4 w-4 flex-shrink-0" />
                <p className="text-amber-800 text-xs">
                  LegalPO es una herramienta informativa que no reemplaza la asesoría profesional de un abogado. La
                  información proporcionada es solo una guía educativa y no constituye consejo legal. Para situaciones
                  específicas, recomendamos consultar con un profesional del derecho calificado. Al iniciar sesión con
                  Google, aceptas estos términos.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">O con correo y contraseña</span>
              </div>
            </div>

            {/* Finalmente el formulario de correo y contraseña */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <div className="grid gap-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      placeholder="nombre@ejemplo.com"
                      type="email"
                      autoCapitalize="none"
                      autoCorrect="off"
                      disabled={isLoading}
                      className="pl-9"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      placeholder="••••••••"
                      type="password"
                      autoCapitalize="none"
                      autoCorrect="off"
                      disabled={isLoading}
                      className="pl-9"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button disabled={isLoading} type="submit" className="bg-primary text-primary-foreground">
                    {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
                  </Button>
                </div>
              </div>
            </form>
          </div>

          <p className="px-8 text-center text-sm text-muted-foreground">
            ¿No tienes una cuenta?{" "}
            <Link href="/register" className="underline underline-offset-4 hover:text-primary">
              Regístrate
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
