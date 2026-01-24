import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { exercises } from '@/lib/exercises-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kineum.cl'

    // Static routes
    const routes = [
        '',
        '/ejercicios',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }))

    // Blog posts
    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Exercises (if you ever make individual pages for them, but for now the list is on /ejercicios)
    // Since exercises are currently all on one page, we don't need individual entries unless we made dynamic routes for them.
    // The user asked for "exercises" library, currently it's a single page /ejercicios. 
    // If we want to rank for specific exercises, it's better to have them as anchors or separate pages. 
    // Given the current structure, /ejercicios covers it.

    return [...routes, ...posts]
}
