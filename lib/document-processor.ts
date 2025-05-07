import * as pdfjs from "pdfjs-dist"
import Tesseract from "tesseract.js"
import mammoth from "mammoth"

// Configuración de PDF.js solo en el cliente
const initPdfWorker = () => {
  if (typeof window !== "undefined" && !pdfjs.GlobalWorkerOptions.workerSrc) {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
  }
}

// Caché para resultados de OCR (solo en cliente)
let ocrCache: Map<string, string> | null = null

// Inicializar caché solo en el cliente
const getOcrCache = () => {
  if (typeof window !== "undefined" && !ocrCache) {
    ocrCache = new Map<string, string>()
  }
  return ocrCache
}

export async function processDocument(
  file: File,
  options: {
    language?: string
    brightness?: number
    contrast?: number
    threshold?: number
    denoise?: boolean
    scale?: number
    area?: { x: number; y: number; width: number; height: number } | null
  } = {},
  progressCallback?: (progress: { progress: number; status: string; text?: string }) => void,
): Promise<string> {
  // Asegurarse de que este código solo se ejecute en el cliente
  if (typeof window === "undefined") {
    throw new Error("El procesamiento de documentos solo está disponible en el navegador")
  }

  // Inicializar PDF.js
  initPdfWorker()

  const {
    language = "spa",
    brightness = 100,
    contrast = 100,
    threshold = 128,
    denoise = true,
    scale = 1,
    area = null,
  } = options

  // Función para reportar progreso
  const reportProgress = (progress: number, status: string, text?: string) => {
    if (progressCallback) {
      progressCallback({ progress, status, text })
    }
  }

  reportProgress(5, "starting")

  try {
    // Generar una clave única para el archivo
    const fileKey = await generateFileKey(file)

    // Verificar si el resultado está en caché
    const cache = getOcrCache()
    if (cache && cache.has(fileKey)) {
      reportProgress(100, "complete", cache.get(fileKey))
      return cache.get(fileKey) || ""
    }

    // Procesar según el tipo de archivo
    let result: string

    if (file.type === "application/pdf") {
      result = await processPDF(file, reportProgress)
    } else if (
      file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.type === "application/msword" ||
      file.type === "application/rtf" ||
      file.name.endsWith(".rtf")
    ) {
      result = await processWord(file, reportProgress)
    } else if (file.type.startsWith("image/")) {
      result = await processImage(
        file,
        { language, brightness, contrast, threshold, denoise, scale, area },
        reportProgress,
      )
    } else if (file.type === "text/plain" || file.name.endsWith(".txt")) {
      result = await processTextFile(file, reportProgress)
    } else {
      throw new Error(`Tipo de archivo no soportado: ${file.type}`)
    }

    // Guardar en caché
    if (cache) {
      cache.set(fileKey, result)
    }

    return result
  } catch (error) {
    console.error("Error en processDocument:", error)
    throw error
  }
}

// Genera una clave única para el archivo basada en su contenido
async function generateFileKey(file: File): Promise<string> {
  const arrayBuffer = await file.slice(0, 8192).arrayBuffer() // Usar solo los primeros bytes para eficiencia
  const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
  return `${file.name}-${file.size}-${hashHex}`
}

// Procesa archivos de texto plano
async function processTextFile(file: File, reportProgress: Function): Promise<string> {
  reportProgress(20, "loading_text")

  try {
    const text = await file.text()
    reportProgress(100, "complete", text)
    return text
  } catch (error) {
    console.error("Error al procesar archivo de texto:", error)
    throw new Error("Error al procesar el archivo de texto.")
  }
}

// Procesa archivos PDF con mejor manejo de PDFs escaneados vs. con texto
async function processPDF(file: File, reportProgress: Function): Promise<string> {
  reportProgress(10, "loading_pdf")

  try {
    const arrayBuffer = await file.arrayBuffer()
    const pdf = await pdfjs.getDocument({
      data: arrayBuffer,
      // Habilitar opciones avanzadas para PDFs protegidos
      password: "",
      cMapUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/cmaps/",
      cMapPacked: true,
    }).promise

    reportProgress(30, "extracting_text")

    let fullText = ""
    const numPages = pdf.numPages
    let hasText = false

    // Primero intentamos extraer texto directamente
    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i)
      const textContent = await page.getTextContent()
      const pageText = textContent.items.map((item: any) => item.str).join(" ")

      // Verificar si la página tiene texto significativo
      if (pageText.trim().length > 50) {
        hasText = true
      }

      fullText += pageText + "\n\n"
      reportProgress(30 + (i / numPages) * 40, "extracting_text")
    }

    // Si el PDF parece ser escaneado (poco o ningún texto), intentamos OCR
    if (!hasText && numPages > 0) {
      reportProgress(70, "pdf_ocr_required")

      // Extraer imágenes de las páginas para OCR
      let ocrText = ""
      for (let i = 1; i <= Math.min(numPages, 10); i++) {
        // Limitar a 10 páginas para evitar tiempos de procesamiento excesivos
        const page = await pdf.getPage(i)
        const viewport = page.getViewport({ scale: 1.5 }) // Escala para mejor OCR

        // Crear un canvas para renderizar la página
        const canvas = document.createElement("canvas")
        const context = canvas.getContext("2d")
        canvas.height = viewport.height
        canvas.width = viewport.width

        if (!context) {
          throw new Error("No se pudo crear el contexto del canvas")
        }

        // Renderizar la página en el canvas
        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise

        // Convertir el canvas a imagen para OCR
        const imageData = canvas.toDataURL("image/png")

        // Realizar OCR en la imagen
        reportProgress(70 + (i / Math.min(numPages, 10)) * 20, "performing_ocr_on_pdf")
        const result = await Tesseract.recognize(imageData, "spa", {
          logger: (m) => {
            if (m.status === "recognizing text") {
              reportProgress(
                70 + (i / Math.min(numPages, 10)) * 20 + (m.progress * 10) / Math.min(numPages, 10),
                "performing_ocr_on_pdf",
              )
            }
          },
        })

        ocrText += result.data.text + "\n\n"
      }

      // Si el OCR produjo texto significativo, usarlo
      if (ocrText.trim().length > fullText.trim().length) {
        fullText = ocrText
      }
    }

    reportProgress(95, "finalizing")
    return fullText.trim()
  } catch (error) {
    console.error("Error al procesar PDF:", error)
    throw new Error("Error al procesar el archivo PDF. Es posible que esté protegido o dañado.")
  }
}

async function processWord(file: File, reportProgress: Function): Promise<string> {
  reportProgress(20, "loading_word")

  try {
    const arrayBuffer = await file.arrayBuffer()

    reportProgress(50, "extracting_text")

    // Manejar diferentes tipos de documentos
    if (file.type === "application/rtf" || file.name.endsWith(".rtf")) {
      // Para archivos RTF, convertimos a texto plano
      const decoder = new TextDecoder("utf-8")
      let text = decoder.decode(arrayBuffer)

      // Eliminar códigos RTF
      text = text.replace(/\{[^{}]*\}/g, " ")
      text = text.replace(/\\[a-z0-9]+/g, " ")
      text = text.replace(/\\\n/g, "\n")

      reportProgress(90, "finalizing")
      return text.trim()
    } else {
      // Para DOCX y DOC, usar mammoth
      const result = await mammoth.extractRawText({ arrayBuffer })
      const text = result.value

      reportProgress(90, "finalizing")
      return text.trim()
    }
  } catch (error) {
    console.error("Error al procesar documento:", error)
    throw new Error(`Error al procesar el documento. ${error.message}`)
  }
}

async function processImage(
  file: File,
  options: {
    language: string
    brightness: number
    contrast: number
    threshold: number
    denoise: boolean
    scale: number
    area: { x: number; y: number; width: number; height: number } | null
  },
  reportProgress: Function,
): Promise<string> {
  reportProgress(10, "loading_image")

  try {
    const { language, brightness, contrast, threshold, denoise, scale, area } = options

    // Crear una URL para la imagen
    const imageUrl = URL.createObjectURL(file)

    // Pre-procesar la imagen para mejorar OCR
    reportProgress(20, "preprocessing_image")
    const processedImageUrl = await preprocessImage(imageUrl, {
      brightness,
      contrast,
      threshold,
      denoise,
      scale,
      area,
    })

    reportProgress(40, "recognizing_text")

    // Configurar opciones de Tesseract
    const tesseractOptions = {
      logger: (m: any) => {
        if (m.status === "recognizing text") {
          reportProgress(40 + m.progress * 50, "recognizing_text")
        }
      },
      langPath: "https://tessdata.projectnaptha.com/4.0.0",
      corePath: "https://cdn.jsdelivr.net/npm/tesseract.js-core@4.0.4/tesseract-core.wasm.js",
    }

    // Reconocer texto
    const result = await Tesseract.recognize(processedImageUrl, language, tesseractOptions)

    // Liberar recursos
    URL.revokeObjectURL(imageUrl)
    URL.revokeObjectURL(processedImageUrl)

    reportProgress(95, "finalizing")

    // Post-procesamiento del texto para corregir errores comunes de OCR
    const correctedText = postProcessOcrText(result.data.text)

    return correctedText
  } catch (error) {
    console.error("Error al procesar imagen:", error)
    throw new Error(`Error al procesar la imagen para OCR: ${error.message}`)
  }
}

// Función para pre-procesar imágenes antes del OCR
async function preprocessImage(
  imageUrl: string,
  options: {
    brightness: number
    contrast: number
    threshold: number
    denoise: boolean
    scale: number
    area: { x: number; y: number; width: number; height: number } | null
  },
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = "anonymous"

    img.onload = () => {
      // Calcular dimensiones
      let sourceX = 0
      let sourceY = 0
      let sourceWidth = img.width
      let sourceHeight = img.height

      // Si se especificó un área, usarla
      if (options.area) {
        sourceX = options.area.x
        sourceY = options.area.y
        sourceWidth = options.area.width
        sourceHeight = options.area.height
      }

      // Aplicar escala
      const targetWidth = sourceWidth * options.scale
      const targetHeight = sourceHeight * options.scale

      // Crear canvas con las dimensiones correctas
      const canvas = document.createElement("canvas")
      canvas.width = targetWidth
      canvas.height = targetHeight

      const ctx = canvas.getContext("2d", { willReadFrequently: true })
      if (!ctx) {
        reject(new Error("No se pudo crear el contexto del canvas"))
        return
      }

      // Dibujar la imagen o sección de la imagen en el canvas
      ctx.drawImage(
        img,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight, // Fuente
        0,
        0,
        targetWidth,
        targetHeight, // Destino
      )

      // Obtener datos de la imagen
      const imageData = ctx.getImageData(0, 0, targetWidth, targetHeight)
      const data = imageData.data

      // Aplicar brillo y contraste
      const brightnessF = options.brightness / 100
      const contrastF = options.contrast / 100

      for (let i = 0; i < data.length; i += 4) {
        // Aplicar brillo
        data[i] = data[i] * brightnessF
        data[i + 1] = data[i + 1] * brightnessF
        data[i + 2] = data[i + 2] * brightnessF

        // Aplicar contraste
        data[i] = (data[i] - 128) * contrastF + 128
        data[i + 1] = (data[i + 1] - 128) * contrastF + 128
        data[i + 2] = (data[i + 2] - 128) * contrastF + 128

        // Convertir a escala de grises para mejor OCR
        const grayValue = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]

        // Aplicar umbral (binarización) si es necesario
        if (options.threshold > 0) {
          const finalValue = grayValue > options.threshold ? 255 : 0
          data[i] = finalValue
          data[i + 1] = finalValue
          data[i + 2] = finalValue
        } else {
          // Si no se aplica umbral, usar escala de grises
          data[i] = grayValue
          data[i + 1] = grayValue
          data[i + 2] = grayValue
        }
      }

      // Aplicar reducción de ruido si está habilitado
      if (options.denoise) {
        applyMedianFilter(data, targetWidth, targetHeight)
      }

      ctx.putImageData(imageData, 0, 0)

      // Convertir a URL de datos
      const processedImageUrl = canvas.toDataURL("image/png")
      resolve(processedImageUrl)
    }

    img.onerror = () => {
      reject(new Error("Error al cargar la imagen para pre-procesamiento"))
    }

    img.src = imageUrl
  })
}

// Filtro de mediana para reducción de ruido
function applyMedianFilter(data: Uint8ClampedArray, width: number, height: number) {
  // Crear una copia de los datos para no modificar los originales durante el proceso
  const tempData = new Uint8ClampedArray(data.length)
  tempData.set(data)

  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      for (let c = 0; c < 3; c++) {
        // Solo procesar canales RGB, no alpha
        const idx = (y * width + x) * 4 + c

        // Obtener valores de los 9 píxeles en la ventana 3x3
        const values = []
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const currentIdx = ((y + dy) * width + (x + dx)) * 4 + c
            values.push(tempData[currentIdx])
          }
        }

        // Ordenar y obtener la mediana
        values.sort((a, b) => a - b)
        data[idx] = values[4] // El valor medio de los 9 valores
      }
    }
  }
}

// Post-procesamiento del texto OCR para corregir errores comunes
function postProcessOcrText(text: string): string {
  // Eliminar caracteres no deseados
  let processed = text.replace(/[^\w\s.,;:¿?¡!()[\]{}\-+*/=<>$%&@#_|°"'áéíóúÁÉÍÓÚüÜñÑ]/g, "")

  // Corregir espacios múltiples
  processed = processed.replace(/\s+/g, " ")

  // Corregir saltos de línea múltiples
  processed = processed.replace(/\n{3,}/g, "\n\n")

  // Corregir errores comunes de OCR en español
  const commonErrors: Record<string, string> = {
    "0": "O",
    l: "I",
    "1": "I",
    "5": "S",
    "8": "B",
    cl: "d",
    rn: "m",
    li: "h",
    // Añadir más correcciones específicas según sea necesario
  }

  // Aplicar correcciones
  for (const [error, correction] of Object.entries(commonErrors)) {
    const regex = new RegExp(error, "g")
    processed = processed.replace(regex, correction)
  }

  return processed
}
