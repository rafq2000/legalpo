/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@/components'],
  },
  async redirects() {
    return [
      // Old "el-primer-paso-hacia-el-futuro" URLs
      {
        source: '/el-primer-paso-hacia-el-futuro/reunión-clase-gratuita',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/el-primer-paso-hacia-el-futuro',
        destination: '/',
        permanent: true,
      },
      {
        source: '/información-próximo-curso-online-últimos-cupos/clase-gratuita-y-reunión-informativa',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      // Old booking URLs redirect to new one
      {
        source: '/información-próximo-curso-online-últimos-cupos',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/reserva-mi-clase-gratis',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/el-primer-paso-hacia-el-futuro/reunión-informativa',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/información-próximo-curso-online-últimos-cupos-hora-de-chile-la-reserva/clase-gratuita-y-reunión-informativa-hora-chile',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/información-próximo-curso-online-últimos-cupos-hora-de-chile-la-reserva',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/información-próximo-curso-online-últimos-cupos/clase-gratuita-y-reunión-informativa-hora-chile',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/agenda-ahora-clase-gratis-últimos-cupos/clase-gratuita-y-reunión-informativa-hora-chile',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/agenda-ahora-clase-gratis-últimos-cupos',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/agenda-ahora-reunión-gratis-últimos-cupos/clase-gratuita-y-reunión-informativa-hora-chile',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      // Old information URLs
      {
        source: '/información',
        destination: '/informacion',
        permanent: true,
      },
      {
        source: '/información/qué-aprenderán-los-niños',
        destination: '/informacion',
        permanent: true,
      },
      {
        source: '/información/herramientas-que-utilizarán',
        destination: '/informacion',
        permanent: true,
      },
      {
        source: '/información/formato',
        destination: '/informacion',
        permanent: true,
      },
      {
        source: '/blog/curso-estudio-ia-tutor-personalizado',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/chatgpt-para-ninos-guia-padres',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/beneficios-ia-educacion-infantil',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/proyectos-ia-ninos-principiantes',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/reserva-mi-clase-y-reunión-explicativa-gratis/clase-gratuita-y-reunión-informativa-hora-chile',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      // Malformed URLs
      {
        source: '/&',
        destination: '/',
        permanent: true,
      },
      // SEO FIX: Redirect duplicate country pages to canonical short URLs
      {
        source: '/mexico',
        destination: '/mx',
        permanent: true,
      },
      {
        source: '/colombia',
        destination: '/co',
        permanent: true,
      },
      {
        source: '/argentina',
        destination: '/ar',
        permanent: true,
      },
      {
        source: '/chile',
        destination: '/cl',
        permanent: true,
      },
      {
        source: '/peru',
        destination: '/pe',
        permanent: true,
      },
      {
        source: '/espana',
        destination: '/es',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
