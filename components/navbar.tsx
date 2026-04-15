'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Főoldal' },
  { href: '/tortenet', label: 'Történet' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/felszereles', label: 'Felszerelés' },
  { href: '/technika', label: 'Technika' },
  { href: '/blog', label: 'Blog' },
  { href: '/rolunk', label: 'Rólunk' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="2" fill="white" stroke="none" />
              <circle cx="12" cy="12" r="5" strokeWidth="1.5" stroke="white" fill="none" />
              <circle cx="12" cy="12" r="9" strokeWidth="1" stroke="white" fill="none" />
            </svg>
          </span>
          <span className="font-serif font-bold text-xl text-foreground tracking-tight">
            Hungary<span className="text-primary">Darts</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-4 py-2 text-sm font-medium tracking-wide transition-colors',
                pathname === link.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü megnyitása"
        >
          <span
            className={cn(
              'block w-6 h-0.5 bg-foreground transition-all duration-300',
              menuOpen && 'rotate-45 translate-y-2'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-foreground transition-all duration-300',
              menuOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-foreground transition-all duration-300',
              menuOpen && '-rotate-45 -translate-y-2'
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-background border-b border-border',
          menuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'py-3 text-sm font-medium tracking-wide border-b border-border/50 last:border-0',
                pathname === link.href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
