/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // URLs antiguas que Google tiene indexadas pero dan 404
      // Desde Search Console - 42 URLs con error

      // Páginas principales antiguas
      { source: '/es', destination: '/', permanent: true },
      { source: '/es-cl', destination: '/', permanent: true },
      { source: '/abogado-gratis', destination: '/', permanent: true },
      { source: '/abogado-gratis-online', destination: '/', permanent: true },
      { source: '/asesoria-legal-gratis', destination: '/', permanent: true },
      { source: '/consulta-legal-gratis', destination: '/', permanent: true },
      { source: '/contactar-abogado', destination: '/', permanent: true },
      { source: '/abogado-inteligencia-artificial', destination: '/', permanent: true },
      { source: '/asesoria-legal-inteligencia-artificial', destination: '/', permanent: true },

      // Calculadoras y herramientas
      { source: '/pension-alimentos', destination: '/calculators/pension-alimentos', permanent: true },
      { source: '/pension-alimenticia', destination: '/calculators/pension-alimentos', permanent: true },
      { source: '/calculadora-herencia', destination: '/calculators/herencia', permanent: true },
      { source: '/finiquito-chile', destination: '/calculators/finiquito', permanent: true },

      // Contratos
      { source: '/contratos', destination: '/tools/contract-generator', permanent: true },
      { source: '/contratos/arriendo', destination: '/tools/contract-generator', permanent: true },
      { source: '/contratos/trabajo', destination: '/tools/contract-generator', permanent: true },
      { source: '/generador-contratos/laboral', destination: '/tools/contract-generator', permanent: true },

      // Temas de familia
      { source: '/divorcio-chile', destination: '/abogado-familia', permanent: true },
      { source: '/tuicion-hijos', destination: '/abogado-familia', permanent: true },
      { source: '/regimen-visitas', destination: '/abogado-familia', permanent: true },

      // Temas laborales
      { source: '/laboral', destination: '/abogado-laboral', permanent: true },

      // Temas de deudas
      { source: '/deudas', destination: '/abogado-deudas', permanent: true },
      { source: '/consulta-deudas', destination: '/abogado-deudas', permanent: true },
      { source: '/embargo-bienes', destination: '/abogado-deudas', permanent: true },
      { source: '/renegociacion-deudas', destination: '/abogado-deudas', permanent: true },

      // Otros temas legales
      { source: '/arriendo-falso', destination: '/abogado-arriendos', permanent: true },
      { source: '/derechos-consumidor', destination: '/', permanent: true },
      { source: '/caracteristicas', destination: '/', permanent: true },
      { source: '/terminos', destination: '/terminos-servicio', permanent: true },

      // URLs con www que pueden tener diferencias
      { source: '/www.legalpo.cl/:path*', destination: '/:path*', permanent: true },
    ]
  },
}

export default nextConfig

