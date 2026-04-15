import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | HungaryDarts`,
    description: post.excerpt,
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Article hero */}
      <section className="relative pt-28 min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-background/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/98" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary z-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/blog"
              className="text-muted-foreground text-xs hover:text-primary transition-colors flex items-center gap-2"
            >
              <svg viewBox="0 0 20 20" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth="2">
                <path d="M16 10H4M10 4l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Blog
            </Link>
            <span className="text-border">/</span>
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              {post.category}
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{post.readTime} olvasás</span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-muted-foreground text-lg leading-relaxed mb-10 border-l-2 border-primary pl-5 text-pretty">
          {post.excerpt}
        </p>

        <div className="space-y-8">
          {post.content.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3 text-pretty">
                  {block.heading}
                </h2>
              )}
              <p className="text-muted-foreground leading-relaxed text-pretty">{block.text}</p>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-4 transition-all"
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
              <path d="M16 10H4M10 4l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Vissza a bloghoz
          </Link>
        </div>
      </article>

      {/* Related articles */}
      <section className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              További cikkek
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((relPost) => (
              <Link
                key={relPost.slug}
                href={`/blog/${relPost.slug}`}
                className="group flex flex-col bg-background border border-border hover:border-primary/50 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={relPost.image}
                    alt={relPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs text-primary font-semibold tracking-wide uppercase mb-2">
                    {relPost.category}
                  </span>
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors text-pretty leading-snug flex-1">
                    {relPost.title}
                  </h3>
                  <span className="text-xs text-muted-foreground/50 mt-3">{relPost.readTime} olvasás</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
