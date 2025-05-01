"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { createClient } from "@supabase/supabase-js"

type User = {
  id: string
  name: string
  email: string
  image?: string
} | null

type AuthContextType = {
  user: User
  login: (email: string, password: string) => Promise<boolean>
  loginWithGoogle: () => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => false,
  loginWithGoogle: async () => false,
  logout: () => {},
  isLoading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const [supabase, setSupabase] = useState<any>(null)

  // Inicializar cliente de Supabase
  useEffect(() => {
    const initSupabase = () => {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (supabaseUrl && supabaseAnonKey) {
        try {
          const client = createClient(supabaseUrl, supabaseAnonKey)
          setSupabase(client)
          console.log("✅ Cliente Supabase inicializado correctamente en AuthContext")
        } catch (error) {
          console.error("❌ Error al inicializar cliente Supabase en AuthContext:", error)
        }
      } else {
        console.warn("⚠️ Faltan variables de entorno para Supabase en AuthContext:", {
          url: !!supabaseUrl,
          key: !!supabaseAnonKey,
        })
      }
    }

    initSupabase()
  }, [])

  // Verificar sesión de Supabase al cargar
  useEffect(() => {
    if (!supabase) return

    const checkSupabaseSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          console.error("Error al verificar sesión de Supabase:", error)
          return
        }

        if (data?.session?.user) {
          const supabaseUser = data.session.user

          // Actualizar el usuario en el estado
          setUser({
            id: supabaseUser.id,
            name: supabaseUser.user_metadata?.name || supabaseUser.email?.split("@")[0] || "Usuario",
            email: supabaseUser.email || "",
            image: supabaseUser.user_metadata?.avatar_url,
          })

          // Registrar en la tabla users
          await supabase.from("users").upsert(
            {
              id: supabaseUser.id,
              email: supabaseUser.email,
              name: supabaseUser.user_metadata?.name,
              avatar_url: supabaseUser.user_metadata?.avatar_url,
              last_sign_in: new Date().toISOString(),
            },
            {
              onConflict: "id",
              update: ["last_sign_in", "name", "avatar_url"],
            },
          )

          console.log("✅ Usuario de Supabase verificado y actualizado")
        } else {
          // Verificar si hay un usuario en localStorage (para compatibilidad)
          const storedUser = localStorage.getItem("user")
          if (storedUser) {
            try {
              setUser(JSON.parse(storedUser))
            } catch (e) {
              localStorage.removeItem("user")
            }
          }
        }
      } catch (e) {
        console.error("Error al verificar sesión:", e)
      } finally {
        setIsLoading(false)
      }
    }

    checkSupabaseSession()
  }, [supabase])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      if (supabase) {
        // Intentar login con Supabase
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw error

        if (data?.user) {
          const supabaseUser = data.user

          const newUser = {
            id: supabaseUser.id,
            name: supabaseUser.user_metadata?.name || email.split("@")[0],
            email,
            image: supabaseUser.user_metadata?.avatar_url,
          }

          setUser(newUser)
          localStorage.setItem("user", JSON.stringify(newUser))

          // Registrar sesión
          await supabase.from("sessions").insert({
            user_id: supabaseUser.id,
            user_agent: navigator.userAgent,
            page_url: window.location.pathname,
            is_authenticated: true,
          })

          return true
        }
      } else {
        // Fallback para compatibilidad
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const newUser = {
          id: `local_${Date.now()}`,
          name: email.split("@")[0],
          email,
        }

        setUser(newUser)
        localStorage.setItem("user", JSON.stringify(newUser))
        return true
      }

      return false
    } catch (error) {
      console.error("Error de inicio de sesión:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const loginWithGoogle = async () => {
    setIsLoading(true)
    try {
      if (supabase) {
        // Login con Google a través de Supabase
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: `${window.location.origin}/auth/callback`,
          },
        })

        if (error) throw error

        // El usuario será redirigido, así que no necesitamos hacer nada más aquí
        return true
      } else {
        // Fallback para compatibilidad
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const newUser = {
          id: `google_${Date.now()}`,
          name: "Usuario Google",
          email: "usuario@gmail.com",
          image: "https://lh3.googleusercontent.com/a/default-user",
        }

        setUser(newUser)
        localStorage.setItem("user", JSON.stringify(newUser))
        return true
      }
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      if (supabase) {
        await supabase.auth.signOut()
      }

      setUser(null)
      localStorage.removeItem("user")
      router.push("/")
    } catch (error) {
      console.error("Error al cerrar sesión:", error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, loginWithGoogle, logout, isLoading }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
