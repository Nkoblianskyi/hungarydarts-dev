import Image from 'next/image'
import Link from 'next/link'

export function HistorySection() {
  const milestones = [
    {
      year: '1300-as évek',
      title: 'A kezdetek',
      text: 'A darts ősei a középkori Angliában éltek, ahol katonák rövidített nyilakat dobtak fahordókra és fametszetekre.',
    },
    {
      year: '1800-as évek',
      title: 'Pubsport születik',
      text: 'A viktoriánus korszakban az angol kocsmák állandó szórakozásává vált, standardizált táblákkal és szabályokkal.',
    },
    {
      year: '1900-as évek',
      title: 'Szervezett versenyvilág',
      text: 'Megalakultak az első szövetségek, rögzítették a dobótávolságot és a pontozási rendszereket.',
    },
    {
      year: 'Napjainkban',
      title: 'Globális sport',
      text: 'A darts ma a világ egyik legnépszerűbb szabadidős sportja, profi bajnokságokkal és milliós nézőközönséggel.',
    },
  ]

  return (
    <section id="tortenet" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/history-darts.jpg"
              alt="Vintage darts tábla egy klasszikus kocsmában"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
          {/* Decorative frame */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 -z-10" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-background/90 backdrop-blur-sm border border-border p-4">
              <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-1">
                Több évszázados örökség
              </p>
              <p className="text-sm text-foreground font-medium">
                A darts az egyszerű szórakozásból vált globális precíziós sporttá
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Történelem
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            A darts sport eredete és fejlődése
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 text-pretty">
            A darts hét évszázados történelme az egyszerű katonai időtöltéstől a precizitást és koncentrációt
            igénylő modern sportig ível. Fedezd fel, hogyan vált a nyíldobás szórakozásból komoly
            versenysporrá.
          </p>

          {/* Timeline */}
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-1" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                    {m.year}
                  </span>
                  <h3 className="text-foreground font-semibold mt-1 mb-1">{m.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/tortenet"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-4 transition-all mt-2"
          >
            Teljes történet
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
