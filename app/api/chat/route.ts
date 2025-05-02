import { NextResponse } from "next/server"
import { leyesChile } from "@/lib/leyes-chile"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const userMessage = messages[messages.length - 1].content.toLowerCase()

    // Analizar la consulta y buscar leyes relevantes
    const response = analizarConsulta(userMessage)

    return NextResponse.json({ response })
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error:", error)
    }
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}

// El problema es que la respuesta podría estar usando formato Markdown implícitamente.
// Vamos a modificar la función analizarConsulta para asegurarnos de que no use formato Markdown.

function analizarConsulta(consulta: string) {
  // Siempre enfocarse en deudas, independientemente de la consulta
  if (consulta.includes("5 millones") || consulta.includes("deuda grande")) {
    return `Según la Ley 20.720 de Reorganización y Liquidación (${leyesChile["Ley-20720_09-ENE-2014"].titulo}), tienes varias opciones:

1. Procedimiento de Reorganización: Permite renegociar tus deudas manteniendo la administración de tus bienes.
2. Procedimiento de Liquidación: Si las deudas son inmanejables, puedes liquidar tus activos para pagarlas.

También es importante considerar:
- El plazo de prescripción según el Código Civil (${leyesChile["DFL-1_30-MAY-2000"].titulo}), artículo ${leyesChile["DFL-1_30-MAY-2000"].articulos["2515"]}.
- Las protecciones de la nueva Ley 21.484 sobre Protección de Deudores.

Te recomiendo:
1. Solicitar tu cartola histórica de deudas
2. Consultar con un asesor de insolvencia
3. Evaluar un acuerdo de pago con tus acreedores`
  }

  // Para cualquier otra consulta, proporcionar información general sobre deudas
  return `Para brindarte una orientación precisa sobre tus deudas basada en la legislación chilena vigente, necesito más detalles sobre tu situación. 

Puedes contarme:
1. ¿Qué tipo de deudas tienes? (bancarias, tarjetas, créditos de consumo, etc.)
2. ¿Hace cuánto tiempo dejaste de pagarlas?
3. ¿Has recibido notificaciones judiciales?
4. ¿Estás en algún registro de morosidad como Dicom?

Con esta información podré orientarte mejor sobre tus opciones según la ley chilena.`
}
