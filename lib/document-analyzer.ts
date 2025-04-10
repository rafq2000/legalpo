// Asegurarnos de que no haya importaciones de 'fs' en este archivo
// Si hay alguna, la eliminaremos o modificaremos según sea necesario

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
}

// Mock functions for extraction (replace with actual implementations)
function extractDates(text: string): Record<string, string> {
  return { date1: "01/01/2024", date2: "02/02/2024" }
}

function extractAmounts(text: string): Record<string, string> {
  return { amount1: "$100", amount2: "€50" }
}

function extractParties(text: string, documentType: DocumentType): Record<string, string> {
  return { party1: "John Doe", party2: "Jane Smith" }
}

function extractImportantClauses(text: string, documentType: DocumentType): Record<string, string> {
  return { clause1: "Clause A", clause2: "Clause B" }
}

function extractKeyPoints(text: string, documentType: DocumentType): string[] {
  return ["Point 1", "Point 2"]
}

// Modificar la función analyzeDocument para detectar demandas y sus tipos
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

  // Contar coincidencias
  Object.entries(patterns).forEach(([type, keywords]) => {
    keywords.forEach((keyword) => {
      if (lowerText.includes(keyword)) {
        matches[type as DocumentType]++
      }
    })
  })

  // Determinar el tipo de documento con más coincidencias
  let documentType: DocumentType = "unknown"
  let maxMatches = 0

  Object.entries(matches).forEach(([type, count]) => {
    if (count > maxMatches) {
      maxMatches = count
      documentType = type as DocumentType
    }
  })

  // Si no hay suficientes coincidencias, marcar como desconocido
  if (maxMatches < 2) {
    documentType = "unknown"
  }

  // Generar análisis según el tipo de documento
  return generateAnalysis(documentType, text)
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
