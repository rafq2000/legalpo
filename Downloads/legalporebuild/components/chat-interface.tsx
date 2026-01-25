"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import ReactMarkdown from "react-markdown"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Scale,
    Bot,
    User,
    RefreshCw,
    Send,
    Shield,
    AlertTriangle,
} from "lucide-react"

interface Message {
    id: string
    role: "user" | "assistant"
    content: string
}

function ChatInterfaceContent() {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const searchParams = useSearchParams()
    const topic = searchParams.get("topic")

    useEffect(() => {
        if (topic) {
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
            const prompt = prompts[topic]
            if (prompt) {
                setInput(prompt)
                // Focus input if scrolled here
                const inputElement = document.querySelector('input[placeholder*="Ej:"]') as HTMLInputElement
                if (inputElement) {
                    setTimeout(() => inputElement.focus(), 500)
                }
            }
        }
    }, [topic])

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
            const inputElement = document.querySelector('input[placeholder*="Ej:"]') as HTMLInputElement
            if (inputElement) {
                setTimeout(() => inputElement.focus(), 100)
            }
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

    return (
        <div className="glass rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 relative" id="chat-interface" data-chat-interface>
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
    )
}

export function ChatInterface() {
    return (
        <Suspense fallback={
            <div className="glass rounded-3xl p-8 min-h-[500px] flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin mb-4"></div>
                    <p className="text-slate-400">Cargando abogado virtual...</p>
                </div>
            </div>
        }>
            <ChatInterfaceContent />
        </Suspense>
    )
}
