"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSession } from "next-auth/react"

export function InviteUsers() {
  const [email, setEmail] = useState("")
  const [invitationLink, setInvitationLink] = useState("")
  const [invitationsSent, setInvitationsSent] = useState(0)
  const [error, setError] = useState("")
  const { toast } = "@/hooks/use-toast"
  const { data: session } = useSession()

  useEffect(() => {
    // Simula la carga del número de invitaciones enviadas desde una base de datos
    // En una implementación real, esto se obtendría de tu base de datos
    setInvitationsSent(0)
  }, [session])

  const handleInvite = async () => {
    if (invitationsSent >= 5) {
      setError("Has alcanzado el límite de invitaciones.")
      return
    }

    setError("")

    // Simula la creación de un enlace de invitación único
    const newInvitationLink = `${window.location.origin}/register?invite=${generateInviteCode()}`

    setInvitationLink(newInvitationLink)
    setEmail("")
    setInvitationsSent((prev) => prev + 1)

    toast({
      title: "Invitación enviada",
      description: "Copia el enlace y compártelo con tus amigos.",
    })
  }

  const generateInviteCode = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Invita a tus amigos</h2>
      {error && <p className="text-red-500">{error}</p>}
      <p>Invitaciones disponibles: {5 - invitationsSent}</p>
      <div>
        <Label htmlFor="email">Email del amigo</Label>
        <Input
          type="email"
          id="email"
          placeholder="amigo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={invitationsSent >= 5}
        />
      </div>
      <Button onClick={handleInvite} disabled={invitationsSent >= 5}>
        Enviar invitación
      </Button>

      {invitationLink && (
        <div>
          <Label>Enlace de invitación</Label>
          <Input type="text" value={invitationLink} readOnly />
        </div>
      )}
    </div>
  )
}
