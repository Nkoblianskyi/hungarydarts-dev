import type { Metadata } from 'next'
import Image from 'next/image'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Rólunk és kapcsolat | HungaryDarts',
  description:
    'Tudj meg többet a HungaryDartsról és vedd fel velünk a kapcsolatot. Küldetésünk a darts sport magyarországi közösségének építése.',
}

const values = [
  {
    title: 'Hiteles információk',
    text: 'Csak ellenőrzött, pontos információkat közlünk a darts sport minden aspektusáról. Sem reklám, sem szponzorált tartalom.',
  },
  {
    title: 'Közösségépítés',
    text: 'Célunk összehozni a magyarországi darts iránt érdeklődőket, és erősíteni a helyi dartsközösséget.',
  },
  {
    title: 'Nyitottság',
    text: 'Kezdőktől a tapasztalt versenyzőkig minden szintű játékosnak hasznos tartalmat igyekszünk nyújtani.',
  },
]

export default function RolunkPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 border-b border-border overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                Rólunk
              </span>
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground text-balance mb-6">
              A darts Magyarországon
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              A HungaryDarts Magyarország vezető online forrása azok számára, akik a darts sport
              iránt érdeklődnek. Célunk a darts kultúra terjesztése és a közösség erősítése.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Darts verseny Magyarországon"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/60" />
          </div>
        </div>
      </section>

      {/* Mission + Values */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                Küldetésünk
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Miért a HungaryDarts?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-pretty">
              <p>
                A HungaryDarts egy független, lelkes darts szerelmesek által létrehozott platform.
                Nem gyártunk, nem forgalmazunk, nem képviselünk semmilyen márkát. Egyetlen célunk
                a minőségi, hasznos tartalom nyújtása a magyarországi darts közösség számára.
              </p>
              <p>
                Hiszünk abban, hogy a darts egy olyan sport, amely ötvözi a precizitást, a
                stratégiát és a mentális fókuszt. Magyarországon egyre több ember fedezi fel ezt
                a csodálatos sportot, és mi itt vagyunk, hogy segítsük ezt az utat.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                Értékeink
              </span>
            </div>
            <div className="space-y-6">
              {values.map((v, i) => (
                <div key={i} className="border-l-2 border-primary/30 pl-5 hover:border-primary transition-colors">
                  <h3 className="font-semibold text-foreground mb-1">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-card border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                  Kapcsolat
                </span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6 text-balance">
                Vedd fel velünk a kapcsolatot
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty mb-8">
                Van kérdésed a darts sporttal kapcsolatban? Szeretnéd megosztani a tapasztalataidat,
                vagy javaslatod van a tartalmainkat illetően? Örömmel vesszük üzeneteidet.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 5l8 5 8-5M2 5v10a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide mb-0.5">E-mail</p>
                    <p className="text-sm text-foreground">info@hungarydarts.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
                      <path d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6z" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="10" cy="8" r="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide mb-0.5">Helyszín</p>
                    <p className="text-sm text-foreground">Magyarország</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
