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
  // Deshabilitar completamente la generación estática
  output: "server",
  // Deshabilitar la generación estática para la página 404
  experimental: {
    // Esto evita que Next.js intente prerender la página 404
    disableStaticPages: ["/_not-found", "/404"],
  },
}

module.exports = nextConfig
