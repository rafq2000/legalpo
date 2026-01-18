"use client"

import type React from "react"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"
import { PageAds } from "@/components/page-ads"
import { SidebarAds } from "@/components/sidebar-ads"
import {
  ArrowRight,
  Scale,
  Calculator,
  MessageSquare,
  Bot,
  User,
  Share2,
  Volume2,
  VolumeX,
  Copy,
  Check,
  AlertTriangle,
  Loader2,
  RefreshCw,
  Send,
  Users,
  Shield,
  Star,
  Zap,
  Heart,
  Home,
  Briefcase,
  CreditCard,
  Building,
  Car,
  Landmark,
  CheckCircle,
  Clock,
  Globe,
  Rocket,
} from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isReading, setIsReading] = useState(false)
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userMessage,
    }

    setMessages((prev) => [...prev, newUserMessage])
    setInput("")
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, newUserMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("Chat API Response Error:", errorData)
        throw new Error(errorData.error || errorData.message || `HTTP ${response.status}: ${response.statusText}`)
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error("No se pudo obtener el lector de respuesta")

      let assistantMessage = ""
      const assistantMessageId = (Date.now() + 1).toString()

      setMessages((prev) => [
        ...prev,
        {
          id: assistantMessageId,
          role: "assistant",
          content: "",
        },
      ])

      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        if (chunk) {
          assistantMessage += chunk
          setMessages((prev) => {
            const newMessages = [...prev]
            const existingIndex = newMessages.findIndex((m) => m.id === assistantMessageId)
            if (existingIndex >= 0) {
              newMessages[existingIndex].content = assistantMessage
            }
            return newMessages
          })
        }
      }

      if (!assistantMessage.trim()) {
        throw new Error("No se recibió respuesta del asistente")
      }
    } catch (err) {
      console.error("Chat error:", err)
      const errorMessage = err instanceof Error ? err.message : "Error desconocido al procesar la consulta"
      setError(errorMessage)
      setMessages((prev) => prev.filter((m) => m.role !== "assistant" || m.content.trim() !== ""))
    } finally {
      setIsLoading(false)
    }
  }

  const handleCategoryClick = (category: string) => {
    const prompts: Record<string, string> = {
      arriendo: "¿Cuáles son mis derechos como arrendatario en Chile?",
      laboral: "¿Cuáles son mis derechos laborales básicos en Chile?",
      familia: "¿Cómo funciona la pensión de alimentos en Chile?",
      deudas: "¿Qué pasa si no puedo pagar mis deudas en Chile?",
      consumidor: "¿Cuáles son mis derechos como consumidor en Chile?",
      accidentes: "¿Qué hacer después de un accidente de tránsito en Chile?",
      herencias: "¿Cómo se distribuye una herencia en Chile?",
      divorcio: "¿Cuáles son los tipos de divorcio en Chile?",
      despido: "¿Qué hacer si me despidieron injustificadamente?",
      contratos: "¿Qué debe incluir un contrato de trabajo en Chile?",
      comercial: "¿Cómo constituir una sociedad en Chile?",
      finiquito: "¿Cómo calcular mi finiquito laboral en Chile?",
    }

    const prompt = prompts[category]
    if (prompt) {
      setInput(prompt)

      const chatSection = document.querySelector("[data-chat-interface]")
      if (chatSection) {
        chatSection.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })

        setTimeout(() => {
          const inputElement = document.querySelector('input[placeholder*="Ej:"]') as HTMLInputElement
          if (inputElement) {
            inputElement.focus()
          }
        }, 500)
      }
    }
  }

  const scrollToChat = () => {
    const chatSection = document.querySelector("[data-chat-interface]")
    if (chatSection) {
      chatSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })

      setTimeout(() => {
        const inputElement = document.querySelector('input[placeholder*="Ej:"]') as HTMLInputElement
        if (inputElement) {
          inputElement.focus()
        }
      }, 500)
    }
  }

  const handleShare = async (content: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Respuesta Legal - LegalPO",
          text: content,
          url: window.location.href,
        })
      } catch (err) {
        handleCopy(content, "")
      }
    } else {
      handleCopy(content, "")
    }
  }

  const handleCopy = async (content: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(content)
      setCopiedMessageId(messageId)
      setTimeout(() => setCopiedMessageId(null), 2000)
    } catch (err) {
      console.error("Error copying to clipboard:", err)
    }
  }

  const handleReadAloud = (text: string) => {
    if (isReading) {
      speechSynthesis.cancel()
      setIsReading(false)
      return
    }

    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "es-ES"
      utterance.rate = 0.9
      utterance.onstart = () => setIsReading(true)
      utterance.onend = () => setIsReading(false)
      utterance.onerror = () => setIsReading(false)

      speechSynthesis.speak(utterance)
    }
  }

  const handleRetry = () => {
    setError(null)
    if (messages.length > 0 && messages[messages.length - 1].role === "user") {
      const lastUserMessage = messages[messages.length - 1]
      setInput(lastUserMessage.content)
      setMessages((prev) => prev.slice(0, -1))
    }
  }

  const legalAreas = [
    {
      icon: <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Derecho Laboral",
      description: "Finiquitos, despidos, contratos",
      color: "bg-blue-500",
      category: "laboral",
      keywords: ["finiquito", "despido", "contrato trabajo", "indemnización", "vacaciones"],
    },
    {
      icon: <Heart className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Derecho de Familia",
      description: "Divorcios, pensión alimenticia, tuición",
      color: "bg-pink-500",
      category: "familia",
      keywords: ["divorcio", "pensión alimentos", "tuición", "adopción", "matrimonio"],
    },
    {
      icon: <Home className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Derecho Inmobiliario",
      description: "Arriendos, compraventas, hipotecas",
      color: "bg-green-500",
      category: "arriendo",
      keywords: ["arriendo", "compraventa", "hipoteca", "propiedad", "desalojo"],
    },
    {
      icon: <CreditCard className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Deudas y DICOM",
      description: "Renegociación, prescripción, cobranza",
      color: "bg-red-500",
      category: "deudas",
      keywords: ["deudas", "dicom", "cobranza", "prescripción", "renegociación"],
    },
    {
      icon: <Car className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Accidentes de Tránsito",
      description: "Seguros, indemnizaciones, SOAP",
      color: "bg-orange-500",
      category: "accidentes",
      keywords: ["accidente tránsito", "seguro", "soap", "indemnización", "lesiones"],
    },
    {
      icon: <Landmark className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Herencias y Sucesiones",
      description: "Testamentos, legítimas, partición",
      color: "bg-purple-500",
      category: "herencias",
      keywords: ["herencia", "testamento", "sucesión", "legítima", "partición"],
    },
    {
      icon: <Building className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Derecho Comercial",
      description: "Sociedades, contratos, quiebras",
      color: "bg-indigo-500",
      category: "comercial",
      keywords: ["sociedad", "contrato comercial", "quiebra", "empresa", "sii"],
    },
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Derecho del Consumidor",
      description: "SERNAC, garantías, publicidad",
      color: "bg-teal-500",
      category: "consumidor",
      keywords: ["sernac", "garantía", "publicidad engañosa", "consumidor", "devolución"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Ads - Hidden on mobile */}
        <div className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-20 p-4">
            <SidebarAds />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full">
          {/* Hero Section - Abogado Gratis Online */}
          <section className="relative py-12 sm:py-20 md:py-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sidebar-primary/20 via-background to-background" />
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container relative px-4 sm:px-6 z-10">
              <div className="text-center max-w-5xl mx-auto">
                {/* Badge principal */}
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 sm:px-6 py-2 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-in fade-in zoom-in duration-500">
                  <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold text-xs sm:text-sm tracking-wide">
                    🥇 ABOGADO GRATIS ONLINE #1 EN CHILE
                  </span>
                </div>

                {/* Título principal H1 - SEO OPTIMIZADO */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">Abogado Gratis</span>
                  <br className="hidden sm:block" />
                  <span className="text-gradient">Online 2026</span>
                </h1>

                {/* Subtítulo Premium */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-8 text-slate-300 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                  Asesoría Legal Inteligente <span className="text-emerald-400 font-medium">24/7</span> con Tecnología de Vanguardia
                </h2>

                {/* Descripción SEO Optimizada */}
                <div className="text-base sm:text-lg text-slate-400 leading-relaxed mb-10 max-w-3xl mx-auto px-4 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                  <p>
                    <strong className="text-slate-200">Abogado gratis online Chile</strong> - El asistente legal con IA más avanzado.
                    Resuelve tus dudas sobre <strong className="text-emerald-400">finiquitos, familia, deudas y más</strong> al instante.
                  </p>
                </div>

                {/* CTA Principal */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
                  <Button
                    onClick={scrollToChat}
                    size="lg"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:shadow-[0_0_30px_rgba(5,150,105,0.6)] transition-all duration-300 border-none rounded-xl"
                  >
                    💬 CONSULTA LEGAL GRATIS
                    <MessageSquare className="ml-2 h-5 w-5" />
                  </Button>
                  <Link href="/calculators/finiquito" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-white/10 text-slate-200 hover:bg-white/5 hover:text-white px-8 py-6 text-lg font-medium backdrop-blur-sm bg-white/5 rounded-xl transition-all duration-300"
                    >
                      📊 CALCULADORAS
                      <Calculator className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                {/* Stats Cards - Glassmorphism */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 px-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                  <div className="glass p-5 rounded-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Users className="h-6 w-6 text-emerald-400 mb-2" />
                    <div className="text-2xl font-bold text-white">150k+</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Usuarios</div>
                  </div>
                  <div className="glass p-5 rounded-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-blue-400 mb-2" />
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Disponible</div>
                  </div>
                  <div className="glass p-5 rounded-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Star className="h-6 w-6 text-amber-400 mb-2" />
                    <div className="text-2xl font-bold text-white">4.9</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Calificación</div>
                  </div>
                  <div className="glass p-5 rounded-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-purple-400 mb-2" />
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Gratis</div>
                  </div>
                </div>

                {/* AI Chat Interface - Premium */}
                <div className="max-w-4xl mx-auto">
                  <div className="glass rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 relative" data-chat-interface>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                    <CardHeader className="bg-white/5 border-b border-white/5 p-6 backdrop-blur-xl">
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                            <Bot className="h-6 w-6 text-emerald-400" />
                          </div>
                          <div className="text-left">
                            <h3 className="text-white font-bold text-base">Abogado IA LegalPO</h3>
                            <p className="text-slate-400 text-xs flex items-center gap-1.5">
                              <span className="block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              En línea • Actualizado 2026
                            </p>
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 min-h-[500px] flex flex-col bg-slate-950/30">

                      {/* Chat Messages Area */}
                      <div className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar scroll-smooth">
                        {messages.length === 0 && (
                          <div className="h-full flex flex-col items-center justify-center p-8 text-center opacity-80 animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/10">
                              <Scale className="h-10 w-10 text-emerald-400" />
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-2">¿En qué puedo ayudarte hoy?</h4>
                            <p className="text-slate-400 max-w-sm mx-auto mb-8 leading-relaxed">
                              Soy tu asistente legal experto en leyes chilenas 2026. Pregúntame sobre cualquier tema jurídico.
                            </p>

                            {/* Suggested Questions Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
                              {[
                                "💰 Calcular mi finiquito",
                                "👶 Pensión de alimentos",
                                "📜 Posesión efectiva",
                                "🏠 Contrato de arriendo"
                              ].map((q) => (
                                <Button
                                  key={q}
                                  variant="outline"
                                  className="justify-start h-auto py-3 px-4 bg-white/5 border-white/10 text-slate-300 hover:text-emerald-400 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 text-sm font-medium"
                                  onClick={() => {
                                    handleCategoryClick(q.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]\s/g, ""));
                                  }}
                                >
                                  {q}
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}

                        {messages.map((m) => (
                          <div key={m.id} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                            <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center shadow-lg ring-1 ring-white/10 ${m.role === 'user' ? 'bg-slate-700' : 'bg-gradient-to-tr from-emerald-600 to-emerald-500'}`}>
                              {m.role === "user" ? <User className="h-5 w-5 text-white" /> : <Bot className="h-5 w-5 text-white" />}
                            </div>
                            <div className={`relative max-w-[85%] rounded-2xl p-5 shadow-sm ${m.role === "user"
                              ? "bg-slate-800 text-white rounded-tr-none border border-white/5"
                              : "bg-white/5 backdrop-blur-md text-slate-100 rounded-tl-none border border-white/10 shadow-lg"
                              }`}>
                              {m.role === "user" ? (
                                <p className="text-sm sm:text-base leading-relaxed">{m.content}</p>
                              ) : (
                                <div className="prose prose-invert prose-emerald prose-sm sm:prose-base max-w-none">
                                  <ReactMarkdown>{m.content}</ReactMarkdown>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}

                        {isLoading && (
                          <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-2">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 flex items-center justify-center shadow-lg">
                              <Bot className="h-5 w-5 text-white" />
                            </div>
                            <div className="bg-white/5 rounded-2xl rounded-tl-none p-4 border border-white/5 flex items-center gap-3">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                              </div>
                              <span className="text-sm text-slate-300 font-medium animate-pulse">Analizando caso...</span>
                            </div>
                          </div>
                        )}

                        {error && (
                          <div className="mx-auto max-w-md bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center animate-in fade-in zoom-in duration-300">
                            <AlertTriangle className="h-6 w-6 text-red-400 mx-auto mb-2" />
                            <p className="text-red-200 text-sm mb-3 font-medium">{error}</p>
                            <Button size="sm" variant="ghost" className="text-red-300 hover:bg-red-500/10 hover:text-red-200" onClick={handleRetry}>
                              <RefreshCw className="h-4 w-4 mr-2" /> Reintentar Consulta
                            </Button>
                          </div>
                        )}
                      </div>

                      {/* Input Area */}
                      <div className="p-4 bg-white/5 border-t border-white/5 backdrop-blur-xl">
                        <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto">
                          <div className="flex items-center gap-3 p-1.5 bg-slate-900/50 rounded-2xl border border-white/10 focus-within:ring-2 focus-within:ring-emerald-500/50 focus-within:border-emerald-500/50 transition-all duration-300 shadow-inner">
                            <Input
                              value={input}
                              onChange={handleInputChange}
                              placeholder="Escribe tu pregunta legal aquí..."
                              className="flex-1 h-14 bg-transparent border-none text-white placeholder:text-slate-500 focus-visible:ring-0 text-base font-medium px-4"
                              disabled={isLoading}
                            />
                            <Button
                              type="submit"
                              size="icon"
                              className={`h-12 w-12 rounded-xl text-white shadow-lg transition-all duration-300 transform hover:scale-105 ${!input.trim() ? "bg-slate-700 cursor-not-allowed opacity-50" : "bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400"}`}
                              disabled={isLoading || !input.trim()}
                            >
                              {isLoading ? <Bot className="h-6 w-6 animate-pulse" /> : <Send className="h-6 w-6" />}
                            </Button>
                          </div>
                          <p className="text-center text-[10px] sm:text-xs text-slate-500 mt-3 flex items-center justify-center gap-1.5 opacity-70">
                            <Shield className="h-3 w-3" />
                            La IA puede cometer errores. Verifica la información importante.
                          </p>
                        </form>
                      </div>
                    </CardContent>
                  </div>
                </div>


              </div>
            </div>
          </section>

          {/* SEO Content Section - Abogado Gratis Online */}
          <section className="py-12 sm:py-16 md:py-20 bg-slate-800/50 border-b border-white/5">
            <div className="container px-4 sm:px-6 max-w-6xl">
              <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                  ¿Qué es un Abogado Gratis Online con Inteligencia Artificial?
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                  Un <strong className="text-white">abogado gratis online</strong> es un{" "}
                  <strong className="text-emerald-400">asistente legal con inteligencia artificial</strong> que
                  proporciona <strong className="text-white">asesoría legal gratis</strong> instantánea sobre cualquier
                  tema de derecho chileno. Nuestro <strong className="text-white">abogado virtual gratis con IA</strong>{" "}
                  está entrenado específicamente en la legislación de Chile 2025 y puede responder{" "}
                  <strong className="text-white">consultas legales gratis</strong> las 24 horas del día, los 7 días de
                  la semana.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 mt-8">
                  Ventajas de Usar Nuestro Abogado Gratis Online
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Clock className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-white mb-2">Asesoría Legal Gratis 24/7</h4>
                          <p className="text-slate-300 text-sm">
                            Nuestro <strong>abogado gratis online</strong> está disponible las 24 horas. No necesitas
                            agendar citas ni esperar horarios de atención para recibir{" "}
                            <strong>asesoría legal gratis</strong>.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Shield className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-white mb-2">100% Gratis Sin Costo</h4>
                          <p className="text-slate-300 text-sm">
                            Todas las <strong>consultas legales gratis</strong> son completamente sin costo. Nuestro{" "}
                            <strong>abogado virtual gratis</strong> nunca te cobrará por asesoría legal.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Zap className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-white mb-2">Respuestas Instantáneas con IA</h4>
                          <p className="text-slate-300 text-sm">
                            La <strong>inteligencia artificial legal</strong> responde en segundos. Obtén{" "}
                            <strong>asesoría legal gratis</strong> inmediata sin esperas.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Globe className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-white mb-2">Especializado en Legislación Chilena</h4>
                          <p className="text-slate-300 text-sm">
                            Nuestro <strong>abogado gratis online</strong> conoce todas las leyes de Chile actualizadas
                            a 2025.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 mt-8">
                  ¿Cómo Funciona la Asesoría Legal Gratis con Inteligencia Artificial?
                </h3>

                <ol className="list-decimal list-inside space-y-4 text-slate-300 mb-8">
                  <li className="text-base sm:text-lg">
                    <strong className="text-white">Escribe tu consulta legal gratis</strong>: Formula tu pregunta sobre
                    cualquier tema legal de Chile en el chat del <strong>abogado gratis online con IA</strong>.
                  </li>
                  <li className="text-base sm:text-lg">
                    <strong className="text-white">La IA analiza tu consulta</strong>: Nuestro{" "}
                    <strong>asistente legal con inteligencia artificial</strong> procesa tu pregunta usando modelos de
                    IA avanzados entrenados en derecho chileno.
                  </li>
                  <li className="text-base sm:text-lg">
                    <strong className="text-white">Recibe asesoría legal gratis instantánea</strong>: El{" "}
                    <strong>abogado virtual gratis</strong> te responde en segundos con información legal precisa y
                    actualizada.
                  </li>
                  <li className="text-base sm:text-lg">
                    <strong className="text-white">Haz preguntas de seguimiento</strong>: Puedes hacer todas las{" "}
                    <strong>consultas legales gratis</strong> que necesites sin límite.
                  </li>
                </ol>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 mt-8">
                  Temas Legales que Cubre Nuestro Abogado Gratis Online
                </h3>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                  Nuestro <strong className="text-white">abogado gratis online con inteligencia artificial</strong>{" "}
                  puede responder <strong>consultas legales gratis</strong> sobre:
                </p>

                <ul className="list-disc list-inside space-y-3 text-slate-300 mb-8 ml-4">
                  <li>
                    <strong className="text-white">Derecho Laboral</strong>: Finiquitos, despidos, contratos de trabajo,
                    indemnizaciones, vacaciones, licencias médicas
                  </li>
                  <li>
                    <strong className="text-white">Derecho de Familia</strong>: Pensión alimenticia, divorcio, tuición,
                    régimen de visitas, matrimonio, adopción
                  </li>
                  <li>
                    <strong className="text-white">Herencias y Sucesiones</strong>: Distribución de herencia,
                    testamentos, legítimas, partición de bienes
                  </li>
                  <li>
                    <strong className="text-white">Derecho Inmobiliario</strong>: Arriendos, compraventas, desalojos,
                    contratos de arriendo, derechos del arrendatario
                  </li>
                  <li>
                    <strong className="text-white">Deudas y DICOM</strong>: Prescripción de deudas, renegociación,
                    cobranza judicial, derechos del deudor
                  </li>
                  <li>
                    <strong className="text-white">Accidentes de Tránsito</strong>: SOAP, indemnizaciones, seguros,
                    responsabilidad civil
                  </li>
                  <li>
                    <strong className="text-white">Derecho del Consumidor</strong>: SERNAC, garantías, devoluciones,
                    publicidad engañosa
                  </li>
                  <li>
                    <strong className="text-white">Derecho Comercial</strong>: Constitución de sociedades, contratos
                    comerciales, quiebras
                  </li>
                </ul>

                <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 p-6 sm:p-8 rounded-2xl border border-emerald-500/30 mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    ¿Por Qué Elegir Nuestro Abogado Gratis Online con IA?
                  </h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Más de 150,000 consultas legales gratis</strong> respondidas
                        exitosamente
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">99% de precisión</strong> en respuestas sobre legislación chilena
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Actualizado con leyes de Chile 2025</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Sin registro ni datos personales</strong> requeridos
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Respuestas en lenguaje simple</strong> y fácil de entender
                      </span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 mt-8">
                  Abogado Gratis Online vs Abogado Tradicional
                </h3>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="p-4 text-white font-bold">Característica</th>
                        <th className="p-4 text-emerald-400 font-bold">Abogado Gratis Online IA</th>
                        <th className="p-4 text-slate-400 font-bold">Abogado Tradicional</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/10">
                        <td className="p-4 font-semibold">Costo</td>
                        <td className="p-4 text-emerald-400">100% Gratis</td>
                        <td className="p-4">$50,000 - $500,000+ por consulta</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-4 font-semibold">Disponibilidad</td>
                        <td className="p-4 text-emerald-400">24/7 - 365 días</td>
                        <td className="p-4">Horario de oficina</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-4 font-semibold">Tiempo de respuesta</td>
                        <td className="p-4 text-emerald-400">Segundos</td>
                        <td className="p-4">Horas o días</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-4 font-semibold">Agendamiento</td>
                        <td className="p-4 text-emerald-400">No requiere</td>
                        <td className="p-4">Requiere cita previa</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-4 font-semibold">Acceso</td>
                        <td className="p-4 text-emerald-400">Desde cualquier lugar</td>
                        <td className="p-4">Presencial u oficina</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-300 mb-2">Importante</h4>
                      <p className="text-slate-300 text-sm">
                        Nuestro <strong>abogado gratis online con inteligencia artificial</strong> proporciona{" "}
                        <strong>asesoría legal gratis</strong> de carácter informativo y educativo. Para casos que
                        requieran representación legal en tribunales o documentos legales vinculantes, recomendamos
                        consultar con un abogado tradicional. Sin embargo, nuestro servicio es ideal para orientación
                        legal inicial, calculadoras legales, y comprensión de tus derechos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Areas Section */}
          <section className="py-12 sm:py-16 md:py-20 border-b border-white/5">
            <div className="container px-4 sm:px-6">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
                  Consultas Legales Gratis por Área de Derecho
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
                  Obtén <strong className="text-white">asesoría legal gratis</strong> especializada en cualquier área
                  del derecho chileno con nuestro{" "}
                  <strong className="text-emerald-400">abogado virtual gratis con IA</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {legalAreas.map((area, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white/5 backdrop-blur-xl border-white/10 text-white overflow-hidden hover:bg-white/10 cursor-pointer"
                    onClick={() => handleCategoryClick(area.category)}
                  >
                    <CardHeader className="relative overflow-hidden p-4 sm:p-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${area.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4 relative z-10`}
                      >
                        <div className="text-white">{area.icon}</div>
                      </div>
                      <CardTitle className="text-base sm:text-lg text-white relative z-10">{area.title}</CardTitle>
                      <p className="text-xs sm:text-sm text-slate-400 relative z-10">{area.description}</p>
                    </CardHeader>
                    <CardContent className="pt-0 p-4 sm:p-6">
                      <Button
                        variant="ghost"
                        className="w-full text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 justify-between group-hover:translate-x-1 transition-transform duration-300 text-xs sm:text-sm"
                      >
                        Consulta legal gratis
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Page Ads */}
          <div className="py-6 sm:py-8">
            <PageAds />
          </div>

          {/* CTA Final */}
          <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-t border-amber-500/30">
            <div className="container text-center px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
                Comienza a Usar Nuestro <span className="text-amber-400">Abogado Gratis Online</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Obtén <strong>asesoría legal gratis con inteligencia artificial</strong> ahora mismo. Nuestro{" "}
                <strong>abogado virtual gratis</strong> está listo para responder tus{" "}
                <strong>consultas legales gratis</strong>.
              </p>
              <Button
                onClick={scrollToChat}
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Rocket className="h-6 w-6 mr-3" />
                OBTENER ASESORÍA LEGAL GRATIS CON IA AHORA
              </Button>
            </div>
          </section>
        </div>

        {/* Right Sidebar Ads */}
        <div className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-20 p-4">
            <SidebarAds />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="+56931772346" message="Hola, necesito hablar con un abogado. Vengo de LegalPO." />
    </div>
  )
}
