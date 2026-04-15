import Image from 'next/image'
import Link from 'next/link'

export function EquipmentSection() {
  const items = [
    {
      title: 'A darts nyíl',
      text: 'Négy részből áll: hegy, hordó (barrel), szár (shaft) és szárny (flight). Minden rész befolyásolja a röppályát és a pontosságot.',
    },
    {
      title: 'Darts tábla',
      text: 'A szabványos tábla 45,5 cm átmérőjű, szisal rostból készül. 20 számozott szegmenssel, dupla és tripla gyűrűkkel.',
    },
    {
      title: 'Szárnyak (Flights)',
      text: 'A szárnyak stabilizálják a repülést. Alakjuk és méretük befolyásolja a nyíl sebességét és ívét repülés közben.',
    },
    {
      title: 'Szár (Shaft)',
      text: 'A szár köti össze a hordót és a szárnyat. Hossza befolyásolja az egyensúlyt és a dobás pontosságát.',
    },
  ]

  return (
    <section id="felszereles" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Felszerelés
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Amit egy dartsjátékosnak tudnia kell a felszerelésről
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 text-pretty">
            A megfelelő felszerelés kiválasztása döntő hatással van a játékstílusodra és
            fejlődésedre. Ismerd meg az alapvető felszerelések jellemzőit és funkcióit.
          </p>

          <div className="space-y-0">
            {items.map((item, i) => (
              <div key={i} className="border-t border-border py-5 group">
                <div className="flex items-start gap-4">
                  <span className="text-primary/30 font-serif text-lg font-bold mt-0.5 w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>

          <Link
            href="/felszereles"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-4 transition-all mt-8"
          >
            Teljes felszerelés útmutató
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/equipment.jpg"
              alt="Professzionális darts felszerelés"
              fill
              className="object-cover"
            />
          </div>
          {/* Accent block */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 border border-primary/20 -z-10" />
          <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-secondary -z-10" />
        </div>
      </div>
    </section>
  )
}
