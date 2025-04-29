// Asegurarnos de que no haya importaciones de 'fs' en este archivo
// Si hay alguna, la eliminaremos o modificaremos según sea necesario

// Verificar que la importación de pdfjs sea compatible con el entorno serverless
import Tesseract from "tesseract.js"
import * as pdfjs from "pdfjs-dist"

// Configurar worker de PDF.js solo en el cliente
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
}

export type ProcessingProgress = {
  status: "processing" | "complete" | "error"
  progress: number
  text?: string
  error?: string
}

// Función para extraer texto de PDFs usando pdf.js
async function extractTextFromPDF(file: File, onProgress?: (progress: ProcessingProgress) => void): Promise<string> {
  try {
    // Convertir el archivo a ArrayBuffer
    const arrayBuffer = await file.arrayBuffer()

    // Cargar el documento PDF
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise
    const numPages = pdf.numPages

    let fullText = ""

    // Extraer texto de cada página
    for (let i = 1; i <= numPages; i++) {
      if (onProgress) {
        onProgress({
          status: "processing",
          progress: (i / numPages) * 100,
        })
      }

      const page = await pdf.getPage(i)
      const textContent = await page.getTextContent()
      const pageText = textContent.items.map((item: any) => item.str).join(" ")

      fullText += pageText + "\n\n"
    }

    return fullText.trim()
  } catch (error) {
    console.error("Error al extraer texto del PDF:", error)
    throw error
  }
}

// Función para extraer texto de documentos Word usando FileReader
async function extractTextFromWord(file: File, onProgress?: (progress: ProcessingProgress) => void): Promise<string> {
  try {
    if (onProgress) {
      onProgress({
        status: "processing",
        progress: 30,
      })
    }

    // Para documentos Word, mostraremos un mensaje informativo
    return `Este es un documento Word (.${file.name.split(".").pop()}). 
   
Por limitaciones técnicas del navegador, no podemos procesar directamente el contenido de documentos Word. 

Recomendaciones:
1. Guarda el documento como PDF y súbelo nuevamente
2. Copia y pega el contenido directamente en un campo de texto
3. Utiliza la versión de escritorio de la aplicación para procesar documentos Word

Nombre del archivo: ${file.name}
Tamaño: ${(file.size / 1024).toFixed(2)} KB
Tipo: ${file.type}`
  } catch (error) {
    console.error("Error al procesar el documento Word:", error)
    throw error
  }
}

export async function processDocument(
  file: File,
  options: {
    language?: string
    brightness?: number
    contrast?: number
  } = {},
  onProgress?: (progress: ProcessingProgress) => void,
): Promise<string> {
  try {
    // Determinar el tipo de archivo
    const fileType = file.type

    // Para PDFs
    if (fileType === "application/pdf") {
      const text = await extractTextFromPDF(file, onProgress)

      if (onProgress) {
        onProgress({
          status: "complete",
          progress: 100,
          text,
        })
      }

      return text
    }

    // Para documentos Word
    if (
      fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      fileType === "application/msword"
    ) {
      const text = await extractTextFromWord(file, onProgress)

      if (onProgress) {
        onProgress({
          status: "complete",
          progress: 100,
          text,
        })
      }

      return text
    }

    // Para imágenes, usar Tesseract
    const { language = "spa", brightness = 100, contrast = 100 } = options

    // Crear un canvas para aplicar los ajustes de imagen
    const img = new Image()
    img.crossOrigin = "anonymous"

    // Convertir File a URL
    const imageUrl = URL.createObjectURL(file)
    img.src = imageUrl

    await new Promise((resolve) => {
      img.onload = resolve
    })

    const canvas = document.createElement("canvas")
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext("2d")

    if (!ctx) {
      throw new Error("No se pudo crear el contexto del canvas")
    }

    // Aplicar ajustes de brillo y contraste
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`
    ctx.drawImage(img, 0, 0)

    // Liberar URL
    URL.revokeObjectURL(imageUrl)

    // Convertir canvas a blob
    const processedBlob = await new Promise<Blob>((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob)
      }, "image/png")
    })

    // Procesar con Tesseract
    const result = await Tesseract.recognize(processedBlob, language, {
      logger: (m) => {
        if (onProgress) {
          onProgress({
            status: "processing",
            progress: m.progress * 100,
          })
        }
      },
    })

    const text = result.data.text

    if (onProgress) {
      onProgress({
        status: "complete",
        progress: 100,
        text,
      })
    }

    return text
  } catch (error) {
    console.error("Error al procesar el documento:", error)
    if (onProgress) {
      onProgress({
        status: "error",
        progress: 0,
        error: "Error al procesar el documento",
      })
    }
    throw error
  }
}
