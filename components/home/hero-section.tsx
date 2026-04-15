'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export function HeroSection() {
  const taglineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = taglineRef.current
    if (!el) return
    let x = 0
    let frame: number
    const speed = 0.4
    const clone = el.querySelector('.ticker-clone')

    const animate = () => {
      x -= speed
      const w = el.scrollWidth / 2
      if (Math.abs(x) >= w) x = 0
      el.style.transform = `translateX(${x}px)`
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-darts.jpg"
          alt="Darts nyíl a célra repül"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/90" />
      </div>

      {/* Red vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary z-10" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Magyarország dartsközössége
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] text-foreground text-balance mb-8">
            A darts{' '}
            <span className="text-primary italic">tökéletessége</span>
            <br />
            Magyarországon
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-xl text-pretty mb-10">
            Fedezd fel a darts sport világát: a szabályoktól a technikákon át a felszerelésig,
            minden ami a precizitás és a fókusz sportjához szükséges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/tortenet"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors"
            >
              Fedezd fel a dartsot
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground text-sm font-semibold tracking-wide hover:border-primary hover:text-primary transition-colors"
            >
              Olvass cikkeket
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-6 sm:gap-10 max-w-xl">
          {[
            { num: '501', label: 'A klasszikus formátum' },
            { num: '2.37', label: 'Dobótávolság (m)' },
            { num: '180', label: 'Maximális pontszám' },
          ].map((stat) => (
            <div key={stat.num} className="border-l border-primary/40 pl-4">
              <div className="font-serif text-3xl font-bold text-foreground">{stat.num}</div>
              <div className="text-muted-foreground text-xs mt-1 leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 border-t border-border overflow-hidden bg-background/80 backdrop-blur-sm">
        <div className="py-3 overflow-hidden">
          <div ref={taglineRef} className="flex whitespace-nowrap will-change-transform">
            {[...Array(2)].map((_, i) => (
              <div key={i} className={`flex items-center gap-12 pr-12 ${i === 1 ? 'ticker-clone' : ''}`}>
                {['Darts', 'Precizitás', 'Fókusz', '501', 'Bullseye', 'Technika', 'Magyarország', 'Sport'].map((word) => (
                  <span key={word} className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/50 flex items-center gap-12">
                    {word}
                    <span className="w-1 h-1 rounded-full bg-primary/50 inline-block" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
