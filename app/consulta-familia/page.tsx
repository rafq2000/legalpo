import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ChatTabs } from "@/components/chat-tabs"

export const metadata: Metadata = {
  title: "Consultas de Derecho de Familia en Chile - Asesoría Legal | LegalPo",
  description:
    "Resuelve tus dudas sobre matrimonio, divorcio, pensión alimenticia, custodia de hijos y derechos familiares en Chile. Obtén respuestas claras basadas en la legislación chilena vigente.",
  keywords:
    "derecho familia Chile, divorcio, pensión alimenticia, custodia hijos, matrimonio, unión civil, adopción, violencia intrafamiliar",
  openGraph: {
    title: "Consultas de Derecho de Familia en Chile - Asesoría Legal | LegalPo",
    description:
      "Resuelve tus dudas sobre matrimonio, divorcio, pensión alimenticia, custodia de hijos y derechos familiares en Chile. Obtén respuestas claras basadas en la legislación chilena vigente.",
    url: "https://legalpo.cl/consulta-familia",
    siteName: "LegalPo",
    locale: "es_CL",
    type: "website",
  },
  alternates: {
    canonical: "https://legalpo.cl/consulta-familia",
  },
}

export default function FamiliaPage() {
  const informacionFamilia = (
    <>
      <h2 className="text-2xl font-semibold mb-6 text-blue-900">Información Legal sobre Derecho de Familia en Chile</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium mb-3 text-blue-800">Matrimonio y Divorcio</h3>
          <p className="text-gray-700 mb-2">
            El matrimonio y divorcio en Chile están regulados principalmente por la Ley N.º 19.947 de Matrimonio Civil:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>El divorcio puede ser por mutuo acuerdo (1 año de separación) o unilateral (3 años de separación)</li>
            <li>Existen tres tipos de separación legal: nulidad, separación judicial y divorcio</li>
            <li>La Ley N.º 20.830 regula el Acuerdo de Unión Civil para parejas del mismo o distinto sexo</li>
            <li>La Ley N.º 21.400 (2021) estableció el matrimonio igualitario en Chile</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-3 text-blue-800">Pensión de Alimentos</h3>
          <p className="text-gray-700 mb-2">
            La pensión alimenticia está regulada por la Ley N.º 14.908 sobre Abandono de Familia y Pago de Pensiones
            Alimenticias:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>
              Los alimentos deben habilitar al alimentario para subsistir modestamente de un modo correspondiente a su
              posición social
            </li>
            <li>
              El monto se fija considerando las necesidades del alimentario y las capacidades económicas del alimentante
            </li>
            <li>La Ley N.º 21.389 (2021) creó el Registro Nacional de Deudores de Pensiones de Alimentos</li>
            <li>
              El no pago puede resultar en retención de la devolución de impuestos, prohibición de renovar licencia de
              conducir, e incluso arresto
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-3 text-blue-800">Cuidado Personal y Relación Directa</h3>
          <p className="text-gray-700 mb-2">
            La Ley N.º 20.680 (conocida como "Ley Amor de Papá") modificó normas sobre cuidado personal de los hijos:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Establece la corresponsabilidad parental como principio rector</li>
            <li>El cuidado personal puede ser ejercido por uno de los padres o compartido</li>
            <li>
              La relación directa y regular (visitas) debe asegurar la mayor participación y corresponsabilidad de ambos
              padres
            </li>
            <li>Las decisiones de mayor trascendencia deben ser adoptadas de común acuerdo</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-3 text-blue-800">Violencia Intrafamiliar</h3>
          <p className="text-gray-700 mb-2">
            La Ley N.º 20.066 sobre Violencia Intrafamiliar establece mecanismos de protección:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>
              Define la violencia intrafamiliar como todo maltrato que afecte la vida o integridad física o psíquica de
              quien tenga la calidad de cónyuge, conviviente o pariente
            </li>
            <li>Establece medidas de protección para las víctimas</li>
            <li>La Ley N.º 21.212 ("Ley Gabriela") amplió el concepto de femicidio y aumentó las penas</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Nota:</strong> Esta información es de carácter general. Para casos específicos, te recomendamos
            consultar con un abogado especializado en derecho de familia.
          </p>
        </div>
      </div>
    </>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Consultas de Derecho de Familia</h1>
          <p className="text-gray-600 mb-8">
            Consulta sobre matrimonio, divorcio, pensión alimenticia y custodia de hijos y recibe respuestas basadas en
            la legislación chilena vigente
          </p>

          <ChatTabs tema="familia" informacionContent={informacionFamilia} />
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
