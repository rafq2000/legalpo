import { getPostBySlug } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BlogPostProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: BlogPostProps) {
    const post = getPostBySlug(params.slug)
    if (!post) return { title: "Artículo no encontrado" }

    return {
        title: `${post.title} | KINEUM Journal`,
        description: post.subtitle,
    }
}

export default function BlogPost({ params }: BlogPostProps) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    const Icon = post.icon

    return (
        <div className="min-h-screen bg-white">
            {/* Blog Header */}
            <header className="bg-slate-950 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <Link
                        href="/#journal"
                        className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Volver al Journal
                    </Link>

                    <div className="max-w-4xl">
                        <Badge className="mb-6 bg-amber-600 hover:bg-amber-700 border-none text-white px-4 py-1">
                            {post.category}
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 font-light leading-relaxed max-w-2xl">
                            {post.subtitle}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 border-t border-slate-800 pt-6">
                            <div className="flex items-center">
                                <div className="bg-slate-800 p-2 rounded-full mr-3">
                                    <Icon className="h-4 w-4 text-amber-500" />
                                </div>
                                <span className="font-medium text-slate-200">{post.author}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                {post.date}
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                {post.readTime}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <article className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <div
                        className="prose prose-lg prose-slate max-w-none 
            prose-headings:font-serif prose-headings:text-slate-900 
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-li:text-slate-600
            prose-strong:text-slate-900 prose-strong:font-bold
            prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-slate-800
            "
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* CTA Footer */}
                    <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 text-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">
                            ¿Le interesa aplicar estos conceptos en su recuperación?
                        </h3>
                        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                            Nuestros especialistas integran esta evidencia clínica en cada plan de tratamiento personalizado.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                                Agendar Evaluación
                            </Button>
                            <Button variant="outline" size="lg" className="border-slate-300">
                                <Share2 className="h-4 w-4 mr-2" />
                                Compartir Artículo
                            </Button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
