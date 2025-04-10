/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  // Desactivar la generación estática para rutas que usan auth
  output: "standalone",
  // Añadir configuración para evitar prerendering en páginas protegidas
  unstable_runtimeJS: true,
  // Configurar páginas que no deben prerenderizarse
  unstable_excludeFiles: ["**/app/analyze/**", "**/app/ask/**", "**/app/dudas-laborales/**", "**/app/calculadora-*/**"],
}

module.exports = nextConfig
