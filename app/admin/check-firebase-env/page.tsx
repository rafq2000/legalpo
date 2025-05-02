import FirebaseEnvChecker from "@/components/firebase-env-checker"

export default function CheckFirebaseEnvPage() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">Verificación de Variables de Entorno Firebase</h1>
      <FirebaseEnvChecker />
    </div>
  )
}
