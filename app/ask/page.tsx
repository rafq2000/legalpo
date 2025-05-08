"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { ArrowLeft, Send, Shield, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { TextToSpeech } from "@/components/text-to-speech"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

// Importa el componente AdUnit al inicio del archivo
import { AdUnit } from "@/components/ad-unit"
import { SiteFooter } from "@/components/site-footer"
// Añadir la importación del ShareButton en la sección de importaciones
import { ShareButton } from "@/components/share-button"
// Add the import for guardarPreguntaUsuario at the top of the file
import { guardarPreguntaUsuario } from "@/utils/firestore-service"
// Add this import at the top
import Head from "next/head"
import { CanonicalUrl } from "@/components/canonical-url"

// Define the Message type
interface Message {
  role: string
  content: string
  title?: string
}

export default function AskPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [userId, setUserId] = useState<string | null>(null)
  const [input, setInput] = useState<string>("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hola, soy el asistente legal especializado en deudas de LegalPO. ¿En qué puedo ayudarte con tus consultas sobre deudas?",
      title: "Asistente Legal LegalPO",
    },
  ])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isAuthChecking, setIsAuthChecking] = useState<boolean>(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Verificar si el usuario está autenticado
    if (status === "loading") {
      setIsAuthChecking(true)
      return
    }

    if (status === "unauthenticated") {
      // Redirigir a la página de login si no está autenticado
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`)
      return
    }

    setIsAuthChecking(false)

    // Intentar recuperar el userId del localStorage
    const storedUserId = localStorage.getItem("docuscan_user_id")
    if (storedUserId) {
      setUserId(storedUserId)
    }
  }, [status, router])

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Si está cargando o no está autenticado, mostrar pantalla de carga
  if (isAuthChecking || status === "loading" || status === "unauthenticated") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
        <p className="text-center">Verificando sesión...</p>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Guardar la pregunta en Firestore
      await guardarPreguntaUsuario({
        email: session?.user?.email || null,
        tema: "legal",
        pregunta: input,
        sessionId: userId,
      })

      console.log("Enviando consulta:", input)

      const response = await fetch("/api/chat-legal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: messages.concat(userMessage), // Enviar todo el historial de mensajes
          userId: userId,
        }),
      })

      const data = await response.json()

      // Guardar el userId si se recibió uno nuevo
      if (data.userId && (!userId || userId !== data.userId)) {
        setUserId(data.userId)
        localStorage.setItem("docuscan_user_id", data.userId)
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.response || "No pude procesar tu consulta. Por favor, intenta con otra pregunta.",
        title: "Asistente Legal LegalPO",
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error:", error)
      // Mensaje de error genérico en caso de fallo
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Entiendo tu situación. Para poder ayudarte mejor, ¿podrías proporcionar más detalles sobre tus deudas? Por ejemplo, ¿qué tipo de deudas tienes y hace cuánto tiempo dejaste de pagarlas?",
          title: "Asistente Legal LegalPO",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // Obtener el texto de todos los mensajes para la lectura
  const getAllMessagesText = () => {
    return messages.map((msg) => `${msg.role === "user" ? "Tú:" : "Asistente:"} ${msg.content}`).join(". ")
  }

  // Inside the AskPage component, add this right after the return statement, before the <div> element
  // For pages that are crawled but not indexed
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Consulta sobre deudas y obtén respuestas legales personalizadas. Información sobre cobranzas, prescripción de deudas y derechos del deudor en Chile."
        />
        <CanonicalUrl />
      </Head>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <div className="mr-4 flex">
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold">LegalPO</span>
              </Link>
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Volver al inicio
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="container mx-auto py-6">
            <h1 className="text-3xl font-bold mb-2 text-center">Consulta sobre deudas</h1>
            <p className="text-center mb-6 text-muted-foreground">
              Haz preguntas sobre deudas, cobranzas y tus derechos como deudor
            </p>

            {/* Anuncio en la parte superior - movido aquí para mantener el flujo */}
            <div className="mb-6">
              <AdUnit slot="6543210987" format="horizontal" className="horizontal" />
            </div>

            <div className="mx-auto max-w-4xl">
              <Tabs defaultValue="chat" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-blue-50">
                  <TabsTrigger value="chat">Chat</TabsTrigger>
                  <TabsTrigger value="info">Información</TabsTrigger>
                </TabsList>

                <TabsContent value="chat" className="mt-6">
                  <Card className="border-blue-100">
                    <CardHeader className="bg-blue-50 border-b border-blue-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Asistente Legal de Deudas</CardTitle>
                          <CardDescription>
                            Haz preguntas sobre deudas, cobranzas y tus derechos como deudor
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TextToSpeech text={getAllMessagesText()} label="Leer conversación" />
                          {messages.length > 1 && (
                            <ShareButton
                              title="Consulta sobre deudas en LegalPO"
                              text={messages
                                .map((msg) => `${msg.role === "user" ? "Yo: " : "Asistente: "}${msg.content}`)
                                .join("\n\n")}
                              size="sm"
                            />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4 h-[400px] overflow-y-auto p-4 rounded-lg border-0">
                        {messages.map((message, index) => (
                          <div
                            key={index}
                            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[80%] p-3 rounded-lg ${
                                message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                              }`}
                            >
                              <div className="flex justify-between items-start">
                                {message.title && message.role === "assistant" && (
                                  <div className="font-semibold text-xs mb-1">{message.title}</div>
                                )}
                                {message.role === "assistant" && (
                                  <div className="ml-2 mt-1 flex-shrink-0">
                                    <TextToSpeech text={message.content} label="Leer respuesta" />
                                  </div>
                                )}
                              </div>
                              <div className="whitespace-pre-wrap">{message.content}</div>
                            </div>
                          </div>
                        ))}
                        {isLoading && (
                          <div className="flex justify-start mb-4">
                            <div className="bg-muted p-3 rounded-lg flex items-center">
                              <Loader2 className="h-4 w-4 animate-spin mr-2" />
                              <span>Procesando tu consulta...</span>
                            </div>
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>

                      <div className="p-4 border-t">
                        <form onSubmit={handleSubmit} className="flex gap-2">
                          <Textarea
                            placeholder="Escribe tu consulta sobre deudas..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 min-h-[60px] sm:min-h-[80px]"
                            disabled={isLoading}
                          />
                          <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="h-10 w-10">
                            <Send className="h-4 w-4" />
                            <span className="sr-only">Enviar mensaje</span>
                          </Button>
                        </form>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="mt-4 text-sm text-muted-foreground p-2 bg-gray-50 rounded-lg">
                    <strong>Nota:</strong> Este asistente proporciona información general basada en la legislación
                    chilena. Para asesoría legal específica, consulta con un abogado.
                  </div>
                </TabsContent>

                <TabsContent value="info" className="mt-6">
                  <Card className="border-blue-100">
                    <CardHeader className="bg-blue-50 border-b border-blue-100">
                      <CardTitle>Normativa sobre Deudas en Chile</CardTitle>
                      <CardDescription>
                        Información sobre las principales leyes relacionadas con deudas en Chile
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 py-4">
                      <p>
                        La legislación chilena contiene diversas normas que regulan las deudas, su cobro y los derechos
                        de los deudores. A continuación encontrarás información sobre las principales normativas.
                      </p>

                      <Separator className="my-4" />

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Código Civil</AccordionTrigger>
                          <AccordionContent>
                            <p>
                              El Código Civil regula las obligaciones y contratos, incluyendo las deudas. Establece los
                              plazos de prescripción:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>Acciones ejecutivas: prescriben en 5 años</li>
                              <li>Acciones ordinarias: prescriben en 10 años</li>
                              <li>La prescripción debe ser alegada en tribunales, no opera automáticamente</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                          <AccordionTrigger>Ley 19.496 (Protección al Consumidor)</AccordionTrigger>
                          <AccordionContent>
                            <p>La Ley de Protección al Consumidor regula las gestiones de cobranza extrajudicial:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>Prohíbe el hostigamiento al deudor</li>
                              <li>
                                Establece horarios permitidos para contactar al deudor (8:00 a 20:00 hrs en días
                                hábiles)
                              </li>
                              <li>Regula los costos de cobranza extrajudicial</li>
                              <li>Prohíbe informar públicamente la morosidad</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                          <AccordionTrigger>Ley 20.720 (Reorganización y Liquidación)</AccordionTrigger>
                          <AccordionContent>
                            <p>La Ley 20.720 establece procedimientos para personas con problemas de insolvencia:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>Procedimiento Concursal de Renegociación: para deudas superiores a 80 UF</li>
                              <li>Procedimiento Concursal de Liquidación: para liquidar bienes y pagar a acreedores</li>
                              <li>Superintendencia de Insolvencia y Reemprendimiento: organismo fiscalizador</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                          <AccordionTrigger>Código de Procedimiento Civil</AccordionTrigger>
                          <AccordionContent>
                            <p>Regula los procedimientos de cobranza judicial:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>Juicio ejecutivo: procedimiento para cobrar deudas con título ejecutivo</li>
                              <li>Embargo: solo se pueden embargar bienes que sean propiedad del deudor</li>
                              <li>Bienes inembargables: aquellos necesarios para la subsistencia</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                          <AccordionTrigger>Derechos del Deudor</AccordionTrigger>
                          <AccordionContent>
                            <p>Los principales derechos del deudor incluyen:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>Derecho a ser tratado con respeto y dignidad</li>
                              <li>Derecho a conocer el estado de la deuda</li>
                              <li>Derecho a solicitar la prescripción de la deuda</li>
                              <li>Derecho a negociar condiciones de pago</li>
                              <li>Derecho a que se respeten los bienes inembargables</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Anuncio entre la información y el chat - optimizado */}
              <div className="my-4">
                <AdUnit slot="3456789012" format="horizontal" className="horizontal in-content" />
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  )
}
