import { NextResponse } from "next/server"
import OpenAI from "openai"
import { normativaLaboral } from "@/lib/normativa-laboral"

// Respuestas predefinidas solo para casos de error
const RESPUESTAS = {
  ERROR: `Lo siento, en este momento no puedo procesar tu consulta. Por favor, intenta nuevamente en unos minutos o reformula tu pregunta de otra manera.`,

  DEFAULT: `Para brindarte información precisa sobre normativa laboral chilena, necesito más detalles sobre tu consulta específica:

- ¿Tu consulta se refiere a contratos, jornada laboral, remuneraciones, término de contrato u otro tema?
- ¿Necesitas información sobre derechos específicos como vacaciones, licencias médicas o protección a la maternidad?
- ¿Estás consultando como trabajador, empleador o por información general?

El Código del Trabajo es la principal normativa que regula las relaciones laborales en Chile, estableciendo derechos y obligaciones para trabajadores y empleadores.

Puedo proporcionarte información más específica si me indicas exactamente qué aspecto de la normativa laboral te interesa conocer.`,
}

// Configuración de OpenAI con la API key proporcionada
const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null

// Función para preparar el contexto normativo relevante
function prepararContextoNormativo(consulta: string) {
  // Convertir la consulta a minúsculas y sin acentos para facilitar la búsqueda
  const consultaNormalizada = consulta
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  const contextosRelevantes: string[] = []
  let articulosRelevantes: string[] = []

  // Palabras clave para buscar en la normativa
  const palabrasClave = [
    // Términos generales
    "contrato",
    "trabajo",
    "laboral",
    "empleador",
    "trabajador",
    "jornada",
    "remuneracion",
    "sueldo",
    "salario",
    "despido",
    "finiquito",
    "vacaciones",
    "licencia",
    "feriado",
    "descanso",

    // Términos específicos
    "acoso",
    "discriminacion",
    "fuero",
    "prenatal",
    "postnatal",
    "horas extra",
    "extraordinarias",
    "sindicato",
    "negociacion",
    "colectiva",
    "renuncia",
    "indemnizacion",
    "preaviso",
    "aviso",

    // Causales de término
    "articulo 159",
    "articulo 160",
    "articulo 161",
    "necesidades",
    "mutuo acuerdo",
    "renuncia",
    "muerte",
    "vencimiento",
    "conclusion",
    "caso fortuito",
    "fuerza mayor",
    "falta",
    "probidad",
    "ausencia",

    // Protección a la maternidad
    "embarazo",
    "maternal",
    "sala cuna",
    "alimentacion",
    "lactancia",

    // Teletrabajo
    "teletrabajo",
    "distancia",
    "remoto",
    "virtual",
    "equipos",

    // Acoso laboral
    "hostigamiento",
    "maltrato",
    "humillacion",
    "menoscabo",
    "dignidad",

    // Igualdad de remuneraciones
    "igualdad",
    "brecha",
    "genero",
    "discriminacion salarial",

    // Prescripción
    "prescripcion",
    "plazo",
    "caducar",
    "caducidad",
    "deuda",
    "cobro",
  ]

  // Buscar términos relevantes en la consulta
  const terminosEncontrados = palabrasClave.filter((termino) => consultaNormalizada.includes(termino))

  // Si no hay términos encontrados, devolver un contexto general
  if (terminosEncontrados.length === 0) {
    return `
    El Código del Trabajo de Chile (DFL-1) es la principal normativa que regula las relaciones laborales.
    
    Algunos aspectos importantes incluyen:
    - Contrato de trabajo: consensual, debe constar por escrito.
    - Jornada laboral: máximo 45 horas semanales.
    - Remuneraciones: deben pagarse en la forma y periodicidad pactada.
    - Término del contrato: por causales específicas (arts. 159, 160, 161).
    - Prescripción de derechos laborales: 2 años como regla general, 6 meses para algunos casos específicos.
    `
  }

  // Buscar artículos relevantes en la normativa
  for (const ley in normativaLaboral) {
    const normativa = normativaLaboral[ley]

    for (const numArticulo in normativa.articulos) {
      const contenidoArticulo = normativa.articulos[numArticulo].toLowerCase()

      // Verificar si el artículo contiene alguno de los términos encontrados
      if (terminosEncontrados.some((termino) => contenidoArticulo.includes(termino))) {
        articulosRelevantes.push(`${normativa.titulo} - Artículo ${numArticulo}: ${normativa.articulos[numArticulo]}`)
      }
    }
  }

  // Limitar la cantidad de artículos para no exceder el contexto
  if (articulosRelevantes.length > 5) {
    articulosRelevantes = articulosRelevantes.slice(0, 5)
  }

  // Si se menciona prescripción, agregar información específica sobre plazos
  if (
    consultaNormalizada.includes("prescripcion") ||
    consultaNormalizada.includes("plazo") ||
    consultaNormalizada.includes("deuda")
  ) {
    contextosRelevantes.push(`
    INFORMACIÓN SOBRE PRESCRIPCIÓN DE DERECHOS LABORALES:
    
    - Regla general (Art. 510 Código del Trabajo): Los derechos laborales prescriben en el plazo de dos años contados desde la fecha en que se hicieron exigibles.
    
    - Excepciones:
      * Derechos con origen en actos o contratos que concluyeron: 6 meses desde la terminación de servicios.
      * Cobro de horas extraordinarias: 6 meses desde que debieron ser pagadas.
      
    - NO existe plazo de prescripción de 10 años para deudas laborales en Chile.
    
    - La prescripción se interrumpe conforme a los artículos 2523 y 2524 del Código Civil.
    `)
  }

  // Agregar artículos relevantes al contexto
  if (articulosRelevantes.length > 0) {
    contextosRelevantes.push("ARTÍCULOS RELEVANTES DE LA NORMATIVA LABORAL:\n\n" + articulosRelevantes.join("\n\n"))
  }

  // Si no hay contextos específicos, usar un contexto general
  if (contextosRelevantes.length === 0) {
    contextosRelevantes.push(`
    El Código del Trabajo de Chile (DFL-1) es la principal normativa que regula las relaciones laborales.
    
    Algunos aspectos importantes incluyen:
    - Contrato de trabajo: consensual, debe constar por escrito.
    - Jornada laboral: máximo 45 horas semanales.
    - Remuneraciones: deben pagarse en la forma y periodicidad pactada.
    - Término del contrato: por causales específicas (arts. 159, 160, 161).
    - Prescripción de derechos laborales: 2 años como regla general, 6 meses para algunos casos específicos.
    `)
  }

  return contextosRelevantes.join("\n\n")
}

export async function POST(req: Request) {
  try {
    const { messages, userId } = await req.json()

    // Verificar que messages es un array y tiene al menos un mensaje
    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error("Formato de mensajes inválido")
    }

    const userMessage = messages[messages.length - 1].content
    if (process.env.NODE_ENV !== "production") {
      console.log("Procesando consulta laboral:", userMessage)
    }

    // Preparar el contexto normativo relevante para la consulta
    const contextoNormativo = prepararContextoNormativo(userMessage)

    // Check if OpenAI client is available
    if (!openai || !process.env.OPENAI_API_KEY) {
      if (process.env.NODE_ENV !== "production") {
        console.log("API key de OpenAI no configurada, usando respuesta predefinida")
      }
      return NextResponse.json({
        response: RESPUESTAS.DEFAULT,
        userId: userId || "anonymous-user",
      })
    }

    try {
      // Crear la conversación para OpenAI
      const conversationHistory = messages.slice(0, -1).map((msg) => ({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.content,
      }))

      // En el archivo de chat laboral, hay instrucciones específicas para NO usar formato Markdown,
      // pero vamos a reforzarlas y asegurarnos de que se estén aplicando correctamente.

      // Modificar las instrucciones del sistema para OpenAI
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Eres un asistente legal especializado en normativa laboral chilena. Tu objetivo es proporcionar información precisa basada en la legislación vigente.

INSTRUCCIONES IMPORTANTES:
1. Usa un tono profesional pero accesible.
2. Estructura tus respuestas de forma clara con secciones.
3. NO uses formato markdown con asteriscos (*) o almohadillas (#).
4. NO uses negritas, cursivas ni ningún tipo de formato especial.
5. Presenta la información en texto plano, usando párrafos y listas con guiones o números.
6. SIEMPRE basa tus respuestas en la normativa laboral chilena vigente.
7. Si no tienes información específica sobre algún tema, indícalo claramente.
8. NUNCA inventes plazos, requisitos o procedimientos que no estén en la normativa.
9. Para plazos de prescripción, usa EXCLUSIVAMENTE los establecidos en el Código del Trabajo:
   - Regla general: 2 años desde que se hicieron exigibles los derechos
   - Excepciones: 6 meses para derechos con origen en actos que concluyeron
   - NO existe plazo de prescripción de 10 años para deudas laborales

CONTEXTO NORMATIVO RELEVANTE PARA ESTA CONSULTA:
${contextoNormativo}`,
          },
          ...conversationHistory,
          { role: "user", content: userMessage },
        ],
        temperature: 0.5, // Reducido para mayor precisión
        max_tokens: 800,
      })

      // Asegurarnos de que la respuesta no tenga formato Markdown
      // Podríamos añadir una función para limpiar cualquier formato Markdown residual
      const aiResponse = completion.choices[0].message.content

      // Función para eliminar posibles formatos Markdown (opcional)
      function limpiarMarkdown(texto) {
        if (!texto) return ""
        // Eliminar negritas y cursivas
        return texto
          .replace(/\*\*(.*?)\*\*/g, "$1")
          .replace(/\*(.*?)\*/g, "$1")
          .replace(/__(.*?)__/g, "$1")
          .replace(/_(.*?)_/g, "$1")
          .replace(/#{1,6}\s/g, "")
          .replace(/`(.*?)`/g, "$1")
      }

      return NextResponse.json({
        response: limpiarMarkdown(aiResponse) || RESPUESTAS.DEFAULT,
        userId: userId || "anonymous-user",
      })
    } catch (openaiError) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Error de OpenAI:", openaiError)
      }

      // Si hay error con OpenAI, usar respuesta predefinida como fallback
      return NextResponse.json({
        response: RESPUESTAS.ERROR,
        userId: userId || "anonymous-user",
      })
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error en el servidor:", error)
    }
    return NextResponse.json(
      {
        response: RESPUESTAS.ERROR,
      },
      { status: 200 }, // Cambiado a 200 para evitar errores en el cliente
    )
  }
}
