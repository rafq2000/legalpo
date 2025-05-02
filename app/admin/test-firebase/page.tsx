import TestFirebaseConnection from "@/components/test-firebase-connection"

export default function TestFirebasePage() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">Firebase Connection Testing</h1>
      <TestFirebaseConnection />
    </div>
  )
}
