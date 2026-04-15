import Link from 'next/link'

const footerLinks = {
  oldalak: [
    { href: '/', label: 'Főoldal' },
    { href: '/tortenet', label: 'Történet' },
    { href: '/szabalyok', label: 'Szabályok' },
    { href: '/felszereles', label: 'Felszerelés' },
    { href: '/technika', label: 'Technika' },
  ],
  blog: [
    { href: '/blog/darts-fajtak', label: 'Darts fajták' },
    { href: '/blog/drotik-tipusai', label: 'Drótikok típusai' },
    { href: '/blog/darts-tablak', label: 'Darts táblák' },
    { href: '/blog/versenyszabalyok', label: 'Versenyszabályok' },
  ],
  info: [
    { href: '/rolunk', label: 'Rólunk' },
    { href: '/sutik', label: 'Süti szabályzat' },
    { href: '/adatvedelem', label: 'Adatvédelmi irányelvek' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <circle cx="12" cy="12" r="2" fill="white" />
                  <circle cx="12" cy="12" r="5" strokeWidth="1.5" stroke="white" fill="none" />
                  <circle cx="12" cy="12" r="9" strokeWidth="1" stroke="white" fill="none" />
                </svg>
              </span>
              <span className="font-serif font-bold text-xl text-foreground">
                Hungary<span className="text-primary">Darts</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              Magyarország vezető online forrása a darts sport iránt érdeklődők számára. Ismerd meg
              a darts minden aspektusát.
            </p>
            <p className="text-muted-foreground/50 text-xs mt-6">
              &copy; {new Date().getFullYear()} HungaryDarts. Minden jog fenntartva.
            </p>
          </div>

          {/* Oldalak */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
              Oldalak
            </h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.oldalak.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
              Blog
            </h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.blog.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Információ */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
              Információ
            </h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/50">hungarydarts.com</p>
          <div className="flex items-center gap-4">
            <Link href="/sutik" className="text-xs text-muted-foreground/50 hover:text-primary transition-colors">
              Süti szabályzat
            </Link>
            <Link href="/adatvedelem" className="text-xs text-muted-foreground/50 hover:text-primary transition-colors">
              Adatvédelem
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
