"use client"

import type React from "react"

import { useState, useCallback, useRef, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Loader2,
  Upload,
  FileText,
  FileImage,
  FileUp,
  Settings,
  Zap,
  Download,
  Copy,
  Check,
  AlertCircle,
  Crop,
  RotateCw,
  X,
  MessageSquare,
} from "lucide-react"
import { processDocument } from "@/lib/document-processor"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/components/ui/use-toast"
import { analyzeDocument } from "@/lib/document-analyzer"
import { AdUnit } from "@/components/ad-unit"
import { SiteFooter } from "@/components/site-footer"
import { DocumentChat } from "@/components/document-chat"
import { TextToSpeech } from "@/components/text-to-speech"
import { ShareButton } from "@/components/share-button"

// Componente principal
export default function AnalyzePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [extractedText, setExtractedText] = useState("")
  const [manualText, setManualText] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingProgress, setProcessingProgress] = useState(0)
  const [processingStatus, setProcessingStatus] = useState("")
  const [analysisResult, setAnalysisResult] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("upload")
  const [resultTab, setResultTab] = useState("analysis")
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [copied, setCopied] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [isPDF, setIsPDF] = useState(false)
  const [isWord, setIsWord] = useState(false)

  // Opciones de OCR
  const [ocrOptions, setOcrOptions] = useState({
    language: "spa",
    brightness: 100,
    contrast: 100,
    threshold: 128,
    denoise: true,
    scale: 1.5,
  })

  // Área de selección para OCR
  const [selectionArea, setSelectionArea] = useState<{
    x: number
    y: number
    width: number
    height: number
  } | null>(null)
  const [isSelecting, setIsSelecting] = useState(false)
  const [selectionStart, setSelectionStart] = useState({ x: 0, y: 0 })
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false)
  const [rotation, setRotation] = useState(0)

  // Verificar autenticación
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login?callbackUrl=/analyze")
    }
  }, [status, router])

  // Manejar cambio de archivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    const selectedFile = files[0]
    setFile(selectedFile)
    setSelectedFiles(Array.from(files))
    setExtractedText("")
    setAnalysisResult(null)
    setError(null)
    setSelectionArea(null)
    setRotation(0)

    // Determinar tipo de archivo
    setIsPDF(selectedFile.type === "application/pdf")
    setIsWord(
      selectedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        selectedFile.type === "application/msword" ||
        selectedFile.type === "application/rtf" ||
        selectedFile.name.endsWith(".rtf"),
    )

    // Si es una imagen, cargarla para previsualización y selección de área
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (imageRef.current && event.target?.result) {
          imageRef.current.src = event.target.result as string
          imageRef.current.onload = () => {
            drawImageOnCanvas()
          }
        }
      }
      reader.readAsDataURL(selectedFile)
    } else {
      // Limpiar canvas si no es una imagen
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d")
        if (ctx) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        }
      }
    }
  }

  // Dibujar imagen en el canvas
  const drawImageOnCanvas = useCallback(() => {
    if (!canvasRef.current || !imageRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar tamaño del canvas al contenedor manteniendo la relación de aspecto
    const container = canvas.parentElement
    if (!container) return

    const containerWidth = container.clientWidth
    const imgWidth = imageRef.current.naturalWidth
    const imgHeight = imageRef.current.naturalHeight
    const scale = containerWidth / imgWidth

    canvas.width = containerWidth
    canvas.height = imgHeight * scale

    // Guardar el estado actual del contexto
    ctx.save()

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Trasladar al centro del canvas para la rotación
    if (rotation !== 0) {
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.translate(-canvas.width / 2, -canvas.height / 2)
    }

    // Dibujar imagen
    ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height)

    // Restaurar el contexto para dibujar el área de selección sin rotación
    ctx.restore()

    // Dibujar área de selección si existe
    if (selectionArea) {
      ctx.strokeStyle = "#3b82f6"
      ctx.lineWidth = 2
      ctx.strokeRect(selectionArea.x, selectionArea.y, selectionArea.width, selectionArea.height)

      // Añadir un fondo semitransparente para resaltar el área seleccionada
      ctx.fillStyle = "rgba(59, 130, 246, 0.2)"
      ctx.fillRect(selectionArea.x, selectionArea.y, selectionArea.width, selectionArea.height)
    }
  }, [selectionArea, rotation])

  // Actualizar canvas cuando cambia el área de selección o la rotación
  useEffect(() => {
    drawImageOnCanvas()
  }, [selectionArea, rotation, drawImageOnCanvas])

  // Eventos de mouse para selección de área
  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setIsSelecting(true)
    setSelectionStart({ x, y })
    setSelectionArea({ x, y, width: 0, height: 0 })
  }

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isSelecting || !canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const width = x - selectionStart.x
    const height = y - selectionStart.y

    setSelectionArea({
      x: selectionStart.x,
      y: selectionStart.y,
      width,
      height,
    })
  }

  const handleCanvasMouseUp = () => {
    setIsSelecting(false)
    // Normalizar área de selección (asegurar que width y height sean positivos)
    if (selectionArea) {
      const normalizedArea = {
        x: selectionArea.width < 0 ? selectionArea.x + selectionArea.width : selectionArea.x,
        y: selectionArea.height < 0 ? selectionArea.y + selectionArea.height : selectionArea.y,
        width: Math.abs(selectionArea.width),
        height: Math.abs(selectionArea.height),
      }
      setSelectionArea(normalizedArea)
    }
  }

  const clearSelection = () => {
    setSelectionArea(null)
  }

  const rotateImage = () => {
    setRotation((prev) => (prev + 90) % 360)
  }

  // Procesar documento
  const processSelectedDocument = async () => {
    if (!file && !manualText) {
      setError("Por favor, seleccione un archivo o ingrese texto manualmente.")
      return
    }

    setIsProcessing(true)
    setProcessingProgress(0)
    setProcessingStatus("starting")
    setError(null)

    try {
      let combinedText = ""

      if (activeTab === "upload" && selectedFiles.length > 0) {
        // Procesar cada archivo seleccionado
        for (let i = 0; i < selectedFiles.length; i++) {
          const currentFile = selectedFiles[i]

          // Actualizar progreso para mostrar qué archivo se está procesando
          setProcessingProgress((i / selectedFiles.length) * 50)

          // Procesar archivo en el cliente
          const text = await processDocument(
            currentFile,
            {
              ...ocrOptions,
              area: currentFile === file ? selectionArea : null, // Solo aplicar área de selección al archivo actual
            },
            (progress) => {
              // Calcular el progreso total considerando el archivo actual y el progreso dentro de ese archivo
              const fileProgress = progress.progress / 100 // Convertir a decimal
              const overallProgress = ((i + fileProgress) / selectedFiles.length) * 100
              setProcessingProgress(overallProgress)
              setProcessingStatus(progress.status)
            },
          )

          // Agregar un separador entre los textos de diferentes archivos
          if (i > 0) {
            combinedText += "\n\n--- NUEVO DOCUMENTO ---\n\n"
          }
          combinedText += text
        }

        setExtractedText(combinedText)
      } else if (activeTab === "paste") {
        combinedText = manualText
      }

      if (combinedText.trim()) {
        // Análisis local para respuesta inmediata
        const analysis = analyzeDocument(combinedText)
        setAnalysisResult(analysis)

        // Enviar texto al servidor para análisis y registro
        const formData = new FormData()
        if (file) formData.append("file", file)
        formData.append("extractedText", combinedText)

        fetch("/api/analyze-document", {
          method: "POST",
          body: formData,
        }).catch((error) => {
          console.error("Error al enviar análisis al servidor:", error)
        })

        setShowPreview(true)
      }
    } catch (error: any) {
      console.error("Error al procesar documento:", error)
      setError(`Error: ${error.message || "Error desconocido al procesar el documento"}`)
      toast({
        title: "Error",
        description: error.message || "Error desconocido al procesar el documento",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
      setProcessingProgress(100)
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

  // Renderizar miniaturas de múltiples archivos
  const renderFilesThumbnails = () => {
    if (!selectedFiles || selectedFiles.length <= 1) return null

    return (
      <div className="mt-4">
        <p className="text-sm font-medium mb-2">Archivos seleccionados ({selectedFiles.length}):</p>
        <div className="flex flex-wrap gap-2">
          {selectedFiles.map((f, index) => (
            <div
              key={index}
              className={`border rounded p-2 text-xs flex items-center ${f === file ? "bg-primary/10 border-primary" : ""}`}
              onClick={() => {
                // Cambiar la vista previa al archivo seleccionado
                setFile(f)
                setIsPDF(f.type === "application/pdf")
                setIsWord(
                  f.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
                    f.type === "application/msword" ||
                    f.type === "application/rtf" ||
                    f.name.endsWith(".rtf"),
                )

                // Si es una imagen, cargarla para previsualización
                if (f.type.startsWith("image/")) {
                  const reader = new FileReader()
                  reader.onload = (event) => {
                    if (imageRef.current && event.target?.result) {
                      imageRef.current.src = event.target.result as string
                      imageRef.current.onload = () => {
                        drawImageOnCanvas()
                      }
                    }
                  }
                  reader.readAsDataURL(f)
                }
              }}
            >
              {f.type.includes("image") ? (
                <FileImage className="h-4 w-4 mr-1 text-primary" />
              ) : f.type.includes("pdf") ? (
                <FileText className="h-4 w-4 mr-1 text-red-500" />
              ) : (
                <FileText className="h-4 w-4 mr-1 text-blue-500" />
              )}
              {f.name.length > 15 ? f.name.substring(0, 12) + "..." : f.name}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Función para generar texto para la lectura del análisis
  const getAnalysisText = () => {
    if (!analysisResult) return ""

    let text = `Análisis del documento: ${analysisResult.tipo}. ${analysisResult.descripcion} `

    // Añadir partes involucradas
    if (analysisResult.partes && Object.keys(analysisResult.partes).length > 0) {
      text += "Partes involucradas: "
      Object.entries(analysisResult.partes).forEach(([rol, nombre]) => {
        text += `${rol}: ${nombre}. `
      })
    }

    // Añadir fechas importantes
    if (analysisResult.fechas && Object.keys(analysisResult.fechas).length > 0) {
      text += "Fechas importantes: "
      Object.entries(analysisResult.fechas).forEach(([tipo, fecha]) => {
        text += `${tipo}: ${fecha}. `
      })
    }

    // Añadir montos
    if (analysisResult.montos && Object.keys(analysisResult.montos).length > 0) {
      text += "Montos y valores: "
      Object.entries(analysisResult.montos).forEach(([tipo, monto]) => {
        text += `${tipo}: ${monto}. `
      })
    }

    return text
  }

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
        <p className="text-center">Verificando sesión...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <a href="/">
                <FileImage className="h-6 w-6 text-primary" />
                <span className="font-bold">LegalPO</span>
              </a>
            </Button>
          </div>
          <h1 className="text-xl font-semibold">Analizador de Documentos</h1>
        </div>
      </header>

      {/* Anuncio en la parte superior */}
      <div className="container py-4 mt-2">
        <AdUnit slot="8765432109" format="horizontal" className="horizontal" />
      </div>

      <main className="flex-1 container py-6 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          {!showPreview ? (
            <div className="space-y-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="upload" className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    Subir Documento
                  </TabsTrigger>
                  <TabsTrigger value="paste" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Pegar Texto
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="upload" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Subir Documento</CardTitle>
                      <CardDescription>
                        Arrastra y suelta o selecciona un archivo para comenzar el análisis
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div
                          className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <FileUp className="h-10 w-10 mx-auto mb-2 text-gray-400" />
                          <p>
                            Arrastra y suelta tu archivo aquí o{" "}
                            <span className="text-blue-500">haz clic para seleccionar</span>
                          </p>
                          <p className="text-sm text-gray-500 mt-1">Soporta PDF, Word, imágenes y archivos de texto</p>
                          <input
                            ref={fileInputRef}
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx,.rtf,.txt,image/*"
                            onChange={handleFileChange}
                            multiple
                          />
                        </div>

                        {file && (
                          <div className="flex items-center gap-2 p-2 border rounded-md">
                            {file.type.includes("image") ? (
                              <FileImage className="h-5 w-5 text-primary" />
                            ) : file.type.includes("pdf") ? (
                              <FileText className="h-5 w-5 text-red-500" />
                            ) : (
                              <FileText className="h-5 w-5 text-blue-500" />
                            )}
                            <span className="flex-1 truncate">{file.name}</span>
                            <span className="text-sm text-gray-500">{(file.size / 1024).toFixed(1)} KB</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setFile(null)
                                setSelectedFiles([])
                                setExtractedText("")
                                if (fileInputRef.current) fileInputRef.current.value = ""
                              }}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        )}

                        {/* Renderizar miniaturas de múltiples archivos */}
                        {renderFilesThumbnails()}

                        {file && file.type.startsWith("image/") && (
                          <div className="mt-4 space-y-2">
                            <div className="relative border rounded-md overflow-hidden">
                              <img
                                ref={imageRef}
                                src="/placeholder.svg"
                                alt="Preview"
                                className="hidden"
                                onLoad={drawImageOnCanvas}
                              />
                              <canvas
                                ref={canvasRef}
                                className="w-full cursor-crosshair"
                                onMouseDown={handleCanvasMouseDown}
                                onMouseMove={handleCanvasMouseMove}
                                onMouseUp={handleCanvasMouseUp}
                                onMouseLeave={handleCanvasMouseUp}
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={clearSelection}>
                                  <Crop className="h-4 w-4 mr-1" />
                                  Limpiar selección
                                </Button>
                                <Button variant="outline" size="sm" onClick={rotateImage}>
                                  <RotateCw className="h-4 w-4 mr-1" />
                                  Rotar
                                </Button>
                              </div>
                              <p className="text-sm text-gray-500">
                                {selectionArea
                                  ? "Área seleccionada para OCR"
                                  : "Selecciona un área específica para OCR"}
                              </p>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <Button
                            variant="outline"
                            type="button"
                            onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                            className="flex items-center gap-2"
                          >
                            <Settings className="h-4 w-4" />
                            {showAdvancedOptions ? "Ocultar opciones avanzadas" : "Mostrar opciones avanzadas"}
                          </Button>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="flex items-center gap-2"
                                  onClick={() => {
                                    setOcrOptions({
                                      language: "spa",
                                      brightness: 100,
                                      contrast: 100,
                                      threshold: 128,
                                      denoise: true,
                                      scale: 1.5,
                                    })
                                  }}
                                >
                                  <Zap className="h-4 w-4" />
                                  Restablecer
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Restablecer opciones a valores predeterminados</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>

                        {showAdvancedOptions && (
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="ocr-options">
                              <AccordionTrigger>Opciones de OCR</AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-4 pt-2">
                                  <div className="space-y-2">
                                    <Label htmlFor="language">Idioma del documento</Label>
                                    <p className="text-sm text-gray-500 mb-1">
                                      Selecciona el idioma principal del texto en la imagen para mejorar el
                                      reconocimiento
                                    </p>
                                    <Select
                                      value={ocrOptions.language}
                                      onValueChange={(value) => setOcrOptions({ ...ocrOptions, language: value })}
                                    >
                                      <SelectTrigger id="language">
                                        <SelectValue placeholder="Seleccionar idioma" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="spa">Español</SelectItem>
                                        <SelectItem value="eng">Inglés</SelectItem>
                                        <SelectItem value="por">Portugués</SelectItem>
                                        <SelectItem value="fra">Francés</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>

                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <Label htmlFor="brightness">Brillo: {ocrOptions.brightness}%</Label>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-1">
                                      Ajusta el brillo si la imagen es muy oscura (aumentar) o muy clara (disminuir)
                                    </p>
                                    <Slider
                                      id="brightness"
                                      min={50}
                                      max={150}
                                      step={5}
                                      value={[ocrOptions.brightness]}
                                      onValueChange={(value) => setOcrOptions({ ...ocrOptions, brightness: value[0] })}
                                    />
                                  </div>

                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <Label htmlFor="contrast">Contraste: {ocrOptions.contrast}%</Label>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-1">
                                      Aumenta el contraste si el texto no se distingue bien del fondo
                                    </p>
                                    <Slider
                                      id="contrast"
                                      min={50}
                                      max={150}
                                      step={5}
                                      value={[ocrOptions.contrast]}
                                      onValueChange={(value) => setOcrOptions({ ...ocrOptions, contrast: value[0] })}
                                    />
                                  </div>

                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <Label htmlFor="threshold">Umbral de binarización: {ocrOptions.threshold}</Label>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-1">
                                      Determina qué se considera texto (negro) y qué se considera fondo (blanco)
                                    </p>
                                    <Slider
                                      id="threshold"
                                      min={0}
                                      max={255}
                                      step={5}
                                      value={[ocrOptions.threshold]}
                                      onValueChange={(value) => setOcrOptions({ ...ocrOptions, threshold: value[0] })}
                                    />
                                  </div>

                                  <div className="flex items-center space-x-2">
                                    <Switch
                                      id="denoise"
                                      checked={ocrOptions.denoise}
                                      onCheckedChange={(checked) => setOcrOptions({ ...ocrOptions, denoise: checked })}
                                    />
                                    <div>
                                      <Label htmlFor="denoise">Reducción de ruido</Label>
                                      <p className="text-xs text-gray-500">
                                        Elimina manchas y puntos que pueden confundirse con texto
                                      </p>
                                    </div>
                                  </div>

                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <Label htmlFor="scale">Escala: {ocrOptions.scale}x</Label>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-1">
                                      Aumenta el tamaño de la imagen para mejorar el reconocimiento de texto pequeño
                                    </p>
                                    <Slider
                                      id="scale"
                                      min={0.5}
                                      max={2}
                                      step={0.1}
                                      value={[ocrOptions.scale]}
                                      onValueChange={(value) => setOcrOptions({ ...ocrOptions, scale: value[0] })}
                                    />
                                  </div>

                                  <div className="bg-blue-50 p-3 rounded-md mt-2">
                                    <h4 className="text-sm font-medium text-blue-700 mb-1">
                                      ¿Cómo mejorar el reconocimiento de texto?
                                    </h4>
                                    <ul className="text-xs text-blue-600 space-y-1">
                                      <li>• Si el texto es muy pequeño: aumenta la escala</li>
                                      <li>• Si la imagen tiene manchas: activa la reducción de ruido</li>
                                      <li>• Si el texto es muy claro: aumenta el contraste y reduce el umbral</li>
                                      <li>• Si el texto es muy oscuro: reduce el brillo</li>
                                      <li>
                                        • Para documentos escaneados: selecciona un área específica con el texto más
                                        importante
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="paste" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pegar Texto</CardTitle>
                      <CardDescription>
                        Copia y pega directamente el contenido del documento para analizarlo
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Textarea
                        placeholder="Pega aquí el texto del documento que deseas analizar..."
                        value={manualText}
                        onChange={(e) => setManualText(e.target.value)}
                        className="min-h-[300px]"
                      />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {isProcessing ? (
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      {processingStatus === "starting"
                        ? "Iniciando procesamiento..."
                        : processingStatus === "loading_pdf"
                          ? "Cargando PDF..."
                          : processingStatus === "extracting_text"
                            ? "Extrayendo texto..."
                            : processingStatus === "pdf_ocr_required"
                              ? "Realizando OCR en PDF escaneado..."
                              : processingStatus === "performing_ocr_on_pdf"
                                ? "Realizando OCR en páginas del PDF..."
                                : processingStatus === "loading_image"
                                  ? "Cargando imagen..."
                                  : processingStatus === "preprocessing_image"
                                    ? "Preprocesando imagen..."
                                    : processingStatus === "recognizing_text"
                                      ? "Reconociendo texto..."
                                      : processingStatus === "finalizing"
                                        ? "Finalizando..."
                                        : "Procesando..."}
                    </span>
                    <span className="text-sm">{Math.round(processingProgress)}%</span>
                  </div>
                  <Progress value={processingProgress} className="w-full" />
                </div>
              ) : (
                <Button
                  onClick={processSelectedDocument}
                  className="mt-6 w-full"
                  size="lg"
                  disabled={(!file && !manualText) || isProcessing}
                >
                  Analizar Documento
                </Button>
              )}
            </div>
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
                      <TextToSpeech text={extractedText || manualText} label="Leer texto extraído" />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setShowPreview(false)
                          setAnalysisResult(null)
                        }}
                      >
                        Volver
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Textarea
                        ref={textareaRef}
                        value={extractedText || manualText}
                        onChange={(e) =>
                          activeTab === "upload" ? setExtractedText(e.target.value) : setManualText(e.target.value)
                        }
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
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDownloadText}
                      disabled={!extractedText && !manualText}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Descargar como TXT
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Añadir anuncio en medio del contenido cuando se muestra el análisis */}
              <div className="my-6 lg:hidden">
                <AdUnit slot="7654321098" format="horizontal" className="horizontal in-content" />
              </div>

              {/* Renderizar miniaturas de múltiples archivos */}
              {renderFilesThumbnails()}

              <div>
                <Tabs value={resultTab} onValueChange={setResultTab} className="h-full">
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
                    {analysisResult ? (
                      <Card className="h-full border-blue-100">
                        <CardHeader className="flex flex-row items-center justify-between bg-blue-50 border-b border-blue-100">
                          <div>
                            <CardTitle className="text-xl">{analysisResult.tipo}</CardTitle>
                            <CardDescription className="text-base">{analysisResult.descripcion}</CardDescription>
                          </div>
                          <div className="flex items-center gap-2">
                            <TextToSpeech text={getAnalysisText()} label="Leer análisis completo" />
                            <ShareButton
                              title={`Análisis de documento: ${analysisResult.tipo}`}
                              text={getAnalysisText()}
                              size="sm"
                            />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            {/* Introducción explicativa */}
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
                              <h3 className="text-lg font-medium text-blue-800 mb-2">¿Qué significa este análisis?</h3>
                              <p className="text-blue-700">
                                Hemos analizado tu documento y te presentamos un resumen de la información más
                                importante. Te explicamos en palabras sencillas qué tipo de documento es, quiénes
                                participan, fechas importantes y otros detalles que debes conocer.
                              </p>
                            </div>

                            <Accordion type="single" collapsible className="w-full">
                              {analysisResult.partes && Object.keys(analysisResult.partes).length > 0 && (
                                <AccordionItem value="partes">
                                  <AccordionTrigger className="text-blue-600 font-medium">
                                    Partes involucradas
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <div className="mb-3 text-gray-600">
                                      <p>
                                        Estas son las personas o empresas que participan en este documento. Es
                                        importante identificar correctamente quién es quién para entender sus derechos y
                                        obligaciones.
                                      </p>
                                    </div>
                                    <ul className="space-y-2">
                                      {Object.entries(analysisResult.partes).map(([rol, nombre], i) => (
                                        <li key={i} className="flex items-start gap-2 bg-gray-50 p-2 rounded">
                                          <span className="font-semibold">{rol}:</span> {nombre}
                                          <span className="text-sm text-gray-500 ml-2">
                                            {rol.toLowerCase().includes("demandante") ||
                                            rol.toLowerCase().includes("actor")
                                              ? "(Quien inicia la acción legal)"
                                              : rol.toLowerCase().includes("demandado")
                                                ? "(Contra quien se dirige la acción legal)"
                                                : rol.toLowerCase().includes("arrendador")
                                                  ? "(Quien alquila la propiedad)"
                                                  : rol.toLowerCase().includes("arrendatario")
                                                    ? "(Quien paga por usar la propiedad)"
                                                    : rol.toLowerCase().includes("empleador")
                                                      ? "(Quien contrata)"
                                                      : rol.toLowerCase().includes("trabajador")
                                                        ? "(Quien es contratado)"
                                                        : rol.toLowerCase().includes("vendedor")
                                                          ? "(Quien vende)"
                                                          : rol.toLowerCase().includes("comprador")
                                                            ? "(Quien compra)"
                                                            : ""}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              )}

                              {analysisResult.fechas && Object.keys(analysisResult.fechas).length > 0 && (
                                <AccordionItem value="fechas">
                                  <AccordionTrigger className="text-blue-600 font-medium">
                                    Fechas importantes
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <div className="mb-3 text-gray-600">
                                      <p>
                                        Las fechas son muy importantes en documentos legales. Marcan plazos,
                                        vencimientos y momentos clave que debes tener en cuenta.
                                      </p>
                                    </div>
                                    <ul className="space-y-2">
                                      {Object.entries(analysisResult.fechas).map(([tipo, fecha], i) => (
                                        <li key={i} className="flex items-start gap-2 bg-gray-50 p-2 rounded">
                                          <span className="font-semibold">{tipo}:</span> {fecha}
                                          <span className="text-sm text-gray-500 ml-2">
                                            {tipo.toLowerCase().includes("vencimiento")
                                              ? "(Fecha límite que no debes olvidar)"
                                              : tipo.toLowerCase().includes("firma")
                                                ? "(Cuando se firmó el documento)"
                                                : tipo.toLowerCase().includes("plazo")
                                                  ? "(Tiempo límite para cumplir algo)"
                                                  : tipo.toLowerCase().includes("audiencia")
                                                    ? "(Día en que debes presentarte ante el tribunal)"
                                                    : ""}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              )}

                              {analysisResult.montos && Object.keys(analysisResult.montos).length > 0 && (
                                <AccordionItem value="montos">
                                  <AccordionTrigger className="text-blue-600 font-medium">
                                    Montos y valores
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <div className="mb-3 text-gray-600">
                                      <p>
                                        Aquí se muestran las cantidades de dinero mencionadas en el documento. Es
                                        importante verificar que estos montos sean correctos.
                                      </p>
                                    </div>
                                    <ul className="space-y-2">
                                      {Object.entries(analysisResult.montos).map(([tipo, monto], i) => (
                                        <li key={i} className="flex items-start gap-2 bg-gray-50 p-2 rounded">
                                          <span className="font-semibold">{tipo}:</span> {monto}
                                          <span className="text-sm text-gray-500 ml-2">
                                            {tipo.toLowerCase().includes("precio")
                                              ? "(Cantidad total a pagar)"
                                              : tipo.toLowerCase().includes("mensual") ||
                                                  tipo.toLowerCase().includes("canon")
                                                ? "(Pago que se hace cada mes)"
                                                : tipo.toLowerCase().includes("garantía")
                                                  ? "(Dinero que se deja como seguridad)"
                                                  : tipo.toLowerCase().includes("multa")
                                                    ? "(Lo que debes pagar si incumples)"
                                                    : ""}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              )}

                              {analysisResult.advertencias && analysisResult.advertencias.length > 0 && (
                                <AccordionItem value="advertencias">
                                  <AccordionTrigger className="text-red-500 font-medium">
                                    Advertencias importantes
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <div className="mb-3 text-gray-600">
                                      <p>
                                        Estas son cosas a las que debes prestar especial atención. Son aspectos del
                                        documento que podrían causarte problemas si no los tienes en cuenta.
                                      </p>
                                    </div>
                                    <ul className="space-y-2">
                                      {analysisResult.advertencias.map((adv: string, i: number) => (
                                        <li key={i} className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                                          {adv}
                                        </li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              )}

                              {analysisResult.recomendaciones && analysisResult.recomendaciones.length > 0 && (
                                <AccordionItem value="recomendaciones">
                                  <AccordionTrigger className="text-blue-500 font-medium">
                                    Recomendaciones prácticas
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <div className="mb-3 text-gray-600">
                                      <p>
                                        Estos son consejos útiles sobre qué hacer con este documento. Te ayudarán a
                                        proteger tus derechos y cumplir con tus obligaciones.
                                      </p>
                                    </div>
                                    <ul className="space-y-2">
                                      {analysisResult.recomendaciones.map((rec: string, i: number) => (
                                        <li key={i} className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                                          {rec}
                                        </li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              )}

                              {analysisResult.conceptosLegales &&
                                Object.keys(analysisResult.conceptosLegales).length > 0 && (
                                  <AccordionItem value="conceptos">
                                    <AccordionTrigger className="text-purple-600 font-medium">
                                      Conceptos legales explicados
                                    </AccordionTrigger>
                                    <AccordionContent>
                                      <div className="mb-3 text-gray-600">
                                        <p>
                                          Aquí te explicamos en palabras sencillas algunos términos legales que aparecen
                                          en el documento y que pueden ser difíciles de entender.
                                        </p>
                                      </div>
                                      <ul className="space-y-2">
                                        {Object.entries(analysisResult.conceptosLegales).map(
                                          ([concepto, explicacion], i) => (
                                            <li key={i} className="bg-purple-50 p-3 rounded">
                                              <span className="font-semibold block">{concepto}:</span>
                                              <span className="text-gray-700">{explicacion}</span>
                                            </li>
                                          ),
                                        )}
                                      </ul>
                                    </AccordionContent>
                                  </AccordionItem>
                                )}
                            </Accordion>

                            <Alert className="bg-yellow-50 border-yellow-200">
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                              <AlertTitle className="text-yellow-700">Recuerda</AlertTitle>
                              <AlertDescription className="text-yellow-600">
                                Este análisis es automático y sirve como guía general. Para decisiones importantes,
                                siempre consulta con un abogado. Un profesional legal puede ver detalles que esta
                                herramienta podría pasar por alto.
                              </AlertDescription>
                            </Alert>

                            {/* Añadir sección de "Qué hacer ahora" */}
                            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                              <h3 className="text-lg font-medium text-green-800 mb-2">¿Qué hacer ahora?</h3>
                              <ul className="space-y-2 text-green-700">
                                <li className="flex items-start">
                                  <span className="mr-2">✓</span>
                                  <span>Lee con atención todas las advertencias y recomendaciones</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-2">✓</span>
                                  <span>Verifica que las fechas y montos sean correctos</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-2">✓</span>
                                  <span>
                                    Si tienes dudas, usa la pestaña "Preguntar al AI" para consultas específicas
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-2">✓</span>
                                  <span>Guarda una copia del documento y este análisis para referencia futura</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
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
                              const text = extractedText || manualText
                              if (text.trim()) {
                                const documentAnalysis = analyzeDocument(text)
                                setAnalysisResult(documentAnalysis)
                              }
                            }}
                            disabled={!(extractedText || manualText).trim()}
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
                        <div className="mt-3 p-3 bg-white rounded-md border border-blue-100">
                          <p className="text-sm text-gray-700 mb-2">Ejemplos de preguntas que puedes hacer:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• "¿Cuáles son mis obligaciones principales en este contrato?"</li>
                            <li>• "¿Qué plazo tengo para responder a esta demanda?"</li>
                            <li>• "Explícame en palabras sencillas qué significa la cláusula sobre indemnización"</li>
                            <li>• "¿Qué riesgos tiene para mí firmar este documento?"</li>
                            <li>• "¿Qué documentos adicionales necesito presentar?"</li>
                          </ul>
                        </div>
                      </CardHeader>
                      <CardContent className="h-[350px] sm:h-[500px]">
                        <DocumentChat documentText={extractedText || manualText} />
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          )}
        </div>
        <AdUnit slot="1234567890" format="horizontal" className="my-8" />
      </main>

      {/* Anuncio antes del footer */}
      <div className="container py-4">
        <AdUnit slot="7654321098" format="horizontal" className="horizontal" />
      </div>
      <div className="mt-8">
        <AdUnit slot="1234567890" format="rectangle" />
      </div>

      <SiteFooter />
    </div>
  )
}
