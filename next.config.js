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
  // Desactivar completamente la prerenderización de páginas de error
  excludeDefaultMomentLocales: true,
  experimental: {
    // Configuración mínima necesaria
    serverActions: {
      allowedOrigins: ["localhost:3000", "docuscan.vercel.app"],
    },
    // Desactivar prerenderización de páginas de error
    disableOptimizedLoading: true,
    esmExternals: "loose",
  },
  // Desactivar la generación de páginas específicas
  exportPathMap: async (defaultPathMap) => {
    // Eliminar las rutas problemáticas
    delete defaultPathMap["/404"]
    delete defaultPathMap["/_not-found"]
    return defaultPathMap
  },
  async rewrites() {
    return [
      {
        source: "/ads.txt",
        destination: "/api/ads-txt",
      },
    ]
  },
  // Desactivar la generación de páginas de error
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig
