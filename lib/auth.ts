import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { createClient } from "@supabase/supabase-js"

// Inicializar cliente de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || ""
const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Función para registrar usuarios y sesiones en Supabase
async function trackUser(user: any, req: any) {
  try {
    const email = user.email
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress
    const userAgent = req.headers["user-agent"]

    // Buscar si el usuario ya existe
    const { data: userData } = await supabase.from("users").select("id").eq("email", email).single()

    // Si no existe, crearlo
    let userId
    if (!userData) {
      const { data: newUser, error } = await supabase
        .from("users")
        .insert({
          email,
          name: user.name,
          avatar_url: user.image,
          created_at: new Date().toISOString(),
        })
        .select("id")
        .single()

      if (error) throw error
      userId = newUser.id
    } else {
      userId = userData.id
    }

    // Registrar la sesión
    await supabase.from("sessions").insert({
      user_id: userId,
      ip_address: ip,
      user_agent: userAgent,
      started_at: new Date().toISOString(),
      is_active: true,
    })

    return userId
  } catch (error) {
    console.error("Error al registrar usuario y sesión:", error)
    return null
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Simulación simple para desarrollo
        if (credentials?.email && credentials?.password) {
          return {
            id: "1",
            name: "Usuario Demo",
            email: credentials.email,
          }
        }
        return null
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid profile email https://www.googleapis.com/auth/userinfo.profile",
        },
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, credentials }, req) {
      return true
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub || ""
      }
      return session
    },
    async jwt({ token, account, profile }) {
      // Guardar provider_token para acceder a la API de Google si es necesario
      if (account && profile) {
        token.accessToken = account.access_token
        token.provider = account.provider

        // Si es Google, guardar información adicional
        if (account.provider === "google" && profile) {
          token.picture = profile.picture
          token.given_name = profile.given_name
          token.family_name = profile.family_name
          token.locale = profile.locale
        }
      }
      return token
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
}
