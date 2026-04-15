import Image from 'next/image'
import Link from 'next/link'

export function RulesSection() {
  const rules = [
    {
      num: '01',
      title: 'A tábla és a dobóvonal',
      text: 'A tábla közepe (bullseye) 1,73 m magasságban van a padlótól. A dobóvonal 2,37 m-re helyezkedik el a tábla síkjától.',
    },
    {
      num: '02',
      title: 'A 501 formátum',
      text: '501 pontról indulva kell pontosan nullára ledobni. A játéknak dupla mezőn kell végződnie a kör lezárásához.',
    },
    {
      num: '03',
      title: 'Érvényes dobás',
      text: 'A darts a kör végéig a táblában kell maradjon. Ha kiesik vagy lepattan, a dobás érvénytelen és a pont nem jár.',
    },
    {
      num: '04',
      title: 'Pontozás',
      text: 'A belső bullseye 50 pontot, a külső bull 25 pontot ér. A dupla gyűrű duplázza, a tripla gyűrű megháromszorozza a szegmens értékét.',
    },
  ]

  return (
    <section id="szabalyok" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Szabályok
            </span>
            <span className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground text-balance">
            A darts alapszabályai
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed text-pretty">
            Néhány egyszerű alapelv, amit minden játékosnak ismernie kell a darts sport helyes
            gyakorlásához.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Rules grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rules.map((rule) => (
              <div
                key={rule.num}
                className="bg-card border border-border p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="font-serif text-5xl font-bold text-border/60 group-hover:text-primary/20 transition-colors mb-3">
                  {rule.num}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{rule.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{rule.text}</p>
              </div>
            ))}
          </div>

          {/* Image + CTA */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/rules.jpg"
                alt="Darts tábla méretek és dobótávolság"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="bg-primary p-6">
              <p className="text-primary-foreground font-semibold mb-1">Részletes szabályok</p>
              <p className="text-primary-foreground/70 text-sm mb-4 leading-relaxed">
                Versenyformátumok, speciális helyzetek és a hivatalos szabályrendszer teljes bemutatása.
              </p>
              <Link
                href="/szabalyok"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground hover:gap-4 transition-all"
              >
                Szabályok oldala
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                  <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
