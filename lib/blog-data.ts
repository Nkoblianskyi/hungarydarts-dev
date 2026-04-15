export interface BlogPost {
  slug: string
  category: string
  title: string
  excerpt: string
  image: string
  readTime: string
  content: { heading?: string; text: string }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'darts-fajtak',
    category: 'Játékstílusok',
    title: 'A darts játék különböző fajtái és formátumai',
    excerpt:
      'Az 501-től a Cricket-en át a különleges csapatos formátumokig: a darts számos izgalmas változatban játszható. Ismerd meg a legnépszerűbb formátumokat és azt, melyik illik hozzád.',
    image: '/images/blog-types.jpg',
    readTime: '5 perc',
    content: [
      {
        heading: 'A darts világa sokszínűbb, mint gondolnád',
        text: 'Amikor legtöbben dartst emlegetnek, az 501-es formátumra gondolnak. Ez valóban a legelterjedtebb és leginkább televízióban is látott változat, de közel sem az egyetlen. A darts rengeteg formátumban játszható, amelyek mindegyike más készségeket és stratégiákat igényel.',
      },
      {
        heading: '501 és 301: a klasszikus leszámoló formátumok',
        text: 'Az "x01" formátumokban a játékosok egy meghatározott pontszámról (501, 301, vagy akár 701 profi meccseken) számolnak le nullára. A 501 a leggyakoribb: az első dobótól a befejező duplaig minden egyes nyílnak stratégiai jelentősége van. A 301 gyorsabb tempót jelent, sokszor helyi meccseken alkalmazzák.',
      },
      {
        heading: 'Cricket: a stratégia és az erő sportja',
        text: 'A Cricket-ben nem a pontszám csökkentése a cél, hanem a 15-től 20-ig terjedő számok és a bullseye "lezárása". Mindenkit háromszor kell eltalálni, majd pontokat szerezni az adott számon, amíg az ellenfél be nem zárja. Csapatban és egyéniben egyaránt rendkívül szórakoztató és taktikus formátum.',
      },
      {
        heading: 'Around the Clock: tökéletes kezdőknek',
        text: 'Ebben a formátumban 1-től 20-ig sorban kell minden számot egyszer eltalálni. Nem igényel matematikát, tisztán az egész tábla eltalálásának képességét fejleszti. Kiváló edzési eszköz és szórakoztató játék barátokkal.',
      },
      {
        heading: 'Killer: csapatjáték izgalmakkal',
        text: 'A Killer formátumban minden játékos kap egy véletlenszerűen kijelölt számot, amelyet meg kell védenie. Mindenki először saját számát kell eltalálja, majd a többiekét kell megtámadnia. Veszít, aki elveszíti összes "életét". Ideális népes csoportok számára.',
      },
      {
        heading: 'Melyik formátumot választd?',
        text: 'Ha versenyszerűen szeretnél játszani, az 501 az alapja mindennek. Ha stratégiára és csapatszellemre vágysz, próbáld ki a Cricket-et. Ha csak szórakozni szeretnél barátokkal, az Around the Clock és a Killer rengeteg nevetést hoz. A legjobb megközelítés: próbálj ki mindent, és döntsd el, mi tetszik legjobban.',
      },
    ],
  },
  {
    slug: 'drotik-tipusai',
    category: 'Felszerelés',
    title: 'Drótikok típusai: acél vagy soft tip?',
    excerpt:
      'Az acélhegyű és a puha hegyű drótikok közt alapvető különbségek vannak. Melyik a megfelelő számodra? Segítünk a döntésben átfogó összehasonlításunkkal.',
    image: '/images/blog-types.jpg',
    readTime: '4 perc',
    content: [
      {
        heading: 'Két világ, két stílus',
        text: 'A darts világában az első és legfontosabb döntés általában az, hogy acélhegyű vagy puha hegyű dartot választasz. Ez nem csupán esztétikai döntés: a két típus különböző táblát, különböző játékkörnyezetet és részben különböző szabályokat jelent.',
      },
      {
        heading: 'Acélhegyű darts: a hagyományos választás',
        text: 'Az acélhegyű darts a professzionális versenyzés és a hagyományos kocsmajáték alapeszköze. Hegyes, fémhegyű nyilakat szisal rosttáblára kell dobni. Súlya általában 18-26 gramm között mozog, és a nyíl hegye visszacsavar, cserélhető. Előnye a professzionális hangulatban, hosszú élettartamban és a hagyományos játékélményben rejlik.',
      },
      {
        heading: 'Soft-tip darts: a modern alternatíva',
        text: 'A puha hegyű darts elektronikus táblákhoz készült. A hegy műanyag, és az apró lyukakba fúródva rögzül, a tábla automatikusan vezeti a pontozást. Súlya könnyebb, általában 14-20 gramm. Előnye az automatikus pontozás, a többféle beépített játékmód és a biztonságosabb otthoni felhasználás (nem jön ki a falból ha mellédob a gyerek).',
      },
      {
        heading: 'Mit válassz?',
        text: 'Ha versenyszerűen szeretnél játszani, az acélhegyű darts a megkerülhetetlen választás: minden profi verseny ezen alapul. Ha otthoni szórakoztatásra, közösségi játékra vagy automatikus pontozásra vágysz, a soft-tip remek kompromisszum. Sokan mindkettőt fenntartják: acélt komolyabb edzéshez, soft-tipet lazább játékhoz.',
      },
      {
        heading: 'A hordó anyagáról',
        text: 'A hordó anyaga drámaian befolyásolja az árat és a súlyeloszlást. A nikkel-ezüst ötvözetek megfizethetők, de vastagabb hordót igényelnek. A volfrám ötvözetek drámai sűrűsége vékonyabb, "profibb" hordót tesz lehetővé ugyanolyan súlynál, ami közelebb lehet a nyilak a táblán.',
      },
    ],
  },
  {
    slug: 'darts-tablak',
    category: 'Felszerelés',
    title: 'Darts táblák típusai és anyagai',
    excerpt:
      'Szisal, elektronikus vagy hagyományos tábla? A különböző táblatípusok különböző felhasználási módokra alkalmasak. Megmutatjuk a különbségeket.',
    image: '/images/blog-board.jpg',
    readTime: '6 perc',
    content: [
      {
        heading: 'A tábla: a darts lelke',
        text: 'A darts tábla nem csupán egy célpont, hanem a játék alapinfrastruktúrája. A megfelelő tábla kiválasztása meghatározza a játék minőségét, a tábla élettartamát és a játékélményt. Nézzük meg a főbb típusokat és azt, mire érdemes figyelni.',
      },
      {
        heading: 'Szisal tábla: a profi standard',
        text: 'A versenyszintű dartsban kizárólag szisal táblát fogadnak el. A szisal agávé növény rostjait sűrűn összekötözve, körkörösen elhelyezve alkotja a tábla felszínét. A rostok természetes öngyógyító tulajdonsággal rendelkeznek: a nyíl kihúzása után a rostok visszazárulnak, így a felszín sokkal tovább bírja az acélhegyű nyilak okozta terhelést.',
      },
      {
        heading: 'Mire figyelj szisal tábla vásárlásakor?',
        text: 'A tábla sűrűsége alapvető minőségi mutató. A sűrűbb szisal hosszabb élettartamot és kisebb drótelválasztókat jelent. A drót elválasztók vastagsága szintén fontos: a vékonyabb, lekerekített drótelválasztók csökkentik a "bounce out" (kiesés) esélyét, mivel a nyíl könnyebben a rostokba fúródik.',
      },
      {
        heading: 'Elektronikus táblák',
        text: 'Az elektronikus táblák apró lyukakkal ellátott kemény műanyag felszínből állnak, amelyekbe a puha hegyű nyilak fúródnak. A tábla automatikusan érzékeli és rögzíti a pontszámokat, és általában beépített kijelzőn vagy külső képernyőn jeleníti meg. Számos beépített játékmódot kínálnak, amelyek kényelmes szórakozást tesznek lehetővé.',
      },
      {
        heading: 'Hagyományos papír és szőtt táblák',
        text: 'Régebbi, olcsóbb kategória, ma már főleg gyermekek számára ajánlott. Papír vagy szőtt anyagból készülnek, gyorsan kopnak és nem versenyminőségűek. A tűhegyű műanyag drótikok jellemzőek hozzájuk. Nosztalgikus értékük van, de komoly játékra nem alkalmasak.',
      },
      {
        heading: 'Karbantartás és élettartam',
        text: 'A szisal tábla élettartamát növelhetjük, ha rendszeresen forgatjuk: a tábla egyes szegmensei különböző intenzitással terheltek (a tripla 20 messze a legtöbbet). A tábla negyedfordítása havonként egyenletesen elosztja a kopást. Soha ne tárold nedves helyen, mivel a nedvesség tönkreteszi a szisal rostokat.',
      },
    ],
  },
  {
    slug: 'versenyszabalyok',
    category: 'Szabályok',
    title: 'Versenyszerű darts: a hivatalos szabályok',
    excerpt:
      'Tervez versenyeken indulni? Ismerj meg minden fontos szabályt és elvárást, amit a szervezett dartsversenyeken betartanak. A szabályok ismerete alapvető.',
    image: '/images/blog-flights.jpg',
    readTime: '7 perc',
    content: [
      {
        heading: 'A versenyszerű darts világa',
        text: 'A szervezett dartsversenyeken más elvárások érvényesülnek, mint a kocsmában vagy otthon játszott partikban. Az egységes szabályok biztosítják az esélyegyenlőséget és a verseny tisztaságát. Ha versenyeken szeretnél indulni, érdemes ezeket már korábban megismerni és megszokni.',
      },
      {
        heading: 'Kötelező felszerelés és tábla specifikációk',
        text: 'Hivatalos versenyeken kizárólag szisal tábla elfogadott. A bullseye magassága pontosan 1,73 m, a dobóvonal 2,37 m-re van a tábla síkjától. A dobóvonalat jelölni kell, és semmilyen körülmények között nem szabad átlépni a dobás során.',
      },
      {
        heading: 'A dobás szabályai',
        text: 'Dobás közben a játékos lábának a dobóvonal mögött kell maradnia. Az oldalsó kilépés (ún. "side-stepping") elfogadott, amennyiben a láb nem lép át a vonalon. A három dobásból álló kör sorrendi szabályai kötelezőek, és minden dobást be kell fejezni.',
      },
      {
        heading: 'Pontozási vita és jelölők',
        text: 'Versenyeken általában független pontozó (marker) vezeti a pontszámokat. A marker feladata a pontos jelölés és az eredmény hangos kimondása. Vita esetén a marker döntése általában irányadó, de a játékosok kérhetik a bíró bevonását.',
      },
      {
        heading: 'A "bust" és az érvénytelen kör szabályai',
        text: 'Ha a kör során dobott pontok összege meghaladja a maradék pontszámot, az egész kör érvénytelen. A pontszám visszaáll a kör előtti értékre, és az ellenfél jön dobni. Ugyanez vonatkozik arra az esetre is, ha a játékos nullára dob, de nem duplán fejezi be (ahol ez a szabály érvényes).',
      },
      {
        heading: 'Magatartási elvárások',
        text: 'A darts közösség nagy becsben tartja a sportszerű viselkedést. Versenyhelyzetben nem zavarod az ellenfelet dobás közben, nem teszel megjegyzéseket, és tiszteletben tartod a bírói döntéseket. A verseny hangulatát mindenki viselkedése meghatározza.',
      },
      {
        heading: 'Hogyan készülj fel versenyekre?',
        text: 'A legfontosabb: rendszeres edzés versenyszerű körülmények között. Edd meg az edzésen a nyomást, ne csak kényelmes körülmények között dobj. Ismerj meg mindenféle végzőkombinációt (checkout), különösen a kettős mezőkre való befejezést. A szellemi felkészültség legalább annyit ér, mint a fizikai technika.',
      },
    ],
  },
]
