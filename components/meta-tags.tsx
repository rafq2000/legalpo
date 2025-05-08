import Head from "next/head"

interface MetaTagsProps {
  title?: string
  description?: string
  canonical?: string
  noindex?: boolean
}

export function MetaTags({
  title = "LegalPO - Herramientas legales con IA para documentos y consultas jurídicas en Chile",
  description = "Analiza documentos legales, calcula finiquitos, pensiones alimenticias y obtén respuestas a tus consultas sobre deudas y derecho laboral en Chile con inteligencia artificial.",
  canonical,
  noindex = false,
}: MetaTagsProps) {
  const baseUrl = "https://legalpo.cl"
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Head>
  )
}
