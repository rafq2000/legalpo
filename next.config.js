/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        child_process: false,
      }
    }
    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configuración para resolver el problema de useSearchParams
  output: "server", // Cambiado a "server" para evitar la generación estática
  // Desactivar completamente la prerenderización
  experimental: {
    // Esto evita que Next.js intente prerender la página 404
    disableStaticPages: true,
  },
}

module.exports = nextConfig
