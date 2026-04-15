import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Darts technika és tippek | HungaryDarts',
  description:
    'Professzionális darts technikák és tippek: fogás, testtartás, dobásmozdulat és mentális felkészülés a pontosabb játékhoz.',
}

const techniques = [
  {
    number: '01',
    title: 'A fogás (Grip)',
    content: [
      'A fogás a leginkább személyes eleme a darts technikának. Nincs egyetlen helyes módszer, de vannak alapelvek, amelyek segítenek.',
      'A hordót a mutatóujjad és a hüvelykujjad fogja meg elsőként, majd a középső ujjad stabilizálja. A gyűrűs- és kisujj lazán pihenhet a hordón, vagy kissé megemelhető.',
      'A legfontosabb: ne szorítsd meg erősen. A fogásnak könnyűnek és kényelmes kell lennie. Ha az izmaid feszülnek, az pontosságveszteséghez vezet.',
      'Kipróbálhatod a kétujjas, háromujjas vagy négyujjas fogást. Mindegyiknek megvannak a maga előnyei.',
    ],
  },
  {
    number: '02',
    title: 'Testtartás és pozicionálás',
    content: [
      'A helyes testtartás stabil alapot ad a pontos dobáshoz. A domináns lábad (a dobókezeddel azonos oldali) a dobóvonal előtt van, a másik láb mögötte.',
      'A lábak váll-szélességnyire állnak, a testsúlyod egyenletesen oszlik el. Enyhén előre dőlhetsz, de a törzsöd stabilan tartsd.',
      'A dobókezed könyöke körülbelül váll magasságban van, enyhén előre mutat. A könyök a dobásmozdulat tengelye legyen.',
      'Kerüld a felesleges mozgásokat: a minél minimálisabb testmozgás pontosabb és konzisztensebb dobást eredményez.',
    ],
  },
  {
    number: '03',
    title: 'A dobásmozdulat',
    content: [
      'A dobás három fázisból áll: visszahúzás (backswing), lendítés (throw) és befejező mozdulat (follow-through).',
      'A visszahúzásnál a kezed kb. fülig húzódik vissza. Tartsd a könyököd rögzítetten, csak az alkar mozog.',
      'A lendítés közben az alkar gyors, sima mozdulattal lendül előre. Az erő a csukló és az alkar gyorsulásából ered.',
      'A befejező mozdulat ugyanolyan fontos, mint a dobás maga. A kezed a célpont irányába mutasson, és tartsd meg a pozíciót egy pillanatig.',
    ],
  },
  {
    number: '04',
    title: 'Célzás és fókusz',
    content: [
      'A célzás során a szemed, a darts és a célpont egy vonalba kell essen. A domináns szemed az irányadó.',
      'Ne összpontosíts az egész táblára, hanem egyetlen pontos területre koncentrálj, például a tripla 20-ra.',
      'A légzés fontos szerepet játszik. Vegyél egy lassú, mély levegőt, majd dobás előtt enyhén tartsd vissza.',
      'A konzisztens célzási rutin kialakítása segít a dobásra koncentrálni és csökkenti az idegességet.',
    ],
  },
  {
    number: '05',
    title: 'Mentális felkészülés',
    content: [
      'A darts legalább annyira mentális sport, mint fizikai. A koncentráció és az érzelmi egyensúly alapvető.',
      'Alakíts ki egy dobás előtti rutint: ez segít az agynak bekapcsolni a megfelelő mentális állapotba.',
      'Ha rossz kört dobs, tanulj belőle, de ne hagyd, hogy befolyásolja a következő dobást. Minden dobás egy új lehetőség.',
      'Versenyhelyzetben különösen fontos, hogy a pontozásra és a következő lépésre összpontosíts, ne a nyomásra.',
    ],
  },
  {
    number: '06',
    title: 'Edzés és fejlődés',
    content: [
      'A rendszeres, tudatos edzés az egyetlen módja a fejlődésnek. Napi 15-30 perc hatékonyabb, mint hetente egyszer hosszan edzeni.',
      'Kezdj specifikus célpontok dobásával: tripla 20, dupla mezők, bullseye. Kövesd nyomon a teljesítményedet.',
      '"Around the Clock" edzés: 1-től 20-ig sorban kell minden számot eltalálni. Kiváló az egész tábla ismeretéhez.',
      'Rögzítsd az edzéseid eredményeit. A statisztikák segítenek azonosítani a gyenge pontjaidat és mérni a fejlődésedet.',
    ],
  },
]

export default function TechnikaPage() {
  return (
    <>
      <PageHero
        category="Technika és tippek"
        title="Hogyan dobjál pontosabban?"
        subtitle="Professzionális technikák, bevált tippek és gyakorlati tanácsok a darts sport minden szintjén lévő játékosok számára."
        image="/images/technique.jpg"
      />

      <section className="max-w-5xl mx-auto px-6 py-20">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 pb-20 border-b border-border">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                Alapelv
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              A precizitás tanulható
            </h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              A legjobb darts játékosok nem azért pontosak, mert különleges tehetségük van,
              hanem mert következetes technikát alakítottak ki és rendszeresen gyakorolják azt.
              A megfelelő alapok elsajátítása után a fejlődés gyors és folyamatos lehet.
            </p>
          </div>
          <div className="relative aspect-video lg:aspect-auto overflow-hidden">
            <Image
              src="/images/technique.jpg"
              alt="Helyes darts dobástechnika"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Techniques */}
        <div className="space-y-16">
          {techniques.map((tech) => (
            <div key={tech.number} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6">
              <div className="font-serif text-6xl font-bold text-border/40 leading-none">
                {tech.number}
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{tech.title}</h2>
                <div className="space-y-3">
                  {tech.content.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed text-sm text-pretty">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick tips */}
        <div className="mt-20 bg-card border border-border p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Gyors tippek kezdőknek
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Mindig ugyanolyan sebességgel dobj, ne próbálj erősen dobni',
              'Nézd a célpontot, ne a dartot repülés közben',
              'Tartsd a könyököd rögzítve dobás közben',
              'A befejező mozdulatot mindig fejezd be teljesen',
              'Edzés után hagyj pihenőnapokat az izmaidnak',
              'Videón rögzítsd a dobásaidat az elemzéshez',
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
