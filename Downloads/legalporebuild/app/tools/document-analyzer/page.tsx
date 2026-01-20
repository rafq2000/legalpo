"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, FileText, ImageIcon, AlertCircle, CheckCircle, Loader2, Download, X, Eye, Scan } from "lucide-react"
import { createWorker } from "tesseract.js"

interface AnalysisResult {
  analysis: string
  documentInfo: {
    name: string
    size: string
    type: string
    extractedText: string
    timestamp: string
  }
}

export default function DocumentAnalyzer() {
  const [file, setFile] = useState<File | null>(null)
  const [textContent, setTextContent] = useState("")
  const [extractedText, setExtractedText] = useState("")
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isExtracting, setIsExtracting] = useState(false)
  const [ocrProgress, setOcrProgress] = useState(0)
  const [error, setError] = useState("")
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const supportedTypes = {
    images: ["image/jpeg", "image/png", "image/gif", "image/bmp", "image/webp"],
    documents: [
      "application/pdf",
      "text/plain",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
  }

  const isFileSupported = (fileType: string) => {
    return [...supportedTypes.images, ...supportedTypes.documents].includes(fileType)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      handleFileSelect(droppedFile)
    }
  }

  const handleFileSelect = async (selectedFile: File) => {
    setError("")
    setAnalysis(null)
    setExtractedText("")

    // Validate file type
    if (!isFileSupported(selectedFile.type)) {
      setError("Tipo de archivo no soportado. Usa imágenes (JPG, PNG, GIF, BMP, WebP), PDF, Word o archivos de texto.")
      return
    }

    // Validate file size (10MB limit)
    if (selectedFile.size > 10 * 1024 * 1024) {
      setError("El archivo es demasiado grande. El límite es 10MB.")
      return
    }

    setFile(selectedFile)

    // Auto-extract text for images
    if (supportedTypes.images.includes(selectedFile.type)) {
      await extractTextFromImage(selectedFile)
    } else if (selectedFile.type === "text/plain") {
      const text = await selectedFile.text()
      setExtractedText(text)
    }
  }

  const extractTextFromImage = async (imageFile: File) => {
    setIsExtracting(true)
    setOcrProgress(0)

    try {
      const worker = await createWorker("spa", 1, {
        logger: (m) => {
          if (m.status === "recognizing text") {
            setOcrProgress(Math.round(m.progress * 100))
          }
        },
      })

      const {
        data: { text },
      } = await worker.recognize(imageFile)
      await worker.terminate()

      if (text.trim().length < 10) {
        setError("No se pudo extraer texto suficiente de la imagen. Verifica que la imagen tenga texto legible.")
        return
      }

      setExtractedText(text.trim())
    } catch (error) {
      console.error("Error extracting text:", error)
      setError("Error al extraer texto de la imagen. Intenta con otra imagen.")
    } finally {
      setIsExtracting(false)
      setOcrProgress(0)
    }
  }

  const analyzeDocument = async () => {
    if (!file && !textContent.trim()) {
      setError("Selecciona un archivo o ingresa texto para analizar.")
      return
    }

    const contentToAnalyze = extractedText || textContent
    if (contentToAnalyze.trim().length < 10) {
      setError("El contenido es demasiado corto para analizar. Mínimo 10 caracteres.")
      return
    }

    setIsProcessing(true)
    setError("")

    try {
      const formData = new FormData()
      if (file) {
        formData.append("file", file)
      }
      formData.append("textContent", contentToAnalyze)

      const response = await fetch("/api/analyze-document", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Error en el análisis")
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error("No se pudo leer la respuesta")

      let analysisText = ""
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split("\n")

        for (const line of lines) {
          if (line.startsWith("0:")) {
            const content = line.slice(2)
            analysisText += content
          }
        }
      }

      const result: AnalysisResult = {
        analysis: analysisText,
        documentInfo: {
          name: file?.name || "Texto manual",
          size: file ? formatFileSize(file.size) : `${contentToAnalyze.length} caracteres`,
          type: file?.type || "text/plain",
          extractedText: contentToAnalyze,
          timestamp: new Date().toLocaleString("es-CL"),
        },
      }

      setAnalysis(result)
    } catch (error) {
      console.error("Error:", error)
      setError("Error al analizar el documento. Intenta nuevamente.")
    } finally {
      setIsProcessing(false)
    }
  }

  const downloadAnalysis = () => {
    if (!analysis) return

    const content = `ANÁLISIS LEGAL - ${analysis.documentInfo.name}
Fecha: ${analysis.documentInfo.timestamp}
Tipo: ${analysis.documentInfo.type}
Tamaño: ${analysis.documentInfo.size}

${analysis.analysis}

---
Generado por LegalPO - Plataforma Legal Inteligente
AVISO: Esta información es educativa y no constituye asesoría legal profesional.`

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `analisis-legal-${Date.now()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const clearAll = () => {
    setFile(null)
    setTextContent("")
    setExtractedText("")
    setAnalysis(null)
    setError("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Analizador de Documentos Legales</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sube cualquier documento legal y obtén un análisis detallado basado en la normativa chilena vigente 2025.
            Soporte para imágenes con OCR, PDF, Word y texto plano.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-blue-600" />
                  Subir Documento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upload" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="upload">Subir Archivo</TabsTrigger>
                    <TabsTrigger value="text">Texto Manual</TabsTrigger>
                  </TabsList>

                  <TabsContent value="upload" className="space-y-4">
                    {/* Drag & Drop Area */}
                    <div
                      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                        dragActive ? "border-blue-500 bg-blue-50" : "border-slate-300 hover:border-slate-400"
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <div className="space-y-4">
                        <div className="flex justify-center">
                          <Upload className="h-12 w-12 text-slate-400" />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-slate-700">
                            Arrastra tu documento aquí o haz clic para seleccionar
                          </p>
                          <p className="text-sm text-slate-500 mt-2">
                            Soporta: Imágenes (JPG, PNG, GIF, BMP, WebP), PDF, Word, TXT
                          </p>
                          <p className="text-xs text-slate-400 mt-1">Máximo 10MB</p>
                        </div>
                        <Button onClick={() => fileInputRef.current?.click()} className="bg-blue-600 hover:bg-blue-700">
                          Seleccionar Archivo
                        </Button>
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="hidden"
                          accept=".jpg,.jpeg,.png,.gif,.bmp,.webp,.pdf,.doc,.docx,.txt"
                          onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                        />
                      </div>
                    </div>

                    {/* File Info */}
                    {file && (
                      <Card className="bg-slate-50">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {supportedTypes.images.includes(file.type) ? (
                                <ImageIcon className="h-8 w-8 text-green-600" />
                              ) : (
                                <FileText className="h-8 w-8 text-blue-600" />
                              )}
                              <div>
                                <p className="font-medium text-slate-900">{file.name}</p>
                                <p className="text-sm text-slate-500">
                                  {formatFileSize(file.size)} • {file.type}
                                </p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" onClick={clearAll}>
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* OCR Progress */}
                    {isExtracting && (
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <Scan className="h-5 w-5 text-blue-600 animate-pulse" />
                            <span className="font-medium text-blue-900">Extrayendo texto de la imagen...</span>
                          </div>
                          <Progress value={ocrProgress} className="w-full" />
                          <p className="text-sm text-blue-700 mt-2">{ocrProgress}% completado</p>
                        </CardContent>
                      </Card>
                    )}

                    {/* Extracted Text Preview */}
                    {extractedText && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-sm">
                            <Eye className="h-4 w-4" />
                            Texto Extraído ({extractedText.length} caracteres)
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Textarea
                            value={extractedText}
                            onChange={(e) => setExtractedText(e.target.value)}
                            className="min-h-32 text-sm"
                            placeholder="Texto extraído aparecerá aquí..."
                          />
                        </CardContent>
                      </Card>
                    )}
                  </TabsContent>

                  <TabsContent value="text" className="space-y-4">
                    <Textarea
                      placeholder="Pega aquí el texto del documento que quieres analizar..."
                      value={textContent}
                      onChange={(e) => setTextContent(e.target.value)}
                      className="min-h-64"
                    />
                    <p className="text-sm text-slate-500">Caracteres: {textContent.length} (mínimo 10 requeridos)</p>
                  </TabsContent>
                </Tabs>

                {/* Error Display */}
                {error && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">{error}</AlertDescription>
                  </Alert>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    onClick={analyzeDocument}
                    disabled={isProcessing || isExtracting || (!file && !textContent.trim())}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Analizando...
                      </>
                    ) : (
                      <>
                        <FileText className="h-4 w-4 mr-2" />
                        Analizar Documento
                      </>
                    )}
                  </Button>
                  <Button variant="outline" onClick={clearAll}>
                    Limpiar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analysis Results */}
          <div className="space-y-6">
            {analysis ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      Análisis Legal Completado
                    </CardTitle>
                    <Button variant="outline" size="sm" onClick={downloadAnalysis}>
                      <Download className="h-4 w-4 mr-2" />
                      Descargar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Document Info */}
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Información del Documento</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Nombre:</span>
                        <p className="font-medium">{analysis.documentInfo.name}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Tamaño:</span>
                        <p className="font-medium">{analysis.documentInfo.size}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Tipo:</span>
                        <p className="font-medium">{analysis.documentInfo.type}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Analizado:</span>
                        <p className="font-medium">{analysis.documentInfo.timestamp}</p>
                      </div>
                    </div>
                  </div>

                  {/* Analysis Content */}
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Análisis Legal</h3>
                    <div className="bg-white border rounded-lg p-4 max-h-96 overflow-y-auto">
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700 font-sans">
                        {analysis.analysis}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-dashed">
                <CardContent className="p-8 text-center">
                  <FileText className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-slate-600 mb-2">Análisis Legal</h3>
                  <p className="text-slate-500">
                    Sube un documento o ingresa texto para obtener un análisis legal detallado basado en la normativa
                    chilena.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <Scan className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">OCR Avanzado</h3>
              <p className="text-sm text-slate-600">
                Extracción automática de texto de imágenes con tecnología OCR en español
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Múltiples Formatos</h3>
              <p className="text-sm text-slate-600">
                Soporte para PDF, Word, imágenes y texto plano con análisis automático
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <CheckCircle className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Análisis Especializado</h3>
              <p className="text-sm text-slate-600">
                IA entrenada en legislación chilena 2025 con citas específicas de normativa
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Legal Disclaimer */}
        <Alert className="mt-8 border-amber-200 bg-amber-50">
          <AlertCircle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800">
            <strong>Aviso Legal:</strong> Este análisis es de carácter educativo y no constituye asesoría legal
            profesional. Los documentos no se almacenan en nuestros servidores y se procesan de forma segura. Para casos
            específicos, consulte con un abogado colegiado.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
