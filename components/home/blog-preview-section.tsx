import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    slug: 'darts-fajtak',
    category: 'Játékstílusok',
    title: 'A darts játék különböző fajtái és formátumai',
    excerpt:
      'Az 501-től a Cricket-en át a különleges csapates formátumokig: a darts számos izgalmas változatban játszható. Ismerd meg a legnépszerűbb formátumokat.',
    image: '/images/blog-types.jpg',
    readTime: '5 perc',
  },
  {
    slug: 'drotik-tipusai',
    category: 'Felszerelés',
    title: 'Drótikok típusai: acél vagy soft tip?',
    excerpt:
      'Az acélhegyű és a puha hegyű drótikok közt alapvető különbségek vannak. Melyik a megfelelő számodra? Segítünk a döntésben.',
    image: '/images/blog-types.jpg',
    readTime: '4 perc',
  },
  {
    slug: 'darts-tablak',
    category: 'Felszerelés',
    title: 'Darts táblák típusai és anyagai',
    excerpt:
      'Szisal, elektronikus vagy hagyományos tábla? A különböző táblatípusok különböző felhasználási módokra alkalmasak.',
    image: '/images/blog-board.jpg',
    readTime: '6 perc',
  },
  {
    slug: 'versenyszabalyok',
    category: 'Szabályok',
    title: 'Versenyszerű darts: a hivatalos szabályok',
    excerpt:
      'Tervez versenyeken indulni? Ismerj meg minden fontos szabályt és elvárást, amit a szervezett dartsversenyeken betartanak.',
    image: '/images/blog-flights.jpg',
    readTime: '7 perc',
  },
]

export function BlogPreviewSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Blog és cikkek
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Legújabb cikkeink
          </h2>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-4 transition-all flex-shrink-0"
        >
          Összes cikk
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
            <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`group flex flex-col bg-card border border-border hover:border-primary/50 transition-all ${
              i === 0 ? 'md:col-span-2 md:row-span-1' : ''
            }`}
          >
            <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/9]' : 'aspect-video'}`}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors" />
              <span className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-primary text-xs font-semibold tracking-wide px-3 py-1">
                {post.category}
              </span>
            </div>
            <div className="flex flex-col flex-1 p-5">
              <h3 className={`font-semibold text-foreground group-hover:text-primary transition-colors mb-2 text-pretty leading-snug ${i === 0 ? 'text-lg' : 'text-sm'}`}>
                {post.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed flex-1 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground/50">{post.readTime} olvasás</span>
                <span className="text-xs font-semibold text-primary">Olvasd el</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
