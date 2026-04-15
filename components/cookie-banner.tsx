'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('hd_cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('hd_cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('hd_cookie_consent', 'declined')
    setVisible(false)
  }

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      )}
    >
      <div className="bg-card/98 backdrop-blur-md border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex-1">
            <p className="text-sm text-foreground font-medium mb-1">Sütik használata</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Weboldalunk sütiket használ a jobb felhasználói élmény biztosítása érdekében.
              A sütik elfogadásával hozzájárulsz a{' '}
              <Link href="/sutik" className="text-primary underline underline-offset-2">
                süti szabályzatban
              </Link>{' '}
              leírtak szerint történő adatkezeléshez.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors px-4 py-2 border border-border rounded"
            >
              Elutasítás
            </button>
            <button
              onClick={accept}
              className="text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-5 py-2 rounded"
            >
              Elfogadás
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
