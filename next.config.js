/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración existente...
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Habilitar AMP
  experimental: {
    amp: {
      skipValidation: true,
    },
  },
}

module.exports = nextConfig
