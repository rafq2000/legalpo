"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

type User = {
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

  useEffect(() => {
    // Verificar si hay un usuario en localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        localStorage.removeItem("user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulamos un proceso de autenticación
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const newUser = {
        name: email.split("@")[0],
        email,
      }

      setUser(newUser)
      localStorage.setItem("user", JSON.stringify(newUser))
      return true
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
      // Simulamos un proceso de autenticación con Google
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulamos que Google devuelve un usuario
      const newUser = {
        name: "Usuario Google",
        email: "usuario@gmail.com",
        image: "https://lh3.googleusercontent.com/a/default-user",
      }

      setUser(newUser)
      localStorage.setItem("user", JSON.stringify(newUser))
      return true
    } catch (error) {
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ user, login, loginWithGoogle, logout, isLoading }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
