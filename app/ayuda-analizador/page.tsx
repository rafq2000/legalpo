"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { ArrowLeft, Send, Shield, Loader2, MessageSquare, FileText, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { SiteFooter } from "@/components/site-footer"
import { TextToSpeech } from "@/components/text-to-speech"

// Define the Message type
interface Message {
  role: string
  content: string
  title?: string
}

export default function AyudaAnalizadorPage() {
  const session = useSession()
  const router = useRouter()
  const [userId, setUserId] = useState<string | null>(null)
  const [input, setInput] = useState<string>("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hola, soy el asistente del Analizador de Documentos de DocuScan AI. ¿En qué puedo ayudarte? Puedes preguntarme sobre cómo usar el analizador, qué tipos de documentos soporta, o cualquier otra duda.",
      title: "Asistente DocuScan AI",
    },
  ])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isAuthChecking, setIsAuthChecking] = useState<boolean>(true)
  const [activeTab, setActiveTab] = useState<string>("chat")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Sugerencias de preguntas comunes
  const questionSuggestions = [
    "¿Qué tipos de documentos puedo analizar?",
    "¿Cómo funciona el OCR?",
    "¿Es seguro subir mis documentos?",
    "¿Qué información extrae el análisis?",
    "¿Puedo editar el texto extraído?",
  ]

  useEffect(() => {
    // Verificar si el usuario está autenticado
    if (session.status === "loading") {
      setIsAuthChecking(true)
      return
    }

    if (session.status === "unauthenticated") {
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
  if (isAuthChecking || session.status === "loading" || session.status === "unauthenticated") {
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
      // Simulamos una respuesta del asistente
      // En una implementación real, esto se conectaría a una API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Generamos una respuesta basada en la pregunta
      let response = ""
      const question = input.toLowerCase()

      if (question.includes("tipos de documentos") || question.includes("qué documentos")) {
        response = `El analizador de DocuScan AI puede procesar varios tipos de documentos:

1. Imágenes (JPG, PNG): Documentos escaneados o fotografiados
2. PDFs: Tanto PDFs con texto seleccionable como PDFs escaneados
3. Documentos Word (.docx, .doc): Aunque para estos es mejor usar la opción de "pegar texto"

El sistema está optimizado para documentos legales como contratos, demandas, sentencias judiciales, pagarés, y otros documentos similares.`
      } else if (question.includes("ocr") || question.includes("reconocimiento")) {
        response = `El OCR (Reconocimiento Óptico de Caracteres) es la tecnología que permite extraer texto de imágenes. 

En DocuScan AI utilizamos una tecnología OCR avanzada que:
- Preprocesa las imágenes para mejorar la calidad (ajustando brillo y contraste)
- Detecta y corrige la orientación del texto
- Reconoce múltiples idiomas (optimizado para español)
- Identifica estructuras como tablas y listas

Para obtener mejores resultados, te recomendamos subir imágenes claras y con buena resolución.`
      } else if (question.includes("seguro") || question.includes("privacidad") || question.includes("confidencial")) {
        response = `La seguridad y privacidad de tus documentos es nuestra prioridad:

- Los documentos se procesan en servidores seguros
- El contenido se elimina automáticamente después del análisis
- No almacenamos el texto de tus documentos de forma permanente
- Utilizamos conexiones cifradas (HTTPS) para todas las transferencias
- No compartimos tu información con terceros

Para documentos altamente confidenciales, también puedes usar la opción de "pegar texto" en lugar de subir el archivo.`
      } else if (question.includes("información") || question.includes("extrae") || question.includes("análisis")) {
        response = `El análisis de documentos extrae y organiza la siguiente información:

1. Tipo de documento (contrato, demanda, sentencia, etc.)
2. Partes involucradas (nombres, roles)
3. Fechas importantes mencionadas
4. Montos y valores monetarios
5. Cláusulas importantes
6. Puntos clave del documento
7. Advertencias y riesgos potenciales
8. Recomendaciones prácticas

Además, puedes hacer preguntas específicas sobre el documento en la pestaña "Preguntar al AI" para obtener información más detallada.`
      } else if (question.includes("editar") || question.includes("modificar") || question.includes("corregir")) {
        response = `Sí, puedes editar el texto extraído:

1. Una vez que el OCR ha procesado tu documento, el texto aparecerá en un área editable
2. Puedes corregir cualquier error de reconocimiento directamente en esa área
3. Los cambios que hagas se reflejarán en el análisis cuando vuelvas a analizarlo
4. También puedes copiar el texto (botón "Copiar") o descargarlo como archivo TXT

Esta función es útil cuando el OCR no reconoce perfectamente alguna parte del texto o cuando quieres eliminar secciones irrelevantes antes del análisis.`
      } else {
        response = `Gracias por tu pregunta. El Analizador de Documentos de DocuScan AI es una herramienta que te permite:

1. Extraer texto de documentos escaneados, fotos y PDFs
2. Analizar automáticamente el contenido legal del documento
3. Identificar partes, fechas, montos y cláusulas importantes
4. Hacer preguntas específicas sobre el documento

Para comenzar, ve a la sección "Analizar documento" y sube un archivo o pega el texto directamente. Si tienes alguna otra pregunta específica, no dudes en preguntar.`
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: response,
        title: "Asistente DocuScan AI",
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
            "Lo siento, tuve un problema al procesar tu consulta. Por favor, intenta reformular tu pregunta o contacta con soporte si el problema persiste.",
          title: "Asistente DocuScan AI",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    // Opcional: enviar automáticamente la sugerencia
    setTimeout(() => {
      handleSubmit(new Event("submit") as React.FormEvent)
    }, 100)
  }

  // Obtener el texto de todos los mensajes para la lectura
  const getAllMessagesText = () => {
    return messages.map((msg) => `${msg.role === "user" ? "Tú:" : "Asistente:"} ${msg.content}`).join(". ")
  }

  // Obtener el texto de las preguntas frecuentes para la lectura
  const getFaqText = (question: string, answer: string) => {
    return `Pregunta: ${question}. Respuesta: ${answer}`
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold">DocuScan AI</span>
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

      <main className="flex-1 container py-4 sm:py-6 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold">Ayuda del Analizador de Documentos</h1>
            <TextToSpeech
              text={
                activeTab === "chat"
                  ? "Ayuda del Analizador de Documentos. " + getAllMessagesText()
                  : "Preguntas frecuentes sobre el Analizador de Documentos."
              }
              label="Leer contenido"
            />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Preguntar
              </TabsTrigger>
              <TabsTrigger value="faq" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Preguntas frecuentes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Asistente del Analizador
                  </CardTitle>
                  <CardDescription>
                    Pregunta cualquier duda sobre cómo usar el analizador de documentos y sus funcionalidades
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <p className="text-sm">Puedes preguntar sobre:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li>Cómo usar el analizador de documentos</li>
                      <li>Tipos de documentos soportados</li>
                      <li>Funcionalidades de OCR y análisis</li>
                      <li>Seguridad y privacidad</li>
                      <li>Consejos para obtener mejores resultados</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-card border rounded-lg overflow-hidden">
                <div className="p-4 border-b bg-muted">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                      <h2 className="font-semibold">Chat con asistente del analizador</h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 h-[300px] sm:h-[400px] overflow-y-auto">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${message.role === "user" ? "flex justify-end" : "flex justify-start"}`}
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

                {/* Sugerencias de preguntas */}
                <div className="px-4 py-2 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Preguntas sugeridas:</p>
                  <div className="flex flex-wrap gap-2">
                    {questionSuggestions.map((suggestion, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-secondary transition-colors"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <Textarea
                      placeholder="Escribe tu pregunta sobre el analizador de documentos..."
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
              </div>
            </TabsContent>

            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    Preguntas frecuentes
                  </CardTitle>
                  <CardDescription>
                    Respuestas a las preguntas más comunes sobre el analizador de documentos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="flex justify-between">
                        <span>¿Qué tipos de documentos puedo analizar?</span>
                        <div className="flex items-center">
                          <TextToSpeech
                            text={getFaqText(
                              "¿Qué tipos de documentos puedo analizar?",
                              "El analizador de DocuScan AI puede procesar varios tipos de documentos: Imágenes como JPG y PNG, PDFs con texto seleccionable o escaneados, y Documentos Word. El sistema está optimizado para documentos legales como contratos, demandas, sentencias judiciales, pagarés, y otros documentos similares.",
                            )}
                            label="Leer respuesta"
                          />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p>El analizador de DocuScan AI puede procesar varios tipos de documentos:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Imágenes (JPG, PNG): Documentos escaneados o fotografiados</li>
                          <li>PDFs: Tanto PDFs con texto seleccionable como PDFs escaneados</li>
                          <li>
                            Documentos Word (.docx, .doc): Aunque para estos es mejor usar la opción de "pegar texto"
                          </li>
                        </ul>
                        <p className="mt-2">
                          El sistema está optimizado para documentos legales como contratos, demandas, sentencias
                          judiciales, pagarés, y otros documentos similares.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="flex justify-between">
                        <span>¿Cómo funciona el OCR?</span>
                        <div className="flex items-center">
                          <TextToSpeech
                            text={getFaqText(
                              "¿Cómo funciona el OCR?",
                              "El OCR (Reconocimiento Óptico de Caracteres) es la tecnología que permite extraer texto de imágenes. En DocuScan AI utilizamos una tecnología OCR avanzada que preprocesa las imágenes, detecta y corrige la orientación del texto, reconoce múltiples idiomas, e identifica estructuras como tablas y listas.",
                            )}
                            label="Leer respuesta"
                          />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p>
                          El OCR (Reconocimiento Óptico de Caracteres) es la tecnología que permite extraer texto de
                          imágenes. En DocuScan AI utilizamos una tecnología OCR avanzada que:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Preprocesa las imágenes para mejorar la calidad (ajustando brillo y contraste)</li>
                          <li>Detecta y corrige la orientación del texto</li>
                          <li>Reconoce múltiples idiomas (optimizado para español)</li>
                          <li>Identifica estructuras como tablas y listas</li>
                        </ul>
                        <p className="mt-2">
                          Para obtener mejores resultados, te recomendamos subir imágenes claras y con buena resolución.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="flex justify-between">
                        <span>¿Es seguro subir mis documentos?</span>
                        <div className="flex items-center">
                          <TextToSpeech
                            text={getFaqText(
                              "¿Es seguro subir mis documentos?",
                              "La seguridad y privacidad de tus documentos es nuestra prioridad. Los documentos se procesan en servidores seguros, el contenido se elimina automáticamente después del análisis, no almacenamos el texto de tus documentos de forma permanente, utilizamos conexiones cifradas para todas las transferencias, y no compartimos tu información con terceros.",
                            )}
                            label="Leer respuesta"
                          />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p>La seguridad y privacidad de tus documentos es nuestra prioridad:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Los documentos se procesan en servidores seguros</li>
                          <li>El contenido se elimina automáticamente después del análisis</li>
                          <li>No almacenamos el texto de tus documentos de forma permanente</li>
                          <li>Utilizamos conexiones cifradas (HTTPS) para todas las transferencias</li>
                          <li>No compartimos tu información con terceros</li>
                        </ul>
                        <p className="mt-2">
                          Para documentos altamente confidenciales, también puedes usar la opción de "pegar texto" en
                          lugar de subir el archivo.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="flex justify-between">
                        <span>¿Qué información extrae el análisis?</span>
                        <div className="flex items-center">
                          <TextToSpeech
                            text={getFaqText(
                              "¿Qué información extrae el análisis?",
                              "El análisis de documentos extrae y organiza la siguiente información: Tipo de documento, partes involucradas, fechas importantes mencionadas, montos y valores monetarios, cláusulas importantes, puntos clave del documento, advertencias y riesgos potenciales, y recomendaciones prácticas.",
                            )}
                            label="Leer respuesta"
                          />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p>El análisis de documentos extrae y organiza la siguiente información:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Tipo de documento (contrato, demanda, sentencia, etc.)</li>
                          <li>Partes involucradas (nombres, roles)</li>
                          <li>Fechas importantes mencionadas</li>
                          <li>Montos y valores monetarios</li>
                          <li>Cláusulas importantes</li>
                          <li>Puntos clave del documento</li>
                          <li>Advertencias y riesgos potenciales</li>
                          <li>Recomendaciones prácticas</li>
                        </ul>
                        <p className="mt-2">
                          Además, puedes hacer preguntas específicas sobre el documento en la pestaña "Preguntar al AI"
                          para obtener información más detallada.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="flex justify-between">
                        <span>¿Puedo editar el texto extraído?</span>
                        <div className="flex items-center">
                          <TextToSpeech
                            text={getFaqText(
                              "¿Puedo editar el texto extraído?",
                              "Sí, puedes editar el texto extraído. Una vez que el OCR ha procesado tu documento, el texto aparecerá en un área editable. Puedes corregir cualquier error de reconocimiento directamente en esa área. Los cambios que hagas se reflejarán en el análisis cuando vuelvas a analizarlo. También puedes copiar el texto o descargarlo como archivo TXT.",
                            )}
                            label="Leer respuesta"
                          />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p>Sí, puedes editar el texto extraído:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Una vez que el OCR ha procesado tu documento, el texto aparecerá en un área editable</li>
                          <li>Puedes corregir cualquier error de reconocimiento directamente en esa área</li>
                          <li>Los cambios que hagas se reflejarán en el análisis cuando vuelvas a analizarlo</li>
                          <li>También puedes copiar el texto (botón "Copiar") o descargarlo como archivo TXT</li>
                        </ul>
                        <p className="mt-2">
                          Esta función es útil cuando el OCR no reconoce perfectamente alguna parte del texto o cuando
                          quieres eliminar secciones irrelevantes antes del análisis.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                      <AccordionTrigger className="flex justify-between">
                        <span>¿Cómo puedo obtener mejores resultados?</span>
                        <div className="flex items-center">
                          <TextToSpeech
                            text={getFaqText(
                              "¿Cómo puedo obtener mejores resultados?",
                              "Para obtener los mejores resultados con el analizador de documentos: Usa imágenes claras y con buena resolución, ajusta el brillo y contraste si el texto no se ve claramente, asegúrate de que los documentos escaneados estén rectos y bien iluminados, usa la opción de pegar texto para PDFs con texto seleccionable, revisa y corrige el texto extraído antes de analizarlo, y considera dividir documentos complejos en secciones más pequeñas.",
                            )}
                            label="Leer respuesta"
                          />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p>Para obtener los mejores resultados con el analizador de documentos:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Usa imágenes claras y con buena resolución</li>
                          <li>Ajusta el brillo y contraste si el texto no se ve claramente</li>
                          <li>Para documentos escaneados, asegúrate de que estén rectos y bien iluminados</li>
                          <li>
                            Si tienes un PDF con texto seleccionable, usa la opción "pegar texto" para mejores
                            resultados
                          </li>
                          <li>Revisa y corrige el texto extraído antes de analizarlo</li>
                          <li>Para documentos complejos, considera dividirlos en secciones más pequeñas</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
