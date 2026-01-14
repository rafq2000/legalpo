export type CountryCode = "mx" | "co" | "ar" | "es" | "cl" | "pe"

export interface CountryConfig {
  code: CountryCode
  name: string
  demonym: string
  childTerm: string // "niños" vs "chicos" vs "chavales"
  currency: string
  currencySymbol: string
  priceUSD: number
  priceLocal: number
  whatsapp: string
  timezone: string
  mainCity: string
  otherCities: string[]
  locale: string
  hreflang: string
  tone: string
  keywords: string[]
  longTailKeywords: string[]
  paymentMethods: string[]
  flag: string
}

export const countriesConfig: Record<CountryCode, CountryConfig> = {
  mx: {
    code: "mx",
    name: "México",
    demonym: "mexicanos",
    childTerm: "niños",
    currency: "MXN",
    currencySymbol: "$",
    priceUSD: 300,
    priceLocal: 5500,
    whatsapp: "+56964754219",
    timezone: "America/Mexico_City",
    mainCity: "CDMX",
    otherCities: ["Guadalajara", "Monterrey", "Puebla", "Tijuana"],
    locale: "es_MX",
    hreflang: "es-MX",
    tone: "Aspiracional - preparar para el futuro, ventaja competitiva",
    keywords: [
      "cursos de inteligencia artificial para niños",
      "clases de IA para niños cdmx",
      "programación con IA para niños",
      "cursos de tecnología para niños méxico",
      "curso ia niños guadalajara",
      "curso ia niños monterrey",
    ],
    longTailKeywords: [
      "donde aprenden IA mis hijos en méxico",
      "academias de inteligencia artificial infantil cdmx",
      "mejor curso de ia para niños mexicanos",
    ],
    paymentMethods: ["OXXO", "Mercado Pago", "PayPal", "Tarjeta de crédito"],
    flag: "🇲🇽",
  },
  co: {
    code: "co",
    name: "Colombia",
    demonym: "colombianos",
    childTerm: "niños",
    currency: "COP",
    currencySymbol: "$",
    priceUSD: 300,
    priceLocal: 1200000,
    whatsapp: "+56964754219",
    timezone: "America/Bogota",
    mainCity: "Bogotá",
    otherCities: ["Medellín", "Cali", "Barranquilla", "Cartagena"],
    locale: "es_CO",
    hreflang: "es-CO",
    tone: "Innovación, emprendimiento, crear tecnología propia",
    keywords: [
      "cursos de inteligencia artificial para niños bogotá",
      "clases de IA para niños colombia",
      "academias de robótica e IA para niños",
      "educación en inteligencia artificial infantil",
      "curso ia niños medellín",
    ],
    longTailKeywords: [
      "donde estudiar ia niños en colombia",
      "cursos de tecnología para niños bogotá",
      "mejor academia de ia para niños colombia",
    ],
    paymentMethods: ["PSE", "Nequi", "Daviplata", "Mercado Pago", "PayPal"],
    flag: "🇨🇴",
  },
  ar: {
    code: "ar",
    name: "Argentina",
    demonym: "argentinos",
    childTerm: "chicos",
    currency: "ARS",
    currencySymbol: "$",
    priceUSD: 300,
    priceLocal: 290000,
    whatsapp: "+56964754219",
    timezone: "America/Argentina/Buenos_Aires",
    mainCity: "Buenos Aires",
    otherCities: ["Córdoba", "Rosario", "Mendoza", "La Plata"],
    locale: "es_AR",
    hreflang: "es-AR",
    tone: "Creatividad, pensamiento crítico, aprender haciendo",
    keywords: [
      "cursos de inteligencia artificial para chicos",
      "clases de IA para niños buenos aires",
      "programación e inteligencia artificial para niños",
      "talleres de IA para niños argentina",
      "curso ia chicos córdoba",
    ],
    longTailKeywords: [
      "donde aprenden ia los chicos en argentina",
      "academias de programación ia buenos aires",
      "curso de tecnología para chicos online",
    ],
    paymentMethods: ["Mercado Pago", "Transferencia bancaria", "PayPal"],
    flag: "🇦🇷",
  },
  es: {
    code: "es",
    name: "España",
    demonym: "españoles",
    childTerm: "niños",
    currency: "EUR",
    currencySymbol: "€",
    priceUSD: 300,
    priceLocal: 280,
    whatsapp: "+56964754219",
    timezone: "Europe/Madrid",
    mainCity: "Madrid",
    otherCities: ["Barcelona", "Valencia", "Sevilla", "Bilbao"],
    locale: "es_ES",
    hreflang: "es-ES",
    tone: "Calidad educativa, metodología validada, formación seria",
    keywords: [
      "cursos de inteligencia artificial para niños españa",
      "clases de IA para niños madrid",
      "academias de programación IA infantil",
      "formación en inteligencia artificial para menores",
      "curso ia niños barcelona",
    ],
    longTailKeywords: [
      "donde aprenden ia los niños en españa",
      "mejores cursos de ia para niños madrid",
      "academia de inteligencia artificial infantil barcelona",
    ],
    paymentMethods: ["Tarjeta de crédito", "Bizum", "PayPal", "Transferencia SEPA"],
    flag: "🇪🇸",
  },
  cl: {
    code: "cl",
    name: "Chile",
    demonym: "chilenos",
    childTerm: "niños",
    currency: "CLP",
    currencySymbol: "$",
    priceUSD: 300,
    priceLocal: 290000,
    whatsapp: "+56964754219",
    timezone: "America/Santiago",
    mainCity: "Santiago",
    otherCities: ["Valparaíso", "Concepción", "La Serena", "Antofagasta"],
    locale: "es_CL",
    hreflang: "es-CL",
    tone: "Pragmático, ROI educativo, inversión en el futuro",
    keywords: [
      "cursos de IA para niños santiago",
      "clases inteligencia artificial infantil chile",
      "talleres de IA para niños",
      "curso ia niños valparaíso",
      "academia ia niños chile",
    ],
    longTailKeywords: [
      "donde estudiar ia niños en chile",
      "cursos de tecnología para niños santiago",
      "mejor curso de inteligencia artificial para niños chile",
    ],
    paymentMethods: ["Webpay", "Mercado Pago", "PayPal", "Transferencia bancaria"],
    flag: "🇨🇱",
  },
  pe: {
    code: "pe",
    name: "Perú",
    demonym: "peruanos",
    childTerm: "niños",
    currency: "PEN",
    currencySymbol: "S/",
    priceUSD: 300,
    priceLocal: 1150,
    whatsapp: "+56964754219",
    timezone: "America/Lima",
    mainCity: "Lima",
    otherCities: ["Arequipa", "Trujillo", "Cusco", "Piura"],
    locale: "es_PE",
    hreflang: "es-PE",
    tone: "Accesibilidad, transformación, educación de clase mundial",
    keywords: [
      "cursos de inteligencia artificial para niños lima",
      "clases de IA para niños perú",
      "academias de programación IA para niños",
      "curso ia niños arequipa",
      "talleres ia infantil perú",
    ],
    longTailKeywords: [
      "donde estudiar ia niños en perú",
      "cursos de tecnología para niños lima",
      "academia de inteligencia artificial para niños perú",
    ],
    paymentMethods: ["Yape", "Plin", "Mercado Pago", "PayPal", "BCP"],
    flag: "🇵🇪",
  },
}

export const getCountryConfig = (code: CountryCode): CountryConfig => {
  return countriesConfig[code]
}

export const getAllCountryCodes = (): CountryCode[] => {
  return Object.keys(countriesConfig) as CountryCode[]
}
