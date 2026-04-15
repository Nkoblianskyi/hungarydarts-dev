import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Darts szabályok | HungaryDarts',
  description:
    'A darts játék hivatalos szabályai: a pálya méretei, pontozás, formátumok és a versenyszerű játék követelményei.',
}

const basics = [
  {
    title: 'A tábla magassága',
    text: 'A tábla bullseye-jának középpontja pontosan 1,73 méter magasságban kell legyen a padlótól mérve. Ez az egyetlen elfogadott magasság a hivatalos játékhoz.',
  },
  {
    title: 'A dobóvonal távolsága',
    text: 'Az acélhegyű dartsoknál a dobóvonal 2,37 m-re van a tábla síkjától. Soft-tip darts esetén a távolság 2,44 m. A dobóvonalat nem szabad átlépni dobás közben.',
  },
  {
    title: 'Érvényes dobás',
    text: 'Csak az a dobás érvényes, amelynek a dartja a kör végéig a táblában marad. Ha a nyíl lepattan vagy kiesik, a dobás pontjai nem számítanak.',
  },
  {
    title: 'A körciklus',
    text: 'Egy körciklus három dobásból áll. A játékos az összes három dobása után összegyűjti a dartokat, és a következő játékos következik.',
  },
]

const scoring = [
  { zone: 'Bullseye (belső)', points: '50 pont', color: 'bg-primary' },
  { zone: 'Bull (külső)', points: '25 pont', color: 'bg-primary/60' },
  { zone: 'Dupla gyűrű', points: '2x szegmens érték', color: 'bg-muted' },
  { zone: 'Tripla gyűrű', points: '3x szegmens érték', color: 'bg-muted' },
  { zone: 'Szegmensek', points: '1-20 pont', color: 'bg-muted' },
]

const formats = [
  {
    name: '501',
    description:
      'A legnépszerűbb formátum. Mindkét játékos 501 pontról indul, és pontokat kell ledobni. A kör dupla mezőn kell végződjön (double out).',
  },
  {
    name: '301',
    description:
      'Rövidebb változat 301 ponttal. Gyorsabb menetekhez ideális, általában az ugyanazon dobóvonalból szervezett helyi meccseken kedvelt.',
  },
  {
    name: 'Cricket',
    description:
      'Stratégiai csatajáték, ahol a 15-20-as számokat és a bullseye-t kell háromszor eltalálni, majd lezárni. Csapatban és egyéniben egyaránt játszható.',
  },
  {
    name: 'Around the Clock',
    description:
      'Haladóknak és kezdőknek egyaránt ajánlott gyakorlóformátum: 1-től 20-ig sorban kell minden számot eltalálni.',
  },
]

export default function SzabalyokPage() {
  return (
    <>
      <PageHero
        category="Szabályok"
        title="A darts játék szabályai"
        subtitle="Minden, amit tudni kell a helyes játékhoz: a pálya méreteitől a pontozáson át a különböző formátumokig."
        image="/images/rules.jpg"
      />

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-20">
        {/* Basic rules */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Alapszabályok
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {basics.map((item, i) => (
              <div key={i} className="bg-card border border-border p-6 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scoring */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Pontozási zónák
            </span>
          </div>
          <div className="border border-border overflow-hidden">
            <div className="grid grid-cols-2 border-b border-border bg-secondary/50 px-6 py-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Zóna</span>
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Pontérték</span>
            </div>
            {scoring.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 px-6 py-4 border-b border-border last:border-0 hover:bg-secondary/30 transition-colors"
              >
                <span className="text-sm text-foreground font-medium">{row.zone}</span>
                <span className="text-sm text-primary font-semibold">{row.points}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Formats */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Játékformátumok
            </span>
          </div>
          <div className="space-y-4">
            {formats.map((format, i) => (
              <div key={i} className="flex gap-6 border-b border-border pb-6 last:border-0 last:pb-0">
                <div className="font-serif text-4xl font-bold text-primary/20 flex-shrink-0 w-16 leading-none">
                  {format.name}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{format.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{format.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pro tip */}
        <div className="bg-primary/10 border border-primary/30 p-8">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Fontos tudnivaló</p>
          <p className="text-foreground font-semibold text-lg mb-3">
            A &quot;bust&quot; szabály
          </p>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Ha egy játékos 501-nél kevesebb pontja van, de a soron következő dobásai összege
            meghaladja a maradék pontszámot, vagy pontosan nullára dob, de nem duplán fejezi be,
            az egész kör érvénytelen. A pontszám visszaáll a kör elején lévő értékre.
          </p>
        </div>
      </section>
    </>
  )
}
