import Image from 'next/image'

interface PageHeroProps {
  category: string
  title: string
  subtitle: string
  image: string
}

export function PageHero({ category, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 min-h-[50vh] flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/95" />
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-primary" />
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">
            {category}
          </span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance max-w-3xl">
          {title}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed text-pretty">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
