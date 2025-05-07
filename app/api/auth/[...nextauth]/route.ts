import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

// Crea el handler con las opciones importadas
const handler = NextAuth(authOptions)

// Exporta SOLO GET y POST
export { handler as GET, handler as POST }
