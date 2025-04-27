"use client"

import { CardFooter } from "@/components/ui/card"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Send, ArrowLeft } from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import { TextToSpeech } from "@/components/text-to-speech"
import { ShareButton } from "@/components/share-button"
import Link from "next/link"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function DudasLaboralesPage() {
  const { data: session } = useSession()
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hola, soy el asistente legal de LegalPO especializado en normativa laboral chilena. Puedo ayudarte con consultas sobre contratos de trabajo, jornada laboral, remuneraciones, término de contrato, acoso laboral y otros temas relacionados con el Código del Trabajo. ¿En qué puedo ayudarte hoy?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll al final de los mensajes cuando se añade uno nuevo
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Función para enviar mensaje
  const sendMessage = async () => {
    if (input.trim() === "") return

    // Añadir mensaje del usuario
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Enviar mensaje a la API
      const response = await fetch("/api/chat-laboral", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          userId: session?.user?.email || "anonymous",
        }),
      })

      if (!response.ok) {
        throw new Error("Error al enviar mensaje")
      }

      const data = await response.json()

      // Añadir respuesta del asistente
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }])

      // Registrar evento de analítica
      trackEvent("chat_laboral", {
        action: "message_sent",
        userId: session?.user?.email || "anonymous",
      })
    } catch (error) {
      console.error("Error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente en unos momentos.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // Manejar envío con Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-4">
        <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>Volver al inicio</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">Dudas Laborales</h1>
      <p className="text-center mb-8 text-muted-foreground">
        Consulta sobre normativa laboral chilena y recibe respuestas basadas en el Código del Trabajo y leyes
        complementarias
      </p>

      <Tabs defaultValue="chat" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 bg-blue-50">
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="info">Información</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="mt-6">
          <Card className="border-blue-100">
            <CardHeader className="bg-blue-50 border-b border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Asistente Laboral</CardTitle>
                  <CardDescription>
                    Haz preguntas sobre normativa laboral chilena y recibe respuestas basadas en la legislación vigente
                  </CardDescription>
                </div>
                {messages.length > 1 && (
                  <ShareButton
                    title="Consulta laboral en LegalPO"
                    text={messages
                      .map((msg) => `${msg.role === "user" ? "Yo: " : "Asistente: "}${msg.content}`)
                      .join("\n\n")}
                    size="sm"
                  />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 h-[400px] overflow-y-auto p-4 rounded-lg border">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                      <Avatar>
                        <AvatarFallback>{message.role === "user" ? "U" : "AI"}</AvatarFallback>
                        {message.role === "assistant" && <AvatarImage src="/logo.png" />}
                        {message.role === "user" && session?.user?.image && (
                          <AvatarImage src={session.user.image || "/placeholder.svg"} />
                        )}
                      </Avatar>
                      <div
                        className={`rounded-lg px-4 py-2 max-w-[80%] ${
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{message.content}</div>
                        {message.role === "assistant" && (
                          <div className="mt-2 flex justify-end">
                            <TextToSpeech text={message.content} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-center space-x-2">
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Escribe tu consulta sobre normativa laboral, derechos del trabajador o acoso laboral..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button type="submit" size="icon" onClick={sendMessage} disabled={isLoading}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Enviar mensaje</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
          <div className="mt-4 text-sm text-muted-foreground p-2 bg-gray-50 rounded-lg">
            <strong>Nota:</strong> Este asistente proporciona información general basada en la legislación chilena. Para
            asesoría legal específica, consulta con un abogado.
          </div>
        </TabsContent>

        <TabsContent value="info" className="mt-6">
          <Card className="border-blue-100">
            <CardHeader className="bg-blue-50 border-b border-blue-100">
              <CardTitle>Normativa Laboral Chilena</CardTitle>
              <CardDescription>Información sobre las principales leyes laborales en Chile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                La legislación laboral chilena está principalmente contenida en el Código del Trabajo (DFL-1), que
                regula las relaciones entre empleadores y trabajadores.
              </p>

              <Separator className="my-4" />

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Código del Trabajo</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      El Código del Trabajo es la principal normativa que regula las relaciones laborales en Chile.
                      Establece los derechos y obligaciones de trabajadores y empleadores, incluyendo:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Contrato de trabajo</li>
                      <li>Jornada laboral</li>
                      <li>Remuneraciones</li>
                      <li>Feriados y vacaciones</li>
                      <li>Protección a la maternidad</li>
                      <li>Término del contrato</li>
                      <li>Organizaciones sindicales</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Acoso Laboral (Ley 20.607)</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      La Ley 20.607 modificó el Código del Trabajo para tipificar y sancionar el acoso laboral,
                      definiéndolo como:
                    </p>
                    <p className="mt-2 italic">
                      "Toda conducta que constituya agresión u hostigamiento reiterados, ejercida por el empleador o por
                      uno o más trabajadores, en contra de otro u otros trabajadores, por cualquier medio, y que tenga
                      como resultado para el o los afectados su menoscabo, maltrato o humillación, o bien que amenace o
                      perjudique su situación laboral o sus oportunidades en el empleo."
                    </p>
                    <p className="mt-2">
                      El acoso laboral es causal de término de contrato sin derecho a indemnización cuando lo comete el
                      trabajador, y causal de autodespido con derecho a indemnización cuando lo comete el empleador.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Igualdad de Remuneraciones (Ley 20.348)</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      La Ley 20.348 resguarda el derecho a la igualdad en las remuneraciones entre hombres y mujeres que
                      realizan un mismo trabajo. Las diferencias sólo pueden basarse en criterios objetivos como
                      capacidades, calificaciones, idoneidad, responsabilidad o productividad.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Trabajo a Distancia y Teletrabajo (Ley 21.391)</AccordionTrigger>
                  <AccordionContent>
                    <p>La Ley 21.391 regula el trabajo a distancia y teletrabajo, estableciendo:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Definición de trabajo a distancia y teletrabajo</li>
                      <li>Obligación del empleador de proporcionar equipos y herramientas</li>
                      <li>Derecho a desconexión (12 horas continuas en 24 horas)</li>
                      <li>Protección en materia de seguridad y salud</li>
                      <li>Registro especial en la Dirección del Trabajo</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Prescripción de Derechos Laborales</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Según el artículo 510 del Código del Trabajo, los derechos laborales prescriben en los siguientes
                      plazos:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        <strong>Regla general:</strong> 2 años contados desde que se hicieron exigibles
                      </li>
                      <li>
                        <strong>Derechos con origen en actos que concluyeron:</strong> 6 meses desde la terminación de
                        servicios
                      </li>
                      <li>
                        <strong>Horas extraordinarias:</strong> 6 meses desde que debieron ser pagadas
                      </li>
                    </ul>
                    <p className="mt-2 text-red-500">
                      Importante: NO existe plazo de prescripción de 10 años para deudas laborales en Chile.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
