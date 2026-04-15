import Image from 'next/image'
import Link from 'next/link'

export function TechniqueSection() {
  const tips = [
    {
      title: 'A fogás',
      text: 'Tartsd a dartot stabilan, de ne szorítsd össze. A fogásnak természetesnek kell lennie, hogy az izmaid ne feszüljenek meg dobás közben.',
    },
    {
      title: 'Testtartás',
      text: 'A lábak váll-szélességnyire állnak, a domináns láb előre. A test súlya enyhén előre dől, a törzs viszonylag statikus marad.',
    },
    {
      title: 'A dobómozdulat',
      text: 'Csak a könyöktől mozdul a kar, a váll rögzített. A befejező mozdulatban a csukló enyhén lecsap, a kéz a célpont irányába mutat.',
    },
    {
      title: 'Koncentráció és rutin',
      text: 'Minden dobás előtt alakíts ki egy következetes rutint: célzás, légzés, dobás. A mentális fókusz legalább olyan fontos, mint a technika.',
    },
  ]

  return (
    <section id="technika" className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/technique.jpg"
                alt="Helyes darts dobástechnika"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-primary p-5">
                <p className="text-primary-foreground text-xs font-semibold tracking-widest uppercase mb-2">
                  Mesterfogás
                </p>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  A precizitás a következetes technikán és a tudatos edzésen alapszik.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                Technika és tippek
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Hogyan dobj pontosabban?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-pretty">
              A pontos dobás nem csak tehetség kérdése. Megfelelő technikával, tudatos edzéssel
              és mentális felkészüléssel bárki fejlesztheti a pontosságát.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tips.map((tip, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-primary/30 hover:border-primary transition-colors group">
                  <h3 className="font-semibold text-foreground mb-1 text-sm group-hover:text-primary transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{tip.text}</p>
                </div>
              ))}
            </div>

            <Link
              href="/technika"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-4 transition-all mt-10"
            >
              Minden technika és tanács
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
