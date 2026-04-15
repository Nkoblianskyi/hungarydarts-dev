import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog és cikkek | HungaryDarts',
  description:
    'Darts cikkek, útmutatók és tippek: a darts fajtáitól a felszerelésen át a technikáig és a versenyig.',
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      {/* Page header */}
      <section className="relative pt-32 pb-12 border-b border-border">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Blog
            </span>
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Cikkek és útmutatók
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl leading-relaxed text-pretty">
            Átfogó cikkek a darts sport minden aspektusáról, kezdőktől a tapasztalt játékosokig.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card border border-border hover:border-primary/50 transition-all mb-10"
        >
          <div className="relative aspect-video lg:aspect-auto min-h-[300px] overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-background/20" />
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold tracking-wide px-3 py-1">
              {featured.category}
            </span>
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors text-balance">
              {featured.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">{featured.excerpt}</p>
            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="text-xs text-muted-foreground/50">{featured.readTime} olvasás</span>
              <span className="text-sm font-semibold text-primary flex items-center gap-2">
                Olvasd el
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                  <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Rest */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-card border border-border hover:border-primary/50 transition-all flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/20" />
                <span className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-primary text-xs font-semibold tracking-wide px-3 py-1">
                  {post.category}
                </span>
              </div>
              <div className="flex-1 flex flex-col p-5">
                <h2 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 text-pretty leading-snug flex-1">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground/50">{post.readTime} olvasás</span>
                  <span className="text-xs font-semibold text-primary">Olvasd el</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
