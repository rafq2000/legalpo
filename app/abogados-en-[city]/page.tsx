import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cities } from "@/lib/cities"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdUnit } from "@/components/ad-unit"

interface CityPageProps {
  params: {
    city: string
  }
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.toLowerCase().replace(/ /g, "-"),
  }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const cityName = params.city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  if (!cities.map((city) => city.toLowerCase()).includes(cityName.toLowerCase())) {
    return {
      title: "Página no encontrada",
      description: "La página que buscas no existe",
    }
  }

  return {
    title: `Asesoría legal gratuita en ${cityName} - LegalPO`,
    description: `Asesoría legal gratuita en ${cityName}. Resuelve tus dudas legales en arriendos, consumo, pensiones y más con la ayuda de LegalPO.`,
    keywords: `abogado en ${cityName}, asesoría legal gratuita en ${cityName}, consultar abogado online, dudas legales en Chile`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://legalpo.cl/abogados-en-${params.city}`,
    },
  }
}

export default function CityPage({ params }: CityPageProps) {
  const cityName = params.city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  if (!cities.map((city) => city.toLowerCase()).includes(cityName.toLowerCase())) {
    notFound()
  }

  const faqItems = [
    {
      question: `¿Dónde puedo encontrar asesoría legal gratuita en ${cityName}?`,
      answer: `En LegalPO ofrecemos asesoría legal gratuita online para residentes de ${cityName}. Nuestras herramientas de inteligencia artificial pueden ayudarte con consultas sobre temas laborales, deudas, arriendos y más.`,
    },
    {
      question: `¿Qué documentos legales puedo analizar siendo de ${cityName}?`,
      answer: `Siendo de ${cityName}, puedes analizar contratos de arriendo, contratos de trabajo, finiquitos, cartas de despido y otros documentos legales utilizando nuestra herramienta de análisis de documentos.`,
    },
    {
      question: `¿Cómo calculo mi finiquito en ${cityName}?`,
      answer: `Nuestra calculadora de finiquito te permite calcular lo que te corresponde según la legislación chilena vigente, independientemente de que vivas en ${cityName} o cualquier otra ciudad del país.`,
    },
  ]

  return (
    <>
      <SchemaMarkup
        title={`Asesoría legal gratuita en ${cityName}`}
        description={`Asesoría legal gratuita en ${cityName}. Resuelve tus dudas legales en arriendos, consumo, pensiones y más con la ayuda de LegalPO.`}
        type="FAQPage"
        faqItems={faqItems}
      />

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Asesoría legal gratuita en {cityName}</h1>

            <p className="mb-6">
              Vivir en {cityName} puede traer consigo múltiples desafíos legales: desde firmar un contrato de arriendo
              hasta enfrentar una deuda injusta o resolver una separación. Muchas personas no saben dónde acudir ni cómo
              entender sus derechos. En LegalPO, te ofrecemos orientación legal gratuita, fácil de entender y adaptada a
              las necesidades de la gente de {cityName}.
            </p>

            <AdUnit slot="1234567890" format="horizontal" responsive={true} position="top" />

            <h2 className="text-2xl font-semibold mt-8 mb-4">Dudas legales más comunes en {cityName}</h2>
            <p className="mb-4">Entre los temas más consultados por nuestros usuarios en {cityName}, destacan:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Problemas con contratos de arriendo o garantías no devueltas.</li>
              <li className="mb-2">Despidos sin indemnización o dudas sobre el finiquito.</li>
              <li className="mb-2">Pensiones alimenticias no pagadas o mal calculadas.</li>
              <li className="mb-2">Compras con fallas o garantías negadas por tiendas.</li>
              <li className="mb-2">Estafas por internet o redes sociales.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">¿Qué es LegalPO y cómo puede ayudarte?</h2>
            <p className="mb-4">
              LegalPO es una plataforma chilena que utiliza inteligencia artificial para ayudarte a resolver tus dudas
              legales. Puedes enviar preguntas sobre temas civiles, laborales, de consumo o familia y recibir una
              respuesta inmediata. Además, tenemos herramientas como:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Calculadora de pensión de alimentos</li>
              <li className="mb-2">Calculadora de finiquito</li>
              <li className="mb-2">Analizador de documentos legales (contratos, cartas, demandas)</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">Orientación legal desde tu celular o computador</h2>
              <p className="mb-4">
                No necesitas ir a una oficina ni pagar una consulta. Solo accede a{" "}
                <Link href="/" className="text-blue-600 hover:underline">
                  LegalPO.cl
                </Link>
                , escribe tu consulta y obtén orientación clara y concreta. También puedes usar nuestras calculadoras
                gratuitas para revisar si tu pensión, herencia o despido fue bien calculado.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/dudas-laborales">Consultas Laborales</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/calculadora-finiquito">Calcular Finiquito</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/analyze">Analizar Documento</Link>
                </Button>
              </div>
            </div>

            <AdUnit slot="1234567890" format="horizontal" responsive={true} position="middle" />

            <h2 className="text-2xl font-semibold mt-8 mb-4">¿Vives en {cityName}? Esto es lo que puedes hacer hoy</h2>
            <p className="mb-6">
              Si estás enfrentando un problema legal en {cityName} y no sabes por dónde partir, prueba nuestra
              herramienta de asistencia legal gratuita. Ya sea que te preocupe un contrato, un cobro indebido o una
              denuncia, LegalPO puede darte una primera orientación sin costo y con total privacidad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Consultas Laborales</h3>
                <p className="mb-4">Resuelve dudas sobre despidos, finiquitos, vacaciones y más.</p>
                <Button asChild className="w-full">
                  <Link href="/dudas-laborales">Consultar</Link>
                </Button>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Consultas sobre Deudas</h3>
                <p className="mb-4">Información sobre cobranzas, DICOM y prescripción de deudas.</p>
                <Button asChild className="w-full">
                  <Link href="/deudas">Consultar</Link>
                </Button>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Analizar Documentos</h3>
                <p className="mb-4">Sube tu documento legal y recibe un análisis detallado.</p>
                <Button asChild className="w-full">
                  <Link href="/analyze">Analizar</Link>
                </Button>
              </div>
            </div>

            <AdUnit slot="1234567890" format="horizontal" responsive={true} position="bottom" />
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  )
}
