"use client"

import { useState } from "react"
import { Share2, Copy, Check } from "lucide-react"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

interface ShareButtonProps {
  title: string
  text: string
  url?: string
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
}

export function ShareButton({
  title,
  text,
  url = window.location.href,
  className = "",
  variant = "outline",
  size = "default",
}: ShareButtonProps) {
  const [showDialog, setShowDialog] = useState(false)
  const [copied, setCopied] = useState(false)

  // Función para compartir a través del Web Share API si está disponible
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        })
        toast({
          title: "Compartido con éxito",
          description: "El contenido ha sido compartido correctamente",
        })
      } catch (error) {
        // Si el usuario cancela la acción, no mostramos error
        if ((error as Error).name !== "AbortError") {
          console.error("Error al compartir:", error)
          setShowDialog(true)
        }
      }
    } else {
      // Si Web Share API no está disponible, mostrar diálogo alternativo
      setShowDialog(true)
    }
  }

  // Función para copiar el texto al portapapeles
  const copyToClipboard = () => {
    const shareText = `${title}\n\n${text}\n\n${url}`
    navigator.clipboard
      .writeText(shareText)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        toast({
          title: "Copiado al portapapeles",
          description: "El contenido ha sido copiado correctamente",
        })
      })
      .catch((err) => {
        console.error("Error al copiar:", err)
        toast({
          variant: "destructive",
          title: "Error al copiar",
          description: "No se pudo copiar el contenido al portapapeles",
        })
      })
  }

  // Función para compartir en WhatsApp
  const shareOnWhatsApp = () => {
    const encodedText = encodeURIComponent(`${title}\n\n${text}\n\n${url}`)
    window.open(`https://wa.me/?text=${encodedText}`, "_blank")
  }

  // Función para compartir en Telegram
  const shareOnTelegram = () => {
    const encodedText = encodeURIComponent(`${title}\n\n${text}\n\n${url}`)
    window.open(`https://t.me/share/url?url=${url}&text=${encodedText}`, "_blank")
  }

  // Función para compartir por correo electrónico
  const shareByEmail = () => {
    const encodedSubject = encodeURIComponent(title)
    const encodedBody = encodeURIComponent(`${text}\n\n${url}`)
    window.open(`mailto:?subject=${encodedSubject}&body=${encodedBody}`, "_blank")
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={variant} size={size} className={className}>
            <Share2 className="h-4 w-4 mr-2" />
            Compartir
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Compartir
          </DropdownMenuItem>
          <DropdownMenuItem onClick={copyToClipboard}>
            {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
            Copiar al portapapeles
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={shareOnWhatsApp}>
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </DropdownMenuItem>
          <DropdownMenuItem onClick={shareOnTelegram}>
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="#0088cc">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.51l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.538-.196 1.006.128.833.95z" />
            </svg>
            Telegram
          </DropdownMenuItem>
          <DropdownMenuItem onClick={shareByEmail}>
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Correo electrónico
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Compartir contenido</DialogTitle>
            <DialogDescription>Copia el enlace o comparte directamente en tus redes sociales</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Enlace para compartir:</p>
              <div className="flex items-center space-x-2">
                <Input value={url} readOnly onClick={(e) => (e.target as HTMLInputElement).select()} />
                <Button size="sm" variant="outline" onClick={copyToClipboard}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium">Compartir en:</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={shareOnWhatsApp}>
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </Button>
                <Button variant="outline" size="sm" onClick={shareOnTelegram}>
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="#0088cc">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.51l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.538-.196 1.006.128.833.95z" />
                  </svg>
                  Telegram
                </Button>
                <Button variant="outline" size="sm" onClick={shareByEmail}>
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  Correo
                </Button>
              </div>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cerrar</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
