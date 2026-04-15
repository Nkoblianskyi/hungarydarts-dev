import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'HungaryDarts - A darts sport Magyarországon',
  description:
    'A darts sport teljes körű bemutatása Magyarországon. Ismerd meg a darts történetét, szabályait, felszereléseit és technikáit.',
  keywords: 'darts, darts Magyarország, darts sport, darts szabályok, darts technika, darts felszerelés',
  authors: [{ name: 'HungaryDarts' }],
  openGraph: {
    title: 'HungaryDarts - A darts sport Magyarországon',
    description: 'A darts sport teljes körű bemutatása Magyarországon.',
    url: 'https://hungarydarts.com',
    siteName: 'HungaryDarts',
    locale: 'hu_HU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://hungarydarts.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
