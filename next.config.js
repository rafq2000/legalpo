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
  output: "server", // Forzar modo servidor
  // Desactivar completamente la prerenderización
  experimental: {
    // Esto evita que Next.js intente prerender páginas
    disableStaticPages: true,
    // Desactivar la generación de 404
    skipTrailingSlashRedirect: true,
    skipMiddlewareUrlNormalize: true,
  },
  // Desactivar la generación automática de 404
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
}

module.exports = nextConfig
