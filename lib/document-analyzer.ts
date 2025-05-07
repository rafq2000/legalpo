// Tipos de documentos legales
export type DocumentType =
  | "judicial_cautelar_familia"
  | "judicial_demanda_civil"
  | "judicial_demanda_familia"
  | "judicial_demanda_laboral"
  | "judicial_querella_penal"
  | "judicial_sentencia"
  | "contrato_promesa"
  | "contrato_compraventa"
  | "contrato_arrendamiento"
  | "contrato_trabajo"
  | "pagare"
  | "letra_cambio"
  | "poder_general"
  | "poder_especial"
  | "testamento"
  | "escritura_publica"
  | "unknown"

export interface DocumentAnalysis {
  tipo: string
  tipoTecnico?: DocumentType
  descripcion: string
  advertencias: string[]
  recomendaciones: string[]
  ventajas: string[]
  riesgos: string[]
  conceptosLegales?: Record<string, string>
  puntosClaves?: string[]
  partes?: Record<string, string>
  fechas?: Record<string, string>
  montos?: Record<string, string>
  clausulasImportantes?: Record<string, string>
  confianza?: number // Nivel de confianza en la clasificación
}

// Expresiones regulares mejoradas para extracción de entidades
const regexPatterns = {
  // Fechas en formato DD/MM/YYYY, DD-MM-YYYY, DD.MM.YYYY
  dates:
    /(\d{1,2})[/\-.](0?[1-9]|1[0-2])[/\-.](\d{4}|\d{2})|(\d{1,2}) de (enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)( de | )(\d{4}|\d{2})/gi,

  // Montos en diferentes formatos
  amounts: /\$\s*[\d.,]+|\d+[\d.,]*\s*(pesos|dólares|euros|UF|UTM)/gi,

  // RUT chileno
  rut: /\d{1,2}\.?\d{3}\.?\d{3}-[\dkK]/gi,

  // Nombres de personas (patrones comunes en documentos legales)
  names: /(?:don|doña|sr\.|sra\.|señor|señora)\s+([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+){1,3})/gi,

  // Direcciones
  addresses: /(?:domiciliado en|domicilio en|dirección|ubicado en|ubicada en)\s+([^,;.]+)/gi,
}

// Función mejorada para extraer fechas con formato
function extractDates(text: string): Record<string, string> {
  const dates: Record<string, string> = {}
  const currentYear = new Date().getFullYear()

  // Buscar fechas con regex
  let match
  const dateRegex = regexPatterns.dates

  while ((match = dateRegex.exec(text)) !== null) {
    const fullMatch = match[0]

    // Buscar contexto (qué tipo de fecha es)
    const contextStart = Math.max(0, match.index - 50)
    const contextEnd = Math.min(text.length, match.index + fullMatch.length + 50)
    const context = text.substring(contextStart, contextEnd).toLowerCase()

    let dateType = "Fecha"

    // Determinar tipo de fecha según contexto
    if (/vencimiento|vence|caduca|expira/.test(context)) {
      dateType = "Vencimiento"
    } else if (/firma|suscripción|suscrito|celebrado/.test(context)) {
      dateType = "Firma"
    } else if (/nacimiento|nació|nacido/.test(context)) {
      dateType = "Nacimiento"
    } else if (/plazo|término|finaliza|termina/.test(context)) {
      dateType = "Plazo"
    } else if (/audiencia|comparendo|citación/.test(context)) {
      dateType = "Audiencia"
    } else if (/pago|abono|cancelación/.test(context)) {
      dateType = "Pago"
    }

    // Normalizar formato de fecha
    const normalizedDate = fullMatch

    // Evitar duplicados
    if (!dates[dateType]) {
      dates[dateType] = normalizedDate
    } else if (!dates[dateType].includes(normalizedDate)) {
      // Si ya existe este tipo, añadir como numerado
      let counter = 2
      while (dates[`${dateType} ${counter}`]) {
        counter++
      }
      dates[`${dateType} ${counter}`] = normalizedDate
    }
  }

  return dates
}

// Función mejorada para extraer montos
function extractAmounts(text: string): Record<string, string> {
  const amounts: Record<string, string> = {}

  // Buscar montos con regex
  let match
  const amountRegex = regexPatterns.amounts

  while ((match = amountRegex.exec(text)) !== null) {
    const fullMatch = match[0]

    // Buscar contexto (qué tipo de monto es)
    const contextStart = Math.max(0, match.index - 50)
    const contextEnd = Math.min(text.length, match.index + fullMatch.length + 50)
    const context = text.substring(contextStart, contextEnd).toLowerCase()

    let amountType = "Monto"

    // Determinar tipo de monto según contexto
    if (/precio|valor|costo|total/.test(context)) {
      amountType = "Precio total"
    } else if (/mensual|mensualidad|canon|renta|arriendo/.test(context)) {
      amountType = "Pago mensual"
    } else if (/indemnización|compensación|resarcimiento/.test(context)) {
      amountType = "Indemnización"
    } else if (/multa|penalidad|sanción/.test(context)) {
      amountType = "Multa"
    } else if (/garantía|caución|fianza/.test(context)) {
      amountType = "Garantía"
    } else if (/honorarios|remuneración|sueldo|salario/.test(context)) {
      amountType = "Remuneración"
    }

    // Evitar duplicados
    if (!amounts[amountType]) {
      amounts[amountType] = fullMatch
    } else if (!amounts[amountType].includes(fullMatch)) {
      // Si ya existe este tipo, añadir como numerado
      let counter = 2
      while (amounts[`${amountType} ${counter}`]) {
        counter++
      }
      amounts[`${amountType} ${counter}`] = fullMatch
    }
  }

  return amounts
}

// Función mejorada para extraer partes involucradas
function extractParties(text: string, documentType: DocumentType): Record<string, string> {
  const parties: Record<string, string> = {}

  // Patrones específicos según tipo de documento
  const partyPatterns: Record<string, Record<string, RegExp>> = {
    judicial_demanda_civil: {
      Demandante:
        /(?:demandante|actor)(?:\s+es|\s*:\s*|\s+don|\s+doña|\s+sr\.|\s+sra\.|\s+señor|\s+señora)\s+([^,;.]+)/i,
      Demandado:
        /(?:demandado|demandada)(?:\s+es|\s*:\s*|\s+don|\s+doña|\s+sr\.|\s+sra\.|\s+señor|\s+señora)\s+([^,;.]+)/i,
    },
    judicial_demanda_laboral: {
      Trabajador:
        /(?:trabajador|demandante)(?:\s+es|\s*:\s*|\s+don|\s+doña|\s+sr\.|\s+sra\.|\s+señor|\s+señora)\s+([^,;.]+)/i,
      Empleador:
        /(?:empleador|demandado|empresa)(?:\s+es|\s*:\s*|\s+don|\s+doña|\s+sr\.|\s+sra\.|\s+señor|\s+señora)\s+([^,;.]+)/i,
    },
    contrato_arrendamiento: {
      Arrendador:
        /(?:arrendador|arrendadora)(?:\s+es|\s*:\s*|\s+don|\s+doña|\s+sr\.|\s+sra\.|\s+señor|\s+señora)\s+([^,;.]+)/i,
      Arrendatario:
        /(?:arrendatario|arrendataria)(?:\s+es|\s*:\s*|\s+don|\s+doña|\s+sr\.|\s+sra\.|\s+señor|\s+señora)\s+([^,;.]+)/i,
    },
    contrato_compraventa: {
      Vendedor:
        /(?:vendedor|vendedora)(?:\s+es|\s*:\s*|\s+don|\s+doña|\s+sr\.|\s+sra\.|\s+señor|\s+señora)\s+([^,;.]+)/i,
      Comprador:
        /(?:comprador|compradora)(?:\s+es|\s*:\s*|\s+don|\s+doña|\s+sr\.|\s+sra\.|\s+señor|\s+señora)\s+([^,;.]+)/i,
    },
    contrato_trabajo: {
      Empleador:
        /(?:empleador|empresa)(?:\s+es|\s*:\s*|\s+don|\s+doña|\s+sr\.|\s+sra\.|\s+señor|\s+señora)\s+([^,;.]+)/i,
      Trabajador:
        /(?:trabajador|empleado)(?:\s+es|\s*:\s*|\s+don|\s+doña|\s+sr\.|\s+sra\.|\s+señor|\s+señora)\s+([^,;.]+)/i,
    },
    // Patrones genéricos para otros tipos
    default: {
      "Parte 1":
        /(?:comparece|parte|otorgante)(?:\s+es|\s*:\s*|\s+don|\s+doña|\s+sr\.|\s+sra\.|\s+señor|\s+señora)\s+([^,;.]+)/i,
      "Parte 2":
        /(?:otra parte|segundo compareciente|segundo otorgante)(?:\s+es|\s*:\s*|\s+don|\s+doña|\s+sr\.|\s+sra\.|\s+señor|\s+señora)\s+([^,;.]+)/i,
    },
  }

  // Seleccionar patrones según tipo de documento o usar default
  const patternsToUse = partyPatterns[documentType] || partyPatterns.default

  // Buscar coincidencias para cada patrón
  for (const [role, pattern] of Object.entries(patternsToUse)) {
    const match = text.match(pattern)
    if (match && match[1]) {
      parties[role] = match[1].trim()
    }
  }

  // Buscar RUTs asociados a las partes
  const rutMatches = [...text.matchAll(regexPatterns.rut)]
  if (rutMatches.length > 0) {
    // Intentar asociar RUTs con las partes ya identificadas
    for (const rutMatch of rutMatches) {
      const rut = rutMatch[0]
      const contextStart = Math.max(0, rutMatch.index! - 50)
      const contextEnd = Math.min(text.length, rutMatch.index! + rut.length + 20)
      const context = text.substring(contextStart, contextEnd).toLowerCase()

      // Asociar RUT con la parte correspondiente
      for (const [role, name] of Object.entries(parties)) {
        if (context.includes(name.toLowerCase())) {
          parties[`${role} RUT`] = rut
          break
        }
      }
    }
  }

  // Si no se encontraron partes específicas, buscar nombres genéricos
  if (Object.keys(parties).length === 0) {
    const nameMatches = [...text.matchAll(regexPatterns.names)]
    if (nameMatches.length >= 1) {
      parties["Parte 1"] = nameMatches[0][1].trim()

      if (nameMatches.length >= 2) {
        parties["Parte 2"] = nameMatches[1][1].trim()
      }
    }
  }

  return parties
}

// Función para extraer cláusulas importantes
function extractImportantClauses(text: string, documentType: DocumentType): Record<string, string> {
  const clauses: Record<string, string> = {}

  // Patrones para identificar cláusulas según tipo de documento
  const clausePatterns: Record<string, string[]> = {
    contrato_arrendamiento: [
      "plazo del arriendo",
      "renta mensual",
      "garantía",
      "prohibición de subarrendar",
      "terminación anticipada",
      "gastos comunes",
      "estado del inmueble",
    ],
    contrato_trabajo: [
      "jornada de trabajo",
      "remuneración",
      "duración del contrato",
      "funciones",
      "beneficios adicionales",
      "causales de término",
    ],
    contrato_compraventa: [
      "precio de venta",
      "forma de pago",
      "entrega del bien",
      "garantías",
      "responsabilidad por vicios",
    ],
    // Añadir más patrones según sea necesario
  }

  // Seleccionar patrones según tipo de documento
  const patternsToUse = clausePatterns[documentType] || []

  // Buscar cláusulas importantes
  for (const clauseKeyword of patternsToUse) {
    const regex = new RegExp(
      `(?:cláusula|artículo|punto)\\s+(?:\\w+\\s+)?(?:sobre|de|del|referente a)?\\s*${clauseKeyword}[^.]*\\.(?:[^.]+\\.){0,3}`,
      "i",
    )
    const match = text.match(regex)

    if (match) {
      const clauseTitle = clauseKeyword.charAt(0).toUpperCase() + clauseKeyword.slice(1)
      clauses[clauseTitle] = match[0].trim()
    }
  }

  // Buscar cláusulas numeradas
  const numberedClauseRegex = /(?:CLÁUSULA|ARTÍCULO|CLAUSULA)\s+(\w+|\d+)[.:]\s*([^.]+(?:\.[^.]+){0,3})/gi
  let match

  while ((match = numberedClauseRegex.exec(text)) !== null) {
    const clauseNumber = match[1]
    const clauseContent = match[2].trim()

    // Analizar el contenido para determinar importancia
    const lowerContent = clauseContent.toLowerCase()
    if (
      /termin|resol|rescis|incumpl|garant|prohib|oblig|derecho|plazo|pago|precio|multa|penalidad/i.test(lowerContent) &&
      clauseContent.length < 500 // Evitar cláusulas demasiado largas
    ) {
      clauses[`Cláusula ${clauseNumber}`] = clauseContent
    }
  }

  return clauses
}

// Función para extraer puntos clave
function extractKeyPoints(text: string, documentType: DocumentType): string[] {
  const keyPoints: string[] = []

  // Buscar frases que indiquen puntos importantes
  const keyPhrases = [
    "es importante destacar",
    "cabe señalar",
    "se hace presente",
    "es fundamental",
    "se deja constancia",
    "las partes acuerdan",
    "se establece expresamente",
    "queda prohibido",
    "es obligación",
    "se obliga a",
    "deberá",
    "no podrá",
  ]

  for (const phrase of keyPhrases) {
    const regex = new RegExp(`${phrase}[^.]*\\.`, "gi")
    const matches = text.match(regex)

    if (matches) {
      for (const match of matches) {
        if (match.length > 10 && match.length < 300) {
          // Evitar coincidencias demasiado cortas o largas
          keyPoints.push(match.trim())
        }
      }
    }
  }

  // Limitar a 10 puntos clave para no sobrecargar
  return [...new Set(keyPoints)].slice(0, 10)
}

// Modificar la función analyzeDocument para detectar demandas y sus tipos con mayor precisión
export function analyzeDocument(text: string): DocumentAnalysis {
  // Convertir texto a minúsculas para facilitar la búsqueda
  const lowerText = text.toLowerCase()

  // Patrones para identificar tipos de documentos
  const patterns = {
    judicial_cautelar_familia: [
      "tribunal",
      "medida cautelar",
      "familia",
      "nna",
      "niño",
      "niña",
      "adolescente",
      "protección",
      "cuidado personal",
      "régimen comunicacional",
    ],
    judicial_demanda_civil: [
      "demanda",
      "comparece",
      "interpone",
      "demandante",
      "demandado",
      "otrosí",
      "primer otrosí",
      "juzgado civil",
      "civil de",
      "juicio ordinario",
      "juicio sumario",
      "juicio ejecutivo",
    ],
    judicial_demanda_familia: [
      "demanda",
      "comparece",
      "interpone",
      "demandante",
      "demandado",
      "otrosí",
      "juzgado de familia",
      "tribunal de familia",
      "alimentos",
      "relación directa y regular",
      "divorcio",
      "filiación",
    ],
    judicial_demanda_laboral: [
      "demanda",
      "comparece",
      "interpone",
      "demandante",
      "demandado",
      "otrosí",
      "juzgado de letras del trabajo",
      "tribunal laboral",
      "despido",
      "nulidad del despido",
      "tutela laboral",
    ],
    judicial_querella_penal: [
      "querella",
      "querellante",
      "querellado",
      "delito",
      "juzgado de garantía",
      "ministerio público",
      "fiscalía",
    ],
    judicial_sentencia: ["sentencia", "fallo", "resuelvo", "considerando", "vistos", "se declara", "ha lugar"],
    contrato_promesa: ["promesa", "promete", "prometer", "prometen", "contrato de promesa"],
    contrato_compraventa: ["compraventa", "vende", "compra", "transfiere", "adquiere", "precio de venta"],
    contrato_arrendamiento: ["arrendamiento", "arrienda", "arrendador", "arrendatario", "canon", "renta mensual"],
    contrato_trabajo: ["contrato de trabajo", "empleador", "trabajador", "remuneración", "jornada laboral"],
    pagare: ["pagaré", "debo y pagaré", "a la orden de", "suma de dinero", "interés"],
    letra_cambio: ["letra de cambio", "girador", "girado", "aceptante", "endosante"],
    poder_general: ["poder general", "confiere poder", "facultades generales", "representación"],
    poder_especial: ["poder especial", "faculta especialmente", "específicamente para"],
    testamento: ["testamento", "última voluntad", "heredero", "legatario", "testador"],
    escritura_publica: ["escritura pública", "notario", "repertorio", "comparecientes", "fe pública"],
  }

  // Contar coincidencias para cada tipo de documento
  const matches: Record<DocumentType, number> = {
    judicial_cautelar_familia: 0,
    judicial_demanda_civil: 0,
    judicial_demanda_familia: 0,
    judicial_demanda_laboral: 0,
    judicial_querella_penal: 0,
    judicial_sentencia: 0,
    contrato_promesa: 0,
    contrato_compraventa: 0,
    contrato_arrendamiento: 0,
    contrato_trabajo: 0,
    pagare: 0,
    letra_cambio: 0,
    poder_general: 0,
    poder_especial: 0,
    testamento: 0,
    escritura_publica: 0,
    unknown: 0,
  }

  // Contar coincidencias con ponderación
  Object.entries(patterns).forEach(([type, keywords]) => {
    keywords.forEach((keyword) => {
      // Buscar todas las ocurrencias de la palabra clave
      const regex = new RegExp(`\\b${keyword}\\b`, "gi")
      const occurrences = (lowerText.match(regex) || []).length

      if (occurrences > 0) {
        matches[type as DocumentType] += occurrences
      }
    })
  })

  // Determinar el tipo de documento con más coincidencias
  let documentType: DocumentType = "unknown"
  let maxMatches = 0
  let confidence = 0

  Object.entries(matches).forEach(([type, count]) => {
    if (count > maxMatches) {
      maxMatches = count
      documentType = type as DocumentType
    }
  })

  // Calcular nivel de confianza (0-100%)
  const totalMatches = Object.values(matches).reduce((sum, count) => sum + count, 0)
  if (totalMatches > 0) {
    confidence = Math.min(100, Math.round((maxMatches / totalMatches) * 100))
  }

  // Si no hay suficientes coincidencias o la confianza es baja, marcar como desconocido
  if (maxMatches < 3 || confidence < 40) {
    documentType = "unknown"
  }

  // Generar análisis según el tipo de documento
  const analysis = generateAnalysis(documentType, text)

  // Extraer entidades
  analysis.fechas = extractDates(text)
  analysis.montos = extractAmounts(text)
  analysis.partes = extractParties(text, documentType)
  analysis.clausulasImportantes = extractImportantClauses(text, documentType)
  analysis.puntosClaves = extractKeyPoints(text, documentType)
  analysis.confianza = confidence

  return analysis
}

// Modificar la función generateAnalysis para incluir información sobre plazos
function generateAnalysis(documentType: DocumentType, text: string): DocumentAnalysis {
  // Análisis por defecto
  const defaultAnalysis: DocumentAnalysis = {
    tipo: "Documento Legal General",
    tipoTecnico: "unknown",
    descripcion: "Este documento contiene información legal que requiere revisión detallada.",
    advertencias: [
      "⚠️ Revise cuidadosamente todo el contenido antes de tomar decisiones",
      "⚠️ Verifique la vigencia y aplicabilidad del documento",
    ],
    recomendaciones: [
      "✅ Consultar con un profesional legal para interpretación precisa",
      "✅ Verificar la autenticidad del documento",
      "✅ Mantener una copia segura para referencia futura",
    ],
    ventajas: ["✓ Proporciona un registro formal de información legal"],
    riesgos: [
      "✗ Puede contener términos técnicos difíciles de interpretar sin asesoría legal",
      "✗ Podría no reflejar la legislación más reciente",
    ],
    puntosClaves: [],
    confianza: 0,
  }

  // Análisis específicos según el tipo de documento
  switch (documentType) {
    case "judicial_demanda_civil":
      return {
        tipo: "Demanda Civil",
        tipoTecnico: "judicial_demanda_civil",
        descripcion:
          "Este documento es una demanda presentada ante un tribunal civil. Inicia un proceso judicial en materia civil donde una parte (demandante) solicita al tribunal que se pronuncie sobre un derecho o imponga una obligación a otra parte (demandado).",
        advertencias: [
          "⚠️ PLAZO PARA CONTESTAR: 15 días hábiles en juicio ordinario, 10 días hábiles en juicio sumario",
          "⚠️ El plazo se cuenta desde la notificación legal de la demanda",
          "⚠️ No contestar dentro del plazo puede resultar en que se le declare en rebeldía",
          "⚠️ La rebeldía puede implicar que se den por aceptados los hechos de la demanda",
          "⚠️ Verifique si hay medidas precautorias solicitadas que puedan afectar sus bienes",
        ],
        recomendaciones: [
          "✅ Contacte inmediatamente a un abogado para preparar su defensa",
          "✅ Recopile toda la documentación relacionada con el caso",
          "✅ Verifique la competencia del tribunal que conoce la causa",
          "✅ Prepare una contestación formal dentro del plazo legal",
          "✅ Considere la posibilidad de presentar demanda reconvencional si corresponde",
        ],
        ventajas: [
          "✓ Conocer formalmente los hechos y pretensiones de la contraparte",
          "✓ Oportunidad de presentar defensas y excepciones",
          "✓ Posibilidad de llegar a acuerdos conciliatorios durante el proceso",
        ],
        riesgos: [
          "✗ Posibles costos económicos significativos (honorarios de abogados, costas judiciales)",
          "✗ Los procesos civiles pueden extenderse por largo tiempo",
          "✗ Posibilidad de embargo de bienes si hay medidas precautorias",
          "✗ Resultado desfavorable puede generar obligaciones económicas importantes",
        ],
        conceptosLegales: {
          "Demanda civil":
            "Acto procesal que inicia un juicio civil, donde se exponen los hechos y peticiones al tribunal.",
          Contestación: "Respuesta formal del demandado a la demanda, donde puede aceptar o negar los hechos.",
          Rebeldía: "Situación procesal que ocurre cuando el demandado no contesta la demanda en el plazo legal.",
          "Medidas precautorias": "Medidas que puede decretar el tribunal para asegurar el resultado del juicio.",
        },
      }

    case "judicial_demanda_familia":
      return {
        tipo: "Demanda de Familia",
        tipoTecnico: "judicial_demanda_familia",
        descripcion:
          "Este documento es una demanda presentada ante un tribunal de familia. Inicia un proceso judicial en materia familiar relacionado con derechos y obligaciones entre miembros de una familia.",
        advertencias: [
          "⚠️ PLAZO PARA CONTESTAR: Generalmente 5 días hábiles antes de la audiencia preparatoria",
          "⚠️ La fecha de la audiencia preparatoria estará indicada en la resolución que acoge a trámite la demanda",
          "⚠️ Es obligatorio comparecer personalmente a la audiencia preparatoria",
          "⚠️ La no comparecencia puede resultar en que se den por reconocidos los hechos alegados",
          "⚠️ Verifique si hay medidas cautelares decretadas que puedan afectarle",
        ],
        recomendaciones: [
          "✅ Contacte inmediatamente a un abogado especializado en derecho de familia",
          "✅ Recopile toda la documentación relacionada con el caso",
          "✅ Asista a la audiencia preparatoria con toda la prueba que respalde su posición",
          "✅ Considere la posibilidad de mediación familiar previa al juicio",
          "✅ Prepare una contestación formal antes de la audiencia preparatoria",
        ],
        ventajas: [
          "✓ Los procedimientos de familia suelen ser más rápidos que los civiles ordinarios",
          "✓ Posibilidad de llegar a acuerdos mediante mediación familiar",
          "✓ El tribunal puede decretar medidas de protección inmediatas si son necesarias",
        ],
        riesgos: [
          "✗ Las resoluciones pueden afectar relaciones familiares a largo plazo",
          "✗ Posibles efectos emocionales en menores de edad involucrados",
          "✗ Obligaciones económicas como pensiones de alimentos o compensaciones",
          "✗ Posibles restricciones de contacto con familiares en casos de violencia intrafamiliar",
        ],
        conceptosLegales: {
          "Audiencia preparatoria": "Instancia judicial donde se fijan los hechos a probar y se ofrece la prueba.",
          "Mediación familiar": "Proceso previo obligatorio en muchas materias de familia para buscar acuerdos.",
          "Medidas cautelares":
            "Disposiciones provisionales que puede decretar el tribunal para proteger a miembros de la familia.",
        },
      }

    // Mantener los demás casos existentes...
    case "judicial_demanda_laboral":
      return {
        tipo: "Demanda Laboral",
        tipoTecnico: "judicial_demanda_laboral",
        descripcion:
          "Este documento es una demanda presentada ante un tribunal laboral. Inicia un proceso judicial en materia laboral donde un trabajador (generalmente) reclama derechos laborales contra un empleador.",
        advertencias: [
          "⚠️ PLAZO PARA CONTESTAR: 5 días hábiles en procedimiento de aplicación general",
          "⚠️ En procedimiento monitorio: 10 días hábiles para reclamar contra la sentencia inmediata",
          "⚠️ En procedimiento de tutela laboral: 5 días hábiles",
          "⚠️ La no contestación puede resultar en que se den por aceptados tácitamente los hechos",
          "⚠️ Es obligatorio comparecer con abogado habilitado a las audiencias",
        ],
        recomendaciones: [
          "✅ Contacte inmediatamente a un abogado especializado en derecho laboral",
          "✅ Recopile toda la documentación laboral (contratos, liquidaciones, finiquitos, etc.)",
          "✅ Prepare una contestación formal dentro del plazo legal",
          "✅ Reúna testigos y otras pruebas que respalden su posición",
          "✅ Considere la posibilidad de conciliación en la audiencia preparatoria",
        ],
        ventajas: [
          "✓ Los procedimientos laborales suelen ser más rápidos que los civiles",
          "✓ Posibilidad de llegar a acuerdos conciliatorios con beneficios tributarios",
          "✓ El tribunal puede decretar medidas cautelares para asegurar el resultado del juicio",
        ],
        riesgos: [
          "✗ Posibles indemnizaciones y recargos significativos en caso de sentencia desfavorable",
          "✗ Costas procesales y honorarios de abogados",
          "✗ Posibles efectos en la reputación empresarial en caso de empleadores",
          "✗ Eventuales multas administrativas adicionales",
        ],
        conceptosLegales: {
          "Procedimiento de aplicación general": "Procedimiento ordinario laboral para la mayoría de las causas.",
          "Procedimiento monitorio":
            "Procedimiento especial para causas de menor cuantía o de tutela de derechos fundamentales.",
          "Audiencia preparatoria": "Primera audiencia donde se intenta conciliación y se fijan hechos a probar.",
          "Audiencia de juicio": "Segunda audiencia donde se rinde la prueba y se dicta sentencia.",
        },
      }

    // Añadir más casos según sea necesario...

    case "judicial_querella_penal":
      return {
        tipo: "Querella Criminal",
        tipoTecnico: "judicial_querella_penal",
        descripcion:
          "Este documento es una querella criminal presentada ante un tribunal de garantía. Inicia o se suma a un proceso penal donde se denuncia la comisión de un delito y se solicita la investigación y sanción del responsable.",
        advertencias: [
          "⚠️ PLAZO PARA COMPARECER: Según citación del tribunal o fiscalía",
          "⚠️ La no comparecencia puede resultar en orden de detención",
          "⚠️ Tiene derecho a guardar silencio y a contar con un abogado defensor",
          "⚠️ Todo lo que declare puede ser usado en su contra",
          "⚠️ Verifique si hay medidas cautelares solicitadas (prisión preventiva, arraigo, etc.)",
        ],
        recomendaciones: [
          "✅ Contacte inmediatamente a un abogado penalista",
          "✅ No declare sin la presencia de su abogado",
          "✅ Recopile toda la evidencia que pueda respaldar su inocencia",
          "✅ Identifique posibles testigos favorables a su defensa",
          "✅ Considere la posibilidad de salidas alternativas según el tipo de delito",
        ],
        ventajas: [
          "✓ Derecho a conocer los antecedentes de la investigación",
          "✓ Posibilidad de solicitar diligencias de investigación",
          "✓ Derecho a un debido proceso con todas las garantías legales",
        ],
        riesgos: [
          "✗ Posibles penas privativas de libertad según el delito imputado",
          "✗ Medidas cautelares que restrinjan su libertad durante el proceso",
          "✗ Antecedentes penales en caso de condena",
          "✗ Posibles indemnizaciones civiles derivadas del delito",
        ],
        conceptosLegales: {
          Querella: "Acto procesal por el que la víctima o sus representantes inician o se suman a un proceso penal.",
          "Audiencia de formalización": "Instancia donde el fiscal comunica al imputado que está siendo investigado.",
          "Medidas cautelares":
            "Restricciones que puede imponer el tribunal para asegurar la comparecencia del imputado.",
          "Salidas alternativas":
            "Mecanismos como suspensión condicional o acuerdos reparatorios que evitan el juicio.",
        },
      }

    case "judicial_cautelar_familia":
      return {
        tipo: "Resolución Judicial - Medida Cautelar en materia de Familia",
        tipoTecnico: "judicial_cautelar_familia",
        descripcion:
          "Este documento es una resolución judicial que establece medidas cautelares relacionadas con derechos de niños, niñas o adolescentes. Las medidas cautelares son decisiones provisionales que toma un tribunal para proteger derechos que podrían verse vulnerados durante el proceso judicial.",
        advertencias: [
          "⚠️ Este documento contiene información sensible sobre menores de edad",
          "⚠️ La medida cautelar tiene carácter temporal hasta la audiencia preparatoria",
          "⚠️ El incumplimiento de una medida cautelar puede tener consecuencias legales graves",
          "⚠️ Las fechas y plazos mencionados son críticos y deben respetarse estrictamente",
        ],
        recomendaciones: [
          "✅ Mantener la confidencialidad del documento",
          "✅ Cumplir estrictamente con las medidas establecidas",
          "✅ Anotar la fecha de la audiencia preparatoria y asistir puntualmente",
          "✅ Consultar con un abogado para entender el alcance de la medida",
          "✅ Preparar documentación de respaldo para la audiencia",
        ],
        ventajas: [
          "✓ Protege de forma inmediata los derechos de los menores involucrados",
          "✓ Establece reglas claras mientras se resuelve el proceso principal",
          "✓ Permite estabilizar situaciones familiares complejas",
          "✓ Tiene respaldo judicial y es de cumplimiento obligatorio",
        ],
        riesgos: [
          "✗ Su incumplimiento puede resultar en sanciones, multas o incluso arresto",
          "✗ Puede generar precedentes para la resolución definitiva",
          "✗ Podría afectar la relación con los menores si no se maneja adecuadamente",
          "✗ Las medidas podrían ser modificadas en la audiencia preparatoria",
        ],
        conceptosLegales: {
          "Medida cautelar":
            "Disposición judicial provisional destinada a proteger un derecho que podría verse vulnerado durante el proceso.",
          "Audiencia preparatoria":
            "Instancia judicial donde se discuten las pruebas y se pueden modificar las medidas cautelares.",
          "Interés superior del niño":
            "Principio legal que prioriza el bienestar de los menores en todas las decisiones judiciales.",
        },
      }

    // Mantener los casos existentes...
    case "contrato_promesa":
      return {
        tipo: "Contrato de Promesa",
        tipoTecnico: "contrato_promesa",
        descripcion:
          "Este documento es un contrato de promesa donde las partes se comprometen a celebrar un contrato definitivo en el futuro, bajo ciertas condiciones y plazos. Es un acuerdo preliminar que establece las bases para un contrato posterior.",
        advertencias: [
          "⚠️ Verifique que todas las cláusulas sean claras y específicas",
          "⚠️ Confirme que se establecen plazos definidos para el cumplimiento",
          "⚠️ Revise las condiciones de incumplimiento y sus consecuencias",
          "⚠️ Asegúrese que el objeto del contrato esté claramente identificado",
        ],
        recomendaciones: [
          "✅ Conservar una copia firmada por todas las partes",
          "✅ Verificar que se incluyan todos los anexos mencionados",
          "✅ Consultar con un abogado antes de firmar",
          "✅ Establecer un mecanismo de resolución de conflictos",
          "✅ Asegurar que todas las condiciones sean realistas y alcanzables",
        ],
        ventajas: [
          "✓ Asegura la intención de las partes de celebrar un contrato futuro",
          "✓ Establece condiciones y términos claros para el contrato definitivo",
          "✓ Permite planificar y prepararse para el contrato final",
          "✓ Puede incluir cláusulas de indemnización en caso de incumplimiento",
        ],
        riesgos: [
          "✗ Si no cumple con los requisitos legales, podría ser inválido o inejecutable",
          "✗ Las condiciones suspensivas podrían no cumplirse, impidiendo el contrato definitivo",
          "✗ Los plazos podrían vencer sin que se concrete el contrato prometido",
          "✗ Cambios en las circunstancias podrían dificultar el cumplimiento",
        ],
        conceptosLegales: {
          "Promesa de contrato":
            "Acuerdo preliminar donde las partes se comprometen a celebrar un contrato definitivo en el futuro.",
          "Condición suspensiva": "Evento futuro e incierto del cual depende el nacimiento de una obligación.",
          Arras: "Cantidad de dinero que se entrega como garantía del cumplimiento de la promesa.",
        },
      }

    case "judicial_sentencia":
      return {
        tipo: "Sentencia Judicial",
        tipoTecnico: "judicial_sentencia",
        descripcion:
          "Este documento es una sentencia judicial, que constituye la decisión final de un tribunal sobre un asunto sometido a su conocimiento. Resuelve el conflicto entre las partes y establece derechos y obligaciones.",
        advertencias: [
          "⚠️ Verifique si la sentencia está firme o ejecutoriada",
          "⚠️ Revise los plazos para presentar recursos (apelación, casación, etc.)",
          "⚠️ Identifique las obligaciones específicas que impone la sentencia",
          "⚠️ Confirme los plazos para cumplir con lo ordenado en la sentencia",
        ],
        recomendaciones: [
          "✅ Consultar con un abogado para entender los alcances de la sentencia",
          "✅ Evaluar la conveniencia de presentar recursos si la sentencia es desfavorable",
          "✅ Cumplir oportunamente con las obligaciones impuestas",
          "✅ Solicitar aclaración, rectificación o enmienda si hay puntos oscuros o ambiguos",
          "✅ Conservar una copia certificada de la sentencia",
        ],
        ventajas: [
          "✓ Resuelve definitivamente el conflicto si no se presentan recursos",
          "✓ Establece con claridad los derechos y obligaciones de las partes",
          "✓ Puede ser ejecutada forzosamente en caso de incumplimiento",
          "✓ Genera cosa juzgada, impidiendo un nuevo juicio sobre lo mismo",
        ],
        riesgos: [
          "✗ El incumplimiento puede generar nuevos procesos judiciales",
          "✗ Posibles costas judiciales si la sentencia es desfavorable",
          "✗ Ejecución forzosa de obligaciones en caso de no cumplimiento voluntario",
          "✗ Posibles embargos o apremios si no se cumple lo ordenado",
        ],
        conceptosLegales: {
          "Sentencia firme": "Aquella contra la cual no proceden recursos o han vencido los plazos para interponerlos.",
          "Cosa juzgada": "Efecto de una sentencia firme que impide volver a discutir lo ya resuelto.",
          Cumplimiento: "Ejecución de lo ordenado en la sentencia, voluntaria o forzosamente.",
        },
      }

    case "contrato_compraventa":
      return {
        tipo: "Contrato de Compraventa",
        tipoTecnico: "contrato_compraventa",
        descripcion:
          "Este documento es un contrato de compraventa, mediante el cual una parte (vendedor) se obliga a transferir la propiedad de un bien a otra (comprador), y ésta a pagar un precio cierto en dinero.",
        advertencias: [
          "⚠️ Verifique que el bien esté correctamente individualizado",
          "⚠️ Confirme que el precio y forma de pago estén claramente establecidos",
          "⚠️ Revise las garantías ofrecidas por el vendedor",
          "⚠️ Asegúrese que se establezca la fecha de entrega del bien",
        ],
        recomendaciones: [
          "✅ Verificar la titularidad del vendedor sobre el bien",
          "✅ Comprobar que el bien no tenga gravámenes o limitaciones",
          "✅ Conservar una copia firmada por todas las partes",
          "✅ Registrar la transferencia en los organismos correspondientes cuando sea necesario",
          "✅ Consultar con un abogado antes de firmar",
        ],
        ventajas: [
          "✓ Formaliza la transferencia de propiedad del bien",
          "✓ Establece claramente los derechos y obligaciones de las partes",
          "✓ Proporciona seguridad jurídica a la transacción",
          "✓ Puede incluir garantías específicas sobre el estado del bien",
        ],
        riesgos: [
          "✗ Posibles vicios ocultos en el bien que no sean evidentes al momento de la compra",
          "✗ Riesgo de evicción si el vendedor no es el verdadero propietario",
          "✗ Incumplimiento en la entrega o en el pago según lo acordado",
          "✗ Posibles discrepancias sobre el estado del bien al momento de la entrega",
        ],
        conceptosLegales: {
          Compraventa:
            "Contrato por el cual una parte transfiere la propiedad de un bien a otra a cambio de un precio.",
          Evicción: "Pérdida del bien adquirido por sentencia judicial que reconoce un mejor derecho de un tercero.",
          "Vicios ocultos": "Defectos no aparentes del bien que lo hacen impropio para su uso o disminuyen su valor.",
        },
      }

    // Mantener los demás casos...

    default:
      return defaultAnalysis
  }
}
