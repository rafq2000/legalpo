"use client"

import { CardFooter } from "@/components/ui/card"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import {
  ArrowLeft,
  Upload,
  FileText,
  Loader2,
  FileImage,
  Download,
  AlertCircle,
  Copy,
  Check,
  FileIcon as FileWord,
  MessageSquare,
  Calendar,
  DollarSign,
  Users,
  FileSignature,
  ListChecks,
  Clipboard,
  Info,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { processDocument } from "@/lib/document-processor"
import { analyzeDocument, type DocumentAnalysis } from "@/lib/document-analyzer"
import { DocumentChat } from "@/components/document-chat"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TextToSpeech } from "@/components/text-to-speech"
// Importa el componente AdUnit al inicio del archivo
import { AdUnit } from "@/components/ad-unit"
import { SiteFooter } from "@/components/site-footer"
// Añadir la importación del ShareButton en la sección de importaciones
import { ShareButton } from "@/components/share-button"

export default function AnalyzePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [extractedText, setExtractedText] = useState("")
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [analysis, setAnalysis] = useState<DocumentAnalysis | null>(null)
  const [processingProgress, setProcessingProgress] = useState(0)
  const [isPDF, setIsPDF] = useState(false)
  const [isWord, setIsWord] = useState(false)
  const [copied, setCopied] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [showPreview, setShowPreview] = useState(false)
  const [activeTab, setActiveTab] = useState("analysis")
  const [userId, setUserId] = useState<string | null>(null)
  const [inputMethod, setInputMethod] = useState<"upload" | "paste">("upload")
  const [pdfError, setPdfError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  // Agregar estado para manejar múltiples archivos
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  // Agregar componente para mostrar miniaturas de múltiples archivos
  const renderFilesThumbnails = () => {
    if (!selectedFiles || selectedFiles.length <= 1) return null

    return (
      <div className="mt-4">
        <p className="text-sm font-medium mb-2">Archivos seleccionados ({selectedFiles.length}):</p>
        <div className="flex flex-wrap gap-2">
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className={`border rounded p-2 text-xs flex items-center ${file === selectedFiles[0] ? "bg-primary/10 border-primary" : ""}`}
              onClick={() => {
                // Cambiar la vista previa al archivo seleccionado
                setFile(file)
                const fileUrl = URL.createObjectURL(file)
                setPreview(fileUrl)
                setIsPDF(file.type === "application/pdf")
                setIsWord(
                  file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
                    file.type === "application/msword",
                )
              }}
            >
              {file.type.includes("image") ? (
                <FileImage className="h-4 w-4 mr-1 text-primary" />
              ) : file.type.includes("pdf") ? (
                <FileText className="h-4 w-4 mr-1 text-red-500" />
              ) : (
                <FileWord className="h-4 w-4 mr-1 text-blue-500" />
              )}
              {file.name.length > 15 ? file.name.substring(0, 12) + "..." : file.name}
            </div>
          ))}
        </div>
      </div>
    )
  }

  useEffect(() => {
    // Verificar si el usuario está autenticado
    if (status === "loading") {
      setIsLoading(true)
      return
    }

    if (status === "unauthenticated") {
      // Redirigir a la página de login si no está autenticado
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`)
      return
    }

    setIsLoading(false)

    // Intentar recuperar el userId del localStorage
    const storedUserId = localStorage.getItem("docuscan_user_id")
    if (storedUserId) {
      setUserId(storedUserId)
    }
  }, [status, router])

  // Analizar texto cuando cambia
  useEffect(() => {
    if (extractedText.trim()) {
      const documentAnalysis = analyzeDocument(extractedText)
      setAnalysis(documentAnalysis)
    } else {
      setAnalysis(null)
    }
  }, [extractedText])

  // Modificar la función handleFileChange para permitir múltiples archivos
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files
    if (!selectedFiles || selectedFiles.length === 0) return

    // Tomar el primer archivo para la vista previa inicial
    const firstFile = selectedFiles[0]
    setFile(firstFile)
    const fileUrl = URL.createObjectURL(firstFile)
    setPreview(fileUrl)
    setExtractedText("")
    setBrightness(100)
    setContrast(100)
    setIsPDF(firstFile.type === "application/pdf")
    setIsWord(
      firstFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        firstFile.type === "application/msword",
    )
    setAnalysis(null)
    setPdfError(null)

    // Guardar todos los archivos seleccionados en un estado
    setSelectedFiles(Array.from(selectedFiles))
  }

  // Modificar la función handleDrop para permitir múltiples archivos
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const droppedFiles = e.dataTransfer.files
    if (!droppedFiles || droppedFiles.length === 0) return

    // Tomar el primer archivo para la vista previa inicial
    const firstFile = droppedFiles[0]
    setFile(firstFile)
    const fileUrl = URL.createObjectURL(file)
    setPreview(fileUrl)
    setExtractedText("")
    setBrightness(100)
    setContrast(100)
    setIsPDF(firstFile.type === "application/pdf")
    setIsWord(
      firstFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        file.type === "application/msword",
    )
    setAnalysis(null)
    setPdfError(null)

    // Guardar todos los archivos seleccionados en un estado
    setSelectedFiles(Array.from(droppedFiles))
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  // Modificar la función handleProcessDocument para procesar múltiples archivos
  const handleProcessDocument = async () => {
    if (!file) return

    setIsProcessing(true)
    setProcessingProgress(0)
    setPdfError(null)

    try {
      let combinedText = ""

      // Procesar cada archivo seleccionado
      for (let i = 0; i < selectedFiles.length; i++) {
        const currentFile = selectedFiles[i]

        // Actualizar progreso para mostrar qué archivo se está procesando
        setProcessingProgress((i / selectedFiles.length) * 50) // Usar la primera mitad del progreso para indicar el archivo actual

        const text = await processDocument(
          currentFile,
          {
            language: "spa",
            brightness,
            contrast,
          },
          (progress) => {
            // Calcular el progreso total considerando el archivo actual y el progreso dentro de ese archivo
            const fileProgress = progress.progress / 100 // Convertir a decimal
            const overallProgress = ((i + fileProgress) / selectedFiles.length) * 100
            setProcessingProgress(overallProgress)

            if (progress.status === "complete" && progress.text && i === selectedFiles.length - 1) {
              setExtractedText(combinedText + progress.text)
            }
          },
        )

        // Agregar un separador entre los textos de diferentes archivos
        if (i > 0) {
          combinedText += "\n\n--- NUEVO DOCUMENTO ---\n\n"
        }
        combinedText += text
      }

      setExtractedText(combinedText)
      setShowPreview(true)
    } catch (error) {
      console.error("Error al procesar los documentos:", error)
      setExtractedText("")
      setPdfError(
        "Error al procesar los documentos. Es posible que algún PDF esté protegido o dañado. Por favor, intenta copiar y pegar el texto directamente.",
      )
    } finally {
      setIsProcessing(false)
    }
  }

  const handleCopyText = () => {
    if (textareaRef.current && extractedText) {
      textareaRef.current.select()
      document.execCommand("copy")
      // Alternativa moderna:
      // navigator.clipboard.writeText(extractedText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownloadText = () => {
    if (!extractedText) return

    const blob = new Blob([extractedText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${file?.name || "documento"}_texto_extraido.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Función para generar texto para la lectura del análisis
  const getAnalysisText = () => {
    if (!analysis) return ""

    let text = `Análisis del documento: ${analysis.tipo}. ${analysis.descripcion} `

    // Añadir partes involucradas
    if (analysis.partes && Object.keys(analysis.partes).length > 0) {
      text += "Partes involucradas: "
      Object.entries(analysis.partes).forEach(([rol, nombre]) => {
        text += `${rol}: ${nombre}. `
      })
    }

    // Añadir fechas importantes
    if (analysis.fechas && Object.keys(analysis.fechas).length > 0) {
      text += "Fechas importantes: "
      Object.entries(analysis.fechas).forEach(([tipo, fecha]) => {
        text += `${tipo}: ${fecha}. `
      })
    }

    // Añadir montos
    if (analysis.montos && Object.keys(analysis.montos).length > 0) {
      text += "Montos y valores: "
      Object.entries(analysis.montos).forEach(([tipo, monto]) => {
        text += `${tipo}: ${monto}. `
      })
    }

    // Añadir advertencias
    if (analysis.advertencias && analysis.advertencias.length > 0) {
      text += "Advertencias importantes: "
      analysis.advertencias.forEach((adv) => {
        text += `${adv}. `
      })
    }

    // Añadir recomendaciones
    if (analysis.recomendaciones && analysis.recomendaciones.length > 0) {
      text += "Recomendaciones: "
      analysis.recomendaciones.forEach((rec) => {
        text += `${rec}. `
      })
    }

    return text
  }

  // Renderizar el análisis del documento
  const renderAnalysis = () => {
    if (!analysis) return null

    return (
      <Card className="h-full border-blue-100">
        {/* Modificar el CardHeader en la función renderAnalysis para incluir el botón de compartir: */}
        <CardHeader className="flex flex-row items-center justify-between bg-blue-50 border-b border-blue-100">
          <div>
            <CardTitle className="text-xl">{analysis.tipo}</CardTitle>
            <CardDescription className="text-base">{analysis.descripcion}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <TextToSpeech text={getAnalysisText()} label="Leer análisis completo" />
            <ShareButton title={`Análisis de documento: ${analysis.tipo}`} text={getAnalysisText()} size="sm" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              {analysis.partes && Object.keys(analysis.partes).length > 0 && (
                <AccordionItem value="partes">
                  <AccordionTrigger className="text-blue-600 font-medium flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Partes involucradas
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <ul className="space-y-2 pl-2">
                          {Object.entries(analysis.partes).map(([rol, nombre], i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="font-semibold">{rol}:</span> {nombre}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <TextToSpeech
                        text={Object.entries(analysis.partes)
                          .map(([rol, nombre]) => `${rol}: ${nombre}`)
                          .join(". ")}
                        label="Leer partes"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {analysis.fechas && Object.keys(analysis.fechas).length > 0 && (
                <AccordionItem value="fechas">
                  <AccordionTrigger className="text-blue-600 font-medium flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Fechas importantes
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <ul className="space-y-2 pl-2">
                          {Object.entries(analysis.fechas).map(([tipo, fecha], i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="font-semibold">{tipo}:</span> {fecha}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <TextToSpeech
                        text={Object.entries(analysis.fechas)
                          .map(([tipo, fecha]) => `${tipo}: ${fecha}`)
                          .join(". ")}
                        label="Leer fechas"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {analysis.montos && Object.keys(analysis.montos).length > 0 && (
                <AccordionItem value="montos">
                  <AccordionTrigger className="text-blue-600 font-medium flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Montos y valores
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <ul className="space-y-2 pl-2">
                          {Object.entries(analysis.montos).map(([tipo, monto], i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="font-semibold">{tipo}:</span> {monto}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <TextToSpeech
                        text={Object.entries(analysis.montos)
                          .map(([tipo, monto]) => `${tipo}: ${monto}`)
                          .join(". ")}
                        label="Leer montos"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {analysis.clausulasImportantes && Object.keys(analysis.clausulasImportantes).length > 0 && (
                <AccordionItem value="clausulas">
                  <AccordionTrigger className="text-blue-600 font-medium flex items-center">
                    <FileSignature className="h-4 w-4 mr-2" />
                    Cláusulas importantes
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <ul className="space-y-2 pl-2">
                          {Object.entries(analysis.clausulasImportantes).map(([numero, contenido], i) => (
                            <li key={i} className="flex flex-col gap-1">
                              <span className="font-semibold">{numero}:</span>
                              <p className="text-sm text-muted-foreground pl-4">{contenido}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <TextToSpeech
                        text={Object.entries(analysis.clausulasImportantes)
                          .map(([numero, contenido]) => `${numero}: ${contenido}`)
                          .join(". ")}
                        label="Leer cláusulas"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {analysis.puntosClaves && analysis.puntosClaves.length > 0 && (
                <AccordionItem value="puntos">
                  <AccordionTrigger className="text-blue-600 font-medium flex items-center">
                    <ListChecks className="h-4 w-4 mr-2" />
                    Puntos clave
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <ul className="space-y-2 pl-2">
                          {analysis.puntosClaves.map((punto, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-1">• {punto}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <TextToSpeech text={analysis.puntosClaves.join(". ")} label="Leer puntos clave" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              <AccordionItem value="advertencias">
                <AccordionTrigger className="text-red-500 font-medium">Advertencias importantes</AccordionTrigger>
                <AccordionContent>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-grow">
                      <ul className="space-y-2 pl-2">
                        {analysis.advertencias.map((adv, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1">{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <TextToSpeech text={analysis.advertencias.join(". ")} label="Leer advertencias" />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ventajas">
                <AccordionTrigger className="text-green-600 font-medium">Ventajas de este documento</AccordionTrigger>
                <AccordionContent>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-grow">
                      <ul className="space-y-2 pl-2">
                        {analysis.ventajas.map((ventaja, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1">{ventaja}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <TextToSpeech text={analysis.ventajas.join(". ")} label="Leer ventajas" />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="riesgos">
                <AccordionTrigger className="text-amber-600 font-medium">Riesgos a considerar</AccordionTrigger>
                <AccordionContent>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-grow">
                      <ul className="space-y-2 pl-2">
                        {analysis.riesgos.map((riesgo, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1">{riesgo}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <TextToSpeech text={analysis.riesgos.join(". ")} label="Leer riesgos" />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="recomendaciones">
                <AccordionTrigger className="text-blue-500 font-medium">Recomendaciones prácticas</AccordionTrigger>
                <AccordionContent>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-grow">
                      <ul className="space-y-2 pl-2">
                        {analysis.recomendaciones.map((rec, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <TextToSpeech text={analysis.recomendaciones.join(". ")} label="Leer recomendaciones" />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {analysis.conceptosLegales && (
                <AccordionItem value="conceptos">
                  <AccordionTrigger className="text-purple-500 font-medium">Conceptos legales clave</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <dl className="space-y-4">
                          {Object.entries(analysis.conceptosLegales).map(([concepto, definicion], i) => (
                            <div key={i}>
                              <dt className="font-semibold">{concepto}</dt>
                              <dd className="text-muted-foreground pl-4 mt-1">{definicion}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                      <TextToSpeech
                        text={Object.entries(analysis.conceptosLegales)
                          .map(([concepto, definicion]) => `${concepto}: ${definicion}`)
                          .join(". ")}
                        label="Leer conceptos"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>

            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-4 w-4 text-blue-500" />
              <AlertTitle className="text-blue-700">Nota importante</AlertTitle>
              <AlertDescription className="text-blue-600">
                Este análisis es generado automáticamente y tiene carácter informativo. Para decisiones legales
                importantes, siempre consulte con un profesional legal calificado.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Modificar la función que procesa documentos para registrar la analítica
  const handleAnalyzeDocument = async () => {
    if (!extractedText.trim()) return

    try {
      const response = await fetch("/api/analyze-document", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: extractedText,
          userId: userId,
        }),
      })

      if (!response.ok) {
        throw new Error(`Error en la respuesta del servidor: ${response.status}`)
      }

      const data = await response.json()

      // Guardar el userId si se recibió uno nuevo
      if (data.userId && (!userId || userId !== data.userId)) {
        setUserId(data.userId)
        localStorage.setItem("docuscan_user_id", data.userId)
      }

      // Resto del código para manejar el análisis...
    } catch (error) {
      console.error("Error al analizar el documento:", error)
      // Manejar el error...
    }
  }

  // Si está cargando o no está autenticado, mostrar pantalla de carga
  if (isLoading || status === "loading" || status === "unauthenticated") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
        <p className="text-center">Verificando sesión...</p>
      </div>
    )
  }

  // El resto del componente permanece igual...

  // Continuar con el renderizado normal si el usuario está autenticado
  return (
    <div className="flex min-h-screen flex-col">
      {/* Anuncio en la parte superior */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <FileImage className="h-6 w-6 text-primary" />
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

      {/* Anuncio en la parte superior */}
      <div className="container py-4 mt-2">
        <AdUnit slot="8765432109" format="horizontal" className="horizontal" />
      </div>

      <main className="flex-1 container py-6 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Analizar documento</h1>

          {!file && !showPreview ? (
            <div className="space-y-6">
              <Tabs defaultValue="upload" onValueChange={(value) => setInputMethod(value as "upload" | "paste")}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="upload" className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    Subir documento
                  </TabsTrigger>
                  <TabsTrigger value="paste" className="flex items-center gap-2">
                    <Clipboard className="h-4 w-4" />
                    Pegar texto
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="upload">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sube tu documento</CardTitle>
                      <CardDescription>
                        Arrastra y suelta o selecciona un archivo para comenzar el análisis
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Modificar la sección de carga de archivos para permitir múltiples archivos */}
                      <div
                        className="border-2 border-dashed rounded-lg p-12 text-center hover:bg-muted/50 transition-colors cursor-pointer"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onClick={() => document.getElementById("file-upload")?.click()}
                      >
                        <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <h3 className="text-lg font-medium mb-1">Arrastra y suelta tus archivos aquí</h3>
                        <p className="text-sm text-muted-foreground mb-4">o haz clic para seleccionar archivos</p>
                        <p className="text-xs text-muted-foreground">
                          Formatos soportados: JPG, JPEG, PNG, PDF, DOCX, DOC (máx. 10MB por archivo)
                        </p>
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          accept=".jpg,.jpeg,.png,.pdf,.docx,.doc"
                          onChange={handleFileChange}
                          multiple // Permitir selección múltiple
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-muted-foreground">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center gap-1 cursor-help">
                                <Info className="h-4 w-4" />
                                <span>¿Problemas con PDFs?</span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              Si tienes problemas con PDFs protegidos o complejos, usa la opción "Pegar texto" para
                              copiar y pegar el contenido directamente.
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Button variant="outline" onClick={() => setInputMethod("paste")}>
                        <Clipboard className="h-4 w-4 mr-2" />
                        Pegar texto en su lugar
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="paste">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pega tu texto legal</CardTitle>
                      <CardDescription>
                        Copia y pega directamente el contenido del documento para analizarlo
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Textarea
                          placeholder="Pega aquí el texto del documento legal que deseas analizar..."
                          className="min-h-[300px] font-mono text-sm"
                          value={extractedText}
                          onChange={(e) => setExtractedText(e.target.value)}
                        />
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                          <div className="text-sm text-muted-foreground">
                            <p>Puedes pegar texto desde:</p>
                            <ul className="list-disc pl-5 mt-1">
                              <li>PDFs (selecciona el texto y cópialo)</li>
                              <li>Documentos Word</li>
                              <li>Páginas web</li>
                              <li>Correos electrónicos</li>
                            </ul>
                          </div>
                          <Button
                            className="sm:self-end"
                            disabled={!extractedText?.trim()}
                            onClick={() => {
                              if (extractedText?.trim()) {
                                setShowPreview(true)
                              }
                            }}
                          >
                            <FileText className="mr-2 h-4 w-4" />
                            Analizar texto
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          ) : !showPreview ? (
            // Agregar el renderizado de miniaturas en la sección de documento cargado
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Documento cargado</CardTitle>
                <CardDescription>
                  {isPDF
                    ? "Archivo PDF cargado correctamente"
                    : isWord
                      ? "Documento Word cargado correctamente"
                      : "Imagen cargada correctamente. Ajusta los parámetros para mejorar el OCR"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 sm:gap-6">
                  <div className="relative">
                    {isPDF ? (
                      <div className="flex flex-col items-center justify-center p-8 border rounded-lg bg-gray-50 h-64">
                        <FileText className="h-16 w-16 text-primary mb-4" />
                        <p className="text-center text-muted-foreground">Documento PDF cargado correctamente</p>
                      </div>
                    ) : isWord ? (
                      <div className="flex flex-col items-center justify-center p-8 border rounded-lg bg-gray-50 h-64">
                        <FileWord className="h-16 w-16 text-primary mb-4" />
                        <p className="text-center text-muted-foreground">Documento Word cargado correctamente</p>
                      </div>
                    ) : (
                      preview && (
                        <img
                          src={preview || "/placeholder.svg"}
                          alt="Vista previa del documento"
                          className="w-full h-auto rounded-lg border"
                          style={{
                            filter: `brightness(${brightness}%) contrast(${contrast}%)`,
                          }}
                        />
                      )
                    )}
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    {(isPDF || isWord) && (
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Información</AlertTitle>
                        <AlertDescription>
                          {isPDF
                            ? "Los archivos PDF se procesan directamente para extraer su texto. Los ajustes de imagen no aplican para este formato."
                            : "Los documentos Word se procesan directamente para extraer su texto. Los ajustes de imagen no aplican para este formato."}
                        </AlertDescription>
                      </Alert>
                    )}

                    {!isPDF && !isWord && (
                      <>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="brightness">Brillo: {brightness}%</Label>
                          </div>
                          <Slider
                            id="brightness"
                            min={50}
                            max={150}
                            step={1}
                            value={[brightness]}
                            onValueChange={(value) => setBrightness(value[0])}
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="contrast">Contraste: {contrast}%</Label>
                          </div>
                          <Slider
                            id="contrast"
                            min={50}
                            max={150}
                            step={1}
                            value={[contrast]}
                            onValueChange={(value) => setContrast(value[0])}
                          />
                        </div>
                      </>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Información del archivo:</p>
                      <ul className="text-sm space-y-1">
                        <li>
                          <span className="font-medium">Nombre:</span> {file?.name}
                        </li>
                        <li>
                          <span className="font-medium">Tamaño:</span> {file ? (file.size / 1024 / 1024).toFixed(2) : 0}{" "}
                          MB
                        </li>
                        <li>
                          <span className="font-medium">Tipo:</span> {file?.type || "Desconocido"}
                        </li>
                        {isProcessing && (
                          <li>
                            <span className="font-medium">Progreso:</span>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                              <div
                                className="bg-primary h-2.5 rounded-full"
                                style={{ width: `${processingProgress}%` }}
                              ></div>
                            </div>
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Renderizar miniaturas de múltiples archivos */}
                    {renderFilesThumbnails()}

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <Button onClick={handleProcessDocument} disabled={isProcessing}>
                        {isProcessing ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Procesando... {processingProgress.toFixed(0)}%
                          </>
                        ) : (
                          <>
                            <FileText className="mr-2 h-4 w-4" />
                            {selectedFiles.length > 1 ? "Extraer texto de todos los archivos" : "Extraer texto"}
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setFile(null)
                          setPreview(null)
                          setExtractedText("")
                          setAnalysis(null)
                          setIsPDF(false)
                          setIsWord(false)
                          setShowPreview(false)
                          setPdfError(null)
                          setSelectedFiles([])
                        }}
                      >
                        Subir otros archivos
                      </Button>
                    </div>

                    {pdfError && (
                      <Alert variant="destructive" className="mt-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error al procesar el PDF</AlertTitle>
                        <AlertDescription>{pdfError}</AlertDescription>
                      </Alert>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <Card className="h-full border-blue-100">
                  <CardHeader className="flex flex-row items-center justify-between bg-blue-50 border-b border-blue-100">
                    <div>
                      <CardTitle className="text-lg">Texto del documento</CardTitle>
                      <CardDescription>
                        {file
                          ? "Texto extraído del documento mediante OCR o procesamiento directo"
                          : "Texto ingresado manualmente para análisis"}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <TextToSpeech text={extractedText} label="Leer texto extraído" />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          if (file) {
                            setShowPreview(false)
                          } else {
                            setShowPreview(false)
                            setExtractedText("")
                            setAnalysis(null)
                          }
                        }}
                      >
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Volver
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Textarea
                        ref={textareaRef}
                        value={extractedText || ""}
                        onChange={(e) => setExtractedText(e.target.value)}
                        className="min-h-[250px] sm:min-h-[400px] font-mono text-sm"
                        placeholder="El texto extraído aparecerá aquí. También puedes pegar o escribir texto manualmente."
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Button size="sm" variant="ghost" onClick={handleCopyText}>
                          {copied ? (
                            <>
                              <Check className="h-4 w-4 mr-1" />
                              Copiado
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-1" />
                              Copiar
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-muted-foreground">
                        {isPDF || isWord
                          ? "El texto ha sido extraído directamente del documento"
                          : file && extractedText && !isProcessing
                            ? "El texto ha sido extraído con tecnología OCR avanzada"
                            : "Puedes editar el texto manualmente"}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" onClick={handleDownloadText} disabled={!extractedText}>
                      <Download className="mr-2 h-4 w-4" />
                      Descargar como TXT
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Añadir anuncio en medio del contenido cuando se muestra el análisis */}
              {showPreview && (
                <div className="my-6">
                  <AdUnit slot="7654321098" format="horizontal" className="horizontal in-content" />
                </div>
              )}

              {renderFilesThumbnails()}

              <div>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
                  <TabsList className="grid grid-cols-2 mb-4">
                    <TabsTrigger value="analysis" className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      Análisis
                    </TabsTrigger>
                    <TabsTrigger value="chat" className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Preguntar al AI
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="analysis" className="h-full">
                    {analysis ? (
                      renderAnalysis()
                    ) : (
                      <Card className="h-full flex items-center justify-center border-blue-100">
                        <CardContent className="text-center py-12">
                          <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <h3 className="text-lg font-medium mb-2">No hay análisis disponible</h3>
                          <p className="text-muted-foreground mb-6">
                            Ingresa o modifica el texto para generar un análisis legal automático.
                          </p>
                          <Button
                            onClick={() => {
                              if (extractedText.trim()) {
                                const documentAnalysis = analyzeDocument(extractedText)
                                setAnalysis(documentAnalysis)
                              }
                            }}
                            disabled={!extractedText.trim()}
                          >
                            <FileText className="mr-2 h-4 w-4" />
                            Analizar texto
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                  </TabsContent>

                  <TabsContent value="chat" className="h-full">
                    <Card className="h-full border-blue-100">
                      <CardHeader className="bg-blue-50 border-b border-blue-100">
                        <CardTitle className="text-lg flex items-center">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Consulta sobre el documento
                        </CardTitle>
                        <CardDescription>
                          Haz preguntas específicas sobre el documento y obtén respuestas inteligentes basadas en su
                          contenido
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="h-[350px] sm:h-[500px]">
                        <DocumentChat documentText={extractedText} />
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Anuncio antes del footer */}

      <SiteFooter />
    </div>
  )
}
