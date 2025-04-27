// Respuestas predefinidas para cuando los servicios de IA no estén disponibles

// Detectar el tema de la consulta
export function detectTopic(query: string): string {
  const normalizedQuery = query
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  if (
    normalizedQuery.includes("acoso") ||
    normalizedQuery.includes("bullying") ||
    normalizedQuery.includes("mobbing") ||
    normalizedQuery.includes("hostigamiento")
  ) {
    return "acoso"
  }

  if (
    normalizedQuery.includes("despido") ||
    normalizedQuery.includes("finiquito") ||
    normalizedQuery.includes("indemnizacion")
  ) {
    return "despido"
  }

  if (normalizedQuery.includes("vacaciones") || normalizedQuery.includes("feriado")) {
    return "vacaciones"
  }

  return "general"
}

// Obtener respuesta predefinida según la consulta
export function getFallbackResponse(query: string): string | null {
  const topic = detectTopic(query)

  switch (topic) {
    case "acoso":
      return `El acoso laboral o mobbing está definido en el artículo 2 del Código del Trabajo de Chile como toda conducta que constituya agresión u hostigamiento reiterados, ejercida por el empleador o por uno o más trabajadores, en contra de otro u otros trabajadores, por cualquier medio, y que tenga como resultado para el o los afectados su menoscabo, maltrato o humillación, o bien que amenace o perjudique su situación laboral o sus oportunidades en el empleo.

Pasos que puedes seguir:
1. Documenta todas las situaciones de acoso (fechas, horas, testigos, etc.)
2. Presenta un reclamo formal ante tu empleador
3. Si no hay respuesta, denuncia ante la Inspección del Trabajo
4. Considera el autodespido (art. 171 del Código del Trabajo)
5. Busca apoyo psicológico

La Ley 20.607 incorporó el acoso laboral como causal de término de contrato y como fundamento del autodespido.`

    case "despido":
      return `En Chile, el despido está regulado principalmente por los artículos 159, 160 y 161 del Código del Trabajo.

Tipos de despido:
- Por causas objetivas (art. 159): vencimiento del plazo, conclusión del trabajo, caso fortuito, etc.
- Por causales disciplinarias (art. 160): conductas graves como falta de probidad, acoso sexual, etc.
- Por necesidades de la empresa (art. 161): reestructuración, modernización, etc.

Indemnizaciones:
- Por años de servicio: 1 mes por año trabajado (tope 11 años)
- Sustitutiva de aviso previo: 1 mes de remuneración si no se dio aviso con 30 días de anticipación

Plazos para reclamar:
- 60 días hábiles desde la separación para reclamar ante tribunales
- 90 días hábiles si se reclama primero ante la Inspección del Trabajo`

    case "vacaciones":
      return `Las vacaciones en Chile están reguladas por los artículos 67 al 76 del Código del Trabajo.

Puntos principales:
- Todo trabajador con más de un año de servicio tiene derecho a 15 días hábiles de vacaciones pagadas al año
- Las vacaciones son irrenunciables y no pueden ser compensadas en dinero mientras está vigente el contrato
- Se pueden acumular solo por dos períodos consecutivos
- Feriado progresivo: después de 10 años de trabajo (para uno o más empleadores), se agrega un día adicional por cada 3 años más de trabajo

Feriados legales son distintos a las vacaciones y están establecidos en el artículo 35 del Código del Trabajo.`

    default:
      return null
  }
}

// Respuesta genérica para cuando no hay respuesta específica
export const genericFallbackResponse = `Para brindarte información precisa sobre normativa laboral chilena, necesito más detalles sobre tu consulta específica.

El Código del Trabajo es la principal normativa que regula las relaciones laborales en Chile, estableciendo derechos y obligaciones para trabajadores y empleadores.

Algunos aspectos importantes incluyen:
- Contrato de trabajo: debe constar por escrito
- Jornada laboral: máximo 45 horas semanales
- Remuneraciones: deben pagarse en la forma y periodicidad pactada
- Término del contrato: por causales específicas (arts. 159, 160, 161)
- Prescripción de derechos laborales: 2 años como regla general

¿Podrías reformular tu consulta con más detalles para poder ayudarte mejor?`
