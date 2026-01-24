import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://kineencasa.cl"

    // Comunas del sector oriente
    const comunas = [
        "las-condes",
        "vitacura",
        "providencia",
        "nunoa",
        "la-reina",
        "lo-barnechea",
    ]

    const comunaPages = comunas.map((comuna) => ({
        url: `${baseUrl}/kinesiologo-a-domicilio-${comuna}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...comunaPages,
    ]
}
