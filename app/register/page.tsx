"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Mail, Lock, AlertCircle, Info, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useActionGate } from "@/contexts/action-gate-context"

export default function RegisterPage() {
  const router = useRouter()
  const { resetActions } = useActionGate()

  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [waitingList, setWaitingList] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)

  // Resetear el contador cuando el usuario se registra exitosamente
  const handleSuccessfulRegistration = () => {
    resetActions()
    // Resto de la lógica de registro...
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      setError("Por favor, completa todos los campos")
      return
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden")
      return
    }

    if (!acceptTerms) {
      setError("Debes aceptar los términos y política de privacidad")
      return
    }

    try {
      setIsLoading(true)
      setError("")
      setSuccessMessage("")
      setWaitingList(false)

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
      } else if (data.waitingList) {
        setWaitingList(true)
        setSuccessMessage(data.message)
      } else {
        // Simulación de registro exitoso
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Crear un usuario simulado
        const mockUser = {
          id: "1",
          name: name,
          email: email,
        }

        // Guardar en localStorage para mantener la sesión
        localStorage.setItem("user", JSON.stringify(mockUser))

        // Resetear el contador de acciones
        resetActions()

        // Redirigir al usuario
        router.push("/")
      }
    } catch (error) {
      console.error("Error al registrarse:", error)
      setError("Error al crear la cuenta. Por favor, intenta nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <SiteHeader />
      <main className="flex-1 container py-10">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Shield className="mx-auto h-10 w-10 text-primary" />
            <h1 className="text-2xl font-semibold tracking-tight">Crear cuenta</h1>
            <p className="text-sm text-muted-foreground">Ingresa tus datos para registrarte en LegalPO</p>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {successMessage && waitingList && (
            <Alert variant="success">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>{successMessage}</AlertDescription>
            </Alert>
          )}

          {/* Botón de Google movido arriba del formulario */}
          <Button
            variant="outline"
            type="button"
            disabled={isLoading}
            onClick={() => router.push("/auth/google")}
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
            Continuar con Google
          </Button>

          {/* Disclaimer legal */}
          <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-sm">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
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
              <span className="bg-background px-2 text-muted-foreground">O regístrate con email</span>
            </div>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    placeholder="Ingresa tu nombre completo"
                    type="text"
                    autoCapitalize="none"
                    autoCorrect="off"
                    disabled={isLoading}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
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
                <div className="grid gap-2">
                  <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      placeholder="••••••••"
                      type="password"
                      autoCapitalize="none"
                      autoCorrect="off"
                      disabled={isLoading}
                      className="pl-9"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked === true)}
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                    Acepto la{" "}
                    <Link href="/privacidad" className="underline">
                      política de privacidad
                    </Link>{" "}
                    y{" "}
                    <Link href="/terminos" className="underline">
                      términos de uso
                    </Link>
                  </label>
                </div>
                <Button disabled={isLoading} type="submit" className="bg-primary text-primary-foreground">
                  {isLoading ? "Creando cuenta..." : "Crear cuenta"}
                </Button>
              </div>
            </form>
          </div>

          <p className="px-8 text-center text-sm text-muted-foreground">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="underline underline-offset-4 hover:text-primary">
              Inicia sesión
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
