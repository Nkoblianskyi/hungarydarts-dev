import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Darts felszerelés | HungaryDarts',
  description:
    'Átfogó útmutató a darts felszerelésekhez: nyilak, táblák, szárnyak, szárak és minden amit tudni kell a helyes választáshoz.',
}

const dartParts = [
  {
    part: 'Hegy (Point/Tip)',
    types: ['Acélhegyű (steel tip)', 'Puha hegyű (soft tip)'],
    text: 'Az acélhegyű darts hagyományos szisal táblához való, a puha hegyű darts elektronikus táblához. A hegy anyaga és formája befolyásolja a behatolást és a tábla kopását.',
  },
  {
    part: 'Hordó (Barrel)',
    types: ['Könnyű (12-16 g)', 'Közepes (18-24 g)', 'Nehéz (26-35 g)'],
    text: 'A hordó a darts fő súlyát adja. Anyaga általában volfrám ötvözet vagy nikkel-ezüst. A volfrám sűrűbb anyag, ezért vékonyabb hordót tesz lehetővé ugyanolyan súlynál.',
  },
  {
    part: 'Szár (Shaft)',
    types: ['Rövid', 'Közepes', 'Hosszú'],
    text: 'A szár köti össze a hordót és a szárnyat. Hossza befolyásolja az egyensúlyi pontot és a repülési ívet. Anyaga lehet nylon, műanyag, alumínium vagy karbon.',
  },
  {
    part: 'Szárny (Flight)',
    types: ['Standard', 'Slim', 'Körte alakú', 'Kite'],
    text: 'A szárny stabilizálja a repülést. Nagyobb szárny lassabb, de stabilabb repülést ad; kisebb szárny gyorsabb de érzékenyebb. Alakja alapvetően meghatározza a röppályát.',
  },
]

const boardTypes = [
  {
    type: 'Szisal tábla',
    text: 'A professzionális és legelterjedtebb táblatípus. Szisal agávé rostokból készül, amelyek természetes öngyógyító tulajdonsággal rendelkeznek. A darts kilövése után a rostok visszazárulnak, így a tábla hosszabb ideig tartós.',
  },
  {
    type: 'Elektronikus tábla',
    text: 'Apró lyukakkal ellátott műanyag felület, amelyre puha hegyű dartot kell dobni. Automatikus pontozást végez, különböző játékmódokat kínál és általában zajosabb. Kezdőknek és otthoni szórakozásra népszerű.',
  },
  {
    type: 'Hagyományos szizal tábla',
    text: 'Prémium változat sűrűbb szizalborítással, élesebb drót elválasztókkal és egyértelműbb szín-megjelöléssel. Versenyhasználatra ajánlott, hosszabb élettartammal.',
  },
]

export default function FelszerelesPage() {
  return (
    <>
      <PageHero
        category="Felszerelés"
        title="Darts felszerelések teljes útmutatója"
        subtitle="A nyíl felépítésétől a táblatípusokig: minden, ami a darts sport helyes felszereléséhez szükséges."
        image="/images/equipment.jpg"
      />

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-20">
        {/* Dart parts */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              A darts felépítése
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl text-pretty">
            Egy darts nyíl négy alapvető részből áll, amelyek mindegyike befolyásolja a nyíl
            repülési tulajdonságait és a játék pontosságát. A részek cserélhetők és kombinálhatók
            az egyéni preferenciáknak megfelelően.
          </p>
          <div className="space-y-6">
            {dartParts.map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-border pb-6 last:border-0">
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.part}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.types.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-secondary border border-border px-2 py-1 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weight guide */}
        <div className="bg-card border border-border p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Súlyválasztás útmutató
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                range: '12-16 g',
                label: 'Könnyű',
                text: 'Könnyedebb dobáshoz, magasabb röppályához. Kevesebb erőt igényel, de pontosabb irányítást követel.',
              },
              {
                range: '18-24 g',
                label: 'Közepes',
                text: 'A legnépszerűbb kategória. Kiegyensúlyozott repülési ív, megbocsátóbb az apró dobáshibákra.',
              },
              {
                range: '26-35 g',
                label: 'Nehéz',
                text: 'Erőteljesebb dobáshoz, egyenesebb röppályához. Stabilitást és konzisztenciát kínál.',
              },
            ].map((w) => (
              <div key={w.range} className="border-l-2 border-primary/40 pl-4">
                <div className="font-serif text-2xl font-bold text-foreground">{w.range}</div>
                <div className="text-primary text-xs font-semibold tracking-wide uppercase mb-2">{w.label}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Board types */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Darts tábla típusok
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {boardTypes.map((board, i) => (
              <div key={i} className="bg-card border border-border p-6 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-3">{board.type}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{board.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/equipment.jpg"
              alt="Professzionális darts felszerelés elrendezése"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                Tábla felszerelése
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Hogyan szerelik fel helyesen a táblát?
            </h3>
            <div className="space-y-3">
              {[
                'Bullseye magassága: 1,73 m a padlótól',
                'Acél darts dobótávolság: 2,37 m a tábla síkjától',
                'Soft-tip dobótávolság: 2,44 m a tábla síkjától',
                'A tábla mögé falvédőt ajánlott elhelyezni',
                'Megfelelő megvilágítás kulcsfontosságú',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-bold">{i + 1}</span>
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
