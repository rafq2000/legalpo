/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
  // Configuración para optimizar el despliegue
  output: "standalone",
  // Desactivar optimizaciones que causan problemas
  optimizeFonts: false,
  compress: false,
  // Tiempo suficiente para la generación de páginas
  staticPageGenerationTimeout: 180, // 3 minutos
  experimental: {
    // Configuración mínima necesaria
    serverActions: {
      allowedOrigins: ["localhost:3000", "docuscan.vercel.app"],
    },
    // Desactivar prerenderización de páginas de error
    disableOptimizedLoading: true,
    esmExternals: "loose",
  },
  // Eliminado exportPathMap que no es compatible con App Router
  async rewrites() {
    return [
      {
        source: "/ads.txt",
        destination: "/api/ads-txt",
      },
    ]
  },
}

module.exports = nextConfig
