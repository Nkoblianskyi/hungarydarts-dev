import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Adatvédelmi irányelvek | HungaryDarts',
  description:
    'A HungaryDarts adatvédelmi irányelvei. Tájékoztatás a személyes adatok gyűjtéséről, kezeléséről és védelméről a GDPR szabályozásnak megfelelően.',
}

const sections = [
  {
    title: 'Az adatkezelő azonosítása',
    content: [
      'Adatkezelő: HungaryDarts (hungarydarts.com)',
      'Elérhetőség: info@hungarydarts.com',
      'Jelen adatvédelmi irányelv a hungarydarts.com weboldal látogatóinak személyes adatainak kezelésére vonatkozik, az Európai Unió 2016/679 számú rendeletének (GDPR) és a vonatkozó magyar jogszabályoknak megfelelően.',
    ],
  },
  {
    title: 'Milyen adatokat gyűjtünk?',
    content: [
      'Weboldalunk az alábbi adatokat gyűjtheti:',
    ],
    list: [
      {
        name: 'Kapcsolatfelvételi adatok',
        desc: 'Amennyiben kapcsolatfelvételi űrlapunkon üzenetet küldöm, rögzítjük a megadott nevet, e-mail címet és az üzenet tartalmát. Ezek az adatok kizárólag a megkeresés megválaszolásához kerülnek felhasználásra.',
      },
      {
        name: 'Technikai adatok',
        desc: 'Az oldal látogatásakor automatikusan rögzítésre kerülhetnek technikai adatok, mint az IP-cím, a böngésző típusa, az operációs rendszer, a meglátogatott oldalak és az oldalon töltött idő. Ezek az adatok névtelenek és összesített formában kerülnek feldolgozásra.',
      },
      {
        name: 'Süti adatok',
        desc: 'Weboldalunk sütiket (cookie-kat) alkalmaz. A sütik kezeléséről részletes tájékoztatást a Süti szabályzatunkban találsz.',
      },
    ],
  },
  {
    title: 'Az adatkezelés céljai és jogalapja',
    content: [],
    list: [
      {
        name: 'Kapcsolatfelvételi megkeresések kezelése',
        desc: 'Cél: az üzeneted megválaszolása és a kapcsolat fenntartása. Jogalap: az érintett hozzájárulása (GDPR 6. cikk (1) a) pont).',
      },
      {
        name: 'Weboldal üzemeltetése és fejlesztése',
        desc: 'Cél: az oldal technikai működésének biztosítása, teljesítmény-elemzés és javítás. Jogalap: jogos érdek (GDPR 6. cikk (1) f) pont).',
      },
      {
        name: 'Analitikai célok',
        desc: 'Cél: az oldal látogatottságának és a felhasználói viselkedés elemzése az oldal fejlesztése érdekében. Jogalap: hozzájárulás (GDPR 6. cikk (1) a) pont).',
      },
    ],
  },
  {
    title: 'Adatmegőrzési idő',
    content: [
      'Az adatokat csak addig őrizzük meg, amíg az adatkezelés céljának megvalósításához szükséges:',
      'Kapcsolatfelvételi adatok: a megkeresés megválaszolását követő 12 hónapig, hacsak jogszabály hosszabb megőrzési időt nem ír elő.',
      'Technikai naplózási adatok: legfeljebb 90 napig.',
      'Süti adatok: az egyes sütikre vonatkozó megőrzési időkről a Süti szabályzatban tájékozódhatsz.',
    ],
  },
  {
    title: 'Az érintett jogai',
    content: [
      'A GDPR alapján az alábbi jogokat gyakorolhatod az általunk kezelt személyes adataiddal kapcsolatban:',
    ],
    list: [
      {
        name: 'Hozzáférés joga',
        desc: 'Tájékoztatást kérhetsz arról, hogy kezeljük-e személyes adataidat, és ha igen, milyen adatokat, milyen célból és mennyi ideig.',
      },
      {
        name: 'Helyesbítés joga',
        desc: 'Kérheted a pontatlan vagy hiányos személyes adataid helyesbítését.',
      },
      {
        name: 'Törlés joga ("elfeledtetés joga")',
        desc: 'Bizonyos feltételek teljesülése esetén kérheted személyes adataid törlését.',
      },
      {
        name: 'Adatkezelés korlátozásának joga',
        desc: 'Bizonyos esetekben kérheted, hogy ideiglenesen felfüggesszük személyes adataid kezelését.',
      },
      {
        name: 'Tiltakozás joga',
        desc: 'Tiltakozhatsz személyes adataid jogos érdek alapján történő kezelése ellen.',
      },
      {
        name: 'Hozzájárulás visszavonásának joga',
        desc: 'Ha az adatkezelés hozzájárulásodon alapul, azt bármikor visszavonhatod, a visszavonás előtti adatkezelés jogszerűségét ez nem érinti.',
      },
    ],
  },
  {
    title: 'Adatbiztonság',
    content: [
      'Megfelelő technikai és szervezési intézkedéseket alkalmazunk a személyes adatok védelme érdekében, a jogosulatlan hozzáférés, nyilvánosságra hozatal, módosítás vagy megsemmisítés megakadályozása céljából.',
      'Weboldalunk SSL/TLS titkosítást alkalmaz az adatok átvitele során, és rendszeresen felülvizsgáljuk biztonsági intézkedéseinket.',
    ],
  },
  {
    title: 'Adattovábbítás harmadik feleknek',
    content: [
      'Személyes adataidat nem adjuk el, nem adjuk bérbe és nem tesszük kereskedelmi célból hozzáférhetővé harmadik felek számára.',
      'Adatokat kizárólag az alábbi esetekben továbbíthatunk harmadik feleknek: ha arra jogszabály kötelez minket; ha ahhoz hozzájárultál; ha a weboldal üzemeltetéséhez elengedhetetlenül szükséges (pl. tárhelyszolgáltató), megfelelő adatfeldolgozási megállapodás keretében.',
    ],
  },
  {
    title: 'Panasz benyújtása',
    content: [
      'Ha úgy véled, hogy megsértettük az adatvédelmi jogaidat, panaszt nyújthatsz be a felügyeleti hatósághoz. Magyarországon ez a Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH), amelynek elérhetőségei a naih.hu weboldalon találhatók.',
      'Kérjük, hogy panasztétel előtt vedd fel velünk a kapcsolatot, és adjunk lehetőséget a probléma közvetlen rendezésére.',
    ],
  },
  {
    title: 'Az adatvédelmi irányelv módosítása',
    content: [
      'Fenntartjuk a jogot jelen adatvédelmi irányelv módosítására. A módosítások az oldalon való közzétételükkor lépnek hatályba. Lényeges változások esetén e-mailben értesítjük azokat, akik kapcsolatba léptek velünk.',
      'Jelen adatvédelmi irányelv utoljára 2026-ban frissült.',
    ],
  },
]

export default function AdatvedelemPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 border-b border-border overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary" />
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Jogi információk
            </span>
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground text-balance mb-4">
            Adatvédelmi irányelvek
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Utoljára frissítve: 2026
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-muted-foreground text-lg leading-relaxed border-l-2 border-primary pl-5 text-pretty mb-12">
          A HungaryDarts elkötelezett az általa kezelt személyes adatok védelme iránt. Jelen
          adatvédelmi irányelv tájékoztatást nyújt arról, hogy milyen adatokat gyűjtünk,
          azokat hogyan használjuk fel, és milyen jogok illetnek meg Téged az adataidra vonatkozóan.
        </p>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <div key={i} className="border-t border-border pt-10">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-5">
                {i + 1}. {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((para, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed text-pretty">
                    {para}
                  </p>
                ))}
              </div>
              {section.list && (
                <div className="mt-6 space-y-3">
                  {section.list.map((item, k) => (
                    <div key={k} className="bg-card border border-border p-5 border-l-2 border-l-primary/40">
                      <h3 className="font-semibold text-foreground text-sm mb-1.5">{item.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-10">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-5">
            Kapcsolat
          </h2>
          <p className="text-muted-foreground leading-relaxed text-pretty mb-6">
            Ha kérdésed, kérelmed vagy panaszod van a személyes adataid kezelésével kapcsolatban,
            kérjük, vedd fel velünk a kapcsolatot:
          </p>
          <div className="bg-card border border-border p-6 space-y-2">
            <p className="text-sm text-foreground">
              <span className="text-muted-foreground font-medium">E-mail: </span>
              <span className="text-primary">info@hungarydarts.com</span>
            </p>
            <p className="text-sm text-foreground">
              <span className="text-muted-foreground font-medium">Weboldal: </span>
              hungarydarts.com
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
          <Link
            href="/sutik"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-4 transition-all"
          >
            Süti szabályzat
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/rolunk"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary hover:gap-4 transition-all"
          >
            Kapcsolat
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
