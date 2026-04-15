import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Süti szabályzat | HungaryDarts',
  description:
    'A HungaryDarts süti (cookie) szabályzata. Tájékoztatás a weboldalon használt sütikről, azok céljáról és kezeléséről.',
}

const sections = [
  {
    title: 'Mi az a süti (cookie)?',
    content: [
      'A sütik kis szövegfájlok, amelyeket a weboldal a böngésződ segítségével helyez el a számítógépeden vagy más eszközödön, amikor meglátogatod az oldalt. A sütik lehetővé teszik, hogy a weboldal felismerje az eszközödet, megjegyezze a preferenciáidat, és jobb felhasználói élményt nyújtson.',
      'A sütiknek alapvetően két típusa létezik: munkamenet (session) sütik, amelyek az oldal elhagyásakor törlődnek, és tartós (persistent) sütik, amelyek meghatározott ideig megmaradnak az eszközödön.',
    ],
  },
  {
    title: 'Milyen sütiket használunk?',
    content: [
      'Weboldalaunk az alábbi süti kategóriákat alkalmazza:',
    ],
    list: [
      {
        name: 'Szigorúan szükséges sütik',
        desc: 'Ezek a sütik az oldal alapvető működéséhez szükségesek, nem tilthatók le. Ide tartozik a sütibeállítások tárolása, amely emlékezik arra, hogy elfogadtad-e a sütiszabályzatot.',
      },
      {
        name: 'Funkcionális sütik',
        desc: 'Lehetővé teszik, hogy az oldal megjegyezze a felhasználói döntéseidet (pl. preferenciák), és javítsák a felhasználói élményt. Ezek a sütik nem gyűjtenek személyazonosításra alkalmas adatokat.',
      },
      {
        name: 'Analitikai sütik',
        desc: 'Segítenek megérteni, hogyan interakcióba lép a látogató az oldallal, összeszámlálják a látogatásokat és a forgalmi forrásokat. Az összegyűjtött adatok aggregáltak és névtelenek.',
      },
    ],
  },
  {
    title: 'Hogyan kezeljük a sütiket?',
    content: [
      'Az oldal első látogatásakor egy sütibeállítási sávot jelenítünk meg, amelyen tájékoztatunk a használt sütikről. Ekkor döntési lehetőséget kínálunk: elfogadhatod az összes süti használatát, vagy visszautasíthatod a nem szükséges sütiket.',
      'Az elfogadást vagy visszautasítást egy munkamenet-sütiben tároljuk, amely legfeljebb 365 napig érvényes. Ez idő elteltével ismét megjelenik a sütibeállítási sáv.',
    ],
  },
  {
    title: 'Hogyan kezelheted a sütiket?',
    content: [
      'A böngésző beállításain keresztül bármikor törölheted a tárolt sütiket, és megakadályozhatod új sütik elhelyezését. Fontos megjegyezni, hogy bizonyos sütik letiltása befolyásolhatja az oldal egyes funkcióinak működését.',
      'Az alábbi böngészők esetén az alábbi módokon tudod kezelni a sütibeállításokat:',
    ],
    list: [
      { name: 'Google Chrome', desc: 'Beállítások > Adatvédelem és biztonság > Sütik és egyéb webhelyadatok' },
      { name: 'Mozilla Firefox', desc: 'Beállítások > Adatvédelem és biztonság > Sütik és webhelyadatok' },
      { name: 'Safari', desc: 'Beállítások > Adatvédelem > Sütik és webhelyadatok kezelése' },
      { name: 'Microsoft Edge', desc: 'Beállítások > Sütik és webhelyengedélyek > Sütik és tárolt adatok kezelése' },
    ],
  },
  {
    title: 'Harmadik felek sütijei',
    content: [
      'Weboldalaink esetenként harmadik felek által elhelyezett sütiket is tartalmazhat (pl. analitikai szolgáltatások). Ezeknek a sütiknek a kezelése az adott harmadik fél adatvédelmi szabályzata szerint történik, amelyekre nincs ráhatásunk.',
      'Kizárólag megbízható, az adatvédelmi előírásoknak megfelelő harmadik fél szolgáltatásokat alkalmazunk.',
    ],
  },
  {
    title: 'A süti szabályzat módosítása',
    content: [
      'Fenntartjuk a jogot a jelen süti szabályzat módosítására. A módosítások az oldalon való közzétételükkor lépnek hatályba. Javasoljuk, hogy rendszeresen tekintsd meg ezt az oldalt, hogy mindig naprakész információval rendelkezz.',
      'Jelen süti szabályzat utoljára 2026-ban frissült.',
    ],
  },
]

export default function SutikPage() {
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
            Süti szabályzat
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Utoljára frissítve: 2026
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="prose-like space-y-12">
          <p className="text-muted-foreground text-lg leading-relaxed border-l-2 border-primary pl-5 text-pretty">
            A hungarydarts.com weboldal (a továbbiakban: "Weboldal") üzemeltetője tájékoztatja a
            látogatókat az oldalon alkalmazott sütikről (cookie-k), azok céljáról és kezeléséről.
            Kérjük, olvasd el figyelmesen az alábbi tájékoztatót.
          </p>

          {sections.map((section, i) => (
            <div key={i} className="border-t border-border pt-10">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-5">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((para, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed text-pretty">
                    {para}
                  </p>
                ))}
              </div>
              {section.list && (
                <div className="mt-6 space-y-4">
                  {section.list.map((item, k) => (
                    <div key={k} className="bg-card border border-border p-5">
                      <h3 className="font-semibold text-foreground text-sm mb-1.5">{item.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="border-t border-border pt-10">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-5">
              Kapcsolat
            </h2>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-4">
              Ha kérdésed van a süti szabályzattal kapcsolatban, vedd fel velünk a kapcsolatot az
              alábbi elérhetőségen:
            </p>
            <div className="bg-card border border-border p-5 inline-block">
              <p className="text-sm text-foreground">
                E-mail:{' '}
                <span className="text-primary">info@hungarydarts.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
          <Link
            href="/adatvedelem"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-4 transition-all"
          >
            Adatvédelmi irányelvek
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
