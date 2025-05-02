/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Estas son las únicas flags válidas en Next.js 15+
    serverActions: true,
    turbo: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com", "firebasestorage.googleapis.com"],
    unoptimized: true,
  },
  trailingSlash: false, // O true si prefieres URLs con slash final
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
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
}

module.exports = nextConfig
