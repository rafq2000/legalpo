import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.innovakidslatam.com"
  const currentDate = new Date()

  return [
    // Página principal
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    // Magnet Page - Cursos Online (SEO High Priority)
    {
      url: `${baseUrl}/cursos-online-para-ninos`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },


    // México
    {
      url: `${baseUrl}/mx`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mx/cursos-ia-ninos-mexico`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mx/clases-ia-ninos-cdmx`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/mx/blog/cursos-inteligencia-artificial-ninos-mexico-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Colombia
    {
      url: `${baseUrl}/co`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/co/cursos-ia-ninos-colombia`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/co/clases-ia-ninos-bogota`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/co/blog/cursos-inteligencia-artificial-ninos-colombia-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Argentina
    {
      url: `${baseUrl}/ar`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ar/cursos-ia-chicos-argentina`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ar/clases-ia-chicos-buenos-aires`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ar/blog/cursos-inteligencia-artificial-chicos-argentina-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Perú
    {
      url: `${baseUrl}/pe`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pe/cursos-ia-ninos-peru`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pe/clases-ia-ninos-lima`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pe/blog/cursos-inteligencia-artificial-ninos-peru-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Chile
    {
      url: `${baseUrl}/cl`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cl/cursos-ia-ninos-chile`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cl/clases-ia-ninos-santiago`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cl/blog/cursos-inteligencia-artificial-ninos-chile-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // España
    {
      url: `${baseUrl}/es`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/cursos-ia-ninos-espana`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/clases-ia-ninos-madrid`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/es/blog/cursos-inteligencia-artificial-ninos-espana-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // USA (Latinos)
    {
      url: `${baseUrl}/us`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/us/cursos-ia-ninos-latinos-usa`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/us/clases-ia-ninos-miami`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/us/blog/cursos-inteligencia-artificial-ninos-latinos-usa-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Uruguay
    {
      url: `${baseUrl}/uy`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/uy/cursos-ia-ninos-uruguay`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/uy/clases-ia-ninos-montevideo`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/uy/blog/cursos-inteligencia-artificial-ninos-uruguay-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Panamá
    {
      url: `${baseUrl}/pa`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pa/cursos-ia-ninos-panama`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pa/clases-ia-ninos-panama-city`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pa/blog/cursos-inteligencia-artificial-ninos-panama-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Costa Rica
    {
      url: `${baseUrl}/cr`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cr/cursos-ia-ninos-costa-rica`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cr/clases-ia-ninos-san-jose`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cr/blog/cursos-inteligencia-artificial-ninos-costa-rica-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // República Dominicana
    {
      url: `${baseUrl}/do`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/do/cursos-ia-ninos-republica-dominicana`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/do/clases-ia-ninos-santo-domingo`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/do/blog/cursos-inteligencia-artificial-ninos-republica-dominicana-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Honduras
    {
      url: `${baseUrl}/hn`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hn/cursos-ia-ninos-honduras`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hn/clases-ia-ninos-tegucigalpa`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // El Salvador
    {
      url: `${baseUrl}/sv`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sv/cursos-ia-ninos-el-salvador`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sv/clases-ia-ninos-san-salvador`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // Guatemala
    {
      url: `${baseUrl}/gt`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gt/cursos-ia-ninos-guatemala`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gt/clases-ia-ninos-ciudad-guatemala`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // Paraguay
    {
      url: `${baseUrl}/py`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/py/cursos-ia-ninos-paraguay`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/py/clases-ia-ninos-asuncion`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // Ecuador
    {
      url: `${baseUrl}/ec`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ec/cursos-ia-ninos-ecuador`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ec/clases-ia-ninos-quito`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // Bolivia
    {
      url: `${baseUrl}/bo`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bo/cursos-ia-ninos-bolivia`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bo/clases-ia-ninos-la-paz`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // Páginas de pago
    {
      url: `${baseUrl}/pagar`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    // Venezuela
    {
      url: `${baseUrl}/ve`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ve/cursos-ia-ninos-venezuela`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ve/clases-ia-ninos-caracas`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ve/blog/cursos-inteligencia-artificial-ninos-venezuela-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Nicaragua
    {
      url: `${baseUrl}/ni`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ni/cursos-ia-ninos-nicaragua`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ni/clases-ia-ninos-managua`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // Puerto Rico
    {
      url: `${baseUrl}/pr`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pr/cursos-ia-ninos-puerto-rico`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pr/clases-ia-ninos-san-juan`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Guinea Ecuatorial
    {
      url: `${baseUrl}/gq`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gq/cursos-ia-ninos-guinea-ecuatorial`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gq/clases-ia-ninos-malabo`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ]
}
