import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "InnovaKids LATAM - Cursos de IA para Niños",
        short_name: "InnovaKids",
        description: "Cursos online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años. Aprende a crear apps y videojuegos.",
        start_url: "/",
        display: "standalone",
        background_color: "#030712",
        theme_color: "#030712",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/icon-light-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                src: "/logo-innovakids-new.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable",
            },
            {
                src: "/logo-innovakids-new.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],
    }
}
