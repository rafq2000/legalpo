export const SITE_URL = "https://www.innovakidslatam.com"

export const countryCodes = [
    { code: "cl", name: "Chile" },
    { code: "mx", name: "México" },
    { code: "co", name: "Colombia" },
    { code: "ar", name: "Argentina" },
    { code: "pe", name: "Perú" },
    { code: "es", name: "España" },
    { code: "us", name: "USA" },
    { code: "ec", name: "Ecuador" },
    { code: "uy", name: "Uruguay" },
    { code: "cr", name: "Costa Rica" },
    { code: "pa", name: "Panamá" },
    { code: "do", name: "República Dominicana" },
    { code: "hn", name: "Honduras" },
    { code: "sv", name: "El Salvador" },
    { code: "gt", name: "Guatemala" },
    { code: "py", name: "Paraguay" },
    { code: "bo", name: "Bolivia" },
    { code: "ve", name: "Venezuela" },
    { code: "ni", name: "Nicaragua" },
    { code: "pr", name: "Puerto Rico" },
    { code: "gq", name: "Guinea Ecuatorial" },
]

// Map of specific sales page slugs per country to handle the "ninos" vs "chicos" difference (Argentina)
export const salesPageSlugs: Record<string, string> = {
    cl: "cursos-ia-ninos-chile",
    mx: "cursos-ia-ninos-mexico",
    co: "cursos-ia-ninos-colombia",
    ar: "cursos-ia-chicos-argentina", // Note: chicos vs ninos
    pe: "cursos-ia-ninos-peru",
    es: "cursos-ia-ninos-espana",
    us: "cursos-ia-ninos-latinos-usa",
    ec: "cursos-ia-ninos-ecuador",
    uy: "cursos-ia-ninos-uruguay",
    cr: "cursos-ia-ninos-costa-rica",
    pa: "cursos-ia-ninos-panama",
    do: "cursos-ia-ninos-republica-dominicana",
    hn: "cursos-ia-ninos-honduras",
    sv: "cursos-ia-ninos-el-salvador",
    gt: "cursos-ia-ninos-guatemala",
    py: "cursos-ia-ninos-paraguay",
    bo: "cursos-ia-ninos-bolivia",
    ve: "cursos-ia-ninos-venezuela",
    ni: "cursos-ia-ninos-nicaragua",
    pr: "cursos-ia-ninos-puerto-rico",
    gq: "cursos-ia-ninos-guinea-ecuatorial",
}

/**
 * Generates the 'languages' object for Next.js Metadata alternates.
 * Usage: matches the CURRENT page type (home, product, blog) across all country variants.
 */
export function generateHreflangs(pageType: "home" | "sales" | "city" | "magnet", extraSlug?: string) {
    const languages: Record<string, string> = {}

    countryCodes.forEach(({ code }) => {
        const locale = `es-${code.toUpperCase()}`
        let path = ""

        switch (pageType) {
            case "home":
                path = `/${code}`
                break
            case "sales":
                // Fallback for generic structure if not in map, though map covers all
                const slug = salesPageSlugs[code] || `cursos-ia-ninos-${code}`
                path = `/${code}/${slug}`
                break
            case "magnet":
                path = "/cursos-online-para-ninos" // Single global page
                break
            // Add other cases as needed
        }

        if (path) {
            languages[locale] = `${SITE_URL}${path}`
        }
    })

    // Add x-default
    if (pageType === "magnet") {
        languages["x-default"] = `${SITE_URL}/cursos-online-para-ninos`
    } else if (pageType === "home") {
        languages["x-default"] = `${SITE_URL}/`
    }

    return languages
}
