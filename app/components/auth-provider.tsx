"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Definir el tipo de usuario
type User = {
  id: string
  name: string
  email: string
  image?: string
} | null

// Crear el contexto de autenticación
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

  // Simular carga inicial de usuario
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

  // Función de login
  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulación de login
      const mockUser = {
        id: "1",
        name: "Usuario Demo",
        email,
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      return true
    } catch (error) {
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Función de login con Google
  const loginWithGoogle = async () => {
    setIsLoading(true)
    try {
      // Simulación de login con Google
      const mockUser = {
        id: "g1",
        name: "Usuario Google",
        email: "usuario@gmail.com",
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      return true
    } catch (error) {
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Función de logout
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ user, login, loginWithGoogle, logout, isLoading }}>{children}</AuthContext.Provider>
  )
}

// Hook para usar el contexto de autenticación
export function useAuth() {
  return useContext(AuthContext)
}
