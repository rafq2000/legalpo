import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">Verifica tu correo</CardTitle>
            <CardDescription>
              Te hemos enviado un correo con un enlace de verificación. Haz clic en el enlace para activar tu cuenta.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4 text-sm text-muted-foreground">Si no ves el correo, revisa tu carpeta de spam.</p>
            <Link href="/auth/login" className="text-sm text-blue-600 underline underline-offset-4">
              Volver al inicio de sesión
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
