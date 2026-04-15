import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'A darts sport története | HungaryDarts',
  description:
    'A darts játék eredete a középkori Angliától napjainkig. Ismerd meg a sport fejlődésének teljes történetét.',
}

const timeline = [
  {
    period: '13. század',
    title: 'Középkori eredetek',
    text: 'A darts korai formája katonai körökben alakult ki Angliában. A katonák rövidített nyilakat dobtak fahordókra és kivágott fatörzsekre szórakozásból. Ezek az egyszerű célzójátékok töltötték ki a hosszú téli estéket a táborokban és a kocsmákban.',
  },
  {
    period: '16-17. század',
    title: 'Terjedés a kocsmákban',
    text: 'A játék az angol kocsmák szerves részévé vált. A körülvágott fatörzsek természetes gyűrűket alkottak, melyből kialakult a mai tábla prototípusa. A különböző régiókban különböző méretű táblákat és eltérő szabályokat alkalmaztak.',
  },
  {
    period: '18-19. század',
    title: 'Szabványosítás kezdete',
    text: 'A viktoriánus korszakban megindult a játék egységesítése. A tábla körkörös elrendezése fokozatosan standardizálódott, és az általánosan elfogadott számelrendezés is kialakult. A sport egyre inkább az ügyességet és a számolási képességet ötvözte.',
  },
  {
    period: '20. század eleje',
    title: 'Szövetségek megalakulása',
    text: 'Az 1920-as és 1930-as években sorra alakultak a helyi és regionális dartsszövetségek Nagy-Britanniában. A versenyrendszerek kialakulásával egységesítették a szabályokat: meghatározták a dobótávolságot és a tábla magasságát.',
  },
  {
    period: '1950-1970-es évek',
    title: 'Televíziós áttörés',
    text: 'A brit televíziós adások révén a darts hatalmas néptámogatottságot nyert. Az egyenes adásban közvetített bajnokságok igazi szórakoztató eseménnyé váltak, és a sport sztárjait széles körben megismerték.',
  },
  {
    period: '1980-as évek',
    title: 'Professzionális korszak',
    text: 'A professzionális dartsszövetségek megalakulásával a sport komoly versenyszintű szervezetet kapott. Megalapozódtak azok a bajnokságok és ranglisták, amelyek a mai napig meghatározzák a profi dartsvilágot.',
  },
  {
    period: 'Napjaink',
    title: 'Globális jelenség',
    text: 'A darts ma egy valóban globális sport: Európától Ázsiáig milliók játsszák és követik. Elektronikus táblákkal és online platformokkal a digitális korszakban is megújult, miközben hagyományos formájában is töretlen a népszerűsége.',
  },
]

export default function TortenetPage() {
  return (
    <>
      <PageHero
        category="Történelem"
        title="A darts sport eredete és fejlődése"
        subtitle="Hét évszázad, amely egyszerű katonai szórakozásból a világ egyik legnépszerűbb precíziós sportját hozta létre."
        image="/images/history-darts.jpg"
      />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div key={i} className="grid grid-cols-[140px_1fr] gap-8 border-b border-border py-10 last:border-0">
              <div>
                <span className="text-primary text-xs font-semibold tracking-widest uppercase">{item.period}</span>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-pretty">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing section */}
        <div className="mt-16 bg-card border border-border p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Magyarország és a darts
            </span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
            A darts Magyarországon
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
            Magyarországon a darts az 1980-as évektől terjedt el szélesebb körben, amikor az ország
            megnyílt a nyugat-európai kultúra és sportok felé. A kocsmák és szórakozóhelyek
            dartstáblákat állítottak fel, és amatőr ligák szerveződtek szerte az országban.
          </p>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Az ezredforduló után a sport tovább erősödött: helyi bajnokságok, regionális versenyrendszerek
            és a dartsközösségek egyre szervezett formában működnek. Az elektronikus táblák elterjedése
            új generációkat hozott a sporthoz, és ma Magyarország egyre aktívabb résztvevője az
            európai dartsközösségnek.
          </p>
        </div>
      </section>
    </>
  )
}
